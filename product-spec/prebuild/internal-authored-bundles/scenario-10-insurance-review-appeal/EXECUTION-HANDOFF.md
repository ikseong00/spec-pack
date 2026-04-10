# EXECUTION-HANDOFF

- handoff_mode: `implementation`

## Owner Freeze Status

- owner_freeze_status: `pass`
- blocking_owner_fields: `none`
- handoff_must_not_redefine: `review source`, `review SLA`, `appeal owner`, `appeal path`

## Phase Split

- phase_id: `phase-01`
  - goal: `upload receipt and review queue intake`
- phase_id: `phase-02`
  - goal: `review status and correction path`
- phase_id: `phase-03`
  - goal: `appeal entry and appeal status`

## Acceptance Criteria

- review status는 `uploaded`, `under review`, `needs correction`, `approved`, `denied`를 구분한다
- denied 상태에서는 appeal owner와 due window가 즉시 보인다
- appeal received 이후 claimant는 appeal decided 상태를 추적할 수 있다
