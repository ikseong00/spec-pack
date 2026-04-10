# Update Entry Map

이 문서는 design output이 이미 있는 상태에서,
무엇이 바뀌었을 때 어느 문서부터 손대야 하는지 빠르게 찾는 entry helper다.

canonical ownership은 각 output 문서의 `source_of_truth_for`와 [DESIGN-CORE-OUTPUTS.md](DESIGN-CORE-OUTPUTS.md)를 우선한다.

## Fast Rule

1. 바뀐 것이 visual system인지 본다
2. 바뀐 것이 flow/actor/visibility인지 본다
3. 바뀐 것이 screen/state/signal placement인지 본다
4. 아래 표에서 첫 문서를 고른다
5. 그다음 downstream 문서를 reconcile 한다

위보다 먼저, 아래가 바뀌면 design doc부터 시작하지 않는다.

- source of truth
- approval owner
- policy or SLA
- rollout gate
- enterprise or regulatory gate

이 경우는 planning의 `BUSINESS-OPS.md`부터 시작한다.
이 hard-first rule이 아래 quick table보다 항상 우선한다.

## Quick Table

| If this changed | Start here | Then reconcile |
| --- | --- | --- |
| tone, references, typography, color, radius, shadow, motion | `DESIGN.md` | `UX-IA.md`, `SCREEN-SPECS.md` |
| trust, proof, disclosure, governance, notification posture | `DESIGN.md` | `UX-IA.md`, `SCREEN-SPECS.md` |
| flow, navigation, lifecycle, recovery, role split | `UX-IA.md` | `SCREEN-SPECS.md`, `DESIGN.md` |
| permission, visibility, delegated access, moderation path | `UX-IA.md` | `SCREEN-SPECS.md`, `DESIGN.md` |
| screen purpose, sections, CTA, state, device delta | `SCREEN-SPECS.md` | `UX-IA.md` |
| signal placement, freshness, evidence, alert priority | `SCREEN-SPECS.md` | `DESIGN.md`, `UX-IA.md` |
| AI generator drift or token inconsistency | `DESIGN.md` | `SCREEN-SPECS.md` |
| bundle contradiction or ready/not-ready check | `design-synthesis` | all 3 docs |

## Modifier-To-Doc Shortcuts

- `regulated / public service / legal / clinical`
  - if policy/source/approval changed: start at planning `BUSINESS-OPS.md`
  - else start at `UX-IA.md`, then `SCREEN-SPECS.md`, then `DESIGN.md`
- `platform / docs / secret / env split`
  - if env gate or approval gate changed: start at planning `BUSINESS-OPS.md`
  - else start at `SCREEN-SPECS.md`, then `DESIGN.md`
- `dense data / monitoring / alerting`
  - start at `SCREEN-SPECS.md`, then `DESIGN.md`
- `community / membership / editorial repositioning`
  - start at `DESIGN.md`, then `UX-IA.md`
- `offline / field / capture proof`
  - start at `SCREEN-SPECS.md`, then `UX-IA.md`

## Fuzzy Change Rule

무엇이 바뀌었는지 애매하면:

1. 먼저 `DESIGN.md`의 `provisional_mode`에 changed assumption / blocker를 적는다
2. 그다음 가장 가까운 owning doc로 내려간다

즉 fuzzy update는 `DESIGN.md`에서 시작해도 된다.

## Compact Update Walkthrough

예: `공공 서비스 신청 포털`에서 disclosure copy와 submit screen layout이 같이 바뀜

1. first owner
   - `UX-IA.md`
   - 이유: disclosure와 save/resume는 flow와 permission timing이 먼저다
2. then reconcile
   - `SCREEN-SPECS.md`
   - 이유: submit screen section order와 signal placement를 다시 잡아야 한다
3. final reconcile
   - `DESIGN.md`
   - 이유: disclosure tone과 visual emphasis를 맞춘다
4. stop and escalate
   - if owner가 `UX-IA.md`인지 `SCREEN-SPECS.md`인지 계속 흔들리면 `trust/privacy/delegation`을 sharper risk로 보고 `UX-IA.md`부터 시작한다
