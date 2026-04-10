# Design Skill / Agent Contracts

이 문서는 design pack의 skills와 agents가 느슨한 프롬프트 모음이 아니라 반복 가능한 운영 계약을 따르도록 만드는 공통 규약이다.

목표:

- 시작 조건을 명확히 한다
- output 상태를 reusable하게 만든다
- revision loop와 escalation rule을 고정한다
- vague taste talk가 통과하지 못하게 만든다

## Shared Document Ownership

- `DESIGN.md`
  - visual system, tokens, tone, trust/proof/governance posture, generator guardrail을 소유한다
- `UX-IA.md`
  - flow, navigation, actor split, visibility, lifecycle/recovery path를 소유한다
- `SCREEN-SPECS.md`
  - screen purpose, CTA, states, signal placement, device delta를 소유한다

충돌하면 예쁜 middle ground를 만들지 말고 owning doc를 먼저 맞춘다.

## Shared Status Vocabulary

모든 skill / agent는 마지막에 아래 상태 중 하나를 명시한다.

- `DONE`
- `DONE_WITH_CONCERNS`
- `BLOCKED`
- `NEEDS_CONTEXT`

## Shared Evidence / Severity Vocabulary

### confidence

- `high`
- `medium`
- `low`

### issue severity

- `BLOCKER`
- `WARNING`
- `INFO`

규칙:

- product-shaping recommendation은 근거 또는 explicit assumption이 있어야 한다
- unsupported claim은 `open_question` 또는 `assumption`으로 내린다
- `BLOCKER`, `WARNING`만 revision trigger가 된다

## Shared Provisional Mode

design stage는 sparse input에서 자주 시작하므로, 모든 producer output에는 아래 provisional fields가 있어야 한다.

- `confidence`
- `assumptions`
- `blocked_by`
- `do_not_assume`
- `exact_next_input`

규칙:

- 2회 이상 reframe해도 답이 안 나오면 silent invention 대신 provisional assumption으로 내린다
- proof, governance, privacy, delegated access, dense-data alert posture는 함부로 invent하지 않는다
- blocker가 남아 있으면 `BLOCKED` 또는 `DONE_WITH_CONCERNS`로 끝낸다

## Shared Mandatory Discovery Ladder

모든 producer skill은 초반에 최소 아래 축을 지나야 한다.

1. trust posture
2. emotional tone
3. hierarchy priority
4. density target
5. must-visible state or signal
6. first value moment and exact first trigger
7. happy path 밖의 critical state
8. role / permission / visibility split
9. never-hide trust / status / proof signal
10. device / environment constraint
11. proof / governance / disclosure / notification posture
12. new bundle vs update existing docs

질문 규칙:

- 한 번에 질문 하나
- omnibus approval prompt를 쓰지 않는다
- `예쁘게`, `깔끔하게`, `세련되게` 같은 vague input은 axis choice로 다시 묻는다

## Shared Stress Activation Step

모든 producer skill은 시작 전에 아래를 explicit하게 적는다.

- `active_domain_stressors`
- `required_conditional_packs`
- `creating_or_updating`
- `owning_doc_to_change_first`

stress가 강한데 이 단계가 비어 있으면 시작 체크를 통과한 것으로 보지 않는다.

## Design Skill Contract

모든 design skill은 아래를 따른다.

### operating boundary

- skill은 자기 단계에서 필요한 design slot만 닫는다
- unanswered required slot을 추측으로 채우지 않는다
- 다른 skill이 canonical owner인 결정을 대신 확정하지 않는다
- product docs와 design docs가 충돌하면 먼저 conflict를 surfaced한다

### required start check

시작 전에 아래를 확인한다.

- available planning inputs:
  - `PROJECT-THESIS.md`
  - `PRD.md`
  - `UX-IA.md`
  - `SCREEN-SPECS.md`
- current design docs if any:
  - `DESIGN.md`
  - updated `UX-IA.md`
  - updated `SCREEN-SPECS.md`
- route helper inputs:
  - `START-HERE.md`
  - `DEFAULT-RESOLVED-ROUTES.md`
  - `UPDATE-ENTRY-MAP.md` when updating
- primary surfaces
- core flows
- trust-sensitive or state-heavy areas
- open questions that materially change visual/interaction choices

prerequisite가 부족하면:

- `STATUS: NEEDS_CONTEXT`
- exact missing slots
- recommended previous skill

### interaction contract

- start with the mandatory discovery ladder
- 한 번에 질문 하나
- vague taste 표현은 concrete choice로 다시 내린다
- `예쁘게`, `심플하게`, `세련되게` 같은 말은 hierarchy / color / density / trust posture로 다시 묻는다
- product meaning, trust, state clarity가 visual flair보다 우선이다
- screen, token, signal, role naming은 stable ID를 유지한다
- missing input은 ask하거나 provisional mode로 남기고 invent하지 않는다

### output contract

모든 skill final output은 아래를 포함해야 한다.

- `status`
- `confidence`
- `active_domain_stressors`
- `required_conditional_packs`
- `assumptions`
- `blocked_by`
- `do_not_assume`
- `artifacts_produced`
- `unresolved_questions`
- `recommended_next_skill`
- `exact_next_input`

## Design Agent Contract

design agent는 두 종류다.

- `producer`
- `checker`

### producer rules

- 새 canonical truth를 발명하지 않는다
- result는 design docs에 바로 반영될 수 있게 concrete해야 한다
- style essay보다 operational design rule을 우선한다
- screen-level output이면 `screen_id`, `primary action`, `must-render states`, `required signals`를 빠뜨리지 않는다
- generator-facing rule이면 exact token or exact prohibition 형태여야 한다

### checker rules

- 자기 축 외의 문제를 verdict main reason으로 쓰지 않는다
- `PASS / NEAR-PASS / BLOCK`을 기본 verdict로 쓴다
- fix suggestion은 reusable pack-level contract gap으로 일반화한다
- missing provisional mode나 missing ownership rule은 negative evidence로 본다

## Revision Harness

- revision은 같은 종류의 결함이 줄어드는 방향이어야 한다
- one-off wording fix보다 template / reference / contract fix를 우선한다
- loop에서 나온 patch는 design stage 범위를 넘는 구현 디테일로 도망가지 않는다

## Shared Memory / Compact Contract

phase-closing skill과 loop-facing agent는 종료 전에 아래 snapshot을 남긴다.

- `resolved_route`
- `owner_doc_to_edit_first`
- `locked_upstream_inputs`
- `must_visible_signals`
- `unresolved_design_questions`
- `do_not_reopen`
- `next_consumer`

규칙:

- design memory snapshot은 planning owner truth를 다시 쓰지 않는다
- `design-synthesis`는 stitch / frontend / architecture가 같은 질문을 반복하지 않도록 이 snapshot을 남긴다
- update 상황이면 changed fact vs changed expression을 분리해서 적는다

## Compliance Self-Check

phase-closing skill과 checker agent는 complete 전에 아래를 짧게 확인한다.

- locked planning fact를 다시 discovery 질문으로 열지 않았는가
- visual flourish가 trust / state clarity를 덮지 않았는가
- generator-facing rule이 vague essay로 남지 않았는가
- `exact_next_input`이 downstream consumer 기준으로 actionable한가
- 이번 patch가 reusable contract improvement인가
