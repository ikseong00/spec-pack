# Design To Architecture Handoff

이 문서는 design 단계가 끝났을 때 architecture 단계로 무엇을 넘겨야 하는지 고정한다.

목표:

- architecture가 design intent를 다시 추측하지 않게 한다
- implementation 전에 state, role, visibility, proof, surface hierarchy를 system rule로 번역할 수 있게 한다

## Handoff Principle

architecture는 화면을 다시 디자인하지 않는다.

architecture가 하는 일은:

- state를 시스템 상태로 번역
- actor split을 권한 모델로 번역
- signal requirement를 data/model/update rule로 번역
- non-negotiable UX contract를 backend/frontend/system constraint로 고정

## Required Inputs

architecture 시작 전 최소 아래가 있어야 한다.

- `DESIGN.md`
- `UX-IA.md`
- `SCREEN-SPECS.md`
- planning의 `PRD.md`
- planning의 `BUSINESS-OPS.md`
- planning의 `EXECUTION-HANDOFF.md`

## What Architecture Must Read From Each Doc

### From `DESIGN.md`

- trust posture
- proof/governance posture
- signal semantics
- closed token table only when tokens affect component/state consistency
- state priority rule when system ordering matters

### From `UX-IA.md`

- `ux.first_value_moment`
- actor / permission / visibility matrix
- recovery flow
- delegated access / moderation / reminder / save-resume rules
- lifecycle and escalation path

### From `SCREEN-SPECS.md`

- `screen_id`
- primary actor
- primary decision or confirmation
- must_render_states
- state_priority_order
- required trust or status signals
- signal placement owner
- proof or evidence surface
- audience or visibility boundary
- acknowledgment / irreversible action note

### From planning docs

- `PRD.md`
  - must-have, use case, success criteria
- `BUSINESS-OPS.md`
  - policy owner, SLA, audit, source of truth, exception owner
- `EXECUTION-HANDOFF.md`
  - build sequencing and acceptance framing

## Architecture Output Obligations

architecture 단계는 아래를 시스템 규칙으로 닫아야 한다.

1. state model
   - every must-render state maps to a system-recognizable state or derived state
2. role / permission model
   - every actor visibility split maps to an access rule or redaction rule
3. data / proof model
   - every proof/freshness/signal requirement maps to source-of-truth fields and update rules
4. event / audit model
   - every trust-critical action maps to audit, timestamp, or notification requirements where needed
5. integration / exception model
   - every recovery/escalation/support path maps to system ownership and handoff constraints

## Handoff Packet

architecture로 넘길 때 아래 packet이 있으면 충분하다.

```md
- first_value_moment:
- primary_actor_set:
- visibility_splits:
- trust_critical_states:
- must_render_states_by_screen:
- required_signals_by_screen:
- irreversible_actions:
- delegated_access_or_moderation_rules:
- freshness_or_proof_rules:
- ops_policy_dependencies:
```

## Non-Negotiable Questions For Architecture

architecture는 시작 전에 아래 질문에 답해야 한다.

1. 어떤 system state가 UI의 `must_render_states`를 만든다
2. 어떤 role boundary가 `audience_or_visibility_boundary`를 강제한다
3. 어떤 data freshness or proof field가 `required trust signals`를 만든다
4. 어떤 event/audit rule이 override, denial, recovery, escalation을 증명한다
5. 어떤 integration or manual handoff가 save/resume/delegation/support path를 성립시킨다

## Hard Fail

아래면 architecture handoff가 덜 된 상태다.

- `screen_id`는 있는데 state model로 옮길 수 없다
- actor split는 있는데 권한 rule 후보가 없다
- signal placement는 있는데 signal semantics/source가 없다
- recovery path는 있는데 owner or exception model이 없다
- first value moment는 있는데 어떤 data/state가 그 순간을 만드는지 모른다

## Suggested Next Architecture Outputs

design 다음 architecture 코어 산출물은 아래처럼 가는 것이 자연스럽다.

- `ARCHITECTURE.md`
- `STATE-PERMISSIONS.md`
- `DATA-SOURCES.md` or `DATA-TRUTH.md`
- `INTEGRATIONS.md`
- `NON-FUNCTIONAL.md`

이 문서는 그 이전 bridge다.
