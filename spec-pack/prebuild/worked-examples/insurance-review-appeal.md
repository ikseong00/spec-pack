# Worked Example: Insurance Review Appeal

## Scenario

- document upload
- review queue
- denial and appeal

## What Made This Hard

- `under review`와 `needs correction`이 섞이면 사용자 행동이 꼬인다
- `appeal_path_rule`이 없으면 denied 이후 흐름이 support note로만 남는다
- `required_visible_review_state`가 없으면 screen state가 구현마다 흔들린다

## Required Inputs Before Design

- `review_source_of_truth`
- `approval_owner`
- `review_sla`
- `appeal_or_recheck_owner`
- `appeal_path_rule`
- `required_visible_review_state`
- `required_visible_state_owner`

## Minimal Projection Read

- `BUSINESS-OPS.md`
  - review source
  - review SLA
  - appeal owner
  - appeal path
- `UX-IA.md`
  - upload -> review -> deny -> appeal recovery flow
- `SCREEN-SPECS.md`
  - `uploaded`
  - `under review`
  - `needs correction`
  - `denied`
  - `appeal received`
- `DESIGN.md`
  - status-first hierarchy
  - appeal owner and due window을 숨기지 않는 rule

## What This Example Proves

- review queue shape는 review owner만이 아니라 review source와 visible state set이 같이 잠겨야 한다
- appeal은 afterthought가 아니라 prebuild 단계에서 이미 screen/state/owner contract로 내려와야 한다
