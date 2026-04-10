---
status: draft
owner: product-design
last_updated: YYYY-MM-DD
source_of_truth_for:
  - ux.first_value_moment
  - ux.first_time_flow
  - ux.repeat_flow
  - ux.recovery_flow
  - ux.ia
  - ux.navigation_model
  - ux.screen_page_map
  - ux.workflow_lifecycle_map
  - ux.membership_boundary_flow
  - ux.exception_recovery_flow
update_when:
  - primary flow changes
  - page map changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# UX-IA

## canonical_projection_map

| UX surface | Canonical block or concept |
| --- | --- |
| `ux.first_value_moment` | `ux.first_value_moment` |
| `ux.first_time_flow` | `ux.first_time_flow` |
| `ux.repeat_flow` | `ux.repeat_flow` |
| `ux.recovery_flow` | `ux.recovery_flow` |
| `ux.workflow_lifecycle_map` | `ux.workflow_lifecycle_map` |
| `trust_ops_minimum` | `trust_ops_minimum` |
| `regulated_workflow_minimum` | `regulated_workflow_minimum` |
| `service_ops_minimum` | `service_ops_minimum` |
| `knowledge_contract` | `knowledge_contract` |
| `review_queue_model` | `review_queue_model` |
| `privacy_sensitive_consumer` | `privacy_sensitive_consumer` |
| `artifact_revision_contract` | `artifact_revision_contract` |
| `local_discovery_trust` | UX projection of `local_discovery_trust` |
| `learning_progression_contract` | `learning_progression_contract` |
| `reservation_lifecycle_contract` | `reservation_lifecycle_contract` |
| `availability_booking_contract` | `availability_booking_contract` |
| `constraint_exception_contract` | `constraint_exception_contract` |
| `ux.membership_boundary_flow` | UX projection of `media_membership` |
| `ux.exception_recovery_flow` | `ux.exception_recovery_flow` + projection of `exception_recovery_contract` |
| `platform_contract` | UX projection of `platform_contract` |

## ux.first_value_moment

- value_event_id:
- trigger_context:
- triggering_screen_id:
- visible_outcome:
- time_to_value_expectation:

### starter_example.first_value_moment

- value_event_id: `value.primary_success`
- trigger_context: `user reaches the first trustworthy completion or clear next step`
- triggering_screen_id: `screen.primary_entry`
- visible_outcome: `user sees status, proof, and the next action without inference`
- time_to_value_expectation: `within the first primary session`

## flow_step_registry

- step_id:
- owner_flow_id: use stable `flow_id`
- sequence_number:
- actor:
- trigger:
- screen_id:
- mapped_must_have:
- condition_or_policy_note:
- blocked_or_detour_rule:
- expected_outcome:

## ux.first_time_flow

- flow_id:
- ordered_step_ids: use stable `step_id` values from `Flow Step Registry`
- entry_condition:
- exit_condition:
- mapped_screen_ids: use stable `screen_id` values from `Screen Or Page Map`

## ux.repeat_flow

- flow_id:
- ordered_step_ids: use stable `step_id` values from `Flow Step Registry`
- entry_condition:
- exit_condition:
- mapped_screen_ids: use stable `screen_id` values from `Screen Or Page Map`

## ux.recovery_flow

- flow_id:
- ordered_step_ids: use stable `step_id` values from `Flow Step Registry`
- failure_or_return_trigger:
- exit_condition:
- mapped_screen_ids: use stable `screen_id` values from `Screen Or Page Map`

## ux.workflow_lifecycle_map

- required when the product is workflow, queue, service-ops, regulated, review-gated, or offline-shaped
- work_unit:
- queue_or_worklist:
- lifecycle_states:
- role_handoffs:
- manual_phone_fax_or_human_step:
- denial_or_rework_loop:
- escalation_or_sla_boundary:
- mapped_screen_ids:

## ux.ia

## ux.navigation_model

## ux.screen_page_map

- screen_id:
- page_or_template_name:
- mapped_must_have:
- owner_flow_id: use stable `flow_id`

## actor_permission_visibility_matrix

- actor_id:
- primary_goal:
- can_view_screen_ids:
- can_trigger_step_ids:
- hidden_or_redacted_signals:
- delegated_access_rule:
- override_or_admin_power:

### starter_example.actor_permission_visibility_matrix

- actor_id: `actor.requester`
- primary_goal: `start and track the main task`
- can_view_screen_ids: `screen.primary_entry`, `screen.primary_task`, `screen.recovery_or_detail`
- can_trigger_step_ids: `flow.primary.submit`, `flow.recovery.retry`
- hidden_or_redacted_signals: `internal reviewer note`, `admin override reason`
- delegated_access_rule: `may delegate only if the product allows delegated access explicitly`
- override_or_admin_power: `none`

- actor_id: `actor.reviewer`
- primary_goal: `review, approve, or escalate`
- can_view_screen_ids: `screen.primary_task`, `screen.recovery_or_detail`
- can_trigger_step_ids: `flow.review.approve`, `flow.review.escalate`, `flow.recovery.override`
- hidden_or_redacted_signals: `private end-user reminder channel`
- delegated_access_rule: `may reassign according to queue or admin policy`
- override_or_admin_power: `review override only when policy allows`

## canonical_state_owner_registry

- state_family_id:
- canonical_owner_doc:
- policy_owner_ref:
- source_of_truth_ref:
- reopen_planning_if_unresolved:

### starter_example.canonical_state_owner_registry

- state_family_id: `state.approval_or_review`
- canonical_owner_doc: `BUSINESS-OPS.md`
- policy_owner_ref: `ops.approval_owner`
- source_of_truth_ref: `ops.case_or_review_source`
- reopen_planning_if_unresolved: `true when approval owner, SLA, or visible status semantics are not fixed`

- state_family_id: `state.recovery_or_exception`
- canonical_owner_doc: `UX-IA.md`
- policy_owner_ref: `ops.exception_owner`
- source_of_truth_ref: `ops.exception_or_case_source`
- reopen_planning_if_unresolved: `true when exception owner or escalation path is unclear`

## trust_status_signal_registry

- signal_id:
- meaning:
- must_be_visible_on_screen_ids:
- never_hide_rule:
- visible_to_actors:
- hidden_from_actors:
- freshness_or_expiry_rule:
- escalation_if_missing:

### starter_example.trust_status_signal_registry

- signal_id: `signal.status.primary`
- meaning: `the main progress, approval, or booking state`
- must_be_visible_on_screen_ids: `screen.primary_entry`, `screen.primary_task`, `screen.recovery_or_detail`
- never_hide_rule: `never hide when it changes the user's next action`
- visible_to_actors: `actor.requester`, `actor.reviewer`
- hidden_from_actors: `none unless policy requires redaction`
- freshness_or_expiry_rule: `show stale warning when the source is older than the allowed freshness window`
- escalation_if_missing: `block confident action and expose fallback or support path`

## notification_and_reminder_model

- message_type:
- trigger:
- audience:
- delivery_surface:
- privacy_rule:
- fallback_channel:

## save_resume_delegate_moderate_flows

- save_or_draft_resume_flow:
- delegated_access_or_reassignment_flow:
- moderation_or_report_intake_flow:
- moderation_or_report_resolution_flow:
- enterprise_or_admin_hierarchy_flow:
- enterprise_gate_or_security_review_flow:

## Conditional Flow Packs

### compression_mode.public-website-lite

- required when compression_mode = `public-website-lite`
- minimal_reengagement_note:
- branded_return_path:
- light_retention_signal:

### trust_ops_minimum

- use this pack when `commerce-transactional` modifier makes user-visible trust/remedy states product-shaping
- provider_verification_state:
- dispute_or_refund_state:
- payout_or_settlement_state:
- manual_review_state:
- rollout_cohort_state:
- refund_or_release_precedence_state:

### platform_contract

- use this pack when integration onboarding, auth, validation, support, rollback, or health states are user-visible
- connect_or_install_flow:
- auth_or_scope_flow:
- validate_or_first_success_flow:
- error_or_rate_limit_flow:
- support_or_status_flow:
- rollback_or_recovery_flow:
- owner_or_environment_split_flow:
- enterprise_gate_or_security_review_flow:

### regulated_workflow_minimum

- case_state_machine:
- approval_or_permission_map:
- queue_or_worklist_map:
- denial_or_rework_flow:
- manual_channel_fallback:
- delegated_access_flow:
- disclosure_safe_copy_rule:
- audit_history_entry_flow:

### starter_example.regulated_workflow_minimum

- case_state_machine: `submitted -> triaged -> pending review -> approved or denied -> recovery or follow-up`
- approval_or_permission_map: `requester submits, reviewer decides, admin overrides only when policy allows`
- queue_or_worklist_map: `new items enter triage queue before reviewer queue`
- denial_or_rework_flow: `denied states expose correction path and support handoff`
- manual_channel_fallback: `phone or desk callback when digital step cannot continue`
- delegated_access_flow: `delegate visibility is limited to explicitly authorized logistics or status`
- disclosure_safe_copy_rule: `show status and next action without exposing protected reviewer-only rationale`
- audit_history_entry_flow: `approval, denial, override, and callback attempts are recorded`

### service_ops_minimum

- dispatch_lifecycle:
- assignment_handoff_flow:
- service_window_or_schedule_flow:
- operating_environment_note:
- degraded_capture_flow:
- parts_shortage_recovery_flow:
- no_show_or_reschedule_flow:
- support_or_callback_handoff_flow:

### offline_operability

- offline_happy_path:
- degraded_mode_flow:
- sync_recovery_flow:
- conflict_resolution_flow:
- human_escalation_flow:

### knowledge_contract

- source_lookup_boundary:
- citation_or_warning_flow:
- missing_or_stale_source_fallback_flow:

### review_queue_model

- review_queue_flow:
- approval_gate_flow:
- override_or_rework_flow:
- moderation_triage_flow:
- bulk_action_boundary_flow:

### starter_example.review_queue_model

- review_queue_flow: `upload receipt -> review pending -> needs correction or approved or denied -> appeal intake -> appeal decided`
- approval_gate_flow: `review decision is blocked until required artifact and rule checks pass`
- override_or_rework_flow: `senior reviewer may reopen or override with logged reason`
- moderation_triage_flow: `urgent or incomplete items split before normal review`
- bulk_action_boundary_flow: `bulk actions may change triage only, never final decision without explicit review`

### privacy_sensitive_consumer

- role_visibility_boundary_flow:
- sensitive_note_or_private_comment_flow:
- notification_privacy_flow:
- quiet_channel_preference_flow:
- local_sync_boundary_flow:

### local_discovery_trust

- entity_or_listing_trust_state:
- freshness_or_last_verified_signal:
- ranking_or_recommendation_explanation_flow:
- duplicate_or_claim_resolution_flow:
- provenance_or_editorial_note_flow:

### learning_progression_contract

- progression_flow:
- prerequisite_unlock_flow:
- submission_or_retry_flow:
- grading_or_feedback_flow:
- learner_recovery_flow:

### reservation_lifecycle_contract

- lifecycle_state_flow:
- change_or_reissue_flow:
- cancel_or_refund_flow:
- support_or_recovery_flow:

### starter_example.reservation_lifecycle_contract

- lifecycle_state_flow: `request -> hold -> confirmed -> service completed or revisit due`
- change_or_reissue_flow: `staff-owned reschedule or reissue when policy allows`
- cancel_or_refund_flow: `policy-dependent cancellation with explicit owner and visible outcome`
- support_or_recovery_flow: `missed slot or revisit need routes to coordination or callback path`

### availability_booking_contract

- booking_lifecycle_flow:
- reschedule_or_cancel_flow:
- refund_or_credit_flow:
- day_of_exception_flow:
- staff_handoff_flow:
- callback_or_support_recovery_flow:

### artifact_revision_contract

- authoritative_revision_flow:
- signoff_or_approval_state_flow:
- comment_to_revision_link_flow:
- supersession_or_receipt_flow:

### constraint_exception_contract

- waitlist_or_over_capacity_flow:
- expiry_or_timeout_flow:
- check_in_or_day_of_exception_flow:
- manual_override_flow:

### ux.membership_boundary_flow

- canonical UX concept and UX projection of `media_membership`
- free_to_member_boundary_flow:
- package_upgrade_flow:
- member_access_state_flow:
- paid_boundary_recovery_flow:
- moderation_or_report_flow:
- support_or_cancel_flow:

### ux.exception_recovery_flow

- canonical UX concept and UX projection of `exception_recovery_contract`
- appeal_or_resubmission_flow:
- regrade_or_recheck_flow:
- callback_or_followup_flow:
- manual_exception_recovery_flow:

### starter_example.ux.exception_recovery_flow

- appeal_or_resubmission_flow: `denial or blocked state exposes appeal or corrected resubmission route with due window`
- regrade_or_recheck_flow: `review recheck is visible as a separate state, not hidden in generic pending`
- callback_or_followup_flow: `callback scheduling and callback completion are visible states with explicit audience rule`
- manual_exception_recovery_flow: `when automation stops, surface human owner, SLA, and next safe action`

## Trust And Guidance Notes

## Design Enrichment

- interaction_priority:
- primary_visual_hierarchy_note:
- state_visibility_rule:
- trust_signal_placement_rule:
- mobile_vs_desktop_delta:
- density_posture:
- disclosure_priority_note:
- alert_or_notification_posture:
- proof_surface_rule:
- accessibility_or_readability_note:
