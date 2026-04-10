# Prebuild Core Outputs

이 문서는 `planning + design` 통합 단계가 끝났을 때 어떤 문서 묶음이 있어야 하는지 고정한다.

## Core Bundle

통합 prebuild 단계의 코어 산출물은 아래 `9-document bundle`이다.

1. `PROJECT-THESIS.md`
2. `PLANNING-RECORD.md`
3. `RESEARCH.md`
4. `PRD.md`
5. `UX-IA.md`
6. `SCREEN-SPECS.md`
7. `BUSINESS-OPS.md`
8. `EXECUTION-HANDOFF.md`
9. `DESIGN.md`

## Ownership Model

### Planning-Owned

- `PROJECT-THESIS.md`
- `PLANNING-RECORD.md`
- `RESEARCH.md`
- `PRD.md`
- `BUSINESS-OPS.md`
- `EXECUTION-HANDOFF.md`

### Design-Owned

- `DESIGN.md`

### Shared Docs

- `UX-IA.md`
- `SCREEN-SPECS.md`

shared doc 규칙:

- planning은 기능/흐름/상태의 제품 정의를 먼저 잡는다
- design은 같은 문서를 visual/interaction/state-visibility 수준으로 강화한다
- design이 shared doc을 만질 수는 있지만, target/scope/policy/source-of-truth 같은 upstream 결정을 임의로 바꾸면 안 된다

## Hard Ownership Matrix

통합 prebuild에서는 아래 concern의 canonical owner가 흔들리면 안 된다.

| Concern | Canonical owner | Shared/doc projection rule |
| --- | --- | --- |
| target user, why this segment first | `PROJECT-THESIS.md` | design은 재질문 금지 unless unresolved |
| must-have / defer / out-of-scope | `PRD.md` | shared docs는 mapped reference만 가진다 |
| source of truth, policy owner, SLA, approval owner, exception owner | `BUSINESS-OPS.md` | `UX-IA.md`, `SCREEN-SPECS.md`는 ref만 하고 의미를 바꾸지 않는다 |
| flow, actor split, permission timing, lifecycle, recovery timing | `UX-IA.md` | `SCREEN-SPECS.md`는 placement/rendering만 가진다 |
| screen purpose, state priority, signal placement, device delta | `SCREEN-SPECS.md` | `UX-IA.md`는 flow 맥락만 가진다 |
| tokens, visual hierarchy, trust tone, generator rule | `DESIGN.md` | upstream ops/policy를 덮어쓰지 않는다 |

## Integrated Output Contract

좋은 통합 bundle은 아래를 만족한다.

- `PROJECT-THESIS.md`, `PRD.md`, `BUSINESS-OPS.md`를 읽으면 제품 정의와 운영 현실이 잠겨 있다
- `UX-IA.md`, `SCREEN-SPECS.md`를 읽으면 flow/state/signal/device가 planning 수준과 design 수준 모두에서 usable하다
- `DESIGN.md`를 읽으면 generator/designer/frontend가 visual system을 다시 추측하지 않아도 된다
- `DESIGN.md`가 planning 내용을 다시 요약하는 문서가 되지 않는다
- shared docs와 owning docs가 충돌하지 않는다
- shared docs가 policy/source-of-truth/approval owner를 새로 정의하지 않는다

## Shared Doc Guardrail

design 단계에서 아래는 shared docs에 추가할 수 있다.

- first value moment 명확화
- role/permission/visibility 세분화
- state priority와 recovery visibility
- signal placement, device delta, density, layout mode

하지만 아래가 바뀌면 planning으로 다시 올라가야 한다.

- target user 변경
- must-have / out-of-scope 변경
- core ops policy 또는 source of truth 변경
- buyer / payer / approval owner 변경
- viability 또는 rollout assumption 변경

## Bridge

planning에서 design으로 넘어갈 때는 [PLANNING-TO-DESIGN-HANDOFF.md](PLANNING-TO-DESIGN-HANDOFF.md)를 함께 본다.
shared doc ownership 빠른 확인은 [SHARED-DOC-OWNERSHIP-MATRIX.md](SHARED-DOC-OWNERSHIP-MATRIX.md)를 함께 본다.
