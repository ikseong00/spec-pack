# Make Product Spec

- 한국어: `README.md`
- English: [README.en.md](README.en.md)
- Install guide: [INSTALL.md](INSTALL.md) · [INSTALL.en.md](INSTALL.en.md)

`make-product-spec`은 아이디어를 개발자가 구현 판단할 수 있는 수준의 제품 문서로 정리해 주는 CLI입니다.

## Who This Is For

- 개발 전에 기획 문서를 제대로 닫고 싶은 팀
- Claude 또는 Codex에서 같은 product spec surface를 쓰고 싶은 팀
- PRD, UX-IA, screen spec, design, rough architecture 문서를 한 번에 정리하고 싶은 팀

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

먼저 미리 보기만 하려면:

```bash
make-product-spec install --host codex --scope local --dry-run
```

## What Gets Created

기본 설치는 `prebuild` pack입니다. 설치 후 아래 루트가 생깁니다.

- Codex: `.codex/product-spec/`
- Claude: `.claude/product-spec/`

같이 설치되는 것:

- curated `references/`
- `templates/`
- host-visible `skills/`
- host-visible `agents/`

기본적으로 이 문서 묶음을 만들기 위한 surface입니다.

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
  - 기본값
  - planning, design, rough architecture를 묶은 unified surface
- `planning`
  - 더 작은 compatibility path
  - planning-only surface가 필요할 때만 사용

예:

```bash
make-product-spec install --host codex --scope local --pack planning
```

## Supported Values

- `--host`: `codex`, `claude`
- `--scope`: `local`, `global`
- `--pack`: `prebuild`, `planning`

잘못된 값을 넣으면 CLI가 즉시 에러를 냅니다.

## What It Does Not Ship

아래 내부 검증 산출물은 설치되지 않습니다.

- loop log
- scenario matrix
- internal fixtures
- worked examples
- internal review artifacts

## Docs

- install details: [INSTALL.md](INSTALL.md)
- shipped surface: [product-spec/SHIPPING-SURFACE.md](product-spec/SHIPPING-SURFACE.md)
- host-aware install rules: [product-spec/HOST-AWARE-INSTALL-SURFACE.md](product-spec/HOST-AWARE-INSTALL-SURFACE.md)
- pack registry: [product-spec/PACK-REGISTRY.md](product-spec/PACK-REGISTRY.md)

## Repo Workspace Surface

이 저장소 자체를 Codex workspace로 열 때는 아래 로컬 surface를 씁니다.

- root [AGENTS.md](AGENTS.md)
- Codex supplement [.codex/AGENTS.md](.codex/AGENTS.md)
- project config [.codex/config.toml](.codex/config.toml)
