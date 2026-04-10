---
name: design-intake-triage
description: Route sparse or fuzzy design requests to the right design skill, activate domain stressors, and lock the first owning doc.
---

# Design Intake Triage

## Purpose

애매한 design 요청을 usable한 첫 route로 바꾼다.

## Use When

- design 요청이 sparse하거나 vague하다
- `DESIGN.md`, `UX-IA.md`, `SCREEN-SPECS.md` 중 어디서 시작할지 모른다
- hybrid shape라서 어떤 conditional pack을 켜야 할지 애매하다
- 새 bundle인지 기존 문서 update인지 불명확하다

## Inputs

- `PROJECT-THESIS.md`
- `PRD.md`
- existing `DESIGN.md`, `UX-IA.md`, `SCREEN-SPECS.md` if any
- [START-HERE.md](../../references/START-HERE.md)
- [DEFAULT-RESOLVED-ROUTES.md](../../references/DEFAULT-RESOLVED-ROUTES.md)
- [UPDATE-ENTRY-MAP.md](../../references/UPDATE-ENTRY-MAP.md)

## Contract

이 skill은 [DESIGN-SKILL-AGENT-CONTRACTS.md](../../references/DESIGN-SKILL-AGENT-CONTRACTS.md)를 따른다.

## Mandatory Question Ladder

planning bundle이 이미 있고 `unresolved_planning_questions`가 비어 있으면,
아래 ladder는 translation-only mode로 쓴다.

- target segment
- why this segment first
- must-have / defer
- buyer / payer
- source of truth
- approval owner
- policy / SLA owner

위 항목은 다시 discovery 질문으로 쓰지 않는다.
오직 `reopen_planning_if`가 발화했을 때만 다시 올린다.

1. 지금 가장 비어 있는 것은 `direction`, `flow`, `screen`, `update`, `bundle-check` 중 무엇인가
2. 이 제품에서 action 전에 믿어야 하는 것은 무엇인가
3. 먼저 줘야 할 감각은 무엇인가
4. hierarchy를 가장 세게 먹어야 하는 surface는 무엇인가
5. density는 `airy`, `balanced`, `dense` 중 어디인가
6. 절대 숨기면 안 되는 trust/status/proof signal은 무엇인가
7. first value moment는 무엇이고 어느 screen에서 처음 보이는가
8. happy path 밖에서 가장 자주 생길 critical state는 무엇인가
9. role, permission, privacy, delegated access 차이가 있는가
10. mobile, field, offline, dense-data, public-accessibility 중 무엇이 shape를 바꾸는가
11. reminder, notification, privacy rule이 있는가
12. 새로 만드는가, 기존 문서를 업데이트하는가

## Core Workflow

1. fuzzy input을 `current_gap`, `surface_model`, `active_domain_stressors`로 재해석한다
2. update 여부와 owner freeze completeness를 먼저 가른다
3. 첫 owning doc를 고른다
4. `resolved_route`를 만든다
5. required conditional packs를 기록한다
6. 다음 producer skill 하나를 명확히 추천한다

## Must Capture

- current gap
- surface model
- active domain stressors
- required conditional packs
- creating or updating
- owning doc to change first
- starting skill
- resolved route
- escalation condition

## Output

- quick route card
- `recommended_next_skill`
- `exact_next_input`

## Quality Bar

- vague taste talk를 route card로 바꾸지 못하면 실패다
- starting skill이 하나로 좁혀지지 않으면 escalation rule을 남겨야 한다
- proof/governance/privacy/dense-data 같은 shape-changing stress는 빠뜨리면 안 된다
- planning locked fact를 다시 discovery 질문으로 꺼내면 실패다

## Completion

- `## SKILL COMPLETE` 또는 `## SKILL BLOCKED`
- `recommended_next_skill`: `visual-direction-strategy` or `experience-flow-design` or `screen-spec-design`
