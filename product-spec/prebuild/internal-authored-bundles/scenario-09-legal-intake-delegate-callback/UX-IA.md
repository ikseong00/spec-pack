# UX-IA

## ux.first_value_moment

- value_event_id: `value.callback_boundary_visible`
- triggering_screen_id: `screen.callback_status`
- visible_outcome: `누가 callback을 받을 수 있는지와 다음 행동이 명확하다`

## ux.first_time_flow

- flow_id: `flow.legal_intake_submit`
- ordered_steps: `start intake -> attach authorization if delegate -> submit -> received status`

## ux.recovery_flow

- flow_id: `flow.callback_resolution`
- ordered_steps: `awaiting callback -> scheduled -> requester confirmation if needed -> closed`

## actor_permission_visibility_matrix

- actor_id: `actor.requester`
  - can_view: `screen.intake_entry`, `screen.callback_status`
  - hidden_signals: `internal triage note`
- actor_id: `actor.delegate`
  - can_view: `screen.intake_entry`, `screen.callback_status`
  - hidden_signals: `protected legal advice summary unless authorization permits`
- actor_id: `actor.coordinator`
  - can_view: `screen.callback_status`, `screen.authorization_check`
  - hidden_signals: `none`

## canonical_state_owner_registry

- state_family_id: `state.callback_visibility`
  - canonical_owner_doc: `BUSINESS-OPS.md`
  - policy_owner_ref: `legal intake operations lead`
  - source_of_truth_ref: `intake case system`
