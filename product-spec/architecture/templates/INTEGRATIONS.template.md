---
status: draft
owner: architecture
last_updated: YYYY-MM-DD
source_of_truth_for:
  - architecture.integration_boundary
update_when:
  - external/manual handoff changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# INTEGRATIONS

## Integration Register

- integration:
- purpose:
- read_or_write:
- authority_boundary:
- failure_mode:
- reconciliation_rule:

## Manual Handoffs

- handoff:
- trigger:
- owner:
- visible_status_impact:

## Queue And Async Boundaries

- queue_or_async_boundary:
- producer:
- consumer:
- visible_state_or_signal_impact:
- reconciliation_or_retry_rule:
- remedy_or_reversal_owner_if_any:

## Sync And Restore Boundaries

- sync_or_restore_boundary:
- source_side:
- destination_side:
- restore_authority:
- user_visible_failure_or_restore_signal:
- retry_or_restore_rule:
