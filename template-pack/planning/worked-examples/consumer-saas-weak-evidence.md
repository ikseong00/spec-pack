# Worked Example: Consumer SaaS Weak Evidence

## Scenario

- 개인 생산성 / habit formation 앱
- 아이디어는 있으나 최근 사례, retained use, paywall 근거가 약함

## Starting Input Shape

- cold or near-cold start
- broad target
- current alternative 불명확
- activation / retention / monetization 모두 가설 상태

## Chosen Route

- archetype: `consumer-saas`
- modifiers: none
- pace: `full`
- route:
  - `idea-discovery -> problem-validation -> hypothesis-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`

## First Questions

- habit loop product인가 one-shot utility인가
- 최근 실제 사례는 무엇인가
- 지금은 무엇으로 버티는가
- 첫 가치 경험은 정확히 무엇인가
- 어떤 evidence가 나오면 proof-of-value가 검증됐다고 봅니까
- 다시 돌아오게 만드는 loop는 무엇인가
- 어떤 결과가 나오면 stop or pivot 합니까
- 어떤 결과가 나오면 build로 승격합니까

## Required Blocks Before Scope Freeze

- `consumer_evidence_gate`
- `proof_of_value_gate`
- `hypothesis_register`
- `first_value_moment`
- `activation_event`
- `retention_loop`
- `paywall_boundary`

## Compact Evidence Rubric

- recent instance:
  - 최근 실제로 이 문제를 겪은 사례 1개 이상
- current alternative:
  - 지금 버티는 앱, 수동 방식, 알림 루프 1개 이상
- why-now signal:
  - 지금 이 문제를 풀어야 하는 trigger 1개
- first-value threshold:
  - 예: 첫 24시간 안에 기록 2회 이상
- proof-of-value threshold:
  - 예: 첫 7일 안에 40%가 첫 목표를 달성하고, 그중 절반 이상이 2주 안에 자발적으로 1회 이상 재사용
- repeat criterion:
  - 예: 7일 내 3회 이상 복귀
- WTP threshold:
  - 예: reminder customization 또는 streak recovery에 대해 유료 의사 표현
- stop / pivot / build gate:
  - stop: activation과 repeat가 둘 다 threshold 미달
  - pivot: activation은 되나 repeat가 약함
  - build: promotion_rule_to_build 충족

## Expected Doc Density

- `PLANNING-RECORD`: low-confidence note가 많아도 된다
- `PRD`: MVP보다 experiment framing이 먼저 보여야 한다
- `BUSINESS-OPS`: acquisition, paywall, WTP threshold를 가설로 적는다
- `BUSINESS-OPS`: proof-of-value가 닫히기 전에는 monetization보다 sustainability note가 먼저 보인다
- `EXECUTION-HANDOFF`: `next_experiment`가 기본이며 `next_implementation_input`는 promotion rule 충족 전 금지

## Expected Next Step

- `next_experiment`
- 예:
  - interview
  - smoke landing page
  - reminder cadence prototype
  - cohort-based activation / repeat threshold check

## Main Watchouts

- consumer role-map을 B2B처럼 과하게 묻지 않는다
- activation, proof-of-value, repeat 중 제일 불확실한 것부터 gate로 잡는다
- proof-of-value gate 없이 paywall detail을 먼저 깊게 파지 않는다
- summary가 예뻐도 falsification rule이 없으면 ready가 아니다
