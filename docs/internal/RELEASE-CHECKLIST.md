# Release Checklist

이 문서는 `이번 release에 무엇을 포함할지 모르겠을 때` 바로 따라 쓰는 실행용 체크리스트다.

원칙과 버전 정책은 [RELEASE-STRATEGY.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/docs/internal/RELEASE-STRATEGY.md)를 따르고, 이 문서는 매 release cycle마다 scope를 정하고 실행하는 순서만 다룬다.

## 1. 이번 Release Scope 결정

먼저 아래 6가지를 한 줄씩 채운다.

- release 목적:
  - 이번에 왜 내는가
- user-visible change:
  - 사용자가 설치 후 달라지는 점이 무엇인가
- changed surface:
  - `CLI`, `install layout`, `shared docs`, `skills`, `agents`, `packaging` 중 어디가 바뀌는가
- pack impact:
  - `default product-spec`, `planning compatibility`, 둘 다, 혹은 내부-only인지
- risk level:
  - `low`, `medium`, `high`
- target channel:
  - `candidate` 또는 `stable`

위 6개가 비면 release scope가 아직 안 닫힌 상태다.

## 2. Version 판단

아래 질문으로 `patch / minor / major`를 고른다.

### Patch

아래에 해당하면 patch다.

- wording/guide/doc clarity 개선
- installer bug fix
- dry-run/doctor/help output 개선
- shipped references/templates의 non-breaking clarification
- host overlay wording/polish

### Minor

아래에 해당하면 minor다.

- 새 shipped skill/agent 추가
- shipped template/reference 확장
- optional scope/capability 추가
- 기존 설치 명령은 유지되지만 사용자가 새 surface를 얻음

### Major

아래에 해당하면 major다.

- CLI 인자 체계가 깨짐
- installed root/prefix/naming이 깨짐
- output doc contract가 깨짐
- compatibility path 제거

판단이 애매하면 더 큰 버전을 택하지 말고 `candidate` 채널로 먼저 낸다.

## 3. Release Candidate 여부 판단

아래 중 하나라도 있으면 stable 대신 candidate로 낸다.

- onboarding 설명이 아직 덜 닫힘
- host overlay 차이가 새로 생김
- install 결과는 맞지만 surface wording이 덜 정리됨
- 큰 범위의 shipped asset 추가가 있었다
- default surface에 대한 사용자 혼동 가능성이 남아 있다

## 4. Must-Pass Gates

release 전에 아래를 반드시 확인한다.

### Packaging Integrity

- `node --test test/installer.test.mjs`
- `node bin/make-product-spec.mjs install --host codex --scope local --dry-run`
- `node bin/make-product-spec.mjs install --host claude --scope local --dry-run`
- `npm pack --dry-run`

### Surface Clarity

- `README.md`, `INSTALL.md`, `product-spec/SHIPPING-SURFACE.md`, `product-spec/PACK-REGISTRY.md`가 같은 설명을 하는가
- current default pack이 문서와 실제 동작이 일치하는가
- host/scope/local/global 설명이 일치하는가

### Boundary Hygiene

- internal-only artifact가 shipping default에 섞이지 않았는가
- worked example이 있더라도 shipping default에 들어가지 않는가
- `product-spec/`이 내부 source임이 계속 유지되는가

### Content Quality

- broad matrix / critical slice 기준이 현재 release에 필요한 수준으로 유지되는가
- 이번 변경으로 service-spec completeness가 깨지지 않았는가
- stitch readiness / update usability / document coherence가 유지되는가

## 5. Release Note 입력 정리

GitHub Release 초안 전에 아래 5줄을 정리한다.

- what changed:
- what users get after install:
- compatibility notes:
- breaking changes:
- known limitations:

위 5줄을 못 쓰면 아직 release scope 설명이 덜 된 것이다.

## 6. Candidate Release 실행 순서

1. scope 6줄 작성
2. version 결정
3. package version을 `X.Y.Z-rc.N`으로 수정
4. gate 통과 확인
5. `chore(release): vX.Y.Z-rc.N` 커밋
6. tag `vX.Y.Z-rc.N`
7. branch + tag push
8. GitHub Release draft 작성
9. npm publish with `next`
10. install smoke check 재실행

## 7. Stable Release 실행 순서

1. scope 6줄 작성
2. candidate 결과 확인
3. package version을 `X.Y.Z`로 수정
4. gate 통과 재확인
5. `chore(release): vX.Y.Z` 커밋
6. tag `vX.Y.Z`
7. branch + tag push
8. GitHub Release publish
9. npm publish with `latest`
10. public install smoke check 재실행

## 8. Go / No-Go Questions

release 직전 아래 질문에 모두 `yes`여야 한다.

- 이번 release에서 사용자가 실제로 얻는 변화가 한 문장으로 설명되는가
- 바뀐 surface가 어디인지 명확한가
- patch/minor/major 판단 이유를 말할 수 있는가
- install 결과가 문서와 같은가
- internal artifact가 shipping에 섞이지 않았는가
- rollback이 필요할 때 patch로 교정 가능한가

하나라도 `no`면 release를 미루거나 `candidate`로 내린다.

## 9. Anti-Pattern

아래 상태에서 release하지 않는다.

- "뭘 release하는지 모르지만 일단 tag부터 찍는다"
- "문서는 나중에 맞춘다"
- "default pack 설명과 실제 install 결과가 다르다"
- "internal validation artifact가 shipped tarball에 섞여 있다"
- "breaking인지 아닌지 판단 안 했는데 stable로 낸다"

## 10. Minimal Release Record

매 release마다 아래만 남긴다.

- version:
- channel:
- scope summary:
- gates passed:
- release note location:
- rollback note:

이 문서 자체를 고정값으로 채우는 게 아니라, 각 release마다 복사해서 쓰는 운영 체크리스트로 사용한다.
