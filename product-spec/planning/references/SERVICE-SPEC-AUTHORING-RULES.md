# Service Spec Authoring Rules

이 문서는 planning 문서가 `개발자가 구현 방법을 판단할 수 있는 서비스 명세`가 되기 위한 작성 규칙을 정리한다.

핵심 원칙:

- 구현 방법은 열어 둔다
- 제품/행동 의미는 닫아 둔다
- 기능 목록이 아니라 조건이 붙은 동작 계약을 쓴다

## What Good Looks Like

- 각 핵심 기능은 `누가`, `언제`, `무슨 조건에서`, `무엇을`, `어떤 결과로` 끝나는지 말할 수 있다
- relevant한 blocked, denied, pending, recovery, retry, expiry가 적혀 있다
- actor별 visible state와 action 차이가 적혀 있다
- 같은 개념은 같은 이름으로 부른다
- 개발자는 API, component, module 설계를 스스로 정할 수 있지만 제품 질문을 다시 하지 않아도 된다

## Writing Rules

1. `must_have`는 기능 이름만 쓰지 않는다
   - `statement`만으로 끝내지 말고 actor, trigger, visible outcome, completion signal까지 쓴다
2. `completion_signal`은 KPI만 쓰지 않는다
   - user-visible 또는 operator-visible 완료 상태를 적는다
3. `policy_or_rule_refs`는 비워 두지 않는다
   - canonical ref를 쓰거나 explicit `none`을 쓴다
4. blocked/not allowed case를 relevant하면 적는다
5. recovery/fallback이 있으면 적는다
6. 역할 차이가 있으면 visibility/action split을 적는다
7. 외부 시스템은 구현 방식이 아니라 product fact와 영향만 적는다
8. 같은 개념의 별칭이 생기면 `Terminology Index`에 적는다

## Anti-Patterns

- `로그인 기능 제공`
- `예약 관리`
- `승인 처리`
- `에러 처리 필요`
- `알림 연동`

위 표현은 너무 얇다. 조건, actor, visible outcome, exception이 없다.

## Better Pattern

- `일반 사용자는 예약 가능 시간 안에서 예약을 요청할 수 있고, 완료되면 confirmed 또는 pending review 상태를 즉시 본다`
- `승인 권한이 없는 actor는 승인 CTA를 보지 못하고, 대신 현재 상태와 다음 가능한 행동만 본다`
- `업로드 실패 시 사용자는 실패 이유와 재시도 경로를 같은 화면에서 본다`

## Quick Check

- 이 기능은 누가 쓰는가
- 어디서 시작하는가
- 언제 막히는가
- 실패하면 어디로 돌아가는가
- 누가 무엇을 볼 수 없는가
- 완료됐다고 사용자는 무엇을 보게 되는가
