import fs from 'node:fs';
import path from 'node:path';
import { PACKAGE_NAME } from './config.mjs';
import { resolveLayout } from './layout.mjs';
import { DEFAULT_PACK_ID } from './packs.mjs';

function readManifest(manifestPath) {
  if (!fs.existsSync(manifestPath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
}

export function doctorPack(options) {
  const layout = resolveLayout({
    host: options.host,
    scope: options.scope || 'local',
    projectRoot: options.projectRoot,
    pack: options.pack || DEFAULT_PACK_ID
  });
  const manifest = readManifest(layout.manifestPath);

  if (!manifest) {
    return {
      status: 'not-installed',
      packageName: PACKAGE_NAME,
      host: options.host,
      pack: options.pack || DEFAULT_PACK_ID,
      scope: options.scope || 'local',
      hostRoot: layout.hostRoot,
      manifestPath: layout.manifestPath
    };
  }

  const missingPaths = (manifest.managedPaths || []).filter(
    (relativePath) => !fs.existsSync(path.join(layout.hostRoot, relativePath))
  );

  return {
    status: missingPaths.length === 0 ? 'ok' : 'degraded',
    packageName: PACKAGE_NAME,
    host: manifest.host,
    pack: manifest.pack || options.pack || DEFAULT_PACK_ID,
    scope: manifest.scope,
    prefix: manifest.prefix,
    packScope: manifest.packScope || 'unknown',
    installedAt: manifest.installedAt,
    hostRoot: layout.hostRoot,
    manifestPath: layout.manifestPath,
    installedCoreOutputs: manifest.installedCoreOutputs || [],
    excludedByDefault: manifest.excludedByDefault || [],
    hostInstallProfile: manifest.hostInstallProfile || null,
    managedPathCount: (manifest.managedPaths || []).length,
    missingPaths
  };
}
