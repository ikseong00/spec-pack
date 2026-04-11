import os from 'node:os';
import path from 'node:path';
import { assertSupportedScope, getHostConfig } from './config.mjs';
import { DEFAULT_PACK_ID, getPackConfig } from './packs.mjs';

export function resolveLayout({ host, scope, projectRoot, pack }) {
  const resolvedScope = scope || 'local';
  assertSupportedScope(resolvedScope);

  const hostConfig = getHostConfig(host);
  const packConfig = getPackConfig(pack || DEFAULT_PACK_ID);
  const resolvedProjectRoot = path.resolve(projectRoot || process.cwd());
  const homeRoot = os.homedir();

  const hostRoot =
    resolvedScope === 'global'
      ? path.join(homeRoot, hostConfig.rootDirName)
      : path.join(resolvedProjectRoot, hostConfig.rootDirName);

  return {
    host,
    pack: packConfig.id,
    scope: resolvedScope,
    projectRoot: resolvedProjectRoot,
    hostRoot,
    sharedRoot: path.join(hostRoot, packConfig.exportManifest.sharedDirName),
    skillsRoot: path.join(hostRoot, hostConfig.skillsDirName),
    agentsRoot: path.join(hostRoot, hostConfig.agentsDirName),
    manifestPath: path.join(
      hostRoot,
      packConfig.exportManifest.sharedDirName,
      'install-manifest.json'
    )
  };
}
