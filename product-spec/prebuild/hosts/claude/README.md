# Claude Overlay

이 디렉터리는 shipped `product-spec`의 Claude overlay source다.

목표:

- shared prebuild pack을 Claude surface에서 더 직관적으로 시작하게 한다
- route와 ownership reminder를 entry skill로 압축한다
- canonical service-spec truth는 shared layer에서 유지한다

현재 포함:

- source: `skills/claude-entry/SKILL.md`
- installed: `skills/product-spec-claude-entry/SKILL.md`

원칙:

- Claude-specific wording만 준다
- doc truth를 새로 만들지 않는다
- shared `START-HERE`, handoff, ownership docs를 먼저 읽게 한다
