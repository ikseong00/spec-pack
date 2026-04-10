# Operator Starter

이 문서는 first-time operator가 planning pack을 어디서 시작해야 하는지 빠르게 결정하기 위한 front-door helper다.

- canonical source of truth를 대체하지 않는다
- 실제 규약은 `README.md`, `CONTROL-PLANE.md`, `PLANNING-DONE-CRITERIA.md`를 우선한다
- 이 문서는 `work_shape + surface_model + loop_model + current_gap + pace`를 빠르게 정해 첫 skill과 stop rule을 뽑는 용도다

## 1. 60-Second Start

시작 전 아래 5개만 먼저 고른다.

1. `work_shape`
   - `capture-and-route`
   - `self-serve-loop`
   - `draft-review-approve`
   - `system-of-record-workflow`
   - `coordinate-and-transact`
   - `publish-and-curate`
   - `integrate-and-control`
2. `surface_model`
   - `web`
   - `mobile-native`
   - `multi-surface`
   - `internal-console`
   - `api-sdk-cli`
   - `human-service-ops`
   - `hybrid-offline`
3. `loop_model`
   - `one-shot`
   - `habit`
   - `workflow`
   - `queue-driven`
   - `transactional`
   - `content-return`
4. `current_gap`
   - 지금 가장 비어 있는 것 하나
   - `discover`, `validate`, `research`, `user-clarity`, `strategy`, `scope`, `flow`, `rollout`, `growth`, `revenue`, `synthesize`
5. `pace`
   - `fast`: 얇고 빠른 planning
   - `standard`: 기본값
   - `full`: rollout, trust, enterprise, compliance가 shape를 바꿀 때

legacy archetype이 익숙하면 compatibility alias로 같이 적는다.

## 2. Quick Route Output

아래를 한 번에 적고 시작한다.

- `starting_skill`
- `resolved_route`
- `required_modifier_set`
- `compression_contract`
- `required_blocks_before_scope_freeze`
- `question_budget_hint`
- `doc_density_hint`
- `stop_rule`

## 2.5 Trigger Signals That Auto-Promote Blocks

이 표는 industry vocabulary가 달라도 planning contract를 먼저 올리기 위한 front-door helper다.

| Stress signal words | Auto-promoted block | Usual owner skill |
| --- | --- | --- |
| `waitlist`, `capacity`, `quota`, `blackout`, `expiry`, `check-in`, `double-book`, `MOQ` | `constraint_exception_contract` | `ux-use-case-strategy` + `stakeholder-rollout-strategy` |
| `appeal`, `regrade`, `callback`, `follow-up`, `manual recovery`, `return`, `refund recovery`, `rework`, `denial recovery` | `exception_recovery_contract` | `ux-use-case-strategy` + `stakeholder-rollout-strategy` |
| `duplicate`, `claim`, `freshness`, `ranking trust`, `sponsored placement`, `provenance` | `local_discovery_trust` | `data-source-strategy` |
| `progress`, `streak`, `completion`, `unlock`, `retry`, `resubmission` | `learning_progression_contract` | `ux-use-case-strategy` |
| `review queue`, `grader`, `committee`, `approval backlog`, `manual review` | `review_queue_model` | `stakeholder-rollout-strategy` |
| `sensitive message`, `guardian`, `proxy`, `delegated access`, `disclosure boundary` | `regulated_workflow_minimum` | `data-source-strategy` |
| `package ladder`, `paywall`, `entitlement`, `member tier`, `upgrade path`, `member access state` | `media_membership` and shape-changing paid boundary -> `monetization-strategy` auto-insert | `acquisition-retention-strategy` + `monetization-strategy` |

- stress signal로 promoted된 block의 primary owner skill이 current route에 없으면 auto-insert 한다
- 이 문서는 helper지만, owner-skill injection rule은 [CONTROL-PLANE.md](CONTROL-PLANE.md)를 따른다

## 3. Pace Budgets

### fast

- primary questions: 8-12개
- recent example bundle: 1개
- primary use-case card: 1개
- output: 8문서는 유지하되 `RESEARCH`, `UX-IA`, `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF`는 lite density 허용
- route inflation guard:
  - 아래 4개 중 하나가 없으면 budget를 넘기지 않는다
  - `shape-changing risk`
  - `source-of-truth unresolved`
  - `required evidence gate unresolved`
  - `user-requested depth`
- stop rule:
  - `problem / target / primary use case / first value / main risk / next step`이 보이면 synthesize로 간다
  - compression contract가 켜져 있으면 해당 contract의 explicit cap과 stop rule을 우선한다

### standard

- primary questions: 15-25개
- recent example bundle: 1-2개
- use-case card: 1-2개
- output: 8문서를 모두 채우되 thin doc를 억지로 두껍게 만들지 않는다
- route inflation guard:
  - budget를 넘기면 어느 unresolved slot 때문에 늘어났는지 적는다
- stop rule:
  - archetype minimum route와 done criteria를 충족하면 synthesize로 간다

### full

- primary questions: 25-40개
- recent example bundle: 2-3개
- role/stage split artifact: 충분히 만든다
- output: conditional block과 phase/task/acceptance projection까지 끝낸다
- stop rule:
  - blocker가 `not_ready_because`로 명시되기 전에는 complete로 보지 않는다

## 4. Starter Matrix

| Input shape | Canonical shape | Pace | Starting skill | Required modifier | Compression contract | Required block before scope freeze |
| --- | --- | --- | --- | --- | --- | --- |
| idea only, local service or directory | `capture-and-route + web + one-shot` | `fast` | `idea-discovery` | none | `public-website-lite` | `compression_mode`, entity/source model |
| local discovery / recommendation directory | `capture-and-route + web + content-return` | `standard` | `idea-discovery` | `local-discovery-trust` | maybe `public-website-lite` | `local_discovery_trust`, entity/source model |
| weak evidence, retained consumer product | `self-serve-loop + web/mobile-native + habit` | `standard` | `idea-discovery` | none | `early-consumer-weak-evidence` | `consumer_evidence_gate`, `proof_of_value_gate` |
| privacy-sensitive mobile habit app | `self-serve-loop + mobile-native + habit` | `standard` | `idea-discovery` | `privacy-sensitive-consumer` | `early-consumer-weak-evidence` | `consumer_evidence_gate`, `proof_of_value_gate`, mobile/privacy boundary |
| approvals-heavy regulated workflow | `system-of-record-workflow + human-service-ops + workflow` | `full` | `idea-discovery` or `data-source-strategy` | `regulated-workflow` | none | `regulated_workflow_minimum`, policy source of truth, approval matrix, audit trail minimum |
| B2B tool with buyer/admin split | `system-of-record-workflow + internal-console + workflow` | `standard`, enterprise signal이면 `full` | `idea-discovery` or `user-research-analysis` | maybe `self-serve-to-enterprise` | none | rollout owner, proof-to-buy, pilot success, entitlement unlock timing |
| transactional two-sided product | `coordinate-and-transact + multi-surface + transactional` | `full` | `idea-discovery` | `commerce-transactional` | none | `trust_ops_minimum` |
| content/community with subscription | `publish-and-curate + web/multi-surface + content-return` | `standard` | `idea-discovery` | maybe `media-membership` | none | `media_membership`, editorial/support owner |
| integration-first product | `integrate-and-control + api-sdk-cli/multi-surface + workflow` | `full` | `idea-discovery` or `data-source-strategy` | maybe `self-serve-to-enterprise` | none | `platform_contract`, maybe `expansion_model` |
| AI copilot with review queue | `draft-review-approve + multi-surface + queue-driven` | `full` | `idea-discovery` or `user-research-analysis` | `knowledge-grounded`, `human-review-gated` | none | `knowledge_contract`, `review_queue_model`, approval threshold, MVP boundary |
| field service dispatch with offline technicians | `system-of-record-workflow + hybrid-offline + workflow` | `full` | `idea-discovery` or `data-source-strategy` | `service-operations-workflow`, `offline-operability` | none | `service_ops_minimum`, `offline_operability`, parts/source model |
| cohort-based learning product | `system-of-record-workflow + multi-surface + workflow` | `standard`, institution signal이면 `full` | `idea-discovery` or `user-research-analysis` | `learning-progression`, maybe `human-review-gated` | none | `learning_progression_contract`, role split, completion source of truth |
| appeal, regrade, callback, or recovery-heavy workflow | `draft-review-approve or system-of-record-workflow + multi-surface/human-service-ops + workflow/queue-driven` | `standard`, regulated이면 `full` | `idea-discovery` or `ux-use-case-strategy` | maybe `human-review-gated`, maybe `regulated-workflow`, maybe `service-operations-workflow` | none | `exception_recovery_contract`, recovery owner, user-visible recovery path |
| travel or booking support product | `coordinate-and-transact + multi-surface + transactional` | `full` | `idea-discovery` or `data-source-strategy` | `commerce-transactional`, `reservation-lifecycle`, maybe `service-operations-workflow`, maybe `platform_contract` | none | `trust_ops_minimum`, `reservation_lifecycle_contract`, external source of truth, external confirmation dependency |
| versioned approval artifact + field execution | `system-of-record-workflow + hybrid-offline + workflow` | `full` | `idea-discovery` or `data-source-strategy` | `artifact-revision-controlled`, `service-operations-workflow`, maybe `offline-operability` | none | `artifact_revision_contract`, workflow/service minimum |
| fixed-asset or slot-based booking ops | `system-of-record-workflow + multi-surface + workflow` | `standard`, payment/refund-heavy면 `full` | `idea-discovery` or `data-source-strategy` | `availability-booking`, maybe `service-operations-workflow`, maybe `commerce-transactional` | none | `availability_booking_contract`, source of truth, exception policy |
| regulated appointment / intake workflow | `system-of-record-workflow + multi-surface + workflow` | `full` | `idea-discovery` or `data-source-strategy` | `regulated-workflow`, `availability-booking`, maybe `service-operations-workflow` | none | `regulated_workflow_minimum`, `availability_booking_contract`, delegated access, sensitive communication boundary |
| review queue with appeals, regrades, or callbacks | `draft-review-approve + multi-surface + queue-driven` | `full` | `idea-discovery` or `ux-use-case-strategy` | `human-review-gated`, maybe `regulated-workflow` | none | `review_queue_model`, `exception_recovery_contract`, approval threshold, user-visible recovery path |
| local discovery plus transaction or paid booking | `capture-and-route + web/multi-surface + content-return/transactional` | `full` | `idea-discovery` | `local-discovery-trust`, `commerce-transactional`, maybe `reservation-lifecycle` | none | `local_discovery_trust`, `trust_ops_minimum`, transaction remedy, claim/moderation policy |
| local discovery plus slot booking | `capture-and-route + web/multi-surface + content-return/workflow` | `full` | `idea-discovery` | `local-discovery-trust`, `availability-booking`, maybe `constraint-exception-controlled` | none | `local_discovery_trust`, `availability_booking_contract`, source of truth, booking exception owner |
| booking flow with capacity, check-in, or turnaround exceptions | `system-of-record-workflow + multi-surface + workflow` | `full` | `idea-discovery` or `data-source-strategy` | `availability-booking`, maybe `service-operations-workflow`, maybe `commerce-transactional` | none | `availability_booking_contract`, `constraint_exception_contract`, source of truth, exception owner |
| booking or service workflow with callback or recovery promise | `system-of-record-workflow + multi-surface/human-service-ops + workflow` | `full` | `idea-discovery` or `ux-use-case-strategy` | `availability-booking`, maybe `service-operations-workflow`, maybe `regulated-workflow` | none | `availability_booking_contract`, `exception_recovery_contract`, callback owner, recovery SLA |
| membership product with progression, cohort, or completion promise | `publish-and-curate or system-of-record-workflow + multi-surface + content-return/workflow` | `standard`, institution signal이면 `full` | `idea-discovery` or `user-research-analysis` | `media-membership`, `learning-progression`, maybe `human-review-gated` | none | `media_membership`, `learning_progression_contract`, completion source of truth, support owner |
| internal artifact-controlled approval workflow | `draft-review-approve + multi-surface + queue-driven` | `full` | `idea-discovery` or `user-research-analysis` | `artifact-revision-controlled`, `human-review-gated`, maybe `regulated-workflow` | none | `artifact_revision_contract`, `review_queue_model`, signoff state, change linkage |
| artifact-controlled internal workflow with step ownership and escalation | `system-of-record-workflow + internal-console/multi-surface + workflow` | `full` | `idea-discovery` or `data-source-strategy` | `artifact-revision-controlled`, maybe `regulated-workflow` | none | `artifact_revision_contract`, required artifacts, step owner, escalation owner |
| service marketplace with scheduling and support recovery | `coordinate-and-transact + multi-surface + transactional` | `full` | `idea-discovery` | `commerce-transactional`, `service-operations-workflow`, maybe `reservation-lifecycle` | none | `trust_ops_minimum`, `service_ops_minimum`, support recovery owner, schedule-change lifecycle |
| coach or advisor habit product with role-sensitive sharing | `self-serve-loop + mobile-native/multi-surface + habit` | `standard`, regulated이면 `full` | `idea-discovery` | `privacy-sensitive-consumer`, maybe `learning-progression` | `early-consumer-weak-evidence` when evidence is weak | `privacy_sensitive_consumer`, role visibility boundary, sensitive note sharing rule |

## 4.5 Ambiguity Resolver

- matrix row가 여러 개 맞으면 `required_blocks_before_scope_freeze`가 더 많은 row를 고른다
- pace가 애매하면 더 느린 pace를 고른다
- starting skill이 애매하면 아래 순서로 고른다:
  - target / problem / primary use case가 흐리면 `idea-discovery`
  - target은 있는데 role split이 product shape를 바꾸면 `user-research-analysis`
  - source of truth / integration / dependency가 먼저 shape를 바꾸면 `data-source-strategy`
- still ambiguous면 work shape를 가르는 forced-choice 질문 1개만 던진다
- 어떤 row도 안 맞으면 `work_shape=current best guess`, `surface_model=best guess`, `loop_model=best guess`, `current_gap=discover`, `pace=standard`로 시작한다
- route가 잡힌 뒤 required block owner skill이 minimum route에 없으면 auto-insert 한다

## 4.7 Resolved Route Patterns

- `resolved_route = base route + triggered stress promotion + auto_inserted_owner_skills`
- local discovery에서 freshness/source 문제가 크면
  - `idea-discovery -> problem-validation -> user-research-analysis -> market-competitor-research -> data-source-strategy -> mvp-scope -> ux-use-case-strategy -> planning-synthesis`
- booking flow에 `capacity / waitlist / check-in`이 있으면
  - `idea-discovery -> problem-validation -> user-research-analysis -> data-source-strategy -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis`
- membership에 `package ladder / paid boundary`가 shape-changing이면
  - `idea-discovery -> problem-validation -> user-research-analysis -> acquisition-retention-strategy -> monetization-strategy -> mvp-scope -> ux-use-case-strategy -> planning-synthesis`
- review queue에 `appeal / regrade / callback`이 있으면
  - `idea-discovery -> problem-validation -> user-research-analysis -> ux-use-case-strategy -> stakeholder-rollout-strategy -> planning-synthesis`

## 4.6 Modifier Composition Overrides

- `human-review-gated` only
  - generic committee, grading, approval queue로 읽는다
  - `review_queue_model`은 required지만 `knowledge_contract`는 자동 요구하지 않는다
- `local-discovery-trust + commerce-transactional`
  - discovery trust와 transaction trust를 같이 본다
  - `local_discovery_trust`와 `trust_ops_minimum`을 둘 다 required로 본다
- `reservation-lifecycle` on non-travel support
  - booking 전용으로 읽지 않는다
  - return, RMA, refund, reissue, recovery lifecycle도 같은 contract로 읽는다
- appeals, regrades, callbacks, manual exception promises
  - `exception_recovery_contract`를 required로 올린다
  - recovery owner, user-visible path, audit/event rule을 early block으로 본다

## 5. Compression Contracts

### public-website-lite

- when:
  - brochure, landing, local-service, lightweight directory
  - success가 one-shot conversion 중심이고 retained product loop가 핵심이 아닐 때
- question cap:
  - 8-10개
- required block cap:
  - `compression_mode`
  - `website.canonical-entity-model`
  - `website.primary-conversion`
  - `website.first-lead-source`
  - `website.response-sla`
  - directory면 `website.duplicate-rule`, `website.freshness-sla-owner`, `website.claim-moderation`
- required doc shape:
  - `RESEARCH`, `UX-IA`, `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF`는 lite density 허용
- stop rule:
  - entity/source model, conversion path, proof stack, response owner가 보이면 synthesize로 간다

### early-consumer-weak-evidence

- when:
  - retained consumer product인데 recent example, repeat signal, WTP signal이 약할 때
- question cap:
  - 10-14개
- required block cap:
  - `consumer_evidence_gate`
  - `proof_of_value_gate`
  - `first_value_moment`
  - `activation_event`
  - `retention_loop`
- required doc shape:
  - 8문서는 유지하되 `PRD`와 `EXECUTION-HANDOFF`는 experiment-mode가 기본이다
  - `BUSINESS-OPS`의 monetization은 sustainability note 수준으로 남겨도 된다
- stop rule:
  - first value, proof-of-value threshold, repeat threshold, kill/pivot/build gate가 보이면 `next_experiment`로 간다
  - promotion rule 충족 전에는 `next_implementation_input`를 내지 않는다

## 6. First Questions By Archetype

### public-website-lite

- canonical entity는 무엇인가
- primary conversion은 무엇인가
- first lead source는 어디인가
- freshness owner는 누구인가
- directory면 duplicate rule과 claim or moderation timing은 무엇인가

### local discovery / recommendation directory

- canonical entity model은 무엇인가
- popularity or recommendation policy는 무엇인가
- freshness owner와 update SLA는 누구인가
- duplicate rule과 claim/moderation rule은 무엇인가
- one-shot directory인지 return loop가 있는 curation product인지 어디서 갈라지는가

### weak-evidence consumer-saas

- habit loop product인가 one-shot utility인가
- 최근 실제 사례는 무엇인가
- current alternative는 무엇인가
- activation, proof-of-value, repeat 중 어디가 제일 불확실한가
- 어떤 evidence가 나오면 value가 검증됐다고 보겠는가
- 무엇을 보면 build가 아니라 stop or pivot 합니까

### platform + self-serve-to-enterprise

- source of truth와 required integration은 무엇인가
- first success path는 무엇인가
- support owner or SLA는 무엇인가
- incident owner와 rollback boundary는 무엇인가
- package ladder와 entitlement unlock timing은 무엇인가

### mobile privacy-sensitive habit product

- notification permission은 언제 어떤 copy로 묻는가
- lock screen에 무엇을 숨기거나 약하게 보여야 하는가
- local only와 synced data의 경계는 무엇인가
- reminder cadence와 quiet-hours rule은 무엇인가
- export / delete / reset는 어떤 owner와 UX로 처리하는가

### regulated workflow

- case state machine과 approval matrix는 무엇인가
- policy source of truth는 어디인가
- 어떤 step이 phone / fax / callback / manual portal에 의존하는가
- audit trail minimum과 override reason policy는 무엇인가
- denial / rework / escalation은 어떤 queue와 SLA로 처리하는가
- delegated access, proxy, guardian authority는 어떻게 검증하고 제한하는가
- SMS / email / phone / portal 별 disclosure-safe communication boundary는 무엇인가

### AI review queue

- work unit은 draft, answer, recommendation, decision memo 중 무엇인가
- review queue owner와 SLA는 누구/무엇인가
- approval threshold와 override policy는 무엇인가
- allowed source set과 forbidden source set은 무엇인가
- source가 없거나 stale이면 어떤 fallback으로 가는가

### field service hybrid offline

- job lifecycle과 dispatch owner는 무엇인가
- technician mobile에서 offline로도 꼭 되어야 하는 최소 작업은 무엇인가
- parts source of truth와 shortage recovery는 무엇인가
- no-show / reschedule / callback path는 어떻게 처리하는가
- sync conflict가 나면 누가 이기고 restore signal은 무엇인가

### cohort-based learning

- progression unit은 lesson, module, cohort week, assignment 중 무엇인가
- unlock or prerequisite rule은 무엇인가
- due window와 retry/resubmission policy는 무엇인가
- grading or review owner와 SLA는 무엇인가
- completion source of truth와 learner recovery path는 무엇인가

### travel / booking support

- booking or reservation state model은 무엇인가
- external or operational source of truth와 write authority는 무엇인가
- supplier-initiated or schedule or state change는 누가 소유하는가
- cancellation, reissue, rebooking, return, disruption support SLA는 무엇인가
- transactional product인지 support-heavy ops product인지 어디서 갈라지는가
- partner outage, reconciliation mismatch, confirmation drift가 나면 누가 incident/rollback/recovery를 소유하는가

### fixed-asset / slot-based booking

- bookable unit은 room, slot, seat, resource 중 무엇인가
- availability source of truth와 write authority는 무엇인가
- hold expiry와 turnaround buffer rule은 무엇인가
- blackout, override, double-book resolution은 무엇인가
- onsite exception과 customer communication trigger는 무엇인가

### regulated appointment / intake workflow

- appointment or intake state model은 무엇인가
- delegated access, proxy, guardian authority는 어떻게 처리하는가
- disclosure-safe communication boundary는 무엇인가
- availability source of truth와 booking override policy는 무엇인가
- staff queue, manual exception, callback, reschedule owner는 누구인가

## 7. Output Density Notes

### public-website-lite

- `RESEARCH`: search intent, competitor snapshot, source/freshness only
- `UX-IA`: page map, entry pages, conversion path, light recovery note
- `SCREEN-SPECS`: page-template and state oriented
- `BUSINESS-OPS`: indirect or offsite monetization, content/data owner, response owner
- `EXECUTION-HANDOFF`: page/template, CMS, form, analytics, moderation slice

### weak-evidence consumer-saas

- 전체 8문서는 유지한다
- 다만 `EXECUTION-HANDOFF`는 build-ready spec보다 experiment-first handoff로 읽혀야 한다
- `next_implementation_input`보다 `next_experiment`가 기본이다
- experiment evidence rubric:
  - recent instance 1개 이상
  - current alternative 1개
  - first-value threshold 1개
  - proof-of-value threshold 1개
  - repeat or WTP threshold 1개
  - stop / pivot / build gate 1개

### platform + self-serve-to-enterprise

- `BUSINESS-OPS`와 `EXECUTION-HANDOFF`가 특히 무거워진다
- `SCREEN-SPECS`는 install/auth/configure/validate/recover/admin/security/procurement 상태를 반드시 포함한다

## 8. Fast Update Hints

- paywall boundary가 바뀌면 `PRD`보다 먼저 `BUSINESS-OPS`와 `SCREEN-SPECS`를 맞춘다
- primary use case가 바뀌면 `PRD`보다 먼저 `PROJECT-THESIS`와 `UX-IA`를 맞춘다
- trust-ops owner가 바뀌면 `PLANNING-RECORD`, `BUSINESS-OPS`, `EXECUTION-HANDOFF`를 먼저 갱신한다
- stage role map이 바뀌면 `BUSINESS-OPS`, `SCREEN-SPECS`, `EXECUTION-HANDOFF`를 함께 본다
- canonical entity model이 바뀌면 `RESEARCH`, `UX-IA`, `SCREEN-SPECS`를 먼저 맞춘다

## 9. Validation Note

worked example은 validation fixture다.

- pack 사용과 route 결정에 필수는 아니다
- shipping default에는 포함하지 않아도 된다
- 필요하면 별도 validation bundle로만 유지한다
