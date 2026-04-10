# Cross-Domain Question Overlays

이 문서는 planning skill들이 공통 flow 위에서 사용할 cross-domain classifier + question overlay registry 초안이다.

원칙:

- primary archetype은 1개만 고른다
- modifier는 정말 질문 집합을 바꾸는 경우에만 붙인다
- 각 질문은 semantic ID를 가진다
- 이미 answered 된 질문은 suppression rule로 다시 묻지 않는다

## Pass 0: Universal Classifier

모든 도메인에서 먼저 아래를 정한다.

- `work-shape.primary`: capture-and-route / self-serve-loop / draft-review-approve / system-of-record-workflow / coordinate-and-transact / publish-and-curate / integrate-and-control 중 무엇인가
- `surface.primary`: web / mobile-native / multi-surface / internal-console / api-sdk-cli / human-service-ops / hybrid-offline 중 무엇인가
- `loop.primary`: one-shot / habit / workflow / queue-driven / transactional / content-return 중 무엇인가
- `risk.primary`: regulated / trust-ops / privacy-sensitive / enterprise / offline / knowledge-grounded / review-gated 중 무엇이 shape를 바꾸는가

compatibility alias가 필요하면 legacy archetype 이름을 같이 적되, canonical classifier를 대체하지 않는다.

## Core Questions For All Digital Service Products

overlay-specific 질문 전에 아래 core set을 먼저 확인한다.

### Pass 1: behavior-first

- `user.primary`: 가장 먼저 잡을 핵심 사용자는 누구인가
- `user.moment-of-need`: 언제 이 문제가 진짜 발생하는가
- `user.trigger`: 어떤 사건이 행동을 시작하게 만드는가
- `user.context-of-use`: 어디서 어떤 제약 아래서 쓰는가
- `problem.statement`: 해결하려는 문제는 무엇인가
- `problem.current-alternative`: 지금은 어떤 수동 방식, 서비스, 사람, 검색 흐름으로 해결하는가
- `problem.recent-instance.1`: 최근 실제 사례 1개를 설명할 수 있는가
- `usecase.primary`: 대표 유스케이스 1개를 카드 형태로 말할 수 있는가
- `value.first-moment`: 사용자가 처음 "가치 있다"고 느끼는 순간은 무엇인가

### Pass 2: strategy follow-up

- `growth.primary-motion`: 첫 10명의 유저 / 리드 / 계정 / 케이스 / work item이 어디서 어떻게 들어오는가
- `monetization.value-exchange-note`: 성공 후 어떤 방식으로 sustain 가능해 보이는가
- `data.source-of-truth`: 어떤 데이터나 시스템이 source of truth가 되는가
- `risk.main`: 지금 가장 큰 리스크 하나는 무엇인가
- `user.role-split-needed`: buyer / user / admin / approver / supplier / author가 갈라지는가
- `workflow.primary-unit`: product가 주로 다루는 unit은 사람, 케이스, 문서, 작업, 거래, 콘텐츠, asset 중 무엇인가

role split이 필요하면 `user.role-map`을 mandatory로 올린다.

## Legacy Archetype Overlays

아래 섹션은 compatibility alias용이다. canonical classifier는 `work_shape + surface_model + loop_model + modifier`를 우선한다.

## 1. public-website-lead-gen-seo

적용:

- brochure site
- landing page
- local service site
- directory
- SEO / content-led acquisition site

must ask:

- `website.subtype`: landing page, local service, directory, content-led SEO 중 어떤 subtype인가
- `website.primary-conversion`: 핵심 전환은 문의, 예약, 클릭아웃, 저장, 구독 중 무엇인가
- `website.one-shot-vs-repeat`: 성공은 one-shot conversion 중심인가, repeat visit가 핵심인가
- `website.canonical-entity-model`: canonical entity는 brand, location, service area, listing 중 무엇인가
- `website.page-template-count`: v1에 실제로 필요한 page template와 states는 몇 개인가
- `website.search-intent`: 사용자는 어떤 검색 의도나 상황에서 처음 들어오는가
- `website.first-lead-source`: 첫 리드나 첫 전환 유저는 어디서 오는가
- `website.proof-stack`: 신뢰를 만드는 proof는 리뷰, 사례, 자격, 가격, 데이터 중 무엇인가
- `website.response-sla`: 문의나 리드가 들어온 뒤 누가 얼마나 빨리 처리하는가
- `website.lead-routing`: 리드가 들어오면 어디로 들어가고 누가 triage 하는가
- `website.crm-source-of-truth`: CRM 또는 lead source of truth는 무엇인가
- `website.spam-abuse-ops`: 스팸, 허위 문의, abuse는 누가 어떻게 처리하는가
- `website.content-engine`: SEO나 콘텐츠가 acquisition engine이면 누가 어떤 cadence로 유지하는가
- `website.content-freshness-owner`: 콘텐츠 최신성은 누가 소유하는가
- `website.locality`: 지역성이나 서비스 가능 지역이 중요하다면 어떻게 드러나는가
- `website.local-seo-ops`: local product면 GBP, map pack, NAP, review, service area는 누가 관리하는가
- `website.directory-model`: directory product면 entity source, duplicate suppression, claim/import/curation 방식은 무엇인가
- `website.duplicate-rule`: duplicate listing은 어떤 key로 묶고 merge 또는 canonicalize 하는가
- `website.freshness-sla-owner`: listing freshness, stale detection, correction SLA는 누가 소유하는가
- `website.claim-moderation`: claim, edit, moderation workflow는 있는가
- `website.indexation-risk`: crawlability, indexation, structured data, canonical 관리에서 깨질 수 있는 점은 무엇인가
- `website.consent-compliance`: consent, privacy notice, contact compliance는 누가 관리하는가
- `website.capacity-constraint`: 리드나 예약이 늘면 실제 처리 capacity는 어디서 막히는가
- `website.monetization-model`: lead fee, pay-per-call, featured placement, sponsorship, affiliate 중 무엇이 맞는가
- `website.direct-vs-indirect-monetization`: 수익은 사이트 안에서 직접 발생하는가, 아니면 오프라인/오프사이트 전환인가

validation order:

- demand / intent
- entity / source model
- proof / trust
- conversion path
- response ops
- sustainability

suppresses:

- `consumer.paywall-timing`
- `b2b.procurement-gate`

## 2. consumer-saas

must ask:

- `consumer.product-shape`: habit loop product인가, one-shot utility인가
- `consumer.current-alternative`: 지금 어떤 앱이나 수동 방식으로 해결하는가
- `consumer.onboarding-friction`: signup, setup, permission, import 중 어디서 가장 많이 이탈하는가
- `consumer.primary-acquisition-loop`: 첫 10명의 사용자는 어떤 loop로 들어오는가
- `consumer.activation-event`: 첫 가치 경험은 정확히 무엇인가
- `consumer.proof-of-value-threshold`: 어떤 evidence가 쌓이면 "가치가 검증됐다"라고 보고 build 쪽으로 승격하는가
- `consumer.retention-loop`: 왜 다시 돌아오는가
- `consumer.churn-driver`: week 1 / week 4에 주된 churn 이유는 무엇인가
- `consumer.falsification-rule`: 어떤 결과가 나오면 이 가설을 kill, pivot, or narrow 해야 하는가
- `consumer.evidence-window`: cohort, sample or traffic requirement, measurement window, pass threshold는 무엇인가
- `consumer.paywall-timing`: 무료에서 유료로 넘어가는 순간은 어디인가
- `consumer.habit-trigger`: trigger source, reminder cadence, streak or goal mechanic은 무엇인가
- `consumer.reactivation-path`: dormant user를 어떻게 다시 돌아오게 하는가
- `consumer.freemium-model`: freemium, trial, feature-gated, usage-capped 중 무엇이 맞는가
- `consumer.wtp-threshold`: 유저가 돈을 내기 시작하는 최소 가치 기준은 무엇인가
- `consumer.upgrade-proof`: 업그레이드를 정당화하는 proof는 무엇인가

validation order:

- problem pull
- product shape fork
- onboarding friction
- activation
- proof-of-value
- repeat loop
- falsification gate
- paywall

suppresses:

- `b2b.role-map`

## 3. b2b-saas

must ask:

- `b2b.role-map`: buyer, champion, end user, admin, security, procurement는 각각 누구인가
- `b2b.current-process`: 지금은 어떤 툴과 수동 프로세스로 운영하는가
- `b2b.approval-gate`: 도입을 막는 승인 절차는 무엇인가
- `b2b.initial-pipeline-motion`: 첫 파이프라인은 outbound, warm intro, partner, content, founder-led 중 무엇인가
- `b2b.value-case`: 비용 절감, 속도 향상, 리스크 감소 중 무엇이 핵심인가
- `b2b.rollout-shape`: rollout은 팀 단위인가, 부서 단위인가, 계정 전체인가
- `b2b.pricing-anchor`: seat, usage, workflow, account 중 무엇이 pricing anchor인가
- `b2b.buyer-payer-trigger`: buyer와 payer가 갈라지면 어떤 사건에서 결제가 승인되는가
- `b2b.proof-to-buy`: 구매 전 어떤 proof가 꼭 필요한가
- `b2b.payback-window`: 고객이 받아들이는 payback window는 어느 정도인가

validation order:

- role map
- painful workflow
- ROI proof
- rollout blocker
- pricing / expansion

modifier candidate:

- `self-serve-to-enterprise`
- `regulated-workflow`

## 4. marketplace

must ask:

- `marketplace.side-priority`: 수요 측과 공급 측 중 어느 쪽을 먼저 확보해야 하는가
- `marketplace.initial-wedge`: 초기 wedge는 어떤 지역 / 카테고리 / 직군인가
- `marketplace.liquidity-metric`: liquidity를 무엇으로 판단할 것인가
- `marketplace.trust-model`: trust and safety는 어떤 수준까지 v1에 넣어야 하는가
- `marketplace.fulfillment-risk`: 실제 이행, 배송, 예약, 클레임, 환불 중 어떤 운영 리스크가 있는가
- `marketplace.monetization-model`: take-rate, lead fee, subscription 중 무엇이 맞는가
- `marketplace.dual-use-cases`: 고객과 공급자 각각의 핵심 use case는 무엇인가

physical goods, 예약 운영, fulfillment-heavy service가 포함되면 `commerce-transactional` modifier를 required로 올린다.

validation order:

- side priority
- trust / safety
- liquidity
- fulfillment reality
- monetization

## 5. content-community

적용:

- community product
- content membership
- newsletter / course / library
- participation + publishing 혼합형 제품

must ask:

- `content.roles`: 누가 만들고 누가 소비하는가
- `content.seed-source`: day 1 seed content는 어디서 오는가
- `content.editorial-cadence`: 콘텐츠나 커뮤니티 cadence는 어떻게 유지되는가
- `content.retention-loop`: repeat contribution 또는 repeat consumption loop는 무엇인가
- `content.paywall-boundary`: 무료와 유료의 경계는 어디인가
- `content.package-ladder`: free, member, premium, community bundle 경계는 무엇인가
- `content.trust-policy`: author credibility, disclosure, moderation, refund/cancel clarity는 어떻게 보장하는가
- `content.ranking-transparency`: ranking, recommendation, featured placement 기준은 어떻게 설명되는가
- `content.support-owner-sla`: support inbox와 response SLA는 누가 소유하는가
- `content.editorial-owner`: freshness, correction, archive update는 누가 소유하는가
- `content.upgrade-proof`: reader 또는 member가 돈을 낼 이유는 정확히 무엇인가
- `content.moderation-owner`: moderation, refund/cancel, support inbox는 누가 소유하는가

validation order:

- roles / content seed
- paywall / package boundary
- moderation / support / cancel

## 6. exception-recovery

적용:

- appeal, regrade, callback, denial recovery, override, waitlist promotion, manual exception handling
- 사용자가 결과를 뒤집거나 다시 시도하는 경로가 product trust를 바꾸는 경우

must ask:

- `exception.state-source-of-truth`: 예외/복구 상태의 canonical source of truth는 무엇인가
- `exception.override-owner`: override, appeal, regrade, callback 승인을 누가 소유하는가
- `exception.user-visible-recovery-path`: 사용자가 볼 수 있는 recovery path는 무엇인가
- `exception.communication-boundary`: 예외 안내, 민감 정보, callback 약속은 어떤 채널/경계 안에서 이뤄지는가
- `exception.audit-event-requirement`: 어떤 recovery event는 audit 또는 evidence로 남아야 하는가
- `exception.appeal-or-regrade-rule`: appeal, regrade, resubmission, callback retry 규칙은 무엇인가
- `exception.timeout-or-sla`: recovery response SLA나 timeout rule은 무엇인가

validation order:

- source of truth
- owner
- user-visible path
- communication boundary
- audit/event rule
- freshness / trust
- upgrade / retention

## 6. platform-integration

적용:

- integration-heavy SaaS
- API / CLI / developer platform
- platform product

must ask:

- `platform.source-of-truth`: source of truth는 어디인가
- `platform.required-integration`: 어떤 integration이 없으면 제품 가치가 성립하지 않는가
- `platform.first-success`: install, auth, configure, validate, remediate 중 first success path는 무엇인가
- `platform.sync-model`: sync direction, latency, backfill, reconciliation은 어떻게 되는가
- `platform.versioning-risk`: backward compatibility와 versioning 제약은 무엇인가
- `platform.adoption-metrics`: activation, adoption, retention metric은 무엇인가
- `platform.auth-contract`: scopes, permissions, key lifecycle, rate limit, retry, idempotency는 어떻게 되는가
- `platform.delivery-model`: webhook, event delivery, observability, failure recovery는 어떻게 되는가
- `platform.dev-onboarding`: docs, SDK, CLI, sandbox, local setup 중 adoption을 좌우하는 것은 무엇인가
- `platform.failure-triage-owner`: install, configure, validate 실패는 누가 triage 하는가
- `platform.support-owner-sla`: support owner와 response SLA는 무엇인가
- `platform.incident-owner`: degraded sync, revoked credential, provider outage는 누가 incident owner인가
- `platform.health-state`: degraded sync, revoked credential, webhook failure, replay 필요 상태를 어떻게 보여주고 누가 조치하는가
- `platform.rollback-boundary`: self-serve recovery, support-assisted recovery, incident escalation의 경계는 무엇인가

validation order:

- workflow dependence
- first success path
- auth / contract risk
- support / incident boundary
- rollout burden
- monetization

## Modifiers

modifier는 primary archetype을 바꾸지 않고, 추가 질문만 붙인다.

## regulated-workflow

must ask:

- `regulated.constraint`: 어떤 법적 / 정책적 제약이 제품 구조를 바꾸는가
- `regulated.controls`: retention, consent, audit log, access control 요구는 무엇인가
- `regulated.failure-risk`: workflow failure 시 어떤 리스크가 발생하는가
- `regulated.review-gate`: compliance review는 누가 승인하는가

## self-serve-to-enterprise

must ask:

- `expansion.trigger`: 어떤 event가 self-serve에서 enterprise motion으로 넘어가게 하는가
- `expansion.packaging-boundary`: 어떤 기능이나 사용량이 package boundary를 만든다
- `expansion.package-ladder`: self-serve, team, enterprise의 패키지 경계는 무엇인가
- `expansion.role-map-by-stage`: 각 stage에서 end user, admin, buyer, security, procurement는 누구인가
- `expansion.stage-thresholds`: self-serve, pilot, contract, expansion 각 stage를 통과시키는 threshold는 무엇인가
- `expansion.security-gate`: security / procurement gate는 언제 시작되는가
- `expansion.procurement-gate`: procurement, legal, vendor onboarding은 언제 시작되는가
- `expansion.owner`: post-pilot adoption owner는 누구인가
- `expansion.sales-handoff`: sales-assist 또는 CS handoff는 언제 누구에게 일어나는가
- `expansion.pilot-success`: pilot success criteria와 contract conversion 조건은 무엇인가
- `expansion.enterprise-entitlement`: enterprise plan에만 필요한 entitlement는 무엇인가
- `expansion.entitlement-unlock`: 어떤 entitlement가 어느 stage에서 unlock되는가
- `expansion.artifact-vs-process`: self-serve onboarding, security review, procurement, pilot, contract conversion 중 product artifact와 off-product process는 무엇인가

## commerce-transactional

must ask:

- `commerce.catalog`: catalog, SKU, variant 구조는 무엇인가
- `commerce.checkout`: cart / checkout / payment failure에서 핵심 리스크는 무엇인가
- `commerce.fulfillment`: shipping, returns, exchanges, support는 누가 소유하는가
- `commerce.merchandising`: category, PDP, promos, bundles, thresholds는 어떻게 운영되는가
- `commerce.supply-seeding`: 초기 공급을 어떻게 모으고 검증하는가
- `commerce.provider-verification`: provider verification, credentialing, trust gate는 무엇인가
- `commerce.dispute-refund`: dispute, refund, cancellation, no-show는 누가 어떻게 처리하는가
- `commerce.payout-settlement`: payout, settlement, reversal, chargeback 리스크는 누가 소유하는가
- `commerce.rollout-unit`: geo, category, provider cohort 중 어떤 단위로 rollout하는가
- `commerce.verification-override`: verification 실패를 누가 어떤 증빙으로 override할 수 있는가
- `commerce.dispute-sla`: dispute, refund, cancellation, no-show의 SLA와 증빙 기준은 무엇인가
- `commerce.payout-lifecycle`: pending, held, released, reversed, reserved, chargebacked 상태는 어떻게 구분되는가
- `commerce.review-sla`: manual review queue의 staffing, escalation, backlog threshold는 무엇인가

## knowledge-grounded

must ask:

- `knowledge.allowed-sources`: 어떤 source set만 허용되는가
- `knowledge.forbidden-source-set`: 어떤 source set은 금지되는가
- `knowledge.source-ranking-rule`: source ranking과 precedence는 어떻게 정하는가
- `knowledge.citation-requirement`: citation 또는 evidence trace는 어느 수준까지 필요한가
- `knowledge.freshness-owner`: freshness rule과 update owner는 누구인가
- `knowledge.missing-source-fallback`: source가 없거나 stale이면 어떻게 fallback 하는가

## human-review-gated

must ask:

- `workflow.review-queue-entry`: 어떤 output이 review queue로 들어가는가
- `workflow.review-queue-owner`: queue owner와 staffing model은 무엇인가
- `workflow.review-sla`: review SLA와 backlog threshold는 무엇인가
- `workflow.approval-threshold`: 언제 자동 통과가 아니라 approval gate가 필요한가
- `workflow.override-policy`: override는 누가 어떤 이유 코드로 할 수 있는가
- `workflow.release-gate`: release / send / publish 전에 어떤 gate를 통과해야 하는가

note:

- 이 overlay는 AI product가 아니어도 쓴다
- grading committee, hiring committee, manual approval queue에도 그대로 적용한다

## artifact-revision-controlled

must ask:

- `artifact.authoritative-revision-set`: 현재 authoritative artifact set은 무엇인가
- `artifact.supersession-rule`: 새 revision이 이전 revision을 어떻게 supersede 하는가
- `artifact.handoff-receipt-rule`: client, contractor, site team이 어느 시점에 receipt/acknowledgement를 남겨야 하는가
- `artifact.change-impact-link`: field exception이나 change request가 어떤 approved revision에 연결되는가
- `artifact.revised-schedule-rule`: baseline vs revised schedule은 어떤 승인 rule로 propagate 되는가

## local-discovery-trust

must ask:

- `website.canonical-entity-model`: listing canonical entity는 무엇인가
- `website.duplicate-rule`: duplicate merge/split rule은 무엇인가
- `website.freshness-sla-owner`: freshness update와 stale handling owner는 누구인가
- `website.claim-moderation`: owner claim, correction, moderation은 어떻게 처리하는가
- `website.popularity-recommendation-trust-policy`: popularity, recommendation, sponsored placement, provenance는 어떻게 설명하는가

## learning-progression

must ask:

- `learning.progression-unit`: progression unit은 무엇인가
- `learning.unlock-rule`: prerequisite / unlock rule은 무엇인가
- `learning.cohort-or-due-window`: cohort calendar 또는 due window는 무엇인가
- `learning.submission-retry-policy`: submission, retry, resubmission policy는 무엇인가
- `learning.grading-owner-sla`: grading or review owner와 SLA는 무엇인가
- `learning.completion-source-of-truth`: completion source of truth는 무엇인가
- `learning.recovery-path`: late, missed, failed, appealed work의 recovery path는 무엇인가

## reservation-lifecycle

must ask:

- `reservation.state-model`: reservation or booking state model은 무엇인가
- `reservation.partner-source-of-truth`: external or operational source of truth와 write authority는 무엇인가
- `reservation.change-owner`: supplier-initiated or schedule or state change owner는 누구인가
- `reservation.reissue-or-rebook-rule`: reissue, rebook, cancel, refund, return, RMA rule은 무엇인가
- `reservation.post-booking-support-sla`: disruption / post-commitment support SLA는 무엇인가

## availability-booking

must ask:

- `availability.bookable-unit`: bookable unit은 무엇인가
- `availability.source-of-truth`: availability source of truth와 write authority는 무엇인가
- `availability.hold-expiry-rule`: hold expiry rule은 무엇인가
- `availability.turnaround-buffer-rule`: turnaround or reset buffer는 무엇인가
- `availability.blackout-or-override-policy`: blackout, override, manual unlock은 어떻게 처리하는가
- `availability.double-book-resolution`: double-book conflict는 누가 어떻게 해결하는가
- `availability.onsite-exception-policy`: onsite exception과 recovery는 어떻게 처리하는가
- `availability.customer-comms-trigger-map`: confirmation, reminder, change, cancellation communication trigger는 무엇인가

## constraint-exception-controlled

must ask:

- `constraint.authority-source`: threshold or ceiling authority/source of truth는 무엇인가
- `constraint.threshold-or-ceiling`: 어떤 limit, quota, MOQ, capacity, expiry, or deadline가 핵심인가
- `constraint.exception-trigger`: 어떤 조건에서 exception path로 빠지는가
- `constraint.manual-owner`: exception override나 manual review는 누가 소유하는가
- `constraint.recovery-rule`: recovery, waitlist, fallback, promotion, or stop rule은 무엇인가
- `availability.onsite-exception-policy`: onsite exception과 recovery는 어떻게 처리하는가
- `availability.customer-comms-trigger-map`: confirmation, reminder, change, cancellation communication trigger는 무엇인가

## service-operations-workflow

must ask:

- `service.job-lifecycle`: intake, triage, schedule, dispatch, execute, complete, exception, close lifecycle은 무엇인가
- `service.dispatch-owner`: dispatch와 manual override는 누가 소유하는가
- `service.dispatch-unit`: dispatch unit은 technician, crew, route, case 중 무엇인가
- `service.schedule-constraint-model`: time window, skill match, geo, priority 제약은 무엇인가
- `service.phone-support-handoff`: phone support나 manual callback path는 어디에 끼어드는가
- `service.parts-source-of-truth`: inventory / parts source of truth는 무엇인가
- `service.parts-shortage-recovery`: parts shortage나 revisit는 어떻게 recovery 하는가
- `service.exception-queue`: no-show, reschedule, escalation은 어느 queue에서 처리하는가
- `service.proof-of-service`: signature, photo, checklist, completion evidence는 무엇인가

## offline-operability

must ask:

- `offline.minimum-usable-capabilities`: offline에서도 반드시 가능한 최소 작업은 무엇인가
- `offline.local-write-authority`: 어떤 write가 local에서 허용되는가
- `offline.sync-trigger`: 언제 sync를 시도하는가
- `offline.conflict-resolution`: conflict가 나면 누가 이기는가
- `offline.degraded-write-boundary`: offline에서 금지되는 작업은 무엇인가
- `offline.attachment-capture-policy`: photo, signature, document는 offline에서 어떻게 저장하는가
- `offline.restore-signal`: restore 또는 reconciliation success를 어떻게 보여주는가
- `offline.human-escalation`: offline failure가 길어지면 누구에게 escalate하는가

## privacy-sensitive-consumer

must ask:

- `mobile.notification-permission`: notification permission은 언제 어떻게 묻는가
- `mobile.reminder-cadence`: reminder cadence와 quiet-hours는 어떻게 정하는가
- `mobile.progress-source-of-truth`: progress, streak, completion의 canonical source of truth는 무엇인가
- `mobile.streak-reset-rebuild-rule`: streak나 progress가 깨졌을 때 reset/rebuild rule은 무엇인가
- `mobile.sync-conflict-progress-rule`: multi-device 또는 sync conflict 시 progress는 어떻게 reconcile하는가
- `mobile.progress-correction-path`: 잘못된 progress/streak를 사용자가 어떻게 수정하거나 복구하는가
- `privacy.lock-screen-sensitivity`: lock screen에 무엇을 숨기거나 완화해야 하는가
- `privacy.data-storage-boundary`: local only와 synced data의 경계는 무엇인가
- `privacy.export-delete-reset`: export / delete / reset는 어떤 owner와 UX로 제공되는가
- `mobile.background-delivery-boundary`: background delivery failure 시 fallback은 무엇인가

## ai-assisted-consumer

legacy alias다. 가능하면 `knowledge-grounded`와 `human-review-gated` 또는 `privacy-sensitive-consumer` 조합으로 대체한다.

must ask:

must ask:

- `ai.grounding-source`: 추천이나 답변은 어떤 source에 grounded 되는가
- `ai.refusal-boundary`: 언제 답변하지 않거나 제한해야 하는가
- `ai.trust-proof`: source citation, freshness, edit trail, expert review 중 어떤 trust proof를 보여줄 것인가
- `ai.recovery-path`: 잘못된 답변이나 stale output이 나오면 어떻게 복구되는가
- `ai.provider-dependency`: model/provider dependency와 fallback은 무엇인가
- `ai.inference-economics`: 활성 유저당 inference/data cost는 어느 정도이며 가격 모델을 버티는가
- `ai.repeat-advantage`: 두 번째 세션이 generic AI보다 나아지는 persistent artifact는 무엇인가

## media-membership

must ask:

- `media.free-boundary`: public sample, public archive, member-only archive, premium content 경계는 무엇인가
- `media.package-ladder`: newsletter, archive, community, course, live session 등 package ladder는 무엇인가
- `media.moderation-owner`: moderation rule 운영과 escalation owner는 누구인가
- `media.support-owner-sla`: membership support owner와 response SLA는 무엇인가
- `media.editorial-freshness-owner`: editorial calendar, correction, stale-content refresh는 누가 소유하는가
- `media.upgrade-proof`: reader가 paying member가 되는 결정적 proof는 무엇인가
- `media.reactivation-loop`: dormant member를 어떻게 되돌리는가
- `media.refund-cancel-ops`: refund, cancel, support, moderation은 누가 운영하는가

## Cross-Product Trust / Recovery Ladder

아래 질문은 archetype과 무관하게 trust나 recovery가 product shape를 바꾸면 붙인다.

- `trust.hesitation-point`: 사용자가 어디서 망설이는가
- `trust.session-one-failure`: 첫 세션에서 무엇이 실패할 수 있는가
- `trust.self-recovery`: 사용자가 스스로 복구할 수 있는가
- `trust.human-intervention`: 언제 사람 개입이 필요한가
- `trust.restore-signal`: 무엇이 성공과 신뢰 회복을 확인시켜 주는가
