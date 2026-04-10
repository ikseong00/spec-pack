# Prebuild Pack Install Guide

이 문서는 `spec-pack` CLI를 어떻게 설치하고 사용하는지 따로 정리한 문서다.

현재 package name은 `@ikseongjo/spec-pack`이다.
호환용 alias로 `planning-pack` command도 함께 제공한다.

현재 default shipping boundary는 `prebuild`다.
즉 사용자는 별도 pack 선택 없이 `planning + design + rough architecture`를 묶은 unified surface를 설치하게 된다.
host-aware install 방향은 [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/HOST-AWARE-INSTALL-SURFACE.md)에 따로 정리했다.

## 1. 지원 대상

- host:
  - `codex`
  - `claude`
- scope:
  - `local`
  - `global`

## 2. 설치 방식

### 전역 설치

```bash
npm install -g @ikseongjo/spec-pack
```

설치 후:

```bash
spec-pack help
```

### 1회성 실행

```bash
npx @ikseongjo/spec-pack install --host codex --scope local
```

## 3. 기본 명령

### Codex local install

```bash
spec-pack install --host codex --scope local
```

현재 프로젝트의 `.codex/` 아래에 unified `spec-pack`을 설치한다.

### Codex global install

```bash
spec-pack install --host codex --scope global
```

`~/.codex/` 아래에 설치한다.

### Claude local install

```bash
spec-pack install --host claude --scope local
```

현재 프로젝트의 `.claude/` 아래에 unified `spec-pack`을 설치한다.

### Claude global install

```bash
spec-pack install --host claude --scope global
```

`~/.claude/` 아래에 설치한다.

## 4. 부가 명령

### dry-run

실제 파일을 쓰지 않고 설치 계획만 본다.

```bash
spec-pack install --host codex --scope local --dry-run
```

### doctor

설치 상태와 누락 파일을 확인한다.

```bash
spec-pack doctor --host codex --scope local
```

### uninstall

이 CLI가 관리한 설치본만 제거한다.

```bash
spec-pack uninstall --host codex --scope local
```

## 5. 선택 옵션

### project root 지정

현재 디렉터리 대신 다른 프로젝트 경로에 local install 한다.

```bash
spec-pack install --host codex --scope local --project-root /path/to/project
```

### prefix 변경

기본 prefix는 `planning`이 아니라 pack별 기본값을 따른다.

- `prebuild` 기본 prefix:
  - `spec`
- `planning` 기본 prefix:
  - `planning`

예:

```bash
spec-pack install --host codex --scope local --prefix pp
```

이 경우 skill / agent 이름은 `pp-*` 형태로 설치된다.

주의:

- `--pack prebuild`는 현재 custom `--prefix`를 지원하지 않는다
- prebuild는 기본 prefix `spec`을 사용한다

### force 재설치

기존 설치를 덮어쓴다.

```bash
spec-pack install --host codex --scope local --force
```

### pack 지정

현재 install 가능한 pack은 `prebuild`, `planning`이다.

```bash
spec-pack install --host codex --scope local --pack prebuild
```

```bash
spec-pack install --host codex --scope local --pack planning
```

## 6. 설치 결과

### Codex

local 예시:

```text
<project>/.codex/
  spec-pack/
  skills/spec-*/
  skills/spec-codex-*/
  agents/spec-*.md
```

global 예시:

```text
~/.codex/
  spec-pack/
  skills/spec-*/
  skills/spec-codex-*/
  agents/spec-*.md
```

### Claude

local 예시:

```text
<project>/.claude/
  spec-pack/
  skills/spec-*/
  skills/spec-claude-*/
  agents/spec-*.md
```

global 예시:

```text
~/.claude/
  spec-pack/
  skills/spec-*/
  skills/spec-claude-*/
  agents/spec-*.md
```

### Minimal planning path 예시

Codex local:

```text
<project>/.codex/
  planning-pack/
  skills/planning-*/
  agents/planning-*.md
```

Claude local:

```text
<project>/.claude/
  planning-pack/
  skills/planning-*/
  agents/planning-*.md
```

## 7. 설치되는 내용

포함:

- curated `references/`
- `templates/`
- host-visible `skills/`
- host-visible authoring / audit `agents/`

제외:

- `worked-examples/`
- `RALPH-LOOP-LOG.md`
- scenario matrices
- loop memory / loop protocol
- internal review reports
- internal authored bundles

현재 기본 설치는 `prebuild`다.
`prebuild`는 host에 따라 같은 shared bundle을 설치하되, host overlay entry skill만 함께 설치한다.
`planning`은 더 작은 호환용 설치 경로다.

## 8. 첫 진입 순서

설치 후 기본적으로는 이 순서로 읽는다.

1. `spec-pack/README.md`
2. `spec-pack/references/START-HERE.md`
3. `spec-pack/planning/references/START-HERE.md`
4. `spec-pack/design/references/START-HERE.md`
5. `spec-pack/architecture/references/START-HERE.md`

`--pack planning`이면 아래 순서로 읽는다.

1. `planning-pack/README.md`
2. `planning-pack/references/START-HERE.md`
3. `planning-pack/references/DEFAULT-RESOLVED-ROUTES.md`
4. `planning-pack/references/OPERATOR-STARTER.md`
5. 필요 시 `planning-pack/references/CONTROL-PLANE.md`

## 9. 주의

- 현재 문서는 설치 방법 기록용이다
- `--pack prebuild`가 기본 설치 surface다
- `--pack planning`은 호환용 minimal path다
- host별 실제 실사용 검증은 별도로 더 진행할 수 있다
- compatibility alias `planning-pack`은 남아 있지만, 공개 문서와 기본 명령은 `spec-pack`을 기준으로 한다

## 10. Codex App + CLI Local Support

이 repo 자체를 Codex workspace로 열 때는 아래를 기본 surface로 쓴다.

- root `AGENTS.md`
- `.codex/AGENTS.md`
- `.codex/config.toml`
- `.codex/agents/*.toml`

빠른 진입:

```bash
codex
```

권장:

- root `AGENTS.md`는 project-wide guidance로 둔다
- `.codex/config.toml`은 project-local baseline으로 둔다
- model/provider는 repo-local로 강제하지 않는다
- multi-agent role은 project-local `.codex/agents/`에 둔다

현재 sample roles:

- `explorer`
- `reviewer`
- `docs_researcher`
