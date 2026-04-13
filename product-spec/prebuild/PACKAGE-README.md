# Prebuild Pack

이 디렉터리는 shipped shared root `product-spec`의 source다.

이 pack의 목표는 사용자가 `planning -> design -> rough architecture`를 하나의 pre-implementation workflow로 진행하게 만드는 것이다.

현재 상태:

- shipped default surface
- `make-product-spec install --host <codex|claude> --scope <local|global>`로 기본 설치된다
- export schema candidate는 [EXPORT-MANIFEST-CANDIDATE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/prebuild/EXPORT-MANIFEST-CANDIDATE.md)를 본다

## Intended Included Surface

- `planning/`
- `design/`
- `architecture/`
- `references/`
- `hosts/`
- host entry skills
- selected authoring / audit agents
- packaged `README.md`

## Intended Output Contract

shipped `product-spec`이 최종적으로 만드는 developer-handoff 문서는 아래다.

1. `PROJECT-THESIS.md`
2. `PLANNING-RECORD.md`
3. `RESEARCH.md`
4. `PRD.md`
5. `UX-IA.md`
6. `SCREEN-SPECS.md`
7. `BUSINESS-OPS.md`
8. `EXECUTION-HANDOFF.md`
9. `DESIGN.md`
10. `ARCHITECTURE.md`
11. `STATE-PERMISSIONS.md`
12. `DATA-TRUTH.md`
13. `INTEGRATIONS.md`
14. `NON-FUNCTIONAL.md`

원칙:

- 구현 방식을 지시하지 않는다
- 개발자가 판단할 수 있을 만큼 서비스 명세를 닫는다
- API/component/module 설계는 여전히 개발자 책임이다

## Intended First Read

1. `README.md`
2. `references/START-HERE.md`
3. `planning/references/START-HERE.md`
4. `design/references/START-HERE.md`
5. `architecture/references/START-HERE.md`

## Not Included By Default

- internal authored bundles
- Ralph loop logs
- validation-only notes
- internal review reports

worked example은 공개 가능하면 별도 surface로 유지한다.

host-aware packaging 원칙은 [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/HOST-AWARE-INSTALL-SURFACE.md)를 따른다.
prebuild overlay candidate는 [hosts/HOST-OVERLAY-MATRIX.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/prebuild/hosts/HOST-OVERLAY-MATRIX.md)를 따른다.
