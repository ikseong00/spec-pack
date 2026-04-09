# Ralph Loop Log

이 문서는 scenario agent와 evaluator agent의 반복 결과를 누적하는 working log다.

## Loop 1

### Scenario 1: Public Website Lead-Gen / Directory

- Common strength
  - local SEO / directory / lead-routing / monetization 1차 질문 세트가 꽤 좋다.
- Common failure
  - 8-document bundle 미출력
  - `SCREEN-SPECS.md` / `EXECUTION-HANDOFF.md`가 약하다.
  - local SEO page-template, ingest / claim / moderation, ranking disclosure, qualified-lead feedback가 더 강제되어야 한다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - public-web local SEO / directory ops output block 강화

### Scenario 3: SMB B2B SaaS

- Common strength
  - B2B overlay와 user / rollout / GTM 질문은 꽤 강하다.
- Common failure
  - final output이 아직 8-document core set으로 분해되지 않는다.
  - `SCREEN-SPECS.md`와 `EXECUTION-HANDOFF.md`가 안정적으로 나오지 않는다.
  - 문서 metadata contract가 skill 차원에서 operationalize되지 않았다.
  - dual-surface actor-specific screen / exception 상태가 얕다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - staff/admin/customer surface와 scheduling exception checklist 보강

### Scenario 4: Mid-Market B2B Workflow SaaS

- Common strength
  - role split, rollout, buyer/payer, dependency/control 질문은 좋다.
- Common failure
  - 8-document bundle 미출력
  - enterprise admin / security / procurement / regulated controls 깊이가 아직 부족하다.
  - `SCREEN-SPECS.md` / `EXECUTION-HANDOFF.md`에서 actor-specific approval/document lifecycle와 enterprise blockers가 약하다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - enterprise workflow documentization step 추가
  - controls가 shape-changing이면 `regulated-workflow`를 더 강하게 요구

### Scenario 2: Consumer Productivity SaaS

- Common strength
  - discovery / validation / activation / retention / paywall 질문 세트는 강하다.
- Common failure
  - 8-document bundle 미출력
  - weak-evidence consumer SaaS에서 `hypothesis-validation`이 default minimum route에 충분히 강제되지 않는다.
  - `SCREEN-SPECS.md` / `EXECUTION-HANDOFF.md`가 약하다.
  - retention / paywall / kill threshold가 source-of-truth doc로 안 박힌다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - weak-evidence consumer SaaS에서 hypothesis-validation과 activation/retention/paywall threshold block 필수화

### Scenario 5: Transactional Marketplace

- Common strength
  - marketplace overlay의 1차 질문 세트와 trust / ops 감지는 괜찮다.
- Common failure
  - 8-document bundle 미출력
  - marketplace 기본 route에 `stakeholder-rollout-strategy`가 빠져 있다.
  - two-sided cold-start / liquidity / trust-ops 예외 처리가 충분히 강제되지 않는다.
- Minimum fix
  - `marketplace + commerce-transactional`에서 `full` pace + rollout required
  - transactional marketplace overlay 강화
  - doc-bundle synthesis contract 추가

### Scenario 6: Content Community

- Common strength
  - content-community overlay가 creator / consumer / trust / retention 축을 기본적으로는 건드린다.
- Common failure
  - 8-document bundle 미출력
  - ranking-heavy / moderation-heavy 시나리오에 overlay 깊이가 부족하다.
  - `SCREEN-SPECS.md` / `EXECUTION-HANDOFF.md`가 얕다.
  - trust / moderation ownership이 분산되어 한 덩어리로 정리되지 않는다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - community trust / moderation / ranking 질문 세트 강화
  - trust / moderation ownership point를 더 분명히 묶기

### Scenario 8: AI-Assisted Consumer SaaS

- Common strength
  - generic consumer SaaS spine와 trust / recovery 기본축은 괜찮다.
- Common failure
  - 8-document bundle 미출력
  - AI-specific planning 질문이 없다.
  - `SCREEN-SPECS.md` / `BUSINESS-OPS.md` / `EXECUTION-HANDOFF.md`가 AI trust / recovery / cost 구조를 충분히 못 담는다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - `ai-assisted-consumer` modifier overlay 추가
  - grounding / refusal / recovery / provider dependency / inference economics 질문 추가

### Scenario 7: Platform-Integration SaaS

- Common strength
  - auth / sync / webhook / rollout / dependency 1차 질문은 괜찮다.
- Common failure
  - 8-document bundle 미출력
  - integration contract가 독립 structured artifact로 강제되지 않는다.
  - `self-serve-to-enterprise` modifier가 pilot / security review / procurement 상황에서 더 자동으로 붙어야 한다.
  - `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`가 integration onboarding / rollback / reliability 기준까지 충분히 못 담는다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - `platform_contract` schema block 추가
  - pilot/security/procurement가 보이면 `self-serve-to-enterprise` auto-require

### Scenario 9: Media Membership

- Common strength
  - content-community 기본 질문과 monetization / retention 축은 괜찮다.
- Common failure
  - 8-document bundle 미출력
  - media-membership hybrid 질문이 없다.
  - content ops가 중요한데 `stakeholder-rollout-strategy`가 default로 안 붙는다.
  - `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`가 editorial/member-state detail을 못 담는다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - `media-membership` modifier 추가
  - paid content/community에서 rollout required 조건 추가

### Scenario 10: Self-Serve To Enterprise

- Common strength
  - role map, rollout, proof-to-buy, pricing anchor 질문은 괜찮다.
- Common failure
  - 8-document bundle 미출력
  - package ladder / pilot-to-contract / sales-handoff가 아직 약하다.
  - `EXECUTION-HANDOFF.md`가 expansion path를 못 담는다.
- Minimum fix
  - doc-bundle synthesis contract 추가
  - `self-serve-to-enterprise`를 structured extension으로 강화
  - package ladder / stage role map / pilot success를 더 강하게 강제

## Cross-Scenario Pattern So Far

- 가장 큰 구조적 결함은 `planning-synthesis`가 아직 one-page artifact + planning record 중심이고, required `8-document core set`를 실제 산출하지 않는다는 점이다.
- 두 번째 결함은 `SCREEN-SPECS.md`와 `EXECUTION-HANDOFF.md`가 독립 산출물 수준으로 강제되지 않는다는 점이다.
- 세 번째 결함은 archetype-specific hardening이 필요한 시나리오에서 overlay가 약간 얕다는 점이다.
- 네 번째 결함은 document metadata / living-doc contract가 reference에는 있지만 skill output contract에는 아직 약하다는 점이다.

## Loop 2

### Documentation Quality

- Result
  - `pass`
- Meaning
  - 8-document bundle과 living-doc metadata는 이제 구조적으로 통과하기 시작했다.

### Implementation Handoff

- Result
  - `block`
- Meaning
  - 문서는 생기지만, phase / task / acceptance 변환의 결정성이 아직 약하다.
- Fix added
  - `flow minimum`, `handoff minimum`
  - `execution_handoff` traceability rule
  - `SCREEN-SPECS.md` / `EXECUTION-HANDOFF.md` acceptance notes 강화

### Consumer SaaS Re-Check

- Result
  - improved but still partial
- Meaning
  - weak-evidence consumer SaaS는 hypothesis gating과 experiment-vs-build decision이 더 강하게 필요하다.
- Fix added
  - `consumer-saas` weak-evidence special-case escalation

### Marketplace Re-Check

- Result
  - improved but still partial
- Meaning
  - rollout은 좋아졌지만 transactional trust / payout / dispute / supply seeding realism이 더 필요하다.
- Fix added
  - `marketplace + commerce-transactional` full escalation
  - transactional commerce questions 확장
  - rollout skill을 geo/category/supply rollout까지 넓힘

## Loop 3

### Implementation Handoff Re-Check

- Result
  - still `block`, but much narrower
- Meaning
  - phase / acceptance는 많이 나아졌지만 task traceability가 남아 있었다.
- Fix added
  - `must_have -> screen -> phase -> task -> acceptance` traceability
  - acceptance에 `linked_task_ids`
  - deterministic split rule 추가

### Platform / Expansion Re-Check

- Result
  - near-pass, but projection 부족
- Meaning
  - `platform_contract`와 `self-serve-to-enterprise`가 질문은 잘하지만 output contract로 더 박혀야 했다.
- Fix added
  - `platform-integration` done gate에 `platform_contract` 추가
  - `expansion_model` block 추가
  - `b2b-saas`에서도 expansion trigger 시 `self-serve-to-enterprise` auto-require

## Loop 4

### Documentation Quality Re-Check

- Result
  - `pass`
- Meaning
  - 8-document bundle과 metadata contract는 현재 구조상 안정적으로 유지된다.

### Implementation Handoff Re-Check

- Result
  - `pass`
- Meaning
  - `EXECUTION-HANDOFF.md`가 이제 planning bundle의 hard gate로 동작하고, must-have -> screen -> phase -> task -> acceptance traceability가 구조적으로 통과하기 시작했다.

### Consumer Weak-Evidence Re-Check

- Result
  - improved but still partial
- Meaning
  - experiment-vs-build 라우팅은 좋아졌지만 consumer-specific evidence gate가 core docs에 projection되는 강제력이 더 필요했다.
- Fix added
  - `consumer_evidence_gate` block 추가
  - consumer weak-evidence를 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md` projection hard gate로 승격
  - consumer done criteria에 falsification signal, pass threshold, owner, timebox, kill threshold, paywall boundary, habit trigger, reactivation path 추가

### Platform-Integration Re-Check

- Result
  - improved but still partial
- Meaning
  - `EXECUTION-HANDOFF`는 강해졌지만 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`에 platform contract projection이 더 명시적으로 강제되어야 했다.
- Fix added
  - `platform_contract`를 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` projection hard gate로 승격
  - platform done criteria에 key lifecycle, retry/idempotency, versioning/deprecation, recovery path, developer onboarding/support surface 추가
  - core document set에 platform-specific sections 추가

### Self-Serve-To-Enterprise Re-Check

- Result
  - improved but still partial
- Meaning
  - modifier trigger는 좋아졌지만 `expansion_model`이 schema에만 있고 owning skills / docs로 충분히 projection되지 않았다.
- Fix added
  - rollout / monetization skill에서 `expansion_model` output을 명시
  - self-serve-to-enterprise done criteria 추가
  - `BUSINESS-OPS.md`와 `EXECUTION-HANDOFF.md`에 expansion projection hard gate 추가

## Loop 8

### Wave Focus

- worked example 기반 usability check
- scenario-runner와 criteria-evaluator 분리
- 첫 wave 대상:
  - `consumer-saas` weak evidence
  - `public-website-lite` directory
  - `platform-integration + self-serve-to-enterprise`

### Evaluator Results

- `Operator Usability`
  - result: `2 / 3`
  - main gap: operator front door가 singular하지 않고 여러 문서를 합쳐 시작해야 함
- `Question Quality`
  - result: `3 / 3`
  - main gap: 일부 질문이 still broad label이라 prompt-level tightening 여지 존재
- `Weight Control`
  - result: `2 / 3`
  - main gap: light mode가 실제로는 surface area를 충분히 줄이지 못해 operator가 경량화를 추론해야 함

### Scenario Findings

- `consumer-saas`
  - main friction: weak-evidence consumer에서 falsification rule, measurement window, promotion rule이 더 앞에 나와야 함
  - fix direction: consumer evidence gate를 더 concrete하게 만들고 habit-loop vs one-shot utility fork를 early로 당김
- `public-website-lite`
  - main friction: page-template oriented route는 괜찮지만 entity model, duplicate rule, freshness owner가 positioning 이후로 밀릴 수 있음
  - fix direction: directory-specific compression rule과 worked example 추가
- `platform + self-serve-to-enterprise`
  - main friction: `platform_contract`와 `expansion_model`이 분리되어 보이면 output이 complete처럼 보여도 projection hole이 생김
  - fix direction: support owner or SLA, incident owner, rollback boundary, package ladder, entitlement unlock timing을 scope freeze 전 질문으로 승격

### Fixes Added

- `references/OPERATOR-STARTER.md` 추가
  - `archetype + current_gap + pace`로 first skill, required block, question budget, doc density를 빠르게 정하는 front-door helper
- `worked-examples/` 추가
  - `consumer-saas-weak-evidence`
  - `public-website-lite-directory`
  - `platform-self-serve-enterprise`
- `CONTROL-PLANE.md`
  - pace별 question budget / doc density guide 추가
  - route resolver output contract 명시
  - public website, consumer weak-evidence, platform/self-serve escalation 조기질문 강화
- `QUESTION-OVERLAYS.md`
  - public website에 canonical entity model, duplicate rule, freshness owner 추가
  - consumer에 product-shape fork, falsification rule, evidence window 추가
  - platform에 support owner/SLA, incident owner 추가
- skill hardening
  - `hypothesis-validation`: promotion rule, product-shape fork 강화
  - `data-source-strategy`: entity model / freshness / platform support-owner 질문 강화
  - `stakeholder-rollout-strategy`: entitlement unlock timing과 stage-role hardening
- `PLANNING-DONE-CRITERIA.md`
  - fast pace 운영 budget과 archetype-specific minimum 보강

### Resulting Read

- pack은 still `Broad Usable`
- operator usability와 weight control은 stronger `2 / 3` band로 보강
- 다음 loop는 남은 archetype인 `marketplace`, `content-community`, `b2b-saas` worked example 확장으로 가는 게 좋다

### Follow-Up Re-Check

- `Operator Usability`
  - result: `3 / 3`
  - meaning: `OPERATOR-STARTER.md`와 worked example 진입점 덕분에 first-time operator가 1분 안에 시작 route를 잡을 수 있는 수준으로 올라감
- `Weight Control`
  - result: `2 / 3`
  - meaning: explicit budget과 density guide는 좋아졌지만, archetype 전체 coverage와 더 강한 mechanical cap은 아직 남아 있음
- `consumer-saas` weak evidence scenario
  - result: `pass with caveat`
  - meaning: experiment-first routing은 좋아졌고, evidence rubric만 더 명시하면 더 단단해짐

### Transactional Marketplace Re-Check

- Result
  - improved but still partial
- Meaning
  - rollout과 trust detection은 좋아졌지만 provider verification, dispute/refund, payout/settlement, trust-ops staffing이 더 강하게 문서화되어야 했다.
- Fix added
  - `trust_ops_minimum`을 `marketplace + commerce-transactional` required output으로 승격
  - `trust_ops_minimum`을 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` projection hard gate로 승격
  - marketplace done criteria와 core document set에 provider verification / dispute-refund / payout / rollback 운영 항목 추가

## Loop 5

### Implementation Handoff

- Result
  - `partial`
- Meaning
  - handoff spine은 강하지만 `must_have`와 `screen_specs`, `exact_next_implementation_input`의 ID-based contract가 더 필요했다.
- Fix added
  - `must_have` stable item ID schema 추가
  - `screen_specs.mapped_must_have` 추가
  - `exact_next_implementation_input` minimum field contract 추가
  - weak-evidence consumer를 위한 `exact_next_experiment_input` / `handoff_mode` 계약 추가

### Weak-Evidence Consumer SaaS

- Result
  - `partial`
- Meaning
  - consumer gate는 강해졌지만 build-mode leakage가 남아 있었다.
- Fix added
  - `consumer_evidence_gate`에 cohort / sample / window 추가
  - consumer experiment-mode handoff 규칙 추가
  - `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 consumer evidence projection 세분화

### Platform-Integration

- Result
  - `partial`
- Meaning
  - platform contract projection은 강해졌지만 enterprise trigger와 contract subfield가 더 명시적이어야 했다.
- Fix added
  - `platform-integration`에서도 enterprise signal 시 `self-serve-to-enterprise` + `expansion_model` required
  - `platform_contract`에 configure / validate / recovery / health / support / incident / implementation-work 필드 추가
  - enterprise artifact가 생기면 `SCREEN-SPECS.md` projection hard gate 추가

### Self-Serve-To-Enterprise

- Result
  - `partial`
- Meaning
  - `expansion_model`은 생겼지만 stage threshold, artifact-vs-process, entitlement unlock이 더 강제되어야 했다.
- Fix added
  - `expansion_model` schema 확장
  - overlay 질문에 `stage-thresholds`, `artifact-vs-process`, `entitlement-unlock` 추가
  - `BUSINESS-OPS.md` / `EXECUTION-HANDOFF.md` expansion enforcement 강화

### Transactional Marketplace

- Result
  - `partial`
- Meaning
  - `trust_ops_minimum` gate는 생겼지만 schema와 doc projection depth가 더 필요했다.
- Fix added
  - `trust_ops_minimum`에 provider verification, dispute/refund policy, payout/settlement policy, SLA, rollout coupling 추가
  - `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 marketplace trust-ops projection 세분화

### Public Website Lite

- Result
  - `partial`
- Meaning
  - 8문서 구조는 유지하되 simple public website에 대한 경량 압축 규칙이 더 필요했다.
- Fix added
  - `public-website-lite` compression rule 추가
  - page-template oriented screen specs 허용
  - minimal re-engagement / indirect monetization note 허용

### Documentation Quality

- Result
  - `partial`
- Meaning
  - doc bundle contract는 좋지만 실제 reusable asset layer가 더 필요했다.
- Fix added
  - `DOC-METADATA-SPEC.md` 추가
  - `PROJECTION-MATRIX.md` 추가
  - 8 core document template skeleton 추가
  - README / summary를 새 asset layer 기준으로 갱신

### Discovery Quality

- Result
  - `partial`
- Meaning
  - `mvp-scope`, `monetization-strategy`, `stakeholder-rollout-strategy`에 baseline interrogation pattern이 부족했다.
- Fix added
  - 세 skill에 `Baseline Question Pack` 추가
  - unresolved `data.*`, `rollout.*`, `monetization.*` slot이 있으면 scope freeze를 막는 guard 추가

### Done Criteria Completeness

- Result
  - `partial`
- Meaning
  - document contract, design/build handoff, projection/traceability를 done criteria에서 더 명시적으로 강제해야 했다.
- Fix added
  - documentation readiness에 metadata, handoff content, projection, traceability gate를 추가

## Loop 6

### Consumer Weak-Evidence Re-Check

- Result
  - `partial`
- Meaning
  - policy와 audit는 강하지만 template authoring surface에서 experiment/build exclusivity가 더 필요했다.
- Fix added
  - `EXECUTION-HANDOFF.template.md`에 experiment/implementation mutual-exclusion 안내 강화
  - `BUSINESS-OPS.template.md`, `SCREEN-SPECS.template.md`에 consumer gate required note 추가
  - README에 experiment-mode handoff 우선 규칙 명시

### Platform-Integration Re-Check

- Result
  - `partial`
- Meaning
  - reference는 강하지만 template skeleton에 platform-specific section이 더 분명해야 했다.
- Fix added
  - `SCREEN-SPECS.template.md`, `BUSINESS-OPS.template.md`, `EXECUTION-HANDOFF.template.md`에 platform/enterprise conditional sections 강화

### Transactional Marketplace Re-Check

- Result
  - `partial`
- Meaning
  - `trust_ops_minimum`는 schema에 올라왔지만 template와 producer contract에서 더 앞당겨 수집해야 했다.
- Fix added
  - `PLANNING-RECORD.template.md`에 trust-ops block scaffold 추가
  - core doc templates에 trust-ops conditional sections 세분화
  - `data-source-strategy`, `stakeholder-rollout-strategy`에 marketplace trust-flow capture 강화

### Public-Website-Lite Re-Check

- Result
  - `partial`
- Meaning
  - compression rule은 생겼지만 template와 monetization workflow에서 더 분명해야 했다.
- Fix added
  - `public-website-lite` conditional sections를 template에 추가
  - monetization / synthesis / auditor에서 public-website-lite 압축 규칙 보강

### Documentation Quality Re-Check

- Result
  - `partial`
- Meaning
  - template, metadata spec, projection matrix는 생겼지만 skeleton이 contract를 더 정확히 따라야 했다.
- Fix added
  - `PRD.template.md`, `PLANNING-RECORD.template.md`, `EXECUTION-HANDOFF.template.md`, `UX-IA.template.md`를 contract에 더 맞게 보강

### Implementation Handoff Re-Check

- Result
  - `partial`
- Meaning
  - handoff contract는 강하지만 summary/template 일부에서 ID and exclusivity 표현이 더 필요했다.
- Fix added
  - `UX-IA.template.md`에 `screen_id` mapping scaffold 추가
  - `EXECUTION-HANDOFF.template.md`에 row schema와 exclusive next-input guidance 강화
  - `PLANNING-PACK-SUMMARY.md`에 stable item-id scope contract 반영

## Loop 7

### Documentation Quality Final Hardening

- Result
  - `pass`
- Meaning
  - metadata, projection, template skeleton, derived-doc handling이 self-enforcing reusable layer 수준까지 올라갔다.
- Fix added
  - `PROJECTION-MATRIX.md`에 one-page fixed-slot ownership 추가
  - `DOC-METADATA-SPEC.md`에 derived/stale 규칙, freshness 규칙, canonical concept ID 규칙 추가
  - `CANONICAL-CONCEPT-REGISTRY.md` 추가
  - `ONE-PAGE-CORE-ARTIFACT.template.md`, `PLANNING-PACK-SUMMARY.md`를 derived-only metadata와 dependency declaration으로 정리
  - `PLANNING-RECORD.template.md`, `RESEARCH.template.md`, `PROJECT-THESIS.template.md`를 canonical schema 수준으로 보강
  - `planning-editor-auditor`와 `planning-synthesis`에 registry / derived drift / mirrored one-page gate 추가

### Implementation Handoff Final Hardening

- Result
  - `pass`
- Meaning
  - generic website / SaaS planning에서 design/build 시작 전 ambiguity를 막는 stable ID graph와 next-step exclusivity가 닫혔다.
- Fix added
  - `PRD.template.md`에 stable `use_case_id` scaffold 추가
  - `UX-IA.template.md`에 `flow_id`, `step_id`, `owner_flow_id` scaffold 추가
  - `SCREEN-SPECS.template.md`에 `mapped_must_have`, `linked_use_case_ids`, `owner_flow_id` stable-ID guidance 추가
  - `EXECUTION-HANDOFF.template.md`에 acceptance traceability와 exact next input exclusivity 보강
  - `planning-editor-auditor`와 `planning-synthesis`에 `use_case -> flow -> screen -> phase -> task -> acceptance` graph gate 추가

### Transactional Marketplace Final Hardening

- Result
  - `pass`
- Meaning
  - `commerce-transactional` modifier에서 trust-ops가 늦게 붙는 문제가 사라졌고, schema / template / gate / projection이 같은 필드 세트로 정렬됐다.
- Fix added
  - marketplace minimum route에서 `data-source-strategy`, `stakeholder-rollout-strategy`를 final scope freeze 전에 앞당김
  - `trust_ops_minimum`에 abuse, detection, dispute/refund owner, payout/settlement owner, no-show owner, liquidity stop condition, rollout unit 추가
  - `BUSINESS-OPS.template.md`, `SCREEN-SPECS.template.md`, `EXECUTION-HANDOFF.template.md`에 trust-ops projection 강화
  - `CONTROL-PLANE.md`, `PLANNING-DONE-CRITERIA.md`, `CORE-DOCUMENT-SET.md`, `PROJECTION-MATRIX.md`, `PLANNING-RECORD.md`를 동일 field set으로 정렬

## Loop 9

### Wave Focus

- hard-case archetype example 확장
- evaluator 축:
  - `Output Completeness`
  - `Reuse Usability`
  - `Update Usability`
- scenario set:
  - `marketplace + commerce-transactional`
  - `content-community + media-membership`
  - `b2b-saas + self-serve-to-enterprise`

### Evaluator Results

- `Output Completeness`
  - result: `2 / 3`
  - main gap: worked example이 route sketch 중심이라 hard-case에서 8-doc + planning-record full coverage 증빙이 약함
- `Reuse Usability`
  - result: `3 / 3`
  - main gap: declared scope는 web/SaaS family에 묶여 있으나, 그 안에서는 reusable
- `Update Usability`
  - result: `2 / 3`
  - main gap: ownership은 분명하지만 overlapping change에서 first-update order를 한 표로 못 보여줌

### Scenario Findings

- `marketplace`
  - trust-ops full route는 맞지만 example이 없어 output completeness를 증명하기 어려웠음
- `content-community`
  - newsletter/archive/community + paywall 조합이면 `media-membership`와 rollout/ops 질문을 더 일찍 붙여야 함
- `b2b-saas`
  - buyer/payer split, proof-to-buy, pilot success가 약하면 implementation-ready로 가면 안 되고 `next_experiment`가 맞음

### Fixes Added

- `CORE-DOCUMENT-SET.md`
  - `Change Routing Matrix` 추가
  - change type별 first doc, downstream reconcile doc, 이유를 한 표로 정리
- worked examples 확장
  - `marketplace-transactional.md`
  - `content-community-membership.md`
  - `b2b-pilot-to-paid.md`
- `README.md`
  - 새 worked example 링크 추가
  - `content-community` + `media-membership` escalation 규칙 반영
- `CONTROL-PLANE.md`
  - `content-community` special-case escalation 추가
  - unresolved buyer/payer/proof-to-buy/pilot-success는 implementation-ready가 아니라는 rule 추가

### Resulting Read

- `Reuse Usability`: strong pass
- `Operator Usability`: strong pass
- `Question Quality`: pass
- `Weight Control`: usable but not yet strong
- `Update Usability`: usable, matrix로 보강
- `Output Completeness`: usable, but hard-case full-output evidence를 더 쌓아야 함

## Loop 10

### Focus

- monetization weight downshift
- success-first planning bias 강화

### Fixes Added

- `README.md`
  - activation / acquisition / retention 우선, monetization은 shape-changing일 때만 deep으로 명시
  - monetization을 light viability note로 다루는 운영 원칙 추가
- `CONTROL-PLANE.md`
  - strategy / revenue state intent를 success-first 기준으로 수정
  - strategy minimum과 synthesize minimum에서 monetization slot을 conditional로 완화
  - pricing boundary는 shape-changing인 경우에만 scope freeze guard로 유지
- `QUESTION-OVERLAYS.md`
  - 공통 질문을 `first revenue`에서 `value-exchange / sustainability note`로 완화
- `PLANNING-DONE-CRITERIA.md`
  - monetization hard gate를 conditional로 완화
  - failure signal을 `success path weak / monetization over-specified` 관점으로 수정
- `TEMPLATE-USABILITY-EVALUATION.md`
  - business usability를 success path + ops 중심으로 재정의
- `CORE-DOCUMENT-SET.md`
  - `BUSINESS-OPS`의 monetization, pricing fields를 `when relevant`로 완화
- `monetization-strategy`
  - skill 목적을 sustain note 기본값으로 수정
  - fast mode와 baseline question pack을 success-first로 완화
- `acquisition-retention-strategy`
  - metric 우선순위를 activation / retention / guardrail 중심으로 조정
- `planning-synthesis`
  - monetization output을 `when relevant`로 완화

### Resulting Read

- pack의 기본 bias가 `successful service first` 쪽으로 이동
- monetization은 삭제되지 않았고, paywall / pricing / take-rate / package ladder처럼 shape-changing일 때만 강하게 유지

## Loop 11

### Focus

- monetization downshift 이후 weight control 재검증
- operator가 fast/light route에 과도하게 끌려 들어가지 않는지 확인

### Result

- `Weight Control`: `2 / 3`

### Main Finding

- monetization weight는 줄었지만, first-time operator 관점에서는 light-mode entry contract가 아직 암묵적이었다
- 특히 `public-website-lite`와 weak-evidence consumer는 별도 compression contract가 있어야 route inflation을 더 잘 막는다

### Fixes Added

- `OPERATOR-STARTER.md`
  - `compression_contract` slot 추가
  - `public-website-lite`, `early-consumer-weak-evidence` contract 추가
  - question cap, required block cap, doc shape, stop rule을 명시
  - fast update hints를 추가해 matrix discoverability를 보강

## Loop 12

### Focus

- weak-evidence consumer SaaS에서 success-first 균형 재검증

### Result

- `Question Quality`: `pass`
- `Weight Control`: 유지

### Main Finding

- activation / retention / proof-of-value가 monetization보다 먼저 와야 한다는 방향은 맞다
- 다만 proof-of-value가 first value, retention, falsification에 흩어져 보여 explicit gate가 약했다

### Fixes Added

- `QUESTION-OVERLAYS.md`
  - `consumer.proof-of-value-threshold` 추가
  - consumer validation order에 `proof-of-value` 단계 추가
- `CONTROL-PLANE.md`
  - weak-evidence consumer에 `proof_of_value_gate` required rule 추가
- `PLANNING-DONE-CRITERIA.md`
  - consumer minimum에 `proof_of_value_gate` 추가
- `consumer-saas-weak-evidence.md`
  - required block, rubric, watchout을 proof-of-value gate 중심으로 보강
- `README.md`
  - consumer weak-evidence lane에서 proof-of-value를 paywall depth보다 먼저 닫는다고 명시

## Loop 13

### Focus

- `marketplace + commerce-transactional` worked example의 output completeness 재검증

### Result

- `Output Completeness`: `1 / 3`에서 개선 필요

### Main Finding

- route와 checklist는 맞지만, hard-case example이 여전히 full output bundle 증빙을 충분히 보여주지 못했다
- canonical block 하나와 8-doc projection slice, traceability table이 필요했다

### Fixes Added

- `worked-examples/marketplace-transactional.md`
  - filled `trust_ops_minimum` mini-bundle 추가
  - 8문서 projection slice 추가
  - dispute / payout / verification / liquidity stop traceability table 추가

## Loop 14

### Focus

- change routing matrix 이후 update usability 재검증

### Result

- `Update Usability`: `3 / 3`

### Main Finding

- core matrix는 충분히 강해졌다
- 다만 operator discoverability를 위해 ultra-short update examples가 있으면 더 좋다

### Fixes Added

- `OPERATOR-STARTER.md`
  - `Fast Update Hints` 추가

## Loop 15

### Focus

- `content-community + media-membership` path의 support / moderation / package ordering 재검증

### Result

- paywall / package ladder / moderation: mostly yes
- support: not fully first-class yet

### Main Finding

- support owner / SLA가 refund/cancel footnote처럼 읽히기 쉬웠다
- moderation owner와 package ladder도 첫 pass에서 더 빨리 보여야 했다

### Fixes Added

- `QUESTION-OVERLAYS.md`
  - `content.support-owner-sla`, `media.support-owner-sla`, `media.moderation-owner` 추가
  - content-community validation order 추가
- `CONTROL-PLANE.md`
  - content-community special-case에 support owner or SLA를 scope freeze guard로 추가
- `PLANNING-DONE-CRITERIA.md`
  - membership shape에서 support owner or SLA / moderation owner를 explicit minimum으로 추가
- `worked-examples/content-community-membership.md`
  - support owner / SLA를 first questions, required blocks, next-step gate에 추가
- `README.md`
  - membership path에서 moderation / support를 early pass로 닫는다고 명시

## Loop 16

### Focus

- `b2b-saas + self-serve-to-enterprise`의 implementation-readiness 재검증

### Result

- borderline pass

### Main Finding

- buyer / payer / proof-to-buy / pilot success는 잡혀 있었지만, implementation-ready projection이 mechanically unavoidable하지는 않았다

### Fixes Added

- `CONTROL-PLANE.md`
  - buyer/payer/proof-to-buy/pilot success/entitlement unlock timing이 `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되지 않으면 `next_implementation_input` 금지 rule 추가
- `PLANNING-DONE-CRITERIA.md`
  - self-serve-to-enterprise minimum에 same projection gate 추가
- `worked-examples/b2b-pilot-to-paid.md`
  - expected doc density와 next-step gate를 projection 기준으로 강화
- `README.md`
  - platform / enterprise signal path에서 projection check를 명시

## Loop 17

### Focus

- operator front door 재검증
- `fast` / experiment-first가 실제로 가볍게 읽히는지 확인

### Result

- `Operator Usability`: `2 / 3` ~ `3 / 3`
- `Weight Control`: `2 / 3`

### Main Finding

- route logic는 좋아졌지만, first-time operator는 여전히 README에서 13-skill spine을 먼저 보게 되면 무게를 느낀다
- weak-evidence consumer는 starter matrix상 `full`처럼 보이고, 실제 contract는 compressed라 초입 해석이 약간 흔들렸다

### Fixes Added

- `README.md`
  - top-level `Light Start` block 추가
  - `public-website-lite`, `early-consumer-weak-evidence`를 first-time entry path로 승격
- `OPERATOR-STARTER.md`
  - starter matrix에 `Compression contract` column 추가
  - weak-evidence consumer를 `standard + early-consumer-weak-evidence`로 명시

## Loop 18

### Focus

- `marketplace + commerce-transactional` hard-case example completeness 재검증

### Result

- `Output Completeness`: `2 / 3`
- `Handoff Usability`: `2 / 3`

### Main Finding

- 8-doc projection slice는 충분히 좋아졌지만, evaluator는 여전히 "설명된 projection"과 "실제 채워진 canonical snippet" 사이 간격을 지적했다

### Fixes Added

- `worked-examples/marketplace-transactional.md`
  - `PLANNING-RECORD`, `SCREEN-SPECS`, `EXECUTION-HANDOFF` sample canonical snippets 추가
  - `docs.core_bundle_ready`, `docs.execution_handoff_ready` readiness snapshot 추가

## Loop 19

### Focus

- `content-community + media-membership`에서 package/support/moderation ordering 재검증

### Result

- `Question Quality`: `3 / 3`
- `Output Completeness`: `2 / 3`

### Main Finding

- support owner / SLA는 early pass로 올라왔지만, package ladder가 아직 early question보다 gate/checklist에 더 강하게 보였다

### Fixes Added

- `QUESTION-OVERLAYS.md`
  - `content.package-ladder`를 content-community early question으로 추가
- `worked-examples/content-community-membership.md`
  - first question sequence에 package ladder explicit question 추가

## Loop 20

### Focus

- `b2b-saas + self-serve-to-enterprise` consistency / handoff / terminology 재검증

### Result

- `Reuse Usability`: `3 / 3`
- `Handoff Usability`: `2 / 3`
- `Output Completeness`: `2 / 3`

### Main Finding

- core gate는 정렬됐지만, B2B vocabulary와 worked example output density가 더 canonical set에 맞춰져야 했다

### Fixes Added

- `QUESTION-OVERLAYS.md`
  - `b2b.economic-buyer-trigger`를 `b2b.buyer-payer-trigger`로 정리
  - `b2b.proof-required-to-buy`를 `b2b.proof-to-buy`로 정리
- `OPERATOR-STARTER.md`
  - B2B starter row에 `pilot success`, `entitlement unlock timing`, enterprise-signal pace escalation 추가
- `worked-examples/b2b-pilot-to-paid.md`
  - `SCREEN-SPECS`, `EXECUTION-HANDOFF`, `BUSINESS-OPS` mini-bundle proof 추가

## Loop 21

### Focus

- hard-case worked example을 실제 산출물에 더 가깝게 만들기
- `Output Completeness`, `Handoff Usability`를 example density로 끌어올리기

### Main Finding

- 규약과 gate는 충분히 강하지만, evaluator가 아직도 "설명된 projection"과 "채워진 sample output" 사이 간격을 지적했다
- 특히 `marketplace`, `b2b pilot-to-paid`, `content-community membership`은 8문서 snapshot이 더 있으면 handoff 감도가 훨씬 높아진다

### Fixes Added

- `worked-examples/marketplace-transactional.md`
  - `PROJECT-THESIS`, `RESEARCH`, `PRD`, `UX-IA`, `BUSINESS-OPS` representative snippets 추가
- `worked-examples/b2b-pilot-to-paid.md`
  - representative 8-doc snapshot과 traceability table 추가
  - `proof to buy` naming을 canonical wording으로 정리
- `worked-examples/content-community-membership.md`
  - representative 8-doc snapshot과 traceability table 추가
- `worked-examples/README.md`
  - hard-case example이 mini-bundle proof를 포함한다고 명시

### Resulting Read

- hard-case example이 이제 route sketch보다 planning output sample에 더 가까워졌다
- 다음 단계는 이 worked example들을 바탕으로 `.claude` / `.codex` packaging 시 어떤 파일이 skill/agent/reference로 분해될지 매핑하는 것이다

## Loop 22

### Focus

- planning pack `skills` / `agents` 본문을 generic prompt 수준에서 operator contract 수준으로 올리기
- GSD / gstack / OMX 스타일의 조건, 하네스, revision loop, exact output contract를 본문에 더 강하게 반영하기

### Main Finding

- core direction은 맞았지만, producer / checker separation, question-state normalization, state delta semantics, route ambiguity handling이 shared contract와 local body 사이에서 완전히 닫히지 않았다
- 특히 `skills`는 usable했지만 checker handoff contract가 약했고, `agents`는 몇몇 producer body에 checker-style 문구가 남아 있었다

### Fixes Added

- shared references hardening
  - `SKILL-AGENT-CONTRACTS.md`
    - producer / checker envelope 분리
    - `revision_delta` requirement 추가
  - `SYSTEM-IO-SCHEMAS.md`
    - richer `state_updates` delta
    - producer marker mapping
    - canonical `audit_result`
    - `revision_delta` schema
  - `PLANNING-STATE-CONTRACT.md`
    - `question_state` field와 `suppressed` / `superseded` normalization 추가
  - `AUDIT-PROTOCOL.md`
    - severity mapping과 revision delta rule 추가
  - `CONTROL-PLANE.md`
    - `primary archetype` terminology 정리
    - canonical route ambiguity rules 추가
  - `OPERATOR-STARTER.md`
    - ambiguity resolver 추가
- representative skill hardening
  - `idea-discovery`
    - exact prerequisite slot family
    - concrete output envelope example
    - transition table
    - checker handoff contract
  - `problem-validation`
    - exact validation prerequisite slots
    - concrete output envelope example
    - transition table
    - checker handoff contract
  - `mvp-scope`
    - must-have admission test
    - exit criteria
    - concrete output envelope example
    - transition table
    - checker handoff contract
  - `planning-synthesis`
    - upstream minimum gating
    - finish decision table
    - richer output/state example
    - checker telemetry expectations
- agent hardening
  - `discovery-synthesizer`, `problem-validator`, `market-competitor-researcher`
    - producer-only contract 고정
    - not-ready triggers 추가
  - `planning-editor-auditor`
    - checker-only contract 고정
    - audit metadata / counts / state updates 요구
    - repair-instruction wording으로 role 정리
  - remaining producer agents
    - producer-only envelope / revision harness wording으로 통일
  - `positioning-advisor`, `growth-strategist`
    - producer not-ready triggers 추가

### Evaluation Read

- agent body quality
  - `discovery-synthesizer`: `PASS`
  - `problem-validator`: `PASS`
  - `market-competitor-researcher`: `PASS`
  - `planning-editor-auditor`: `NEAR-PASS`
  - `positioning-advisor`: `NEAR-PASS`
  - `growth-strategist`: `NEAR-PASS`
- skill body quality
  - `SYSTEM-IO-SCHEMAS.md`: `PASS`
  - `PLANNING-STATE-CONTRACT.md`: `PASS`
  - `idea-discovery`: `NEAR-PASS`
  - `problem-validation`: `NEAR-PASS`
  - `mvp-scope`: `NEAR-PASS`
  - `planning-synthesis`: `NEAR-PASS`

### Resulting Read

- 본문이 이제 checklist보다 run-contract에 더 가까워졌다
- shared contract와 local body 사이의 drift가 크게 줄었다
- final spot-check 기준 `planning-editor-auditor`, `positioning-advisor`, `growth-strategist`는 `PASS`로 올라왔다
- 다음 hardening target은 `checker telemetry` 완전 폐쇄와 remaining `NEAR-PASS` body의 local exactness 보강이다

## Loop 23

### Wave Focus

- legacy archetype bias를 더 줄이고 cross-domain classifier를 canonical axis로 승격
- hard domain 시나리오:
  - privacy-sensitive mobile habit
  - regulated workflow
  - AI review queue
  - hybrid service operations + offline

### Fixes Added

- canonical axis layer 추가
  - `references/DOMAIN-AXES.md`
  - `README.md`, `CONTROL-PLANE.md`, `OPERATOR-STARTER.md`, `QUESTION-OVERLAYS.md`를 `work_shape + surface_model + loop_model + modifier` 기준으로 재정렬
- projection / schema hardening
  - `PLANNING-RECORD.md`, `PROJECTION-MATRIX.md`, `CANONICAL-CONCEPT-REGISTRY.md`
  - `domain_shape_snapshot`, `workflow_contract`
  - `regulated_workflow_minimum`, `service_ops_minimum`, `offline_operability`, `knowledge_contract`, `review_queue_model`
- core template hardening
  - `PLANNING-RECORD.template.md`
  - `BUSINESS-OPS.template.md`
  - `SCREEN-SPECS.template.md`
  - `EXECUTION-HANDOFF.template.md`
  - `UX-IA.template.md`
  - `ONE-PAGE-CORE-ARTIFACT.template.md`
- synthesis hardening
  - `skills/planning-synthesis/SKILL.md`
  - new domain blocks required / projected / gated

### Evaluation Read

- operator usability
  - `PASS`
- regulated workflow
  - `NEAR-PASS`
- AI review queue
  - `NEAR-PASS`
- hybrid service ops + offline
  - `NEAR-PASS`
- privacy-sensitive mobile habit
  - `NEAR-PASS`

### Main Remaining Gaps

- `draft-review-approve` canonical route에 `mvp-scope`가 약했다
- service/offline exact field set이 control plane과 template 사이에서 완전히 맞지 않았다
- `UX-IA.template.md`가 workflow lifecycle / queue / handoff를 너무 간접적으로만 요구했다
- privacy-sensitive consumer와 `proof_of_value_gate`가 projection / machine-layer에서 1급 시민이 아니었다

## Loop 24

### Fixes Added

- route / starter exactness
  - `README.md`
    - canonical `draft-review-approve` route에 `mvp-scope` 추가
  - `OPERATOR-STARTER.md`
    - AI review queue row에 `MVP boundary` 추가
- workflow / service / offline exactness
  - `UX-IA.template.md`
    - `Workflow Lifecycle / Queue / Handoff Map` 섹션 추가
  - `PLANNING-RECORD.md`, `PLANNING-RECORD.template.md`
    - `dispatch_unit`, `parts_source_of_truth`, `parts_shortage_recovery`, `attachment_capture_policy`, `human_escalation` 추가
  - `BUSINESS-OPS.template.md`, `SCREEN-SPECS.template.md`, `EXECUTION-HANDOFF.template.md`
    - service/offline exact fields를 conditional packs에 반영
  - `PROJECTION-MATRIX.md`, `PLANNING-DONE-CRITERIA.md`
    - service/offline exact field enforcement 강화
- privacy / proof-of-value hardening
  - `PLANNING-RECORD.md`, `PLANNING-RECORD.template.md`
    - `proof_of_value_gate`, `privacy_sensitive_consumer`를 canonical block으로 추가
  - `PROJECTION-MATRIX.md`
    - 두 block을 `SCREEN-SPECS`, `BUSINESS-OPS`, `EXECUTION-HANDOFF`에 projection
  - `skills/planning-synthesis/SKILL.md`
    - required / record writes / quality gate에 반영
  - `BUSINESS-OPS.template.md`, `SCREEN-SPECS.template.md`, `EXECUTION-HANDOFF.template.md`
    - privacy pack과 proof-of-value pack 추가
  - `PLANNING-STATE-CONTRACT.md`, `SYSTEM-IO-SCHEMAS.md`
    - privacy lane를 machine-layer fixture / state example까지 반영

### Re-Check Results

- regulated workflow
  - `PASS`
- AI review queue
  - `PASS`
- hybrid service ops + offline
  - `PASS`
- privacy-sensitive mobile habit
  - `PASS`

### Resulting Read

- pack은 이제 website / SaaS compatibility alias를 유지하면서도, hard workflow / mobile / AI review / hybrid ops domain을 canonical axis model로 다룬다
- 남은 리스크는 구조 결함보다 example density 쪽이다
- 다음 우선순위는 hard-case worked example 4개를 실제 mini-bundle proof까지 채우는 것이다

## Loop 25

### Wave Focus

- 분야 시나리오 기준 재검증
- 대상:
  - 식품 / 로컬 발견형 디렉토리
  - 건축 / 시공 승인 + 현장 협업
  - 공간 / venue booking ops
  - 교육 / cohort learning
  - 헬스케어 / regulated appointment intake
  - 여행 / booking support

### Initial Read

- food/local discovery: `NEAR-PASS`
- architecture/construction: `NEAR-PASS`
- space/venue booking: `NEAR-PASS`
- education: `NEAR-PASS`
- healthcare: `NEAR-PASS`
- travel: `NEAR-PASS`

### Common Failure Pattern

- 특정 업계 전용 pack이 필요한 수준은 아니었음
- 대신 반복되는 domain contract가 코어에 덜 올라와 있었음
- 공통적으로 부족했던 것은:
  - local discovery trust ownership
  - learning progression / grading / completion contract
  - reservation lifecycle / availability booking contract
  - artifact revision / supersession contract
  - regulated delegated access / sensitive communication boundary

## Loop 26

### Fixes Added

- local discovery hardening
  - `local_discovery_trust`
  - `DOMAIN-AXES.md`, `README.md`, `CONTROL-PLANE.md`, `OPERATOR-STARTER.md`
  - `QUESTION-OVERLAYS.md`, `PLANNING-RECORD.md`, `PROJECTION-MATRIX.md`
  - templates and `planning-synthesis`
- learning hardening
  - `learning_progression_contract`
  - cohort-learning starter row
  - progression / grading / completion / recovery projection
- booking hardening
  - `reservation_lifecycle_contract`
  - `availability_booking_contract`
  - travel starter row, venue booking starter row
  - `UX-IA.template.md` lifecycle packs 추가
- architecture / construction hardening
  - `artifact_revision_contract`
  - authoritative revision, supersession, receipt, change-impact, revised schedule
- healthcare hardening
  - `delegated_access_policy`
  - `sensitive_communication_boundary`
  - `required_artifacts`를 regulated workflow core field로 승격
  - regulated appointment/intake starter row 추가
- partner-dependent travel hardening
  - reservation lifecycle에서 external partner source of truth가 보이면 `platform_contract` auto-require

### Final Re-Check Results

- food/local discovery
  - `PASS`
- architecture/construction
  - `PASS`
- space/venue booking
  - `PASS`
- education
  - `PASS`
- healthcare
  - `PASS`
- travel
  - `PASS`

### Resulting Read

- 코어 pack은 이제 product shape뿐 아니라 여러 vertical scenario에서도 수정 없이 적용 가능한 수준까지 올라왔다
- 새로 추가한 contract는 업계 전용 hack이 아니라, 다른 vertical에도 재사용 가능한 일반 계약이다
- 다음 큰 잔여 과제는 structure hardening이 아니라 worked example density와 `.claude` / `.codex` packaging이다

## Loop 27

### Wave Focus

- `SCENARIO-MATRIX-50.md` 기준 50개 시나리오 batch run
- batch runner와 criteria evaluator를 분리
- 목표:
  - industry vertical 전반에서 pack이 generic contract만으로 버티는지 확인
  - producer skill 본문이 실제로 modifier block을 stage-level에서 잡는지 확인

### Pipeline

1. scenario matrix를 6 batch로 분할
2. batch runner가 각 scenario를 현재 pack 기준으로 `PASS / NEAR-PASS / BLOCK` 평가
3. evaluator가 공통 실패를 pack-level 계약 결함으로 일반화
4. reusable contract만 추가하고 vertical-specific hack은 넣지 않음
5. patch 후 실패한 batch만 targeted re-check
6. 최종 verdict와 patch 원인을 로그에 남김

### Initial Failure Patterns

- Batch A
  - waitlist, MOQ, capacity ceiling, deadline exception 같은 constraint/exception path가 generic하게만 표현됨
- Batch B
  - regrade, appeal, callback, progress/streak integrity가 first-class contract가 아니었음
- Batch D
  - ref/template layer는 강했지만 producer skill layer가 `required_modifier_blocks`를 local body에서 충분히 embody하지 않았음
- Batch E
  - `human-review-gated only`와 `reservation_lifecycle` mixed-composition에서 source exemplar의 vocabulary가 남아 있었음
- Batch F
  - `media_membership`가 prose-heavy여서 schema-first enforced contract가 더 필요했음

### Fixes Added

- shared producer-layer hardening
  - `required_modifier_blocks`를 `PLANNING-STATE`, `SYSTEM-IO-SCHEMAS`, `CONTROL-PLANE`, `SKILL-AGENT-CONTRACTS`에 연결
  - 13개 skill 전부에 local `Required Modifier Block Injection` section 추가
  - local fallback rule:
    - state가 비면 `CONTROL-PLANE + PLANNING-RECORD ownership map`으로 재계산
    - non-owner unresolved block은 `open_questions`에 다음 owner skill과 함께 남김
- new canonical blocks
  - `media_membership`
  - `exception_recovery_contract`
- privacy / habit integrity hardening
  - `privacy_sensitive_consumer`에 아래 field 추가
    - `progress_source_of_truth`
    - `streak_reset_rebuild_rule`
    - `sync_conflict_progress_rule`
    - `user_visible_progress_correction_path`
- composition and vocabulary normalization
  - `human-review-gated` only는 `review_queue_model`만 required
  - `knowledge_contract`는 `knowledge-grounded`일 때만 required
  - `reservation_lifecycle_contract`는 travel-only wording을 줄이고
    - `external_or_operational_source_of_truth`
    - `external_write_authority`
    - `schedule_or_state_change_owner`
    - `post_commitment_support_sla`
    - `committed_or_fulfillment_state`
    - `support_or_recovery_flow`
    로 일반화

### Final Re-Check Results

- Batch A
  - `PASS`
- Batch B
  - `PASS`
- Batch C
  - `PASS`
- Batch D
  - `PASS`
- Batch E
  - `PASS`
- Batch F
  - `PASS`
- producer-layer audit
  - `PASS`

### Resulting Read

- 현재 pack은 product shape뿐 아니라 food, travel, education, healthcare, architecture, construction, real estate, legal, finance, insurance, HR, logistics, ecommerce, beauty, wellness, automotive, pets, events, nonprofit, creator economy, developer tools 시나리오까지 broad usable 수준으로 커버한다
- 이번 wave의 핵심 승격은 block 수 증가가 아니라, `producer skill -> planning record -> core docs -> handoff`로 이어지는 modifier block ownership을 local body에 강제한 점이다
- 구조 잔여 과제는 거의 없고, 다음 큰 과제는 worked example density와 eventual `.claude` / `.codex` packaging이다

## Loop 28

### Wave Focus

- 50-scenario runner / evaluator loop를 current pack 기준으로 다시 실행
- 목적:
  - `resolved_route`, stress-signal promotion, owner-skill injection이 runner 관점에서도 실제로 읽히는지 확인
  - template header / canonical naming / visible block home drift를 줄이기
  - composite route가 starter row와 template projection만으로 닫히는지 확인

### Pipeline

1. scenario matrix 50개를 4 runner batch로 분할
2. 각 runner가 현재 pack으로 planning 수행을 가정하고 `PASS / NEAR-PASS / BLOCK`과 route friction을 기록
3. 2 evaluator가 criteria axis 기준으로 결과를 재분석
4. 공통 실패를 pack-level contract gap으로 일반화
5. references / templates / core skill body를 patch
6. 초기 `NEAR-PASS` 시나리오만 targeted recheck
7. 마지막 residual만 다시 recheck 후 evaluator final verdict를 기록

### Initial Failure Patterns

- composite scenario에서 starter row는 있지만 final resolved route가 front door에 덜 보였다
- `UX-IA`에 artifact revision, constraint exception, member access, callback/support handoff 같은 visible home이 부족했다
- service-ops minimum이 repair/parts 편향으로 읽혀 salon / volunteer / sitter 같은 non-repair service에 약간 무거웠다
- membership package ladder / paid boundary가 front door에서 monetization auto-insert와 덜 연결됐다
- some scenarios still needed row stitching:
  - local discovery + booking
  - internal artifact-controlled workflow
  - service marketplace scheduling + support recovery
  - privacy-sensitive role-sharing habit product

### Fixes Added

- control plane
  - `resolved_route`를 route resolver output contract에 추가
  - stress-signal promotion 확장:
    - `no-show`, `schedule change`, `support recovery`, `delivery exception`, `fulfillment failure`
  - `media-membership`에서 package ladder / paid boundary가 shape-changing이면 `monetization-strategy` auto-insert
- operator starter
  - `resolved_route`를 quick route output에 추가
  - package ladder / member access state trigger 추가
  - starter row 추가:
    - `local discovery plus slot booking`
    - `internal artifact-controlled approval workflow`
    - `artifact-controlled internal workflow with step ownership and escalation`
    - `service marketplace with scheduling and support recovery`
    - `coach or advisor habit product with role-sensitive sharing`
  - `Resolved Route Patterns` section 추가
- planning record / templates
  - `service_ops_minimum`
    - `support_or_callback_handoff`
    - `resource_or_fulfillment_note`
    - `parts_*` optional-by-shape 규칙
  - `privacy_sensitive_consumer`
    - `role_based_visibility_boundary`
    - `sensitive_note_sharing_rule`
  - `artifact_revision_contract`
    - `signoff_state_rule`
    - `comment_to_revision_link_rule`
  - `availability_booking_contract`
    - `reschedule_or_followup_owner`
  - `media_membership`
    - `member_access_state_rule`
    - `paid_boundary_trigger`
    - `support_recovery_sla`
- `UX-IA.template.md`
  - `knowledge_contract` / `review_queue_model` split
  - `privacy_sensitive_consumer`, `artifact_revision_contract`, `constraint_exception_contract` conditional flow packs 추가
  - `ux.membership_boundary_flow`에 member access / paid boundary recovery flow 추가
- skill body
  - `idea-discovery`, `planning-synthesis`에 `resolved_route`, `triggered_stress_signals`, `auto_inserted_owner_skills` handling 추가

### Targeted Recheck Results

- first recheck
  - `2`, `7`, `8`, `12`, `18`, `20`, `26`, `33`, `37`, `40`, `49`, `50` -> `PASS`
  - `4`, `24`, `34`, `39`, `44`, `47` -> residual gap만 남음
- final residual recheck after service-ops-neutrality and front-door patches
  - `4`, `24`, `34`, `39`, `44`, `47` -> `PASS`

### Final Evaluator Read

- `operator usability` -> `PASS`
- `route determinism` -> `PASS`
- `template usability` -> `NEAR-PASS`
- `domain generalization` -> `PASS`
- `production readiness` -> `NEAR-PASS`

### Resulting Read

- 현재 pack은 `Broad Usable` 상태를 더 단단하게 통과했고, `Production-Ready`에 가까워졌다
- 남은 핵심 잔여는 구조 결함이 아니라:
  - `UX-IA` naming canonicalization 마무리
  - thinner onboarding / default resolved-route surface
  - eventual `.claude` / `.codex` packaging

## Loop 29

### Wave Focus

- broad structure는 유지한 채, 마지막 evaluator gap인 `operator onboarding surface`와 `UX-IA naming drift`만 focused loop로 검증
- 목표:
  - first-time operator가 starter matrix 전체를 훑지 않아도 되는 thin route surface 만들기
  - membership / platform / artifact workflow에서 operator가 UX projection home을 바로 찾게 만들기

### Pipeline

1. current evaluator gap을 `operator usability`, `template usability`, `production-readiness delta`로 축소
2. thin surface와 naming patch를 먼저 넣음
3. 대표 residual scenario만 runner에게 재평가시킴
4. evaluator에게 focused verdict를 다시 받음
5. broad coverage를 깨지 않는지 확인하고 loop log를 갱신

### Fixes Added

- new thin onboarding surface:
  - [DEFAULT-RESOLVED-ROUTES.md](references/DEFAULT-RESOLVED-ROUTES.md)
- `README.md`
  - `Light Start`에서 default resolved route surface를 first entry로 승격
- `UX-IA.template.md`
  - conditional pack naming을 더 canonical하게 정렬:
    - `trust_ops_minimum`
    - `regulated_workflow_minimum`
    - `service_ops_minimum`
    - `learning_progression_contract`
    - `reservation_lifecycle_contract`
    - `availability_booking_contract`
  - `platform_contract` UX pack 추가
  - `ux.membership_boundary_flow`에 `media_membership` UX projection alias 명시
- `DEFAULT-RESOLVED-ROUTES.md`
  - `artifact-controlled internal workflow` row 추가
  - membership / platform stress shortcut 보강

### Focused Runner Results

- scenario `20`
  - `PASS`
  - local discovery + booking route picking friction이 thin surface에서 바로 닫힘
- scenario `34`
  - initial focused run: `NEAR-PASS`
  - after `artifact-controlled internal workflow` default row 추가: `PASS`
- scenario `40`
  - `PASS`
  - role-sensitive sharing + privacy flow가 thin surface에서도 자연스럽게 읽힘
- scenario `44`
  - `PASS`
  - marketplace/service scheduling + support recovery route가 quick surface에서 읽힘
- scenario `49`
  - initial focused run: `NEAR-PASS`
  - after membership UX alias patch: `PASS`
- scenario `50`
  - initial focused run: `NEAR-PASS`
  - after `platform_contract` UX pack 추가: `PASS`

### Evaluator Read

- `operator usability` -> `PASS`
- `template usability` -> `NEAR-PASS`
- `production-readiness delta` -> `NEAR-PASS`
- verdict:
  - `Broad Usable` 유지
  - `Production-Ready`에 더 가까워짐

### Resulting Read

- current pack은 구조적 planning contract 관점에서는 상당히 단단하다
- 남은 일은 코어 routing / doc projection / modifier handling이 아니라:
  - template naming polish
  - thinner packaging / onboarding
  - `.claude` / `.codex` packaging

## Loop 30

### Wave Focus

- 마지막 non-structural gap을 줄이기 위한 polish loop
- 목표:
  - single operator onboarding path를 더 명확히 하기
  - packaging readiness를 guide 수준까지 끌어올리기
  - evaluator가 남기는 residual gap을 실제 packaging execution으로만 축소하기

### Pipeline

1. remaining evaluator gaps를 onboarding / packaging / naming으로 축소
2. helper docs를 추가하고 stale summary를 현재 방향에 맞게 갱신
3. first-time runner sanity check를 수행
4. evaluator에게 `operator usability`, `onboarding completeness`, `packaging readiness`, `production-readiness delta`만 재판정시킴

### Fixes Added

- onboarding
  - [references/START-HERE.md](references/START-HERE.md) 추가
  - `README.md`의 `Light Start`를 `START-HERE -> DEFAULT-RESOLVED-ROUTES -> OPERATOR-STARTER` 순으로 재정렬
- packaging guidance
  - [references/PACKAGING-READINESS.md](references/PACKAGING-READINESS.md) 보강
  - [references/PACKAGING-IMPORT-GUIDE.md](references/PACKAGING-IMPORT-GUIDE.md) 추가
- template/operator polish
  - `UX-IA.template.md`에 `canonical_projection_map` 추가
  - `platform_contract` UX pack 추가
  - `ux.membership_boundary_flow`와 `ux.exception_recovery_flow`가 projection alias라는 점을 더 명시
- stale draft cleanup
  - `PLANNING-PACK-1ST-DRAFT.md`를 worked-example 중심에서 packaging/operator polish 중심으로 갱신

### Focused Runner Read

- scenario `20`
  - `PASS`
  - thin start path가 booking/discovery route picking friction을 줄임
- scenario `44`
  - `PASS`
  - marketplace/service scheduling route picking friction이 낮아짐
- scenario `49`
  - `PASS`
  - membership/progression path와 UX projection home이 더 명확해짐
- scenario `50`
  - `PASS`
  - platform/integration start path와 UX projection이 더 명확해짐
  - residual은 route 문제가 아니라 아직 실제 packaging execution이 아니라는 점

### Evaluator Read

- `operator usability` -> `PASS`
- `onboarding completeness` -> `PASS`
- `packaging readiness` -> `NEAR-PASS`
- `production-readiness delta` -> `NEAR-PASS`

### Resulting Read

- 이제 evaluator가 남기는 핵심 residual은 planning-pack structure가 아니라 actual packaging execution이다
- 즉 current pack은:
  - planning system / question system / output contract / onboarding helper 관점에서는 충분히 성숙
  - 남은 일은 `.claude` / `.codex` packaging execution과 packaged-form validation

## Loops 31-40

### Wave Type

- 50-scenario compressed regression wave
- planning-only pack 재검증
- runner 4 lanes + evaluator 2 lanes 기준으로 돌리고, 느린 lane은 local completion으로 메웠다

### Pipeline

1. 50-scenario matrix를 다시 runner lanes로 분할
2. runner가 각 scenario를 current planning-only pack으로 처리 가능한지 `PASS / NEAR-PASS / BLOCK`으로 판단
3. evaluator가 `operator usability`, `route determinism`, `question quality`, `weight control`, `output completeness`, `handoff usability`, `reuse usability`, `domain generalization`을 재판정
4. 공통 residual만 pack-level contract로 일반화
5. entry surface, modifier/block alias clarity, neutral wording만 얇게 패치
6. packaging이나 implementation 범위로 새 요구를 늘리지 않고 planning-only pack 안에서 마감

### Scenario Read

- scenarios `1-13`: `PASS`
- scenarios `14-26`: `PASS`
- scenarios `27-38`: local completion 기준 `PASS`
- scenarios `39-50`: `PASS`

batch `27-38` local read 요약:

- finance privacy habit, regulated review, regulated booking, insurance claims/rework, offline field workflow, candidate scheduling은 기존 regulated / booking / privacy / offline lanes로 무수정 수용 가능
- recruiting queue, onboarding checklist, logistics dispatch, dock booking, local discovery marketplace, order support workflow도 기존 review / artifact / service ops / local discovery / reservation lifecycle lanes로 무수정 수용 가능

### Evaluator Read

- `operator usability` -> `PASS`
- `route determinism` -> `NEAR-PASS`
- `question quality` -> `PASS`
- `weight control` -> `NEAR-PASS`
- `output completeness` -> `PASS`
- `handoff usability` -> `PASS`
- `reuse usability` -> `PASS`
- `domain generalization` -> `PASS`

### Repeated Residuals

- first-time operator 관점에서는 thin front door와 canonical docs 사이의 한 번 더 올라가는 hop이 남아 있었다
- modifier display name과 canonical block key가 달라 보이는 naming drift가 마지막 해석 비용으로 남아 있었다
- `BUSINESS-OPS` 같은 문서 이름이 non-commercial workflow에서는 약간 commercial-first로 읽힐 수 있었다
- 일부 evaluator는 top-level entry surface를 찾으려다가 `references/` 아래 canonical docs까지 한 번 더 내려가야 했다

### Fixes Added

- top-level wrapper docs 추가:
  - `START-HERE.md`
  - `DEFAULT-RESOLVED-ROUTES.md`
- `references/START-HERE.md`
  - modifier display name -> canonical block key quick map 추가
- `references/CONTROL-PLANE.md`
  - modifier -> block alias 규약을 classifier 가까이에 추가
- `references/CORE-DOCUMENT-SET.md`
  - `8-document core set including PLANNING-RECORD` wording으로 통일
  - `BUSINESS-OPS`의 non-commercial usage note 추가
- `templates/BUSINESS-OPS.template.md`
  - internal / nonprofit / public-service workflow에서도 그대로 쓰는 문서라는 note 추가
- `README.md`
  - core bundle wording을 `8-document core set including PLANNING-RECORD`로 정렬

### Resulting Read

- 구조적 blocker는 나오지 않았다
- 현재 planning-only pack은 다시 한 번 `Broad Usable`을 통과했고, residual은 mostly terminology / entry-surface polish로 줄었다
- planning skill / agent layer는 release-candidate 수준으로 본다

## Loop 41

### Wave Type

- real-use proxy loop
- structure review가 아니라 simulated user run + evaluator pass

### Pipeline

1. incomplete input을 가진 user-proxy runner 4개를 돌렸다
2. 각 runner가 실제 founder/operator처럼 route 선택, 질문 진행, 답변 생성, planning output 정리를 시뮬레이션했다
3. evaluator 2개가 `실제로 유용했는가`, `handoff 가능했는가`, `다음 변경 시 업데이트 경로가 보이는가`를 기준으로 평가했다
4. 공통 residual만 pack-level patch로 반영했다

### User-Proxy Scenarios

- local bakery discovery map
- regulated clinic intake workflow
- architecture fit-out approval + site execution
- creator membership + challenge progression

### Real-Use Read

- `question quality` -> `PASS`
- `real-user usefulness` -> `PASS`
- `output completeness` -> `PASS`
- `handoff usability` -> `PASS`
- `reuse usability` -> `PASS`
- `domain generalization` -> `PASS`
- `operator usability` -> `NEAR-PASS`
- `weight control` -> `NEAR-PASS`
- `update usability` -> `NEAR-PASS`

### Repeated Residuals

- fuzzy or mixed start에서 front door가 아직 조금 무겁게 느껴졌다
- modifier display name과 canonical block key 해석 비용이 남아 있었다
- non-commercial workflow에서 `BUSINESS-OPS`가 약간 commercial-first로 읽혔다
- 기존 planning output을 수정할 때 어디부터 고칠지 빠른 진입면이 약했다
- `local_discovery_trust`는 존재하지만 UX-facing projection이 booking/platform/review packs만큼 눈에 띄지 않았다

### Fixes Added

- `references/UPDATE-ENTRY-MAP.md` 추가
- `references/START-HERE.md`에 fuzzy-start rule 추가
- update 상황이면 `UPDATE-ENTRY-MAP.md`로 바로 가는 entry 추가
- `UX-IA.template.md`에 `local_discovery_trust` UX projection 추가
- `README.md`와 `CORE-DOCUMENT-SET.md`에 update helper 연결

### Resulting Read

- 이번 wave는 처음으로 실제 사용자 프록시 관점에서 `쓸만한가`를 직접 봤고, 결과는 `Broad Usable` 유지다
- 남은 건 구조 결함이 아니라 operator polish다
