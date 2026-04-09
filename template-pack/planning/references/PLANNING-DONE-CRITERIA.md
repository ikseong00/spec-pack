# Planning Done Criteria

이 문서는 planning pack이 "기획을 충분히 끝냈다"라고 판단할 최소 기준을 정의한다.

목표는 완벽한 확실성이 아니라 다음 단계가 같은 질문을 반복하지 않게 만드는 것이다.

## 1. Hard Gate

아래는 빠지면 planning done으로 보지 않는다.

- `target user`가 명확하다
- `why_this_segment_first`가 설명 가능하다
- `problem statement`가 명확하다
- `current alternative` 또는 현재 workaround가 명확하다
- `moment of need`, `trigger`, `context of use`가 명확하다
- 최근 실제 사례가 최소 1-3개 수준으로 확인되었고, strong claim에는 direct-user 또는 observed-behavior evidence가 최소 1개 있다
- 대표 유스케이스가 정리되었다
- `facts / assumptions / decisions / open_questions`가 분리되었다
- `work_shape`, `surface_model`, `loop_model`, 필요한 `modifier overlay`가 정해졌다
- legacy `primary archetype`은 있으면 compatibility alias로 남겼다
- MVP가 `must-have / defer / out-of-scope`로 잘렸다
- 핵심 사용자 flow와 first value moment가 정의되었다
- 필요한 데이터소스와 운영 의존성이 정리되었다
- `primary_adoption_or_intake_motion`과 그 경로가 작동한다고 볼 하나의 falsifiable claim과 threshold가 정리되었다
- `minimum_viability_note`가 있다
- `first_customer_path`와 proof required to buy가 정리되었다
- `success_metrics`와 주요 `guardrail_metrics`가 있다
- 가장 위험한 가설 또는 다음 검증 질문이 정리되었다
- monetization이 product shape를 바꾸면 `first_revenue_motion`, pricing boundary, buyer / payer / trigger가 정리되었다

## 2. Planning Success Conditions

planning 품질이 충분하다고 보려면 아래도 보여야 한다.

- 문제의 강도와 빈도에 대한 근거가 있다
- 타깃이 너무 넓지 않다
- 왜 기존 대안보다 나은지 설명 가능하다
- 왜 지금 이 제품을 만들 가치가 있는지 설명 가능하다
- 무엇을 일부러 하지 않을지 정해져 있다
- acquisition, adoption, activation, retention, monetization 중 relevant 항목이 정리되었다
- first 10 users / leads / accounts / cases / work items가 어디서 오고 어떻게 들어오는지 rough하게 설명 가능하다
- 신뢰 저해 요소와 주요 legal / ops / dependency risk가 정리되었다
- buyer / user / approver / admin 분리가 필요한 경우 반영되었다
- cost-to-serve나 support burden을 완전히 무시하지 않는다
- 문서를 읽은 다음 단계 사람이 같은 discovery 질문을 다시 하지 않아도 된다

## 2.5 Documentation Readiness

planning done은 생각이 정리된 상태만이 아니라, 설계 / 구현 / 유지보수에 재사용할 수 있는 문서 세트가 생긴 상태여야 한다.

- core document set이 모두 존재한다
- 각 문서는 자기 책임 범위가 명확하다
- 문서 간 중복은 있어도 source of truth 충돌은 없다
- 각 문서는 `status`, `owner`, `last_updated`, `source_of_truth_for`, `update_when`, `open_questions`, `change_log`를 가진다
- `source_of_truth_for` concept는 canonical doc 하나만 소유한다
- `source_of_truth_for`는 `CANONICAL-CONCEPT-REGISTRY.md`에 있는 canonical concept ID만 사용한다
- `One-Page Core Artifact`는 있더라도 derived-only이며 canonical doc를 override하지 않는다
- derived doc는 `derived_from`으로 owning doc dependency를 빠짐없이 선언한다
- owning doc가 바뀌었는데 downstream or derived doc가 아직 반영되지 않았으면 `stale`로 취급된다
- 설계자는 해당 문서만 보고 구조와 우선순위를 판단할 수 있다
- 구현자는 해당 문서만 보고 phase / task와 acceptance 기준을 나눌 수 있다
- 유지보수나 새 기능 추가 시 기존 결정 이유와 변경 포인트를 추적할 수 있다
- 각 문서는 update trigger와 owner가 적혀 있어 living doc으로 운영 가능하다
- `UX-IA.md`는 first-time / repeat / recovery, IA, navigation, page map 또는 queue/lifecycle/handoff map을 담아야 한다
- `SCREEN-SPECS.md`는 states, edge cases, dependencies, acceptance notes와 applicable한 surface/queue/permission/connectivity state를 담아야 한다
- `EXECUTION-HANDOFF.md`는 non-functional notes, exact next input, update checklist, traceability를 담아야 한다
- `PLANNING-RECORD.md`는 최소 `domain_shape_snapshot`과 applicable한 `workflow_contract`를 담아야 한다
- conditional block은 owning doc으로 projection되어야 한다
- one-page fixed slot은 [PROJECTION-MATRIX.md](PROJECTION-MATRIX.md)의 `Fixed Slot Ownership`과 일치해야 한다
- `must_have` item과 relevant conditional block은 screen / phase / task / acceptance로 traceability가 있어야 한다

core document set의 기본 구성은 아래를 뜻한다.

- `PROJECT-THESIS.md`
- `PLANNING-RECORD.md`
- `RESEARCH.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`

## 3. Ready For Next Step

planning done은 아래 문장이 가능해야 한다.

- "다음으로 무엇을 검증할지" 한 문장으로 말할 수 있다
- 또는 "이제 무엇을 만들지" 한 문장으로 말할 수 있다

즉, planning 결과는 아래 둘 중 하나를 바로 낼 수 있어야 한다.

- `next experiment`
- `next implementation input`

추가로 아래도 가능해야 한다.

- "어느 문서가 다음 설계 판단의 source of truth인지" 한 문장으로 말할 수 있다
- "새 기능이 들어오면 어느 문서를 먼저 업데이트해야 하는지" 설명할 수 있다

## 4. Evidence Standard

좋은 planning은 확신만 높은 문서가 아니다.

- 사실과 추정을 섞지 않는다
- 근거가 약한 결정은 low confidence로 남긴다
- 외부 evidence가 필요한 질문은 open question으로 남긴다
- unresolved contradiction을 summary 속에 숨기지 않는다
- strong claim은 `source_ref`와 freshness 정보 없이 high-confidence로 두지 않는다

## 4.5 Fast Pace Allowance

`fast` pace는 아무거나 생략해도 된다는 뜻이 아니다.

- acquisition / monetization / data / rollout이 product shape를 바꾸지 않으면 `low-confidence` note + `next_experiment`로 임시 통과할 수 있다
- 반대로 그 축이 product shape를 바꾸면 `fast`여도 생략하지 않는다
- 즉 `fast`는 fewer questions가 아니라, shallower evidence with explicit uncertainty다
- 운영 가이드로는 primary question 8-12개, recent-example bundle 1개, primary use-case card 1개 정도를 기본 상한으로 본다

## 5. Archetype-Specific Minimums

모든 archetype가 같은 질문 깊이를 요구하지는 않는다.

### public-website-lead-gen-seo

- acquisition source와 conversion action이 있다
- first lead source와 response owner가 있다
- qualified lead 또는 close-quality threshold가 rough하게라도 있다
- SEO / local / directory 의존성이 있으면 명시되었다
- brochure / landing / local-service / simple directory면 `compression_mode = public-website-lite`가 정리되었다
- `public-website-lite`면 retention은 full product loop 대신 minimal re-engagement 또는 branded return note로 남길 수 있다
- `public-website-lite`면 monetization은 direct가 아니라 indirect or offsite revenue note여도 된다
- directory면 canonical entity model, duplicate rule, freshness owner, claim or moderation timing이 정리되었다
- directory or local discovery product면 `local_discovery_trust`가 있고 popularity/recommendation trust policy가 정리되었다

### consumer-saas

- activation event와 retention loop가 있다
- free / trial / paid 경계가 있으면 정리되었다
- primary acquisition loop와 upgrade proof가 있고, signup -> activated threshold와 retained or paid threshold 중 하나는 있다
- habit loop product인지 one-shot utility인지 갈라졌고, 그에 맞는 evidence gate가 있다
- weak-evidence, habit, retention, paywall이 product shape를 바꾸면 `consumer_evidence_gate`가 있고 falsification signal, pass threshold, owner, timebox, decision-if-false, kill threshold가 정리되었다
- 위 조건이면 `proof_of_value_gate`가 있고 proof-of-value threshold, owner, measurement window, experiment-to-build promotion rule이 정리되었다
- 위 조건이면 paywall boundary, habit trigger, reactivation path, cohort or sample requirement, measurement window가 정리되었다
- 위 조건이면 promotion rule이 충족되기 전에는 `next_implementation_input`이 아니라 `next_experiment`와 experiment-mode handoff가 있어야 한다

### privacy-sensitive-consumer

- notification permission, reminder cadence, lock-screen sensitivity, local-vs-sync boundary가 정리되었다
- progress source of truth, streak reset or rebuild rule, sync conflict progress rule, user-visible progress correction path가 정리되었다
- export / delete / reset owner와 behavior가 정리되었다
- background delivery failure나 reactivation path가 정리되었다
- 위 항목이 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### b2b-saas

- buyer / user / approver / admin이 필요 시 분리되었다
- adoption blocker와 rollout assumption이 있다
- proof required to buy, buying committee path, lead -> meeting threshold와 pilot -> paid threshold 중 하나는 있다

### self-serve-to-enterprise

- `expansion_model`이 있고 stage role map, package ladder, sales handoff trigger, pilot success criteria, enterprise entitlements, security or procurement gates, stage thresholds가 정리되었다
- self-serve onboarding, admin/security review, procurement, pilot, contract conversion 중 무엇이 product artifact이고 무엇이 off-product process인지 분리되었다
- entitlement가 어느 stage에서 unlock되는지 정리되었다
- `next_implementation_input`로 가려면 buyer / payer / proof-to-buy / pilot success / entitlement unlock timing이 `SCREEN-SPECS.md`와 `EXECUTION-HANDOFF.md`에 projection되었다

### regulated-workflow

- `regulated_workflow_minimum`이 있다
- policy source of truth와 approval owner가 명확하다
- queue/worklist model, case state model, required artifacts, role-permission map이 있다
- audit trail minimum, override reason policy, offline phone/fax path가 있다
- denial/rework/escalation path와 SLA owner가 있다
- delegated access policy와 sensitive communication boundary가 필요한 경우 정리되었다
- versioned approval artifact가 있으면 `artifact_revision_contract`가 있다
- 위 항목이 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되었다
- 위 항목 중 하나라도 unresolved면 planning done으로 보지 않는다

### service-operations-workflow

- `service_ops_minimum`이 있다
- job lifecycle, dispatch owner, dispatch unit, scheduling constraint, service-window policy가 정리되었다
- exception queue, phone-support handoff, callback/support handoff, proof-of-service가 정리되었다
- `parts_*` fields는 inventory/equipment/fulfillment dependency가 있는 shape에서만 required고, 없는 shape에서는 `resource_or_fulfillment_note` 또는 explicit `N/A`로 처리한다
- first-time-fix / revisit / schedule adherence 같은 operational success signal이 있다
- field/mobile 역할이 있으면 `offline_operability` 여부가 explicit하다

### learning-progression

- `learning_progression_contract`가 있다
- progression unit, unlock/prerequisite rule, cohort calendar or due window가 정리되었다
- submission/retry policy, grading/review owner and SLA, completion source of truth, learner recovery path가 정리되었다
- 위 항목이 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### reservation-lifecycle

- `reservation_lifecycle_contract`가 있다
- booking/reservation state model, external or operational source of truth, external write authority가 정리되었다
- schedule or state change owner, reissue/rebook/cancel/return rule, post-commitment support SLA가 정리되었다
- external partner source of truth가 있으면 `platform_contract`도 같이 정리되었다
- 위 항목이 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### availability-booking

- `availability_booking_contract`가 있다
- bookable unit, availability source of truth, hold expiry, turnaround buffer가 정리되었다
- blackout/override policy, double-book resolution, onsite exception policy, customer communication trigger map이 정리되었다
- 위 항목이 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### constraint-exception-controlled

- `constraint_exception_contract`가 있다
- authority source, threshold or ceiling, exception trigger, manual owner, recovery or promotion rule이 정리되었다
- 위 항목이 `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### media-membership

- `media_membership`가 있다
- free boundary, package ladder, entitlement unlock rule이 정리되었다
- member access state rule과 paid boundary trigger가 정리되었다
- moderation owner, support owner or SLA, editorial freshness owner, refund or cancel policy가 정리되었다
- 위 항목이 `UX-IA.md`, `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### exception-recovery-contract

- `exception_recovery_contract`가 있다
- state source of truth, override or exception owner, user-visible recovery path가 정리되었다
- communication boundary, audit or event requirement, appeal/regrade/callback rule, timeout or SLA가 정리되었다
- 위 항목이 `UX-IA.md`, `BUSINESS-OPS.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### offline-operability

- minimum usable capabilities와 local write authority가 정리되었다
- sync trigger, conflict resolution, degraded write boundary, attachment capture policy, human escalation, restore signal이 정리되었다
- 위 항목이 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### knowledge-grounded

- `knowledge_contract` 또는 equivalent source policy가 있다
- allowed / forbidden source set, freshness owner, citation rule이 정리되었다
- stale / missing source fallback과 override rule이 정리되었다
- 위 항목이 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### human-review-gated

- `review_queue_model`이 있다
- review queue owner / SLA, approval threshold, override rule, wrong-output recovery가 정리되었다
- knowledge-grounded가 같이 active가 아니면 citation/source-policy를 자동 요구하지 않는다
- 위 항목이 `SCREEN-SPECS.md`, `BUSINESS-OPS.md`, `EXECUTION-HANDOFF.md`에 projection되었다

### marketplace

- supply / demand 어느 쪽을 먼저 푸는지 정해졌다
- trust, liquidity, fulfillment risk가 정리되었다
- `commerce-transactional`이면 `trust_ops_minimum`이 있고 abuse vector, detection signal, provider verification, dispute/refund/no-show owner, payout/settlement owner, user-visible remedy, manual-review path or SLA, escalation owner, reversal or refund path, rollout coupling rule, rollout unit, liquidity stop condition이 정리되었다
- 위 항목이 final scope freeze 전에 정리되지 않았으면 planning done으로 보지 않는다

### content-community

- content supply model과 trust / moderation risk가 있다
- 참여 루프 또는 구독 경계가 정리되었다
- membership shape가 있으면 `media_membership`가 있고 support owner or SLA와 moderation owner가 정리되었다

### platform-integration

- integration contract, auth model, onboarding friction이 정리되었다
- reliability 또는 dependency risk가 정리되었다
- key lifecycle, retry/idempotency, versioning/deprecation, recovery path, developer onboarding/support surface가 정리되었다
- support owner or SLA, incident owner, rollback boundary가 정리되었다

## 6. Failure Signals

아래 상태면 planning을 더 진행해야 한다.

- 기능 목록은 많은데 대표 유스케이스가 약하다
- 문제보다 솔루션 설명이 앞선다
- 경쟁사 기능 나열은 있는데 포지셔닝 차이가 없다
- 데이터소스 또는 운영 현실이 비어 있다
- metrics가 마지막에 억지로 붙었다
- acquisition이나 success path가 plausible story로만 남아 있다
- monetization이 product shape를 바꾸는데도 그 질문이 계속 뒤로 밀려 있다
- success path는 약한데 monetization만 앞서서 과도하게 구체적이다
- weak-evidence consumer인데 proof-of-value gate 없이 paywall / pricing depth만 먼저 커졌다
- `commerce-transactional`인데 trust-ops가 owner / detection / remedy / reversal 수준까지 안 내려갔다
- membership product인데 support owner 또는 moderation owner가 마지막까지 implicit하게 남아 있다
- regulated-workflow인데 approval matrix, policy source of truth, audit trail minimum, denial/rework path가 notes에만 있고 flow/state/owner로 모델링되지 않았다
- versioned approval artifact가 있는데 authoritative revision, supersession, handoff receipt, change-impact linkage가 없다
- service-operations-workflow인데 dispatch/lifecycle/parts/exception queue가 generic ops note로만 남아 있다
- local discovery product인데 entity model, freshness owner, duplicate/claim handling, popularity trust policy가 없다
- learning product인데 progression, grading, completion, learner recovery contract가 없다
- booking/support product인데 reservation lifecycle, external or operational source of truth, change owner, disruption support SLA가 없다
- fixed-asset or slot booking product인데 availability authority, hold expiry, buffer, blackout rule, double-book resolution이 없다
- threshold/ceiling-driven product인데 limit authority, exception trigger, manual owner, recovery rule이 없다
- mobile-native privacy-sensitive product인데 permission, reminder, lock-screen, delete/export boundary가 설계 변수로 안 올라왔다
- knowledge-grounded product인데 source policy, freshness owner, citation rule이 없다
- human-review-gated product인데 review queue, approval threshold, wrong-output recovery가 없다
- work-shape / surface / loop를 골랐지만 `PLANNING-RECORD`, `UX-IA`, `SCREEN-SPECS`, `EXECUTION-HANDOFF`에 그 차이가 projection되지 않았다
- first value path가 없다
- 첫 acquisition motion과 owner가 없다
- next step이 모호하다
- 문서 목록은 있는데 설계 / 구현 / 유지보수에 누가 무엇을 봐야 하는지 모호하다
- planning output이 summary 한 장에만 갇혀 있고 doc bundle로 분해되지 않는다
- update trigger나 owner가 없어 문서가 snapshot으로만 남는다
