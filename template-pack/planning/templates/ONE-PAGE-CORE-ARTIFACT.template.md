---
status: derived
owner: product
last_updated: YYYY-MM-DD
source_of_truth_for:
  - derived.one_page_index
derived_from:
  - PROJECT-THESIS.md
  - PLANNING-RECORD.md
  - PRD.md
  - UX-IA.md
  - BUSINESS-OPS.md
  - EXECUTION-HANDOFF.md
update_when:
  - any canonical planning decision changes
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# ONE-PAGE-CORE-ARTIFACT

이 문서는 derived-only view다.

- canonical source of truth가 아니다
- 값을 직접 확정하지 말고 owning doc를 먼저 수정한다
- slot ownership은 `references/PROJECTION-MATRIX.md`의 `Fixed Slot Ownership`을 따른다
- owning doc와 충돌하면 이 문서는 `stale`로 보고 다시 생성한다

## one_line_product

## primary_target

## why_this_segment_first

## current_alternative

## primary_use_case

## anchor_recent_example

## positioning_difference

## first_value_moment

## core_first_time_flow

## repeat_flow

## must_have

- use stable `item_id` values from `PRD.md`

## defer

- use stable `item_id` values from `PRD.md`

## out_of_scope

- use stable `item_id` values from `PRD.md`

## primary_adoption_or_intake_motion

## first_customer_path

## first_revenue_motion

## pricing_boundary

## main_risks

## business_viability_snapshot

## success_metrics

## guardrail_metrics

## next_step_gate

- handoff_mode:
- exactly_one_of:
  - next_experiment
  - next_implementation_input
- gate_reason:
- fail_if_both_or_neither_are_filled: true

## next_experiment

- experiment_id:
- owner:
- timebox:
- pass_threshold:

## next_implementation_input

- starting_phase_ids:
- starting_task_ids:
- source_of_truth_docs:
- blocking_open_questions:
- first_acceptance_targets:
