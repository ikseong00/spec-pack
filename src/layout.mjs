import os from 'node:os';
import path from 'node:path';
import { EXPORT_MANIFEST, getHostConfig } from './config.mjs';

export function resolveLayout({ host, scope, projectRoot }) {
  const hostConfig = getHostConfig(host);
  const resolvedProjectRoot = path.resolve(projectRoot || process.cwd());
  const homeRoot = os.homedir();

  const hostRoot =
    scope === 'global'
      ? path.join(homeRoot, hostConfig.rootDirName)
      : path.join(resolvedProjectRoot, hostConfig.rootDirName);

  return {
    host,
    scope,
    projectRoot: resolvedProjectRoot,
    hostRoot,
    sharedRoot: path.join(hostRoot, EXPORT_MANIFEST.sharedDirName),
    skillsRoot: path.join(hostRoot, hostConfig.skillsDirName),
    agentsRoot: path.join(hostRoot, hostConfig.agentsDirName),
    manifestPath: path.join(hostRoot, EXPORT_MANIFEST.sharedDirName, 'install-manifest.json')
  };
}
