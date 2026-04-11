# Make Product Spec Install Guide

- English: `INSTALL.en.md`
- 한국어: [INSTALL.md](INSTALL.md)
- Overview: [README.en.md](README.en.md) · [README.md](README.md)

This document covers installation and the basic CLI surface for `make-product-spec`.

## Supported Values

- `--host`: `codex`, `claude`
- `--scope`: `local`, `global`
- `--pack`: `prebuild`, `planning`

The CLI fails fast on invalid values.

## Install

```bash
npm install -g @ikseongjo/make-product-spec
```

Check the CLI:

```bash
make-product-spec help
```

One-shot execution:

```bash
npx @ikseongjo/make-product-spec install --host codex --scope local
```

## Common Commands

Codex local install:

```bash
make-product-spec install --host codex --scope local
```

Claude local install:

```bash
make-product-spec install --host claude --scope local
```

Codex global install:

```bash
make-product-spec install --host codex --scope global
```

Claude global install:

```bash
make-product-spec install --host claude --scope global
```

Preview only:

```bash
make-product-spec install --host codex --scope local --dry-run
```

Health check:

```bash
make-product-spec doctor --host codex --scope local
```

Remove install:

```bash
make-product-spec uninstall --host codex --scope local
```

## Packs

### prebuild

This is the default. It installs a unified surface for:

- planning
- design
- rough architecture

Install roots:

- Codex: `.codex/product-spec/`
- Claude: `.claude/product-spec/`

### planning

This is the planning-only compatibility path.

```bash
make-product-spec install --host codex --scope local --pack planning
```

Install roots:

- Codex: `.codex/planning-pack/`
- Claude: `.claude/planning-pack/`

## Optional Flags

Custom project root:

```bash
make-product-spec install --host codex --scope local --project-root /path/to/project
```

Force reinstall:

```bash
make-product-spec install --host codex --scope local --force
```

Planning pack prefix override:

```bash
make-product-spec install --host codex --scope local --prefix pp --pack planning
```

Notes:

- `--pack prebuild` does not currently support a custom `--prefix`
- prebuild always uses the default `product-spec` prefix

## Install Layout

Codex local:

```text
<project>/.codex/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-codex-*/
  agents/product-spec-*.md
```

Claude local:

```text
<project>/.claude/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-claude-*/
  agents/product-spec-*.md
```

Planning compatibility path:

```text
<project>/.codex/planning-pack/
<project>/.claude/planning-pack/
```

## Installed vs Excluded

Included:

- curated `references/`
- `templates/`
- host-visible `skills/`
- host-visible `agents/`

Excluded:

- `worked-examples/`
- `RALPH-LOOP-LOG.md`
- scenario matrices
- loop memory and loop protocol docs
- internal review reports
- internal authored bundles

## Related Docs

- overview: [README.en.md](README.en.md)
- host-aware install rules: [product-spec/HOST-AWARE-INSTALL-SURFACE.md](product-spec/HOST-AWARE-INSTALL-SURFACE.md)
- shipped surface: [product-spec/SHIPPING-SURFACE.md](product-spec/SHIPPING-SURFACE.md)
