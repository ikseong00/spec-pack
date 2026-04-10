# Future Packaging Surface

이 문서는 shipped shared root `product-spec`의 package surface 초안을 정의한다.

## Shared Root Candidate

추천 shared root 이름:

- `product-spec/`

추천 내부 구조:

```text
product-spec/
  README.md
  planning/
  design/
  architecture/
  references/
```

## Why This Shape

- stage별 문서를 버리지 않고 유지한다
- 하지만 사용자는 `pack 하나`만 설치하면 된다
- shared docs와 cross-stage references를 같은 root 안에서 연결할 수 있다

## Included

- planning stage references/templates
- design stage references/templates
- architecture stage references/templates
- prebuild references
- host-visible skills and agents needed for the combined route
- `hosts/` overlay layer

## Excluded

- `internal-authored-bundles/`
- `RALPH-LOOP-LOG.md`
- `INTERNAL-AUTHORED-BUNDLE-REVIEW.md`
- `FULL-BUNDLE-ARTIFACT-REVIEW.md`
- review scratch
- validation-only summaries

## Host Surface Candidate

future host-visible naming은 `product-spec-*` namespace로 통합한다.

예:

- planning-derived skills:
  - `product-spec-idea-discovery`
  - `product-spec-planning-synthesis`
- design-derived skills:
  - `product-spec-design-synthesis`
  - `product-spec-visual-direction-strategy`
- cross-stage agents:
  - `product-spec-design-pack-auditor`
  - `product-spec-compliance-auditor`
- host overlay entry:
  - `product-spec-codex-entry`
  - `product-spec-claude-entry`

이유:

- standalone `planning-pack`과 이름 충돌을 피한다
- unified pack이라는 점이 host-visible surface에도 드러난다
- same scope에 planning + prebuild를 함께 둘 수 있다

## Host-Aware Content Split

the shipped `product-spec`은 host-aware content split도 고려한다.

공통:

- same shared root
- same canonical references/templates
- same developer-handoff doc contract

host overlay:

- `codex`
  - codex-native operator wording
  - codex-native entry routing
- `claude`
  - claude-native operator wording
  - claude-native entry routing

원칙:

- host overlay는 additive
- service meaning은 shared layer에서 유지
- shared doc truth를 host overlay가 재정의하면 안 된다

현재 candidate overlay 초안:

- [hosts/README.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/prebuild/hosts/README.md)
- [hosts/HOST-OVERLAY-MATRIX.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/prebuild/hosts/HOST-OVERLAY-MATRIX.md)
