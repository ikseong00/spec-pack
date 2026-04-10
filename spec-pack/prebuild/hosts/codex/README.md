# Codex Overlay

이 디렉터리는 shipped `spec-pack`의 Codex overlay source다.

목표:

- shared prebuild pack을 Codex App/CLI surface에 자연스럽게 연결한다
- Codex에서 첫 진입을 빠르게 잡는 entry skill을 둔다
- canonical service-spec truth는 shared layer에서 읽게 한다

현재 포함:

- source: `skills/codex-entry/SKILL.md`
- installed: `skills/spec-codex-entry/SKILL.md`

원칙:

- Codex-specific wording만 준다
- doc truth를 새로 만들지 않는다
- project-local Codex supplement가 있으면 additive supplement로만 읽는다
- 이 overlay만으로도 시작 경로가 바로 보여야 한다
