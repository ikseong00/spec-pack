---
status: draft
owner: product
last_updated: YYYY-MM-DD
source_of_truth_for:
  - prd.representative_use_cases
  - prd.primary_use_case
  - prd.feature_behavior_contracts
  - prd.must_have_scope
  - prd.defer_scope
  - prd.out_of_scope
  - prd.proof_event
  - prd.success_criteria
  - prd.terminology_index
update_when:
  - mvp scope changes
  - proof event changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# PRD

## Product Goals

## Representative Use Cases

- use_case_id:
- actor:
- trigger_context:
- current_alternative:
- desired_outcome:
- first_value_event:
- blocked_or_failed_when:
- recovery_or_fallback:
- completion_signal:

## Primary Use Case

- use_case_id:
- actor:
- trigger_context:
- current_alternative:
- desired_outcome:
- first_value_event:
- blocked_or_failed_when:
- recovery_or_fallback:
- completion_signal:

## Feature Structure

- feature_group:
- why_it_exists:
- mapped_must_have_ids:
- primary_actor_set:
- major_rules_or_constraints:

## Feature Behavior Contracts

- feature_id:
- summary:
- primary_actor:
- trigger_or_entry:
- visible_user_outcome:
- completion_signal:
- preconditions_or_eligibility:
- blocked_or_not_allowed_cases:
- role_or_visibility_notes:
- policy_or_rule_refs: use canonical policy/source refs or explicit `none`
- exception_or_recovery_notes:

## MVP Scope

### must_have

- item_id:
- statement:
- why_required:
- linked_use_case_ids: use stable `use_case_id` values from `Representative Use Cases`
- primary_actor:
- trigger_or_entry:
- visible_user_outcome:
- completion_signal:
- preconditions_or_eligibility:
- blocked_or_not_allowed_cases:
- role_or_visibility_notes:
- policy_or_rule_refs: use canonical policy/source refs or explicit `none`
- exception_or_recovery_notes:
- proof_event:
- cut_if_missing_reason:

## Defer

- item_id:
- statement:
- why_not_now:

## Out Of Scope

- item_id:
- statement:
- why_out:

## Proof Event

## Success Criteria

## Terminology Index

- fill this when the same concept can be named more than one way across docs

- term:
- canonical_meaning:
- do_not_confuse_with:
- owning_doc:

## Conditional Planning Packs

### commerce-transactional

- provider_verification_flow:
- dispute_or_refund_flow:
- payout_or_settlement_flow:
- manual_review_flow:
- rollout_cohort_gate:
