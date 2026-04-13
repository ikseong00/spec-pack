# Make Product Spec

- English: `README.en.md`
- 한국어: [README.md](README.md)
- Install guide: [INSTALL.en.md](INSTALL.en.md) · [INSTALL.md](INSTALL.md)

`make-product-spec` is a CLI that turns rough product ideas into product documents developers can build from.

## Who This Is For

- teams that want to close product decisions before implementation
- teams that want the same product-spec surface in Claude and Codex
- teams that want PRD, UX-IA, screen spec, design, and rough architecture docs in one flow

## Install

```bash
npm install -g @ikseongjo/make-product-spec
```

```bash
make-product-spec install --host codex --scope local
```

```bash
make-product-spec install --host claude --scope local
```

Preview only:

```bash
make-product-spec install --host codex --scope local --dry-run
```

## What Gets Created

The default install uses the `prebuild` pack. After install, one of these roots is created.

- Codex: `.codex/product-spec/`
- Claude: `.claude/product-spec/`

Installed surface:

- curated `references/`
- `templates/`
- host-visible `skills/`
- host-visible `agents/`

The default surface is meant to produce this document set.

- `PROJECT-THESIS.md`
- `PLANNING-RECORD.md`
- `RESEARCH.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`
- `DESIGN.md`
- `ARCHITECTURE.md`
- `STATE-PERMISSIONS.md`
- `DATA-TRUTH.md`
- `INTEGRATIONS.md`
- `NON-FUNCTIONAL.md`

## Pack Difference

- `prebuild`
  - default
  - unified surface for planning, design, and rough architecture
- `planning`
  - smaller compatibility path
  - use only when you want a planning-only surface

Example:

```bash
make-product-spec install --host codex --scope local --pack planning
```

## Supported Values

- `--host`: `codex`, `claude`
- `--scope`: `local`, `global`
- `--pack`: `prebuild`, `planning`

The CLI now fails fast on invalid values.

## What It Does Not Ship

These internal validation artifacts are excluded from installs.

- loop logs
- scenario matrices
- internal fixtures
- worked examples
- internal review artifacts

## Docs

- install details: [INSTALL.en.md](INSTALL.en.md)
- shipped surface: [product-spec/SHIPPING-SURFACE.md](product-spec/SHIPPING-SURFACE.md)
- host-aware install rules: [product-spec/HOST-AWARE-INSTALL-SURFACE.md](product-spec/HOST-AWARE-INSTALL-SURFACE.md)
- pack registry: [product-spec/PACK-REGISTRY.md](product-spec/PACK-REGISTRY.md)

## Repo Workspace Surface

When you open this repository itself as a Codex workspace, use these local entry points.

- root [AGENTS.md](AGENTS.md)
- Codex supplement [.codex/AGENTS.md](.codex/AGENTS.md)
- project config [.codex/config.toml](.codex/config.toml)
