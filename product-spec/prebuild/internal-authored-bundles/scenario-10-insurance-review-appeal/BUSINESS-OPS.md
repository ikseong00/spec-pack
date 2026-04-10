# BUSINESS-OPS

## owner_freeze_snapshot

- source_of_truth_owner: `claims review operations lead`
- source_of_truth_ref: `claims case system plus review queue`
- approval_owner: `claims reviewer lead`
- exception_owner: `appeal desk owner`
- policy_or_sla_owner: `claims review policy owner`
- required_visible_state_owner: `claimant communications owner`
- actor_split_ref: `UX-IA.md#actor_permission_visibility_matrix`
- owner_freeze_status: `pass`
- owner_freeze_open_fields: `none`

## review_queue_model

- review_unit: `claim package`
- review_staffing_model: `assigned reviewer with overflow triage`
- queue_or_backlog_policy: `FIFO unless medical urgency flag is present`
- review_source_of_truth: `claims case system plus upload review queue`
- review_sla: `first decision within 2 business days`
- approval_threshold: `required documents complete and policy checks satisfied`
- override_owner: `senior reviewer`
- appeal_or_recheck_owner: `appeal desk owner`
- appeal_path_rule: `denial opens 10 business day appeal window with required resubmission list`
- rework_or_rejection_path: `needs correction before final denial when missing docs can be fixed`
- required_visible_review_state: `uploaded`, `under review`, `needs correction`, `approved`, `denied`, `appeal received`, `appeal decided`
- queue_health_signal: `aging bucket and breached SLA count`

## regulated_workflow_minimum

- policy_source_of_truth: `claims review manual v5`
- approval_owner: `claims reviewer lead`
- queue_or_worklist_model: `new uploads -> review queue -> appeal queue`
- required_artifacts: `claim form`, `receipt`, `provider note when required`
- escalation_ladder_or_sla: `appeal acknowledgement within 1 business day`
- required_visible_state_owner: `claimant communications owner`
