---
status: draft
owner: architecture
last_updated: YYYY-MM-DD
source_of_truth_for:
  - architecture.system_boundary
  - architecture.primary_flow_partition
update_when:
  - core flow or system boundary changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# ARCHITECTURE

## System Boundary

- client_surfaces:
- operator_or_admin_surfaces:
- backend_or_core_services:
- external_systems:

## Primary Flow Partition

- flow_id:
- initiating_surface:
- state_owner:
- write_authority:
- handoff_or_queue:
- remedy_or_reversal_owner:

## Gates And Public Projections

- gate_or_unlock:
- owning_rule_or_threshold:
- affected_surface_or_state:
- public_projection_or_read_model:
- delegated_admin_gate_or_visibility_split:
- sync_restore_authority:

## Risky Decisions Locked Before Build

- decision:
- why_locked_now:
- what_can_wait_until_implementation:
