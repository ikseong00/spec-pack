# Trust Ownership Matrix

이 문서는 `trust` 관련 판단이 planning / design 문서 사이에서 어디에 속하는지 고정한다.

원칙:

- trust는 한 문서에 다 몰아넣지 않는다
- 하지만 같은 trust concern이 여러 문서에 projection되더라도 canonical owner는 하나여야 한다
- semantic ownership, timing ownership, placement ownership, operating ownership을 분리해서 본다

## Quick Rule

- 의미와 표현 원칙
  - `DESIGN.md`
- 언제 나타나야 하는가, 누구에게 보이는가, 어떤 상태에서 중요해지는가
  - `UX-IA.md`
- 어느 screen section에 어떻게 보이는가
  - `SCREEN-SPECS.md`
- policy, ops owner, SLA, audit retention, exception handling
  - planning의 `BUSINESS-OPS.md`

## Ownership Table

| Trust concern | Canonical owner | Downstream projection | Why |
| --- | --- | --- | --- |
| trust tone, confidence posture, disclosure emphasis | `DESIGN.md` | `UX-IA.md`, `SCREEN-SPECS.md` | semantic and visual meaning ownership |
| proof surface meaning, verification cue meaning, freshness semantics | `DESIGN.md` | `UX-IA.md`, `SCREEN-SPECS.md` | signal semantics and treatment ownership |
| first value moment에서 필요한 trust cue | `UX-IA.md` | `SCREEN-SPECS.md`, `DESIGN.md` | timing and journey ownership |
| role/permission/privacy/delegation visibility | `UX-IA.md` | `SCREEN-SPECS.md`, `DESIGN.md` | actor split and state ownership |
| recovery, denial, override, escalation trust path | `UX-IA.md` | `SCREEN-SPECS.md`, `BUSINESS-OPS.md` | lifecycle ownership |
| exact screen placement of signal, warning, freshness label, audit block | `SCREEN-SPECS.md` | `DESIGN.md` | surface placement ownership |
| irreversible action warning and acknowledgment placement | `SCREEN-SPECS.md` | `UX-IA.md` | last-mile screen contract ownership |
| policy source of truth, ops owner, SLA, queue, manual review, retention | `BUSINESS-OPS.md` | `UX-IA.md`, `SCREEN-SPECS.md`, `EXECUTION-HANDOFF.md` | operating reality ownership |
| implementation slice and acceptance for trust-critical flows | `EXECUTION-HANDOFF.md` | none | build handoff ownership |

## Conflict Resolution

trust 관련 문서가 충돌하면 아래 순서로 resolve 한다.

1. semantic meaning conflict
   - `DESIGN.md`
2. timing / actor / lifecycle conflict
   - `UX-IA.md`
3. placement / visibility conflict
   - `SCREEN-SPECS.md`
4. policy / owner / SLA conflict
   - `BUSINESS-OPS.md`
5. build order / acceptance conflict
   - `EXECUTION-HANDOFF.md`

## Examples

### Example 1: freshness label

- `DESIGN.md`
  - freshness cue는 trust degradation signal이다
- `UX-IA.md`
  - 어떤 flow/state에서 freshness cue가 required인지 정의한다
- `SCREEN-SPECS.md`
  - `screen.primary_entry` 상단에 freshness label을 둔다
- `BUSINESS-OPS.md`
  - freshness source of truth와 stale threshold owner를 정의한다

### Example 2: delegated access

- `DESIGN.md`
  - safe communication and disclosure tone rule을 정의한다
- `UX-IA.md`
  - delegated access flow, actor split, visibility boundary를 정의한다
- `SCREEN-SPECS.md`
  - delegate invite, delegated note, hidden field placement를 정의한다
- `BUSINESS-OPS.md`
  - delegated access policy와 audit requirement를 정의한다

### Example 3: dispute or recovery trust

- `DESIGN.md`
  - remedy tone과 warning emphasis를 정의한다
- `UX-IA.md`
  - dispute/recovery lifecycle와 escalation path를 정의한다
- `SCREEN-SPECS.md`
  - recovery surface에서 status, proof, next action placement를 정의한다
- `BUSINESS-OPS.md`
  - owner, SLA, manual exception handling을 정의한다

## Architecture Note

architecture 단계는 trust를 새로 재정의하지 않는다.

architecture가 받아가야 하는 것은:

- 어떤 signal이 canonical인지
- 어떤 actor split이 강제되는지
- 어떤 state transition이 trust-critical인지
- 어떤 policy or audit constraint가 non-negotiable인지

즉 trust meaning은 design/planning에서, system enforcement는 architecture에서 다룬다.
