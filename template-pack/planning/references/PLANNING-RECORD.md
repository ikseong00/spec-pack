# Planning Record

모든 planning skill은 아래 공통 envelope에 기록한다.

이 문서는 "각 skill이 예쁘게 자기 문서만 만드는 상태"를 막기 위한 공통 스키마다.

## Top-Level Sections

- `facts`
- `assumptions`
- `decisions`
- `open_questions`
- `risks`
- `next_step`
- `metric_hierarchy`

## Structured Core Blocks

아래 block은 모두 canonical schema 안에 속하지만, 전부를 같은 깊이로 채우라는 뜻은 아니다.

### Core Minimum Blocks

digital service planning에서 거의 항상 필요한 코어 블록:

- `domain_shape_snapshot`
- `user_model`
- `recent_examples`
- `use_case_cards`
- `question_state`
- `market_evidence_brief`
- `business_viability_snapshot`

### Standard Blocks

standard pace에서 보통 같이 채우는 블록:

- `workflow_contract`
- `hypothesis_register`
- `competitor_table`
- `commercial_model`
- `screen_specs`
- `execution_handoff`

### Conditional Blocks

product shape를 바꾸는 경우에만 깊게 채우는 블록:

- `data_dependencies`
- `source_of_truth_map`
- `manual_operations`
- `dependency_register`
- `controls_register`
- `compression_mode`
- `consumer_evidence_gate`
- `proof_of_value_gate`
- `platform_contract`
- `expansion_model`
- `rollout_plan`
- `trust_ops_minimum`
- `regulated_workflow_minimum`
- `service_ops_minimum`
- `offline_operability`
- `knowledge_contract`
- `review_queue_model`
- `privacy_sensitive_consumer`
- `artifact_revision_contract`
- `local_discovery_trust`
- `learning_progression_contract`
- `reservation_lifecycle_contract`
- `availability_booking_contract`
- `constraint_exception_contract`
- `media_membership`
- `exception_recovery_contract`

## Naming Convention

이 planning pack은 이름 체계를 두 층으로 나눈다.

- semantic slot ID
  - 질문 진행, stage exit, completeness audit에 쓰는 internal 이름
  - 형식: dotted + kebab-case
  - 예: `summary.one-line-product`, `next.experiment`
- artifact / record key
  - 최종 handoff 문서와 structured block key에 쓰는 이름
  - 형식: snake_case
  - 예: `one_line_product`, `next_experiment`

즉 같은 의미라도 아래처럼 적는다.

- `summary.one-line-product` -> `one_line_product`
- `summary.primary-target` -> `primary_target`
- `summary.business-viability-snapshot` -> `business_viability_snapshot`
- `next.experiment` -> `next_experiment`
- `next.implementation-input` -> `next_implementation_input`

## Item Shape

generic item을 하나로 처리하지 않는다. 최소한 아래 shape를 구분한다.

```md
- id: fact.user.primary
  statement: 새로운 workflow 도구를 검토하는 팀 리드
  evidence_type: firsthand-interview
  source_ref: interview-01, interview-02
  verified_at: 2026-04-08
  confidence: medium
  source: discovery / user-research
```

### Fact Item

- `id`
- `statement`
- `evidence_type`
- `source_ref`
- `verified_at`
- `confidence`

### Assumption Item

- `id`
- `statement`
- `confidence`
- `reason_if_not_verified`

### Decision Item

- `id`
- `statement`
- `supported_by`
- `confidence`

### Open Question Item

- `id`
- `statement`
- `why_blocking`
- `owner_if_known`

### Risk Item

- `id`
- `statement`
- `risk_type`
- `impact`
- `mitigation`

권장 필드:

- `source`
- `next_action`

## Block Ownership Rule

겹쳐 쓰는 block은 아래 ownership rule을 따른다.

- `user_model`, `recent_examples`
  - primary owner: `idea-discovery`, `user-research-analysis`
  - finalizer: `planning-synthesis`
- `domain_shape_snapshot`
  - primary owner: `idea-discovery`
  - supporting owners: `user-research-analysis`, `data-source-strategy`
  - finalizer: `planning-synthesis`
- `use_case_cards`
  - primary owner: `idea-discovery`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `workflow_contract`
  - primary owner: `ux-use-case-strategy`
  - supporting owners: `stakeholder-rollout-strategy`, `data-source-strategy`
  - finalizer: `planning-synthesis`
- `screen_specs`
  - primary owner: `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `question_state`
  - primary owner: current active skill
  - finalizer: `planning-synthesis`
- `hypothesis_register`
  - primary owner: `hypothesis-validation`
  - finalizer: `planning-synthesis`
- `consumer_evidence_gate`
  - primary owner: `hypothesis-validation`
  - supporting owners: `acquisition-retention-strategy`, `monetization-strategy`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `proof_of_value_gate`
  - primary owner: `hypothesis-validation`
  - supporting owners: `ux-use-case-strategy`, `acquisition-retention-strategy`
  - finalizer: `planning-synthesis`
- `market_evidence_brief`, `competitor_table`
  - primary owner: `market-competitor-research`
  - finalizer: `planning-synthesis`
- `data_dependencies`, `source_of_truth_map`, `manual_operations`, `dependency_register`, `controls_register`
  - primary owner: `data-source-strategy`
  - finalizer: `planning-synthesis`
- `platform_contract`
  - primary owner: `data-source-strategy`
  - finalizer: `planning-synthesis`
- `expansion_model`
  - primary owner: `stakeholder-rollout-strategy`, `monetization-strategy`
  - finalizer: `planning-synthesis`
- `regulated_workflow_minimum`
  - primary owner: `data-source-strategy`
  - supporting owners: `stakeholder-rollout-strategy`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `service_ops_minimum`
  - primary owner: `stakeholder-rollout-strategy`
  - supporting owners: `data-source-strategy`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `offline_operability`
  - primary owner: `data-source-strategy`
  - supporting owners: `ux-use-case-strategy`, `stakeholder-rollout-strategy`
  - finalizer: `planning-synthesis`
- `knowledge_contract`
  - primary owner: `data-source-strategy`
  - supporting owners: `user-research-analysis`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `review_queue_model`
  - primary owner: `stakeholder-rollout-strategy`
  - supporting owners: `ux-use-case-strategy`, `user-research-analysis`
  - finalizer: `planning-synthesis`
- `privacy_sensitive_consumer`
  - primary owner: `ux-use-case-strategy`
  - supporting owners: `data-source-strategy`, `stakeholder-rollout-strategy`
  - finalizer: `planning-synthesis`
- `artifact_revision_contract`
  - primary owner: `data-source-strategy`
  - supporting owners: `ux-use-case-strategy`, `stakeholder-rollout-strategy`
  - finalizer: `planning-synthesis`
- `local_discovery_trust`
  - primary owner: `data-source-strategy`
  - supporting owners: `positioning-strategy`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `learning_progression_contract`
  - primary owner: `ux-use-case-strategy`
  - supporting owners: `user-research-analysis`, `stakeholder-rollout-strategy`
  - finalizer: `planning-synthesis`
- `reservation_lifecycle_contract`
  - primary owner: `data-source-strategy`
  - supporting owners: `stakeholder-rollout-strategy`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `availability_booking_contract`
  - primary owner: `data-source-strategy`
  - supporting owners: `stakeholder-rollout-strategy`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `constraint_exception_contract`
  - primary owner: `data-source-strategy`
  - supporting owners: `stakeholder-rollout-strategy`, `ux-use-case-strategy`
  - finalizer: `planning-synthesis`
- `media_membership`
  - primary owner: `stakeholder-rollout-strategy`
  - supporting owners: `ux-use-case-strategy`, `monetization-strategy`, `acquisition-retention-strategy`
  - finalizer: `planning-synthesis`
- `exception_recovery_contract`
  - primary owner: `ux-use-case-strategy`
  - supporting owners: `stakeholder-rollout-strategy`, `data-source-strategy`
  - finalizer: `planning-synthesis`
- `rollout_plan`
  - primary owner: `stakeholder-rollout-strategy`
  - finalizer: `planning-synthesis`
- `execution_handoff`
  - primary owner: `planning-synthesis`
  - supporting owners: `mvp-scope`, `ux-use-case-strategy`, `stakeholder-rollout-strategy`
  - finalizer: `planning-synthesis`
- `business_viability_snapshot`, `commercial_model`, `metric_hierarchy`
  - primary owner: `acquisition-retention-strategy`, `monetization-strategy`
  - finalizer: `planning-synthesis`

## Facts

관찰, 확인된 제약, 이미 존재하는 자산처럼 "현재 사실"을 적는다.

예:

- 현재 사용자가 쓰는 대안
- 실제 도입 절차
- 외부 정책 제약
- 이미 확보된 데이터소스

## Assumptions

아직 확인되지 않았지만 제품 방향에 영향을 주는 가정을 적는다.

예:

- 사용자가 paywall 이전에 충분한 가치를 느낄 것
- SEO가 초기 핵심 acquisition channel이 될 것
- integration complexity가 sales를 막지 않을 것

## Decisions

이번 planning 단계에서 고정한 선택을 적는다.

예:

- 초기 타깃
- archetype / modifier 선택
- MVP 포함 / 제외
- monetization first model
- primary acquisition motion

## Open Questions

아직 unresolved이지만 다음 단계에서 반드시 풀어야 하는 질문을 적는다.

예:

- ranking 기준을 어떤 데이터로 설명할 것인가
- enterprise procurement gate는 언제 시작되는가
- paywall boundary를 어느 화면에서 둘 것인가

## Risks

리스크는 흩어 쓰지 않고 하나의 register로 남긴다.

최소 분류:

- `product`
- `data`
- `trust`
- `legal`
- `ops`
- `go-to-market`

예:

```md
- id: risk.data.freshness
  statement: 외부 리뷰 데이터 최신성 부족으로 ranking 신뢰도가 떨어질 수 있음
  confidence: medium
  mitigation: 초기에는 큐레이션 + 수동 검수
```

## Next Step

다음 액션은 한 줄로 끝내지 말고, 어떤 gap을 메우는지 적는다.

정확히 하나를 primary로 정한다.

- `next_experiment`
- 또는 `next_implementation_input`

예:

- `run 5 user interviews to validate problem frequency`
- `prototype onboarding flow to test time to first value`
- `compare 3 candidate data sources for freshness and legal risk`

## Domain Shape Snapshot

이 block은 "이 제품이 어떤 category인가"보다 "어떤 operational shape인가"를 먼저 고정한다.

최소 필드:

- `work_shape`
- `surface_model`
- `loop_model`
- `modifiers`
- `compatibility_archetype_if_any`
- `primary_risk_axis`
- `current_gap`
- `pace`
- `why_this_shape`

## User Model

최소 필드:

- `primary_target`
- `why_this_segment_first`
- `secondary_targets`
- `segment_map`
- `role_map`
- `context_of_use`
- `trigger`
- `frequency`
- `constraints`
- `economic_buyer_if_known`
- `buying_committee_path_if_known`

## Recent Example Bundle

문제와 유스케이스를 공중에 띄우지 않기 위한 최소 단위다.

```md
- id: problem.recent-instance.1
  actor: 초기 도입 검토 중인 팀 리드
  when: 2026-03-24
  trigger: 새 workflow 도구 후보를 찾기 시작함
  current_steps: 검색 -> 비교 문서 작성 -> 수동 테스트
  current_workaround: 검색 + 스프레드시트 비교
  observed_cost: 시간 20분, 판단 불확실성 높음
  evidence_type: firsthand-story
  source_type: interview
  source_ref: interview-01
  evidence_tier: direct-user
  counterevidence: internal champion은 urgency가 낮다고 말함
  confidence: medium
```

최소 필드:

- `id`
- `actor`
- `when`
- `trigger`
- `current_steps`
- `current_workaround`
- `observed_cost`
- `evidence_type`
- `source_type`
- `source_ref`
- `evidence_tier`
- `counterevidence`
- `confidence`

## Use Case Card

대표 유스케이스는 최소 카드 형태로 남긴다.

최소 필드:

- `id`
- `actor`
- `segment`
- `trigger_context`
- `current_alternative`
- `desired_outcome`
- `first_value_event`
- `proof_event`
- `trust_or_risk_point`
- `frequency`
- `first_time_vs_repeat`
- `repeat_trigger`
- `recovery_path`

## Workflow Contract

one-shot brochure가 아닌 이상, planning은 "무엇이 한 단위의 일이고 어떤 상태를 거치는가"를 남겨야 한다.

최소 필드:

- `work_unit`
- `entry_points`
- `state_model`
- `role_handoffs`
- `queue_or_schedule_model`
- `notification_or_callback_model`
- `manual_escape_hatch`
- `exit_or_done_signal`
- `failure_or_rework_path`
- `authoritative_owner`

## Question State

반복 질문 방지를 원칙이 아니라 구조로 남긴다.

최소 필드:

- `question_id`
- `status`
- `answer_summary`
- `source_ref`
- `confidence`
- `reask_only_if`

## Hypothesis Register

최소 필드:

- `hypothesis_type`
- `statement`
- `falsification_signal`
- `pass_threshold`
- `decision_if_false`
- `owner`
- `status`
- `linked_decision`

## Market Evidence Brief

최소 필드:

- `category_definition`
- `beachhead_segment`
- `demand_proxies`
- `why_now_signals`
- `distribution_feasibility`
- `budget_or_wtp_signal`
- `market_risks`
- `claim_type`
- `source_grade`
- `observed_at`
- `stale_after`

## Competitor Row

`competitor_table`의 각 row는 아래를 권장한다.

- `entity`
- `type`
- `segment`
- `geo`
- `price_model`
- `proof_point`
- `switching_cost`
- `source_ref`
- `observed_at`
- `evidence_type`
- `confidence`
- `unknowns`
- `implication_for_wedge`

## Data / Ops Blocks

아래 block은 archetype과 dependency에 따라 conditional이지만, 해당 이슈가 product shape를 바꾸면 생략할 수 없다.

### data_dependencies

- `entity`
- `required_for`
- `source_candidates`
- `owner`
- `blocker_status`
- `fallback`
- `collection_method`
- `allowed_use`
- `personal_data_class`
- `jurisdiction_or_policy_owner`

### source_of_truth_map

- `entity`
- `system_of_record`
- `sync_direction`
- `reconciliation_rule`
- `write_authority`
- `freshness_sla`
- `conflict_winner`
- `human_override_path`

### manual_operations

- `operation`
- `owner`
- `cadence`
- `failure_mode`

### dependency_register

- `dependency`
- `criticality`
- `owner`
- `legal_basis_or_tos`
- `rate_or_sla_limit`
- `fallback`
- `go_no_go_impact`
- `collection_method`
- `allowed_use`
- `personal_data_class`
- `jurisdiction_or_policy_owner`

### controls_register

- `control`
- `why_needed`
- `approval_owner`
- `blocker_status`
- `fallback`

### compression_mode

- `mode`
- `why_allowed`
- `required_conditional_packs`

### consumer_evidence_gate

- `risky_assumption`
- `cohort_definition`
- `sample_size_or_traffic_requirement`
- `measurement_window`
- `falsification_signal`
- `pass_threshold`
- `owner`
- `timebox`
- `decision_if_false`
- `paywall_boundary`
- `habit_trigger`
- `reactivation_path`
- `upgrade_proof`
- `kill_threshold`
- `promotion_rule_to_build`

### proof_of_value_gate

- `value_claim`
- `proof_event`
- `measurement_window`
- `pass_threshold`
- `owner`
- `promotion_rule_to_build`
- `decision_if_false`
- `kill_threshold`

### platform_contract

- `first_success_path`
- `auth_model`
- `scope_or_permission_model`
- `key_lifecycle`
- `configure_surface`
- `validation_surface`
- `rate_limit_or_budget_limit`
- `retry_idempotency_rule`
- `sync_direction`
- `reconciliation_rule`
- `recovery_path`
- `health_signals`
- `versioning_or_backward_compatibility`
- `delivery_observability`
- `developer_onboarding_assets`
- `support_owner_or_sla`
- `incident_owner`
- `customer_implementation_work`

### expansion_model

- `stage_role_map`
- `package_ladder`
- `sales_handoff_trigger`
- `pilot_success_criteria`
- `enterprise_entitlements`
- `security_or_procurement_gates`
- `stage_thresholds`
- `artifact_vs_process_split`
- `entitlement_unlock_timing`

### trust_ops_minimum

- `abuse_vector`
- `detection_signal`
- `owner`
- `provider_verification_rule`
- `dispute_or_refund_policy`
- `dispute_or_refund_owner`
- `payout_or_settlement_policy`
- `payout_or_settlement_owner`
- `no_show_or_cancellation_rule`
- `no_show_or_cancellation_owner`
- `user_visible_remedy`
- `manual_review_path`
- `staffing_or_sla_model`
- `escalation_owner`
- `reversal_or_refund_path`
- `rollout_unit`
- `liquidity_stop_condition`
- `rollout_coupling_rule`

### regulated_workflow_minimum

- `policy_source_of_truth`
- `approval_matrix`
- `case_state_model`
- `worklist_or_queue_model`
- `required_artifacts`
- `role_permission_map`
- `audit_trail_minimum`
- `override_reason_policy`
- `manual_channel_path`
- `denial_or_rework_path`
- `escalation_or_sla_owner`
- `delegated_access_policy`
- `sensitive_communication_boundary`

### service_ops_minimum

- `job_or_case_lifecycle`
- `dispatch_owner`
- `dispatch_unit`
- `scheduling_constraints`
- `service_window_policy`
- `exception_queue_model`
- `phone_or_support_handoff`
- `support_or_callback_handoff`
- `proof_of_service_rule`
- `parts_source_of_truth`
- `parts_coordination_rule`
- `parts_shortage_recovery`
- `resource_or_fulfillment_note`
- no inventory/equipment/fulfillment dependency shape면 `parts_*`를 `N/A`로 두고 `resource_or_fulfillment_note`를 canonical explanation으로 쓴다
- `first_time_fix_or_revisit_model`
- `operational_success_signal`

### offline_operability

- `minimum_usable_capabilities`
- `local_write_authority`
- `local_storage_boundary`
- `sync_trigger`
- `conflict_resolution_rule`
- `degraded_write_boundary`
- `attachment_capture_policy`
- `restore_signal`
- `human_escalation`
- `offline_exception_owner`

### knowledge_contract

- `allowed_source_set`
- `forbidden_source_set`
- `freshness_owner`
- `citation_rule`
- `retrieval_or_lookup_boundary`
- `missing_source_fallback`
- `stale_source_fallback`
- `override_rule`

### review_queue_model

- `review_unit`
- `queue_owner`
- `queue_or_backlog_model`
- `review_sla`
- `approval_threshold`
- `override_owner`
- `rework_path`
- `wrong_output_recovery`
- `queue_health_signal`

### privacy_sensitive_consumer

- `notification_permission_timing`
- `notification_permission_copy_boundary`
- `reminder_cadence`
- `progress_source_of_truth`
- `streak_reset_rebuild_rule`
- `sync_conflict_progress_rule`
- `user_visible_progress_correction_path`
- `quiet_hours_rule`
- `lock_screen_sensitivity`
- `local_vs_sync_boundary`
- `background_delivery_failure_handling`
- `role_based_visibility_boundary`
- `sensitive_note_sharing_rule`
- `export_delete_reset_owner`
- `export_delete_reset_behavior`

### artifact_revision_contract

- `authoritative_revision_set`
- `supersession_rule`
- `handoff_receipt_rule`
- `change_impact_link`
- `signoff_state_rule`
- `comment_to_revision_link_rule`
- `baseline_vs_revised_schedule_rule`

### local_discovery_trust

- `canonical_entity_model`
- `duplicate_rule`
- `freshness_sla_owner`
- `claim_moderation_policy`
- `popularity_recommendation_trust_policy`

### learning_progression_contract

- `progression_unit`
- `unlock_prerequisite_rule`
- `cohort_calendar_or_due_window`
- `submission_retry_policy`
- `grading_review_owner_sla`
- `completion_source_of_truth`
- `learner_recovery_path`

### reservation_lifecycle_contract

- `reservation_state_model`
- `external_or_operational_source_of_truth`
- `external_write_authority`
- `schedule_or_state_change_owner`
- `reissue_rebook_cancel_rule`
- `return_or_rma_rule`
- `post_commitment_support_sla`

### availability_booking_contract

- `bookable_unit`
- `availability_source_of_truth`
- `hold_expiry_rule`
- `turnaround_buffer_rule`
- `blackout_or_override_policy`
- `double_book_resolution`
- `onsite_exception_policy`
- `customer_comms_trigger_map`
- `reschedule_or_followup_owner`

### constraint_exception_contract

- `authority_source`
- `threshold_or_ceiling`
- `exception_trigger`
- `manual_owner`
- `recovery_or_promotion_rule`

### media_membership

- `free_boundary`
- `package_ladder`
- `entitlement_unlock_rule`
- `member_access_state_rule`
- `paid_boundary_trigger`
- `moderation_owner`
- `support_owner_or_sla`
- `support_recovery_sla`
- `editorial_freshness_owner`
- `refund_or_cancel_policy`

### exception_recovery_contract

- `state_source_of_truth`
- `override_or_exception_owner`
- `user_visible_recovery_path`
- `communication_boundary`
- `audit_or_event_requirement`
- `appeal_regrade_callback_rule`
- `timeout_or_sla`

### rollout_plan

- `stage`
- `rollout_unit`
- `entry_criteria`
- `success_metric`
- `owner`
- `rollback_trigger`

## Business Viability Snapshot

이 block은 길지 않아야 한다. 1-page planning summary의 business section으로 재사용한다.

최소 필드:

- `target_segment`
- `primary_adoption_or_intake_motion`
- `channel_plausibility_evidence`
- `acquisition_owner`
- `acquisition_asset`
- `acquisition_cadence`
- `time_to_feedback`
- `first_customer_path`
- `activation_event`
- `retention_loop`
- `first_revenue_motion`
- `pricing_boundary`
- `buyer_or_buying_committee`
- `proof_required_to_buy`
- `buyer_payer_trigger`
- `cost_to_serve_assumption`
- `minimum_viability_note`
- `main_business_risk`

## Commercial Model

이 block은 revenue story를 loose note가 아니라 구조화된 판단으로 남긴다.

최소 필드:

- `pricing_anchor`
- `candidate_models`
- `recommended_model`
- `price_point_or_range`
- `package_boundary`
- `package_ladder`
- `sales_handoff_trigger`
- `economic_buyer`
- `proof_required_to_buy`
- `willingness_to_pay_or_roi_signal`
- `cost_to_serve_note`
- `owner_of_close`
- `kill_threshold`

## Must-Have Item

`must_have`, `defer`, `out_of_scope`는 자유 서술 목록이 아니라 stable item ID를 가진다.

각 row 최소 필드:

- `item_id`
- `statement`
- `why_required`
- `linked_use_case_ids`
- `proof_event`
- `cut_if_missing_reason`

## Screen Specs

이 block은 design과 implementation이 다시 flow를 추정하지 않게 하기 위한 최소 화면 계약이다.

각 row 최소 필드:

- `screen_id`
- `primary_actor`
- `entry_trigger`
- `purpose`
- `main_sections`
- `primary_cta`
- `mapped_must_have`
- `inputs`
- `outputs`
- `states`
- `edge_cases`
- `dependencies`
- `source_of_truth_refs`
- `acceptance_notes`

## Execution Handoff

이 block은 planning을 implementation-ready 입력으로 번역한다.

최소 필드:

- `handoff_mode`
- `implementation_intent`
- `phase_split`
- `task_list`
- `acceptance_criteria`
- `non_functional_notes`
- `blockers`
- exactly one of `exact_next_experiment_input` or `exact_next_implementation_input`
- conditional `update_after_build_checklist`

`exact_next_experiment_input` 최소 필드:

- `experiment_id`
- `owner`
- `timebox`
- `cohort_or_sample`
- `measurement_window`
- `pass_threshold`
- `kill_threshold`
- `promotion_rule_to_build`

`exact_next_implementation_input` 최소 필드:

- `starting_phase_ids`
- `starting_task_ids`
- `source_of_truth_docs`
- `blocking_open_questions`
- `first_acceptance_targets`

`phase_split` 각 row 최소 필드:

- `phase_id`
- `goal`
- `mapped_must_have`
- `mapped_screen_ids`
- `exit_criteria`

`task_list` 각 row 최소 필드:

- `task_id`
- `phase_id`
- `statement`
- `mapped_screen_ids`
- `mapped_must_have`
- `done_signal`

`acceptance_criteria` 각 row 최소 필드:

- `acceptance_id`
- `phase_id`
- `statement`
- `proof_type`
- `linked_task_ids`
- `linked_screen_ids`
- `linked_metric_or_risk`
- `linked_block_refs`

traceability rule:

- 모든 `must_have` 항목은 최소 1개의 `screen_specs`, 1개의 `phase_split`, 1개의 `task_list`, 1개의 `acceptance_criteria`에 매핑되어야 한다
- 모든 `screen_specs` row는 최소 1개의 `mapped_must_have`를 가져야 한다
- 모든 `task_list` row는 최소 1개의 `acceptance_criteria`와 연결되어야 한다
- `consumer_evidence_gate`, `expansion_model`, `platform_contract`, `regulated_workflow_minimum`, `service_ops_minimum`, `offline_operability`, `knowledge_contract`, `review_queue_model`, `rollout_plan`, `dependency_register`, `media_membership`, `exception_recovery_contract`, major risk는 존재할 경우 최소 1개의 `phase_split`, 1개의 `task_list`, 1개의 `acceptance_criteria`에 매핑되어야 한다
- `marketplace + commerce-transactional`이면 `trust_ops_minimum`도 최소 1개의 `phase_split`, 1개의 `task_list`, 1개의 `acceptance_criteria`에 매핑되어야 한다
- weak-evidence `consumer-saas`에서 `promotion_rule_to_build`가 아직 충족되지 않았으면 `handoff_mode`는 `experiment`이고 `exact_next_implementation_input`은 비어 있어야 한다

## One-Page Core Artifact

최종 handoff는 이름만 있는 artifact가 아니라 아래 fixed slot을 가진다.

- `one_line_product`
- `primary_target`
- `why_this_segment_first`
- `current_alternative`
- `primary_use_case`
- `anchor_recent_example`
- `positioning_difference`
- `first_value_moment`
- `core_first_time_flow`
- `repeat_flow`
- `must_have`
- `defer`
- `out_of_scope`
- `primary_adoption_or_intake_motion`
- `first_customer_path`
- `first_revenue_motion`
- `pricing_boundary`
- `main_risks`
- `business_viability_snapshot`
- `success_metrics`
- `guardrail_metrics`
- exactly one of `next_experiment` or `next_implementation_input`

## Metric Hierarchy

metric section은 별도 부록이 아니라 planning record의 일부다.

필수 항목:

- `north_star`
- `activation`
- `retention`
- `monetization`
- `guardrails`

자세한 기준은 [METRIC-HIERARCHY.md](METRIC-HIERARCHY.md)를 따른다.
