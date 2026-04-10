# Release Strategy

이 문서는 `spec-pack`을 어떤 기준으로 버전 올리고, 어떤 채널로 배포하고, 어떤 조건을 만족해야 stable로 승급하는지 고정하는 내부 운영 문서다.

매 release마다 실제로 무엇을 포함할지 정하고 실행 순서를 따라가는 체크리스트는 [RELEASE-CHECKLIST.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/docs/internal/RELEASE-CHECKLIST.md)를 사용한다.

## 1. 목표

- 사용자에게는 `easy-to-use`한 install surface만 노출한다
- 내부 authoring source와 shipped artifact를 섞지 않는다
- 문서 품질과 packaging 품질을 분리해서 본다
- `planning -> design -> architecture` pre-implementation flow를 하나의 제품으로 취급한다

## 2. Release Unit

현재 release unit은 아래 두 가지다.

- npm package:
  - `@ikseongjo/spec-pack`
- git release:
  - tag `vX.Y.Z`

실제 사용자 surface는 아래 둘로 본다.

- CLI:
  - `spec-pack`
- install result:
  - `.codex/spec-pack/...`
  - `.claude/spec-pack/...`

compatibility alias는 유지하지만 primary surface는 아래 하나다.

- `planning-pack`
  - 호환 alias
  - primary brand 아님

## 3. Release Channels

### Stable

- 대상:
  - 일반 사용자 기본 설치
- npm dist-tag:
  - `latest`
- 조건:
  - shipped surface가 확정적이고 rollback 없이 써도 되는 수준

### Candidate

- 대상:
  - release 직전 검증
- version:
  - `X.Y.Z-rc.N`
- npm dist-tag:
  - `next`
- 조건:
  - 문서 품질/packaging 품질은 충분하지만 onboarding polish나 host overlay audit가 덜 끝난 상태

### Internal

- 대상:
  - main branch authoring state
  - loop, fixture, review, internal experiments
- 외부 배포:
  - 안 함

## 4. Version Policy

`semver`를 따르되 기준은 코드 API가 아니라 `installer surface + installed artifact + intended output docs`에 둔다.

### Patch

아래는 `patch`다.

- installer bug fix
- wording/guide fix
- dry-run/doctor output 개선
- shipped references/templates의 non-breaking clarification
- host overlay wording fix
- public docs sync

조건:

- 설치 경로가 바뀌지 않음
- 기본 pack 의미가 바뀌지 않음
- 최종 산출물 문서 이름이 바뀌지 않음

### Minor

아래는 `minor`다.

- non-breaking new capability 추가
- shipped skill/agent 추가
- shipped reference/template 확장
- 새로운 optional scope 추가
- `planning` compatibility path를 깨지 않는 선의 default surface 강화

조건:

- 기존 install command가 계속 작동함
- 기존 최종 문서 bundle 의미가 유지됨

### Major

아래는 `major`다.

- CLI 인자 체계 breaking change
- installed root/skill prefix/agent naming breaking change
- output doc contract breaking change
- `planning-pack` compatibility 제거
- default pack 의미가 달라짐

## 5. Release Gates

release는 아래 4개 gate를 모두 통과해야 한다.

### Gate A. Packaging Integrity

반드시 통과:

- `node --test test/installer.test.mjs`
- `node bin/spec-pack.mjs install --host codex --scope local --dry-run`
- `node bin/spec-pack.mjs install --host claude --scope local --dry-run`
- `npm pack --dry-run`

추가 조건:

- shipped asset만 tarball에 들어가야 함
- internal fixture/log/protocol은 shipping default에 들어가면 안 됨

### Gate B. Content Quality

반드시 통과:

- planning -> design loop 안정성
- cross-stage gate 통과
- service-spec completeness 기준 통과
- stitch readiness, update usability, document coherence 유지

stable 승급 기준:

- broad matrix `PASS 100%`
- critical slice `PASS 100%`
- 최근 stability wave가 연속적으로 유지됨

### Gate C. Surface Clarity

반드시 통과:

- README, INSTALL, SHIPPING-SURFACE, PACK-REGISTRY가 같은 이야기를 함
- current default pack이 문서에 일관되게 반영됨
- host/scope/install 결과가 혼동 없이 설명됨

### Gate D. Boundary Hygiene

반드시 통과:

- `spec-pack/`은 canonical source로만 설명됨
- internal bundles, loop logs, review docs는 shipped surface에서 제외
- worked examples는 optional 공개 surface로만 유지

## 6. Release Workflow

### Candidate Release

1. release 대상 commit 고정
2. gate A-D 통과 확인
3. version을 `X.Y.Z-rc.N`로 올림
4. `chore(release): vX.Y.Z-rc.N` 커밋
5. tag `vX.Y.Z-rc.N`
6. branch + tag push
7. GitHub Release draft 작성
8. npm publish with `next`
9. install smoke check 재실행

### Stable Release

1. candidate 검증 결과 확인
2. version을 `X.Y.Z`로 올림
3. `chore(release): vX.Y.Z` 커밋
4. tag `vX.Y.Z`
5. branch + tag push
6. GitHub Release publish
7. npm publish with `latest`
8. public install command smoke check

## 7. GitHub Release Note Structure

release note는 아래 구조를 따른다.

- What changed
- What users get after install
- Compatibility notes
- Breaking changes
- Upgrade steps
- Known limitations

현재 stage에선 별도 CHANGELOG보다 GitHub Release note를 canonical public changelog로 사용한다.

## 8. Rollback Policy

### Package Issue

- 잘못 publish된 stable은 unpublish 대신 후속 patch로 교정한다
- 필요하면 `npm deprecate`로 잘못된 version에 경고를 건다

### Git Release Issue

- tag는 남기되 GitHub Release note에 withdrawn/replace 표시
- 수정 버전으로 patch release

### Surface Regression

아래 문제가 있으면 즉시 patch:

- install 결과가 문서와 다름
- shipped artifact에 internal file이 섞임
- host-specific overlay가 잘못 내려감
- default command가 실패함

## 9. Release Planning Rule

release 전략은 앞으로의 scope를 미리 고정하지 않는다.

즉 이 문서는 아래만 정한다.

- 어떤 change가 patch/minor/major인지
- 어떤 gate를 통과해야 candidate/stable이 되는지
- 어떤 순서로 tag/publish/release note를 만드는지

반대로 아래는 각 release cycle에서 별도로 정한다.

- 이번 release에 무엇을 포함할지
- 어떤 pack surface를 승급할지
- alias를 유지할지 제거할지
- onboarding/polish/overlay 중 무엇을 우선할지

### Major Version Promotion Considerations

`1.0.0` 같은 major 승급은 roadmap 목표가 아니라, 아래 조건을 만족할 때만 검토한다.

- package/CLI/install root naming이 충분히 안정적임
- 기본 pack과 compatibility path 정책이 장기간 유지 가능함
- service-spec bundle contract가 흔들리지 않음
- release workflow가 반복적으로 안정적임

## 10. Non-Goals For Release

release 전략에 포함하지 않는 것:

- code generation release
- stack-specific executor release
- framework-specific implementation surface
- internal validation harness 공개 배포

현재 제품은 `implementation generator`가 아니라 `developer-handoff spec product`다.
