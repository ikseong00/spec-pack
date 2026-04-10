# Default Resolved Routes

이 문서는 first-time operator가 design skill starter matrix 전체를 스캔하지 않고도,
가장 흔한 상황에서 `resolved_route`를 빠르게 고르기 위한 thin surface다.

원칙:

- 이것은 quickstart helper다
- canonical source는 [START-HERE.md](START-HERE.md), [DESIGN-CORE-OUTPUTS.md](DESIGN-CORE-OUTPUTS.md), 각 skill 본문이다
- route는 `design-intake-triage + owning skill + downstream reconciliation`로 읽는다

## Quick Use

1. 아래에서 가장 비슷한 row 하나를 고른다
2. strongest stress trigger를 같이 적는다
3. `resolved_route`를 시작 route로 쓴다
4. update면 [UPDATE-ENTRY-MAP.md](UPDATE-ENTRY-MAP.md)도 같이 본다

## Default Route Table

| Surface model | Common trigger | Resolved route |
| --- | --- | --- |
| editorial / brand-led product | visual tone unclear, reference overload, anti-slop risk | `design-intake-triage -> visual-direction-strategy -> experience-flow-design -> screen-spec-design -> design-synthesis` |
| discovery / listing | ranking trust, freshness, provenance, dual list-map | `design-intake-triage -> visual-direction-strategy -> experience-flow-design -> screen-spec-design -> design-synthesis` |
| dashboard / dense-data SaaS | alert hierarchy, comparison baseline, table/chart density | `design-intake-triage -> screen-spec-design -> experience-flow-design -> visual-direction-strategy -> design-synthesis` |
| workflow / review queue | approvals, overrides, rework, queue backlog, audit trail | `design-intake-triage -> experience-flow-design -> screen-spec-design -> visual-direction-strategy -> design-synthesis` |
| booking / transactional | confirmation trust, cancellation/recovery, staff handoff | `design-intake-triage -> experience-flow-design -> screen-spec-design -> visual-direction-strategy -> design-synthesis` |
| mobile field / offline | capture conditions, degraded mode, sync recovery, proof surfaces | `design-intake-triage -> screen-spec-design -> experience-flow-design -> visual-direction-strategy -> design-synthesis` |
| community / membership | belonging, moderation, entitlement boundary, retention loop | `design-intake-triage -> visual-direction-strategy -> experience-flow-design -> screen-spec-design -> design-synthesis` |
| platform / docs / control surface | quickstart, secret visibility, environment split, health/recovery | `design-intake-triage -> screen-spec-design -> visual-direction-strategy -> experience-flow-design -> design-synthesis` |
| existing bundle update | visual refresh, new screen, changed state model, new role split | `design-intake-triage -> owning doc skill -> downstream reconciliation -> design-synthesis` |

## Owning Doc Shortcuts

- visual system, tone, tokens, generator rule
  - owner: `DESIGN.md`
  - starting skill: `visual-direction-strategy`
- flow, navigation, actor split, permission/visibility
  - owner: `UX-IA.md`
  - starting skill: `experience-flow-design`
- screen purpose, sections, CTA, state, signal placement
  - owner: `SCREEN-SPECS.md`
  - starting skill: `screen-spec-design`
- cross-doc consistency and readiness
  - owner: bundle reconciliation
  - starting skill: `design-synthesis`

## Tie-Break Shortcut

- if tone is the main uncertainty
  - owner: `DESIGN.md`
- if role / permission / trust / recovery is the main uncertainty
  - owner: `UX-IA.md`
- if layout density / screen priority / state placement is the main uncertainty
  - owner: `SCREEN-SPECS.md`
- if still mixed
  - owner: `DESIGN.md` with explicit `provisional_mode` and `owner_doc_to_edit_first`

## Stress Promotion Shortcuts

- `regulated`, `disclosure`, `audit`, `save/resume`
  - promote `experience-flow-design` before `visual-direction-strategy` if flow is weak
- `dense data`, `monitoring`, `alert fatigue`
  - promote `screen-spec-design` first
- `membership`, `community`, `editorial`
  - promote `visual-direction-strategy` first
- `offline`, `field`, `capture proof`
  - promote `screen-spec-design` first and require degraded-state notes
- `platform`, `developer`, `secrets`, `versioning`
  - require environment split and quickstart-first screens

## Escalate To Full Reading

아래면 quick route를 버리고 [START-HERE.md](START-HERE.md), [UPDATE-ENTRY-MAP.md](UPDATE-ENTRY-MAP.md), 각 template를 같이 읽는다.

- row가 2개 이상 강하게 맞는다
- role/permission/delegation 차이가 크다
- generator drift를 막을 closed token table이 아직 없다
- update인지 신규인지조차 흔들린다
