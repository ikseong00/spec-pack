import fs from 'node:fs';
import path from 'node:path';
import { ROOT_DIR } from './config.mjs';

const PACK_REGISTRY = {
  planning: {
    id: 'planning',
    sourceDir: path.join(ROOT_DIR, 'product-spec', 'planning'),
    shippingStatus: 'compatibility-minimal',
    installable: true
  },
  design: {
    id: 'design',
    sourceDir: path.join(ROOT_DIR, 'product-spec', 'design'),
    shippingStatus: 'validated-internal-candidate',
    installable: false
  },
  prebuild: {
    id: 'prebuild',
    sourceDir: path.join(ROOT_DIR, 'product-spec', 'prebuild'),
    shippingStatus: 'shipped',
    installable: true,
    manifestFile: 'export-manifest.candidate.json'
  },
  architecture: {
    id: 'architecture',
    sourceDir: path.join(ROOT_DIR, 'product-spec', 'architecture'),
    shippingStatus: 'validated-internal-candidate',
    installable: false
  }
};

const exportManifestCache = new Map();

export const DEFAULT_PACK_ID = 'prebuild';

export function listPackRegistry() {
  return Object.values(PACK_REGISTRY).map((pack) => ({
    id: pack.id,
    shippingStatus: pack.shippingStatus,
    installable: pack.installable
  }));
}

export function getPackConfig(packId = DEFAULT_PACK_ID) {
  const pack = PACK_REGISTRY[packId];
  if (!pack) {
    const known = Object.keys(PACK_REGISTRY).join(', ');
    throw new Error(`Unsupported pack: ${packId}. Known packs: ${known}`);
  }

  if (!pack.installable) {
    throw new Error(
      `Pack "${packId}" is not installable yet. Current shipped pack: ${DEFAULT_PACK_ID}.`
    );
  }

  if (!exportManifestCache.has(pack.id)) {
    const exportManifestPath = path.join(pack.sourceDir, pack.manifestFile || 'export-manifest.json');
    const exportManifest = JSON.parse(fs.readFileSync(exportManifestPath, 'utf8'));
    exportManifestCache.set(pack.id, {
      ...pack,
      exportManifestPath,
      exportManifest
    });
  }

  return exportManifestCache.get(pack.id);
}
