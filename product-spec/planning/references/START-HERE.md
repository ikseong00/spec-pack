# Start Here

이 문서는 planning pack을 처음 쓰는 operator를 위한 가장 얇은 시작면이다.

원칙:

- 이 문서만 읽고도 첫 route를 고를 수 있어야 한다
- 애매해지면 [DEFAULT-RESOLVED-ROUTES.md](DEFAULT-RESOLVED-ROUTES.md), [OPERATOR-STARTER.md](OPERATOR-STARTER.md), [CONTROL-PLANE.md](CONTROL-PLANE.md) 순으로 올라간다
- canonical rule은 helper보다 항상 위 문서를 우선한다

## 0. Modifier Name And Block Name

modifier display name과 planning-record block name은 일부러 분리돼 있다.

- modifier는 operator가 읽는 이름이다
- block은 planning record, projection, template에 쓰는 canonical key다

자주 쓰는 매핑:

- `regulated-workflow` -> `regulated_workflow_minimum`
- `commerce-transactional` -> `trust_ops_minimum`
- `service-operations-workflow` -> `service_ops_minimum`
- `knowledge-grounded` -> `knowledge_contract`
- `human-review-gated` -> `review_queue_model`
- `privacy-sensitive-consumer` -> `privacy_sensitive_consumer`
- `local-discovery-trust` -> `local_discovery_trust`
- `learning-progression` -> `learning_progression_contract`
- `reservation-lifecycle` -> `reservation_lifecycle_contract`
- `artifact-revision-controlled` -> `artifact_revision_contract`
- `availability-booking` -> `availability_booking_contract`

헷갈리면 modifier는 [CONTROL-PLANE.md](CONTROL-PLANE.md), block projection은 [PLANNING-RECORD.md](PLANNING-RECORD.md)와 [PROJECTION-MATRIX.md](PROJECTION-MATRIX.md)를 우선한다.

## 1. 정말 최소로 고를 것

아래 3개만 먼저 정한다.

1. 이 제품은 어떤 shape에 가깝나
   - `directory/discovery`
   - `consumer app`
   - `workflow/internal ops`
   - `review/approval`
   - `marketplace/transaction`
   - `content/membership`
   - `platform/integration`
   - `service ops/offline`
2. 지금 가장 비어 있는 건 뭔가
   - `discover`
   - `validate`
   - `research`
   - `scope`
   - `flow`
   - `rollout`
   - `synthesize`
3. 지금 pace는 어떤가
   - `fast`
   - `standard`
   - `full`

### Fuzzy Start Rule

완전히 섞여 있거나 애매하면 정확히 맞추려 하지 말고 아래만 먼저 고른다.

- 가장 큰 실패가 discovery/trust/booking/review/workflow 중 무엇인지
- 가장 가까운 shape 1개
- pace 1개

그리고 첫 route만 시작한다. composite 정밀화는 한 턴 뒤에 올려도 된다.

## 2. 기본 시작 순서

1. [DEFAULT-RESOLVED-ROUTES.md](DEFAULT-RESOLVED-ROUTES.md)에서 가장 가까운 row 1개를 고른다
2. stress trigger가 보이면 같이 적는다
3. 아래 quick route card를 채운다
4. `starting_skill`부터 시작한다
5. row가 2개 이상 겹치거나 regulated/platform/enterprise signal이 보이면 [OPERATOR-STARTER.md](OPERATOR-STARTER.md)로 올라간다

이게 이 pack의 single operator onboarding path다.

## 3. Quick Route Card

```md
- selected_shape:
- current_gap:
- pace:
- stress_triggers:
- starting_skill:
- resolved_route:
- required_modifier_set:
- required_blocks_before_scope_freeze:
- when_to_escalate:
```

## 4. Fast Defaults

- discovery / directory / local guide
  - start: `idea-discovery`
- consumer app / habit / weak evidence
  - start: `idea-discovery`
  - expect: `hypothesis-validation`
- workflow / internal tool / source of truth
  - start: `idea-discovery`
  - expect: `data-source-strategy`
- review / approval / queue
  - start: `idea-discovery`
  - expect: `ux-use-case-strategy`, `stakeholder-rollout-strategy`
- marketplace / booking / transaction
  - start: `idea-discovery`
  - expect: `market-competitor-research`, `data-source-strategy`, `stakeholder-rollout-strategy`
- content / membership / progression
  - start: `idea-discovery`
  - expect: `acquisition-retention-strategy`, `monetization-strategy`
- platform / integration
  - start: `idea-discovery`
  - expect: `data-source-strategy`

## 5. Stress Trigger Cheatsheet

- `waitlist`, `capacity`, `double-book`, `MOQ`
  - add `constraint_exception_contract`
- `appeal`, `regrade`, `callback`, `no-show`, `schedule change`, `support recovery`
  - add `exception_recovery_contract`
- `freshness`, `duplicate`, `claim`, `ranking trust`
  - add `local_discovery_trust`
- `package ladder`, `paywall`, `member access`
  - add `media_membership`
  - if product shape changes, also pull `monetization-strategy`
- `auth`, `install`, `sync`, `rollback`, `status`
  - make `platform_contract` explicit
- `required artifacts`, `signoff`, `step owner`, `escalation`
  - consider `artifact_revision_contract`

## 6. Escalate Immediately If

- source of truth가 아직 불명확하다
- buyer / payer / approver / admin이 갈린다
- regulated / offline / service ops signal이 강하다
- queue / SLA / recovery / support가 제품 shape를 바꾼다
- 같은 질문을 다시 하고 있다는 느낌이 든다

이 경우는 [OPERATOR-STARTER.md](OPERATOR-STARTER.md)와 [CONTROL-PLANE.md](CONTROL-PLANE.md) 기준으로 다시 route를 고른다

## 7. If Packaging Or Import Matters

실제 `.claude` / `.codex` import 관점에서 보면 아래 순서를 따른다.

1. 이 문서
2. [DEFAULT-RESOLVED-ROUTES.md](DEFAULT-RESOLVED-ROUTES.md)
3. [OPERATOR-STARTER.md](OPERATOR-STARTER.md)
4. [PACKAGING-IMPORT-GUIDE.md](PACKAGING-IMPORT-GUIDE.md)

## 8. If You Are Updating Existing Docs

기존 planning output을 수정하는 상황이면 [UPDATE-ENTRY-MAP.md](UPDATE-ENTRY-MAP.md)부터 본다.
