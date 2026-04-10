# BUSINESS-OPS

## owner_freeze_snapshot

- source_of_truth_owner: `legal intake operations lead`
- source_of_truth_ref: `intake case system`
- approval_owner: `legal intake operations lead`
- exception_owner: `callback escalation owner`
- policy_or_sla_owner: `clinic legal service policy owner`
- required_visible_state_owner: `requester communications owner`
- actor_split_ref: `UX-IA.md#actor_permission_visibility_matrix`
- owner_freeze_status: `pass`
- owner_freeze_open_fields: `none`

## regulated_workflow_minimum

- policy_source_of_truth: `legal aid intake policy v2`
- approval_owner: `legal intake operations lead`
- queue_or_worklist_model: `new intake queue -> authorization check queue -> callback queue`
- escalation_ladder_or_sla: `first callback within 4 business hours`
- required_visible_state_owner: `requester communications owner`
- delegated_access_policy: `delegate may submit intake and receive logistics only`
- delegated_authorization_rule_or_artifact: `signed delegate authorization PDF required`
- sensitive_communication_boundary: `legal advice summary is requester-only unless explicit authorization extends scope`

## exception_recovery_contract

- state_source_of_truth: `intake case system`
- override_or_exception_owner: `callback escalation owner`
- appeal_or_override_owner: `practice manager`
- user_visible_recovery_path: `update authorization or request requester callback`
- required_visible_state_owner: `requester communications owner`
- communication_boundary: `delegate sees scheduling logistics only`
- delegate_authorization_artifact_or_flag: `signed delegate authorization on file`
- callback_owner_or_sla: `intake coordinator within 4 business hours`
- delegated_callback_boundary: `delegate may receive logistics callback only`
- callback_audience_rule: `requester receives substantive legal callback unless authorization extends scope`
- required_visible_callback_state: `received`, `awaiting callback`, `scheduled`, `needs requester confirmation`, `closed`
- audit_or_event_requirement: `authorization check and callback attempt are logged`
- timeout_or_sla: `breach escalates to practice manager`
