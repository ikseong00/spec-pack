# Skill / Agent Contracts

이 문서는 planning pack의 `skills`와 `agents`가 느슨한 프롬프트 묶음이 아니라 반복 가능한 운영 계약을 따르도록 만드는 공통 규약이다.

목표:

- 시작 조건을 명확히 한다
- 출력 상태를 machine-readable하게 만든다
- revision loop와 escalation rule을 고정한다
- evidence가 약할 때 무엇을 하지 말아야 하는지 분명히 한다

## 1. Shared Status Vocabulary

모든 skill / agent는 마지막에 아래 상태 중 하나를 명시한다.

- `DONE`
- `DONE_WITH_CONCERNS`
- `BLOCKED`
- `NEEDS_CONTEXT`

의미:

- `DONE`: 현재 단계 목표를 충족했고 다음 consumer가 바로 이어서 쓸 수 있다
- `DONE_WITH_CONCERNS`: 산출물은 usable하지만 unresolved risk나 weak evidence가 있다
- `BLOCKED`: 현재 계약 범위 안에서는 더 진행하면 안 된다
- `NEEDS_CONTEXT`: prerequisite input이나 required slot이 부족하다

## 2. Shared Evidence / Severity Vocabulary

### evidence_strength

- `strong`
- `mixed`
- `weak`
- `missing`

### confidence

- `high`
- `medium`
- `low`

### issue severity

- `BLOCKER`
- `WARNING`
- `INFO`

규칙:

- unsupported claim은 `decision`이 아니라 `assumption` 또는 `open_question`으로 내린다
- consequential recommendation은 `evidence_ref` 또는 explicit weak/missing label이 있어야 한다
- `INFO`는 revision trigger가 아니다
- `BLOCKER`, `WARNING`만 revision loop를 돈다

## 3. Skill Contract

모든 planning skill은 아래를 따라야 한다.

### operating boundary

- skill은 자기 단계에서 필요한 slot만 닫는다
- 다른 skill이 canonical owner인 결정을 대신 확정하지 않는다
- unanswered question을 추측으로 채우지 않는다
- answered question ID를 다시 열지 않는다

### required start check

시작 전에 아래를 확인한다.

- active `work_shape`
- active `surface_model`
- active `loop_model`
- compatibility alias archetype if any
- active modifier set
- current gap
- pace or compression contract
- prerequisite slots
- blocking unresolved risks

prerequisite가 부족하면:

- `STATUS: NEEDS_CONTEXT`
- exact missing slots
- recommended previous or sibling skill

### mode vocabulary

- `FULL`
- `LIGHT`
- `FAST`
- `COMPRESSION`

mode rules:

- `FAST`: shallower evidence, not fewer truths
- `LIGHT`: reduced artifact depth, same canonical ownership
- `FULL`: shape-changing blocker, role split, legal/trust/ops risk, or high-stakes claim이 있으면 사용
- `COMPRESSION`: explicit contract가 있을 때만 허용

### interaction contract

- start open
- 한 번에 질문 하나
- Ask-style forced choice는 concrete branch 비교에만 사용
- 사용자가 자유 설명으로 전환하면 freeform fallback을 우선
- broad claim은 recent example과 current workaround로 다시 내린다

### required modifier block injection

- producer skill은 `required_modifier_blocks`를 state에서 먼저 읽고, 비어 있으면 [CONTROL-PLANE.md](CONTROL-PLANE.md)의 resolver와 [PLANNING-RECORD.md](PLANNING-RECORD.md)의 block ownership map으로 다시 계산한다
- active block은 이 skill이 primary owner가 아니어도 silent drop 하면 안 된다
- active block이 현재 단계 결과를 바꾸면 그 block 또는 owned subset이 반드시 `Must Capture`에 나타나야 한다
- 이 skill이 block field를 새로 채우거나 구체화했다면 그 block 이름이 반드시 `Record Writes` 또는 `planning_record_writes`에 나타나야 한다
- 이 skill이 non-owner라서 block을 final로 못 닫으면 `open_questions`에 남기고 다음 owner skill을 명시한다
- canonical block set:
  - `consumer_evidence_gate`
  - `proof_of_value_gate`
  - `platform_contract`
  - `expansion_model`
  - `trust_ops_minimum`
  - `regulated_workflow_minimum`
  - `service_ops_minimum`
  - `offline_operability`
  - `knowledge_contract`
  - `review_queue_model`
  - `privacy_sensitive_consumer`
  - `artifact_revision_contract`
  - `local_discovery_trust`
  - `learning_progression_contract`
  - `reservation_lifecycle_contract`
  - `availability_booking_contract`
  - `constraint_exception_contract`
  - `media_membership`
  - `exception_recovery_contract`

### output contract

모든 skill final output은 아래를 포함해야 한다.

- `status`
- `evidence_strength`
- `confidence`
- `artifacts_produced`
- `planning_record_writes`
- `unresolved_questions`
- `recommended_next_skill`
- `exact_next_input`

exact field shape는 [SYSTEM-IO-SCHEMAS.md](SYSTEM-IO-SCHEMAS.md)를 따른다.

### completion marker

skill final output의 첫 H2 중 하나를 아래로 사용한다.

- `## SKILL COMPLETE`
- `## SKILL BLOCKED`

skill-specific marker를 추가하고 싶으면 이 generic marker 아래에 붙인다.

## 4. Agent Contract

planning agent는 크게 두 종류다.

- `producer`: 구조화, 압축, 제안
- `checker`: 검토, gate, issue emission

### producer rules

- 새 canonical truth를 발명하지 않는다
- evidence가 약하면 explicit weak/missing label을 단다
- recommendation은 evidence ref 또는 explicit assumption과 연결한다
- final output은 공통 envelope를 따른다

### checker rules

- final output 첫 H2는 아래 중 하나다
  - `## VERIFICATION PASSED`
  - `## ISSUES FOUND`
  - `## PLANNING BLOCKED`
- checker는 parseable issues block을 반드시 낸다

### shared metadata header

agent final output은 아래 metadata header를 포함한다.

```yaml
agent: discovery-synthesizer
status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
confidence: high | medium | low
evidence_strength: strong | mixed | weak | missing
revision_iteration: 0
recommended_next_step: problem-validation
```

producer와 checker 모두 metadata header는 공유하되, required section은 다르다.

### producer envelope

marker:

- `## PLANNING COMPLETE`
- `## PLANNING BLOCKED`

required sections:

- `## Summary`
- `## Output`
- `## Evidence`
- `## Open Questions`
- `## Escalation`

producer는 checker marker나 mandatory `## Issues` block을 emit하지 않는다.

### checker envelope

marker:

- `## VERIFICATION PASSED`
- `## ISSUES FOUND`
- `## PLANNING BLOCKED`

required sections:

- `## Summary`
- `## Issues`
- `## Repair Order`
- `## Open Questions`
- `## Escalation`

checker는 parseable `## Issues` block 없이 complete를 주장하지 않는다.

producer vs checker exact envelope는 [SYSTEM-IO-SCHEMAS.md](SYSTEM-IO-SCHEMAS.md)를 따른다.

### issue schema

`## Issues`는 아래 YAML list shape를 따른다.

```yaml
- dimension: output_completeness
  severity: BLOCKER
  finding: trust_ops_minimum is not projected into EXECUTION-HANDOFF
  affected_field: EXECUTION-HANDOFF.trust_ops
  suggested_fix: add phase/task/acceptance rows for dispute and payout states
```

## 5. Revision Harness

revision loop는 아래 canonical 패턴을 따른다.

기본 규칙:

- fresh producer/agent respawn
- max 3 revision cycles
- `BLOCKER + WARNING` count가 줄지 않으면 stall로 본다
- stall 또는 3회 초과 시 user-facing escalation으로 전환한다
- `revision_iteration > 0`이면 `revision_delta`를 같이 남긴다

required `revision_delta` fields:

- `previous_blocker_count`
- `previous_warning_count`
- `delta_vs_previous`
- `attempted_repairs`
- `stall_reason`

## 6. Escalation Contract

아래면 escalate한다.

- legal/compliance uncertainty가 route를 바꾼다
- conflicting evidence가 decision을 뒤집는다
- 2회 이상 push해도 user answer가 actionable threshold를 못 넘는다
- scope가 skill/agent가 verify할 수 있는 범위를 넘는다
- revision count가 3회를 넘기거나 stalled다

format:

```text
STATUS: BLOCKED | NEEDS_CONTEXT
REASON: ...
ATTEMPTED: ...
RECOMMENDATION: ...
```

## 7. Shared Anti-Patterns

- checklist walking
- canned question spraying
- pretty summary hiding unresolved blockers
- unsupported claim promoted to decision
- compression mode에서 blocker를 footnote로 숨기기
- same question reopened without answered/suppressed state check
- exact next step 없이 "more research needed"로 끝내기
