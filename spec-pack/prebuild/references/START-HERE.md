# Start Here

이 문서는 `planning + design` 통합 prebuild pack의 가장 얇은 시작면이다.

원칙:

- 이 문서만 읽고도 첫 route를 고를 수 있어야 한다
- planning과 design을 각각 따로 시작하지 말고, 현재 entry point를 먼저 고정한다
- `UX-IA.md`, `SCREEN-SPECS.md`는 shared doc이므로 두 단계를 잇는 문서로 취급한다

애매해지면 아래 순서로 올라간다.

1. [PREBUILD-CORE-OUTPUTS.md](PREBUILD-CORE-OUTPUTS.md)
2. [PLANNING-TO-DESIGN-HANDOFF.md](PLANNING-TO-DESIGN-HANDOFF.md)
3. planning의 [references/START-HERE.md](../../planning/references/START-HERE.md)
4. design의 [references/START-HERE.md](../../design/references/START-HERE.md)

## 1. 정말 최소로 고를 것

아래 4개만 먼저 정한다.

1. 지금 entry point는 무엇인가
   - `planning_new`
   - `planning_update`
   - `design_from_planning`
   - `bundle_recheck`
2. 지금 가장 비어 있는 것은 무엇인가
   - `discover`
   - `scope`
   - `flow`
   - `screen`
   - `direction`
   - `handoff`
3. strongest pressure는 무엇인가
   - `weak evidence`
   - `trust / policy`
   - `dense ops`
   - `transaction / booking`
   - `offline / field`
   - `platform / env split`
   - `membership / moderation`
4. 지금 weight는 어떤가
   - `light`
   - `standard`
   - `full`

## 2. Fuzzy Start Rule

완전히 섞여 있으면 아래만 먼저 정한다.

- 지금 막히는 이유가 `problem uncertainty / scope drift / state confusion / visual drift / doc contradiction` 중 무엇인지
- planning bundle이 이미 usable한지 아닌지
- shared doc을 먼저 고쳐야 하는지, owning doc을 먼저 고쳐야 하는지

그리고 첫 route만 시작한다.

## 2.5 Pre-Design Freeze Gate

`entry_point = design_from_planning`이면 아래를 먼저 본다.

- target and primary actor가 잠겨 있는가
- must-have / out-of-scope가 잠겨 있는가
- source of truth가 잠겨 있는가
- approval owner / exception owner가 잠겨 있는가
- policy or SLA owner가 잠겨 있는가
- required visible states가 잠겨 있는가

하나라도 비어 있으면 design으로 가지 말고 `bundle_recheck` 또는 planning update로 보낸다.

## 3. Quick Route Card

```md
- entry_point:
- current_gap:
- strongest_pressure:
- weight_mode:
- planning_owner_doc_first:
- design_owner_doc_first:
- shared_doc_first:
- starting_route:
- reopen_rule:
```

## 4. Fast Defaults

- 아직 planning bundle이 없음
  - start: planning `references/START-HERE.md`
  - route: planning first
- planning bundle은 있는데 visual/flow/screen이 약함
  - start: [PLANNING-TO-DESIGN-HANDOFF.md](PLANNING-TO-DESIGN-HANDOFF.md)
  - route: design from planning
- target/problem/scope/ops가 바뀜
  - start: planning `references/UPDATE-ENTRY-MAP.md`
  - route: planning update, then design reconcile
- 문서는 다 있는데 충돌함
  - start: `bundle_recheck`
  - route: owning doc 먼저 정리, shared doc reconcile
- regulated / public-service / enterprise gate인데 owner freeze가 비어 있음
  - start: `BUSINESS-OPS.md`
  - route: planning reconcile first, then design
- hard-case인데 어디부터 채워야 할지 모르겠음
  - start: planning [OWNER-FREEZE-QUICK-FILL-CARDS.md](../../planning/references/OWNER-FREEZE-QUICK-FILL-CARDS.md)
  - route: owner freeze quick fill first, then design

## 5. Default Route Resolver

| If this is true | Start here | Why |
| --- | --- | --- |
| problem, target, scope, ops가 아직 불안정하다 | planning | design이 upstream uncertainty를 덮으면 나중에 다시 깨진다 |
| planning은 안정적이고 flow/state/screen/direction이 약하다 | design | design translation 문제다 |
| `UX-IA.md`, `SCREEN-SPECS.md`가 planning과 design 사이에서 충돌한다 | shared doc + owning doc cross-check | shared doc만 고치면 upstream contradiction이 숨는다 |
| trust, policy, SLA, source of truth가 함께 흔들린다 | `BUSINESS-OPS.md` first | placement보다 operating reality가 먼저다 |
| regulated / public-service / enterprise gate + owner freeze 미완료 | `BUSINESS-OPS.md` first | design이 policy ambiguity를 메우면 바로 깨진다 |
| tone과 layout이 흔들리지만 scope는 잠겨 있다 | `DESIGN.md` or design route | visual system 문제다 |

## 6. Reopen Immediately If

- design 작업을 하려는데 must-have가 바뀐다
- visual/screen 문제를 고치려는데 새로운 actor나 permission이 생긴다
- shared doc을 고치려는데 source of truth, owner, SLA가 바뀐다
- required visible state를 설계하려는데 approval/exception owner가 없다
- planning doc이 `stale`인데 design으로 그냥 넘어가고 싶어진다

이 경우는 planning으로 되돌아간다.

## 7. Updating Existing Bundle

기존 통합 bundle을 수정하는 상황이면 [UPDATE-ENTRY-MAP.md](UPDATE-ENTRY-MAP.md)부터 본다.
shared doc 충돌 빠른 확인은 [SHARED-DOC-OWNERSHIP-MATRIX.md](SHARED-DOC-OWNERSHIP-MATRIX.md)를 본다.
