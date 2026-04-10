# EXECUTION-HANDOFF

- handoff_mode: `implementation`

## Owner Freeze Status

- owner_freeze_status: `pass`
- blocking_owner_fields: `none`
- handoff_must_not_redefine: `booking authority`, `hold expiry`, `revisit recovery owner`

## Phase Split

- phase_id: `phase-01`
  - goal: `intake submit and booking hold state`
- phase_id: `phase-02`
  - goal: `confirm or callback recovery`
- phase_id: `phase-03`
  - goal: `revisit recovery and rebook path`

## Acceptance Criteria

- `held` 상태에서는 expiry가 항상 보인다
- `needs callback`이면 coordinator owner와 SLA가 보인다
- `revisit needed` 상태에서 recovery CTA가 항상 노출된다
