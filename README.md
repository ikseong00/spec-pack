# Make Product Spec

`make-product-spec`은 아이디어를 개발자가 구현 판단할 수 있는 수준의 문서로 만들기 위한 host-aware installer CLI다. 설치하면 `.codex/product-spec` 또는 `.claude/product-spec` 아래에 planning, design, rough architecture authoring surface가 정리된다.

내부 canonical source는 [product-spec/](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec) 아래에 있고, 배포 기준은 [RELEASE-PLAN.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/docs/internal/RELEASE-PLAN.md)에 정리했다. 실제 shipping boundary는 [SHIPPING-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/SHIPPING-SURFACE.md), host-aware install 규칙은 [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/HOST-AWARE-INSTALL-SURFACE.md), pack 상태는 [PACK-REGISTRY.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/PACK-REGISTRY.md)에 있다.

설치 방법은 [INSTALL.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/INSTALL.md)를 본다.

## Quick Start

```bash
npm install -g @ikseongjo/make-product-spec
make-product-spec install --host codex --scope local
make-product-spec install --host claude --scope local
```

## What Users Get

- 기본 shipped pack: `prebuild`
- 설치 루트: `product-spec/`
- 설치 prefix:
  - `product-spec-*` for unified prebuild surface
  - `planning-*` for planning compatibility path
- scope:
  - `local`
  - `global`
- host:
  - `codex`
  - `claude`

## Notes

- 공개 CLI와 npm package 이름은 `make-product-spec`이다.
- 설치 후 공유 문서 루트 이름은 항상 `product-spec`이다.
- compatibility alias command는 `dev-spec`, `spec-pack`, `planning-pack`을 유지한다.
- shipped pack에는 loop log, scenario matrix, internal fixture, internal review 문서가 포함되지 않는다.
- `planning`은 compatibility minimal path로 남아 있고, `design`과 `architecture`는 현재 `prebuild`에 포함된다.

## Codex Surface

이 repo 자체를 Codex workspace로 열 때는 아래 project-local surface를 쓴다.

- root [AGENTS.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/AGENTS.md)
- Codex supplement [.codex/AGENTS.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/AGENTS.md)
- project config [.codex/config.toml](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/config.toml)
- Codex sample roles:
  - [.codex/agents/explorer.toml](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/agents/explorer.toml)
  - [.codex/agents/reviewer.toml](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/agents/reviewer.toml)
  - [.codex/agents/docs-researcher.toml](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/.codex/agents/docs-researcher.toml)

