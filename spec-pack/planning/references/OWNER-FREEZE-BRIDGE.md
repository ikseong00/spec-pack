# Owner Freeze Bridge

이 문서는 planning이 끝난 뒤 design / architecture로 넘어가기 전에
어떤 owner/value를 반드시 잠가야 하는지 고정한다.

목표:

- design이 policy/owner/source-of-truth를 다시 discovery하지 않게 한다
- shared docs가 upstream ambiguity를 흡수하지 못하게 한다
- architecture가 state/permission/data model로 바로 번역할 수 있게 한다

## Required When

아래 중 하나라도 있으면 owner freeze를 explicit하게 채운다.

- regulated / public-service / legal / clinical
- approval / denial / appeal / review queue
- booking / reservation / refund / reversal
- delegated access / callback / visibility split
- trust/proof/freshness가 action을 바꾸는 경우
- enterprise gate / procurement / security review
- offline sync / restore / recovery ownership

## Snapshot Fields

`BUSINESS-OPS.md`는 아래 snapshot을 가져야 한다.

- `target_and_primary_actor_ref`
- `must_have_scope_ref`
- `source_of_truth_owner`
- `source_of_truth_ref`
- `approval_owner`
- `exception_owner`
- `policy_or_sla_owner`
- `required_visible_state_owner`
- `actor_split_ref`
- `owner_freeze_status`
- `owner_freeze_open_fields`

## Status Rule

- `pass`
  - required owner/value가 모두 채워졌다
- `partial`
  - 방향은 맞지만 일부 owner/value가 비어 있다
- `block`
  - downstream design/architecture가 다시 추측해야 한다

`owner_freeze_status != pass`이면 design은 translation-only로 깊게 진행하지 말고,
필요하면 planning update 또는 bundle recheck로 되돌린다.

## N/A Rule

필드가 정말 불필요하면 blank로 두지 말고 `N/A`와 이유를 적는다.

## Projection Rule

- `UX-IA.md`
  - owner freeze를 다시 정의하지 않는다
  - timing / lifecycle / visibility projection만 한다
- `SCREEN-SPECS.md`
  - placement / rendering projection만 한다
- `EXECUTION-HANDOFF.md`
  - 어떤 owner/value가 implementation blocker인지 적는다

## Fast Check

아래 질문에 바로 답할 수 없으면 owner freeze가 덜 된 상태다.

1. 어떤 system/source가 truth인가
2. 승인 또는 override는 누가 책임지는가
3. 예외 / callback / refund / regrade는 누가 책임지는가
4. 어떤 visible state가 절대 숨겨지면 안 되는가
5. 그 visible state의 의미를 누가 소유하는가

## Typical Residuals

이 pack에서 자주 비는 값:

- `booking_authority`
- `revisit_or_rebook_recovery_owner`
- `callback_owner_or_sla`
- `delegated_callback_boundary`
- `appeal_or_override_owner`
- `refund_or_reversal_owner`

이 값들은 design이 아니라 planning-owned docs에서 먼저 잠근다.

## Hard Case Fill Packs

### regulated intake + booking + revisit

아래가 비어 있으면 design으로 넘기지 않는다.

- `source_of_truth_owner`
- `source_of_truth_ref`
- `approval_owner`
- `booking_authority`
- `hold_expiry_rule`
- `revisit_or_rebook_recovery_owner`
- `revisit_or_rebook_recovery_rule`
- `required_visible_booking_state`

### delegate + callback + visibility split

아래가 비어 있으면 design이 actor split을 추측하게 된다.

- `actor_split_ref`
- `approval_owner`
- `exception_owner`
- `delegate_authorization_artifact_or_flag`
- `callback_owner_or_sla`
- `delegated_callback_boundary`
- `callback_audience_rule`
- `required_visible_callback_state`

### review queue + appeal

아래가 비어 있으면 review bundle이 `NEAR-PASS` 이상으로 올라가기 어렵다.

- `review_source_of_truth`
- `approval_owner`
- `review_sla`
- `appeal_or_recheck_owner`
- `appeal_path_rule`
- `required_visible_review_state`
- `required_visible_state_owner`
