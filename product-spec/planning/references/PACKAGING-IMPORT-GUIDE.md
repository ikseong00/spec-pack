# Packaging Import Guide

이 문서는 현재 planning pack을 실제 `.claude` / `.codex`에 설치할 때의 import 기준을 정리한다.

## 1. Export Principle

ship 대상은 `planning pack 본체`만이다.

포함:

- `skills/`
- `agents/`
- `references/`
- `templates/`
- packaged `README.md` from `PACKAGE-README.md`

제외:

- `worked-examples/`
- `RALPH-LOOP-LOG.md`
- transient review notes
- scenario runner output

## 2. `.claude` Import Intent

`.claude` 쪽에는 아래가 우선이다.

- 대화형 operator helper
- agent prompt docs
- routing helper docs
- references
- templates

추천 진입점:

- `README.md`
- `references/START-HERE.md`
- `references/DEFAULT-RESOLVED-ROUTES.md`
- `references/OPERATOR-STARTER.md`

## 3. `.codex` Import Intent

`.codex` 쪽에는 아래가 우선이다.

- `skills/`
- `agents/`
- `references/`
- `templates/`
- codex-friendly routing helper docs

추천 진입점:

- `README.md`
- `references/START-HERE.md`
- `references/CONTROL-PLANE.md`
- `references/PLANNING-DONE-CRITERIA.md`

## 4. Import Order

1. shared `planning-pack/README.md`를 둔다
2. `planning-pack/references/`를 넣는다
3. `planning-pack/templates/`를 넣는다
4. host root `skills/`를 넣는다
5. host root `agents/`를 넣는다

## 5. Operator-Facing Path After Import

install 후 operator가 보게 될 순서는 이게 가장 안전하다.

1. `README.md`
2. `references/START-HERE.md`
3. `references/DEFAULT-RESOLVED-ROUTES.md`
4. `references/OPERATOR-STARTER.md`
5. 필요 시 `references/CONTROL-PLANE.md`

## 6. Readiness Check Before Import

아래가 만족되면 install-ready로 본다.

- export/include set이 명확하다
- exclude/validation-only set이 명확하다
- starter/onboarding path가 명확하다
- templates와 references가 route semantics를 공유한다
- skills / agents / references / templates의 역할 경계가 명확하다

## 7. Current Execution

실제 install scaffold는 이미 있다.

- CLI: root `make-product-spec` binary
- compatibility alias: `planning-pack`
- local install: `<project>/.codex` 또는 `<project>/.claude`
- global install: `~/.codex` 또는 `~/.claude`
- shared root: `<hostRoot>/planning-pack`

publish 전에는 package naming / version policy만 추가로 정하면 된다.
