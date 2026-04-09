import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import { doctorPack } from '../src/doctor.mjs';
import { installPack } from '../src/install.mjs';
import { uninstallPack } from '../src/uninstall.mjs';

function makeTempProject() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'planning-pack-test-'));
}

test('codex local install rewrites skill and agent links', () => {
  const projectRoot = makeTempProject();
  const result = installPack({
    host: 'codex',
    scope: 'local',
    projectRoot
  });

  assert.equal(result.status, 'installed');

  const skillPath = path.join(
    projectRoot,
    '.codex',
    'skills',
    'planning-idea-discovery',
    'SKILL.md'
  );
  const agentPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'planning-discovery-synthesizer.md'
  );
  const readmePath = path.join(projectRoot, '.codex', 'planning-pack', 'README.md');
  const manifestPath = path.join(
    projectRoot,
    '.codex',
    'planning-pack',
    'install-manifest.json'
  );

  assert.equal(fs.existsSync(skillPath), true);
  assert.equal(fs.existsSync(agentPath), true);
  assert.equal(fs.existsSync(readmePath), true);
  assert.equal(fs.existsSync(manifestPath), true);

  const skillContent = fs.readFileSync(skillPath, 'utf8');
  const agentContent = fs.readFileSync(agentPath, 'utf8');

  assert.match(skillContent, /^name: "planning-idea-discovery"$/m);
  assert.match(
    skillContent,
    /\.\.\/\.\.\/planning-pack\/references\/SKILL-AGENT-CONTRACTS\.md/
  );
  assert.match(
    agentContent,
    /\.\.\/planning-pack\/references\/SKILL-AGENT-CONTRACTS\.md/
  );
});

test('claude local dry run leaves filesystem untouched', () => {
  const projectRoot = makeTempProject();
  const result = installPack({
    host: 'claude',
    scope: 'local',
    projectRoot,
    dryRun: true
  });

  assert.equal(result.status, 'dry-run');
  assert.equal(fs.existsSync(path.join(projectRoot, '.claude')), false);
});

test('doctor reports installed codex local pack', () => {
  const projectRoot = makeTempProject();
  installPack({
    host: 'codex',
    scope: 'local',
    projectRoot
  });

  const result = doctorPack({
    host: 'codex',
    scope: 'local',
    projectRoot
  });

  assert.equal(result.status, 'ok');
  assert.equal(result.prefix, 'planning');
  assert.equal(result.missingPaths.length, 0);
});

test('uninstall removes managed codex local pack', () => {
  const projectRoot = makeTempProject();
  installPack({
    host: 'codex',
    scope: 'local',
    projectRoot
  });

  const result = uninstallPack({
    host: 'codex',
    scope: 'local',
    projectRoot
  });

  assert.equal(result.status, 'removed');
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'planning-pack', 'install-manifest.json')),
    false
  );
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'skills', 'planning-idea-discovery')),
    false
  );
});
