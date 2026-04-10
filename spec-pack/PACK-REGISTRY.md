# Pack Registry

이 문서는 `spec-pack/` 안에서 어떤 pack이 어떤 상태인지 정리한다.

## Current Registry

| pack | status | installable | notes |
| --- | --- | --- | --- |
| `planning` | compatibility-minimal | yes | smaller planning-only path |
| `design` | validated-internal-candidate | no | internal candidate only |
| `prebuild` | shipped | yes | unified default install surface, user-facing root = `spec-pack` |
| `architecture` | validated-internal-candidate | no | internal candidate only |

## Packaging Direction

registry는 stage별로 유지하지만, 다음 end-user package는 stage packs를 따로 내는 방향이 아니다.

현재 추천 packaging 방향:

- current:
  - `spec-pack` as default shipped surface
- next:
  - shipped default polish
  - current installer에서는 `--pack planning`으로 compatibility minimal install 가능

관련 문서:

- [PACKAGING-DECISION.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/PACKAGING-DECISION.md)
- [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/HOST-AWARE-INSTALL-SURFACE.md)
- [prebuild/PACKAGE-README.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/prebuild/PACKAGE-README.md)
- [prebuild/FUTURE-PACKAGING-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/prebuild/FUTURE-PACKAGING-SURFACE.md)

## Meaning

- `shipped`
  - installer가 실제로 설치할 수 있는 pack
- `compatibility-minimal`
  - smaller install path kept for compatibility and narrower use
- `validated-internal-candidate`
  - loop와 내부 검증은 끝났지만 end-user install surface로는 아직 정리되지 않은 pack

## Current Rule

- 기본 pack은 `prebuild`
- `planning`은 compatibility minimal path다
- `design`, `architecture`는 registry에는 올라가 있지만 install은 막는다

## Why This Exists

- installer 코드에서 `planning` 하드코딩을 줄인다
- future pack을 붙일 때 문서/manifest/code를 같은 registry로 관리한다
- shipped surface와 internal candidate surface를 섞지 않는다
