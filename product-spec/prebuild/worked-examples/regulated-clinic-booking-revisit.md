# Worked Example: Regulated Clinic Booking Revisit

## Scenario

- regulated intake
- booking lifecycle
- revisit recovery

## What Made This Hard

- `booking_authority`가 없으면 누가 slot을 확정하는지 흐려진다
- `hold_expiry_rule`이 없으면 held state가 사실상 fake status가 된다
- `revisit_or_rebook_recovery_owner`가 없으면 recovery flow가 screen에만 남고 운영 owner가 사라진다

## Required Inputs Before Design

- `source_of_truth_owner`
- `approval_owner`
- `policy_or_sla_owner`
- `booking_authority`
- `hold_expiry_rule`
- `revisit_or_rebook_recovery_owner`
- `required_visible_booking_state`

## Minimal Projection Read

- `BUSINESS-OPS.md`
  - booking authority
  - hold expiry
  - revisit recovery owner
- `UX-IA.md`
  - first-time booking flow
  - revisit recovery flow
- `SCREEN-SPECS.md`
  - `held`
  - `confirmed`
  - `needs callback`
  - `revisit needed`
- `DESIGN.md`
  - hold expiry, callback SLA, revisit owner를 숨기지 않는 signal hierarchy

## What This Example Proves

- regulated booking shape는 planning에서 owner/value를 잠그면 design이 translation-only로 들어갈 수 있다
- revisit recovery는 exception note가 아니라 first-class lifecycle state로 내려와야 한다
