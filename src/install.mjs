import fs from 'node:fs';
import path from 'node:path';
import {
  PACKAGE_NAME,
  PACKAGE_VERSION
} from './config.mjs';
import {
  copyDirectoryRecursive,
  ensureDir,
  listDirectories,
  listFiles,
  relativeTo,
  removePath,
  writeJsonFile,
  writeTextFile
} from './fs-utils.mjs';
import { resolveLayout } from './layout.mjs';
import { DEFAULT_PACK_ID, getPackConfig } from './packs.mjs';
import {
  rewriteAgentContent,
  rewriteMarkdownContent,
  rewriteSkillContent
} from './rewrite.mjs';

function readExistingManifest(layout) {
  if (!fs.existsSync(layout.manifestPath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(layout.manifestPath, 'utf8'));
}

function buildPlan(layout, prefix, packConfig) {
  if (exportManifestVersion(packConfig.exportManifest) === '2-candidate') {
    return buildPlanV2(layout, packConfig);
  }

  return buildPlanV1(layout, prefix, packConfig);
}

function exportManifestVersion(exportManifest) {
  return exportManifest.manifestVersion || '1';
}

function normalizeInstalledName(prefix, name) {
  if (!prefix) {
    return name;
  }

  return name.startsWith(`${prefix}-`) ? name : `${prefix}-${name}`;
}

function buildPlanV1(layout, prefix, packConfig) {
  const { exportManifest, sourceDir } = packConfig;
  const sharedActions = [];
  const skillActions = [];
  const agentActions = [];

  const readmeSource = path.join(sourceDir, exportManifest.packageReadme);
  sharedActions.push({
    kind: 'text',
    source: readmeSource,
    target: path.join(layout.sharedRoot, 'README.md'),
    transform: (content) => content
  });

  for (const directory of exportManifest.sharedDirectories) {
    sharedActions.push({
      kind: 'directory',
      source: path.join(sourceDir, directory),
      target: path.join(layout.sharedRoot, directory)
    });
  }

  for (const filePath of exportManifest.sharedFiles) {
    sharedActions.push({
      kind: 'file',
      source: path.join(sourceDir, filePath),
      target: path.join(layout.sharedRoot, filePath)
    });
  }

  const skillDirs = listDirectories(path.join(sourceDir, exportManifest.skillsDirectory));
  for (const skillName of skillDirs) {
    const installedName = normalizeInstalledName(prefix, skillName);
    skillActions.push({
      kind: 'text',
      source: path.join(
        sourceDir,
        exportManifest.skillsDirectory,
        skillName,
        'SKILL.md'
      ),
      target: path.join(layout.skillsRoot, installedName, 'SKILL.md'),
      transform: (content) =>
        rewriteSkillContent(content, {
          installedName,
          sharedDirName: exportManifest.sharedDirName
        }),
      installedName
    });
  }

  const agentFiles = listFiles(path.join(sourceDir, exportManifest.agentsDirectory)).filter(
    (name) => name.endsWith('.md') && name !== 'AGENTS.md'
  );
  for (const agentFile of agentFiles) {
    const baseName = agentFile.replace(/\.md$/, '');
    const installedName = `${normalizeInstalledName(prefix, baseName)}.md`;
    agentActions.push({
      kind: 'text',
      source: path.join(sourceDir, exportManifest.agentsDirectory, agentFile),
      target: path.join(layout.agentsRoot, installedName),
      transform: (content) =>
        rewriteAgentContent(content, {
          sharedDirName: exportManifest.sharedDirName
        }),
      installedName
    });
  }

  return {
    sharedActions,
    skillActions,
    agentActions
  };
}

function resolveSourcePath(sourceDir, relativeSource) {
  return path.resolve(sourceDir, relativeSource);
}

function assertDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
    throw new Error(`Missing directory for pack export: ${dirPath}`);
  }
}

function assertFileExists(filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error(`Missing file for pack export: ${filePath}`);
  }
}

function selectIncludedNames(availableNames, includeNames, kindLabel, sourceBase) {
  if (!includeNames || includeNames.length === 0) {
    return availableNames;
  }

  const available = new Set(availableNames);
  for (const name of includeNames) {
    if (!available.has(name)) {
      throw new Error(`Missing ${kindLabel} "${name}" under ${sourceBase}`);
    }
  }

  return includeNames;
}

function buildPlanV2(layout, packConfig) {
  const { exportManifest, sourceDir } = packConfig;
  const hostProfile = exportManifest.hostProfiles?.[layout.host];

  if (!hostProfile) {
    throw new Error(`Pack "${packConfig.id}" has no host profile for "${layout.host}".`);
  }

  const sharedActions = [];
  const skillActions = [];
  const agentActions = [];

  for (const mapping of exportManifest.sharedMappings || []) {
    const source = resolveSourcePath(sourceDir, mapping.source);
    assertDirectoryExists(source);
    sharedActions.push({
      kind: 'directory',
      source,
      target: path.join(layout.sharedRoot, mapping.target)
    });
  }

  for (const fileMapping of exportManifest.sharedFiles || []) {
    const source = resolveSourcePath(sourceDir, fileMapping.source);
    assertFileExists(source);
    sharedActions.push({
      kind: 'file',
      source,
      target: path.join(layout.sharedRoot, fileMapping.target)
    });
  }

  for (const sourceConfig of hostProfile.skillSources || []) {
    const sourceBase = resolveSourcePath(sourceDir, sourceConfig.source);
    assertDirectoryExists(sourceBase);

    const skillNames = selectIncludedNames(
      listDirectories(sourceBase),
      sourceConfig.include,
      'skill directory',
      sourceBase
    );

    for (const skillName of skillNames) {
      const installedName = normalizeInstalledName(sourceConfig.prefix, skillName);
      const skillPath = path.join(sourceBase, skillName, 'SKILL.md');
      assertFileExists(skillPath);
      skillActions.push({
        kind: 'text',
        source: skillPath,
        target: path.join(layout.skillsRoot, installedName, 'SKILL.md'),
        transform: (content) =>
          rewriteMarkdownContent(content, {
            installedName,
            replacements: sourceConfig.replacements || []
          }),
        installedName
      });
    }
  }

  for (const sourceConfig of hostProfile.agentSources || []) {
    const sourceBase = resolveSourcePath(sourceDir, sourceConfig.source);
    assertDirectoryExists(sourceBase);
    const excludedNames = new Set(sourceConfig.exclude || []);

    const availableAgentFiles = listFiles(sourceBase).filter(
      (name) => name.endsWith('.md') && !excludedNames.has(name)
    );
    const agentFiles = selectIncludedNames(
      availableAgentFiles,
      sourceConfig.include,
      'agent file',
      sourceBase
    );

    for (const agentFile of agentFiles) {
      const baseName = agentFile.replace(/\.md$/, '');
      const installedName = `${normalizeInstalledName(sourceConfig.prefix, baseName)}.md`;
      agentActions.push({
        kind: 'text',
        source: path.join(sourceBase, agentFile),
        target: path.join(layout.agentsRoot, installedName),
        transform: (content) =>
          rewriteMarkdownContent(content, {
            replacements: sourceConfig.replacements || []
          }),
        installedName
      });
    }
  }

  return {
    sharedActions,
    skillActions,
    agentActions
  };
}

function getHostInstallProfile(exportManifest, host) {
  return exportManifest.hostInstallProfiles?.[host] || exportManifest.hostProfiles?.[host] || null;
}

function executeAction(action) {
  if (action.kind === 'directory') {
    copyDirectoryRecursive(action.source, action.target);
    return;
  }

  if (action.kind === 'file') {
    ensureDir(path.dirname(action.target));
    fs.copyFileSync(action.source, action.target);
    return;
  }

  if (action.kind === 'text') {
    const sourceContent = fs.readFileSync(action.source, 'utf8');
    writeTextFile(action.target, action.transform(sourceContent));
    return;
  }

  throw new Error(`Unsupported action kind: ${action.kind}`);
}

function collectManagedPaths(layout, plan) {
  const actions = [...plan.sharedActions, ...plan.skillActions, ...plan.agentActions];
  return actions.map((action) => relativeTo(layout.hostRoot, action.target));
}

function removeManagedPaths(layout, manifest) {
  const relativePaths = [...(manifest.managedPaths || [])].sort(
    (left, right) => right.length - left.length
  );

  for (const relativePath of relativePaths) {
    removePath(path.join(layout.hostRoot, relativePath));
  }

  removePath(layout.manifestPath);
}

export function installPack(options) {
  const host = options.host;
  const scope = options.scope || 'local';
  const packConfig = getPackConfig(options.pack || DEFAULT_PACK_ID);
  const { exportManifest } = packConfig;
  const manifestVersion = exportManifestVersion(exportManifest);

  if (
    manifestVersion === '2-candidate' &&
    options.prefix &&
    options.prefix !== exportManifest.defaultPrefix
  ) {
    throw new Error(
      `Custom --prefix is not supported for pack "${packConfig.id}" yet. Use the default prefix "${exportManifest.defaultPrefix}".`
    );
  }

  const prefix = options.prefix || exportManifest.defaultPrefix;
  const layout = resolveLayout({
    host,
    scope,
    projectRoot: options.projectRoot,
    pack: packConfig.id
  });

  const existingManifest = readExistingManifest(layout);
  if (existingManifest && !options.force) {
    throw new Error(
      `Existing ${PACKAGE_NAME} installation found at ${layout.manifestPath}. Re-run with --force to replace it.`
    );
  }

  const plan = buildPlan(layout, prefix, packConfig);
  const managedPaths = collectManagedPaths(layout, plan);
  const hostInstallProfile = getHostInstallProfile(exportManifest, host);
  const summary = {
    host,
    pack: packConfig.id,
    scope,
    prefix,
    packScope: exportManifest.packScope || 'unknown',
    hostRoot: layout.hostRoot,
    sharedRoot: layout.sharedRoot,
    skillsRoot: layout.skillsRoot,
    agentsRoot: layout.agentsRoot,
    skillCount: plan.skillActions.length,
    agentCount: plan.agentActions.length,
    managedPathCount: managedPaths.length,
    installedCoreOutputs: exportManifest.installedCoreOutputs || [],
    excludedByDefault: exportManifest.excludedByDefault || [],
    hostInstallProfile
  };

  if (options.dryRun) {
    return {
      status: 'dry-run',
      summary,
      managedPaths
    };
  }

  if (existingManifest) {
    removeManagedPaths(layout, existingManifest);
  }

  for (const action of [...plan.sharedActions, ...plan.skillActions, ...plan.agentActions]) {
    executeAction(action);
  }

  const installManifest = {
    packageName: PACKAGE_NAME,
    packageVersion: PACKAGE_VERSION,
    installedAt: new Date().toISOString(),
    host,
    pack: packConfig.id,
    scope,
    prefix,
    packScope: exportManifest.packScope || 'unknown',
    hostRoot: layout.hostRoot,
    sharedRoot: layout.sharedRoot,
    installedCoreOutputs: exportManifest.installedCoreOutputs || [],
    excludedByDefault: exportManifest.excludedByDefault || [],
    hostInstallProfile,
    managedPaths
  };

  writeJsonFile(layout.manifestPath, installManifest);

  return {
    status: 'installed',
    summary,
    managedPaths
  };
}
