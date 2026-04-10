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

- screen_priority_tier:
- primary_actor:
- entry_trigger:
- purpose:
- main_sections:
- primary_cta:
- primary_decision_or_confirmation:
- mapped_must_have: use stable `item_id` values from `PRD.md`
- linked_use_case_ids: use stable `use_case_id` values from `PRD.md`
- owner_flow_id: use stable `flow_id` values from `UX-IA.md`
- condition_or_rule_refs:
- inputs:
- outputs:
- states:
- must_render_states:
- blocked_or_not_allowed_states:
- state_priority_order:
- edge_cases:
- reentry_or_recovery_entry_points:
- dependencies:
- source_of_truth_refs:
- canonical_state_owner:
- policy_owner_ref:
- reopen_planning_if_unresolved:
- acceptance_notes:
- visual_priority:
- layout_mode:
- device_variant_notes:
- required_trust_or_status_signals:
- trust_signal_placement:
- signal_placement_owner:
- proof_or_evidence_surface:
- freshness_or_last_updated_rule:
- audience_or_visibility_boundary:
- role_specific_variants:
- comparison_or_baseline_reference:
- acknowledgment_or_irreversible_action_notes:
- do_not_hide_rules:
- design_notes:

## Starter Screen Rows

### screen_id: screen.primary_entry

- screen_priority_tier: `P0`
- primary_actor: `actor.primary`
- entry_trigger: `first visit or return after inactivity`
- purpose: `orient the user and expose the first value path`
- main_sections: `headline or title`, `primary action area`, `trust or proof cue`, `fallback help`
- primary_cta: `continue to primary task`
- primary_decision_or_confirmation: `choose the main path`
- mapped_must_have:
- linked_use_case_ids:
- owner_flow_id: `flow.primary`
- condition_or_rule_refs: `first-session orientation rule`, `availability or eligibility rule`
- inputs: `session context`, `eligibility or availability summary`
- outputs: `entry choice`, `first task start`
- states: `default`, `empty`, `blocked`, `error`
- must_render_states: `blocked`, `error`, `first-time guidance`
- blocked_or_not_allowed_states: `not eligible`, `access blocked`
- state_priority_order: `blocked -> error -> first-time guidance -> default`
- edge_cases: `stale trust signal`, `no availability`, `permission gap`
- reentry_or_recovery_entry_points: `return after support guidance`, `retry after eligibility update`
- dependencies: `auth or role context`, `source freshness`
- source_of_truth_refs: `DESIGN.md`, `UX-IA.md`
- canonical_state_owner: `BUSINESS-OPS.md for policy, SCREEN-SPECS.md for placement`
- policy_owner_ref: `ops.primary_status_owner`
- reopen_planning_if_unresolved: `true when approval owner, source of truth, or required visible state meaning is unclear`
- acceptance_notes: `user can tell what to do first in under one glance`
- visual_priority: `high`
- layout_mode: `split hero or guided list`
- device_variant_notes: `single column on mobile`
- required_trust_or_status_signals: `signal.status.primary`, `signal.proof.last_updated`
- trust_signal_placement: `above primary CTA`
- signal_placement_owner: `SCREEN-SPECS.md`
- proof_or_evidence_surface: `freshness label or verification note`
- freshness_or_last_updated_rule: `show when older than the accepted freshness threshold`
- audience_or_visibility_boundary: `visible to actor.requester and actor.reviewer only if policy allows`
- role_specific_variants: `reviewer sees audit-oriented status; requester sees action-oriented status`
- comparison_or_baseline_reference: `optional summary only`
- acknowledgment_or_irreversible_action_notes: `none`
- do_not_hide_rules: `never hide trust degradation behind collapsed sections`
- design_notes: `optimize for orientation, not decoration`

### screen_id: screen.primary_task

- screen_priority_tier: `P0`
- primary_actor: `actor.primary`
- entry_trigger: `entered from primary entry or direct repeat use`
- purpose: `complete the main task`
- main_sections: `task controls`, `status summary`, `required proof or error cue`
- primary_cta: `submit or confirm primary action`
- primary_decision_or_confirmation: `commit the task`
- mapped_must_have:
- linked_use_case_ids:
- owner_flow_id: `flow.primary`
- condition_or_rule_refs: `submission eligibility`, `approval dependency`, `freshness-sensitive action rule`
- inputs: `task inputs`, `role context`, `availability or state`
- outputs: `submitted task`, `saved draft`, `error recovery`
- states: `default`, `editing`, `pending`, `success`, `recoverable failure`
- must_render_states: `pending`, `recoverable failure`, `success`
- blocked_or_not_allowed_states: `permission blocked`, `policy blocked`
- state_priority_order: `permission block -> recoverable failure -> pending -> success -> default`
- edge_cases: `timeout`, `stale data`, `role mismatch`
- reentry_or_recovery_entry_points: `resume saved draft`, `retry after validation failure`
- dependencies: `validation`, `upstream source of truth`
- source_of_truth_refs: `UX-IA.md`, `DESIGN.md`
- canonical_state_owner: `UX-IA.md for lifecycle, SCREEN-SPECS.md for rendering priority`
- policy_owner_ref: `ops.task_or_queue_owner`
- reopen_planning_if_unresolved: `true when source of truth, approval owner, or recovery owner is unclear`
- acceptance_notes: `main action and recovery path are both obvious`
- visual_priority: `highest`
- layout_mode: `form, queue, or control surface`
- device_variant_notes: `collapse secondary panels on mobile`
- required_trust_or_status_signals: `signal.status.primary`
- trust_signal_placement: `sticky header or action rail`
- signal_placement_owner: `SCREEN-SPECS.md`
- proof_or_evidence_surface: `inline verification or requirement note`
- freshness_or_last_updated_rule: `show when stale data can affect action`
- audience_or_visibility_boundary: `actor.requester sees task state, actor.reviewer may see review-only controls`
- role_specific_variants: `admin or reviewer gets override or queue controls only when policy allows`
- comparison_or_baseline_reference: `only if it changes the decision`
- acknowledgment_or_irreversible_action_notes: `show before irreversible confirm`
- do_not_hide_rules: `never bury errors below the fold`
- design_notes: `clarity beats decoration on task surfaces`

### screen_id: screen.recovery_or_detail

- screen_priority_tier: `P1`
- primary_actor: `actor.primary or actor.reviewer`
- entry_trigger: `exception, denied state, support follow-up, or detail drill-in`
- purpose: `recover trust, explain status, and resolve the exception`
- main_sections: `status explanation`, `evidence or audit block`, `recovery action`, `support path`
- primary_cta: `retry, edit, escalate, or confirm`
- primary_decision_or_confirmation: `choose the recovery path`
- mapped_must_have:
- linked_use_case_ids:
- owner_flow_id: `flow.recovery`
- condition_or_rule_refs: `denial or override policy`, `support escalation rule`, `appeal or callback rule`
- inputs: `exception context`, `evidence`, `role visibility`
- outputs: `resolved state`, `escalation`, `support handoff`
- states: `stale`, `denied`, `override`, `support recovery`
- must_render_states: `denied`, `override`, `support recovery`
- blocked_or_not_allowed_states: `appeal unavailable`, `callback unavailable`, `override forbidden`
- state_priority_order: `safety or permission block -> denied -> stale -> support recovery -> default detail`
- edge_cases: `missing artifact`, `delegated access`, `expired window`
- reentry_or_recovery_entry_points: `return from support`, `retry after correction`, `resume after delegated handoff`
- dependencies: `history`, `audit log`, `support or reviewer assignment`
- source_of_truth_refs: `UX-IA.md`, `DESIGN.md`
- canonical_state_owner: `UX-IA.md for recovery lifecycle, SCREEN-SPECS.md for signal placement`
- policy_owner_ref: `ops.exception_or_support_owner`
- reopen_planning_if_unresolved: `true when denial, override, refund, appeal, or escalation owner is unclear`
- acceptance_notes: `user understands why the issue happened and what to do next`
- visual_priority: `medium-high`
- layout_mode: `detail or side panel`
- device_variant_notes: `collapse audit sidebar into stacked sections on mobile`
- required_trust_or_status_signals: `signal.status.primary`, `signal.proof.last_updated`
- trust_signal_placement: `top status block`
- signal_placement_owner: `SCREEN-SPECS.md`
- proof_or_evidence_surface: `audit, freshness, or evidence receipt block`
- freshness_or_last_updated_rule: `always show when data age changes trust`
- audience_or_visibility_boundary: `split by actor.requester, actor.reviewer, and admin when override is possible`
- role_specific_variants: `requester sees user-safe explanation; reviewer sees evidence and action controls`
- comparison_or_baseline_reference: `show only if it helps resolve the issue`
- acknowledgment_or_irreversible_action_notes: `require explicit acknowledgment before override`
- do_not_hide_rules: `never hide escalation path behind help-only UI`
- design_notes: `recovery surfaces should feel direct and low-ambiguity`

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
- environment_split_surface:
- secret_rotation_surface:
- version_or_example_surface:

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
- required_visible_state_surface:
- required_artifact_state:
- override_reason_surface:
- denial_or_rework_surface:
- audit_event_or_history_surface:
- role_permission_state:
- delegated_access_state:
- delegated_authorization_state:
- disclosure_safe_communication_state:
- save_resume_surface:

### service_ops_minimum

- dispatch_state_surface:
- dispatch_unit_surface:
- assignment_surface:
- service_window_surface:
- operating_environment_surface:
- parts_source_state:
- parts_shortage_or_backorder_surface:
- parts_shortage_recovery_surface:
- if not relevant, treat these as generic dependency or fulfillment states and mark `N/A` explicitly
- no_show_or_reschedule_surface:
- support_or_callback_surface:
- callback_authority_surface:
- proof_of_service_surface:
- connectivity_badge_surface:

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
- provenance_surface:
- answer_confidence_surface:

### review_queue_model

- queue_intake_surface:
- review_status_surface:
- approval_gate_surface:
- appeal_or_recheck_surface:
- override_surface:
- rework_surface:
- backlog_health_surface:
- moderation_reason_surface:
- bulk_action_guard_surface:

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
- provenance_or_editorial_note_surface:

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
- revisit_or_rebook_recovery_state:
- cancelled_or_refunded_state:
- returned_or_rma_state:
- support_or_recovery_state:

### availability_booking_contract

- available_state:
- held_state:
- hold_expiry_or_release_state:
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
- delegate_authorization_state:
- callback_or_followup_state:
- delegated_callback_boundary_surface:
- required_visible_callback_state:
- override_state:
- recovery_resolution_state:
