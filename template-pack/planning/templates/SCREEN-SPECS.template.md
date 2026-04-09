---
status: draft
owner: product-design
last_updated: YYYY-MM-DD
source_of_truth_for:
  - screen.definitions
  - screen.states
  - screen.dependencies
  - screen.acceptance_notes
update_when:
  - screen states change
  - flow changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# SCREEN-SPECS

이 문서의 `screen`은 page/screen뿐 아니라 queue surface, notification surface, connectivity state, API/CLI touchpoint, human handoff checkpoint도 포함할 수 있다.

## Screen List

### screen_id: screen.example

- primary_actor:
- entry_trigger:
- purpose:
- main_sections:
- primary_cta:
- mapped_must_have: use stable `item_id` values from `PRD.md`
- linked_use_case_ids: use stable `use_case_id` values from `PRD.md`
- owner_flow_id: use stable `flow_id` values from `UX-IA.md`
- inputs:
- outputs:
- states:
- edge_cases:
- dependencies:
- source_of_truth_refs:
- acceptance_notes:
- visual_priority:
- layout_mode:
- device_variant_notes:
- required_trust_or_status_signals:
- design_notes:

## Conditional Surface Packs

### public-website-lite

- required when compression_mode = `public-website-lite`
- page_template_type:
- primary_conversion:
- analytics_or_form_acceptance:

### consumer_evidence_gate

- required when weak-evidence consumer rule is active
- do not omit this section if promotion_rule_to_build is unmet

- habit_trigger_surface:
- reminder_cadence:
- reactivation_entry:
- paywall_boundary:
- threshold_instrumentation:

### proof_of_value_gate

- proof_event_surface:
- first_value_instrumentation:
- threshold_visibility_state:
- promotion_rule_state:

### platform_contract

- required when `work_shape = integrate-and-control` or compatibility alias archetype = `platform-integration`

- install_surface:
- auth_surface:
- configure_surface:
- validate_surface:
- recovery_surface:
- health_surface:
- actor_split:

### expansion_model

- required when enterprise-review signals or `self-serve-to-enterprise` modifier are active

- admin_surface:
- security_review_surface:
- procurement_surface:
- entitlement_surface:

### trust_ops_minimum

- provider_verification_surface:
- abuse_detection_or_flag_state:
- dispute_or_refund_surface:
- payout_or_settlement_state:
- no_show_or_cancellation_state:
- manual_review_surface:
- escalation_or_support_state:
- user_visible_remedy_state:
- refund_or_reversal_state:
- liquidity_stop_or_pause_state:
- rollout_cohort_gate_state:

### regulated_workflow_minimum

- case_state_surface:
- approval_status_surface:
- required_artifact_state:
- override_reason_surface:
- denial_or_rework_surface:
- audit_event_or_history_surface:
- role_permission_state:
- delegated_access_state:
- disclosure_safe_communication_state:

### service_ops_minimum

- dispatch_state_surface:
- dispatch_unit_surface:
- assignment_surface:
- service_window_surface:
- parts_source_state:
- parts_shortage_or_backorder_surface:
- parts_shortage_recovery_surface:
- if not relevant, treat these as generic dependency or fulfillment states and mark `N/A` explicitly
- no_show_or_reschedule_surface:
- support_or_callback_surface:
- proof_of_service_surface:

### offline_operability

- offline_or_degraded_state:
- local_write_boundary_surface:
- sync_retry_surface:
- conflict_resolution_surface:
- attachment_capture_surface:
- restore_signal_surface:
- human_escalation_surface:

### knowledge_contract

- citation_surface:
- source_warning_surface:
- missing_source_surface:
- stale_source_surface:
- fallback_or_retrieval_boundary_surface:

### review_queue_model

- queue_intake_surface:
- review_status_surface:
- approval_gate_surface:
- override_surface:
- rework_surface:
- backlog_health_surface:

### privacy_sensitive_consumer

- notification_permission_surface:
- reminder_surface:
- progress_or_streak_surface:
- progress_correction_surface:
- quiet_hours_surface:
- lock_screen_concealment_surface:
- local_vs_sync_boundary_surface:
- background_delivery_failure_surface:
- role_visibility_boundary_surface:
- sensitive_note_sharing_surface:
- export_delete_reset_surface:

### artifact_revision_contract

- authoritative_revision_surface:
- superseded_artifact_surface:
- handoff_receipt_surface:
- change_impact_surface:
- signoff_state_surface:
- comment_to_revision_link_surface:
- revised_schedule_surface:

### local_discovery_trust

- stale_listing_state:
- duplicate_resolution_state:
- claim_or_correction_state:
- popularity_or_ranking_disclosure_state:

### learning_progression_contract

- prerequisite_lock_state:
- due_window_state:
- submission_or_retry_state:
- grade_or_review_state:
- recovery_or_extension_state:

### reservation_lifecycle_contract

- pending_state:
- confirmed_state:
- committed_or_fulfillment_state:
- changed_or_reissued_state:
- cancelled_or_refunded_state:
- returned_or_rma_state:
- support_or_recovery_state:

### availability_booking_contract

- available_state:
- held_state:
- booked_state:
- blocked_or_blackout_state:
- double_book_conflict_state:
- reschedule_or_followup_owner_state:
- communication_trigger_state:

### constraint_exception_contract

- over_limit_state:
- waitlist_or_fallback_state:
- blocked_or_expired_state:
- exception_override_state:
- recovery_state:

### media_membership

- paywall_or_boundary_state:
- entitlement_or_access_state:
- member_access_change_state:
- moderation_surface:
- support_escalation_surface:
- cancel_or_refund_surface:

### exception_recovery_contract

- appeal_or_resubmission_state:
- regrade_or_recheck_state:
- callback_or_followup_state:
- override_state:
- recovery_resolution_state:
