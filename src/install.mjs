import fs from 'node:fs';
import path from 'node:path';
import {
  EXPORT_MANIFEST,
  PACKAGE_NAME,
  PACKAGE_VERSION,
  SOURCE_DIR
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
import { rewriteAgentContent, rewriteSkillContent } from './rewrite.mjs';

function readExistingManifest(layout) {
  if (!fs.existsSync(layout.manifestPath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(layout.manifestPath, 'utf8'));
}

function buildPlan(layout, prefix) {
  const sharedActions = [];
  const skillActions = [];
  const agentActions = [];

  const readmeSource = path.join(SOURCE_DIR, EXPORT_MANIFEST.packageReadme);
  sharedActions.push({
    kind: 'text',
    source: readmeSource,
    target: path.join(layout.sharedRoot, 'README.md'),
    transform: (content) => content
  });

  for (const directory of EXPORT_MANIFEST.sharedDirectories) {
    sharedActions.push({
      kind: 'directory',
      source: path.join(SOURCE_DIR, directory),
      target: path.join(layout.sharedRoot, directory)
    });
  }

  for (const filePath of EXPORT_MANIFEST.sharedFiles) {
    sharedActions.push({
      kind: 'file',
      source: path.join(SOURCE_DIR, filePath),
      target: path.join(layout.sharedRoot, filePath)
    });
  }

  const skillDirs = listDirectories(path.join(SOURCE_DIR, EXPORT_MANIFEST.skillsDirectory));
  for (const skillName of skillDirs) {
    const installedName = `${prefix}-${skillName}`;
    skillActions.push({
      kind: 'text',
      source: path.join(
        SOURCE_DIR,
        EXPORT_MANIFEST.skillsDirectory,
        skillName,
        'SKILL.md'
      ),
      target: path.join(layout.skillsRoot, installedName, 'SKILL.md'),
      transform: (content) =>
        rewriteSkillContent(content, {
          installedName,
          sharedDirName: EXPORT_MANIFEST.sharedDirName
        }),
      installedName
    });
  }

  const agentFiles = listFiles(path.join(SOURCE_DIR, EXPORT_MANIFEST.agentsDirectory)).filter(
    (name) => name.endsWith('.md') && name !== 'AGENTS.md'
  );
  for (const agentFile of agentFiles) {
    const baseName = agentFile.replace(/\.md$/, '');
    const installedName = `${prefix}-${baseName}.md`;
    agentActions.push({
      kind: 'text',
      source: path.join(SOURCE_DIR, EXPORT_MANIFEST.agentsDirectory, agentFile),
      target: path.join(layout.agentsRoot, installedName),
      transform: (content) =>
        rewriteAgentContent(content, {
          sharedDirName: EXPORT_MANIFEST.sharedDirName
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
  const prefix = options.prefix || EXPORT_MANIFEST.defaultPrefix;
  const layout = resolveLayout({
    host,
    scope,
    projectRoot: options.projectRoot
  });

  const existingManifest = readExistingManifest(layout);
  if (existingManifest && !options.force) {
    throw new Error(
      `Existing ${PACKAGE_NAME} installation found at ${layout.manifestPath}. Re-run with --force to replace it.`
    );
  }

  const plan = buildPlan(layout, prefix);
  const managedPaths = collectManagedPaths(layout, plan);
  const summary = {
    host,
    scope,
    prefix,
    hostRoot: layout.hostRoot,
    sharedRoot: layout.sharedRoot,
    skillsRoot: layout.skillsRoot,
    agentsRoot: layout.agentsRoot,
    skillCount: plan.skillActions.length,
    agentCount: plan.agentActions.length,
    managedPathCount: managedPaths.length
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
    scope,
    prefix,
    hostRoot: layout.hostRoot,
    sharedRoot: layout.sharedRoot,
    managedPaths
  };

  writeJsonFile(layout.manifestPath, installManifest);

  return {
    status: 'installed',
    summary,
    managedPaths
  };
}
