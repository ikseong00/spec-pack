# Mockup Preview Outputs

이 문서는 `design` 다음에 붙는 optional `mockup preview` 산출물을 정의한다.

이 단계의 목적은:

- 개발 전에 핵심 화면을 사용자나 이해관계자에게 보여줄 수 있게 한다
- 제품 가치와 흐름이 실제로 이해되는지 본다
- 큰 UX 오해를 구현 전에 줄인다
- 사용자 앱 본체를 건드리지 않고도 실행 가능한 preview를 만든다

이 단계는 `design` core output을 대체하지 않는다.
canonical owner는 여전히 아래 문서다.

- visual system: `DESIGN.md`
- flow and lifecycle: `UX-IA.md`
- screen purpose and must-render state: `SCREEN-SPECS.md`

preview 산출물은 `설명용/검증용 projection`이다.

기본 권장 형태는 `standalone static preview`다.

- `preview/index.html`
- `preview/styles.css`
- `preview/app.js`
- `preview/assets/*`

즉:

- 사용자 앱 코드에 붙이지 않는다
- npm install이나 framework setup를 요구하지 않는다
- 브라우저에서 바로 열 수 있는 정적 결과물로 만든다
- 클릭/스크롤/탭/모달 정도의 가벼운 인터랙션만 넣는다

## Use When

- 구현 전에 사용자 반응을 빠르게 보고 싶다
- 이해관계자 정렬이 필요하다
- first value moment가 실제로 전달되는지 확인하고 싶다
- trust/proof/recovery 화면을 미리 보여줘야 한다

## Optional Output Set

최소 산출물은 아래 2개다.

1. `MOCKUP-PREVIEW.md`
2. `preview/` 또는 `mockups/` / `key-screens.pdf`

있으면 좋은 추가 산출물:

3. `PROTOTYPE-LINK.md`
4. `USER-FEEDBACK-NOTES.md`

## 1. MOCKUP-PREVIEW.md

이 문서는 preview session의 진행 문서다.

반드시 들어가야 하는 것:

- preview objective
- intended audience
- scenario to walk through
- 무엇을 검증하려는지
- 어떤 화면을 어떤 순서로 보여줄지
- feedback를 어느 owning doc로 되돌릴지

이 문서가 답해야 하는 질문:

- 이 목업은 누구에게 왜 보여주는가
- 어떤 시나리오를 따라 보여줄 것인가
- 무엇이 pass면 다음 단계로 갈 수 있는가

## 2. preview/ 또는 mockups/ / key-screens.pdf

가장 권장되는 형태는 `preview/`다.

```text
preview/
  index.html
  styles.css
  app.js
  assets/*
```

이 산출물은 실제 제품 코드가 아니라 preview artifact다.

가능한 것:

- 클릭 시 화면 전환
- 탭 전환
- 모달 열기/닫기
- 온보딩 step 이동
- 스크롤 기반 강조
- 성공/실패/빈 상태 전환

하지 않는 것:

- 실제 API 호출
- 실제 인증
- 실제 저장
- 실제 앱 라우팅
- 실제 비즈니스 로직

즉 `앱처럼 보이고 만져지지만, 실제 앱은 아닌 것`으로 만든다.

### Static mockups

정적 이미지나 PDF만 필요하면 핵심 화면만 추린 static preview asset으로도 충분하다.

최소로 포함해야 하는 화면:

- entry screen
- first value screen
- core action screen
- result/confirmation screen
- failure/recovery/trust screen

좋은 preview asset은:

- screen id와 연결된다
- `SCREEN-SPECS.md`와 어긋나지 않는다
- status/trust/proof signal을 숨기지 않는다

## 3. PROTOTYPE-LINK.md

clickable prototype가 있을 때만 추가한다.

반드시 적어야 하는 것:

- link
- version/date
- intended device
- known limitations

## 4. USER-FEEDBACK-NOTES.md

preview 이후 반응을 기록하는 문서다.

반드시 적어야 하는 것:

- who was shown the preview
- what they understood correctly
- where they got confused
- what changed in response
- which owning doc must be updated

## Runtime Rule

preview는 사용자 프로젝트에 별도 설치를 요구하지 않는 것이 기본 원칙이다.

- 사용자 앱의 JS 모듈 시스템에 의존하지 않는다
- framework runtime에 의존하지 않는다
- 가능하면 파일만 열어서 보이거나, 아주 가벼운 정적 서버만 있으면 된다

## Guardrails

이 단계에서 하지 않는 것:

- production UI 확정
- pixel-perfect QA
- implementation detail 정의
- component architecture 설계
- 사용자 앱 본체에 preview 코드를 직접 섞는 것

preview에서 나온 변경은 항상 upstream owner 문서로 되돌린다.

- visual rule change -> `DESIGN.md`
- flow/lifecycle change -> `UX-IA.md`
- screen/state/signal placement change -> `SCREEN-SPECS.md`

preview doc가 canonical source가 되면 안 된다.

## Good Preview Output

좋은 mockup preview 산출물은 아래를 만족한다.

- 사용자가 설명 없이도 핵심 가치와 흐름을 어느 정도 이해한다
- 어떤 화면을 왜 보여주는지 명확하다
- feedback가 감상평으로만 남지 않고 owning doc update로 이어진다
- implementation detail이 아니라 product understanding을 검증한다
- 별도 설치 없이도 브라우저에서 바로 보여줄 수 있다
