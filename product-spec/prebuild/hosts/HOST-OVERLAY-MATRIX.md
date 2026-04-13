# Host Overlay Matrix

이 문서는 shipped `product-spec`에서 `codex`와 `claude` overlay가 무엇을 바꿀 수 있고, 무엇을 바꾸면 안 되는지 고정한다.

## Shared Canonical Layer

항상 동일해야 하는 것:

- `planning/`
- `design/`
- `architecture/`
- `references/`
- packaged `README.md`
- final developer-handoff doc contract

즉 아래 문서 의미는 host에 따라 달라지지 않는다.

- `PROJECT-THESIS.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `DESIGN.md`
- `EXECUTION-HANDOFF.md`
- `ARCHITECTURE.md`
- `STATE-PERMISSIONS.md`
- `DATA-TRUTH.md`
- `INTEGRATIONS.md`
- `NON-FUNCTIONAL.md`

## Overlay Layer

host overlay에서 달라도 되는 것:

- operator start wording
- first-step routing language
- agent invocation guidance
- compliance reminder wording
- host supplement reference path

host overlay에서 달라지면 안 되는 것:

- 기능 의미
- 정책 의미
- 상태 의미
- required visible state
- shared doc ownership
- developer-handoff boundary

## Codex Overlay

추천 역할:

- child-agent orchestration에 자연스러운 wrapper
- Codex supplement/role surface 연결
- workspace-local install reading path 정리

overlay files:

- `codex/README.md`
- source: `codex/skills/codex-entry/SKILL.md`
- installed: `skills/product-spec-codex-entry/SKILL.md`

## Claude Overlay

추천 역할:

- Claude-style operator phrasing
- stage route and ownership reminder를 대화형 workflow에 맞게 압축
- shared docs first-read path를 Claude surface에 맞게 안내

overlay files:

- `claude/README.md`
- source: `claude/skills/claude-entry/SKILL.md`
- installed: `skills/product-spec-claude-entry/SKILL.md`

## Packaging Rule

future export manifest는 아래를 만족해야 한다.

- shared layer 먼저 설치
- host overlay는 additive write만 허용
- host overlay가 shared file을 대체하려면 explicit allowlist가 있어야 한다
- overlay 없는 host는 install 불가로 처리한다
