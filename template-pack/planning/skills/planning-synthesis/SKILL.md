---
name: planning-synthesis
description: Merge discovery, research, strategy, scope, data, and viability outputs into a clear planning artifact with decisions and open questions separated.
---

# Planning Synthesis

## Purpose

앞 단계 결과물을 reusable living document bundle로 고정한다.

## Use When

- discovery와 research는 끝났는데 흩어져 있다
- 결정된 것과 미결정된 것이 섞여 있다
- 다음 단계가 다시 같은 질문을 반복하지 않게 해야 한다

## Inputs

- all previous skill outputs
- planning record
- active domain shape: `work_shape`, `surface_model`, `loop_model`
- compatibility alias `archetype` when present
- active modifiers and compression contract

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

- active `work_shape`, `surface_model`, `loop_model`, compatibility alias `archetype`, `modifiers`, `pace`, `compression_contract`를 확인한다
- active `resolved_route`, `triggered_stress_signals`, `auto_inserted_owner_skills`를 확인한다
- `answered_question_ids`, `suppressed_question_ids`, `unresolved_blockers`를 먼저 읽는다
- 이 skill에 필요한 prerequisite input과 slot이 없으면 `NEEDS_CONTEXT`로 멈추고 exact missing slot을 적는다
- blocker가 이 skill을 provisional로 만들면 ready 대신 `not_ready` route를 선택한다
- upstream minimum은 `facts`, `assumptions`, `decisions`, `open_questions`, `risks`, `next_step`, `domain_shape_snapshot`이다
- `PROJECT-THESIS`, `PLANNING-RECORD`, `RESEARCH`, `PRD`, `UX-IA`, `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF`에 projection할 source material이 없으면 synthesis를 시작하지 않는다
- workflow, queue, service, or review shaped product인데 `workflow_contract`가 비어 있으면 `not_ready` route를 유지한다
- active route에 `consumer_evidence_gate`, `proof_of_value_gate`, `trust_ops_minimum`, `platform_contract`, `expansion_model`, `regulated_workflow_minimum`, `service_ops_minimum`, `offline_operability`, `knowledge_contract`, `review_queue_model`, `privacy_sensitive_consumer`, `artifact_revision_contract`, `local_discovery_trust`, `learning_progression_contract`, `reservation_lifecycle_contract`, `availability_booking_contract`, `constraint_exception_contract`, `media_membership`, `exception_recovery_contract`가 required인데 비어 있으면 `not_ready` route를 유지한다
- `required_modifier_blocks`가 state와 record에서 어긋나면 missing block으로 보고 `not_ready` route를 유지한다
- `resolved_route`가 비거나, required owner skill injection이 결과 doc projection에 반영되지 않았으면 `not_ready` route를 유지한다

## Required Modifier Block Injection

- `required_modifier_blocks`가 비면 [CONTROL-PLANE.md](../../references/CONTROL-PLANE.md)와 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map으로 다시 계산하고, unresolved non-owner block은 `not_ready_because`와 `open_questions`에 다음 owner skill과 함께 남긴다
- synthesis는 active `required_modifier_blocks`를 final completeness gate로 읽는다
- upstream producer skill이 block을 partial로만 채웠더라도 owning doc projection이 없으면 `done`으로 올리지 않는다
- block completeness는 [PLANNING-RECORD.md](../../references/PLANNING-RECORD.md)의 ownership map과 [PROJECTION-MATRIX.md](../../references/PROJECTION-MATRIX.md) 기준으로 확인한다

## Core Workflow

1. 모든 선행 결과를 읽는다
2. shared planning record schema에 맞춰 facts / assumptions / decisions / open_questions / risks / next_step을 분리한다
3. `domain_shape_snapshot`과 필요 시 `workflow_contract`를 canonical record block으로 고정한다
4. 충돌하는 부분을 표시하거나 정리한다
5. 제품 방향, 타깃, 대표 유스케이스, MVP, 데이터, 성공 경로를 reusable doc bundle 관점으로 정리하고, monetization은 relevant할 때만 깊게 반영한다
6. metric hierarchy를 north star / adoption-or-intake / activation / retention / guardrails 중심으로 정리하고, monetization은 relevant할 때만 붙인다
7. confidence level, evidence strength, distribution, legal and ops risk를 같이 정리한다
8. stakeholder map, rollout plan, dependency register를 같이 남긴다
9. domain-shape-specific summary block을 항상 남긴다
10. planning record block을 8개 core doc의 owning section에 배치한다
11. fixed one-page slot은 `PROJECTION-MATRIX.md`의 owning doc에서만 derive한다
12. `PROJECT-THESIS.md`, `PLANNING-RECORD.md`, `RESEARCH.md`, `PRD.md`, `UX-IA.md`, `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`를 생성한다
13. 모든 doc에 `status`, `owner`, `last_updated`, `source_of_truth_for`, `update_when`, `open_questions`, `change_log`를 채운다
14. one-page core artifact를 fixed slot index로 채운다
15. `Business Viability Snapshot`을 별도 block으로 만든다
16. [PLANNING-DONE-CRITERIA.md](../../references/PLANNING-DONE-CRITERIA.md)를 기준으로 hard gate 충족 여부를 점검한다
17. ready가 아니면 `not_ready_because`를 명시한다
18. 다음 action과 go / no-go 신호를 추천한다

## Must Capture

- product thesis
- domain shape snapshot
- resolved route
- triggered stress signals
- auto-inserted owner skills
- target user and use cases
- problem and assumptions
- market and positioning summary
- MVP definition
- first value moment
- first-time flow and repeat flow
- workflow contract when the product is not genuinely one-shot
- data source strategy
- acquisition and retention model
- monetization direction when relevant
- business viability snapshot
- screen specs
- execution handoff
- confidence levels
- evidence strength
- success metrics
- distribution notes
- legal and operational risks
- stakeholder and rollout summary
- required modifier blocks and ownership alignment
- archetype-specific block
- open questions
- next steps

## Record Writes

- `facts`
- `assumptions`
- `decisions`
- `open_questions`
- `risks`
- `next_step`
- `domain_shape_snapshot`
- `user_model`
- `recent_examples`
- `use_case_cards`
- `workflow_contract`
- `question_state`
- `hypothesis_register`
- `market_evidence_brief`
- `competitor_table`
- `business_viability_snapshot`
- `commercial_model`
- `metric_hierarchy`
- `screen_specs`
- `execution_handoff`
- conditional when applicable: `data_dependencies`, `source_of_truth_map`, `manual_operations`, `dependency_register`, `controls_register`, `compression_mode`, `consumer_evidence_gate`, `proof_of_value_gate`, `platform_contract`, `expansion_model`, `rollout_plan`, `trust_ops_minimum`, `regulated_workflow_minimum`, `service_ops_minimum`, `offline_operability`, `knowledge_contract`, `review_queue_model`, `privacy_sensitive_consumer`, `artifact_revision_contract`, `local_discovery_trust`, `learning_progression_contract`, `reservation_lifecycle_contract`, `availability_booking_contract`, `constraint_exception_contract`, `media_membership`, `exception_recovery_contract`
- final `one-page core artifact`

## Output

- `PROJECT-THESIS.md`
- `PLANNING-RECORD.md`
- `RESEARCH.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`
- `One-Page Core Artifact`
- `Not Ready Because` when needed
- `Recommended Next Step`

`public-website-lite`면 위 문서를 줄이는 것이 아니라, page-template density와 light sustainability note로 압축한다.

## Quality Bar

- pretty summary보다 reusable handoff가 우선이다
- unresolved contradiction을 지우지 않는다
- evidence가 약한 결정은 confidence를 낮춰 적는다
- hard gate가 비면 `done` 판정을 내리지 않는다
- 8개 core doc와 doc metadata가 빠지면 `done`이 아니다
- `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`는 hard gate다
- `domain_shape_snapshot`과 applicable `workflow_contract`가 없으면 `done`이 아니다
- metadata가 있어도 `source_of_truth_for` exclusivity와 freshness를 못 지키면 `done`이 아니다
- task-to-acceptance traceability가 없으면 `done`이 아니다
- `use_case_id`, `flow_id`, `screen_id`, `item_id`, `task_id`, `acceptance_id` graph가 끊기면 `done`이 아니다
- `must_have` item이 stable ID 없이 남거나 `screen_specs`에 `mapped_must_have`가 없으면 `done`이 아니다
- `screen_specs`에 `linked_use_case_ids`나 `owner_flow_id`가 없으면 `done`이 아니다
- `EXECUTION-HANDOFF.md`에서 `handoff_mode`와 exact next input section이 어긋나거나, `next_experiment`와 `next_implementation_input`이 동시에 차 있거나 둘 다 비면 `done`이 아니다
- `exact_next_implementation_input`가 starting phase ids, starting task ids, source-of-truth docs, blockers, first acceptance targets 없이 loose note로 남으면 `done`이 아니다
- expansion / platform / rollout / dependency / major risk가 `EXECUTION-HANDOFF.md`로 projection되지 않으면 `done`이 아니다
- `consumer_evidence_gate`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `proof_of_value_gate`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- weak-evidence `consumer-saas`에서 promotion rule이 아직 충족되지 않았는데 `exact_next_implementation_input`이 채워지면 `done`이 아니다
- `platform_contract`가 있으면 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- enterprise signal이 있는 `platform-integration`에서 `expansion_model` product artifact가 `SCREEN-SPECS.md`로 projection되지 않으면 `done`이 아니다
- `expansion_model`이 있으면 `BUSINESS-OPS.md`와 `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `trust_ops_minimum`이 있으면 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `regulated_workflow_minimum`이 있으면 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `service_ops_minimum`이 있으면 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `offline_operability`가 있으면 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `knowledge_contract` 또는 `review_queue_model`이 있으면 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `privacy_sensitive_consumer`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `artifact_revision_contract`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `local_discovery_trust`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `learning_progression_contract`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `reservation_lifecycle_contract`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `availability_booking_contract`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `constraint_exception_contract`가 있으면 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `media_membership`가 있으면 `UX-IA.md`, `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `exception_recovery_contract`가 있으면 `UX-IA.md`, `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `done`이 아니다
- `local_discovery_trust + commerce-transactional` 조합인데 둘 중 하나만 projection되면 `done`이 아니다
- `marketplace + commerce-transactional`이면 `trust_ops_minimum`의 abuse vector, detection signal, provider verification rule, dispute or refund owner, payout or settlement owner, manual review path or SLA, escalation owner, no-show or cancellation owner, user remedy, reversal or refund path, rollout unit, rollout coupling rule, liquidity stop condition까지 coverage가 없으면 `done`이 아니다
- `compression_mode = public-website-lite`면 `UX-IA.md`, `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`의 lite sections에 projection되지 않으면 `done`이 아니다
- qualifying `public-website-lite` scenario인데 `compression_mode`가 비면 `done`이 아니다
- summary가 길고 next action이 흐리면 lightweight pack 목표를 못 지킨다
- one-page core artifact는 fixed slot이 빠지면 incomplete다
- one-page fixed slot이 owning doc와 다르면 one-page를 stale로 보고 다시 생성해야 한다
- `PLANNING-RECORD.md`의 mirrored `One-Page Fixed Slots`도 standalone one-page artifact와 owning doc를 그대로 따라야 하며, 다르면 `done`이 아니다

## Finish Decision Table

- `DONE`: hard gate 통과 + blocker count 0 + stale docs empty + exactly one next-step type
- `DONE_WITH_CONCERNS`: blocker count 0 + warning count > 0 + next step unambiguous
- `NEEDS_CONTEXT`: missing prerequisite slots or missing upstream artifact
- `BLOCKED`: unresolved route-changing legal / evidence / trust / dependency conflict

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
  - PROJECT-THESIS.md
  - PLANNING-RECORD.md
  - RESEARCH.md
  - PRD.md
  - UX-IA.md
  - SCREEN-SPECS.md
  - BUSINESS-OPS.md
  - EXECUTION-HANDOFF.md
  - one-page-core-artifact
planning_record_writes:
  - facts
  - assumptions
  - decisions
  - open_questions
  - risks
  - next_step
  - screen_specs
  - execution_handoff
unresolved_questions:
  - expansion model is defined but enterprise entitlement threshold is still weak
recommended_next_skill: planning-editor-auditor
exact_next_input:
  work_shape: system-of-record-workflow
  surface_model: multi-surface
  loop_model: workflow
  archetype: b2b-saas
  modifiers:
    - self-serve-to-enterprise
  pace: full
  required_focus:
    - execution_handoff.phase-task-acceptance
    - business_ops.expansion_model
state_updates:
  route_rationale: synthesis complete, checker audit required before ready verdict
  current_state: synthesize
  active_skill: planning-synthesis
  question_state:
    - question_id: next.implementation-input
      state: blocked
  last_audit_type: synthesize_done
  last_audit_result: issues_found
  revision_iteration: 2
  next_step: planning-editor-auditor
  next_step_owner: planning-editor-auditor
  stale_docs:
    - EXECUTION-HANDOFF.md
```

## State Updates

- `current_state`, `active_skill`, `next_step`을 갱신한다
- question 상태가 바뀌면 `answered_question_ids` 또는 `suppressed_question_ids`를 갱신한다
- blocker나 stale effect가 생기면 state에 반영한다

transition table:

| when | set |
| --- | --- |
| bundle complete but audit still needed | `current_state: synthesize`, `next_step: planning-editor-auditor`, `next_step_owner: planning-editor-auditor` |
| hard gate passed | `current_state: done`, `next_step: next_experiment` or `next_implementation_input`, `next_step_owner: exact owner named in EXECUTION-HANDOFF.md` |
| unresolved route-changing blocker remains | `current_state: blocked`, `next_step: resolve-blocker`, `next_step_owner: user or owning-skill` |

## Self-Check Dimensions

- `bundle completeness`: 8 core docs + one-page + metadata가 모두 있는가
- `projection`: conditional blocks가 owning docs와 handoff docs에 내려갔는가
- `next-step clarity`: `next_experiment`와 `next_implementation_input` 중 하나만 채워졌는가

## Checker Harness

- self-check 후 blocker/warning이 있으면 revision 대상으로 남긴다
- revision은 max 3회, blocker+warning count가 줄지 않으면 stalled로 본다
- stalled면 `planning-editor-auditor` 또는 user-facing escalation으로 넘긴다

checker handoff contract:

- checker prompt는 `## Issues`, `## Repair Order`, `revision_delta`, `blocker_count`, `warning_count`, `info_count`, `state_updates`를 같이 낸다
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

- 다음 planning cycle이 이어지면 `PLANNING-RECORD.md`를 canonical register로 쓴다
- 설계 / 구현 / 유지보수는 8개 core doc bundle을 living source of truth로 쓴다

## Backing Agents

- `planning-editor-auditor`
