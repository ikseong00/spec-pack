---
name: idea-discovery
description: Turn a vague product idea into a clear thesis through open-ended discovery, Socratic follow-up, and explicit clarification.
---

# Idea Discovery

## Purpose

초기 아이디어를 제품 논의가 가능한 수준까지 명확하게 만든다.

## Use When

- 아이디어가 아직 뿌옇다
- 무엇을 만드는지보다 왜 만드는지가 더 중요하다
- 사용자가 머릿속 그림은 있는데 구조화가 안 되어 있다

## Inputs

- free-form idea description
- founder context
- any existing notes or references
- current planning record if available

## Operating Boundary

이 skill은 [SKILL-AGENT-CONTRACTS.md](../../references/SKILL-AGENT-CONTRACTS.md)와 [PLANNING-STATE-CONTRACT.md](../../references/PLANNING-STATE-CONTRACT.md)를 따른다.

- unanswered required slot을 추측으로 채우지 않는다
- prerequisite가 없으면 `NEEDS_CONTEXT`와 exact missing slot을 적는다
- answered / suppressed question ID를 다시 열지 않는다
- 다른 skill이 canonical owner인 결정을 대신 확정하지 않는다

## Modes

- 기본값은 `standard` 또는 해당 skill의 normal path다
- `LIGHT` / `FAST`는 control plane이나 compression contract가 허용할 때만
- `FULL`은 shape-changing blocker, legal/trust/ops risk, role split, strong-claim evidence gap이 있으면 강제로 올린다
- `COMPRESSION`은 explicit compression contract가 있을 때만 허용한다

## Interaction Contract

- start open, then narrow with one question at a time
- forced-choice는 concrete branch를 고를 때만 쓴다
- 사용자가 길게 설명하고 싶어 하면 freeform fallback으로 전환한다
- broad claim은 recent example과 current workaround로 다시 내린다
- done enough이면 다음 gap으로 넘기고 같은 discovery를 반복하지 않는다

## Required Start Check

- active `archetype`, `modifiers`, `pace`, `compression_contract`를 확인한다
- active `resolved_route`, `triggered_stress_signals`, `auto_inserted_owner_skills`가 있으면 먼저 읽고, 없으면 current shape와 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)로 재구성한다
- active `required_modifier_blocks`를 읽고 discovery 단계에서 먼저 표면화해야 하는 block candidate를 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다
- minimum raw input은 `idea.freeform` 또는 equivalent founder note다
- 이 skill이 닫거나 explicit low-confidence로 내려야 하는 slot은 `user.primary`, `problem.statement`, `problem.current-alternative`, `value.first-moment`, `usecase.primary`, `archetype.primary`다
- `idea.freeform`가 비면 `missing_slots: [idea.freeform]`로 바로 멈춘다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`가 있거나 modifier signal이 강하면 downstream owner skill이 놓치지 않도록 block candidate와 route rationale을 discovery 단계에서 먼저 표면화한다
- discovery 단계에서 특히 먼저 걸러야 하는 block:
  - `consumer_evidence_gate`
  - `proof_of_value_gate`
  - `platform_contract`
  - `trust_ops_minimum`
  - `local_discovery_trust`
  - `learning_progression_contract`
  - `media_membership`
  - `exception_recovery_contract`
- 확정이 어려우면 block을 생략하지 말고 candidate + open question으로 남긴다

## Core Workflow

1. 자유 설명부터 받는다
2. 한 번에 질문 하나만 던진다
3. question ladder를 따라 vague한 표현을 구체화한다
4. 사용자, 문제, 상황, 기대 변화, 대표 유스케이스를 끌어낸다
5. `light user analysis` 최소 slot을 채운다
6. one primary use-case card와 one recent-example bundle을 만든다
7. primary archetype 1개와 modifier 0-2개를 고른다
8. first value moment와 current alternative를 확인한다
9. strong claim이면 recent example을 2-3개까지 밀어붙이고, 안 되면 low-confidence로 둔다
10. 아직 모호한 부분과 evidence가 약한 부분을 따로 표시한다
11. 다음 skill로 넘길 정도로 명확해졌는지 exit criteria로 판단한다

## Question Style

- 체크리스트 면접처럼 하지 않는다
- 사용자가 에너지가 있는 부분을 더 깊게 판다
- 기본 ladder는 `open -> recent example -> workaround -> evidence -> stop` 순서다
- "예를 들어", "마지막으로 그런 상황이 언제였는지", "지금은 어떻게 하는지" 같은 질문을 쓴다
- 사용자가 자유롭게 설명하고 싶어 하면 객관식보다 서술형으로 전환한다
- broad claim이 나오면 최근 예시와 실제 행동으로 다시 묻는다

## Baseline Question Pack

- `누가 가장 먼저 절실하게 씁니까?`
- `그 문제가 마지막으로 생긴 게 언제였습니까?`
- `그때 지금은 어떻게 해결했습니까?`
- `무엇이 제일 불편했습니까?`
- `처음 가치 있다고 느끼는 순간은 어디입니까?`

## Must Capture

- 한 줄 제품 설명
- 핵심 사용자
- moment of need / trigger / context of use
- 해결하려는 문제
- 기대하는 변화
- 대표 유스케이스 2-3개
- primary use-case card 1개
- primary archetype
- modifier overlays
- required modifier block candidates and why they may be needed
- resolved route rationale
- triggered stress signals
- auto-inserted owner skills
- current alternatives
- first value moment hypothesis
- recent example bundle 1개 이상
- 모호한 부분
- confidence notes

## Record Writes

- `facts`: discovery-grounded problem, user, and current alternative statements
- `assumptions`: first value moment hypothesis and low-confidence claims
- `open_questions`: unresolved ambiguity and missing evidence
- `user_model`
- `recent_examples`
- `use_case_cards`
- `domain_shape_snapshot`
- `question_state`

## Output

- `Discovery Summary`
- `Representative Use Cases`
- `Current Alternatives`
- `Open Questions`
- shared `planning record` updates

## Quality Bar

- discovery는 예쁜 소개문을 만드는 단계가 아니다
- broad claim이 있으면 recent example로 다시 내려와야 한다
- archetype을 억지로 많이 붙이지 않는다
- 다음 단계가 discovery를 반복하지 않도록 써야 한다
- use case는 actor와 trigger가 없으면 incomplete다

## Exit Criteria

아래가 채워지면 discovery를 멈추고 다음 gap으로 넘긴다.

- 누구를 위한 제품인지 명확하다
- 어떤 상황에서 어떤 문제를 푸는지 명확하다
- current alternative가 명확하다
- `moment of need`, `trigger`, `context of use`가 있다
- recent example bundle이 최소 1개 있다
- primary use-case card가 최소 1개 있다
- archetype과 modifier가 정해졌다
- 아직 약한 부분은 open question으로 분리됐다

## Evidence And Scoring

- confidence는 `high` / `medium` / `low`로 남긴다
- evidence strength는 `strong` / `mixed` / `weak` / `missing`으로 남긴다
- readiness는 `ready` / `not_ready`로 명시한다
- unsupported claim은 `assumption` 또는 `open_question`으로 내린다

## Final Output Envelope

- final envelope는 [SYSTEM-IO-SCHEMAS.md](../../references/SYSTEM-IO-SCHEMAS.md)의 skill schema를 따른다
- required fields는 `status`, `evidence_strength`, `confidence`, `artifacts_produced`, `planning_record_writes`, `unresolved_questions`, `recommended_next_skill`, `exact_next_input`, `state_updates`다

example:

```yaml
status: DONE_WITH_CONCERNS
evidence_strength: mixed
confidence: medium
artifacts_produced:
  - discovery_summary
  - representative_use_cases
  - recent_example_bundle
planning_record_writes:
  - facts
  - assumptions
  - open_questions
  - user_model
  - recent_examples
  - use_case_cards
unresolved_questions:
  - evidence depth for repeat behavior is still weak
recommended_next_skill: problem-validation
exact_next_input:
  archetype: consumer-saas
  modifiers: []
  pace: standard
  required_focus:
    - problem.frequency
    - problem.intensity
state_updates:
  route_rationale: discovery complete, validation gap is now dominant
  current_state: discover
  active_skill: idea-discovery
  question_state:
    - question_id: user.primary
      state: answered
  last_audit_type: stage_exit
  last_audit_result: issues_found
  revision_iteration: 1
  next_step: problem-validation
  next_step_owner: problem-validation
```

## State Updates

- `current_state`, `active_skill`, `next_step`을 갱신한다
- question 상태가 바뀌면 `answered_question_ids` 또는 `suppressed_question_ids`를 갱신한다
- blocker나 stale effect가 생기면 state에 반영한다

transition table:

| when | set |
| --- | --- |
| discovery complete, pain still uncertain | `current_state: discover`, `next_step: problem-validation`, `next_step_owner: problem-validation` |
| discovery complete, role split changes product shape | `current_state: discover`, `next_step: user-research-analysis`, `next_step_owner: user-research-analysis` |
| missing raw input | `current_state: intake`, `next_step: gather-idea-input`, `next_step_owner: user` |

## Self-Check Dimensions

- `completeness`: primary user, problem, current alternative, first value, primary use case, archetype가 있는가
- `evidence`: strong claim이 recent example로 내려왔는가
- `handoff`: 다음 skill이 same discovery를 반복하지 않아도 되는가

## Checker Harness

- self-check 후 blocker/warning이 있으면 revision 대상으로 남긴다
- revision은 max 3회, blocker+warning count가 줄지 않으면 stalled로 본다
- stalled면 `planning-editor-auditor` 또는 user-facing escalation으로 넘긴다

checker handoff contract:

- checker prompt는 `## Issues`, `## Repair Order`, `revision_delta`, `blocker_count`, `warning_count`, `info_count`를 같이 낸다
- issue row는 `dimension`, `severity`, `finding`, `affected_field`, `suggested_fix` shape를 따른다
- user-facing escalation은 `STATUS / REASON / ATTEMPTED / RECOMMENDATION` 형식을 따른다

## Completion

- final status: `DONE`, `DONE_WITH_CONCERNS`, `BLOCKED`, `NEEDS_CONTEXT`
- final marker: `## SKILL COMPLETE` 또는 `## SKILL BLOCKED`
- final output must include `evidence_strength`, `unresolved_questions`, `recommended_next_skill`, `exact_next_input`

## Escalate When

- strong claim에 필요한 evidence가 2회 push 후에도 없다
- legal/compliance/policy uncertainty가 route를 바꾼다
- another skill owns the blocking decision
- scope exceeds what this skill can verify

## Handoff

- problem의 실재성이 불확실하면 `problem-validation`
- target이 넓고 역할이 섞이면 `user-research-analysis`
- archetype에 따라 overlay 질문을 planning record에 함께 남긴다

## Backing Agents

- `discovery-synthesizer`
