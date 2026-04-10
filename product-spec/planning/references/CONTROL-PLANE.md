# Control Plane

이 문서는 planning pack을 "좋은 체크리스트"가 아니라 "반복 가능한 질문 시스템"으로 만들기 위한 최소 규약을 담는다.

## 1. Classifier

canonical 분류는 다섯 가지다.

### 1. work shape

아래 중 하나를 primary work shape로 고른다.

- `capture-and-route`
- `self-serve-loop`
- `draft-review-approve`
- `system-of-record-workflow`
- `coordinate-and-transact`
- `publish-and-curate`
- `integrate-and-control`

### 2. surface model

- `web`
- `mobile-native`
- `multi-surface`
- `internal-console`
- `api-sdk-cli`
- `human-service-ops`
- `hybrid-offline`

### 3. loop model

- `one-shot`
- `habit`
- `workflow`
- `queue-driven`
- `transactional`
- `content-return`

### 4. compatibility alias

기존 archetype 이름은 compatibility alias로 적을 수 있다.

- `public-website-lead-gen-seo`
- `consumer-saas`
- `b2b-saas`
- `marketplace`
- `content-community`
- `platform-integration`

정확한 매핑은 [DOMAIN-AXES.md](DOMAIN-AXES.md)를 따른다.

### 5. current gap

현재 무엇이 가장 비어 있는지 고른다.

- `discover`
- `validate`
- `research`
- `user-clarity`
- `strategy`
- `scope`
- `flow`
- `rollout`
- `growth`
- `revenue`
- `synthesize`

modifier overlay는 필요할 때만 붙인다.

- `regulated-workflow`
- `self-serve-to-enterprise`
- `commerce-transactional`
- `knowledge-grounded`
- `human-review-gated`
- `service-operations-workflow`
- `offline-operability`
- `privacy-sensitive-consumer`
- `local-discovery-trust`
- `learning-progression`
- `reservation-lifecycle`
- `artifact-revision-controlled`
- `availability-booking`
- `constraint-exception-controlled`
- `media-membership`

modifier display name과 canonical block key는 같지 않을 수 있다.

- `regulated-workflow` -> `regulated_workflow_minimum`
- `commerce-transactional` -> `trust_ops_minimum`
- `service-operations-workflow` -> `service_ops_minimum`
- `knowledge-grounded` -> `knowledge_contract`
- `human-review-gated` -> `review_queue_model`
- `learning-progression` -> `learning_progression_contract`
- `reservation-lifecycle` -> `reservation_lifecycle_contract`
- `artifact-revision-controlled` -> `artifact_revision_contract`
- `availability-booking` -> `availability_booking_contract`

원칙:

- work shape를 많이 붙인다고 좋은 질문 시스템이 되지 않는다
- primary work shape 1개 + surface 1개 + loop 1개 + modifier 0-3개면 충분하다
- 새로운 overlay는 "질문 집합이 실제로 달라질 때만" 추가한다
- legacy archetype은 canonical classifier를 대체하지 않는다

## 2. State Machine

coarse state machine은 하나만 둔다.

- `intake`
- `discover`
- `validate`
- `research`
- `user-clarity`
- `strategy`
- `scope`
- `flow`
- `rollout`
- `growth`
- `revenue`
- `synthesize`
- `done`
- `blocked`

### State Intent

- `intake`: 자유 설명을 받고 work shape, surface, loop, current gap을 잡는다
- `discover`: 사용자, 문제, 상황, 대표 유스케이스, current alternative를 명확하게 만든다
- `validate`: 문제의 진짜 강도와 위험 가설을 확인한다
- `research`: 시장, 경쟁사, 데이터, 운영 현실을 조사한다
- `user-clarity`: target, segment, role split을 더 분명히 한다
- `strategy`: positioning, distribution, success path를 고르고, monetization은 shape-changing일 때만 깊게 본다
- `scope`: MVP와 핵심 흐름을 자른다
- `flow`: first-time, repeat, recovery, trust flow를 정리한다
- `rollout`: adoption, stakeholder, approval, migration을 정리한다
- `growth`: acquisition, activation, retention을 정리한다
- `revenue`: sustainability note를 남기고, pricing/package/buyer-payer는 shape-changing일 때만 깊게 정리한다
- `synthesize`: facts / assumptions / decisions / open_questions를 한 문서에 묶는다

## 2.5 Mandatory Slot Registry

`mandatory slot`은 추상 표현이 아니라 아래 semantic ID 집합을 뜻한다.

이 문서의 slot ID는 internal semantic naming이다.

- stage completeness 판단에는 dotted / kebab-case semantic ID를 쓴다
- 최종 `one-page core artifact`와 `planning record` key는 snake_case를 쓴다
- semantic ID가 meaning의 canonical owner이고, snake_case key는 artifact serialization alias다
- 예:
  - `summary.one-line-product` -> `one_line_product`
  - `summary.primary-target` -> `primary_target`
  - `next.experiment` -> `next_experiment`
  - `next.implementation-input` -> `next_implementation_input`

### discover minimum

- `user.primary`
- `user.moment-of-need`
- `problem.statement`
- `problem.current-alternative`
- `problem.recent-instance.1`
- `usecase.primary`
- `value.first-moment`
- `work-shape.primary`
- `surface.primary`
- `loop.primary`
- `archetype.primary`

### light user analysis minimum

모든 digital service plan은 아래를 최소로 가진다.

- `user.primary`
- `user.context-of-use`
- `user.trigger`
- `user.frequency`
- `user.constraints`

### full user analysis trigger

아래 중 하나면 `user-research-analysis`를 full mode로 올린다.

- target이 넓다
- segment별 행동 차이가 product shape를 바꾼다
- buyer / user / admin / approver 분리가 있다
- trust / rollout / compliance가 role에 따라 달라진다

full mode required slots:

- `user.segment-map`
- `user.role-map`
- `user.primary-context`
- `user.secondary-context`

### validate minimum

- `problem.frequency`
- `problem.intensity`
- `problem.current-workaround-strength`
- `hypothesis.riskiest`

강한 문제 주장을 할 때는 아래 중 하나가 필요하다.

- `problem.recent-instance.1..3`
- 또는 `low-confidence` + `reason_if_not_verified`

### research minimum

- `market.category`
- `market.demand-proxy`
- `competitor.primary-set`
- `data.source-of-truth`
- `risk.main`
- when `platform-integration`: `platform.contract`

### market-light minimum

`market-competitor-research`를 light mode로 돌릴 때는 아래만 꼭 채운다.

- `market.category`
- `market.demand-proxy`
- `competitor.primary-set`
- `market.why-now-signal`

### data-light minimum

`data-source-strategy`를 light mode로 돌릴 때는 아래만 꼭 채운다.

- `data.required-entity`
- `data.source-of-truth`
- `data.main-dependency`
- `data.main-policy-risk`
- `data.manual-op-owner`
- `data.fallback`
- `data.legal-basis-or-allowed-use`
- `data.main-trust-control`

### strategy minimum

- `positioning.statement`
- `growth.primary-motion`
- `viability.minimum-note`
- when monetization changes product shape: `monetization.first-revenue`

### mobile-native minimum

- `mobile.notification-permission`
- `mobile.reminder-cadence`
- `mobile.background-delivery-boundary`
- `privacy.lock-screen-sensitivity`
- `privacy.data-storage-boundary`
- `privacy.export-delete-reset`

### regulated workflow minimum

- `workflow.case-type`
- `workflow.state-machine`
- `workflow.approval-matrix`
- `workflow.policy-source-of-truth`
- `workflow.required-artifacts`
- `workflow.audit-trail-minimum`
- `workflow.role-permission-map`
- `workflow.manual-handoff-owner`
- `workflow.offline-phone-fax-path`
- `workflow.queue-model`
- `workflow.queue-sla-escalation`
- `workflow.override-reason-policy`
- `workflow.denial-or-rework-path`
- `workflow.delegated-access-policy`
- `workflow.sensitive-communication-boundary`

### service operations minimum

- `service.job-lifecycle`
- `service.dispatch-owner`
- `service.dispatch-unit`
- `service.schedule-constraint-model`
- `service.service-window-policy`
- `service.phone-support-handoff`
- `service.exception-queue`
- `service.parts-source-of-truth`
- `service.parts-shortage-recovery`
- `service.proof-of-service`
- `service.capacity-bottleneck`

### offline operability minimum

- `offline.minimum-usable-capabilities`
- `offline.local-write-authority`
- `offline.sync-trigger`
- `offline.conflict-resolution`
- `offline.degraded-write-boundary`
- `offline.attachment-capture-policy`
- `offline.restore-signal`
- `offline.human-escalation`

### knowledge grounded minimum

- `knowledge.allowed-sources`
- `knowledge.forbidden-source-set`
- `knowledge.source-ranking-rule`
- `knowledge.citation-requirement`
- `knowledge.freshness-owner`
- `knowledge.missing-source-fallback`

### human review gated minimum

- `workflow.review-queue-entry`
- `workflow.review-queue-owner`
- `workflow.review-sla`
- `workflow.backlog-threshold`
- `workflow.release-gate`

### scope minimum

- `mvp.primary-actor`
- `mvp.primary-job`
- `mvp.proof-event`
- `mvp.v1-path`
- `scope.must-have`
- `scope.defer`
- `scope.cut`

### flow minimum

- `flow.first-time`
- `flow.repeat`
- `flow.recovery`
- `flow.screen-specs`

### handoff minimum

- `handoff.phase-split`
- `handoff.task-list`
- `handoff.acceptance`
- `handoff.blockers`

### synthesize minimum

- `summary.one-line-product`
- `summary.primary-target`
- `summary.why-this-segment-first`
- `summary.current-alternative`
- `summary.primary-use-case`
- `summary.anchor-recent-example`
- `summary.positioning-difference`
- `summary.first-value-moment`
- `summary.core-first-time-flow`
- `summary.repeat-flow`
- `summary.must-have`
- `summary.defer`
- `summary.out-of-scope`
- `summary.primary-acquisition-motion`
- `summary.first-customer-path`
- `summary.main-risks`
- `summary.business-viability-snapshot`
- when monetization changes product shape: `summary.first-revenue-motion`
- when monetization changes product shape: `summary.pricing-boundary`
- `metrics.success`
- `metrics.guardrails`
- `docs.core-bundle-ready`
- `docs.metadata-present`
- `docs.screen-specs-ready`
- `docs.execution-handoff-ready`
- exactly one of `next.experiment` or `next.implementation-input`

## 3. Question Ladder

모든 stage는 아래 ladder를 기본으로 쓴다.

1. open question
2. recent example
3. current workaround
4. evidence / frequency / cost
5. stop or handoff

예시:

- open: "누가 이걸 제일 먼저 절실하게 씁니까?"
- recent example: "마지막으로 그 상황이 생긴 게 언제였습니까?"
- workaround: "그때는 지금 어떻게 처리했습니까?"
- evidence: "그 방식 때문에 시간, 돈, 신뢰 중 무엇이 얼마나 깨졌습니까?"
- stop: "핵심 사용자와 현재 대안이 명확해졌으면 다음 gap으로 넘어간다"

## 4. Question IDs

질문은 stage-local 이름이 아니라 의미 기반 ID를 가진다.

예시:

- `problem.current-workaround`
- `problem.recent-instance`
- `user.primary`
- `user.context-of-use`
- `growth.activation-event`
- `growth.retention-loop`
- `data.source-of-truth`
- `monetization.value-exchange-moment`

상태 값:

- `asked`
- `answered`
- `suppressed`
- `blocked`

질문 ID는 suppression과 handoff에 쓴다.

question state는 원칙이 아니라 기록 대상이다. 질문이 반복되지 않게 하려면 `question_state` block에 남겨야 한다.

`superseded`는 별도 state가 아니라 `suppressed`의 reason으로 기록한다.

## 5. Suppression Rules

- 이미 `answered` 또는 `suppressed` 된 질문은 다시 묻지 않는다
- 단, 아래 경우에는 다시 물을 수 있다
  - 뒤 답변이 앞 답변과 충돌할 때
  - confidence가 낮을 때
  - 의존 관계가 바뀌었을 때
  - modifier overlay가 새로 붙어 질문 의미가 달라졌을 때

## 5.5 Escalation Rules

- 직접 사례가 없으면 먼저 `problem.recent-instance`를 다시 묻는다
- 최근 사례가 1개도 없고 그 공백이 go / no-go를 바꾸면 `blocked`로 올린다
- 최근 사례가 부족하지만 planning을 계속할 수는 있으면 `low-confidence`와 이유를 남긴다
- source-of-truth, approval owner, legal basis가 없으면 synthesis에서 `not_ready_because`에 올린다

## 5.6 Evidence Standard

강한 claim은 아래 evidence meta가 같이 있어야 한다.

- `source_type`
- `source_ref`
- `evidence_tier`
- `counterevidence`

rule:

- high-confidence problem claim은 direct-user source 또는 observed-behavior source가 최소 1개 있어야 한다
- market / competitor / pricing / WTP claim은 `observed_at` 또는 freshness 정보가 없으면 stale risk를 올린다
- counterevidence가 있는데 무시하지 않는다

## 5.7 Route Resolver

front-door routing은 아래 5개 입력으로 정한다.

- `work_shape`
- `surface_model`
- `loop_model`
- `current_gap`
- `pace`

ambiguity rules:

- matching route candidate가 여러 개면 `required_blocks_before_scope_freeze`가 더 많은 candidate를 고른다
- pace가 애매하면 더 느린 pace를 고른다
- starting skill이 애매하면:
  - target / problem / primary use case가 흐리면 `idea-discovery`
  - target은 있는데 role split이 shape를 바꾸면 `user-research-analysis`
  - source-of-truth / integration / dependency가 main blocker면 `data-source-strategy`
- still ambiguous면 forced-choice 질문 1개만 던진다
- row가 안 맞으면 `current_gap=discover`, `pace=standard`, `work_shape=current best guess`, `surface_model=best guess`, `loop_model=best guess`로 시작한다

special-case escalations:

- `regulated-workflow`면 default pace를 `full`로 올린다
- `regulated-workflow`면 `data-source-strategy`와 `stakeholder-rollout-strategy`를 final `mvp-scope` 전에 required로 올린다
- `regulated-workflow`면 `regulated_workflow_minimum`이 unresolved인 상태에서 `next_implementation_input`을 허용하지 않는다
- `service-operations-workflow`면 `service_ops_minimum`을 required block으로 올린다
- field/mobile 역할이 있으면 `offline-operability` 여부를 explicit하게 묻고, 있으면 `offline_operability`를 required block으로 올린다
- `knowledge-grounded`면 `knowledge_contract`를 required block으로 올린다
- `human-review-gated`면 `review_queue_model`을 required block으로 올린다
- `knowledge-grounded`와 `human-review-gated`가 같이 있으면 둘 다 required block으로 올린다
- `privacy-sensitive-consumer`면 mobile/privacy minimum slot이 flow finalization 전에 닫혀야 한다
- `local-discovery-trust`면 `local_discovery_trust`를 entity/ranking freeze 전에 required block으로 올린다
- `media-membership`이면 `media_membership`을 paywall/package/support boundary freeze 전에 required block으로 올린다
- `learning-progression`이면 `learning_progression_contract`를 flow freeze 전에 required block으로 올린다
- `reservation-lifecycle`면 `reservation_lifecycle_contract`를 transactional scope freeze 전에 required block으로 올린다
- `reservation-lifecycle`에서 external partner source of truth, partner write authority, supplier schedule change, or external confirmation dependency가 보이면 `platform_contract`도 required block으로 올린다
- `artifact-revision-controlled`면 `artifact_revision_contract`를 handoff freeze 전에 required block으로 올린다
- `availability-booking`이면 `availability_booking_contract`를 booking flow freeze 전에 required block으로 올린다
- waitlist, MOQ, capacity ceiling, expiry deadline, quota, blackout threshold, or exception recovery가 product shape를 바꾸면 `constraint_exception_contract`를 required block으로 올린다
- appeal, regrade, callback promise, denial recovery, manual exception handling, or user-visible recovery path가 product shape를 바꾸면 `exception_recovery_contract`를 flow freeze 전에 required block으로 올린다

front-door stress signal promotions:

- `waitlist`, `capacity`, `quota`, `blackout`, `expiry`, `double-book`, `check-in`, `hold expiry`, `MOQ`
  - `constraint_exception_contract`를 auto-promote 한다
- `appeal`, `regrade`, `callback`, `follow-up promise`, `manual recovery`, `return`, `refund recovery`, `denial recovery`, `rework`, `exception path`
  - `exception_recovery_contract`를 auto-promote 한다
- `no-show`, `schedule change`, `support recovery`, `reschedule owner`, `member access recovery`, `delivery exception`, `fulfillment failure`
  - `exception_recovery_contract`를 auto-promote 한다
- `duplicate`, `claim`, `freshness`, `ranking trust`, `sponsored placement`, `provenance`
  - `local_discovery_trust`를 auto-promote 한다
- `progress`, `streak`, `completion`, `unlock`, `retry`, `resubmission`
  - `learning_progression_contract`를 auto-promote 한다
- `package ladder`, `paywall`, `entitlement`, `paid tier`, `member boundary`, `upgrade path`
  - `media_membership`를 auto-promote 한다
  - paid boundary가 shape-changing이면 `monetization-strategy` auto-insert 대상으로 본다

owner-skill route injection:

- `required_modifier_blocks`는 route freeze 전에 계산한다
- 각 required block은 [PLANNING-RECORD.md](PLANNING-RECORD.md)의 ownership map으로 primary owner skill을 찾는다
- required block의 primary owner skill이 chosen route에 없으면 `planning-synthesis` 전에 auto-insert 한다
- auto-insert는 optional suggestion이 아니라 route completeness rule이다
- route를 압축하더라도 below owner injection은 생략하지 않는다:
  - evidence or proof gate block -> `hypothesis-validation`
  - source-of-truth, platform, regulated, offline, knowledge block -> `data-source-strategy`
  - flow, lifecycle, recovery, membership boundary block -> `ux-use-case-strategy`
  - rollout, SLA, queue, service ops, review queue block -> `stakeholder-rollout-strategy`
  - packaging, entitlement, expansion, payer boundary block -> `monetization-strategy`
- multiple blocks가 같은 owner skill을 요구하면 owner skill은 한 번만 insert 한다
- route injection 결과는 final route rationale와 handoff provenance에 남긴다

### modifier composition overrides

- `human-review-gated` without `knowledge-grounded`
  - still require `review_queue_model`
  - do not imply source-policy or citation requirements
- `local-discovery-trust + commerce-transactional`
  - require both `local_discovery_trust` and `trust_ops_minimum`
  - ranking/provenance trust and transaction remedy must both project
- `reservation-lifecycle` on physical goods, support, or return-heavy flows
  - treat lifecycle as order/return/recovery capable, not booking-only
  - require return/refund/recovery states in projection
- review, regulated, or service-ops flow with explicit appeal/regrade/callback promise
  - require `exception_recovery_contract`
  - generic rework note만으로는 닫지 않는다

default map:

- `discover` -> `idea-discovery`
- `validate` -> `problem-validation`
- `research` -> `market-competitor-research` 또는 `data-source-strategy`
- `user-clarity` -> `user-research-analysis`
- `strategy` -> `positioning-strategy`
- `scope` -> `mvp-scope`
- `flow` -> `ux-use-case-strategy`
- `rollout` -> `stakeholder-rollout-strategy`
- `growth` -> `acquisition-retention-strategy`
- `revenue` -> `monetization-strategy`
- `synthesize` -> `planning-synthesis`

pace rule:

- `fast`
  - current gap에서 시작한다
  - blocking shape-change가 없으면 `market-competitor-research`, `data-source-strategy`, `monetization-strategy`는 light mode 또는 low-confidence note로 줄일 수 있다
  - `acquisition-retention-strategy`와 `monetization-strategy`도 fast mode에서는 one threshold + next experiment 형태로 줄일 수 있다
  - question budget guide: primary questions 8-12개, recent-example bundle 1개, primary use-case card 1개를 기본 상한으로 본다
  - output density guide: 8문서는 유지하되 `RESEARCH`, `UX-IA`, `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF`는 lite section 중심으로 압축한다
  - route inflation guard: budget를 넘기려면 `shape-changing risk`, `source-of-truth unresolved`, `required evidence gate unresolved`, `user-requested depth` 중 하나를 이유로 남긴다
  - stop rule: `problem / target / primary use case / first value / main risk / next step`이 확보되면 synthesize로 간다
- `standard`
  - README minimum route를 따른다
  - question budget guide: primary questions 15-25개, recent-example bundle 1-2개, representative use-case card 1-2개를 기본 범위로 본다
  - output density guide: 8문서를 모두 채우되 thin doc는 억지로 두껍게 만들지 않는다
  - route inflation guard: budget를 넘기면 어떤 unresolved slot이 질문 증가를 정당화했는지 남긴다
- `full`
  - hypothesis, rollout, compliance, buyer/payer, dependency를 더 깊게 판다
  - question budget guide: primary questions 25-40개, recent-example bundle 2-3개, role or stage split artifact를 충분히 만든다
  - output density guide: conditional block과 phase/task/acceptance projection까지 끝낸다
  - stop rule: blocker가 `not_ready_because`로 명시될 때까지 complete로 보지 않는다

route resolver output contract:

- `starting_skill`
- `resolved_route`
- `required_modifier_set`
- `required_blocks_before_scope_freeze`
- `required_modifier_blocks`
- `triggered_stress_signals`
- `auto_inserted_owner_skills`
- `question_budget_hint`
- `doc_density_hint`
- `route_inflation_guard`
- `stop_rule`

scope freeze guard:

- unresolved `data.*`, `rollout.*`, `monetization.*` slot이 product shape를 바꾸면 `mvp-scope`를 final로 보지 않는다
- source-of-truth, rollout owner, proof-to-buy가 unresolved면 scope freeze가 아니라 provisional scope다
- pricing boundary는 monetization이 product shape를 바꾸는 경우에만 scope freeze guard로 올린다
- `marketplace + commerce-transactional`에서 `trust_ops_minimum.*`가 unresolved면 scope freeze가 아니라 provisional scope다

special-case escalation:

- `public-website-lead-gen-seo`
  - brochure, landing, local-service, directory처럼 success가 one-shot conversion 중심이면 `public-website-lite` compression을 허용한다
  - 위 조건이면 `compression_mode`가 required다
  - 위 조건인데 `compression_mode`가 비면 done으로 보지 않는다
  - directory or local-index product면 `website.canonical-entity-model`, `website.duplicate-rule`, `website.freshness-sla-owner`, `website.claim-moderation`이 positioning freeze 전에 보여야 한다
  - 위 조건이면 `SCREEN-SPECS.md`는 page-template oriented로, `EXECUTION-HANDOFF.md`는 page/template + analytics/form/CMS slice 중심으로 줄일 수 있다
  - 위 조건이면 retention / repeat / monetization은 indirect 또는 minimal re-engagement note로 남길 수 있다
- `consumer-saas`
  - habit loop product인지 one-shot utility product인지 먼저 갈라야 한다
  - evidence가 약하고 activation / retention / paywall이 product shape를 바꾸면 `hypothesis-validation`을 scope 전에 required로 올린다
  - 위 조건이면 `consumer_evidence_gate`가 required다
  - 위 조건이면 `proof_of_value_gate`가 required고, deep monetization보다 먼저 닫아야 한다
  - 위 조건이면 default next step은 `next_implementation_input`이 아니라 `next_experiment`다
  - 위 조건인데 `consumer_evidence_gate`에 falsification signal, pass threshold, owner, timebox, decision-if-false, kill threshold, cohort or sample requirement, measurement window, promotion_rule_to_build가 없으면 done으로 보지 않는다
  - 위 조건인데 `proof_of_value_gate`에 first-value threshold, repeat threshold 또는 explicit one-shot proof threshold, owner, measurement window, promotion_rule_to_build가 없으면 done으로 보지 않는다
  - 위 조건에서 `promotion_rule_to_build`가 아직 충족되지 않았으면 handoff mode는 `experiment`여야 하고 `exact_next_implementation_input`은 허용하지 않는다
- `b2b-saas`
  - pilot, security review, procurement, contract conversion signal이 보이면 `self-serve-to-enterprise`를 required로 올린다
  - 위 조건이면 `expansion_model`이 없으면 done으로 보지 않는다
  - 위 조건이면 `expansion_model`이 `BUSINESS-OPS.md`와 `EXECUTION-HANDOFF.md`에 projection되지 않으면 done으로 보지 않는다
  - buyer / payer split, proof-to-buy, pilot success criteria가 unresolved면 implementation-ready가 아니라 `next_experiment` 또는 provisional scope로 본다
  - buyer / payer split, proof-to-buy, pilot success criteria, entitlement unlock timing이 `SCREEN-SPECS.md`와 `EXECUTION-HANDOFF.md`에 projection되지 않으면 `next_implementation_input`을 허용하지 않는다
- `marketplace + commerce-transactional`
  - default pace를 `full`로 올린다
  - `trust_ops_minimum`을 required로 올린다
  - `trust_ops_minimum`은 final `mvp-scope`와 `ux-use-case-strategy` sign-off 전에 확보되어야 한다
  - rollout, trust-ops, dispute/refund, provider verification이 unresolved면 synthesize에서 `not_ready_because`를 강제한다
  - `trust_ops_minimum`에 abuse vector, detection signal, provider verification rule, dispute or refund owner, payout or settlement owner, manual review path or SLA, escalation owner, no-show or cancellation owner, user-visible remedy, reversal or refund path, rollout unit, rollout coupling rule, liquidity stop condition이 없으면 done으로 보지 않는다
  - `trust_ops_minimum`이 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 done으로 보지 않는다
- `platform-integration`
  - `platform_contract`가 없으면 done으로 보지 않는다
  - `platform_contract`에는 support owner or SLA, incident owner, rollback boundary가 보여야 한다
  - pilot, security review, procurement, contract conversion signal이 보이면 `self-serve-to-enterprise`와 `expansion_model`을 required로 올린다
  - 위 조건이면 `expansion_model`의 package ladder, stage role map, entitlement unlock timing이 scope freeze 전에 보여야 한다
  - `platform_contract`가 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 done으로 보지 않는다
  - enterprise signal이 있고 `expansion_model`이 product artifact를 만들면 `SCREEN-SPECS.md`에도 projection되지 않으면 done으로 보지 않는다
- `content-community`
  - newsletter + archive + community + paywall이 동시에 있으면 `media-membership`을 required로 올린다
  - package ladder, entitlement boundary, or paid upgrade가 product shape를 바꾸면 `monetization-strategy`를 auto-insert 한다
  - 위 조건이면 package ladder, paywall boundary, moderation owner, support owner or SLA, cancel or refund behavior, editorial freshness owner가 scope freeze 전에 보여야 한다
  - 위 조건인데 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 membership surface와 moderation surface가 projection되지 않으면 done으로 보지 않는다

## 6. Exit Rules

stage는 아래 조건이 만족되면 멈춘다.

- 현재 state의 mandatory slot이 채워졌다
- 다음 질문이 핵심 결정이 아니라 nice-to-have만 바꾼다
- user가 멈추길 원한다
- 더 진행하려면 외부 evidence가 필요하다

`synthesize -> done` 전환은 단순 요약 완료가 아니라
[PLANNING-DONE-CRITERIA.md](PLANNING-DONE-CRITERIA.md)의 hard gate를 통과해야 한다.

즉:

- stage exit은 local completeness를 본다
- planning done은 전체 readiness를 본다
- mandatory slot이 비었으면 stage complete가 아니다

## 7. Canonical Output Discipline

모든 skill은 같은 planning record에 쓴다.

필수 section:

- `facts`
- `assumptions`
- `decisions`
- `open_questions`
- `risks`
- `next_step`

필수 structured block:

- `user_model`
- `recent_examples`
- `use_case_cards`
- `question_state`
- `hypothesis_register`
- `market_evidence_brief`
- `competitor_table`
- `business_viability_snapshot`
- `commercial_model`

conditional but required when applicable:

- `data_dependencies`
- `source_of_truth_map`
- `manual_operations`
- `dependency_register`
- `controls_register`
- `consumer_evidence_gate`
- `rollout_plan`
- `trust_ops_minimum`

blocked 또는 low-confidence일 때는 아래도 남긴다.

- `not_ready_because`

자세한 스키마는 [PLANNING-RECORD.md](PLANNING-RECORD.md)를 따른다.
