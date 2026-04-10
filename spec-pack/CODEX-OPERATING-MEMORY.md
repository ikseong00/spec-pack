# Codex Operating Memory

이 문서는 이 저장소에서 Codex가 반복적으로 지켜야 하는 고정 판단을 압축해 둔 project memory다.

목적:

- ECC를 `배포물`이 아니라 `하네스 설계 참고원`으로 쓴다는 점을 고정한다
- stage별 canonical skills / agents / docs를 빠르게 다시 불러온다
- loop를 돌릴 때 같은 판단을 다시 발명하지 않게 만든다

## Stable Decisions

- ECC는 이 저장소에 그대로 섞어 배포하지 않는다
- ECC에서 가져오는 것은 `agent 역할 분리`, `skill 계약`, `loop 운영`, `compliance 관점`, `memory/compact 습관`이다
- 이 저장소의 canonical source는 항상 `spec-pack/`이다
- 이 pack의 산출물 목표는 `decision-complete, implementation-open`이다
- 즉 개발자가 다시 제품 질문을 하지 않게 만들지만, API / component / module 설계는 강제하지 않는다
- `internal-authored-bundles/`, internal review, loop log는 검증용이며 배포 대상이 아니다
- 공개 가능한 예시는 `worked-examples/`로만 유지한다
- `planning -> design -> architecture`는 순차 pack이지만 shared doc/handoff contract로 연결된다

## Stage Map

### Planning

- primary docs:
  - `PROJECT-THESIS.md`
  - `PLANNING-RECORD.md`
  - `RESEARCH.md`
  - `PRD.md`
  - `UX-IA.md`
  - `SCREEN-SPECS.md`
  - `BUSINESS-OPS.md`
  - `EXECUTION-HANDOFF.md`
- canonical skills:
  - `idea-discovery`
  - `problem-validation`
  - `hypothesis-validation`
  - `user-research-analysis`
  - `market-competitor-research`
  - `positioning-strategy`
  - `mvp-scope`
  - `ux-use-case-strategy`
  - `data-source-strategy`
  - `stakeholder-rollout-strategy`
  - `acquisition-retention-strategy`
  - `monetization-strategy`
  - `planning-synthesis`
- canonical agents:
  - producer/checker planning agents under `spec-pack/planning/agents/`

### Design

- primary docs:
  - `DESIGN.md`
  - enriched `UX-IA.md`
  - enriched `SCREEN-SPECS.md`
- canonical skills:
  - `design-intake-triage`
  - `visual-direction-strategy`
  - `experience-flow-design`
  - `screen-spec-design`
  - `design-synthesis`
- canonical agents:
  - runner/evaluator design agents under `spec-pack/design/agents/`

### Architecture

- current stance:
  - rough-first
  - lock large structure, boundaries, state, data, integration, non-functional constraints before implementation
- current canonical outputs:
  - `ARCHITECTURE.md`
  - `STATE-PERMISSIONS.md`
  - `DATA-MODEL.md`
  - `INTEGRATIONS.md`
  - `NON-FUNCTIONAL.md`
- note:
  - architecture는 아직 full skill spine보다 template + loop surface가 먼저다

## Prebuild Loop Memory

- integrated planning->design loop는 `spec-pack/prebuild/`가 canonical이다
- broad rerun 기본 matrix는 `PREBUILD-SCENARIO-MATRIX-50.md`다
- loop 역할은 최소 아래 4개로 분리한다
  - scenario runner
  - evaluator set
  - loop operator
  - harness optimizer
- compliance 관점은 별도 auditor가 본다
- 같은 residual cluster가 반복되면 wording fix가 아니라 contract fix를 먼저 한다

## Memory Write Rules

stage close 또는 loop wave 종료 시 아래를 남긴다.

- 무엇을 잠갔는가
- 무엇을 절대 design/architecture에서 다시 열면 안 되는가
- unresolved risk는 무엇인가
- 다음 stage가 바로 써야 하는 exact next input은 무엇인가
- 다음 rerun scope는 full인지 targeted인지

## Do Not Reopen By Accident

- planning에서 잠긴 owner / source / policy / SLA / exception rule
- design에서 잠긴 must-visible signal, state priority, screen contract
- internal fixture boundary
- rough-first architecture stance
