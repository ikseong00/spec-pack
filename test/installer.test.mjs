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

test('spec-pack CLI help is the public default and planning-pack remains an alias', () => {
  const specHelp = execFileSync(process.execPath, ['bin/spec-pack.mjs', 'help'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  const aliasHelp = execFileSync(process.execPath, ['bin/planning-pack.mjs', 'help'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });

  assert.match(specHelp, /@ikseong\/spec-pack v0\.1\.0/);
  assert.match(specHelp, /spec-pack install --host <codex\|claude>/);
  assert.match(specHelp, /compatibility alias: planning-pack/);
  assert.match(aliasHelp, /spec-pack install --host <codex\|claude>/);
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
  assert.equal(result.summary.packScope, 'spec-unified');
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

  const sharedReadmePath = path.join(projectRoot, '.codex', 'spec-pack', 'README.md');
  const planningReadmePath = path.join(
    projectRoot,
    '.codex',
    'spec-pack',
    'planning',
    'README.md'
  );
  const designStartPath = path.join(
    projectRoot,
    '.codex',
    'spec-pack',
    'design',
    'references',
    'START-HERE.md'
  );
  const planningSkillPath = path.join(
    projectRoot,
    '.codex',
    'skills',
    'spec-planning-synthesis',
    'SKILL.md'
  );
  const designSkillPath = path.join(
    projectRoot,
    '.codex',
    'skills',
    'spec-design-synthesis',
    'SKILL.md'
  );
  const overlaySkillPath = path.join(
    projectRoot,
    '.codex',
    'skills',
    'spec-codex-entry',
    'SKILL.md'
  );
  const designAuditorPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'spec-design-pack-auditor.md'
  );
  const complianceAuditorPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'spec-compliance-auditor.md'
  );
  const prebuildRunnerPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'spec-scenario-runner.md'
  );
  const overlayAgentPath = path.join(
    projectRoot,
    '.codex',
    'agents',
    'spec-codex-loop-operator.md'
  );
  const prebuildScenarioMatrixPath = path.join(
    projectRoot,
    '.codex',
    'spec-pack',
    'references',
    'PREBUILD-SCENARIO-MATRIX-50.md'
  );
  const prebuildLoopMemoryPath = path.join(
    projectRoot,
    '.codex',
    'spec-pack',
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
    /\.\.\/\.\.\/spec-pack\/planning\/references\/PLANNING-DONE-CRITERIA\.md/
  );
  assert.match(
    designSkillContent,
    /\.\.\/\.\.\/spec-pack\/design\/references\/DESIGN-DONE-CRITERIA\.md/
  );
  assert.match(
    overlaySkillContent,
    /\.\.\/\.\.\/spec-pack\/references\/START-HERE\.md/
  );
  assert.match(
    overlaySkillContent,
    /\.\.\/\.\.\/spec-pack\/hosts\/codex\/README\.md/
  );
  assert.match(
    complianceAuditorContent,
    /shared doc에서 owner\/source\/policy invent/
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
  assert.equal(result.prefix, 'spec');
  assert.equal(result.packScope, 'spec-unified');
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
  assert.equal(result.packScope, 'spec-unified');
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
    fs.existsSync(path.join(projectRoot, '.codex', 'skills', 'spec-idea-discovery', 'SKILL.md')),
    true
  );
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'planning-pack', 'install-manifest.json')),
    true
  );
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'spec-pack', 'install-manifest.json')),
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
    fs.existsSync(path.join(projectRoot, '.codex', 'spec-pack', 'install-manifest.json')),
    false
  );
  assert.equal(
    fs.existsSync(path.join(projectRoot, '.codex', 'skills', 'spec-idea-discovery')),
    false
  );
});
