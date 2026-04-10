# Design Ralph Loop Log

이 문서는 design pack에 대한 runner/evaluator loop 결과를 누적 기록하는 working log다.

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

- loop 준비 문서만 생성됨
- 아직 design Ralph loop 실행 전 상태

### Available Inputs

- `references/DESIGN-DONE-CRITERIA.md`
- `references/DESIGN-USABILITY-EVALUATION.md`
- `references/DESIGN-RALPH-LOOP-PROTOCOL.md`
- `references/DESIGN-SCENARIO-MATRIX-50.md`

### Goal Before Loop 1

- design runner/evaluator 역할 분리
- 50-scenario batch 기준 확정
- output target을 `DESIGN.md + UX-IA.md + SCREEN-SPECS.md`로 고정

## Loop 1

### Scope

- full runner wave on scenarios `1-50`
- 3 runner agents
- initial evaluator wave on:
  - `operator_usability`
  - `question_quality`
  - `stitch_readiness`

### Runner Aggregate

- total verdict counts:
  - `PASS 32`
  - `NEAR-PASS 17`
  - `BLOCK 1`
- common win:
  - front door가 실제로 first route ambiguity를 크게 줄임
  - mandatory discovery ladder가 vague taste talk를 줄임
  - provisional mode가 invention을 막음
  - screen binding이 dense / workflow / offline / platform shape에서 강하게 먹힘

### Initial Evaluator Verdict

- `operator_usability`: `NEAR-PASS`, score `2`
- `question_quality`: `NEAR-PASS`, score `2`
- `stitch_readiness`: `BLOCK`, score `1`

### Common Failure Patterns

- hybrid shape에서 `tone-first / flow-first / screen-first` tie-break가 약함
- regulated / privacy / delegation / save-resume path가 template level에서 덜 닫힘
- actor / permission / visibility / first value moment이 자주 빠짐
- `DESIGN.md`의 closed token table, screen priority registry, stitch packet이 scaffold 수준이었음
- starter example density가 부족해서 first-time operator가 일부 상황에서 추론을 더 해야 했음

### Pack-Level Fixes Applied

- added design front door:
  - `references/START-HERE.md`
  - `references/DEFAULT-RESOLVED-ROUTES.md`
  - `references/UPDATE-ENTRY-MAP.md`
- added `design-intake-triage` skill
- added `design-pack-auditor` agent
- upgraded `DESIGN-SKILL-AGENT-CONTRACTS.md` with:
  - document ownership
  - provisional mode
  - mandatory discovery ladder
  - stress activation step
- upgraded `DESIGN.template.md` with:
  - document precedence
  - route snapshot
  - provisional mode
  - risk / proof / governance surfaces
  - signal ownership rule
  - closed token table
  - screen priority registry
  - stitch input packet
- upgraded planning templates:
  - `UX-IA.template.md`
  - `SCREEN-SPECS.template.md`

### Patch Targets

- `product-spec/design/README.md`
- `product-spec/design/references/START-HERE.md`
- `product-spec/design/references/DEFAULT-RESOLVED-ROUTES.md`
- `product-spec/design/references/UPDATE-ENTRY-MAP.md`
- `product-spec/design/references/DESIGN-SKILL-AGENT-CONTRACTS.md`
- `product-spec/design/references/DESIGN-DONE-CRITERIA.md`
- `product-spec/design/references/DESIGN-USABILITY-EVALUATION.md`
- `product-spec/design/references/DESIGN-RALPH-LOOP-PROTOCOL.md`
- `product-spec/design/templates/DESIGN.template.md`
- `product-spec/design/skills/design-intake-triage/SKILL.md`
- `product-spec/design/skills/visual-direction-strategy/SKILL.md`
- `product-spec/design/skills/experience-flow-design/SKILL.md`
- `product-spec/design/skills/screen-spec-design/SKILL.md`
- `product-spec/design/skills/design-synthesis/SKILL.md`
- `product-spec/design/agents/*`
- `product-spec/planning/templates/UX-IA.template.md`
- `product-spec/planning/templates/SCREEN-SPECS.template.md`

### Status

- full-wave result after Loop 1 patching:
  - `operator usability`: improved materially
  - `question quality`: close
  - `stitch readiness`: still not closed

## Loop 2

### Scope

- targeted recheck after Loop 1 fixes
- evaluator-only follow-up on:
  - `operator_usability`
  - `question_quality`
  - `stitch_readiness`
  - `screen_contract_quality`
  - `update_usability`

### Targeted Recheck Results

- `operator_usability`: `PASS`, score `3`
- `question_quality`: `PASS`, score `3`
- `stitch_readiness`: `PASS`, score `3`
- `screen_contract_quality`: `PASS`, score `3`
- `update_usability`: `PASS`, score `3`

### Extra Hardening Applied During Loop 2

- added deterministic tie-break table and compact route-card examples to `START-HERE.md`
- mirrored tie-break shortcut to `DEFAULT-RESOLVED-ROUTES.md`
- strengthened discovery ladder with:
  - first value moment
  - never-hide signal
  - new vs update
  - reminder/privacy shaping
- added exact starter typography, responsive behavior, and state priority rules to `DESIGN.template.md`
- added concrete starter screen rows to `SCREEN-SPECS.template.md`
- added starter examples for:
  - `ux.first_value_moment`
  - `actor_permission_visibility_matrix`
  - `trust_status_signal_registry`
- added compact update walkthrough to `UPDATE-ENTRY-MAP.md`
- added `TRUST-OWNERSHIP-MATRIX.md`
- added `DESIGN-TO-ARCHITECTURE-HANDOFF.md`

### Residual Notes

- optional hardening only:
  - split some broad question clusters into more atomic prompts if needed
  - later reconcile trust layering language between design and planning packs more tightly

### Final Verdict

- current design pack verdict: `Broad Usable`
- targeted core usability gates in this wave: `PASS`
- current read: `design pack is now strong enough to continue toward release-candidate hardening`
