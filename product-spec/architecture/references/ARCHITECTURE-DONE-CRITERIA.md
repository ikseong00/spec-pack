# Architecture Done Criteria

이 문서는 architecture 단계가 구현 시작에 충분한지 판단하는 최소 기준이다.

## Hard Gate

- `ARCHITECTURE.md`에 시스템 경계와 주요 흐름이 있다
- `STATE-PERMISSIONS.md`에 must-render state와 actor split translation이 있다
- `DATA-TRUTH.md`에 source of truth와 주요 entity/derived state가 있다
- `INTEGRATIONS.md`에 external/manual handoff boundary가 있다
- `NON-FUNCTIONAL.md`에 architecture-shaping requirement가 있다
- trust-critical action의 audit/event rule이 explicit하다
- gate, unlock, sync, public projection 중 architecture-shaping인 것이 있으면 explicit하다

## Good Enough Rule

아래면 architecture를 닫을 수 있다.

- 구현자가 state machine과 permission rule을 다시 추측하지 않아도 된다
- source of truth와 write authority를 다시 묻지 않아도 된다
- 주요 integration failure / reconciliation / audit 포인트가 보인다
- non-functional risk가 notes가 아니라 requirement로 보인다
- offline, enterprise gate, directory/read-model shape가 들어와도 template가 비지 않는다
- 구현자는 API / component / module 설계를 스스로 결정할 자유가 남아 있다
- 반대로 제품/행동 규칙은 다시 제품팀에게 묻지 않아도 된다

## Not Required Yet

- final module decomposition
- production class diagram
- exhaustive API schema
- infra vendor final selection
- component hierarchy
