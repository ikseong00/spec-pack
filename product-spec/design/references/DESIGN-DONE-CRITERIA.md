# Design Done Criteria

이 문서는 design 단계가 "구현 전 handoff 가능한 수준까지 정리되었다"라고 판단할 기준을 정의한다.

목표는 예쁜 시안이 아니라, 이후 stitch / designer / frontend / architecture가 같은 디자인 질문을 반복하지 않게 만드는 것이다.

## 1. Hard Gate

아래가 빠지면 design done으로 보지 않는다.

- `DESIGN.md`가 존재한다
- `UX-IA.md`가 design 관점으로 업데이트되어 있다
- `SCREEN-SPECS.md`가 design 관점으로 업데이트되어 있다
- design operator가 `START-HERE`, `DEFAULT-RESOLVED-ROUTES`, `UPDATE-ENTRY-MAP`만으로 첫 route를 고를 수 있다
- 세 문서의 `status`, `owner`, `last_updated`, `source_of_truth_for`, `update_when`, `open_questions`, `change_log`가 있다
- `DESIGN.md`에 아래가 있다
  - document precedence
  - design route snapshot
  - provisional mode
  - product context
  - experience intent
  - active domain stressors
  - inspiration references
  - visual theme and atmosphere
  - operational risk / proof / governance surfaces
  - color palette and roles
  - typography rules
  - spacing / radius / layout
  - motion / interaction
  - component styling rules
  - trust, status, and proof signal registry
  - closed token table
  - screen priority registry
  - responsive behavior
  - accessibility / content tone
  - do / don't
  - stitch prompt guide
- `UX-IA.md`에 아래가 있다
  - first-time / repeat / recovery flow
  - navigation model
  - screen/page map
  - state visibility rules
  - trust / error / empty / loading / permission / offline / review-pending 흐름
  - first value moment와 가장 중요한 user action
- `SCREEN-SPECS.md`에 아래가 있다
  - screen purpose
  - main sections
  - primary CTA
  - inputs / outputs
  - condition or rule refs
  - states
  - blocked or not allowed states
  - edge cases
  - dependencies
  - reentry or recovery entry points
  - role specific variants
  - visual priority
  - layout mode
  - device variant notes
  - required trust or status signals
  - design notes
- design stage의 핵심 화면 3개 이상이 식별되어 있다
- stitch가 바로 사용할 수 있는 prompt contract가 있다
- design system과 flow/state 구조가 서로 충돌하지 않는다
- generator가 invent하지 않도록 hard rule이 있다
- P0/P1 screen은 각 must-have 기능의 핵심 조건, 예외, 상태 차이를 실제 surface로 번역한다

## 2. Design Success Conditions

design 품질이 충분하다고 보려면 아래도 보여야 한다.

- visual tone이 제품의 problem/target과 맞는다
- 디자인 방향이 reference 복붙이 아니라 product intent에 맞게 번역되었다
- typography hierarchy가 분명하다
- color usage가 기능적이고 설명 가능하다
- spacing / radius / shadow / motion이 일관된다
- AI slop 패턴이 통제된다
- 핵심 trust/state information이 decorative layer 뒤로 밀리지 않는다
- first-time user가 어디서 무엇을 해야 하는지 화면 우선순위가 명확하다
- mobile / desktop / role별 차이가 있으면 문서에 반영된다
- error / empty / loading / recovery가 happy path만큼 중요하게 다뤄진다
- 기능별 허용/차단/예외 조건이 visual or copy layer에서 사라지지 않는다
- 역할 차이나 정책 차이가 필요한 screen에서는 visibility/action difference가 숨지지 않는다

## 3. Stitch Readiness

`DESIGN.md`는 stitch 같은 생성 도구가 그대로 읽을 수 있어야 한다.

- prompt guide가 있다
- token reference가 있다
- stitch input packet이 있다
- AI가 임의의 폰트, 색, spacing 값을 넣지 못하게 하는 guardrail이 있다
- product docs와 충돌 시 어느 쪽을 우선할지 rule이 있다
- 핵심 screen priority와 state priority가 적혀 있다

## 4. Handoff Readiness

design done은 아래 문장이 가능해야 한다.

- "이 제품은 어떤 감각으로 보여야 하는지" 한 문장으로 말할 수 있다
- "핵심 화면 3개가 무엇인지" 말할 수 있다
- "각 화면에서 가장 중요한 action/state가 무엇인지" 말할 수 있다
- "각 핵심 기능이 어떤 조건과 예외를 화면에서 어떻게 드러내는지" 말할 수 있다
- "frontend가 구현하면서 반드시 지켜야 할 visual rules"를 말할 수 있다
- "architecture가 이 디자인에서 절대 깨면 안 되는 상태/권한/흐름"을 말할 수 있다
- "컴포넌트를 어떻게 쪼갤지"는 아직 열려 있어도 된다

## 5. Update Readiness

design 문서는 living doc이어야 한다.

- 새 화면이 추가되면 어떤 문서를 먼저 업데이트해야 하는지 분명하다
- visual refresh가 오면 `DESIGN.md`를 먼저 수정한다
- flow가 바뀌면 `UX-IA.md`를 먼저 수정한다
- 화면 구조/상태가 바뀌면 `SCREEN-SPECS.md`를 먼저 수정한다
- downstream 문서가 소유 문서보다 앞서 바뀌면 `stale`로 취급한다
- trust/governance/privacy/density change도 first owning doc가 분명하다

## 6. Hard Fail

아래 중 하나면 design done이 아니다.

- `DESIGN.md`가 감성 메모 수준이고 실제 tokens/rules가 없다
- `DESIGN.md`에 provisional mode나 active stressor 선언이 없다
- `UX-IA.md`가 flow보다 page list 수준에 머문다
- `SCREEN-SPECS.md`에 상태/예외/우선순위가 없다
- `SCREEN-SPECS.md`에 핵심 기능의 조건/차단/복귀 surface가 없다
- reference style은 있는데 product-specific translation이 없다
- happy path만 있고 recovery/trust/error state가 약하다
- stitch가 이 문서를 읽어도 제멋대로 스타일을 만들 가능성이 높다
- frontend가 같은 디자인 질문을 다시 많이 해야 한다
- component hierarchy나 framework-specific 구현 방식을 complete criteria처럼 요구한다
