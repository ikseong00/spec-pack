# BUSINESS-OPS

## owner_freeze_snapshot

- source_of_truth_owner: `clinic scheduling ops owner`
- source_of_truth_ref: `scheduling system appointment record`
- approval_owner: `clinic intake nurse lead`
- exception_owner: `care coordination desk lead`
- policy_or_sla_owner: `clinic scheduling policy owner`
- required_visible_state_owner: `patient communications owner`
- actor_split_ref: `UX-IA.md#actor_permission_visibility_matrix`
- owner_freeze_status: `pass`
- owner_freeze_open_fields: `none`

## regulated_workflow_minimum

- policy_source_of_truth: `clinic scheduling and follow-up policy v3`
- approval_owner: `clinic intake nurse lead`
- queue_or_worklist_model: `new intake queue -> scheduling queue -> revisit queue`
- required_artifacts: `insurance card`, `consent`, `referral when needed`
- escalation_ladder_or_sla: `callback within 1 business day`
- required_visible_state_owner: `patient communications owner`

## reservation_lifecycle_contract

- reservation_state_model: `requested -> held -> confirmed -> completed -> revisit needed`
- external_or_operational_source_of_truth: `scheduling system`
- external_write_authority: `scheduling service only`
- booking_authority: `front desk scheduler may confirm or move slot`
- schedule_or_state_change_owner: `clinic scheduling ops owner`
- revisit_or_rebook_recovery_owner: `care coordination desk`
- revisit_or_rebook_recovery_rule: `missed revisit opens callback task and next eligible slot search`
- required_visible_booking_state: `held`, `confirmed`, `needs callback`, `revisit needed`
- post_commitment_support_sla: `callback within 1 business day`

## availability_booking_contract

- bookable_unit: `provider slot`
- availability_source_of_truth: `scheduling system`
- booking_authority: `front desk scheduler`
- hold_expiry_rule: `held slot expires after 4 business hours if patient does not confirm`
- double_book_resolution: `existing confirmed appointment wins; held slot is released`
- reschedule_or_followup_owner: `care coordination desk`
- required_visible_booking_state: `held`, `confirmed`, `hold expired`
