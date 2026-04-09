import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ROOT_DIR = path.resolve(__dirname, '..');
export const SOURCE_DIR = path.join(ROOT_DIR, 'template-pack', 'planning');
export const PACKAGE_JSON_PATH = path.join(ROOT_DIR, 'package.json');
export const PACKAGE_JSON = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
export const PACKAGE_NAME = PACKAGE_JSON.name;
export const PACKAGE_VERSION = PACKAGE_JSON.version;
export const EXPORT_MANIFEST = JSON.parse(
  fs.readFileSync(path.join(SOURCE_DIR, 'export-manifest.json'), 'utf8')
);

export const HOST_CONFIG = {
  codex: {
    rootDirName: '.codex',
    skillsDirName: 'skills',
    agentsDirName: 'agents'
  },
  claude: {
    rootDirName: '.claude',
    skillsDirName: 'skills',
    agentsDirName: 'agents'
  }
};

export function getHostConfig(host) {
  const config = HOST_CONFIG[host];
  if (!config) {
    throw new Error(`Unsupported host: ${host}`);
  }
  return config;
}
