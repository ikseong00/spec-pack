---
name: mvp-scope
description: Cut the concept down to the smallest version that can prove value, with clear must-have, defer, and out-of-scope boundaries.
---

# MVP Scope

## Purpose

핵심 가치 검증에 필요한 최소 기능 구조만 남긴다.

## Use When

- 기능이 많아지기 시작한다
- v1과 later를 나눌 기준이 없다
- 핵심 가치보다 구현 욕심이 앞선다

## Inputs

- representative use cases
- positioning
- candidate features
- risk and dependency notes

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
- active `required_modifier_blocks`를 읽고 scope freeze 전에 닫혀야 하는 block gate를 식별한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다
- required slot family는 `usecase.primary`, `positioning.one-line`, `scope.proof-event`, `feature.candidates`, `risk.scope-shapers`다
- `usecase.primary`나 `scope.proof-event`가 비면 `NEEDS_CONTEXT`로 멈추고 discovery 또는 positioning으로 되돌린다
- feature list만 있고 first-value path가 없으면 scope 작업을 시작하지 않는다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남긴다
- `required_modifier_blocks`는 이 skill에서 scope gate로 읽는다. active block이 unresolved인데 scope를 final로 닫으면 안 된다
- 특히 scope freeze를 바꾸는 block:
  - `platform_contract`
  - `expansion_model`
  - `trust_ops_minimum`
  - `regulated_workflow_minimum`
  - `service_ops_minimum`
  - `offline_operability`
  - `review_queue_model`
  - `privacy_sensitive_consumer`
  - `local_discovery_trust`
  - `learning_progression_contract`
  - `reservation_lifecycle_contract`
  - `availability_booking_contract`
  - `constraint_exception_contract`
  - `media_membership`
  - `exception_recovery_contract`
- unresolved block은 scope note에서 block name + owner + freeze impact를 같이 남긴다

## Core Workflow

1. 대표 유스케이스를 다시 본다
2. primary actor, primary job, proof event, v1 path를 하나로 고른다
3. 각 기능이 first value를 직접 만들거나 trust / compliance를 위해 필수인지 평가한다
4. must-have / defer / cut으로 나눈다
5. rollout boundary를 명시한다
6. policy, permission, audit, exception handling이 core인지 확인한다
7. overlay-specific requirement만 추가한다
8. out-of-scope를 명시한다
9. MVP 성공 조건을 정의한다
10. 더 캐물을 가치가 없는 시점을 stop condition으로 적는다

## Must-Have Admission Test

- first value path를 직접 만들면 `must-have`
- trust / compliance / permission / control 때문에 v1에서 빠질 수 없으면 `must-have`
- manual workaround로 당분간 버틸 수 있으면 `defer`
- delight, scale polish, reporting convenience만 만들면 `cut`

## Baseline Question Pack

- open: `이번에 반드시 남겨야 하는 최소 가치 경로는 무엇입니까?`
- recent example: `최근 실제 사용자 사례에서 정말 반드시 필요했던 기능은 무엇이었습니까?`
- workaround: `이 기능이 빠져도 사용자는 어떤 수동 방식으로 버틸 수 있습니까?`
- evidence: `이 기능이 must-have라고 볼 threshold나 근거는 무엇입니까?`
- disconfirming: `어떤 관찰이 나오면 이 기능을 defer 또는 cut으로 내려야 합니까?`
- stop: `must-have / defer / out-of-scope와 proof event가 안정되면 멈춘다`

## Must Capture

- must-have feature set with stable item IDs
- primary actor
- primary job
- proof event
- v1 path
- defer list
- rollout boundary
- core control requirements
- out-of-scope list
- cut because
- MVP success condition
- scope risks
- scope stop condition
- active required modifier blocks that act as scope gates

## Record Writes

- `decisions`: primary actor, primary job, proof event, `must_have`, `defer`, `out_of_scope`, v1 path
- `open_questions`: unresolved dependency, rollout, or control requirements that still shape scope
- `risks`: scope creep, thin proof event, missing trust/control, rollout-boundary risk
- conditional when applicable: `platform_contract`, `expansion_model`, `trust_ops_minimum`, `regulated_workflow_minimum`, `service_ops_minimum`, `offline_operability`, `review_queue_model`, `privacy_sensitive_consumer`, `local_discovery_trust`, `learning_progression_contract`, `reservation_lifecycle_contract`, `availability_booking_contract`, `constraint_exception_contract`, `media_membership`, `exception_recovery_contract`

## Output

- `MVP Scope Table`
- `Scope Freeze Notes`
- `Success Conditions`

## Quality Bar

- must-have는 핵심 가치 검증에 직접 연결돼야 한다
- must-have / defer / out-of-scope item은 stable ID 없이 free-text only로 남기지 않는다
- defer와 cut을 흐리게 두지 않는다
- out-of-scope를 명시하지 않으면 scope freeze로 보지 않는다
- first value와 무관한 기능은 예외 사유가 없으면 cut로 간다

## Exit Criteria

- `must_have`, `defer`, `out_of_scope`가 stable ID로 잘렸다
- `proof event`와 `v1 path`가 연결됐다
- core control requirement가 있으면 must-have 또는 blocker로 올렸다
- next question이 scope가 아니라 flow / data / synthesis로 넘어간다

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
status: DONE
evidence_strength: mixed
confidence: medium
artifacts_produced:
  - mvp_scope_table
  - scope_freeze_notes
  - success_conditions
planning_record_writes:
  - decisions
  - open_questions
  - risks
unresolved_questions:
  - whether provider verification is required before rollout
recommended_next_skill: ux-use-case-strategy
exact_next_input:
  archetype: marketplace
  modifiers:
    - commerce-transactional
  pace: full
  required_focus:
    - flow.first-time
    - flow.recovery
    - trust.control-surface
state_updates:
  route_rationale: scope is frozen and flow design is now the main risk
  current_state: scope
  active_skill: mvp-scope
  question_state:
    - question_id: scope.proof-event
      state: answered
  last_audit_type: stage_exit
  last_audit_result: verification_passed
  revision_iteration: 1
  next_step: ux-use-case-strategy
  next_step_owner: ux-use-case-strategy
```

## State Updates

- `current_state`, `active_skill`, `next_step`을 갱신한다
- question 상태가 바뀌면 `answered_question_ids` 또는 `suppressed_question_ids`를 갱신한다
- blocker나 stale effect가 생기면 state에 반영한다

transition table:

| when | set |
| --- | --- |
| flow shape is now the main risk | `current_state: scope`, `next_step: ux-use-case-strategy`, `next_step_owner: ux-use-case-strategy` |
| dependency or source-of-truth changes scope | `current_state: scope`, `next_step: data-source-strategy`, `next_step_owner: data-source-strategy` |
| scope is frozen and handoff-ready | `current_state: scope`, `next_step: planning-synthesis`, `next_step_owner: planning-synthesis` |

## Self-Check Dimensions

- `first-value fit`: every must-have item supports proof event or control surface
- `scope discipline`: defer와 cut가 흐려지지 않았는가
- `traceability readiness`: stable item IDs가 다음 flow/screen/task로 내려갈 준비가 됐는가

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

- flow를 구체화할 때는 `ux-use-case-strategy`
- dependency가 shape를 바꾸면 `data-source-strategy`
- go/no-go 정리는 `planning-synthesis`

## Backing Agents

- `mvp-critic`
