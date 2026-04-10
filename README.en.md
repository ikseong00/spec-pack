# Make Product Spec

- English: `README.en.md`
- 한국어: [README.md](README.md)
- Install guide: [INSTALL.en.md](INSTALL.en.md) · [INSTALL.md](INSTALL.md)

`make-product-spec` is a host-aware installer CLI that turns product ideas into developer-facing product specs. After installation, it lays down a curated authoring surface under `.codex/product-spec` or `.claude/product-spec` with planning, design, and rough architecture guidance.

The canonical authoring source in this repository lives under [product-spec/](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec). Release boundaries are documented in [RELEASE-PLAN.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/docs/internal/RELEASE-PLAN.md). The shipped surface is defined in [SHIPPING-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/SHIPPING-SURFACE.md), host-aware install behavior in [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/HOST-AWARE-INSTALL-SURFACE.md), and pack status in [PACK-REGISTRY.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/PACK-REGISTRY.md).

## Quick Start

```bash
npm install -g @ikseongjo/make-product-spec
make-product-spec install --host codex --scope local
make-product-spec install --host claude --scope local
```

## What It Installs

- Default shipped pack: `prebuild`
- Shared install root: `product-spec/`
- Installed prefixes:
  - `product-spec-*` for the unified prebuild surface
  - `planning-*` for the planning compatibility path
- Supported hosts:
  - `codex`
  - `claude`
- Supported scopes:
  - `local`
  - `global`

## What Users Get

The default `prebuild` surface is designed to produce these output documents:

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
- `DATA-MODEL.md`
- `INTEGRATIONS.md`
- `NON-FUNCTIONAL.md`

## Notes

- The public CLI and npm package name is `make-product-spec`.
- The installed shared root is always named `product-spec`.
- Compatibility aliases remain available: `dev-spec`, `spec-pack`, and `planning-pack`.
- The shipped package excludes loop logs, scenario matrices, internal fixtures, and internal review artifacts.
- `planning` remains available as a smaller compatibility path. `design` and `architecture` are currently included inside the default `prebuild` surface.

## Codex Workspace Surface

When you open this repository itself as a Codex workspace, use these project-local entry points:

- root [AGENTS.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/AGENTS.md)
- Codex supplement [.codex/AGENTS.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/AGENTS.md)
- project config [.codex/config.toml](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/config.toml)
- sample Codex roles:
  - [.codex/agents/explorer.toml](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/agents/explorer.toml)
  - [.codex/agents/reviewer.toml](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/agents/reviewer.toml)
  - [.codex/agents/docs-researcher.toml](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/agents/docs-researcher.toml)
