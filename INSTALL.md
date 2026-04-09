# Planning Pack Install Guide

이 문서는 `planning-pack` CLI를 어떻게 설치하고 사용하는지 따로 정리한 문서다.

현재 scaffold 기준 package name은 `@ikseong/planning-pack`이다.
publish 전에 package name은 바뀔 수 있지만, 명령 구조는 그대로 유지하는 것을 전제로 한다.

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
npm install -g @ikseong/planning-pack
```

설치 후:

```bash
planning-pack help
```

### 1회성 실행

```bash
npx @ikseong/planning-pack install --host codex --scope local
```

## 3. 기본 명령

### Codex local install

```bash
planning-pack install --host codex --scope local
```

현재 프로젝트의 `.codex/` 아래에 설치한다.

### Codex global install

```bash
planning-pack install --host codex --scope global
```

`~/.codex/` 아래에 설치한다.

### Claude local install

```bash
planning-pack install --host claude --scope local
```

현재 프로젝트의 `.claude/` 아래에 설치한다.

### Claude global install

```bash
planning-pack install --host claude --scope global
```

`~/.claude/` 아래에 설치한다.

## 4. 부가 명령

### dry-run

실제 파일을 쓰지 않고 설치 계획만 본다.

```bash
planning-pack install --host codex --scope local --dry-run
```

### doctor

설치 상태와 누락 파일을 확인한다.

```bash
planning-pack doctor --host codex --scope local
```

### uninstall

이 CLI가 관리한 설치본만 제거한다.

```bash
planning-pack uninstall --host codex --scope local
```

## 5. 선택 옵션

### project root 지정

현재 디렉터리 대신 다른 프로젝트 경로에 local install 한다.

```bash
planning-pack install --host codex --scope local --project-root /path/to/project
```

### prefix 변경

기본 prefix는 `planning`이다.

예:

```bash
planning-pack install --host codex --scope local --prefix pp
```

이 경우 skill / agent 이름은 `pp-*` 형태로 설치된다.

### force 재설치

기존 설치를 덮어쓴다.

```bash
planning-pack install --host codex --scope local --force
```

## 6. 설치 결과

### Codex

local 예시:

```text
<project>/.codex/
  planning-pack/
  skills/planning-*/
  agents/planning-*.md
```

global 예시:

```text
~/.codex/
  planning-pack/
  skills/planning-*/
  agents/planning-*.md
```

### Claude

local 예시:

```text
<project>/.claude/
  planning-pack/
  skills/planning-*/
  agents/planning-*.md
```

global 예시:

```text
~/.claude/
  planning-pack/
  skills/planning-*/
  agents/planning-*.md
```

## 7. 설치되는 내용

포함:

- `references/`
- `templates/`
- shared `AGENTS.md`
- host-visible `skills/`
- host-visible `agents/`

제외:

- `worked-examples/`
- `RALPH-LOOP-LOG.md`
- validation-only notes

## 8. 첫 진입 순서

설치 후에는 보통 이 순서로 읽는다.

1. `planning-pack/README.md`
2. `planning-pack/references/START-HERE.md`
3. `planning-pack/references/DEFAULT-RESOLVED-ROUTES.md`
4. `planning-pack/references/OPERATOR-STARTER.md`
5. 필요 시 `planning-pack/references/CONTROL-PLANE.md`

## 9. 주의

- 현재 문서는 설치 방법 기록용이다
- host별 실제 실사용 검증은 별도로 더 진행할 수 있다
- publish 전에 package name / version policy는 확정해야 한다
