# Host-Aware Install Surface

이 문서는 `claude`와 `codex` 설치 surface를 어떻게 해석할지 고정한다.

핵심 원칙:

- host에 따라 설치 루트는 달라진다
- shared docs는 host별로 fork하지 않는다
- host별 차이는 주로 `operator surface`, `skills`, `agents`, supplement에 둔다
- 서비스 명세 자체는 host별로 달라지지 않는다

## Current Shipped State

현재 default shipped pack의 user-facing shared root는 `spec-pack`이다.

지금은 아래 성격이다.

- `codex`
  - `.codex/` 아래 설치
- `claude`
  - `.claude/` 아래 설치
- 설치되는 prebuild shared bundle은 양쪽이 동일
- host overlay entry skill만 달라진다

즉 현재는:

- `host-aware layout`
  - yes
- `host-aware content split`
  - yes for overlay layer only

## Current Expected Install Shape

### Codex

- shared root:
  - `.codex/spec-pack/`
- host-visible:
  - `.codex/skills/spec-*`
  - `.codex/skills/spec-codex-*`
  - `.codex/agents/spec-*.md`

### Claude

- shared root:
  - `.claude/spec-pack/`
- host-visible:
  - `.claude/skills/spec-*`
  - `.claude/skills/spec-claude-*`
  - `.claude/agents/spec-*.md`

## Future Target

future packaging, especially the shipped `spec-pack`, should be `host-aware` in content too.

추천 구조는 3층이다.

### 1. Shared Canonical Layer

host와 무관하게 항상 같아야 하는 것:

- packaged `README.md`
- `references/`
- `templates/`
- shared `AGENTS.md`
- developer-handoff doc contract

이 레이어는 서비스 명세의 canonical source다.

### 2. Shared Domain Route Layer

host와 무관하지만 stage/domain intent를 담는 것:

- planning route skills
- design route skills
- prebuild loop route skills
- architecture route skills
- shared domain agents

이 레이어도 가능하면 host-neutral을 유지한다.

### 3. Host Overlay Layer

여기서만 `codex`와 `claude` 차이를 둔다.

예:

- host-specific operator wording
- host-specific orchestration guidance
- host-specific entry routing
- host supplement docs
- host-native naming polish

즉:

- `codex`면 codex에 자연스러운 agent/skill surface
- `claude`면 claude에 자연스러운 agent/skill surface

## Packaging Rule

future host-aware split에서도 아래는 유지한다.

- service-spec meaning은 fork하지 않는다
- canonical templates는 shared layer에 둔다
- host overlay는 additive여야 한다
- host overlay가 upstream fact를 invent하면 안 된다

## What Should Differ By Host

host별로 달라도 되는 것:

- operator start wording
- how to invoke agents/skills
- wrapper agent names
- host-native install notes
- host-native supplement files

host별로 달라지면 안 되는 것:

- final document set
- service behavior meaning
- screen/state requirements
- policy/condition wording
- developer-handoff boundary

## Recommended Direction

현재 권장 방향은 아래다.

- `planning-pack`
  - compatibility minimal surface
  - layout only host-aware
- `spec-pack`
  - current shipped surface
  - layout + content 둘 다 host-aware

current candidate artifacts:

- [prebuild/hosts/HOST-OVERLAY-MATRIX.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/prebuild/hosts/HOST-OVERLAY-MATRIX.md)
- [prebuild/EXPORT-MANIFEST-CANDIDATE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/prebuild/EXPORT-MANIFEST-CANDIDATE.md)

## Scope Note

이 문서는 `team scope`를 아직 정의하지 않는다.

현재 확정된 scope는:

- `local`
- `global`

`team`은 future scope다.
