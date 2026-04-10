# Planning State Contract

이 문서는 planning pack 실행 중간 상태를 어떤 필드로 붙들어 둘지 정의한다.

핵심 목적:

- 세션이 끊겨도 어디까지 왔는지 복구
- active route와 stop rule을 다시 추론하지 않게 만들기
- stale docs, blockers, next step을 한 곳에서 보이게 만들기

## 1. Required State Fields

`PLANNING-STATE.md` 또는 equivalent run manifest는 아래를 가진다.

- `project_slug`
- `work_shape`
- `surface_model`
- `loop_model`
- `archetype`
- `modifiers`
- `pace`
- `compression_contract`
- `required_modifier_blocks`
- `current_state`
- `active_skill`
- `route_rationale`
- `required_blocks_before_scope_freeze`
- `answered_question_ids`
- `suppressed_question_ids`
- `question_state`
- `unresolved_blockers`
- `stale_docs`
- `last_audit_type`
- `last_audit_result`
- `revision_iteration`
- `next_step`
- `next_step_owner`

`archetype`은 canonical classifier가 아니라 optional compatibility alias field로 읽는다.

## 2. State Machine Fields

`current_state`는 [CONTROL-PLANE.md](CONTROL-PLANE.md)의 coarse state machine과 일치해야 한다.

- `intake`
- `discover`
- `validate`
- `research`
- `user-clarity`
- `strategy`
- `scope`
- `flow`
- `rollout`
- `growth`
- `revenue`
- `synthesize`
- `done`
- `blocked`

## 3. Resume Rules

resume 시 아래를 우선 본다.

- 마지막 active skill이 어디였는가
- 어떤 blockers 때문에 멈췄는가
- stale doc가 있는가
- `next_experiment`인지 `next_implementation_input`인지

resume 시 금지:

- route를 새로 발명하기
- answered question ID를 다시 인터뷰하기
- stale doc reconciliation 없이 done 판정하기

## 4. Question State Vocabulary

question state의 canonical set은 아래다.

- `asked`
- `answered`
- `suppressed`
- `blocked`

rule:

- `superseded`는 별도 terminal state가 아니라 `suppressed`의 reason이다
- question replay를 막는 canonical set은 `answered_question_ids`, `suppressed_question_ids`, `question_state`다

recommended row shape:

```yaml
question_state:
  - question_id: monetization.first-revenue
    state: suppressed
    reason: superseded
```

## 5. Transition Rules

state transition 시 반드시 갱신한다.

- `active_skill`
- `current_state`
- `question_state`
- `last_audit_type`
- `last_audit_result`
- `revision_iteration`
- `next_step`
- `stale_docs`

`last_audit_result` allowed values:

- `verification_passed`
- `issues_found`
- `planning_blocked`

audit output의 `audit_result`, `revision_iteration`, `recommended_next_step`는 state에 그대로 반영한다.

`state_updates`는 full snapshot이 아니라 delta여도 된다.

- omitted field는 unchanged로 본다
- persisted state는 최종적으로 이 문서의 full contract를 만족해야 한다

## 6. Staleness Rules

아래면 `stale_docs`에 올린다.

- owning doc가 바뀌었는데 downstream doc가 reconcile되지 않았다
- required block이 바뀌었는데 `SCREEN-SPECS` / `BUSINESS-OPS` / `EXECUTION-HANDOFF`가 아직 예전 상태다
- route가 바뀌었는데 current skill과 next step이 그대로다

## 7. Minimal State Example

```yaml
project_slug: make-product-spec
work_shape: self-serve-loop
surface_model: mobile-native
loop_model: habit
archetype: consumer-saas
modifiers:
  - privacy-sensitive-consumer
pace: standard
compression_contract: early-consumer-weak-evidence
required_modifier_blocks:
  - consumer_evidence_gate
  - proof_of_value_gate
  - privacy_sensitive_consumer
current_state: validate
active_skill: hypothesis-validation
route_rationale: weak recent-example density keeps the route in experiment mode
required_blocks_before_scope_freeze:
  - consumer_evidence_gate
  - proof_of_value_gate
  - privacy_sensitive_consumer
answered_question_ids:
  - user.primary
  - problem.current-alternative
suppressed_question_ids:
  - monetization.first-revenue
question_state:
  - question_id: monetization.first-revenue
    state: suppressed
    reason: superseded
unresolved_blockers:
  - recent example bundle still weak
stale_docs:
  - PRD.md
last_audit_type: stage_exit
last_audit_result: issues_found
revision_iteration: 1
next_step: next_experiment
next_step_owner: hypothesis-validation
```
