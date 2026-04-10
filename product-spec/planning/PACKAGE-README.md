# Planning Pack

이 디렉터리는 설치된 planning pack의 shared root다.

이 pack은 특정 프로젝트의 구현 템플릿이 아니라, 여러 서비스 프로젝트에서 공통으로 재사용하는 기획용 operating system이다.

## Included

- `references/`
- `templates/`
- shared `AGENTS.md`
- sibling host surfaces:
  - `../skills/`
  - `../agents/`

`skills/`와 `agents/`는 host root에 설치되고, 이 디렉터리는 그 공통 reference / template source of truth 역할을 한다.

중요:

- 현재 shipped surface는 `planning`만 포함한다
- `design`, `prebuild`, `architecture`는 이 package에 아직 포함되지 않는다
- loop log, internal fixture, validation-only artifact도 shipped default에 포함되지 않는다

## First Read

1. [references/START-HERE.md](references/START-HERE.md)
2. [references/DEFAULT-RESOLVED-ROUTES.md](references/DEFAULT-RESOLVED-ROUTES.md)
3. [references/OPERATOR-STARTER.md](references/OPERATOR-STARTER.md)
4. [references/CONTROL-PLANE.md](references/CONTROL-PLANE.md)
5. [references/PLANNING-DONE-CRITERIA.md](references/PLANNING-DONE-CRITERIA.md)

## Core Output Contract

이 pack은 최종적으로 아래 8개 코어 문서를 만들도록 설계되어 있다.

1. `PROJECT-THESIS.md`
2. `PLANNING-RECORD.md`
3. `RESEARCH.md`
4. `PRD.md`
5. `UX-IA.md`
6. `SCREEN-SPECS.md`
7. `BUSINESS-OPS.md`
8. `EXECUTION-HANDOFF.md`

자세한 책임 분리는 [references/CORE-DOCUMENT-SET.md](references/CORE-DOCUMENT-SET.md)를 따른다.

## Installed Layout

- shared pack root: `planning-pack/`
- skill surface: sibling `skills/<prefix>-<skill>/SKILL.md`
- agent surface: sibling `agents/<prefix>-<agent>.md`

설치 시 prefix를 바꿀 수 있고, shared references/templates는 이 디렉터리를 기준으로 상대경로가 연결된다.

## Current Shipping Boundary

포함:

- planning references
- planning templates
- planning skills
- planning agents

제외:

- worked examples
- validation-only notes
- internal loop logs
- design / prebuild / architecture surfaces

## Update Model

- planning 판단 기준이 바뀌면 `references/`를 먼저 수정한다
- 문서 skeleton이 바뀌면 `templates/`를 수정한다
- 질문 흐름과 stage contract가 바뀌면 `skills/`를 수정한다
- synthesis / audit / critique behavior가 바뀌면 `agents/`를 수정한다

이 pack은 living template다. 구현 이후 유지보수나 신규 기능 추가 시에도 같은 코어 문서 세트를 업데이트하며 다시 사용한다.
