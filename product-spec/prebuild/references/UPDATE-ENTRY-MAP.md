# Update Entry Map

이 문서는 planning + design 통합 bundle이 이미 있는 상태에서,
무엇이 바뀌었을 때 어느 문서부터 손대야 하는지 빠르게 찾는 helper다.

## Fast Rule

1. changed fact인지, changed expression인지 먼저 본다
2. fact가 바뀌면 planning owning doc으로 올라간다
3. expression이나 placement만 바뀌면 design owning doc으로 간다
4. `UX-IA.md`, `SCREEN-SPECS.md`가 충돌하면 shared doc만 고치지 말고 upstream owner를 확인한다

## Hard First Rule

아래가 바뀌면 무조건 `BUSINESS-OPS.md`부터 시작한다.

- source of truth
- approval owner
- exception owner
- policy or SLA
- rollout gate
- enterprise or regulatory approval gate

이 hard-first rule이 아래 quick table보다 항상 우선한다.

## Quick Table

| If this changed | Start here | Then reconcile |
| --- | --- | --- |
| target user, problem, evidence, scope | planning owning doc | shared docs, then `DESIGN.md` |
| rollout, policy, SLA, source of truth, trust ops | `BUSINESS-OPS.md` | `UX-IA.md`, `SCREEN-SPECS.md`, `DESIGN.md` |
| approval owner, exception owner, enterprise gate, regulatory gate | `BUSINESS-OPS.md` | `UX-IA.md`, `SCREEN-SPECS.md`, `DESIGN.md` |
| flow, lifecycle, role split, visibility timing | `UX-IA.md` | `SCREEN-SPECS.md`, `DESIGN.md` |
| screen purpose, sections, state priority, signal placement | `SCREEN-SPECS.md` | `UX-IA.md`, `DESIGN.md` |
| visual direction, tokens, tone, motion | `DESIGN.md` | `UX-IA.md`, `SCREEN-SPECS.md` |
| contradiction across planning and design | upstream owning doc first | shared docs last |

## Shared Doc Shortcut

- `UX-IA.md`
  - first if the sharpest risk is timing, visibility, recovery, actor split
- `SCREEN-SPECS.md`
  - first if the sharpest risk is placement, priority, device delta, must-render state

## Fuzzy Update Rule

- `changed fact`인지 `changed presentation`인지 모르겠으면 `PLANNING-RECORD.md`에 먼저 적는다
- 그래도 애매하면 `BUSINESS-OPS.md` 또는 `PRD.md`가 upstream owner인지 먼저 본다
- hard-case owner/value가 비어 있으면 planning의 `OWNER-FREEZE-QUICK-FILL-CARDS.md`부터 본다
