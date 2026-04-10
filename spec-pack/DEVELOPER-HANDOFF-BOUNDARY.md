# Developer Handoff Boundary

이 문서는 이 pack이 개발자에게 **어디까지 전달하고 어디서 멈추는지**를 고정한다.

핵심 원칙:

- 우리는 `implementation-ready code spec`을 만드는 것이 아니다
- 우리는 `developer-judgment-ready docs`를 만든다
- 즉 문서는 `decision-complete, implementation-open` 상태를 목표로 한다

## We Must Deliver

개발자가 다시 제품 질문을 하지 않고 판단할 수 있을 정도의 문서는 전달한다.

- 무엇을 만드는가
- 누구를 위한 것인가
- 어떤 행동/상태/예외를 지원해야 하는가
- 어떤 화면과 흐름이 필요한가
- 어떤 owner / source of truth / policy / SLA가 중요한가
- 어떤 trust / recovery / permission / visibility rule이 중요한가
- 어떤 큰 구조와 경계가 필요한가
- 무엇을 절대 깨면 안 되는가

## We Do Not Deliver

아래는 개발자 또는 구현 AI가 스스로 설계한다.

- API endpoint 상세 설계
- request / response schema의 exhaustive spec
- 화면 컴포넌트 분해
- module / class / folder 구조
- 라이브러리 선택
- queue payload 상세
- DB schema / migration 상세
- infra vendor final selection

## Simple Example

로그인 기능이라면 우리가 잠그는 것은 아래다.

- 어떤 로그인 방식을 지원하는가
- 인증 / 재인증 / 복구 정책은 무엇인가
- 계정 중복 정책은 무엇인가
- 차단 / 휴면 / 미인증 상태는 어떻게 보여야 하는가
- 로그인 후 어디로 보내는가
- 어떤 actor split과 권한 차이가 있는가

반대로 아래는 개발자 책임이다.

- Google OAuth를 어떤 SDK로 붙일지
- auth 모듈을 어떤 구조로 나눌지
- session / token / cookie를 어떤 방식으로 구현할지
- UI 컴포넌트를 어떻게 분해할지

## Boundary Test

문서가 아래 질문에 답할 수 있으면 좋다.

- 개발자가 구현 전에 다시 제품 질문을 해야 하는가
- 개발자가 구현 방식을 고를 자유가 남아 있는가

이상적인 답:

- 첫 질문에는 `아니오`
- 둘째 질문에는 `예`

즉:

- product / behavior ambiguity는 없어야 한다
- implementation detail은 열려 있어야 한다
