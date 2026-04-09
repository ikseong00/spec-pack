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
- visible_outcome:
- time_to_value_expectation:

## flow_step_registry

- step_id:
- owner_flow_id: use stable `flow_id`
- sequence_number:
- actor:
- trigger:
- screen_id:
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

### platform_contract

- use this pack when integration onboarding, auth, validation, support, rollback, or health states are user-visible
- connect_or_install_flow:
- auth_or_scope_flow:
- validate_or_first_success_flow:
- error_or_rate_limit_flow:
- support_or_status_flow:
- rollback_or_recovery_flow:

### regulated_workflow_minimum

- case_state_machine:
- approval_or_permission_map:
- queue_or_worklist_map:
- denial_or_rework_flow:
- manual_channel_fallback:

### service_ops_minimum

- dispatch_lifecycle:
- assignment_handoff_flow:
- service_window_or_schedule_flow:
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

### privacy_sensitive_consumer

- role_visibility_boundary_flow:
- sensitive_note_or_private_comment_flow:
- notification_privacy_flow:
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

## Trust And Guidance Notes

## Design Enrichment

- interaction_priority:
- primary_visual_hierarchy_note:
- state_visibility_rule:
- trust_signal_placement_rule:
- mobile_vs_desktop_delta:
- accessibility_or_readability_note:
