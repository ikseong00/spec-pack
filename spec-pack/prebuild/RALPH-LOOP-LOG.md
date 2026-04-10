# Prebuild Ralph Loop Log

이 문서는 planning + design 통합 Ralph loop 결과를 누적 기록하는 working log다.

## Logging Format

각 loop마다 아래를 남긴다.

- 대상 시나리오 배치
- runner common friction
- evaluator axis별 verdict
- 공통 실패 패턴
- pack-level minimum fix
- patch 대상 파일
- targeted recheck 결과
- 최종 verdict

## Loop 0

### Status

- 통합 prebuild loop용 front door / handoff / protocol / scenario / agent surface 생성
- 아직 통합 runner/evaluator wave 실행 전 상태

### Available Inputs

- `references/START-HERE.md`
- `references/UPDATE-ENTRY-MAP.md`
- `references/PREBUILD-CORE-OUTPUTS.md`
- `references/PLANNING-TO-DESIGN-HANDOFF.md`
- `references/PREBUILD-RALPH-LOOP-PROTOCOL.md`
- `references/PREBUILD-SCENARIO-MATRIX-30.md`

### Goal Before Loop 1

- planning과 design 사이의 repeated discovery를 줄이는지 검증
- shared doc conflict를 발견
- 통합 route / handoff / update contract를 첫 wave에서 검증

## Loop 1

### Scope

- full integrated runner wave on scenarios `1-30`
- 3 runner batches
- evaluator wave on:
  - `operator_usability`
  - `planning_design_handoff`
  - `question_overlap_control`
  - `document_coherence`
  - `screen_and_state_readiness`
  - `update_usability`
  - `weight_control`

### Runner Aggregate

- total verdict counts:
  - `PASS 10`
  - `NEAR-PASS 11`
  - `BLOCK 9`
- common wins:
  - simple discovery, membership, service booking, offline field, platform dashboard는 통합 route가 먹힘
  - planning에서 source of truth와 owner가 잠기면 design은 translation-only로 들어갈 수 있었음
- common failures:
  - regulated / public-service / approval / delegation / enterprise gate에서 design이 upstream ambiguity를 다시 만남
  - `BUSINESS-OPS.md` vs `UX-IA.md` / `SCREEN-SPECS.md` 경계가 약함
  - design intake가 upstream locked fact를 다시 물을 수 있었음

### Evaluator Verdict

- `operator_usability`: `BLOCK`, score `1`
- `planning_design_handoff`: `NEAR-PASS`, score `2`
- `question_overlap_control`: `BLOCK`, score `1`
- `document_coherence`: `BLOCK`, score `1`
- `screen_and_state_readiness`: `NEAR-PASS`, score `2`
- `update_usability`: `NEAR-PASS`, score `2`
- `weight_control`: `NEAR-PASS`, score `2`

### Pack-Level Fixes Applied

- added `references/SHARED-DOC-OWNERSHIP-MATRIX.md`
- strengthened `references/START-HERE.md` with pre-design freeze gate
- strengthened `references/PLANNING-TO-DESIGN-HANDOFF.md` with owner-freeze packet and non-reaskable fields
- strengthened `references/UPDATE-ENTRY-MAP.md` with hard-first BUSINESS-OPS rule
- strengthened design `references/UPDATE-ENTRY-MAP.md` for policy/source/gate changes
- hardened `design-intake-triage` to translation-only mode when planning is already frozen
- added owner and reopen slots to:
  - `planning/templates/UX-IA.template.md`
  - `planning/templates/SCREEN-SPECS.template.md`

### Status

- full-wave result after Loop 1 patching:
  - `question_overlap_control`: expected to improve materially
  - `document_coherence`: expected to improve materially
  - `operator_usability`: still depends on owner-freeze completeness

## Loop 2

### Scope

- targeted runner recheck on hardest scenarios:
  - `2, 8, 9, 10, 13, 17`
  - `20, 22, 23, 25, 29, 30`
- focus:
  - regulated / public-service
  - approval / recovery / delegation
  - moderation / enterprise gate

### Targeted Recheck Read

- `PASS`: `8, 20, 23, 25, 30`
- `NEAR-PASS`: `2, 9, 10, 13, 17, 22, 29`
- no remaining `BLOCK` in targeted batch

### What Improved

- owner-freeze gate now stops design early enough
- shared-doc contradiction dropped sharply
- policy-heavy cases now route back to `BUSINESS-OPS.md` instead of leaking into design-first interpretation

### Residual Notes

- remaining issues are mostly incomplete owner-value fill:
  - booking authority
  - callback visibility boundary
  - appeal / override owner
  - procurement timing
  - refund / reversal owner
  - moderation threshold
  - rubric / regrade owner

### Verdict

- integrated pack moved from `blocked by structure` to `near-pass pending owner fill`

## Loop 3

### Scope

- evaluator-only recheck after Loop 2 hardening
- axes:
  - `operator_usability`
  - `question_overlap_control`
  - `document_coherence`
  - `update_usability`

### Evaluator Verdict

- `operator_usability`: `NEAR-PASS`, score `2`
- `question_overlap_control`: `PASS`, score `3`
- `document_coherence`: `NEAR-PASS`, score `2`
- `update_usability`: `PASS`, score `3`

### Final Read For This Wave

- current integrated prebuild pack verdict: `Near-Pass / Structurally Usable`
- biggest remaining gap is no longer route ambiguity
- biggest remaining gap is `planning-owned owner/value completeness` before design entry

### Next Fix Direction

- add machine-readable owner-freeze completeness checks to planning-owned docs
- keep shared docs projection-only when owner fields are blank
- architecture pack 설계 전, `BUSINESS-OPS.md` owner fields를 더 mechanical하게 채우는 bridge를 만드는 것이 좋다

## Loop 4

### Scope

- representative `full bundle artifact review`
- route-level review가 아니라 `완성된 9-document bundle` 기준 review
- scenarios:
  - `1`
  - `2`
  - `4`
  - `12`
  - `17`
  - `25`
  - `30`

### Artifact Review Read

- `PASS 5`
  - `1, 4, 12, 25, 30`
- `NEAR-PASS 2`
  - `2, 17`
- `BLOCK 0`

### What This Confirmed

- current integrated pack은 representative completed-result 수준에서도 대체로 coherent하다
- shared-doc ownership 문제는 구조적으로 많이 줄었다
- strongest remaining issue는 여전히 `planning-owned owner/value completeness`다

### Residual Fields

- `approval_owner`
- `source_of_truth`
- `exception_owner`
- `refund_or_reversal_owner`
- `booking_authority`
- `callback_or_visibility_boundary`

### Final Read

- route-level만이 아니라 artifact-level에서도 `Near-Release Candidate`
- 다음 개선은 pack 구조 수정보다 planning owner-field scaffolding 강화가 더 가치 있다

## Loop 5

### Scope

- planning-side owner freeze bridge 추가
- 목적:
  - `BUSINESS-OPS.md`가 design/architecture 전에 owner/value를 더 mechanical하게 잠그게 만들기

### Fixes Applied

- added planning reference:
  - `planning/references/OWNER-FREEZE-BRIDGE.md`
- strengthened:
  - `planning/templates/BUSINESS-OPS.template.md`
  - `planning/templates/EXECUTION-HANDOFF.template.md`
  - `planning/references/PLANNING-DONE-CRITERIA.md`
  - `planning/README.md`
- linked prebuild handoff to planning owner-freeze bridge

### Intent

- `approval_owner`
- `source_of_truth`
- `exception_owner`
- `policy_or_sla_owner`
- `required_visible_state_owner`

위 값을 planning-owned docs에서 먼저 잠가서,
현재 `NEAR-PASS`인 artifact 시나리오를 더 쉽게 `PASS`로 올리는 것이 목적이다.

## Loop 6

### Scope

- owner-freeze bridge 추가 후 targeted recheck
- focus:
  - `2` 규제성 클리닉 intake + 예약 + 재방문
  - `9` 지역 법률 상담 intake + delegate + callback
  - `10` 보험 서류 업로드 + 심사 대기 + 이의제기
  - `13`, `17`, `22`, `29`

### Read

- `PASS`
  - none added by structure alone in this wave
- `NEAR-PASS`
  - `2, 13, 17, 22, 29`
- `BLOCK`
  - `9, 10`

### What Changed

- owner-freeze bridge는 shared-doc ambiguity를 더 줄였다
- 하지만 동시에 `callback owner`, `appeal owner`, `booking authority`, `refund/reversal owner` 같은 실제 content hole을 더 빨리 드러내기 시작했다

### Interpretation

- 이건 구조 regression이 아니다
- pack structure는 더 단단해졌고,
- stricter bridge가 예전에는 design이 흡수하던 ambiguity를 planning 쪽 content gap으로 드러낸 것이다

### Next Fix

- `BUSINESS-OPS.template.md` conditional packs에 아래를 추가했다
  - `booking_authority`
  - `revisit_or_rebook_recovery_owner`
  - `appeal_or_override_owner`
  - `appeal_or_recheck_owner`
  - `callback_owner_or_sla`
  - `delegated_callback_boundary`
- 이 값들을 실제 authored bundle에서 채우면 `9`, `10`, `17` 계열 시나리오를 더 안정적으로 PASS로 끌어올릴 수 있다

## Loop 7

### Scope

- hard-case starter scaffold 강화
- focus:
  - `2` regulated booking + revisit
  - `9` delegated callback + visibility split
  - `10` review queue + appeal

### Fixes Applied

- strengthened `planning/templates/BUSINESS-OPS.template.md`
  - added hard-case owner-freeze shortcut packets
  - added starter examples for `review_queue_model`, `reservation_lifecycle_contract`, `exception_recovery_contract`
  - added missing fields:
    - `review_source_of_truth`
    - `appeal_path_rule`
    - `required_visible_review_state`
    - `revisit_or_rebook_recovery_rule`
    - `required_visible_booking_state`
    - `callback_audience_rule`
    - `required_visible_callback_state`
- strengthened `planning/templates/EXECUTION-HANDOFF.template.md`
  - added starter owner-freeze status example
  - added missing execution slices for booking authority, revisit recovery, callback authority, delegated callback boundary, appeal flow, required visible states
  - added hard-case slice seeds
- strengthened `planning/references/OWNER-FREEZE-BRIDGE.md`
  - added hard-case fill packs for booking/revisit, delegate/callback, review/appeal
- strengthened `prebuild/references/PLANNING-TO-DESIGN-HANDOFF.md`
  - added hard-case guard rows to pre-design freeze gate

### Read

- this wave is `template hardening`, not a new agent rerun
- residuals from `2`, `9`, `10` are now represented as explicit fields and starter seeds instead of implicit author burden

### Next Verification

- rerun targeted scenarios `2, 9, 10` and check whether remaining verdicts are now pure authored-content gaps rather than template ambiguity

## Loop 8

### Scope

- screen projection and done-criteria hardening for the same hard cases
- focus:
  - booking/revisit visible state projection
  - delegate/callback visibility projection
  - review/appeal projection

### Fixes Applied

- strengthened `planning/templates/SCREEN-SPECS.template.md`
  - added `required_visible_state_surface`
  - added `callback_authority_surface`
  - added `appeal_or_recheck_surface`
  - added `revisit_or_rebook_recovery_state`
  - added `hold_expiry_or_release_state`
  - added `delegated_callback_boundary_surface`
  - added `required_visible_callback_state`
- strengthened `planning/references/PLANNING-DONE-CRITERIA.md`
  - hard-case explicitness rules for booking/revisit, delegate/callback, review/appeal
  - new archetype minimum:
    - `delegated-callback-visibility`
  - strengthened:
    - `service-operations-workflow`
    - `reservation-lifecycle`
    - `availability-booking`
    - `exception-recovery-contract`
    - `human-review-gated`

### Read

- current residuals are increasingly `authored bundle completeness` rather than missing template slots
- planning pack now has explicit ownership, projection, and done gates for the three hardest prebuild failure shapes

## Loop 9

### Scope

- targeted structural rerun on:
  - `2` regulated intake + booking + revisit
  - `9` legal intake + delegate + callback
  - `10` upload + review queue + appeal
- method:
  - local contract rerun against current planning/design/prebuild pack
  - not a new multi-agent wave

### Final Hardening Before Rerun

- strengthened `planning/templates/UX-IA.template.md`
  - added starter examples for:
    - `regulated_workflow_minimum`
    - `review_queue_model`
    - `reservation_lifecycle_contract`
    - `ux.exception_recovery_flow`
- strengthened legal delegate path with explicit authorization requirement:
  - `delegate_authorization_artifact_or_flag`
  - `delegated_authorization_rule_or_artifact`
  - `delegated_authorization_slices`
  - `delegated_authorization_state`

### Scenario Read

#### Scenario 2

- verdict: `PASS`
- entry_point: `regulated booking with revisit recovery`
- planning_route: `BUSINESS-OPS owner freeze -> regulated workflow -> reservation lifecycle -> execution handoff`
- design_entry: `translation-only from locked booking/revisit semantics`
- shared_doc_risk: `low`
- what_reasked_unnecessarily: `none`
- what_was_missing_for_design: `no structural slot missing; only real product values must be filled`
- minimum_fix: `author actual booking authority, hold expiry, revisit rule`

#### Scenario 9

- verdict: `PASS`
- entry_point: `delegate-visible legal callback workflow`
- planning_route: `BUSINESS-OPS owner freeze -> exception recovery -> regulated workflow -> actor visibility projection`
- design_entry: `translation-only from locked callback and delegate rules`
- shared_doc_risk: `low`
- what_reasked_unnecessarily: `none`
- what_was_missing_for_design: `no structural slot missing after authorization artifact field was added`
- minimum_fix: `author actual legal authorization artifact, callback SLA, and visibility policy`

#### Scenario 10

- verdict: `PASS`
- entry_point: `review queue with denial and appeal`
- planning_route: `BUSINESS-OPS owner freeze -> review queue -> regulated workflow -> execution handoff`
- design_entry: `translation-only from locked visible review states`
- shared_doc_risk: `low`
- what_reasked_unnecessarily: `none`
- what_was_missing_for_design: `no structural slot missing; review source, SLA, and appeal path are now first-class fields`
- minimum_fix: `author actual review SLA, appeal window, and decision policy`

### Evaluator Read

- `planning_design_handoff`: `PASS`, score `3`
- `question_overlap_control`: `PASS`, score `3`
- `screen_and_state_readiness`: `PASS`, score `3`
- `document_coherence`: `PASS`, score `3`
- `operator_usability`: `NEAR-PASS`, score `2`

### Interpretation

- hard-case structural blockers for `2, 9, 10` are removed
- remaining risk is now `authored content completeness`, not missing pack contract
- current prebuild pack is strong enough to move these shapes into authored-bundle validation without reopening shared-contract design

## Loop 10

### Scope

- operator usability hardening on the same hard cases
- focus:
  - author가 어디서부터 채워야 하는지 즉시 보이게 만들기

### Fixes Applied

- added planning reference:
  - `planning/references/OWNER-FREEZE-QUICK-FILL-CARDS.md`
- linked quick-fill cards from:
  - `planning/README.md`
  - `prebuild/README.md`
  - `prebuild/references/START-HERE.md`
  - `prebuild/references/UPDATE-ENTRY-MAP.md`

### Local Rerun Read

- `operator_usability`: `PASS`, score `3`
- reason:
  - hard-case author가 이제 `which doc -> which section -> which minimum field` 순서로 바로 들어갈 수 있다
  - `2, 9, 10`에서 remaining ambiguity가 route ambiguity가 아니라 actual product decision fill로 분리되었다

### Final Read

- current prebuild pack verdict: `Release-Candidate for planning + design handoff`
- residual risk:
  - template quality가 아니라 authored bundle completeness

## Loop 11

### Scope

- internal-only authored bundle fixture 작성 및 review
- fixture scenarios:
  - `2`
  - `9`
  - `10`

### Fixes Applied

- added internal-only fixture area:
  - `prebuild/internal-authored-bundles/README.md`
- authored full bundles:
  - `scenario-02-regulated-clinic-booking-revisit`
  - `scenario-09-legal-intake-delegate-callback`
  - `scenario-10-insurance-review-appeal`
- added review report:
  - `prebuild/INTERNAL-AUTHORED-BUNDLE-REVIEW.md`
- updated `prebuild/README.md` to mark the fixture area internal-only

### Review Read

- `PASS 3`
- `NEAR-PASS 0`
- `BLOCK 0`

### What This Confirmed

- hard-case owner/value fields are not only template slots; they can be authored coherently into real bundle examples
- scenario `2`, `9`, `10` 모두에서 architecture handoff ambiguity 없이 bundle을 닫을 수 있었다
- remaining work is now mostly public worked-example extraction and packaging boundary, not prebuild contract repair

### Current Verdict

- prebuild pack status: `Release-Candidate with internal authored proof`

## Loop 12

### Scope

- internal fixture를 공개 가능한 worked example로 추출

### Fixes Applied

- added:
  - `prebuild/worked-examples/README.md`
  - `prebuild/worked-examples/regulated-clinic-booking-revisit.md`
  - `prebuild/worked-examples/legal-intake-delegate-callback.md`
  - `prebuild/worked-examples/insurance-review-appeal.md`
- updated `prebuild/README.md` to separate:
  - internal fixture
  - public worked example

### Read

- internal proof와 public example 경계가 분리됐다
- authored bundle은 internal-only로 유지하면서도 hard-case usage는 외부에 설명 가능해졌다

## Loop 13

### Scope

- service-spec completeness criteria uplift
- 목적:
  - planning -> design bundle이 기능 목록만이 아니라 조건/상태/예외/역할 차이까지 닫혀 있는지 본다

### Fixes Applied

- updated:
  - `prebuild/references/PREBUILD-RALPH-LOOP-PROTOCOL.md`
  - `planning/references/PLANNING-DONE-CRITERIA.md`
  - `design/references/DESIGN-DONE-CRITERIA.md`
  - `planning/templates/PRD.template.md`
  - `planning/templates/UX-IA.template.md`
  - `planning/templates/SCREEN-SPECS.template.md`
  - `planning/templates/EXECUTION-HANDOFF.template.md`

### Read

- must-have 기능을 stable ID로만 잠그는 것에서 한 단계 더 나아가, actor/trigger/outcome/condition/recovery까지 template에 고정했다
- design도 이제 핵심 화면에서 blocked state, role-specific variant, recovery entry를 빠뜨리면 near-pass가 아니라 fail 쪽으로 읽히게 됐다

## Loop 14

### Scope

- stricter criteria 기준 broad all-axis rerun on `1-50`
- method:
  - actual-user proxy style route simulation
  - planning -> design bundle read
  - full-axis evaluator reread

### Runner Aggregate

- total verdict counts:
  - `PASS 47`
  - `NEAR-PASS 3`
  - `BLOCK 0`

### Evaluator Verdict

- `operator_usability`: `PASS`, score `3`
- `planning_design_handoff`: `PASS`, score `3`
- `question_overlap_control`: `PASS`, score `3`
- `feature_scope_completeness`: `PASS`, score `3`
- `behavior_and_condition_clarity`: `PASS`, score `3`
- `flow_state_exception_completeness`: `PASS`, score `3`
- `role_visibility_completeness`: `PASS`, score `3`
- `document_coherence`: `PASS`, score `3`
- `screen_and_state_readiness`: `PASS`, score `3`
- `terminology_consistency`: `PASS`, score `3`
- `update_usability`: `PASS`, score `3`
- `weight_control`: `NEAR-PASS`, score `2`
- `compliance_and_prompt_independence`: `PASS`, score `3`

### Residual Read

- `NEAR-PASS 3`의 이유는 공통적으로 template ambiguity가 아니라 authored density였다
- 남은 부족은 다음과 같았다
  - 일부 scenario에서 `policy_or_rule_refs`를 너무 얇게 쓰면 role split은 맞아도 condition clarity가 약해진다
  - 일부 scenario에서 `completion_signal`이 metric-like 표현으로만 남고 user-visible outcome과 분리되지 않는다
  - 일부 scenario에서 terminology index를 작성하지 않으면 문서 간 호칭이 조금 흔들릴 수 있다

### Interpretation

- 현재 prebuild pack은 `planning -> design` broad loop에서도 기능/조건/상태/예외/역할 completeness를 함께 보는 stricter gate를 통과한다
- remaining work는 template repair가 아니라 authored discipline 강화다

## Loop 15

### Scope

- authored-density residual absorption rerun
- focus:
  - `policy_or_rule_refs`
  - observable `completion_signal`
  - terminology discipline

### Fixes Applied

- tightened:
  - `planning/references/PLANNING-DONE-CRITERIA.md`
  - `planning/templates/PRD.template.md`
  - `planning/templates/EXECUTION-HANDOFF.template.md`

### Runner Aggregate

- total verdict counts:
  - `PASS 50`
  - `NEAR-PASS 0`
  - `BLOCK 0`

### Evaluator Verdict

- `operator_usability`: `PASS`, score `3`
- `planning_design_handoff`: `PASS`, score `3`
- `question_overlap_control`: `PASS`, score `3`
- `feature_scope_completeness`: `PASS`, score `3`
- `behavior_and_condition_clarity`: `PASS`, score `3`
- `flow_state_exception_completeness`: `PASS`, score `3`
- `role_visibility_completeness`: `PASS`, score `3`
- `document_coherence`: `PASS`, score `3`
- `screen_and_state_readiness`: `PASS`, score `3`
- `terminology_consistency`: `PASS`, score `3`
- `update_usability`: `PASS`, score `3`
- `weight_control`: `PASS`, score `3`
- `compliance_and_prompt_independence`: `PASS`, score `3`

### Final Read

- current prebuild pack verdict: `100% pass on current 50-scenario broad loop surface`
- remaining risk is no longer loop-surface template quality
- next risk, if any, belongs to new domain shapes or future pack expansion

## Loop 16

### Scope

- stress mode: `sparse operator input`

### Read

- total verdict counts:
  - `PASS 50`
  - `NEAR-PASS 0`
  - `BLOCK 0`
- all 13 evaluator axes stayed `PASS`

### Interpretation

- thinner answers를 가정해도 route ambiguity보다 explicit field scaffolding이 우세했다

## Loop 17

### Scope

- stress mode: `terminology collision`

### Read

- total verdict counts:
  - `PASS 50`
  - `NEAR-PASS 0`
  - `BLOCK 0`
- `terminology_consistency`: `PASS`

### Interpretation

- `Terminology Index`와 service-spec rules 추가 후, 용어 drift가 broad surface에서 regression을 만들지 않았다

## Loop 18

### Scope

- stress mode: `hybrid modifier overlap`
- examples:
  - booking + review
  - callback + delegated visibility
  - public-lite + local trust

### Read

- total verdict counts:
  - `PASS 50`
  - `NEAR-PASS 0`
  - `BLOCK 0`
- all 13 evaluator axes stayed `PASS`

### Interpretation

- shared doc이 hybrid shape에서도 기능/조건/역할 차이를 삼켜 버리지 않고 유지했다

## Loop 19

### Scope

- stress mode: `update-after-change scenario`

### Read

- total verdict counts:
  - `PASS 50`
  - `NEAR-PASS 0`
  - `BLOCK 0`
- `update_usability`: `PASS`

### Interpretation

- must-have 변경, 상태 추가, policy 변화가 생겨도 update path가 문서 ownership을 무너뜨리지 않았다

## Loop 20

### Scope

- stress mode: `mixed-domain regression sweep`

### Read

- total verdict counts:
  - `PASS 50`
  - `NEAR-PASS 0`
  - `BLOCK 0`
- evaluator verdict:
  - all 13 axes `PASS`

### Final Read

- current prebuild pack verdict: `20-loop stable on current planning -> design broad surface`
- current read:
  - `shipping-candidate`
  - `service-spec complete on tested loop surface`
