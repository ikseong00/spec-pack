# Design Core Outputs

이 문서는 design 단계가 끝났을 때 어떤 코어 산출물이 있어야 하는지 정의한다.

원칙:

- design 단계는 별도 시안 파일 모음이 아니라 `구현 전에 참고 가능한 문서 계약`을 만든다
- visual direction만 정하는 것이 아니라, UX state와 screen structure까지 함께 고정한다
- planning 문서를 버리고 새로 쓰는 것이 아니라, planning 산출물을 design 관점으로 강화한다

## Core Outputs

design 단계의 코어 산출물은 아래 3개다.

1. `DESIGN.md`
2. `UX-IA.md`
3. `SCREEN-SPECS.md`

design 단계가 닫힌 뒤 architecture로 넘길 때는 [DESIGN-TO-ARCHITECTURE-HANDOFF.md](DESIGN-TO-ARCHITECTURE-HANDOFF.md)를 bridge reference로 함께 본다.

이 중:

- `DESIGN.md`는 design stage에서 새로 생기는 문서다
- `UX-IA.md`, `SCREEN-SPECS.md`는 planning stage 문서를 design 수준으로 보강한 결과물이다

## Optional Mockup Preview Outputs

design가 닫힌 뒤, 구현 전에 사용자나 이해관계자에게 보여줄 preview가 필요하면 optional output을 추가할 수 있다.

이 단계는 core output이 아니라 projection layer다.

- `MOCKUP-PREVIEW.md`
- `preview/index.html + styles.css + app.js`
- 또는 `mockups/` / `key-screens.pdf`
- optional `PROTOTYPE-LINK.md`
- optional `USER-FEEDBACK-NOTES.md`

자세한 기준은 [MOCKUP-PREVIEW-OUTPUTS.md](MOCKUP-PREVIEW-OUTPUTS.md)를 따른다.

## 1. DESIGN.md

이 문서는 visual / interaction system의 source of truth다.

반드시 담아야 하는 것:

- product context
- experience intent
- inspiration references
- visual theme and atmosphere
- color palette and roles
- typography rules
- spacing / radius / layout
- motion / interaction
- component styling rules
- responsive rules
- accessibility / content tone
- do / don't
- stitch prompt guide

이 문서가 답해야 하는 질문:

- 이 제품은 어떤 감각으로 보여야 하는가
- 어떤 폰트, 색, spacing, radius를 써야 하는가
- 어떤 visual risk를 일부러 피해야 하는가
- AI UI 생성 도구가 어디까지를 system rule로 따라야 하는가

## 2. UX-IA.md

이 문서는 design 단계에서 `flow contract` 역할을 한다.

planning 단계보다 더 분명해져야 하는 것:

- first-time / repeat / recovery flow
- screen/page map
- navigation model
- trust state
- empty / loading / error / permission / offline / review-pending 흐름
- mobile / desktop / role별 차이가 shape를 바꾸는지 여부
- first value moment가 어디서 발생하는지

이 문서가 답해야 하는 질문:

- 사용자는 어떤 순서로 움직이는가
- 중요한 state change는 어디서 보이는가
- 사용자 회복 경로는 무엇인가
- 어떤 화면들이 정말 핵심인가

## 3. SCREEN-SPECS.md

이 문서는 design 단계에서 `screen contract` 역할을 한다.

planning 단계보다 더 분명해져야 하는 것:

- 각 화면의 목적
- 핵심 섹션
- CTA 우선순위
- 입력 / 출력
- 상태값
- edge case
- device variant가 필요한지
- visual priority와 layout mode
- trust / status / recovery signals가 어디에 노출되는지

이 문서가 답해야 하는 질문:

- 각 화면이 정확히 무엇을 해야 하는가
- 어떤 상태를 반드시 보여줘야 하는가
- stitch나 designer가 이 화면을 만들 때 무엇을 빠뜨리면 안 되는가

## Output Contract

좋은 design 단계 결과물은 아래를 만족한다.

- `DESIGN.md`를 보면 visual system이 흔들리지 않는다
- `UX-IA.md`를 보면 flow와 state 구조가 보인다
- `SCREEN-SPECS.md`를 보면 각 화면의 목적과 구성 우선순위가 보인다
- 세 문서가 서로 충돌하지 않는다
- stitch 같은 생성 도구가 바로 활용할 수 있다
- frontend / design / architecture 단계가 같은 질문을 다시 많이 하지 않아도 된다

## Boundaries

design 단계에서 아직 하지 않는 것:

- production HTML/CSS 구현
- 픽셀 단위 final QA
- shipped UI polish
- framework-specific component code
- mockup preview 자체를 canonical source로 삼는 것

즉 design 단계의 목표는:

- 예쁜 시안 자체보다
- `일관된 경험과 시각 규칙을 문서화한 상태`를 만드는 것이다

## Trust Boundary Note

trust 관련 소유권은 [TRUST-OWNERSHIP-MATRIX.md](TRUST-OWNERSHIP-MATRIX.md)를 따른다.
