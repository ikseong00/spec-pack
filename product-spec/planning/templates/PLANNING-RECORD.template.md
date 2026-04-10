---
status: draft
owner: product
last_updated: YYYY-MM-DD
source_of_truth_for:
  - record.canonical_planning_register
update_when:
  - any planning decision changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# PLANNING-RECORD

## Facts

## Assumptions

## Decisions

## Open Questions

## Risks

## Next Step

### next_step_gate

- handoff_mode:
- exactly_one_of:
  - next_experiment
  - next_implementation_input
- gate_reason:
- fail_if_both_or_neither_are_filled: true

## Metric Hierarchy

## Structured Blocks

### domain_shape_snapshot

- work_shape:
- surface_model:
- loop_model:
- modifiers:
- compatibility_archetype_if_any:
- primary_risk_axis:
- current_gap:
- pace:
- why_this_shape:

### user_model

- primary_target:
- why_this_segment_first:
- secondary_targets:
- segment_map:
- role_map:
- context_of_use:
- trigger:
- frequency:
- constraints:
- economic_buyer_if_known:
- buying_committee_path_if_known:

### recent_examples

- id:
- actor:
- when:
- trigger:
- summary:
- current_steps:
- current_workaround:
- observed_cost:
- source_type:
- evidence_type:
- evidence_tier:
- source_ref:
- counterevidence:
- confidence:

### use_case_cards

- id:
- actor:
- segment:
- trigger_context:
- current_alternative:
- desired_outcome:
- first_value_event:
- proof_event:
- trust_or_risk_point:
- frequency:
- first_time_vs_repeat:
- repeat_trigger:
- recovery_path:

### workflow_contract

- work_unit:
- entry_points:
- state_model:
- role_handoffs:
- queue_or_schedule_model:
- notification_or_callback_model:
- manual_escape_hatch:
- exit_or_done_signal:
- failure_or_rework_path:
- authoritative_owner:

### question_state

- question_id:
- status:
- answer_summary:
- source_ref:
- confidence:
- reask_only_if:

### market_evidence_brief

- category_definition:
- beachhead_segment:
- demand_proxies:
- why_now_signals:
- distribution_feasibility:
- budget_or_wtp_signal:
- market_risks:
- claim_type:
- source_grade:
- observed_at:
- stale_after:

### business_viability_snapshot

- target_segment:
- primary_adoption_or_intake_motion:
- channel_plausibility_evidence:
- acquisition_owner:
- acquisition_asset:
- acquisition_cadence:
- time_to_feedback:
- first_customer_path:
- activation_event:
- retention_loop:
- first_revenue_motion:
- pricing_boundary:
- buyer_or_buying_committee:
- proof_required_to_buy:
- buyer_payer_trigger:
- cost_to_serve_assumption:
- minimum_viability_note:
- main_business_risk:

### conditional blocks when applicable

#### hypothesis_register

#### competitor_table

- entity:
- type:
- segment:
- geo:
- price_model:
- proof_point:
- switching_cost:
- source_ref:
- observed_at:
- evidence_type:
- confidence:
- unknowns:
- implication_for_wedge:

#### commercial_model

- pricing_anchor:
- candidate_models:
- recommended_model:
- price_point_or_range:
- package_boundary:
- package_ladder:
- sales_handoff_trigger:
- economic_buyer:
- proof_required_to_buy:
- willingness_to_pay_or_roi_signal:
- cost_to_serve_note:
- owner_of_close:
- kill_threshold:

#### screen_specs

#### execution_handoff

- handoff_mode:
- implementation_intent:
- phase_split:
- task_list:
- acceptance_criteria:
- non_functional_notes:
- blockers:
- exact_next_experiment_input:
- exact_next_implementation_input:
- update_after_build_checklist:

#### consumer_evidence_gate

- risky_assumption:
- cohort_definition:
- sample_size_or_traffic_requirement:
- measurement_window:
- falsification_signal:
- pass_threshold:
- owner:
- timebox:
- decision_if_false:
- paywall_boundary:
- habit_trigger:
- reactivation_path:
- upgrade_proof:
- kill_threshold:
- promotion_rule_to_build:

#### proof_of_value_gate

- value_claim:
- proof_event:
- measurement_window:
- pass_threshold:
- owner:
- promotion_rule_to_build:
- decision_if_false:
- kill_threshold:

#### platform_contract

- required when `work_shape = integrate-and-control` or compatibility alias archetype = `platform-integration`
- first_success_path:
- auth_model:
- scope_or_permission_model:
- key_lifecycle:
- configure_surface:
- validation_surface:
- rate_limit_or_budget_limit:
- retry_idempotency_rule:
- sync_direction:
- reconciliation_rule:
- recovery_path:
- health_signals:
- versioning_or_backward_compatibility:
- delivery_observability:
- developer_onboarding_assets:
- support_owner_or_sla:
- incident_owner:
- customer_implementation_work:

#### expansion_model

- required when enterprise-review signals or `self-serve-to-enterprise` modifier are active
- stage_role_map:
- package_ladder:
- sales_handoff_trigger:
- pilot_success_criteria:
- enterprise_entitlements:
- security_or_procurement_gates:
- stage_thresholds:
- artifact_vs_process_split:
- entitlement_unlock_timing:

#### trust_ops_minimum

- abuse_vector:
- detection_signal:
- owner:
- provider_verification_rule:
- dispute_or_refund_policy:
- dispute_or_refund_owner:
- payout_or_settlement_policy:
- payout_or_settlement_owner:
- no_show_or_cancellation_rule:
- no_show_or_cancellation_owner:
- user_visible_remedy:
- manual_review_path:
- staffing_or_sla_model:
- escalation_owner:
- reversal_or_refund_path:
- rollout_unit:
- liquidity_stop_condition:
- rollout_coupling_rule:

#### regulated_workflow_minimum

- policy_source_of_truth:
- approval_matrix:
- case_state_model:
- worklist_or_queue_model:
- required_artifacts:
- role_permission_map:
- audit_trail_minimum:
- override_reason_policy:
- manual_channel_path:
- denial_or_rework_path:
- escalation_or_sla_owner:
- delegated_access_policy:
- sensitive_communication_boundary:

#### service_ops_minimum

- job_or_case_lifecycle:
- dispatch_owner:
- dispatch_unit:
- scheduling_constraints:
- service_window_policy:
- exception_queue_model:
- phone_or_support_handoff:
- support_or_callback_handoff:
- proof_of_service_rule:
- parts_source_of_truth:
- parts_coordination_rule:
- parts_shortage_recovery:
- resource_or_fulfillment_note:
- if the service has no inventory/equipment/fulfillment dependency, set `parts_*` to `N/A` and explain here
- first_time_fix_or_revisit_model:
- operational_success_signal:

#### offline_operability

- minimum_usable_capabilities:
- local_write_authority:
- local_storage_boundary:
- sync_trigger:
- conflict_resolution_rule:
- degraded_write_boundary:
- attachment_capture_policy:
- restore_signal:
- human_escalation:
- offline_exception_owner:

#### knowledge_contract

- allowed_source_set:
- forbidden_source_set:
- freshness_owner:
- citation_rule:
- retrieval_or_lookup_boundary:
- missing_source_fallback:
- stale_source_fallback:
- override_rule:

#### review_queue_model

- review_unit:
- queue_owner:
- queue_or_backlog_model:
- review_sla:
- approval_threshold:
- override_owner:
- rework_path:
- wrong_output_recovery:
- queue_health_signal:

#### privacy_sensitive_consumer

- notification_permission_timing:
- notification_permission_copy_boundary:
- reminder_cadence:
- progress_source_of_truth:
- streak_reset_rebuild_rule:
- sync_conflict_progress_rule:
- user_visible_progress_correction_path:
- quiet_hours_rule:
- lock_screen_sensitivity:
- local_vs_sync_boundary:
- background_delivery_failure_handling:
- role_based_visibility_boundary:
- sensitive_note_sharing_rule:
- export_delete_reset_owner:
- export_delete_reset_behavior:

#### artifact_revision_contract

- authoritative_revision_set:
- supersession_rule:
- handoff_receipt_rule:
- change_impact_link:
- signoff_state_rule:
- comment_to_revision_link_rule:
- baseline_vs_revised_schedule_rule:

#### local_discovery_trust

- canonical_entity_model:
- duplicate_rule:
- freshness_sla_owner:
- claim_moderation_policy:
- popularity_recommendation_trust_policy:

#### learning_progression_contract

- progression_unit:
- unlock_prerequisite_rule:
- cohort_calendar_or_due_window:
- submission_retry_policy:
- grading_review_owner_sla:
- completion_source_of_truth:
- learner_recovery_path:

#### reservation_lifecycle_contract

- reservation_state_model:
- external_or_operational_source_of_truth:
- external_write_authority:
- schedule_or_state_change_owner:
- reissue_rebook_cancel_rule:
- return_or_rma_rule:
- post_commitment_support_sla:

#### availability_booking_contract

- bookable_unit:
- availability_source_of_truth:
- hold_expiry_rule:
- turnaround_buffer_rule:
- blackout_or_override_policy:
- double_book_resolution:
- onsite_exception_policy:
- customer_comms_trigger_map:
- reschedule_or_followup_owner:

#### constraint_exception_contract

- authority_source:
- threshold_or_ceiling:
- exception_trigger:
- manual_owner:
- recovery_or_promotion_rule:

#### media_membership

- free_boundary:
- package_ladder:
- entitlement_unlock_rule:
- member_access_state_rule:
- paid_boundary_trigger:
- moderation_owner:
- support_owner_or_sla:
- support_recovery_sla:
- editorial_freshness_owner:
- refund_or_cancel_policy:

#### exception_recovery_contract

- state_source_of_truth:
- override_or_exception_owner:
- user_visible_recovery_path:
- communication_boundary:
- audit_or_event_requirement:
- appeal_regrade_callback_rule:
- timeout_or_sla:

#### data_dependencies

#### source_of_truth_map

#### manual_operations

#### dependency_register

#### controls_register

#### rollout_plan

#### compression_mode

- mode:
- why_allowed:
- required_conditional_packs:

## One-Page Fixed Slots

- derived_only: true
- owning_docs_follow_projection_matrix: true
- do_not_edit_manually: regenerate from owning docs and standalone one-page artifact
- one_line_product:
- primary_target:
- why_this_segment_first:
- current_alternative:
- primary_use_case:
- anchor_recent_example:
- positioning_difference:
- first_value_moment:
- core_first_time_flow:
- repeat_flow:
- must_have:
- defer:
- out_of_scope:
- primary_acquisition_motion:
- first_customer_path:
- first_revenue_motion:
- pricing_boundary:
- main_risks:
- business_viability_snapshot:
- success_metrics:
- guardrail_metrics:
- exactly_one_of:
  - next_experiment
  - next_implementation_input
