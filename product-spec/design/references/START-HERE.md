# Start Here

이 문서는 design pack을 처음 쓰는 operator를 위한 가장 얇은 시작면이다.

원칙:

- 이 문서만 읽고도 첫 design route를 고를 수 있어야 한다
- 애매해지면 [DEFAULT-RESOLVED-ROUTES.md](DEFAULT-RESOLVED-ROUTES.md), [DESIGN-CORE-OUTPUTS.md](DESIGN-CORE-OUTPUTS.md), [DESIGN-DONE-CRITERIA.md](DESIGN-DONE-CRITERIA.md) 순으로 올라간다
- canonical ownership은 helper보다 항상 본 문서와 각 output 문서를 우선한다

## 0. 문서 소유권 먼저 고정

- `PROJECT-THESIS.md`, `PRD.md`
  - 왜 이 제품을 만들고 무엇이 must-have인지 고정한다
- `DESIGN.md`
  - visual system, tone, trust/proof/governance posture, token, generator rule을 소유한다
- `UX-IA.md`
  - flow, navigation, actor split, permission/visibility, lifecycle/recovery path를 소유한다
- `SCREEN-SPECS.md`
  - screen purpose, section, CTA, state, signal placement, device delta를 소유한다

충돌하면 예쁘게 이어붙이지 말고 owning doc를 먼저 맞춘다.

## 1. 정말 최소로 고를 것

아래 4개만 먼저 정한다.

1. 지금 가장 비어 있는 것은 무엇인가
   - `direction`
   - `flow`
   - `screen`
   - `update`
   - `bundle-check`
2. 제품 표면은 무엇에 가까운가
   - `editorial / brand-led`
   - `discovery / listing`
   - `dashboard / dense-data`
   - `workflow / review`
   - `booking / transactional`
   - `mobile field / offline`
   - `community / membership`
   - `platform / docs / control`
3. 지금 weight는 어떤가
   - `light`
   - `standard`
   - `full`
4. 어떤 stress가 shape를 바꾸는가
   - `regulated / disclosure`
   - `privacy / delegated access`
   - `proof / provenance / freshness`
   - `dense data / alerts`
   - `offline / capture conditions`
   - `moderation / governance`
   - `membership / paywall`
   - `platform / env split / secrets`

### Fuzzy Start Rule

완전히 애매하면 정확히 naming 맞추려 하지 말고 아래만 먼저 정한다.

- 가장 큰 실패가 `visual drift / state confusion / signal omission / update confusion` 중 무엇인지
- 가장 가까운 surface model 1개
- strongest stress 1개

그다음 첫 route만 시작한다.

## 2. Mandatory Discovery Ladder

모든 design producer skill은 시작 전에 아래 질문 축을 반드시 지난다.

1. 사용자가 action 전에 반드시 믿어야 하는 것은 무엇인가
2. 화면이 먼저 줘야 할 감각은 무엇인가
   - `calm`
   - `sharp`
   - `warm`
   - `operational`
   - `editorial`
   - `premium`
3. 가장 먼저 hierarchy를 먹어야 하는 surface는 무엇인가
4. 정보 밀도 목표는 무엇인가
   - `airy`
   - `balanced`
   - `dense`
5. 어떤 status/trust/proof signal은 항상 visible이어야 하는가
6. happy path 말고 절대 빠지면 안 되는 state는 무엇인가
7. first value moment는 정확히 무엇이고 어느 screen에서 처음 보이는가
8. role, permission, privacy, delegation 차이가 있는가
9. 절대 숨기면 안 되는 trust/status/proof signal은 무엇인가
10. mobile, field, keyboard, offline, large-screen 중 무엇이 shape를 바꾸는가
11. disclosure, audit, moderation, provenance, reminder, notification 중 무엇이 product-shaping인가
12. 새 bundle을 만드는가, 기존 문서를 수정하는가

## 3. Quick Route Card

```md
- current_gap:
- surface_model:
- weight_mode:
- active_domain_stressors:
- required_conditional_packs:
- creating_or_updating:
- starting_skill:
- resolved_route:
- owner_doc_to_edit_first:
- when_to_escalate:
```

## 4. Fast Defaults

- visual direction이 가장 비어 있음
  - start: `design-intake-triage`
  - expect: `visual-direction-strategy`
- flow/state visibility가 가장 비어 있음
  - start: `design-intake-triage`
  - expect: `experience-flow-design`
- screen purpose/state/signal placement가 가장 비어 있음
  - start: `design-intake-triage`
  - expect: `screen-spec-design`
- 기존 문서를 수정해야 함
  - start: `design-intake-triage`
  - then: [UPDATE-ENTRY-MAP.md](UPDATE-ENTRY-MAP.md)
- bundle 품질 점검이 필요함
  - start: `design-synthesis`

## 4.5 Tie-Break Rule

tone, flow, screen이 모두 그럴듯하면 아래를 쓴다.

| If the sharpest risk is... | First owning doc | Why |
| --- | --- | --- |
| tone, brand, editorial direction | `DESIGN.md` | visual system이 먼저 잠겨야 한다 |
| trust, privacy, delegation, disclosure, recovery | `UX-IA.md` | requirement timing과 actor split이 먼저 잠겨야 한다 |
| dense layout, state density, screen priority, device delta | `SCREEN-SPECS.md` | placement와 must-render state가 먼저 잠겨야 한다 |
| mixed and still unclear | `DESIGN.md` with explicit `provisional_mode` | ambiguity를 숨기지 않고 first owner를 잠근다 |

그리고 `owner_doc_to_edit_first`를 route card에 반드시 적는다.

## 4.6 Compact Route Card Examples

```md
- current_gap: flow
- surface_model: regulated intake
- weight_mode: full
- active_domain_stressors: disclosure, delegated access, save/resume
- required_conditional_packs: regulated_workflow_minimum, privacy_sensitive_consumer
- creating_or_updating: new_bundle
- starting_skill: design-intake-triage
- resolved_route: triage -> experience-flow-design -> screen-spec-design -> visual-direction-strategy -> design-synthesis
- owner_doc_to_edit_first: UX-IA.md
```

```md
- current_gap: screen
- surface_model: dense dashboard
- weight_mode: full
- active_domain_stressors: alert hierarchy, comparison baseline, freshness
- required_conditional_packs: trust_ops_minimum
- creating_or_updating: new_bundle
- starting_skill: design-intake-triage
- resolved_route: triage -> screen-spec-design -> experience-flow-design -> visual-direction-strategy -> design-synthesis
- owner_doc_to_edit_first: SCREEN-SPECS.md
```

```md
- current_gap: direction
- surface_model: community membership
- weight_mode: standard
- active_domain_stressors: identity, moderation, paywall boundary
- required_conditional_packs: media_membership
- creating_or_updating: update_existing
- starting_skill: design-intake-triage
- resolved_route: triage -> visual-direction-strategy -> experience-flow-design -> screen-spec-design -> design-synthesis
- owner_doc_to_edit_first: DESIGN.md
```

## 5. Stress Trigger Cheatsheet

- `regulated`, `intake`, `public service`, `legal`, `clinical`
  - emphasize `disclosure`, `plain-language`, `audit/history`, `save/resume`, `delegated access`
- `freshness`, `citation`, `source`, `ranking explanation`, `proof`
  - emphasize `provenance`, `last-updated`, `proof surface`, `signal placement`
- `dashboard`, `monitoring`, `dispatch`, `ops console`
  - emphasize `density`, `alert hierarchy`, `comparison baseline`, `acknowledgment`
- `mobile field`, `offline`, `scan`, `proof of delivery`, `checklist`
  - emphasize `capture conditions`, `one-hand use`, `degraded mode`, `sync recovery`
- `community`, `moderation`, `membership`, `paywall`
  - emphasize `belonging`, `identity`, `entitlement boundary`, `governance`
- `platform`, `SDK`, `API key`, `webhook`, `secret`
  - emphasize `environment split`, `secret visibility`, `quickstart`, `version/example`

## 6. Escalate Immediately If

- user가 `예쁘게`, `세련되게`, `깔끔하게`만 반복하고 concrete choice가 안 나온다
- proof/governance/privacy/delegation 중 하나가 있는데 문서에 어디 적을지 모르겠다
- `DESIGN.md`, `UX-IA.md`, `SCREEN-SPECS.md` 중 어느 문서가 canonical owner인지 흔들린다
- update 상황인데 무엇부터 고쳐야 하는지 불명확하다
- generator가 임의의 토큰, 화면 이름, component variant를 만들 가능성이 높다

이 경우는 [DEFAULT-RESOLVED-ROUTES.md](DEFAULT-RESOLVED-ROUTES.md)와 [UPDATE-ENTRY-MAP.md](UPDATE-ENTRY-MAP.md)를 다시 본다.
