# Spec Pack Installer

`spec-pack`은 `.codex` 또는 `.claude`에 `spec-pack` authoring surface를 설치하는 작은 CLI다.

내부 authoring source는 [spec-pack/](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack) 아래에 있고, 배포 기준은 [RELEASE-PLAN.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/docs/internal/RELEASE-PLAN.md)에 정리했다.
현재 실제 shipping boundary는 [SHIPPING-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/SHIPPING-SURFACE.md)에 정리했다.
host-aware install 방향은 [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/HOST-AWARE-INSTALL-SURFACE.md)에 정리했다.
pack 상태는 [PACK-REGISTRY.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/PACK-REGISTRY.md)에 정리했다.

설치 방법은 [INSTALL.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/INSTALL.md)에 따로 정리했다.

## Codex Surface

이 repo는 Codex App + CLI 기준으로 아래 project-local surface를 갖는다.

- root [AGENTS.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/AGENTS.md)
- Codex supplement [.codex/AGENTS.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/.codex/AGENTS.md)
- project config [.codex/config.toml](/Users/ikseong/Desktop/develop/vibecoding/bbang/.codex/config.toml)
- Codex sample roles:
  - [.codex/agents/explorer.toml](/Users/ikseong/Desktop/develop/vibecoding/bbang/.codex/agents/explorer.toml)
  - [.codex/agents/reviewer.toml](/Users/ikseong/Desktop/develop/vibecoding/bbang/.codex/agents/reviewer.toml)
  - [.codex/agents/docs-researcher.toml](/Users/ikseong/Desktop/develop/vibecoding/bbang/.codex/agents/docs-researcher.toml)

## Notes

- `--scope local`은 현재 프로젝트의 `.codex` 또는 `.claude` 아래에 설치한다
- `--scope global`은 `~/.codex` 또는 `~/.claude` 아래에 설치한다
- `--pack` 기본값은 `prebuild`다
- 대부분 사용자는 `--pack`을 신경 쓰지 않아도 된다
- 기본 prefix는 pack별 기본값을 따른다
- `prebuild`는 `spec-*`, `planning`은 `planning-*`를 사용한다
- `prebuild`는 현재 custom `--prefix`를 지원하지 않는다
- 현재 default shipped pack은 unified `prebuild` surface이며, 설치 루트 이름은 `spec-pack`이다
- compatibility alias로 `planning-pack` command를 함께 제공한다
- shipped pack에는 loop log, scenario matrix, internal fixture가 포함되지 않는다
- `planning`은 호환용 minimal path로 남아 있다
- `design`, `architecture`는 개별 installer surface는 없고 `prebuild`에 포함된다
