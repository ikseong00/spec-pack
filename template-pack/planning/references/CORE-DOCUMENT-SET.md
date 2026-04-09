# Core Document Set

이 문서는 planning pack이 최종적으로 어떤 코어 문서 묶음을 만들어야 하는지 정의한다.

원칙은 3가지다.

- 기획 결과가 정리되어 있어야 한다
- 설계 / 구현이 이 문서를 보고 판단할 수 있어야 한다
- 유지보수와 신규 기능 추가 시에도 계속 업데이트하며 재사용할 수 있어야 한다
- commercial SaaS가 아니어도 같은 문서 세트를 유지해야 한다

## Core Documents

모든 digital service planning은 아래 `8-document core set including PLANNING-RECORD`를 만든다.

1. `PROJECT-THESIS.md`
2. `PLANNING-RECORD.md`
3. `RESEARCH.md`
4. `PRD.md`
5. `UX-IA.md`
6. `SCREEN-SPECS.md`
7. `BUSINESS-OPS.md`
8. `EXECUTION-HANDOFF.md`

## Document Contract

모든 문서는 아래 공통 메타를 가진다.

- `status`
- `owner`
- `last_updated`
- `source_of_truth_for`
- `update_when`
- `open_questions`
- `change_log`

메타 필드의 정확한 형식은 [DOC-METADATA-SPEC.md](DOC-METADATA-SPEC.md)를 따른다.
canonical concept ID 목록은 [CANONICAL-CONCEPT-REGISTRY.md](CANONICAL-CONCEPT-REGISTRY.md)를 따른다.
block-to-doc projection 규칙은 [PROJECTION-MATRIX.md](PROJECTION-MATRIX.md)를 따른다.
copyable skeleton은 이 pack의 `templates/` 아래 template 파일을 기준으로 한다.

추가 규약:

- `source_of_truth_for` concept는 canonical doc 하나만 소유한다
- downstream doc나 derived doc는 owning doc를 override하지 않는다
- `One-Page Core Artifact`는 core doc가 아니라 derived index다
- owning doc가 먼저 바뀌었는데 downstream doc가 아직 반영되지 않았으면 그 문서는 `stale`다

## Document Responsibilities

### Compression Rule

`public-website-lite` 같은 경량 시나리오도 같은 8문서 구조를 유지한다. 다만 문서 밀도는 아래처럼 압축할 수 있다.

- `SCREEN-SPECS.md`는 app-screen이 아니라 page-template oriented여도 된다
- `EXECUTION-HANDOFF.md`는 page/template, analytics, form, CMS acceptance 중심으로 충분할 수 있다
- retention / repeat / monetization은 indirect 또는 minimal re-engagement note로 압축할 수 있다

### `PROJECT-THESIS.md`

이 문서는 제품의 가장 상위 정의를 고정한다.

- one-line product
- target user
- why this segment first
- problem statement
- current alternative
- positioning difference
- why now

### `PLANNING-RECORD.md`

이 문서는 모든 planning 판단의 canonical register다.

- facts
- assumptions
- decisions
- open_questions
- risks
- next_step
- metric hierarchy
- structured blocks from the planning record schema

### `RESEARCH.md`

이 문서는 external / comparative evidence를 정리한다.

- market category
- demand proxy
- competitor set
- alternative behavior
- source summary
- evidence confidence
- research caveats

### `PRD.md`

이 문서는 제품 정의와 scope 판단의 중심이다.

- product goals
- representative use cases
- primary use case
- feature structure
- MVP scope
- defer
- out_of_scope
- proof event
- success criteria

### `UX-IA.md`

이 문서는 경험 구조를 정리한다.

여기서 `experience`는 화면 내 네비게이션만 뜻하지 않는다. 아래도 포함한다.

- role handoff
- queue / case lifecycle
- notification / callback / escalation entry
- manual or offline recovery path
- API / CLI / automation touchpoint

- first-time flow
- repeat flow
- recovery flow
- IA
- navigation model
- screen/page map
- queue/state map when applicable
- trust and guidance notes

### `SCREEN-SPECS.md`

이 문서는 surface 단위 정의서다.

파일 이름은 `SCREEN-SPECS.md`를 유지하지만, 여기서 `screen`은 아래를 모두 포함한다.

- page or screen
- mobile view or permission state
- queue or worklist surface
- notification/reminder surface
- API / CLI / integration touchpoint
- human handoff checkpoint

- screen purpose
- primary actor
- main sections
- main CTA
- inputs / outputs
- states
- edge cases
- dependencies
- acceptance notes
- role/device/connectivity state when applicable
- queue / approval / escalation state when applicable
- `consumer_evidence_gate`가 있으면 onboarding drop-off, habit trigger surface, reminder cadence, reactivation entry, paywall-entry 상태와 threshold instrumentation을 포함한다
- `platform_contract`가 있으면 install / auth / configure / validate / recover / health surface와 actor split을 포함한다
- `expansion_model`이 product artifact를 만들면 admin / security / procurement / entitlement screen or state를 포함한다
- `trust_ops_minimum`이 있으면 provider verification, abuse detection or flag state, payout or settlement hold-release, user-visible remedy, manual review, refund or reversal state, liquidity stop or pause state를 포함한다
- `regulated_workflow_minimum`이 있으면 case state, approval status, required artifact state, audit event emission, override reason capture, SLA timer state를 포함한다
- `service_ops_minimum`이 있으면 dispatch state, technician or role assignment state, service-window state, resource or fulfillment shortage / reschedule / no-show state, callback/support handoff state, proof-of-service state를 포함한다
- `offline_operability`가 있으면 degraded mode, local write boundary, sync retry, conflict state, restore signal state를 포함한다
- `knowledge_contract`가 있으면 citation state와 source warning state를 포함한다
- `review_queue_model`이 있으면 review queue state와 approval gate state를 포함한다
- `media_membership`이 있으면 paywall, entitlement, moderation, support escalation, cancel/refund state를 포함한다
- `exception_recovery_contract`가 있으면 appeal, regrade, callback, override, recovery state를 포함한다

### `BUSINESS-OPS.md`

이 문서는 adoption, viability, 운영 현실을 함께 정리한다.

주의:

- 이름은 `BUSINESS-OPS`지만 commercial revenue가 없는 내부툴, nonprofit workflow, public-service workflow에도 그대로 쓴다
- revenue가 핵심이 아니면 monetization 항목은 `N/A`로 두고 adoption / intake / operating viability를 더 중요하게 본다

- acquisition motion
- monetization direction when relevant
- pricing boundary when relevant
- first customer path
- buyer / payer / proof to buy
- expansion model when applicable
- consumer evidence gate when applicable
- data dependencies
- source of truth
- manual operations
- external dependencies
- legal / trust / ops notes
- service delivery model when applicable
- policy / queue / escalation ownership when applicable
- `platform_contract`가 있으면 onboarding playbook, support owner or SLA, key lifecycle, versioning or deprecation, rollback or incident owner를 포함한다
- `expansion_model`이 있으면 stage role map, package ladder, sales handoff trigger, pilot success, enterprise entitlements, security or procurement gates, stage thresholds, artifact-vs-process split, entitlement unlock timing을 포함한다
- `consumer_evidence_gate`가 있으면 cohort, sample or traffic requirement, measurement window, owner, timebox, pass threshold, kill threshold, promotion rule을 포함한다
- `trust_ops_minimum`이 있으면 abuse vector, detection signal, provider verification, dispute or refund ownership, payout or reversal ownership, trust-ops staffing or queue, manual-review SLA or escalation, rollout unit, liquidity stop condition, rollout-cohort operating model을 포함한다
- `regulated_workflow_minimum`이 있으면 policy source of truth, approval owner, required artifacts, audit retention, queue SLA, escalation ladder, manual exception handling, phone/fax path, denial ownership, delegated access policy, sensitive communication boundary를 포함한다
- `service_ops_minimum`이 있으면 dispatch owner, staffing/utilization model, service window rules, resource or fulfillment coordination note, exception queue, callback/support handoff, first-time-fix or revisit model을 포함한다
- `offline_operability`가 있으면 local storage boundary, sync policy, conflict rule, degraded capability matrix, restore owner를 포함한다
- `knowledge_contract`가 있으면 allowed/forbidden source set, freshness owner, citation policy를 포함한다
- `review_queue_model`이 있으면 review staffing model, backlog threshold, override owner를 포함한다
- `privacy_sensitive_consumer`가 있으면 progress source of truth, streak reset/rebuild, progress correction rule을 포함한다
- `media_membership`이 있으면 free boundary, package ladder, moderation owner, support owner or SLA, editorial freshness owner, refund/cancel policy를 포함한다
- `exception_recovery_contract`가 있으면 state source of truth, exception owner, communication boundary, audit/event requirement, response SLA를 포함한다

### `EXECUTION-HANDOFF.md`

이 문서는 설계 / 구현 직전 handoff다.

- current implementation intent
- phase split
- task breakdown principles
- acceptance framing
- non-functional notes
- unresolved blockers
- exact next implementation input
- update-after-build checklist
- traceability to must-have items, screen ids, and major risks
- weak-evidence consumer면 `experiment` handoff mode를 허용하고, 그때는 `exact_next_experiment_input`이 source of truth가 된다
- exact next implementation input는 starting phase ids, starting task ids, source-of-truth docs, blocking open questions, first acceptance targets를 포함한다
- deterministic split rule
  - phase는 must-have flow의 vertical slice다
  - task는 phase 안의 single-screen, single-surface, single-state-transition, single-queue-policy, single-infra 단위다
  - acceptance는 task 단위의 observable proof다
- `consumer_evidence_gate`가 있으면 experiment phase/task/acceptance, pass threshold, timebox, kill threshold, paywall boundary, habit or reactivation acceptance, build-unlock rule을 포함한다
- `platform_contract`가 있으면 auth or scopes, delivery pipeline, reconciliation or replay, observability, docs or SDK or CLI, rollback tooling slice를 포함한다
- `expansion_model`이 있으면 self-serve onboarding, admin controls, security review, procurement, pilot, contract conversion, entitlement delivery에 대한 stage-to-phase-task-acceptance matrix를 포함한다
- `trust_ops_minimum`이 있으면 provider verification, abuse detection, dispute or refund, payout or settlement, moderation or trust-ops slice, liquidity-stop acceptance, cohort rollout acceptance를 포함한다
- `regulated_workflow_minimum`이 있으면 workflow state machine, required-artifact slice, permission matrix, audit-log acceptance, offline event capture, delegated-access slice, communication-boundary acceptance, denial/rework slice를 포함한다
- `service_ops_minimum`이 있으면 dispatch, scheduling, technician or role handoff, resource/dependency shortage recovery, callback/support handoff, no-show/reschedule, proof-of-service acceptance를 포함한다
- `offline_operability`가 있으면 local write path, sync recovery, conflict resolution, degraded acceptance를 포함한다
- `knowledge_contract`가 있으면 source policy acceptance와 citation acceptance를 포함한다
- `review_queue_model`이 있으면 review queue slice와 approval threshold acceptance를 포함한다
- `privacy_sensitive_consumer`가 있으면 progress integrity, correction, sync-conflict acceptance를 포함한다
- `media_membership`이 있으면 entitlement, moderation, support, cancel/refund acceptance를 포함한다
- `exception_recovery_contract`가 있으면 exception owner, callback, override, recovery acceptance를 포함한다

## Quality Bar

좋은 코어 문서 세트는 아래를 만족한다.

- 문서마다 왜 존재하는지 명확하다
- 같은 내용을 여러 문서에 중복해도 source of truth는 한 군데다
- 설계자가 IA, flow, scope를 추론하지 않아도 된다
- 구현자가 MVP 범위와 제외 범위를 다시 추정하지 않아도 된다
- 유지보수 시 어떤 결정이 왜 내려졌는지 찾을 수 있다
- 새 기능 추가 시 어느 문서를 먼저 업데이트해야 하는지 보인다
- 문서가 snapshot이 아니라 living doc으로 유지 가능하다

## Update Model

planning pack은 문서를 한 번 만들고 버리지 않는다.

- discovery / validation 결과가 바뀌면 `PROJECT-THESIS.md`, `PLANNING-RECORD.md`, `RESEARCH.md`를 먼저 갱신한다
- scope가 바뀌면 `PRD.md`, `UX-IA.md`, `SCREEN-SPECS.md`를 갱신한다
- acquisition / monetization / ops 현실이 바뀌면 `BUSINESS-OPS.md`를 갱신한다
- 구현 범위가 바뀌면 `EXECUTION-HANDOFF.md`를 갱신한다

즉 planning output은 summary 1개가 아니라, 이후 단계가 반복 참조할 수 있는 doc bundle이어야 한다.

빠른 시작용 helper는 [UPDATE-ENTRY-MAP.md](UPDATE-ENTRY-MAP.md)를 본다.

## Change Routing Matrix

변경이 생기면 아래 순서로 본다.

| Change type | First doc to update | Downstream docs to reconcile | Why first |
| --- | --- | --- | --- |
| target user or segment change | `PROJECT-THESIS.md` | `PLANNING-RECORD.md`, `RESEARCH.md`, `PRD.md`, `UX-IA.md` | target/why-this-segment ownership이 thesis에 있기 때문 |
| problem statement or evidence change | `PLANNING-RECORD.md` | `PROJECT-THESIS.md`, `RESEARCH.md`, `PRD.md` | facts/assumptions/evidence register를 먼저 고쳐야 downstream 해석이 맞아짐 |
| market, competitor, or why-now change | `RESEARCH.md` | `PROJECT-THESIS.md`, `PRD.md`, `BUSINESS-OPS.md` | external evidence와 freshness ownership이 research에 있기 때문 |
| feature or scope change | `PRD.md` | `UX-IA.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` | must-have/defer/out-of-scope ownership이 PRD에 있기 때문 |
| flow or IA change | `UX-IA.md` | `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` | flow/screen/page-map ownership이 UX-IA에 있기 때문 |
| screen/state change | `SCREEN-SPECS.md` | `EXECUTION-HANDOFF.md` | task/acceptance traceability가 screen spec를 타고 내려가기 때문 |
| monetization, pricing, ops, policy, trust change | `BUSINESS-OPS.md` | `PRD.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` | business/ops/control ownership이 BUSINESS-OPS에 있기 때문 |
| implementation order or acceptance change | `EXECUTION-HANDOFF.md` | none unless scope changed | phase/task/acceptance ownership이 handoff에 있기 때문 |

compound rule:

- target + feature change면 `PROJECT-THESIS.md` 먼저, 그다음 `PRD.md`
- policy/trust + screen change면 `BUSINESS-OPS.md` 먼저, 그다음 `SCREEN-SPECS.md`
- evidence + scope change면 `PLANNING-RECORD.md` 먼저, 그다음 `PRD.md`
