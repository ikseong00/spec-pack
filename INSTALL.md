# Make Product Spec Install Guide

이 문서는 `make-product-spec` CLI 설치와 사용법을 정리한 문서다.

- package name: `@ikseongjo/make-product-spec`
- primary CLI: `make-product-spec`
- compatibility alias: `dev-spec`, `spec-pack`, `planning-pack`
- default shipping boundary: `prebuild`
- host-aware install 기준: [HOST-AWARE-INSTALL-SURFACE.md](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/HOST-AWARE-INSTALL-SURFACE.md)

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
npm install -g @ikseongjo/make-product-spec
```

설치 후:

```bash
make-product-spec help
```

### 1회성 실행

```bash
npx @ikseongjo/make-product-spec install --host codex --scope local
```

## 3. 기본 명령

### Codex local install

```bash
make-product-spec install --host codex --scope local
```

현재 프로젝트의 `.codex/` 아래에 unified `product-spec`을 설치한다.

### Codex global install

```bash
make-product-spec install --host codex --scope global
```

`~/.codex/` 아래에 설치한다.

### Claude local install

```bash
make-product-spec install --host claude --scope local
```

현재 프로젝트의 `.claude/` 아래에 unified `product-spec`을 설치한다.

### Claude global install

```bash
make-product-spec install --host claude --scope global
```

`~/.claude/` 아래에 설치한다.

## 4. 부가 명령

### dry-run

```bash
make-product-spec install --host codex --scope local --dry-run
```

### doctor

```bash
make-product-spec doctor --host codex --scope local
```

### uninstall

```bash
make-product-spec uninstall --host codex --scope local
```

## 5. 선택 옵션

### project root 지정

```bash
make-product-spec install --host codex --scope local --project-root /path/to/project
```

### prefix 변경

기본 prefix는 pack별 기본값을 따른다.

- `prebuild` 기본 prefix:
  - `product-spec`
- `planning` 기본 prefix:
  - `planning`

예:

```bash
make-product-spec install --host codex --scope local --prefix pp --pack planning
```

주의:

- `--pack prebuild`는 현재 custom `--prefix`를 지원하지 않는다
- prebuild는 기본 prefix `product-spec`을 사용한다

### force 재설치

```bash
make-product-spec install --host codex --scope local --force
```

### pack 지정

현재 install 가능한 pack은 `prebuild`, `planning`이다.

```bash
make-product-spec install --host codex --scope local --pack prebuild
make-product-spec install --host codex --scope local --pack planning
```

## 6. 설치 결과

### Codex

local 예시:

```text
<project>/.codex/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-codex-*/
  agents/product-spec-*.md
```

global 예시:

```text
~/.codex/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-codex-*/
  agents/product-spec-*.md
```

### Claude

local 예시:

```text
<project>/.claude/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-claude-*/
  agents/product-spec-*.md
```

global 예시:

```text
~/.claude/
  product-spec/
  skills/product-spec-*/
  skills/product-spec-claude-*/
  agents/product-spec-*.md
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

현재 기본 설치는 `prebuild`다. `prebuild`는 host에 따라 같은 shared bundle을 설치하되, host overlay entry skill만 함께 설치한다. `planning`은 더 작은 compatibility path다.

## 8. 첫 진입 순서

설치 후 기본적으로는 이 순서로 읽는다.

1. `product-spec/README.md`
2. `product-spec/references/START-HERE.md`
3. `product-spec/planning/references/START-HERE.md`
4. `product-spec/design/references/START-HERE.md`
5. `product-spec/architecture/references/START-HERE.md`

`--pack planning`이면 아래 순서로 읽는다.

1. `planning-pack/README.md`
2. `planning-pack/references/START-HERE.md`
3. `planning-pack/references/DEFAULT-RESOLVED-ROUTES.md`
4. `planning-pack/references/OPERATOR-STARTER.md`
5. 필요 시 `planning-pack/references/CONTROL-PLANE.md`

## 9. 주의

- 공개 문서와 기본 명령은 `make-product-spec` 기준이다.
- `dev-spec`, `spec-pack`, `planning-pack`은 compatibility alias로만 남긴다.
- `--pack prebuild`가 기본 설치 surface다.
- host별 실제 실사용 검증은 별도로 더 진행할 수 있다.

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

현재 sample roles:

- `explorer`
- `reviewer`
- `docs_researcher`

