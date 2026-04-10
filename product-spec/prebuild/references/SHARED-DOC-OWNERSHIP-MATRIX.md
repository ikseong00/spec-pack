# Shared Doc Ownership Matrix

이 문서는 `UX-IA.md`와 `SCREEN-SPECS.md`가 planning-owned 사실을 다시 정의하지 않도록 만드는 빠른 기준표다.

## Quick Rule

- flow, timing, visibility boundary
  - `UX-IA.md`
- surface placement, rendering priority, device delta
  - `SCREEN-SPECS.md`
- policy, owner, SLA, source of truth
  - `BUSINESS-OPS.md`
- scope
  - `PRD.md`
- trust meaning, token, visual system
  - `DESIGN.md`

## Hard Cases

| Hard case | Lock upstream first | Shared doc owner after freeze |
| --- | --- | --- |
| regulated / public service | `BUSINESS-OPS.md` | `UX-IA.md` for timing, `SCREEN-SPECS.md` for placement |
| approval / denial / appeal | `BUSINESS-OPS.md` | `UX-IA.md` for lifecycle, `SCREEN-SPECS.md` for visibility |
| delegated access / privacy split | `BUSINESS-OPS.md` then `UX-IA.md` | `SCREEN-SPECS.md` only for rendering |
| waitlist / release / refund | `BUSINESS-OPS.md` | `UX-IA.md` for state transitions, `SCREEN-SPECS.md` for status placement |
| enterprise security gate | `BUSINESS-OPS.md` | `SCREEN-SPECS.md` for admin/security surfaces |
| offline sync / restore | `BUSINESS-OPS.md` for write boundary | `UX-IA.md` for recovery timing, `SCREEN-SPECS.md` for state rendering |
| marketplace dispute / payout / remedy | `BUSINESS-OPS.md` | `UX-IA.md` for remedy timing, `SCREEN-SPECS.md` for visible state |
| delegated admin / org split | `BUSINESS-OPS.md` then `UX-IA.md` | `SCREEN-SPECS.md` for gate rendering |
| callback / assignment / public-service transfer | `BUSINESS-OPS.md` | `UX-IA.md` for lifecycle, `SCREEN-SPECS.md` for signal placement |

## Forbidden Move

아래는 shared doc에서 하면 안 된다.

- `UX-IA.md`가 approval owner를 새로 정한다
- `SCREEN-SPECS.md`가 source of truth를 새로 정한다
- `DESIGN.md`가 policy/SLA를 새로 정한다
- shared doc이 unresolved policy를 `reasonable assumption`으로 봉합한다
- shared doc이 dispute/remedy owner나 sync authority를 invent한다

그럴 때는 planning으로 되돌아간다.
