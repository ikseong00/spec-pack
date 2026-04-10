# UX-IA

## ux.first_value_moment

- value_event_id: `value.review_status_visible`
- triggering_screen_id: `screen.review_status`
- visible_outcome: `사용자가 현재 심사 상태와 다음 행동을 즉시 안다`

## ux.first_time_flow

- flow_id: `flow.upload_to_review`
- ordered_steps: `upload -> received -> under review -> approved or needs correction or denied`

## ux.recovery_flow

- flow_id: `flow.appeal_recovery`
- ordered_steps: `denied -> appeal entry -> appeal received -> appeal decided`

## actor_permission_visibility_matrix

- actor_id: `actor.claimant`
  - can_view: `screen.upload_entry`, `screen.review_status`, `screen.appeal_entry`
  - hidden_signals: `reviewer-only rubric`
- actor_id: `actor.reviewer`
  - can_view: `screen.review_status`, `screen.appeal_entry`
  - hidden_signals: `none`

## canonical_state_owner_registry

- state_family_id: `state.review_queue`
  - canonical_owner_doc: `BUSINESS-OPS.md`
  - policy_owner_ref: `claims review policy owner`
  - source_of_truth_ref: `claims case system + review queue`
