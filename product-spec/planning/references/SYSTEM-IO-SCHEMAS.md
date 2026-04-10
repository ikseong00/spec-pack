# System I/O Schemas

이 문서는 planning pack의 skill / agent / state / audit / benchmark 결과를 어떤 exact shape로 남길지 정의한다.

## 1. Skill Output Envelope

```yaml
status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
evidence_strength: strong | mixed | weak | missing
confidence: high | medium | low
artifacts_produced:
  - discovery_summary
planning_record_writes:
  - facts
  - open_questions
unresolved_questions:
  - need more recent examples
recommended_next_skill: problem-validation
exact_next_input:
  work_shape: self-serve-loop
  surface_model: mobile-native
  loop_model: habit
  archetype: consumer-saas
  modifiers: []
  pace: standard
  required_modifier_blocks:
    - consumer_evidence_gate
    - proof_of_value_gate
  required_focus:
    - problem.frequency
state_updates:
  project_slug: make-product-spec
  route_rationale: discovery complete, validation gap still active
  current_state: validate
  active_skill: problem-validation
  answered_question_ids:
    - user.primary
  suppressed_question_ids:
    - monetization.first-revenue
  unresolved_blockers: []
  stale_docs: []
  last_audit_type: stage_exit
  last_audit_result: issues_found
  revision_iteration: 1
  next_step: problem-validation
  next_step_owner: problem-validation
```

`state_updates`는 full state snapshot이 아니라 persisted state에 apply하는 delta다.

- [PLANNING-STATE-CONTRACT.md](PLANNING-STATE-CONTRACT.md)의 어느 required field든 필요하면 `state_updates`에 나타날 수 있다
- omitted field는 unchanged로 본다
- `suppressed_question_ids`는 `superseded`를 포함한 suppression 결과를 담는다

## 2. Producer Agent Envelope

producer marker:

- `## PLANNING COMPLETE`
- `## PLANNING BLOCKED`

required metadata:

```yaml
agent: discovery-synthesizer
status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
confidence: high | medium | low
evidence_strength: strong | mixed | weak | missing
revision_iteration: 0
recommended_next_step: problem-validation
```

required sections:

- `## Summary`
- `## Output`
- `## Evidence`
- `## Open Questions`
- `## Escalation`

producer marker mapping:

- `## PLANNING COMPLETE` -> `status: DONE` 또는 `DONE_WITH_CONCERNS`
- `## PLANNING BLOCKED` -> `status: BLOCKED` 또는 `NEEDS_CONTEXT`

producer status transition rules:

- missing prerequisite slots -> `NEEDS_CONTEXT`
- route-changing evidence conflict or unverifiable scope -> `BLOCKED`
- usable output with explicit weak evidence -> `DONE_WITH_CONCERNS`
- grounded output with no unresolved blockers -> `DONE`

## 3. Checker Agent Envelope

checker marker:

- `## VERIFICATION PASSED`
- `## ISSUES FOUND`
- `## PLANNING BLOCKED`

required metadata:

```yaml
agent: planning-editor-auditor
status: DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT
confidence: high | medium | low
evidence_strength: strong | mixed | weak | missing
revision_iteration: 1
recommended_next_step: revise-prd
```

required sections:

- `## Summary`
- `## Issues`
- `## Repair Order`
- `## Open Questions`
- `## Escalation`

required issues schema:

```yaml
- dimension: output_completeness
  severity: BLOCKER
  finding: exact next input is missing first acceptance targets
  affected_field: EXECUTION-HANDOFF.exact_next_implementation_input
  suggested_fix: add starting acceptance ids and source-of-truth docs
```

## 4. Planning State Snapshot

```yaml
archetype: marketplace
work_shape: coordinate-and-transact
surface_model: multi-surface
loop_model: transactional
modifiers:
  - commerce-transactional
pace: full
compression_contract: none
required_modifier_blocks:
  - trust_ops_minimum
current_state: synthesize
active_skill: planning-synthesis
route_rationale: trust_ops_minimum unresolved earlier so moved data+rollout before scope freeze
required_blocks_before_scope_freeze:
  - trust_ops_minimum
answered_question_ids:
  - marketplace.side-priority
suppressed_question_ids:
  - monetization.first-revenue
unresolved_blockers:
  - payout reversal SLA still weak
stale_docs:
  - BUSINESS-OPS.md
last_audit_type: synthesize_done
last_audit_result: issues_found
revision_iteration: 1
next_step: revise-business-ops
next_step_owner: planning-editor-auditor
```

## 5. Audit Result Schema

```yaml
audit_type: synthesize_done
audit_result: issues_found
blocker_count: 2
warning_count: 1
info_count: 0
repair_order:
  - source_of_truth
  - traceability
  - stale_docs
```

legacy note:

- older loop logs may still say `verdict`
- canonical field for new output is `audit_result`

## 6. Revision Delta Schema

```yaml
revision_iteration: 2
revision_delta:
  previous_blocker_count: 3
  previous_warning_count: 2
  delta_vs_previous: improved
  attempted_repairs:
    - aligned producer/checker envelope
    - added question-state normalization
  stall_reason: none
```

## 7. Benchmark Fixture

```yaml
scenario_name: consumer-saas-weak-evidence
input_shape: cold_start
target_work_shape: self-serve-loop
target_surface_model: mobile-native
target_loop_model: habit
target_archetype: consumer-saas
target_modifier: privacy-sensitive-consumer
expected_route:
  - idea-discovery
  - problem-validation
required_blocks:
  - consumer_evidence_gate
  - proof_of_value_gate
  - privacy_sensitive_consumer
expected_next_step: next_experiment
known_risks:
  - weak recent-example density
  - notification-permission timing still weak
```

`target_archetype`은 optional compatibility alias로 본다. canonical fixture targeting은 `target_work_shape`, `target_surface_model`, `target_loop_model`을 우선한다.

## 8. Benchmark Result

```yaml
scenario_name: consumer-saas-weak-evidence
specificity: 2
operator_enforceability: 2
harness_strength: 2
anti_fabrication_strength: 3
goal_achievement: 3
best_fix: add exact prerequisite slot list to hypothesis-validation
```
