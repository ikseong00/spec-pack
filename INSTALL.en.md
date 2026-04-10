# Make Product Spec Install Guide

- English: `INSTALL.en.md`
- 한국어: [INSTALL.md](INSTALL.md)
- Overview: [README.en.md](README.en.md) · [README.md](README.md)

This document explains how to install and use the `make-product-spec` CLI.

- package name: `@ikseongjo/make-product-spec`
- primary CLI: `make-product-spec`
- compatibility aliases: `dev-spec`, `spec-pack`, `planning-pack`
- default shipping boundary: `prebuild`
- host-aware install rules: [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/HOST-AWARE-INSTALL-SURFACE.md)

## Supported Targets

- hosts:
  - `codex`
  - `claude`
- scopes:
  - `local`
  - `global`

## Installation

### Global install

```bash
npm install -g @ikseongjo/make-product-spec
```

Then check the CLI:

```bash
make-product-spec help
```

### One-shot execution

```bash
npx @ikseongjo/make-product-spec install --host codex --scope local
```

## Common Commands

### Codex local install

```bash
make-product-spec install --host codex --scope local
```

Installs the unified `product-spec` surface into the current project's `.codex/` directory.

### Codex global install

```bash
make-product-spec install --host codex --scope global
```

Installs into `~/.codex/`.

### Claude local install

```bash
make-product-spec install --host claude --scope local
```

Installs the unified `product-spec` surface into the current project's `.claude/` directory.

### Claude global install

```bash
make-product-spec install --host claude --scope global
```

Installs into `~/.claude/`.

## Utility Commands

### dry-run

```bash
make-product-spec install --host codex --scope local --dry-run
```

### doctor

```bash
make-product-spec doctor --host codex --scope local
```

### uninstall

```bash
make-product-spec uninstall --host codex --scope local
```

## Optional Flags

### Custom project root

```bash
make-product-spec install --host codex --scope local --project-root /path/to/project
```

### Custom prefix

Each pack has its own default prefix.

- `prebuild` default prefix:
  - `product-spec`
- `planning` default prefix:
  - `planning`

Example:

```bash
make-product-spec install --host codex --scope local --prefix pp --pack planning
```

Notes:

- `--pack prebuild` does not currently support a custom `--prefix`
- prebuild always uses the default `product-spec` prefix

### Force reinstall

```bash
make-product-spec install --host codex --scope local --force
```

### Pack selection

Installable packs today are `prebuild` and `planning`.

```bash
make-product-spec install --host codex --scope local --pack prebuild
make-product-spec install --host codex --scope local --pack planning
```

## Install Layout

### Codex

Local example:

```text
<project>/.codex/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-codex-*/
  agents/product-spec-*.md
```

Global example:

```text
~/.codex/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-codex-*/
  agents/product-spec-*.md
```

### Claude

Local example:

```text
<project>/.claude/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-claude-*/
  agents/product-spec-*.md
```

Global example:

```text
~/.claude/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-claude-*/
  agents/product-spec-*.md
```

### Minimal planning compatibility path

Codex local:

```text
<project>/.codex/
  planning-pack/
  skills/planning-*/
  agents/planning-*.md
```

Claude local:

```text
<project>/.claude/
  planning-pack/
  skills/planning-*/
  agents/planning-*.md
```

## What Gets Installed

Included:

- curated `references/`
- `templates/`
- host-visible `skills/`
- host-visible authoring and audit `agents/`

Excluded:

- `worked-examples/`
- `RALPH-LOOP-LOG.md`
- scenario matrices
- loop memory and loop protocol docs
- internal review reports
- internal authored bundles

The default install surface is `prebuild`. It installs the same shared bundle for both hosts, then adds the host-specific entry skill overlay. `planning` remains available as a smaller compatibility path.

## First Reading Order

After a default install, read in this order:

1. `product-spec/README.md`
2. `product-spec/references/START-HERE.md`
3. `product-spec/planning/references/START-HERE.md`
4. `product-spec/design/references/START-HERE.md`
5. `product-spec/architecture/references/START-HERE.md`

If you install `--pack planning`, read in this order instead:

1. `planning-pack/README.md`
2. `planning-pack/references/START-HERE.md`
3. `planning-pack/references/DEFAULT-RESOLVED-ROUTES.md`
4. `planning-pack/references/OPERATOR-STARTER.md`
5. `planning-pack/references/CONTROL-PLANE.md` when needed

## Notes

- Public docs and default commands use the `make-product-spec` name.
- `dev-spec`, `spec-pack`, and `planning-pack` remain compatibility aliases.
- `--pack prebuild` is the default install surface.
- Host-specific dogfooding and install UX can still be extended later.

## Codex App + CLI Local Support

When you open this repository itself as a Codex workspace, the local surface is:

- root `AGENTS.md`
- `.codex/AGENTS.md`
- `.codex/config.toml`
- `.codex/agents/*.toml`

Quick start:

```bash
codex
```
