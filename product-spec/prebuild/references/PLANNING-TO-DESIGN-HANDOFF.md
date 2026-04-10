# Planning To Design Handoff

이 문서는 planning이 끝난 뒤 design이 어디서부터 시작해야 하는지 고정한다.

목표:

- design이 이미 잠긴 planning 판단을 다시 discovery하지 않게 한다
- design이 필요한 질문만 남기고, upstream 사실/결정을 재심문하지 않게 한다
- `UX-IA.md`, `SCREEN-SPECS.md`를 shared doc으로 안전하게 운영한다

## Required Inputs

design 시작 전에 최소 아래 문서가 있어야 한다.

- `PROJECT-THESIS.md`
- `PRD.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- `BUSINESS-OPS.md`
- `PLANNING-RECORD.md`

owner/value freeze 기준은 planning의 [OWNER-FREEZE-BRIDGE.md](../../planning/references/OWNER-FREEZE-BRIDGE.md)를 함께 본다.

## Design Entry Packet

design은 시작 전에 아래 packet을 읽고 route를 고른다.

```md
- product_one_line:
- target_and_primary_actor:
- actor_split:
- must_have_scope:
- out_of_scope:
- first_value_hypothesis:
- current_flow_shape:
- trust_or_policy_constraints:
- source_of_truth_and_ops_constraints:
- approval_owner:
- exception_owner:
- required_visible_states:
- owner_freeze_completeness:
- unresolved_planning_questions:
- shared_docs_safe_to_enrich:
- reopen_planning_if:
```

`owner_freeze_completeness`는 아래처럼 쓴다.

```md
- target_and_primary_actor: `done | open`
- must_have_scope: `done | open`
- source_of_truth: `done | open`
- approval_owner: `done | open`
- exception_owner: `done | open`
- policy_or_sla_owner: `done | open`
- actor_split: `done | open`
- required_visible_states: `done | open`
```

## Pre-Design Freeze Gate

아래가 비어 있으면 design을 열지 않고 `bundle_recheck` 또는 planning update로 보낸다.

- target and primary actor
- must-have / out-of-scope
- source of truth
- approval owner
- exception owner
- policy or SLA owner
- actor split when visibility changes by role
- required visible states when trust or recovery is product-shaping

hard-case guard:

- regulated booking/revisit면 `booking_authority`, `revisit_or_rebook_recovery_owner`, `required_visible_booking_state`까지 잠긴다
- delegate/callback면 `delegate_authorization_artifact_or_flag`, `callback_owner_or_sla`, `delegated_callback_boundary`, `required_visible_callback_state`까지 잠긴다
- review/appeal이면 `review_source_of_truth`, `review_sla`, `appeal_or_recheck_owner`, `required_visible_review_state`까지 잠긴다
- marketplace/dispute/payout면 `dispute_or_refund_owner`, `reversal_or_payout_owner`, `required_visible_remedy_state`까지 잠긴다
- offline approval/sync면 `sync_restore_authority`, `offline_capture_boundary`, `required_visible_sync_state`까지 잠긴다
- enterprise admin/security gate면 `admin_gate_owner`, `delegated_admin_visibility_rule`, `required_visible_gate_state`까지 잠긴다

## What Design Must Treat As Locked

아래는 unresolved marker가 없는 한 design에서 다시 열지 않는다.

- target user
- why this segment first
- must-have / defer / out-of-scope
- buyer / payer / approval owner
- source of truth
- policy owner, SLA, audit owner
- exception owner
- payout / reversal owner
- delegated admin gate owner
- sync / restore authority
- required visible state semantics
- first customer or rollout reality

design은 이 locked input을 `visual / flow / screen / signal`로 번역한다.

## What Design Is Allowed To Refine

- first value moment의 명확한 순간과 표현
- actor visibility, permission timing, recovery visibility
- state priority order
- signal placement
- layout mode, density, device delta
- typography, color, motion, trust tone

## Reopen Rule

아래면 design이 자체적으로 봉합하지 말고 planning으로 되돌린다.

1. design을 하려니 must-have가 바뀌어야 한다
2. 새로운 actor 또는 approval owner가 생긴다
3. signal placement를 맞추려니 source of truth가 바뀐다
4. trust/disclosure requirement를 맞추려니 policy/SLA가 바뀐다
5. visual/flow fix를 하려니 rollout or viability assumption이 깨진다
6. required visible state를 설계하려는데 owner or source of truth가 없다

## Question Skip Rule

design은 아래 질문을 기본적으로 다시 묻지 않는다.

- 이 제품은 왜 존재하는가
- primary segment는 누구인가
- MVP must-have는 무엇인가
- revenue or buyer model은 무엇인가
- 운영 owner는 누구인가
- approval owner, source of truth, exception owner는 누구인가

대신 design은 아래 질문을 묻는다.

- first value moment는 어디서 보이는가
- 절대 숨기면 안 되는 signal은 무엇인가
- 어떤 role split이 visibility를 바꾸는가
- 어떤 state가 실제로 must-render인가
- 어떤 tone/density/layout이 이 제품에 맞는가

## Shared Doc Update Rule

### `UX-IA.md`

- planning: flow skeleton, role split, lifecycle 정의
- design: state visibility, navigation emphasis, trust timing, recovery legibility 보강

### `SCREEN-SPECS.md`

- planning: surface purpose, CTA, edge case, acceptance notes 정의
- design: visual priority, signal placement, device delta, state priority 보강

## Non-Reaskable Fields

design triage와 producer skills는 아래를 다시 discovery 질문으로 쓰지 않는다.

- product existence / why-now
- target segment
- must-have vs defer
- buyer / payer model
- approval owner
- source of truth
- policy / SLA owner

예외:

- `unresolved_planning_questions`에 남아 있는 경우
- `reopen_planning_if`가 발화한 경우

## Hybrid Hard-Case Tie-Break

아래 조합이면 design은 first pass에서 planning 사실을 다시 해석하지 않는다.

| Shape | Upstream freeze first | Design first owner |
| --- | --- | --- |
| marketplace + dispute/remedy | `BUSINESS-OPS.md` | `UX-IA.md` for remedy timing |
| offline + approval/sync | `BUSINESS-OPS.md` | `SCREEN-SPECS.md` for visible sync states |
| enterprise gate + delegated admin | `BUSINESS-OPS.md` | `SCREEN-SPECS.md` for gate/admin rendering |
| public-service + callback/assignment | `BUSINESS-OPS.md` | `UX-IA.md` for assignment/callback lifecycle |

## Fast Triage

- planning bundle이 아직 얕음
  - planning으로 되돌아간다
- planning bundle은 충분하고 visual/flow/screen만 부족함
  - design으로 바로 들어간다
- 무엇이 바뀌었는지 애매함
  - `PLANNING-RECORD.md`에 changed fact/decision을 먼저 적고 route를 다시 고른다
- 규제형 / 공공서비스형 / enterprise gate인데 owner freeze가 비어 있음
  - `BUSINESS-OPS.md`부터 다시 잠근다
