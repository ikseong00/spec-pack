import fs from 'node:fs';
import path from 'node:path';

export function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

export function listDirectories(dirPath) {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export function listFiles(dirPath) {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .sort();
}

export function copyDirectoryRecursive(sourceDir, targetDir) {
  ensureDir(targetDir);

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDirectoryRecursive(sourcePath, targetPath);
    } else {
      ensureDir(path.dirname(targetPath));
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

export function writeTextFile(targetPath, content) {
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, content, 'utf8');
}

export function writeJsonFile(targetPath, value) {
  writeTextFile(targetPath, `${JSON.stringify(value, null, 2)}\n`);
}

export function removePath(targetPath) {
  fs.rmSync(targetPath, { recursive: true, force: true });
}

export function pruneEmptyAncestors(startPath, stopPath) {
  let current = startPath;
  const stop = path.resolve(stopPath);

  while (current.startsWith(stop) && current !== stop) {
    if (!fs.existsSync(current)) {
      current = path.dirname(current);
      continue;
    }

    if (!fs.statSync(current).isDirectory()) {
      current = path.dirname(current);
      continue;
    }

    if (fs.readdirSync(current).length > 0) {
      break;
    }

    fs.rmdirSync(current);
    current = path.dirname(current);
  }
}

export function relativeTo(basePath, targetPath) {
  return path.relative(basePath, targetPath).replaceAll(path.sep, '/');
}
