import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { doctorPack } from '../src/doctor.mjs';
import { installPack } from '../src/install.mjs';
import { uninstallPack } from '../src/uninstall.mjs';

function makeTempProject() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'planning-pack-test-'));
}

test('make-product-spec CLI help is the public default and dev-spec/spec-pack/planning-pack remain aliases', () => {
  const primaryHelp = execFileSync(process.execPath, ['bin/make-product-spec.mjs', 'help'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  const devSpecHelp = execFileSync(process.execPath, ['bin/dev-spec.mjs', 'help'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  const specPackHelp = execFileSync(process.execPath, ['bin/spec-pack.mjs', 'help'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  const planningPackHelp = execFileSync(process.execPath, ['bin/planning-pack.mjs', 'help'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });

  assert.match(primaryHelp, /@ikseongjo\/make-product-spec v0\.1\.1/);
  assert.match(primaryHelp, /make-product-spec install --host <codex\|claude>/);
  assert.match(primaryHelp, /compatibility aliases: dev-spec, spec-pack, planning-pack/);
  assert.match(devSpecHelp, /make-product-spec install --host <codex\|claude>/);
  assert.match(specPackHelp, /make-product-spec install --host <codex\|claude>/);
  assert.match(planningPackHelp, /make-product-spec install --host <codex\|claude>/);
});

test('explicit planning codex local install rewrites skill and agent links', () => {
  const projectRoot = makeTempProject();
  const result = installPack({
    host: 'codex',
    pack: 'planning',
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

test('explicit planning pack dry run reports pack metadata', () => {
  const projectRoot = makeTempProject();
  const result = installPack({
    host: 'codex',
    pack: 'planning',
    scope: 'local',
    projectRoot,
    dryRun: true
  });

  assert.equal(result.status, 'dry-run');
  assert.equal(result.summary.pack, 'planning');
  assert.equal(result.summary.packScope, 'planning-only');
  assert.equal(result.summary.hostInstallProfile.hostRootDirName, '.codex');
  assert.equal(result.summary.hostInstallProfile.hostSpecificOverlayIncluded, false);
});

test('non-installable future pack is rejected', () => {
  const projectRoot = makeTempProject();

  assert.throws(
    () =>
      installPack({
        host: 'codex',
        pack: 'design',
        scope: 'local',
        projectRoot,
        dryRun: true
      }),
    /not installable yet/
  );
});

test('prebuild codex dry run reports unified pack metadata', () => {
  const projectRoot = makeTempProject();
  const result = installPack({
    host: 'codex',
    pack: 'prebuild',
    scope: 'local',
    projectRoot,
    dryRun: true
  });

  assert.equal(result.status, 'dry-run');
  assert.equal(result.summary.pack, 'prebuild');
  assert.equal(result.summary.packScope, 'product-spec-unified');
  assert.equal(result.summary.skillCount, 19);
  assert.equal(result.summary.agentCount, 15);
});

test('prebuild rejects custom prefix override for now', () => {
  const projectRoot = makeTempProject();

  assert.throws(
    () =>
      installPack({
        host: 'codex',
        pack: 'prebuild',
        scope: 'local',
        projectRoot,
        prefix: 'pb',
        dryRun: true
      }),
    /Custom --prefix is not supported/
  );
});

test('prebuild codex local install rewrites shared, stage, and overlay links', () => {
  const projectRoot = makeTempProject();
  const result = installPack({
    host: 'codex',
    pack: 'prebuild',
    scope: 'local',
    projectRoot
  });

  assert.equal(result.status, 'installed');

  const sharedReadmePath = path.join(projectRoot, '.codex', 'product-spec', 'README.md');
  const planningReadmePath = path.join(
    projectRoot,
    '.codex',
    'product-spec',
    'planning',
    'README.md'
  );
  const designStartPath = path.join(
    projectRoot,
    '.codex',
    'product-spec',
    'design',
    'references',
    'START-HERE.md'
  );
  const planningSkillPath = path.join(
    projectRoot,
    '.codex',
    'skills',
    'product-spec-planning-synthesis',
    'SKILL.md'
  );
  const designSkillPath = path.join(
    projectRoot,
    '.codex',
    'skills',
    'product-spec-design-synthesis',
    'SKILL.md'
  );
  const overlaySkillPath = path.join(
    projectRoot,
    '.codex',
    'skills',
    'product-spec-codex-entry',
    'SKILL.md'
  );
  const designAuditorPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'product-spec-design-pack-auditor.md'
  );
  const complianceAuditorPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'product-spec-compliance-auditor.md'
  );
  const prebuildRunnerPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'product-spec-scenario-runner.md'
  );
  const overlayAgentPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'product-spec-codex-loop-operator.md'
  );
  const prebuildScenarioMatrixPath = path.join(
    projectRoot,
    '.codex',
    'product-spec',
    'references',
    'PREBUILD-SCENARIO-MATRIX-50.md'
  );
  const prebuildLoopMemoryPath = path.join(
    projectRoot,
    '.codex',
    'product-spec',
    'references',
    'PREBUILD-LOOP-MEMORY.md'
  );

  assert.equal(fs.existsSync(sharedReadmePath), true);
  assert.equal(fs.existsSync(planningReadmePath), true);
  assert.equal(fs.existsSync(designStartPath), true);
  assert.equal(fs.existsSync(planningSkillPath), true);
  assert.equal(fs.existsSync(designSkillPath), true);
  assert.equal(fs.existsSync(overlaySkillPath), true);
  assert.equal(fs.existsSync(designAuditorPath), true);
  assert.equal(fs.existsSync(complianceAuditorPath), true);
  assert.equal(fs.existsSync(prebuildRunnerPath), false);
  assert.equal(fs.existsSync(overlayAgentPath), false);
  assert.equal(fs.existsSync(prebuildScenarioMatrixPath), false);
  assert.equal(fs.existsSync(prebuildLoopMemoryPath), false);

  const planningSkillContent = fs.readFileSync(planningSkillPath, 'utf8');
  const designSkillContent = fs.readFileSync(designSkillPath, 'utf8');
  const overlaySkillContent = fs.readFileSync(overlaySkillPath, 'utf8');
  const complianceAuditorContent = fs.readFileSync(complianceAuditorPath, 'utf8');

  assert.match(
    planningSkillContent,
    /\.\.\/\.\.\/product-spec\/planning\/references\/PLANNING-DONE-CRITERIA\.md/
  );
  assert.match(
    designSkillContent,
    /\.\.\/\.\.\/product-spec\/design\/references\/DESIGN-DONE-CRITERIA\.md/
  );
  assert.match(
    overlaySkillContent,
    /\.\.\/\.\.\/product-spec\/references\/START-HERE\.md/
  );
  assert.match(
    overlaySkillContent,
    /\.\.\/\.\.\/product-spec\/hosts\/codex\/README\.md/
  );
  assert.match(
    complianceAuditorContent,
    /invented owner\/source\/policy claims in shared docs/
  );
});

test('doctor reports installed default prebuild codex local pack', () => {
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
  assert.equal(result.pack, 'prebuild');
  assert.equal(result.prefix, 'product-spec');
  assert.equal(result.packScope, 'product-spec-unified');
  assert.equal(result.missingPaths.length, 0);
});

test('doctor reports installed prebuild codex local pack', () => {
  const projectRoot = makeTempProject();
  installPack({
    host: 'codex',
    pack: 'prebuild',
    scope: 'local',
    projectRoot
  });

  const result = doctorPack({
    host: 'codex',
    pack: 'prebuild',
    scope: 'local',
    projectRoot
  });

  assert.equal(result.status, 'ok');
  assert.equal(result.pack, 'prebuild');
  assert.equal(result.packScope, 'product-spec-unified');
  assert.equal(result.missingPaths.length, 0);
});

test('planning and prebuild can coexist in the same codex local scope', () => {
  const projectRoot = makeTempProject();

  installPack({
    host: 'codex',
    pack: 'planning',
    scope: 'local',
    projectRoot
  });

  installPack({
    host: 'codex',
    pack: 'prebuild',
    scope: 'local',
    projectRoot
  });

  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'skills', 'planning-idea-discovery', 'SKILL.md')),
    true
  );
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'skills', 'product-spec-idea-discovery', 'SKILL.md')),
    true
  );
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'planning-pack', 'install-manifest.json')),
    true
  );
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'product-spec', 'install-manifest.json')),
    true
  );
});

test('default uninstall removes managed codex local prebuild pack', () => {
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
    fs.existsSync(path.join(projectRoot, '.codex', 'product-spec', 'install-manifest.json')),
    false
  );
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'skills', 'product-spec-idea-discovery')),
    false
  );
});


test('CLI rejects invalid host, scope, and pack values', () => {
  assert.throws(
    () =>
      execFileSync(process.execPath, ['bin/make-product-spec.mjs', 'install', '--host', 'cursor'], {
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      }),
    /--host must be one of: codex, claude/
  );

  assert.throws(
    () =>
      execFileSync(process.execPath, ['bin/make-product-spec.mjs', 'install', '--host', 'codex', '--scope', 'team'], {
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      }),
    /--scope must be one of: local, global/
  );

  assert.throws(
    () =>
      execFileSync(process.execPath, ['bin/make-product-spec.mjs', 'install', '--host', 'codex', '--pack', 'architecture'], {
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      }),
    /--pack must be one of: planning, prebuild|--pack must be one of: prebuild, planning/
  );
});

test('installPack rejects unsupported scope directly', () => {
  const projectRoot = makeTempProject();

  assert.throws(
    () =>
      installPack({
        host: 'codex',
        scope: 'team',
        projectRoot,
        dryRun: true
      }),
    /Unsupported scope: team/
  );
});
