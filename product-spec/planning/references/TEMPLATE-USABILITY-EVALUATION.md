# Template Usability Evaluation

이 문서는 planning template pack이 실제로 `usable`한지 판단하는 기준표다.

여기서 `usable`의 뜻은 아래다.

- 처음 보는 프로젝트에서도 시작할 수 있다
- operator가 route와 질문 흐름에서 크게 헤매지 않는다
- 결과 문서가 설계 / 구현 / 유지보수에 실제로 쓰인다
- 다른 프로젝트로 옮겨도 구조를 거의 그대로 재사용할 수 있다
- website / SaaS뿐 아니라 mobile, internal workflow, AI-assisted, hybrid service domain에서도 크게 깨지지 않는다

## 1. Evaluation Goal

usable 판단은 문서가 좋아 보이는지로 하지 않는다.

아래 3가지를 동시에 보아야 한다.

1. operator가 실제로 사용할 수 있는가
2. output 문서가 실제 handoff에 쓸 수 있는가
3. pack이 다른 프로젝트에도 반복 적용 가능한가

## 2. Pass Definition

최종적으로 usable이라고 보려면 아래를 만족해야 한다.

- 서로 다른 domain shape 5개 이상에서 큰 구조 수정 없이 돌아간다
- planning 결과가 `PLANNING-RECORD + 8 core docs`로 안정적으로 떨어진다
- `next_experiment` 또는 `next_implementation_input`이 항상 명확하다
- 설계 / 구현 단계에서 같은 discovery 질문을 대량으로 다시 하지 않는다
- 변경 발생 시 어떤 문서를 먼저 업데이트해야 하는지 분명하다

## 3. Evaluation Axes

| Axis | 질문 | Pass 기준 |
| --- | --- | --- |
| Operator Usability | 어디서 시작해야 하는지 바로 알 수 있는가 | work shape, surface, loop, current gap, pace를 기준으로 시작 route가 1분 안에 정해진다 |
| Question Quality | 질문이 실제 답을 끌어내는가 | vague answer가 통과되지 않고 recent example, workaround, evidence까지 내려간다 |
| Routing Clarity | skill 순서가 자연스러운가 | 어느 skill을 먼저 써야 할지 자주 헷갈리지 않는다 |
| Output Completeness | 결과 문서가 충분한가 | 8 core docs와 planning record가 빠짐없이 생성된다 |
| Handoff Usability | 설계/구현이 바로 이어지는가 | use_case -> flow -> screen -> phase -> task -> acceptance가 이어진다 |
| Research Usability | 자료조사와 근거가 usable한가 | 시장, 경쟁사, evidence, freshness가 문서에 남는다 |
| Business Usability | 성공 경로와 운영 현실 판단이 가능한가 | acquisition, success path, ops, data, risk가 빠지지 않고, monetization은 relevant할 때 정리된다 |
| Update Usability | 변경 시 문서를 유지할 수 있는가 | 새 기능/정책/타겟 변경 때 update target 문서가 분명하다 |
| Reuse Usability | 다른 프로젝트에 옮겨도 쓸 수 있는가 | 특정 프로젝트 전용 표현 없이 다른 domain shape에도 적용된다 |
| Weight Control | 너무 무겁지 않은가 | 필요한 질문은 빠지지 않지만, 불필요한 문서/질문 폭증이 없다 |

## 4. Score Rubric

각 axis는 아래 4단계로 평가한다.

| Score | 의미 |
| --- | --- |
| 0 | unusable. 시작점 또는 output이 무너진 상태 |
| 1 | partial. 구조는 있으나 operator가 자주 해석해야 함 |
| 2 | usable. 실전 적용 가능하나 example/packaging 보강이 필요함 |
| 3 | strong. 반복 사용과 handoff가 안정적임 |

## 5. Minimum Pass Bar

### core pass

아래 5축은 모두 최소 `2` 이상이어야 한다.

- `Operator Usability`
- `Question Quality`
- `Output Completeness`
- `Handoff Usability`
- `Reuse Usability`

### average pass

- 전체 평균이 `2.2` 이상

### hard fail

아래 중 하나면 전체는 fail이다.

- `PLANNING-RECORD`와 8 core docs가 안정적으로 안 나온다
- `next_experiment`와 `next_implementation_input`이 자주 모호하다
- same question repetition이 자주 발생한다
- source of truth 충돌이 발생한다
- update path가 불분명하다

## 6. Required Test Scenarios

usable 판단은 하나의 예시로 하지 않는다.

최소 아래 시나리오로 본다.

### Scenario A: Cold Start

- 입력: 아이디어 한 줄 정도만 있음
- 확인할 것:
  - intake가 가능한가
  - work shape / surface / loop / gap / pace를 잡을 수 있는가
  - discovery 질문이 자연스럽게 이어지는가

### Scenario B: Partial Input

- 입력: 문제와 타겟은 있으나 기능/MVP는 없음
- 확인할 것:
  - use case와 MVP를 잘 끌어내는가
  - 불명확한 가정을 open question으로 남기는가

### Scenario C: Weak Evidence Consumer SaaS

- 입력: SaaS 아이디어는 있으나 evidence가 약함
- 확인할 것:
  - `hypothesis-validation`
  - `consumer_evidence_gate`
  - `next_experiment` 우선 handoff

### Scenario D: Public Website Lite

- 입력: landing/local-service/directory 성격
- 확인할 것:
  - `public-website-lite` compression
  - 과도하게 무거워지지 않는가
  - 그래도 문서 handoff는 유지되는가

### Scenario E: Transactional Marketplace

- 입력: verification / dispute / payout / manual review가 핵심인 marketplace
- 확인할 것:
  - trust_ops가 scope freeze 전에 잡히는가
  - liquidity / abuse / remedy / reversal이 빠지지 않는가

### Scenario F: Platform / B2B Expansion

- 입력: integration + enterprise signal이 있는 SaaS
- 확인할 것:
  - `platform_contract`
  - `expansion_model`
  - rollout / admin / procurement / entitlement handoff

### Scenario G: Update Test

- 입력: 기존 pack output에 새 기능 추가 또는 타겟 변경
- 확인할 것:
  - 어떤 문서를 먼저 수정해야 하는지 바로 보이는가
  - 기존 결정 이유를 추적할 수 있는가

### Scenario H: Mobile Privacy-Sensitive Habit Product

- 입력: mobile-only habit app with reminders, personal/sensitive data, weak early evidence
- 확인할 것:
  - `mobile-native` / `privacy-sensitive-consumer` questions가 앞쪽으로 올라오는가
  - notification, lock-screen, delete/export, local-vs-sync boundary가 문서에 남는가

### Scenario I: Regulated Workflow Service

- 입력: approvals-heavy workflow with policy source of truth, audit trail, phone/fax/manual handoff
- 확인할 것:
  - `regulated_workflow_minimum`이 scope freeze 전에 잡히는가
  - queue, approval, audit, denial/rework path가 문서 projection으로 남는가

### Scenario J: AI Review Queue Product

- 입력: knowledge-grounded AI copilot with human review queue and approval threshold
- 확인할 것:
  - `knowledge_contract`, `review_queue_model`, `human-review-gated` questions가 나오는가
  - source policy, citation, fallback, review SLA, override rule이 빠지지 않는가

### Scenario K: Hybrid Service Operations

- 입력: dispatcher console + field mobile + phone support + offline work
- 확인할 것:
  - `service_ops_minimum`, `offline_operability`가 scope 전에 잡히는가
  - lifecycle, queue, parts/source-of-truth, sync recovery가 문서에 남는가

## 7. Evidence To Collect Per Run

각 usability test run에서는 아래를 남긴다.

- input summary
- chosen archetype / modifier / pace
- route taken
- 주요 질문 10~20개
- planning record snapshot
- 8 core doc output 여부
- final next step
- operator friction notes
- ambiguity notes
- fail points
- cross-domain blind spots

## 8. What To Watch Closely

아래는 실제로 자주 망가지는 지점이다.

- operator가 어떤 skill부터 써야 할지 헷갈림
- same question이 discovery와 synthesis에서 반복됨
- PRD는 있는데 UX / screen / handoff traceability가 안 이어짐
- business / ops / data / risk가 뒤늦게 붙음
- derived summary가 canonical 문서와 어긋남
- 경량 archetype에서 pack이 너무 무거워짐
- marketplace / platform 같은 복잡 archetype에서 필수 block이 빠짐
- mobile / regulated / AI / offline domain에서 surface or workflow 질문이 너무 늦게 붙음

## 9. Usability Verdict Bands

| Verdict | 의미 |
| --- | --- |
| Fail | 실전 적용 전 구조 수정 필요 |
| Narrow Usable | 일부 archetype에서만 안정적 |
| Broad Usable | website / SaaS / mobile / workflow / AI-assisted 다수 domain shape에 적용 가능 |
| Production-Ready Template | worked example, packaging, onboarding까지 갖춘 상태 |

현재 이 pack은 `Broad Usable`을 목표로 본다.

## 10. Relation To Worked Example

`worked example`은 usability를 보여주는 샘플이다.

즉:

- usability evaluation은 `판단 기준`
- worked example은 `그 기준을 실제 산출물로 검증하는 방법`

추천 worked example 세트:

1. `consumer-saas`
2. `public-website-lead-gen-seo`
3. `marketplace + commerce-transactional`
4. `mobile privacy-sensitive habit app`
5. `regulated workflow`
6. `AI review queue`
7. `hybrid service operations`

이 3개가 돌아가면 범용성 판단에 가장 도움이 된다.
