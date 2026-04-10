# Worked Example: Legal Intake Delegate Callback

## Scenario

- regulated intake
- delegate visibility split
- callback ownership

## What Made This Hard

- delegate가 무엇을 볼 수 있는지와 누구에게 callback할 수 있는지가 다르다
- `delegate_authorization_artifact_or_flag`가 없으면 callback boundary가 공중에 뜬다
- `callback_audience_rule`이 없으면 design이 privacy policy를 대신 추측하게 된다

## Required Inputs Before Design

- `actor_split_ref`
- `approval_owner`
- `exception_owner`
- `delegate_authorization_artifact_or_flag`
- `callback_owner_or_sla`
- `delegated_callback_boundary`
- `callback_audience_rule`
- `required_visible_callback_state`

## Minimal Projection Read

- `BUSINESS-OPS.md`
  - authorization artifact
  - callback owner / SLA
  - delegate boundary
- `UX-IA.md`
  - actor visibility matrix
  - callback recovery flow
- `SCREEN-SPECS.md`
  - authorization check state
  - callback status state
  - requester confirmation state
- `DESIGN.md`
  - privacy-first copy
  - authorization and callback status를 top-level로 유지

## What This Example Proves

- delegate/callback shape는 actor split만으로 충분하지 않다
- authorization artifact와 callback audience rule이 같이 잠겨야 shared doc conflict가 줄어든다
