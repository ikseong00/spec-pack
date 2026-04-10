# Prebuild Host Overlays

이 디렉터리는 shipped `product-spec`의 host-aware overlay source를 담는다.

원칙:

- shared canonical layer를 fork하지 않는다
- host overlay는 operator surface와 orchestration wording만 바꾼다
- 최종 developer-handoff doc contract는 shared layer가 유지한다

포함:

- `HOST-OVERLAY-MATRIX.md`
- `codex/`
- `claude/`

이 overlay는 아직 shipped installer surface가 아니다.
