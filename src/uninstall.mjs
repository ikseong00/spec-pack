import fs from 'node:fs';
import path from 'node:path';
import { PACKAGE_NAME } from './config.mjs';
import { pruneEmptyAncestors, removePath } from './fs-utils.mjs';
import { resolveLayout } from './layout.mjs';

function readManifest(manifestPath) {
  if (!fs.existsSync(manifestPath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
}

export function uninstallPack(options) {
  const layout = resolveLayout({
    host: options.host,
    scope: options.scope || 'local',
    projectRoot: options.projectRoot
  });
  const manifest = readManifest(layout.manifestPath);

  if (!manifest) {
    throw new Error(`No ${PACKAGE_NAME} installation found at ${layout.manifestPath}.`);
  }

  const relativePaths = [...(manifest.managedPaths || [])].sort(
    (left, right) => right.length - left.length
  );

  if (options.dryRun) {
    return {
      status: 'dry-run',
      removedPaths: relativePaths
    };
  }

  for (const relativePath of relativePaths) {
    const absolutePath = path.join(layout.hostRoot, relativePath);
    removePath(absolutePath);
    pruneEmptyAncestors(path.dirname(absolutePath), layout.hostRoot);
  }

  removePath(layout.manifestPath);
  pruneEmptyAncestors(path.dirname(layout.manifestPath), layout.hostRoot);

  return {
    status: 'removed',
    removedPaths: relativePaths
  };
}
