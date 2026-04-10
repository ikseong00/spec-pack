# Planning Template Pack

이 디렉터리는 `.claude` / `.codex`용 pack을 만드는 internal authoring source다.

즉:

- `spec-pack/`은 우리 작업용 원본이다
- end user가 직접 읽거나 설치 대상으로 삼는 디렉터리는 아니다
- 실제 배포물은 `spec-pack` CLI와 install 후 생성되는 host root 산출물이다
- `planning-pack`은 compatibility alias command로만 유지된다

현재 상태:

- planning 문서, 질문 방식, 출력 규약, 라우팅 규약, template skeleton까지 포함한다
- reusable local pack으로는 사용 가능하다
- `npm` / `npx`로 `.claude` / `.codex`에 설치하는 packaging scaffold가 있다
- operator quickstart와 worked example set은 추가되었다
- GSD, gstack, pm-skills를 벤치마킹해 설계
- 현재 상태 요약은 [PLANNING-PACK-1ST-DRAFT.md](PLANNING-PACK-1ST-DRAFT.md) 참고

핵심 방향:

- 질문으로 모호함을 제거한다
- 조사와 결정을 분리한다
- 다음 단계가 같은 질문을 반복하지 않게 만든다
- 가설은 검증 계획과 함께 기록한다
- 지표, 신뢰, 운영 리스크, 법적 리스크를 뒤로 미루지 않는다
- website / SaaS뿐 아니라 mobile app, internal tool, AI-assisted workflow, regulated ops, hybrid service workflow까지 다루는 것을 목표로 한다
- growth나 monetization보다 work-shape, operating risk, trust, adoption friction이 더 product-shaping이면 그 질문을 먼저 올린다
- 구조만 좋은 문서보다, 사용자에게서 진짜 답을 끌어내는 질문 품질이 더 중요하다
- 넓은 범용성을 유지하되, 코어 flow는 얇게 유지하고 product-type 차이는 overlay로 처리한다
- 최종 산출물은 `개발자가 판단 가능한 문서`까지이며, API/component/module 설계까지는 내려가지 않는다

## Universal Model

이 pack의 canonical classifier는 시장 이름 하나만 보지 않는다.

- `work_shape`
- `surface_model`
- `loop_model`
- `modifiers`
- `current_gap`

자세한 축은 [DOMAIN-AXES.md](references/DOMAIN-AXES.md)를 본다.

기존 archetype 이름(`consumer-saas`, `b2b-saas`, `marketplace` 등)은 compatibility alias로 남겨도 된다.

## Light Start

처음 쓰는 operator이고 `fast` 또는 experiment-first로 시작하려면 아래만 먼저 본다.

1. [START-HERE.md](references/START-HERE.md)
2. [DEFAULT-RESOLVED-ROUTES.md](references/DEFAULT-RESOLVED-ROUTES.md)
3. [OPERATOR-STARTER.md](references/OPERATOR-STARTER.md)
4. 변경 작업이면 [UPDATE-ENTRY-MAP.md](references/UPDATE-ENTRY-MAP.md)
5. `work_shape` 1개 선택
6. `surface_model` 1개 선택
7. `loop_model` 1개 선택
8. current gap 1개 선택
9. pace 1개 선택
10. 해당 compression contract가 있으면 그것부터 적용

이 단계에서는 13-skill spine 전체를 먼저 읽지 않는다.

- `public-website-lite`
  - brochure, landing, local-service, lightweight directory
- `early-consumer-weak-evidence`
  - retained consumer product인데 recent instance, repeat, WTP가 약한 경우

위 두 경우는 `OPERATOR-STARTER.md`의 hard cap과 stop rule을 먼저 따른다.

## Pack Shape

이 팩은 아래 4종으로 구성된다.

1. `skills`
2. `agents`
3. `references`
4. `control-plane rules`

`skills`는 단계별 사고를 강제하고, `agents`는 품질 점검과 요약을 담당한다.  
`references`는 질문 규약, 공통 출력 스키마, metric hierarchy, overlay registry를 담는다.

planning 완료의 최종 형태는 요약 한 장이 아니라 `8-document core set including PLANNING-RECORD`다.

`One-Page Core Artifact`는 convenience summary일 뿐이며, canonical source of truth는 아니다.

모든 skill은 이제 자기 local output만이 아니라, `planning record`의 어느 canonical section / block을 갱신하는지도 명시한다.

reusable assets:

- core references
- owner freeze bridge
- owner freeze quick fill cards
- metadata spec
- projection matrix
- 8 core document templates
- 1 derived one-page template
- thin onboarding surfaces:
  - `references/START-HERE.md`
  - `references/DEFAULT-RESOLVED-ROUTES.md`
  - `references/OPERATOR-STARTER.md`

owner-sensitive handoff는 [OWNER-FREEZE-BRIDGE.md](references/OWNER-FREEZE-BRIDGE.md)를 함께 본다.
hard-case를 빨리 채울 때는 [OWNER-FREEZE-QUICK-FILL-CARDS.md](references/OWNER-FREEZE-QUICK-FILL-CARDS.md)를 먼저 본다.
서비스 명세를 더 빡세게 채울 때는 [SERVICE-SPEC-AUTHORING-RULES.md](references/SERVICE-SPEC-AUTHORING-RULES.md)를 함께 본다.

boundary:

- `skills`: canonical planning content를 만들고 갱신한다
- `agents`: audit, compression, contradiction detection, next-question selection만 한다
- agent는 새 canonical claim을 만들기보다, 이미 있는 근거를 더 깔끔하게 정리하거나 부족한 질문을 드러내는 쪽을 우선한다
- producer skill은 `required_modifier_blocks`를 읽고 자기 단계에서 shape를 바꾸는 block을 `Must Capture`와 `Record Writes`에 올려야 한다
- stage close skill은 memory snapshot과 compliance self-check를 남겨 다음 stage 재질문 비용을 줄여야 한다

## Draft Skills

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

## Draft Agents

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

## Default Spine

이 순서는 기본 spine이지, 모든 프로젝트가 반드시 1:1로 따라야 하는 curriculum은 아니다.

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

필요한 경우:

- research input이 먼저 있으면 `user-research-analysis`부터 시작할 수 있다
- data dependency가 제품 정의를 좌우하면 `data-source-strategy`를 앞당길 수 있다
- packaging이나 paywall이 제품 shape를 바꾸면 `monetization-strategy`를 scope 전에 당길 수 있다
- 반대로 success path가 더 중요한 초기 단계면 `monetization-strategy`는 light viability note 수준으로 늦게 처리할 수 있다

`user-research-analysis`는 더 이상 완전 optional이 아니다.

- 모든 digital service planning에는 최소 `light user analysis`가 필요하다
- target이 넓거나, role이 갈리거나, segment별 행동 차이가 제품 shape를 바꾸면 `full user analysis`로 올린다

## Pace

같은 archetype이라도 planning 깊이는 pace로 조절한다.

- `fast`
  - solo builder, brochure site, very early MVP에 맞는 경량 경로
  - missing depth는 `low-confidence`로 남길 수 있다
  - 단, `problem / user / primary use case / first value / main risk / next step`은 생략하지 않는다
- `standard`
  - 현재 minimum route의 기본값이다
  - generic digital-service planning의 기본 모드다
  - monetization은 기본적으로 `light viability note`로 다루고, 제품 shape를 바꿀 때만 깊게 판다
- `full`
  - hypothesis, rollout, compliance, buyer/payer, dependency가 product shape를 강하게 바꿀 때 쓴다
  - unresolved blocker는 `not_ready_because`로 남긴다

## Canonical Route Heuristics

canonical route는 legacy archetype보다 아래 순서로 결정한다.

- `work_shape`
- `surface_model`
- `loop_model`
- `modifier`
- `current_gap`
- `pace`

빠른 읽기 기준:

- `capture-and-route`
  - 기본 진입: `idea-discovery -> problem-validation -> user-research-analysis -> mvp-scope -> ux-use-case-strategy -> planning-synthesis`
- `self-serve-loop`
  - 기본 진입: `idea-discovery -> problem-validation -> hypothesis-validation -> user-research-analysis -> mvp-scope -> ux-use-case-strategy -> acquisition-retention-strategy -> planning-synthesis`
- `draft-review-approve`
  - 기본 진입: `idea-discovery -> problem-validation -> user-research-analysis -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> stakeholder-rollout-strategy -> planning-synthesis`
- `system-of-record-workflow`
  - 기본 진입: `idea-discovery -> problem-validation -> user-research-analysis -> data-source-strategy -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis`
- `coordinate-and-transact`
  - 기본 진입: `idea-discovery -> problem-validation -> market-competitor-research -> data-source-strategy -> stakeholder-rollout-strategy -> mvp-scope -> ux-use-case-strategy -> planning-synthesis`
- `publish-and-curate`
  - 기본 진입: `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> ux-use-case-strategy -> acquisition-retention-strategy -> planning-synthesis`
- `integrate-and-control`
  - 기본 진입: `idea-discovery -> problem-validation -> data-source-strategy -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis`

modifier escalation:

- `regulated-workflow` -> `full` pace, `regulated_workflow_minimum` before scope freeze
- `service-operations-workflow` -> `service_ops_minimum` before scope freeze
- `offline-operability` -> `offline_operability` before flow freeze
- `knowledge-grounded` -> `knowledge_contract` before synthesize
- `human-review-gated` -> `review_queue_model` before synthesize
- 둘 다 active면 `knowledge_contract`, `review_queue_model`을 함께 요구한다
- `privacy-sensitive-consumer` -> mobile/privacy boundary before screen freeze
- `local-discovery-trust` -> entity/freshness/claim/ranking trust policy before directory freeze
- `media-membership` -> free boundary, package ladder, moderation/support, refund/cancel boundary before membership freeze
- `learning-progression` -> progression/assignment/grading/completion contract before flow freeze
- `reservation-lifecycle` -> booking/state lifecycle, external write authority, change owner, post-commitment support SLA before transactional freeze
  - external partner or supplier source of truth가 있으면 `platform_contract`도 같이 required로 올린다
- `artifact-revision-controlled` -> authoritative revision, supersession, receipt, change-impact contract before handoff freeze
- `availability-booking` -> availability authority, hold expiry, buffer, blackout, double-book rule before booking flow freeze
- `constraint-exception-controlled` -> threshold, ceiling, exception owner, recovery rule before ops freeze
- appeal, regrade, callback promise, denial recovery, manual exception handling이 shape를 바꾸면 `exception_recovery_contract`를 flow freeze 전에 올린다

## Minimum Routes

기본 spine은 길다. 실제 적용은 아래 minimum route에서 시작한다.

아래 route는 legacy archetype compatibility alias 관점 설명이다. canonical planning은 가능하면 위 `Canonical Route Heuristics`를 먼저 사용한다.

아래 route는 `standard` pace 기준이다. `fast` pace는 [CONTROL-PLANE.md](references/CONTROL-PLANE.md)의 route resolver를 따라 current gap 기준으로 더 짧게 시작할 수 있다.

`monetization-strategy`는 기본적으로 success path를 가린 채 먼저 깊게 파는 용도가 아니다.

- 기본값은 `서비스가 성공하면 어떤 방식으로 sustain 가능한가` 정도의 light viability note다
- paywall, pricing, take-rate, B2B packaging처럼 제품 shape를 바꾸는 경우에만 deep mode로 올린다
- success path가 아직 약하면 monetization보다 activation / retention / proof-of-value를 먼저 닫는다

- `public-website-lead-gen-seo`
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`
  - 단순 brochure라도 `user-research-analysis`와 `data-source-strategy`는 light mode로 거친다
  - landing / local-service / simple brochure / lightweight directory면 `public-website-lite` compression을 적용해 page-template spec, indirect monetization note, minimal re-engagement note로 압축할 수 있다
- `consumer-saas`
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`
  - category가 명확하거나 source-of-truth가 단순하면 `market-competitor-research`, `data-source-strategy`는 light mode로 처리한다
  - evidence가 약하거나 habit / paywall / retained-use가 product shape를 바꾸면 `hypothesis-validation`을 required로 올리고 `consumer_evidence_gate` output을 남긴다
  - 위 조건이면 `proof_of_value_gate`를 explicit block으로 올리고, paywall depth보다 먼저 닫는다
  - 위 조건이면 build-mode handoff가 아니라 experiment-mode handoff가 먼저 와야 한다
- `b2b-saas`
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> stakeholder-rollout-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`
  - pilot, security review, procurement, contract conversion이 보이면 `self-serve-to-enterprise`를 required로 올리고 `expansion_model` output을 남긴다
- `marketplace`
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> data-source-strategy -> stakeholder-rollout-strategy -> mvp-scope -> ux-use-case-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`
  - fulfillment, delivery, 예약 운영, human review, trust-ops burden이 core면 `commerce-transactional` modifier를 required로 붙이고 `trust_ops_minimum` output을 남긴다
  - 위 조건이면 `trust_ops_minimum`은 final scope freeze 전에 resolved되어야 하고, unresolved면 `mvp-scope`를 final로 보지 않는다
- `content-community`
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`
  - source-of-truth나 external data가 단순하면 `data-source-strategy`는 light mode로 처리한다
  - subscription / archive / editorial cadence / support burden이 product shape를 바꾸면 `stakeholder-rollout-strategy`를 required로 올린다
  - newsletter + archive + community + paywall 조합이면 `media-membership`를 required로 올리고 `stakeholder-rollout-strategy`를 scope 전에 당긴다
  - 위 조건이면 `media_membership` output을 남기고 moderation owner와 support owner or SLA를 초반 pass에서 먼저 닫는다
- `platform-integration`
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> positioning-strategy -> mvp-scope -> ux-use-case-strategy -> data-source-strategy -> stakeholder-rollout-strategy -> acquisition-retention-strategy -> monetization-strategy -> planning-synthesis`
  - `data-source-strategy`는 `platform_contract` output을 남겨야 한다
  - pilot, security review, procurement, contract conversion이 보이면 `self-serve-to-enterprise`를 required로 올리고 `expansion_model` output을 남긴다
  - 위 조건이면 `next_implementation_input` 전 `SCREEN-SPECS`와 `EXECUTION-HANDOFF` projection을 확인한다

## Non-Negotiables

- 질문은 한 번에 하나씩 던진다
- vague한 표현은 그냥 통과시키지 않는다
- facts / assumptions / decisions / open_questions를 분리한다
- 최근 예시, 현재 workaround, 실제 빈도를 가능한 한 빨리 확인한다
- 대표 유스케이스가 없으면 기능 설계로 넘어가지 않는다
- representative use case는 `actor / trigger / current alternative / desired outcome / first value event`까지 있어야 한다
- 필요한 데이터소스가 불명확하면 제품 정의가 완료되지 않은 것으로 보지 않는다
- 수익화는 기본적으로 경량 viability note로 남기고, paywall / pricing / take-rate처럼 제품 shape를 바꿀 때만 초기 설계 변수로 강하게 본다
- B2B와 내부도구는 buyer / user / approver / admin / security / procurement를 구분한다
- rollout, adoption, dependency, compliance는 implementation 이후 문제가 아니라 planning 문제다
- metrics는 synthesis에서 처음 쓰는 것이 아니라 discovery 단계부터 후보가 보여야 한다
- product archetype에 따라 overlay 질문을 선택하되, overlay는 얕게 쌓는다
- final output은 긴 메모가 아니라 재사용 가능한 handoff여야 한다
- mobile-native면 permission, notification, background behavior, local storage boundary를 planning 안에서 모델링한다
- regulated-workflow면 policy source of truth, approval matrix, audit trail minimum, manual handoff를 planning 안에서 모델링한다
- service-operations-workflow면 lifecycle, queue, dispatch, exception handling, SLA owner를 planning 안에서 모델링한다
- knowledge-grounded면 source policy, freshness, citation, override rule을 planning 안에서 모델링한다
- human-review-gated면 review queue, approval threshold, override rule을 planning 안에서 모델링한다

## Control Plane At A Glance

이 팩은 무거운 워크플로 엔진이 아니라, 얇은 control plane 위에서 작동한다.

1. classifier
   - `work_shape`, `surface_model`, `loop_model`을 고른다
   - 필요하면 compatibility alias로 `primary archetype`를 같이 적는다
   - 필요하면 `modifier overlay`를 0-2개 붙인다
   - 현재 빈틈을 `current gap`으로 표시한다
2. coarse state machine
   - `intake -> discover -> validate -> research -> user-clarity -> strategy -> scope -> flow -> rollout -> growth -> revenue -> synthesize -> done/blocked`
3. question ladder
   - `open question -> recent example -> current workaround -> evidence/frequency -> stop or handoff`
4. shared planning record
   - 모든 skill은 같은 planning record envelope에 기록한다
5. route resolver
   - `work_shape + surface_model + loop_model + current gap + pace`로 시작 skill, required block, stop rule을 정한다

자세한 규약은 아래 reference를 본다.

- first-time operator는 [OPERATOR-STARTER.md](references/OPERATOR-STARTER.md)부터 본다
- lightweight start는 `public-website-lite`, `early-consumer-weak-evidence` compression contract를 먼저 본다
- [DOMAIN-AXES.md](references/DOMAIN-AXES.md)
- [CONTROL-PLANE.md](references/CONTROL-PLANE.md)
- [PLANNING-RECORD.md](references/PLANNING-RECORD.md)
- [METRIC-HIERARCHY.md](references/METRIC-HIERARCHY.md)
- [PLANNING-DONE-CRITERIA.md](references/PLANNING-DONE-CRITERIA.md)
- [CORE-DOCUMENT-SET.md](references/CORE-DOCUMENT-SET.md)
- [SKILL-AGENT-CONTRACTS.md](references/SKILL-AGENT-CONTRACTS.md)
- [PLANNING-STATE-CONTRACT.md](references/PLANNING-STATE-CONTRACT.md)
- [AUDIT-PROTOCOL.md](references/AUDIT-PROTOCOL.md)
- [BENCHMARK-HARNESS.md](references/BENCHMARK-HARNESS.md)
- [CANONICAL-CONCEPT-REGISTRY.md](references/CANONICAL-CONCEPT-REGISTRY.md)
- [TEMPLATE-USABILITY-EVALUATION.md](references/TEMPLATE-USABILITY-EVALUATION.md)

operator front door는 아래 tier로 읽는다.

- 처음 시작: `OPERATOR-STARTER.md`, `DOMAIN-AXES.md`, `CONTROL-PLANE.md`
- core contract 확인: `PLANNING-RECORD.md`, `PLANNING-DONE-CRITERIA.md`, `CORE-DOCUMENT-SET.md`, `SKILL-AGENT-CONTRACTS.md`
- 필요 시만 확장: `PLANNING-STATE-CONTRACT.md`, `AUDIT-PROTOCOL.md`, `BENCHMARK-HARNESS.md`, `CANONICAL-CONCEPT-REGISTRY.md`, `TEMPLATE-USABILITY-EVALUATION.md`

`PLANNING-PACK-SUMMARY.md`, `LOOP-*`, `DONE-CRITERIA-LOOP-SUMMARY.md` 같은 문서는 derived summary 또는 maintenance log이지, pack 사용자가 반드시 읽어야 하는 운영 문서는 아니다.

worked example은 아래에서 본다.

- [worked-examples/README.md](worked-examples/README.md)
- [consumer-saas-weak-evidence.md](worked-examples/consumer-saas-weak-evidence.md)
- [public-website-lite-directory.md](worked-examples/public-website-lite-directory.md)
- [platform-self-serve-enterprise.md](worked-examples/platform-self-serve-enterprise.md)
- [marketplace-transactional.md](worked-examples/marketplace-transactional.md)
- [content-community-membership.md](worked-examples/content-community-membership.md)
- [b2b-pilot-to-paid.md](worked-examples/b2b-pilot-to-paid.md)

## Core Overlays

기본 flow는 공통으로 유지하되, canonical classifier는 `work_shape + surface_model + loop_model + modifier` 조합을 쓴다. 아래 legacy archetype은 compatibility alias다.

- `public-website-lead-gen-seo`
- `consumer-saas`
- `b2b-saas`
- `marketplace`
- `content-community`
- `platform-integration`

modifier overlay:

- `regulated-workflow`
- `self-serve-to-enterprise`
- `commerce-transactional`
- `knowledge-grounded`
- `human-review-gated`
- `service-operations-workflow`
- `offline-operability`
- `privacy-sensitive-consumer`
- `media-membership`
- `local-discovery-trust`
- `learning-progression`
- `reservation-lifecycle`
- `artifact-revision-controlled`
- `availability-booking`
- `constraint-exception-controlled`

원칙:

- primary archetype은 1개만 잡는다
- modifier는 정말 질문 집합을 바꾸는 경우에만 붙인다
- `regulated-workflow`는 기본 archetype이 아니라 risk modifier다
- `platform-integration`은 integration-heavy SaaS와 developer-platform을 한 lane에서 다룬다
- `public-website-lead-gen-seo`는 brochure, local services, landing page, directory, SEO acquisition형 사이트를 포함한다
- canonical planning은 가능하면 legacy archetype보다 `work_shape + surface_model + loop_model`을 먼저 적는다

상세 질문 세트는 [QUESTION-OVERLAYS.md](references/QUESTION-OVERLAYS.md)에 둔다.

## Current Remaining Edges

핵심 planning spine과 install scaffold는 이미 있다. 남은 건 mostly host polish / validation 성격의 항목이다.

- archetype coverage를 더 넓히는 추가 validation example
- packaged form을 host별로 더 검증
- operator starter와 package README를 계속 sync 유지
- summary 문서와 core references를 계속 sync 유지
