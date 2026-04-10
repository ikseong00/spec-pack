# Update Entry Map

이 문서는 planning output이 이미 있는 상태에서,
무엇이 바뀌었을 때 어느 문서부터 손대야 하는지 빠르게 찾는 entry helper다.

canonical ownership은 [CORE-DOCUMENT-SET.md](CORE-DOCUMENT-SET.md)의 `Change Routing Matrix`를 우선한다.

## Fast Rule

1. 바뀐 것이 `who/why/problem/evidence`인지 본다
2. 바뀐 것이 `scope/flow/screen`인지 본다
3. 바뀐 것이 `ops/policy/trust/availability/recovery`인지 본다
4. 아래 표에서 첫 문서를 고른다
5. 그 다음 downstream 문서를 reconcile 한다

## Quick Table

| If this changed | Start here | Then reconcile |
| --- | --- | --- |
| target user / segment / why this segment | `PROJECT-THESIS.md` | `PLANNING-RECORD.md`, `RESEARCH.md`, `PRD.md`, `UX-IA.md` |
| problem statement / evidence / current alternative | `PLANNING-RECORD.md` | `PROJECT-THESIS.md`, `RESEARCH.md`, `PRD.md` |
| market / competitor / why-now | `RESEARCH.md` | `PROJECT-THESIS.md`, `PRD.md`, `BUSINESS-OPS.md` |
| feature set / MVP / scope | `PRD.md` | `UX-IA.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` |
| flow / IA / lifecycle / recovery path | `UX-IA.md` | `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` |
| screen / state / permission / queue surface | `SCREEN-SPECS.md` | `EXECUTION-HANDOFF.md` |
| ops / trust / policy / pricing / availability / rollout | `BUSINESS-OPS.md` | `PRD.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` |
| phase / task / acceptance / implementation order | `EXECUTION-HANDOFF.md` | none unless scope changed |

## Modifier-To-Doc Shortcuts

- `regulated-workflow` -> start at `BUSINESS-OPS.md`
- `commerce-transactional` -> start at `BUSINESS-OPS.md`
- `service-operations-workflow` -> start at `BUSINESS-OPS.md`
- `availability-booking` -> start at `BUSINESS-OPS.md`
- `reservation-lifecycle` -> start at `BUSINESS-OPS.md`
- `privacy-sensitive-consumer` -> start at `UX-IA.md`, then `SCREEN-SPECS.md`, then `BUSINESS-OPS.md`
- `artifact-revision-controlled` -> start at `BUSINESS-OPS.md`, then `UX-IA.md`
- `learning-progression` -> start at `UX-IA.md`
- `local-discovery-trust` -> start at `BUSINESS-OPS.md`, then `UX-IA.md`, then `SCREEN-SPECS.md`

## Fuzzy Change Rule

무엇이 바뀌었는지 애매하면:

1. 먼저 `PLANNING-RECORD.md`에 changed fact / assumption / decision을 적는다
2. 그다음 가장 가까운 owning doc로 내려간다

즉 fuzzy update는 `PLANNING-RECORD.md`에서 시작해도 된다.
