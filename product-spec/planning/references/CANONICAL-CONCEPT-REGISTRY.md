# Canonical Concept Registry

`source_of_truth_for`는 이 문서에 등록된 canonical concept ID만 사용한다.

원칙:

- 형식은 `domain.concept_name`
- 같은 의미면 같은 ID를 재사용한다
- 새 concept ID가 필요하면 이 registry와 owning template, auditor rule을 같은 변경에서 함께 갱신한다

## Core Doc Concepts

### `PROJECT-THESIS.md`

- `thesis.one_line_product`
- `thesis.primary_target`
- `thesis.why_this_segment_first`
- `thesis.domain_shape_snapshot`
- `thesis.problem_statement`
- `thesis.current_alternative`
- `thesis.anchor_recent_example`
- `thesis.positioning_difference`
- `thesis.why_now`

### `PLANNING-RECORD.md`

- `record.canonical_planning_register`

### `RESEARCH.md`

- `research.market_category_evidence`
- `research.competitor_reference`
- `research.alternative_behavior_evidence`

### `PRD.md`

- `prd.representative_use_cases`
- `prd.primary_use_case`
- `prd.must_have_scope`
- `prd.defer_scope`
- `prd.out_of_scope`
- `prd.proof_event`
- `prd.success_criteria`

### `UX-IA.md`

- `ux.first_value_moment`
- `ux.first_time_flow`
- `ux.repeat_flow`
- `ux.recovery_flow`
- `ux.ia`
- `ux.navigation_model`
- `ux.screen_page_map`
- `ux.workflow_lifecycle_map`
- `ux.membership_boundary_flow`
- `ux.exception_recovery_flow`

### `SCREEN-SPECS.md`

- `screen.definitions`
- `screen.states`
- `screen.dependencies`
- `screen.acceptance_notes`

### `BUSINESS-OPS.md`

- `business.business_viability_snapshot`
- `business.primary_adoption_or_intake_motion`
- `business.primary_acquisition_motion`
- `business.first_customer_path`
- `business.first_revenue_motion`
- `business.pricing_boundary`
- `business.metric_hierarchy`
- `business.operating_reality`
- `business.regulated_workflow_contract`
- `business.required_artifact_policy`
- `business.service_ops_model`
- `business.offline_operability_model`
- `business.knowledge_contract`
- `business.review_queue_model`
- `business.media_membership_model`
- `business.exception_recovery_model`

### `EXECUTION-HANDOFF.md`

- `handoff.next_experiment_input`
- `handoff.next_implementation_input`
- `handoff.phase_split`
- `handoff.task_list`
- `handoff.acceptance_criteria`
- `handoff.execution_blockers`
- `handoff.workflow_slice_plan`
- `handoff.exception_recovery_plan`

## Derived Doc Concepts

### `ONE-PAGE-CORE-ARTIFACT`

- `derived.one_page_index`

### `PLANNING-PACK-SUMMARY.md`

- `derived.pack_summary_view`

## Compatibility Notes

- `business.primary_acquisition_motion`은 legacy alias다
- canonical concept는 `business.primary_adoption_or_intake_motion`을 사용한다
