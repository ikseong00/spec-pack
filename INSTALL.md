# Make Product Spec Install Guide

- 한국어: `INSTALL.md`
- English: [INSTALL.en.md](INSTALL.en.md)
- Overview: [README.md](README.md) · [README.en.md](README.en.md)

이 문서는 `make-product-spec` 설치와 기본 사용법만 빠르게 설명합니다.

## Supported Values

- `--host`: `codex`, `claude`
- `--scope`: `local`, `global`
- `--pack`: `prebuild`, `planning`

잘못된 값을 넣으면 CLI가 즉시 에러를 냅니다.

## Install

```bash
npm install -g @ikseongjo/make-product-spec
```

설치 확인:

```bash
make-product-spec help
```

1회성 실행:

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

기본값입니다. 아래 unified surface를 설치합니다.

- planning
- design
- rough architecture

설치 루트:

- Codex: `.codex/product-spec/`
- Claude: `.claude/product-spec/`

### planning

planning-only compatibility path입니다.

```bash
make-product-spec install --host codex --scope local --pack planning
```

설치 루트:

- Codex: `.codex/planning-pack/`
- Claude: `.claude/planning-pack/`

## Optional Flags

프로젝트 루트 지정:

```bash
make-product-spec install --host codex --scope local --project-root /path/to/project
```

강제 재설치:

```bash
make-product-spec install --host codex --scope local --force
```

planning pack prefix override:

```bash
make-product-spec install --host codex --scope local --prefix pp --pack planning
```

주의:

- `--pack prebuild`는 현재 custom `--prefix`를 지원하지 않습니다
- prebuild는 기본 prefix `product-spec`을 사용합니다

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

planning compatibility path:

```text
<project>/.codex/planning-pack/
<project>/.claude/planning-pack/
```

## Installed vs Excluded

포함:

- curated `references/`
- `templates/`
- host-visible `skills/`
- host-visible `agents/`

제외:

- `worked-examples/`
- `RALPH-LOOP-LOG.md`
- scenario matrices
- loop memory and loop protocol docs
- internal review reports
- internal authored bundles

## Related Docs

- overview: [README.md](README.md)
- host-aware install rules: [product-spec/HOST-AWARE-INSTALL-SURFACE.md](product-spec/HOST-AWARE-INSTALL-SURFACE.md)
- shipped surface: [product-spec/SHIPPING-SURFACE.md](product-spec/SHIPPING-SURFACE.md)
