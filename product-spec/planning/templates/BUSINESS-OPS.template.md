---
status: draft
owner: product-ops
last_updated: YYYY-MM-DD
source_of_truth_for:
  - business.business_viability_snapshot
  - business.owner_freeze_snapshot
  - business.primary_adoption_or_intake_motion
  - business.first_customer_path
  - business.first_revenue_motion
  - business.pricing_boundary
  - business.metric_hierarchy
  - business.operating_reality
  - business.regulated_workflow_contract
  - business.required_artifact_policy
  - business.service_ops_model
  - business.offline_operability_model
  - business.knowledge_contract
  - business.review_queue_model
  - business.media_membership_model
  - business.exception_recovery_model
update_when:
  - acquisition or monetization changes
  - dependency or ops model changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# BUSINESS-OPS

> 이름은 `BUSINESS-OPS`지만 commercial product 전용 문서가 아니다.
> 내부툴, nonprofit workflow, public-service workflow도 이 문서를 그대로 쓴다.
> revenue가 핵심이 아니면 `first_revenue_motion`, `pricing_boundary`는 `N/A`로 두고 adoption/intake/operating viability를 우선한다.

## owner_freeze_snapshot

- target_and_primary_actor_ref:
- must_have_scope_ref:
- source_of_truth_owner:
- source_of_truth_ref:
- approval_owner:
- exception_owner:
- policy_or_sla_owner:
- required_visible_state_owner:
- actor_split_ref:
- owner_freeze_status: `pass | partial | block`
- owner_freeze_open_fields:

### starter_example.owner_freeze_snapshot

- target_and_primary_actor_ref: `PROJECT-THESIS.md#target-user`
- must_have_scope_ref: `PRD.md#mvp-scope`
- source_of_truth_owner: `ops.case_system_owner`
- source_of_truth_ref: `BUSINESS-OPS.md#source_of_truth_map.case`
- approval_owner: `ops.approval_owner`
- exception_owner: `ops.exception_owner`
- policy_or_sla_owner: `ops.policy_owner`
- required_visible_state_owner: `ops.status_semantics_owner`
- actor_split_ref: `UX-IA.md#actor_permission_visibility_matrix`
- owner_freeze_status: `partial`
- owner_freeze_open_fields: `booking_authority`, `refund_or_reversal_owner`

fill rule:

- blank 대신 `N/A` + 이유를 우선한다
- `owner_freeze_status = pass`가 아니면 design/prebuild handoff에서 blocker로 취급할 수 있다

## hard_case_owner_freeze_shortcuts

### starter_packet.regulated_booking_revisit

- use when the product shape is `regulated intake + booking + revisit`
- source_of_truth_owner: `ops.scheduling_or_case_owner`
- source_of_truth_ref: `BUSINESS-OPS.md#source_of_truth_map.booking_case`
- approval_owner: `ops.intake_or_clinical_approval_owner`
- exception_owner: `ops.revisit_or_exception_owner`
- policy_or_sla_owner: `ops.booking_policy_owner`
- required_visible_state_owner: `ops.patient_facing_status_owner`
- actor_split_ref: `UX-IA.md#actor_permission_visibility_matrix`
- do not start design until these are explicit:
  - `booking_authority`
  - `hold_expiry_rule`
  - `revisit_or_rebook_recovery_owner`
  - `revisit_or_rebook_recovery_rule`
  - `required_visible_booking_state`

### starter_packet.delegated_callback_legal_intake

- use when the product shape is `delegate + callback + visibility split`
- source_of_truth_owner: `ops.intake_case_owner`
- source_of_truth_ref: `BUSINESS-OPS.md#source_of_truth_map.intake_case`
- approval_owner: `ops.legal_intake_owner`
- exception_owner: `ops.callback_or_exception_owner`
- policy_or_sla_owner: `ops.delegate_and_callback_policy_owner`
- required_visible_state_owner: `ops.callback_status_owner`
- actor_split_ref: `UX-IA.md#actor_permission_visibility_matrix`
- do not start design until these are explicit:
  - `delegate_authorization_artifact_or_flag`
  - `callback_owner_or_sla`
  - `delegated_callback_boundary`
  - `callback_audience_rule`
  - `required_visible_callback_state`

### starter_packet.review_appeal_queue

- use when the product shape is `upload + review queue + appeal`
- source_of_truth_owner: `ops.review_case_owner`
- source_of_truth_ref: `BUSINESS-OPS.md#source_of_truth_map.review_case`
- approval_owner: `ops.review_decision_owner`
- exception_owner: `ops.appeal_or_rework_owner`
- policy_or_sla_owner: `ops.review_policy_owner`
- required_visible_state_owner: `ops.review_status_owner`
- actor_split_ref: `UX-IA.md#actor_permission_visibility_matrix`
- do not start design until these are explicit:
  - `review_source_of_truth`
  - `review_sla`
  - `appeal_or_recheck_owner`
  - `appeal_path_rule`
  - `required_visible_review_state`

## business_viability_snapshot

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

## commercial_model

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

## metric_hierarchy

- north_star:
- acquisition:
- activation:
- retention:
- monetization:
- guardrails:

## Adoption Or Intake Motion

## Monetization Direction

## Pricing Boundary

## First Customer Path

## Buyer Payer And Proof To Buy

## Data Dependencies

## Source Of Truth

### source_of_truth_map

- entity:
- system_of_record:
- read_path:
- write_path:
- conflict_rule:
- freshness_sla:
- write_authority:
- human_override_path:

## Manual Operations

### dependency_register

- dependency:
- why_needed:
- owner:
- fallback:
- go_no_go_impact:

### controls_register

- control:
- why_needed:
- approval_owner:
- blocker_status:
- fallback:

### rollout_plan

- stage:
- rollout_unit:
- entry_criteria:
- success_metric:
- owner:
- rollback_trigger:

## owner_freeze_notes

- why_these_owners_are_canonical:
- what_design_must_not_redefine:
- what_architecture_must_translate:
- reopen_if_any_of_these_change:

## External Dependencies

## Legal Trust Ops Notes

## Conditional Packs

### public-website-lite

- required when compression_mode = `public-website-lite`
- primary_conversion:
- response_owner_or_sla:
- crm_or_lead_source_of_truth:
- direct_or_indirect_monetization:

### consumer_evidence_gate

- required when weak-evidence consumer rule is active
- do not omit this section if promotion_rule_to_build is unmet

- cohort:
- sample_or_traffic_requirement:
- measurement_window:
- owner:
- timebox:
- pass_threshold:
- kill_threshold:
- promotion_rule:

### proof_of_value_gate

- value_claim:
- proof_event:
- measurement_window:
- pass_threshold:
- owner:
- promotion_rule_to_build:
- decision_if_false:
- kill_threshold:

### platform_contract

- required when `work_shape = integrate-and-control` or compatibility alias archetype = `platform-integration`

- onboarding_playbook:
- support_owner_or_sla:
- key_lifecycle:
- versioning_or_deprecation:
- rollback_or_incident_owner:
- customer_implementation_work:

### expansion_model

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

### trust_ops_minimum

- abuse_vector:
- detection_signal:
- provider_verification_rule:
- dispute_or_refund_policy:
- dispute_or_refund_owner:
- payout_or_settlement_policy:
- payout_or_settlement_owner:
- no_show_or_cancellation_rule:
- no_show_or_cancellation_owner:
- user_visible_remedy:
- manual_review_queue_or_path:
- staffing_or_sla_model:
- escalation_owner:
- reversal_or_refund_path:
- refund_or_reversal_owner:
- rollout_unit:
- liquidity_stop_condition:
- rollout_coupling_rule:

### regulated_workflow_minimum

- policy_source_of_truth:
- approval_owner:
- queue_or_worklist_model:
- required_artifacts:
- audit_retention_or_minimum:
- override_reason_policy:
- appeal_or_override_owner:
- manual_channel_path:
- denial_or_rework_owner:
- escalation_ladder_or_sla:
- required_visible_state_owner:
- delegated_access_policy:
- delegated_authorization_rule_or_artifact:
- sensitive_communication_boundary:

### service_ops_minimum

- dispatch_owner:
- dispatch_unit:
- staffing_or_utilization_model:
- service_window_rules:
- exception_queue_model:
- phone_or_support_handoff:
- support_or_callback_handoff:
- callback_or_visibility_boundary:
- proof_of_service_rule:
- parts_source_of_truth:
- parts_coordination_rule:
- parts_shortage_recovery:
- resource_or_fulfillment_note:
- if there is no inventory/equipment/fulfillment dependency, set `parts_*` to `N/A` and explain the real dependency here
- first_time_fix_or_revisit_model:

### offline_operability

- local_authority_boundary:
- local_storage_boundary:
- sync_policy:
- conflict_owner_or_rule:
- degraded_capability_matrix:
- attachment_capture_policy:
- human_escalation:
- restore_owner:

### knowledge_contract

- allowed_source_set:
- forbidden_source_set:
- freshness_owner:
- citation_policy:
- retrieval_boundary:
- missing_or_stale_source_fallback:
- override_owner:

### review_queue_model

- review_unit:
- review_staffing_model:
- queue_or_backlog_policy:
- review_source_of_truth:
- review_sla:
- approval_threshold:
- override_owner:
- appeal_or_recheck_owner:
- appeal_path_rule:
- rework_or_rejection_path:
- required_visible_review_state:
- queue_health_signal:

### starter_example.review_queue_model

- review_unit: `claim package`
- review_staffing_model: `assigned reviewer with overflow triage queue`
- queue_or_backlog_policy: `FIFO unless urgency flag or missing artifact pause applies`
- review_source_of_truth: `case system plus upload review queue`
- review_sla: `first decision within 2 business days`
- approval_threshold: `required documents present and rule checks satisfied`
- override_owner: `senior reviewer`
- appeal_or_recheck_owner: `appeal desk owner`
- appeal_path_rule: `denial exposes appeal window, required artifact list, and recheck route`
- rework_or_rejection_path: `request correction before final denial when policy allows`
- required_visible_review_state: `uploaded`, `under review`, `needs correction`, `approved`, `denied`, `appeal received`, `appeal decided`
- queue_health_signal: `aging bucket and breached SLA count`

### privacy_sensitive_consumer

- notification_permission_timing:
- progress_source_of_truth:
- streak_reset_rebuild_rule:
- sync_conflict_progress_rule:
- user_visible_progress_correction_path:
- quiet_hours_owner_or_rule:
- lock_screen_sensitivity:
- local_vs_sync_boundary:
- background_delivery_policy:
- role_based_visibility_boundary:
- sensitive_note_sharing_rule:
- export_delete_reset_owner:
- export_delete_reset_sla_or_behavior:

### artifact_revision_contract

- authoritative_revision_set:
- supersession_rule:
- handoff_receipt_rule:
- change_impact_link:
- signoff_state_rule:
- comment_to_revision_link_rule:
- baseline_vs_revised_schedule_rule:

### local_discovery_trust

- canonical_entity_model:
- duplicate_rule:
- freshness_sla_owner:
- claim_moderation_owner_or_policy:
- popularity_recommendation_trust_policy:

### learning_progression_contract

- progression_unit:
- unlock_prerequisite_rule:
- cohort_calendar_or_due_window:
- grading_review_owner_sla:
- completion_source_of_truth:
- learner_recovery_owner:

### reservation_lifecycle_contract

- reservation_state_model:
- external_or_operational_source_of_truth:
- external_write_authority:
- booking_authority:
- schedule_or_state_change_owner:
- revisit_or_rebook_recovery_owner:
- revisit_or_rebook_recovery_rule:
- reissue_rebook_cancel_rule:
- required_visible_booking_state:
- return_or_rma_rule:
- post_commitment_support_sla:

### starter_example.reservation_lifecycle_contract

- reservation_state_model: `requested -> held -> confirmed -> rescheduled -> completed -> revisit due -> cancelled`
- external_or_operational_source_of_truth: `clinic scheduling system`
- external_write_authority: `scheduling service only`
- booking_authority: `front desk system confirms or changes the booked slot`
- schedule_or_state_change_owner: `clinic scheduling owner`
- revisit_or_rebook_recovery_owner: `care coordination desk`
- revisit_or_rebook_recovery_rule: `missed or expired revisit routes to coordination desk with next eligible slot`
- reissue_rebook_cancel_rule: `same-day reschedule by staff; requester may ask but cannot force a slot change`
- required_visible_booking_state: `appointment held`, `confirmed`, `needs callback`, `revisit needed`
- return_or_rma_rule: `N/A - service booking, not physical return`
- post_commitment_support_sla: `callback within 1 business day`

### availability_booking_contract

- bookable_unit:
- availability_source_of_truth:
- booking_authority:
- hold_expiry_rule:
- turnaround_buffer_rule:
- blackout_or_override_policy:
- double_book_resolution:
- onsite_exception_policy:
- customer_comms_trigger_map:
- reschedule_or_followup_owner:
- required_visible_booking_state:

### constraint_exception_contract

- authority_source:
- threshold_or_ceiling:
- exception_trigger:
- manual_owner:
- recovery_or_promotion_rule:

### media_membership

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
- required_visible_state_owner:

### exception_recovery_contract

- state_source_of_truth:
- override_or_exception_owner:
- appeal_or_override_owner:
- user_visible_recovery_path:
- required_visible_state_owner:
- communication_boundary:
- delegate_authorization_artifact_or_flag:
- callback_owner_or_sla:
- delegated_callback_boundary:
- callback_audience_rule:
- required_visible_callback_state:
- audit_or_event_requirement:
- appeal_regrade_callback_rule:
- timeout_or_sla:

### starter_example.exception_recovery_contract

- state_source_of_truth: `intake case system`
- override_or_exception_owner: `legal ops owner`
- appeal_or_override_owner: `practice lead`
- user_visible_recovery_path: `request callback or update delegated contact`
- required_visible_state_owner: `legal intake ops owner`
- communication_boundary: `client sees case receipt and callback window; delegate sees only authorized summary`
- delegate_authorization_artifact_or_flag: `signed delegate authorization on file`
- callback_owner_or_sla: `intake coordinator, 4 business hours`
- delegated_callback_boundary: `delegate may schedule and receive logistics only; legal advice returns to client unless authorization flag is present`
- callback_audience_rule: `callback can go to delegate only when signed authorization is valid`
- required_visible_callback_state: `received`, `awaiting callback`, `callback scheduled`, `needs client confirmation`, `closed`
- audit_or_event_requirement: `record delegate authorization and callback attempt`
- appeal_regrade_callback_rule: `N/A unless formal complaint path exists`
- timeout_or_sla: `escalate after 4 business hours without callback`
