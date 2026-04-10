# UX-IA

## ux.first_value_moment

- value_event_id: `value.booking_status_visible`
- triggering_screen_id: `screen.booking_status`
- visible_outcome: `환자가 hold/confirmed/needs callback 중 무엇인지 한눈에 안다`

## ux.first_time_flow

- flow_id: `flow.intake_to_booking`
- ordered_steps: `start intake -> submit -> slot held -> confirm or callback`

## ux.recovery_flow

- flow_id: `flow.revisit_recovery`
- ordered_steps: `revisit needed -> callback request -> new slot offer -> confirmed`

## actor_permission_visibility_matrix

- actor_id: `actor.patient`
  - can_view: `screen.intake_entry`, `screen.booking_status`, `screen.revisit_recovery`
  - hidden_signals: `internal scheduling note`
- actor_id: `actor.coordinator`
  - can_view: `screen.booking_status`, `screen.revisit_recovery`
  - hidden_signals: `none`

## canonical_state_owner_registry

- state_family_id: `state.booking_lifecycle`
  - canonical_owner_doc: `BUSINESS-OPS.md`
  - policy_owner_ref: `clinic scheduling policy owner`
  - source_of_truth_ref: `scheduling system`
