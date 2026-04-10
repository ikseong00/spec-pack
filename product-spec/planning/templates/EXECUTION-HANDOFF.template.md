---
status: draft
owner: product-engineering
last_updated: YYYY-MM-DD
source_of_truth_for:
  - handoff.next_experiment_input
  - handoff.next_implementation_input
  - handoff.phase_split
  - handoff.task_list
  - handoff.acceptance_criteria
  - handoff.feature_coverage_check
  - handoff.execution_blockers
  - handoff.workflow_slice_plan
  - handoff.exception_recovery_plan
update_when:
  - next step changes
  - scope or acceptance changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# EXECUTION-HANDOFF

## Handoff Mode

- handoff_mode:
- exactly one next-input section below is authoritative
- if `experiment`, remove or leave blank the implementation-input section in the final doc
- if `implementation`, remove or leave blank the experiment-input section in the final doc

## Implementation Intent

## Phase Split

- phase_id:
- goal:
- mapped_must_have: use stable `item_id` values from `PRD.md`
- mapped_screen_ids: use stable `screen_id` values from `SCREEN-SPECS.md`
- mapped_block_refs:
- mapped_risk_refs:
- exit_criteria:

## Task List

- task_id:
- phase_id:
- statement:
- mapped_screen_ids: use stable `screen_id` values from `SCREEN-SPECS.md`
- mapped_must_have: use stable `item_id` values from `PRD.md`
- mapped_block_refs:
- mapped_risk_refs:
- done_signal:

## Acceptance Criteria

- acceptance_id:
- phase_id:
- statement:
- proof_type:
- linked_task_ids: use stable `task_id` values from `Task List`
- linked_screen_ids: use stable `screen_id` values from `SCREEN-SPECS.md`
- linked_must_have: use stable `item_id` values from `PRD.md`
- linked_metric_or_risk:
- linked_block_refs:

## Non-Functional Notes

## Owner Freeze Status

- owner_freeze_status:
- blocking_owner_fields:
- owner_source_docs:
- handoff_must_not_redefine:

### starter_example.owner_freeze_status

- owner_freeze_status: `partial`
- blocking_owner_fields: `booking_authority`, `revisit_or_rebook_recovery_owner`
- owner_source_docs: `BUSINESS-OPS.md#owner_freeze_snapshot`, `BUSINESS-OPS.md#reservation_lifecycle_contract`
- handoff_must_not_redefine: `approval owner`, `source of truth`, `required visible state semantics`

## Blockers

## Exact Next Experiment Input

- only fill when handoff_mode is `experiment`
- required when weak-evidence consumer rule is active and promotion_rule_to_build is unmet

- experiment_id:
- owner:
- timebox:
- cohort_or_sample:
- measurement_window:
- pass_threshold:
- kill_threshold:
- promotion_rule_to_build:

## Exact Next Implementation Input

- only fill when handoff_mode is `implementation`
- invalid when weak-evidence consumer rule is active and promotion_rule_to_build is unmet

- starting_phase_ids:
- starting_task_ids:
- source_of_truth_docs:
- blocking_open_questions:
- first_acceptance_targets:

## Feature Coverage Check

- item_id: use stable `item_id` values from `PRD.md`
- covered_by_phase_ids:
- covered_by_task_ids:
- covered_by_screen_ids:
- key_conditions_or_rules:
- role_or_visibility_notes:
- exception_or_recovery_path:
- completion_signal: restate the observable user-visible or operator-visible completion outcome, not KPI only
- developer_should_not_have_to_guess:

## Update After Build Checklist

## Conditional Execution Packs

### public-website-lite

- required when compression_mode = `public-website-lite`
- page_template_slices:
- analytics_acceptance:
- form_or_cms_acceptance:

### consumer_evidence_gate

- experiment_phase_ids:
- experiment_task_ids:
- experiment_acceptance_targets:
- pass_threshold:
- timebox:
- kill_threshold:
- paywall_boundary:
- habit_acceptance:
- reactivation_acceptance:
- build_unlock_rule:

### proof_of_value_gate

- proof_event_slices:
- first_value_acceptance:
- measurement_window:
- pass_threshold:
- kill_threshold:
- build_unlock_rule:

### platform_contract

- required when `work_shape = integrate-and-control` or compatibility alias archetype = `platform-integration`
- auth_or_scope_slices:
- delivery_or_reconciliation_slices:
- observability_or_health_slices:
- rollback_slices:
- docs_sdk_cli_slices:

### expansion_model

- required when enterprise-review signals or `self-serve-to-enterprise` modifier are active
- self_serve_stage_matrix:
- admin_controls_matrix:
- security_review_matrix:
- procurement_matrix:
- pilot_matrix:
- contract_conversion_matrix:
- enterprise_stage_matrix:
- entitlement_delivery_matrix:

### trust_ops_minimum

- provider_verification_slices:
- abuse_detection_slices:
- dispute_or_refund_slices:
- payout_or_settlement_slices:
- manual_review_sla_slices:
- escalation_slices:
- no_show_or_cancellation_slices:
- user_visible_remedy_slices:
- reversal_or_refund_slices:
- liquidity_stop_acceptance:
- rollout_cohort_acceptance:

### regulated_workflow_minimum

- workflow_state_machine_slices:
- permission_or_approval_matrix_slices:
- required_artifact_slices:
- audit_log_acceptance:
- denial_or_rework_slices:
- appeal_or_override_slices:
- required_visible_state_slices:
- manual_channel_capture_slices:
- sla_or_escalation_acceptance:
- delegated_access_slices:
- delegated_authorization_slices:
- communication_boundary_acceptance:

### service_ops_minimum

- dispatch_slices:
- dispatch_unit_slices:
- scheduling_or_service_window_slices:
- technician_or_role_handoff_slices:
- parts_source_of_truth_slices:
- parts_shortage_or_backorder_slices:
- parts_shortage_recovery_slices:
- if not relevant, replace with generic dependency or fulfillment recovery slices and mark `N/A` for parts-specific rows
- no_show_or_reschedule_slices:
- support_or_callback_handoff_slices:
- callback_authority_slices:
- proof_of_service_acceptance:

### offline_operability

- local_write_slices:
- degraded_mode_slices:
- sync_recovery_slices:
- conflict_resolution_slices:
- attachment_capture_slices:
- restore_signal_acceptance:
- human_escalation_slices:

### knowledge_contract

- source_policy_slices:
- retrieval_boundary_slices:
- citation_acceptance:
- freshness_or_fallback_acceptance:
- override_logging_slices:

### review_queue_model

- review_queue_slices:
- review_source_of_truth_slices:
- approval_threshold_slices:
- override_slices:
- appeal_or_recheck_slices:
- rework_slices:
- required_visible_review_state_slices:
- queue_health_acceptance:

### privacy_sensitive_consumer

- notification_permission_slices:
- reminder_or_quiet_hours_slices:
- progress_integrity_slices:
- progress_correction_slices:
- lock_screen_privacy_slices:
- local_vs_sync_boundary_slices:
- background_delivery_failure_slices:
- role_visibility_boundary_slices:
- sensitive_note_sharing_slices:
- export_delete_reset_slices:

### artifact_revision_contract

- revision_propagation_slices:
- supersession_acceptance:
- handoff_receipt_slices:
- change_order_or_impact_link_slices:
- signoff_state_slices:
- comment_to_revision_link_slices:
- revised_schedule_acceptance:

### local_discovery_trust

- freshness_slices:
- duplicate_resolution_slices:
- claim_or_correction_slices:
- ranking_disclosure_acceptance:

### learning_progression_contract

- progression_slices:
- grading_or_review_slices:
- retry_or_resubmission_slices:
- completion_acceptance:
- learner_recovery_slices:

### reservation_lifecycle_contract

- reservation_state_slices:
- external_write_authority_slices:
- booking_authority_slices:
- change_owner_slices:
- revisit_or_rebook_recovery_slices:
- reissue_rebook_cancel_slices:
- visible_booking_state_acceptance:
- return_or_rma_slices:
- disruption_support_acceptance:

### availability_booking_contract

- availability_authority_slices:
- hold_expiry_slices:
- turnaround_buffer_slices:
- blackout_or_override_slices:
- double_book_resolution_slices:
- onsite_exception_slices:
- reschedule_or_followup_owner_slices:
- required_visible_booking_state_slices:
- customer_comms_acceptance:

### constraint_exception_contract

- threshold_slices:
- exception_trigger_slices:
- manual_override_slices:
- fallback_or_waitlist_slices:
- recovery_acceptance:

### media_membership

- entitlement_slices:
- member_access_state_slices:
- paid_boundary_slices:
- moderation_slices:
- support_sla_slices:
- cancel_or_refund_slices:

### exception_recovery_contract

- exception_owner_slices:
- delegate_authorization_slices:
- callback_or_followup_slices:
- delegated_callback_boundary_slices:
- override_or_appeal_slices:
- required_visible_callback_state_slices:
- recovery_acceptance:

## Hard-Case Slice Seeds

### starter_seed.regulated_booking_revisit

- workflow_state_machine_slices: `intake submitted`, `slot held`, `booking confirmed`, `revisit required`, `rebook pending`
- booking_authority_slices: `only scheduling owner can confirm or move a slot`
- revisit_or_rebook_recovery_slices: `missed revisit creates recovery task and callback path`
- visible_booking_state_acceptance: `requester always sees current booking state and next action`

### starter_seed.delegated_callback_visibility

- delegated_access_slices: `delegate scope is explicit before callback routing`
- delegated_authorization_slices: `authorization artifact or flag is checked before delegate callback is allowed`
- callback_authority_slices: `only authorized recipient can receive callback logistics`
- delegated_callback_boundary_slices: `legal advice and logistics have different visibility`
- required_visible_callback_state_slices: `received`, `awaiting callback`, `scheduled`, `closed`

### starter_seed.review_appeal_queue

- review_source_of_truth_slices: `upload receipt and review queue read from the same case source`
- appeal_or_recheck_slices: `denial exposes appeal route, owner, and due window`
- required_visible_review_state_slices: `uploaded`, `under review`, `needs correction`, `approved`, `denied`, `appeal received`
- queue_health_acceptance: `aged items and breached SLA are observable`

## Traceability Checklist

- phase is a vertical slice of a must-have flow
- task is a single-screen, queue-policy, sync-policy, or infra unit inside a phase
- acceptance is observable proof at task level
- every must_have item maps to at least one screen
- every must_have item maps to at least one phase
- every must_have item maps to at least one task
- every must_have item maps to at least one acceptance criterion
- every must_have item has at least one `Feature Coverage Check` row
- each coverage row states key conditions, role split, and exception or recovery path
- every task row links to at least one acceptance criterion
- every conditional block that shapes implementation maps to phase, task, or acceptance
- every major risk maps to phase, task, or acceptance
- regulated, service-ops, offline, and review-queue blocks are never left as ops prose only
