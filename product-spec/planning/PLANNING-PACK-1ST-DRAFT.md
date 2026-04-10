---
status: derived
owner: product
last_updated: 2026-04-09
source_of_truth_for:
  - derived.first_draft_summary
derived_from:
  - README.md
  - references/CONTROL-PLANE.md
  - references/PLANNING-RECORD.md
  - references/PLANNING-DONE-CRITERIA.md
  - references/CORE-DOCUMENT-SET.md
  - references/PROJECTION-MATRIX.md
  - references/CANONICAL-CONCEPT-REGISTRY.md
  - RALPH-LOOP-LOG.md
update_when:
  - canonical pack rule changes
  - validation result changes
open_questions:
  - none
change_log:
  - 2026-04-09: created first draft summary
---

# Planning Pack 1st Draft

이 문서는 현재 planning pack의 1차 정리본이다.

- canonical source of truth가 아니다
- 실제 규칙은 `README.md`와 `references/` 아래 canonical 문서를 우선한다
- 이 문서와 canonical 문서가 어긋나면 이 문서를 `stale`로 보고 다시 생성한다

## 1. 목표

이 pack의 목표는 웹사이트 / SaaS 중심 프로젝트에서 구현 전 기획 단계를 반복 가능한 operating system으로 만드는 것이다.

핵심은 아래 4가지다.

- 질문으로 모호함을 제거한다
- 조사와 결정을 분리한다
- 구현 전에 handoff 가능한 문서 세트를 만든다
- 유지보수와 신규 기능 추가 시에도 계속 재사용 가능한 living doc 구조를 남긴다

## 2. 현재 확정된 구조

### skills

현재 spine은 13개다.

1. `idea-discovery`
2. `problem-validation`
3. `hypothesis-validation`
4. `user-research-analysis`
5. `market-competitor-research`
6. `positioning-strategy`
7. `mvp-scope`
8. `ux-use-case-strategy`
9. `data-source-strategy`
10. `stakeholder-rollout-strategy`
11. `acquisition-retention-strategy`
12. `monetization-strategy`
13. `planning-synthesis`

### agents

현재 draft agent는 13개다.

1. `discovery-synthesizer`
2. `problem-validator`
3. `hypothesis-validator`
4. `user-researcher`
5. `market-competitor-researcher`
6. `positioning-advisor`
7. `mvp-critic`
8. `ux-use-case-designer`
9. `data-source-analyst`
10. `stakeholder-rollout-planner`
11. `growth-strategist`
12. `monetization-advisor`
13. `planning-editor-auditor`

### core documents

planning 완료의 canonical output은 아래 8문서다.

1. `PROJECT-THESIS.md`
2. `PLANNING-RECORD.md`
3. `RESEARCH.md`
4. `PRD.md`
5. `UX-IA.md`
6. `SCREEN-SPECS.md`
7. `BUSINESS-OPS.md`
8. `EXECUTION-HANDOFF.md`

추가로 `ONE-PAGE-CORE-ARTIFACT`는 존재하지만, 이건 canonical source of truth가 아니라 derived index다.

### references

현재 pack을 실제로 고정하는 핵심 reference는 아래다.

- `CONTROL-PLANE.md`
- `PLANNING-RECORD.md`
- `PLANNING-DONE-CRITERIA.md`
- `CORE-DOCUMENT-SET.md`
- `PROJECTION-MATRIX.md`
- `DOC-METADATA-SPEC.md`
- `CANONICAL-CONCEPT-REGISTRY.md`
- `QUESTION-OVERLAYS.md`
- `METRIC-HIERARCHY.md`

## 3. 핵심 설계 결정

이번 1차 정리본에서 굳힌 중요한 결정은 아래다.

- pack은 `기획 문서 모음`이 아니라 `질문 기반 planning OS`로 정의한다
- output은 summary 한 장이 아니라 `planning record + 8 core docs`다
- `One-Page Core Artifact`와 `PLANNING-PACK-SUMMARY`는 derived-only다
- 모든 canonical 문서는 metadata를 가진다
- `source_of_truth_for`는 freeform 문장이 아니라 canonical concept ID를 쓴다
- concept ID는 `CANONICAL-CONCEPT-REGISTRY.md`에서 관리한다
- 모든 website / SaaS planning은 최소 `light user analysis`를 거친다
- `use_case -> flow -> step -> screen -> phase -> task -> acceptance` traceability를 강제한다
- `marketplace + commerce-transactional`은 trust-ops를 scope freeze 전에 해결해야 한다

## 4. 현재 검증 결과

ralph loop를 여러 차례 돌린 결과, 현재 PASS까지 올라온 축은 아래다.

- `documentation quality`
- `implementation handoff quality`
- `transactional marketplace + commerce-transactional`
- `consumer weak-evidence`
- `platform-integration + enterprise signal`
- `public-website-lite`

즉 현재 pack은 적어도 아래 유형에는 planning OS로 적용 가능한 상태다.

- public website / lead-gen / seo
- consumer SaaS
- B2B SaaS
- marketplace
- content / community
- platform / integration

추가로 50-case scenario matrix wave 기준으로도 broad usable 수준까지 올라왔다.

- food / local discovery / booking
- education / cohort / grading / admissions
- healthcare / regulated intake / review / callback ops
- architecture / construction / revision-controlled workflow
- legal / finance / insurance / HR workflow
- logistics / ecommerce / wellness / beauty scheduling
- automotive / pets / events / nonprofit / creator economy / developer tools

이번 wave 이후에는 `13/13` producer skill이 모두 local `Required Modifier Block Injection`을 가지게 됐고, mixed-modifier 시나리오에서 필요한 canonical block이 skill 본문까지 내려오도록 정리됐다.

## 5. 현재 pack이 실제로 보장하는 것

이 pack을 통과하면 최소한 아래 상태를 목표로 한다.

- 문제, 타깃, 현재 대안, 최근 사례가 분리되어 있다
- 시장/경쟁사/자료조사 근거가 남아 있다
- 제품 정의와 포지셔닝이 정리되어 있다
- MVP / defer / out-of-scope가 잘려 있다
- user flow, IA, screen spec이 정리되어 있다
- acquisition / monetization / ops / data / risk가 문서화되어 있다
- 설계/구현이 바로 참조할 handoff가 있다
- 유지보수와 신규 기능 추가 시 어떤 문서를 먼저 수정해야 할지 보인다

## 6. 예시화가 뜻하는 것

여기서 말한 `예시화`는 `worked example`을 뜻한다.

의미는 간단하다.

- pack 규칙만 있는 상태에서 끝내지 않고
- 특정 archetype 하나를 골라
- 실제 sample planning output을 끝까지 작성해보는 것이다

예를 들면:

- `consumer-saas` 예시 1개
- `public-website-lead-gen-seo` 예시 1개
- `marketplace + commerce-transactional` 예시 1개

이 예시에서 만드는 것은 보통 아래다.

- 어떤 질문이 실제로 오가는지
- planning record가 어떻게 채워지는지
- 8개 core 문서가 어떤 모습으로 완성되는지
- 어떤 경우 `next_experiment`로 가고, 어떤 경우 `next_implementation_input`으로 가는지

즉 `예시화`는 pack의 규칙을 실제 샘플 산출물로 보여주는 작업이다.

왜 필요한가:

- 현재 pack은 구조와 계약은 강하다
- 하지만 처음 쓰는 사람은 아직 추상적으로 느낄 수 있다
- worked example이 있으면 “아 이렇게 채우는구나”가 바로 보인다

## 7. 아직 남은 작업

현재 코어 계약은 많이 닫혔지만, 아직 남은 일은 있다.

- 실제 `.claude` / `.codex` 폴더 구조로 packaging
- install / routing helper 정리
- operator onboarding polish
- template naming polish
- shipping-grade packaging guidance

## 8. 추천 다음 단계

지금 시점에서 가장 좋은 다음 단계는 아래 순서다.

1. onboarding / packaging polish 마감
2. `.claude` / `.codex` packaging 초안 작성
3. shipping exclude/include set 고정
4. 최종 import / operator quickstart 정리

내 기준으로는 지금 pack이 `설계 초안` 단계는 이미 넘었고, 이제 `재사용 가능한 템플릿 제품`으로 가기 위해 packaging과 operator polish가 필요한 상태다.
