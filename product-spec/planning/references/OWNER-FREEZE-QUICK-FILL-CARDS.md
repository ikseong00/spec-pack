# Owner Freeze Quick Fill Cards

이 문서는 hard-case에서 `BUSINESS-OPS.md`를 어디서부터 채워야 하는지
operator가 바로 따라갈 수 있게 만든 빠른 작성 카드다.

원칙:

- 먼저 `owner_freeze_snapshot`을 채운다
- 그 다음 hard-case contract를 채운다
- blank 대신 `N/A + reason`을 쓴다
- 아래 minimum field가 비어 있으면 design으로 넘기지 않는다

## 1. regulated intake + booking + revisit

use when:

- intake가 규제/승인/검토 영향을 받는다
- 예약 또는 hold/confirm 상태가 있다
- missed revisit, rebook, callback recovery가 있다

fill order:

1. `owner_freeze_snapshot`
2. `regulated_workflow_minimum`
3. `reservation_lifecycle_contract`
4. `availability_booking_contract`
5. `EXECUTION-HANDOFF.md#Owner Freeze Status`

minimum fields:

- `source_of_truth_owner`
- `source_of_truth_ref`
- `approval_owner`
- `policy_or_sla_owner`
- `booking_authority`
- `hold_expiry_rule`
- `revisit_or_rebook_recovery_owner`
- `revisit_or_rebook_recovery_rule`
- `required_visible_booking_state`

starter phrasing:

- `booking_authority`: `front desk system confirms or changes the booked slot`
- `revisit_or_rebook_recovery_rule`: `missed revisit routes to coordination desk with next eligible slot`
- `required_visible_booking_state`: `held`, `confirmed`, `needs callback`, `revisit needed`

## 2. delegate + callback + visibility split

use when:

- requester와 delegate가 다르다
- callback or follow-up이 actor별로 다르게 보여야 한다
- legal / regulated / sensitive visibility boundary가 있다

fill order:

1. `owner_freeze_snapshot`
2. `regulated_workflow_minimum`
3. `exception_recovery_contract`
4. `UX-IA.md#actor_permission_visibility_matrix`
5. `EXECUTION-HANDOFF.md#Owner Freeze Status`

minimum fields:

- `actor_split_ref`
- `approval_owner`
- `exception_owner`
- `delegate_authorization_artifact_or_flag`
- `callback_owner_or_sla`
- `delegated_callback_boundary`
- `callback_audience_rule`
- `required_visible_callback_state`

starter phrasing:

- `delegate_authorization_artifact_or_flag`: `signed delegate authorization on file`
- `delegated_callback_boundary`: `delegate sees logistics only; protected advice returns to requester unless authorization allows`
- `required_visible_callback_state`: `received`, `awaiting callback`, `scheduled`, `needs confirmation`, `closed`

## 3. upload + review queue + appeal

use when:

- 업로드 후 review queue를 탄다
- approve / deny / correction / appeal이 있다
- SLA or reviewer ownership이 product-shaping이다

fill order:

1. `owner_freeze_snapshot`
2. `review_queue_model`
3. `regulated_workflow_minimum`
4. `SCREEN-SPECS.md#review_queue_model`
5. `EXECUTION-HANDOFF.md#review_queue_model`

minimum fields:

- `review_source_of_truth`
- `approval_owner`
- `review_sla`
- `appeal_or_recheck_owner`
- `appeal_path_rule`
- `required_visible_review_state`
- `required_visible_state_owner`

starter phrasing:

- `review_source_of_truth`: `case system plus upload review queue`
- `appeal_path_rule`: `denial exposes appeal window, required artifact list, and recheck route`
- `required_visible_review_state`: `uploaded`, `under review`, `needs correction`, `approved`, `denied`, `appeal received`

## Fast Exit Check

아래 질문에 바로 답할 수 있으면 design으로 넘겨도 된다.

1. 누가 truth를 소유하는가
2. 누가 approve / deny / override / appeal을 소유하는가
3. 누가 callback / revisit / recovery를 소유하는가
4. 사용자에게 절대 숨기면 안 되는 상태는 무엇인가
5. delegate나 reviewer가 볼 수 있는 범위는 어디까지인가
