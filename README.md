# Planning Pack Installer

`planning-pack`은 `.codex` 또는 `.claude`에 planning template pack을 설치하는 작은 CLI다.

내부 authoring source는 [template-pack/](/Users/ikseong/Desktop/develop/vibecoding/bbang/template-pack) 아래에 있고, 배포 기준은 [RELEASE-PLAN.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/docs/internal/RELEASE-PLAN.md)에 정리했다.

설치 방법은 [INSTALL.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/INSTALL.md)에 따로 정리했다.

## Notes

- `--scope local`은 현재 프로젝트의 `.codex` 또는 `.claude` 아래에 설치한다
- `--scope global`은 `~/.codex` 또는 `~/.claude` 아래에 설치한다
- 기본 prefix는 `planning`이며, `--prefix`로 바꿀 수 있다
- shipped pack에는 validation-only artifact가 포함되지 않는다
