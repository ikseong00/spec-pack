# Prebuild Packaging Readiness

이 문서는 shipped `spec-pack` surface가 end-user package로 유지되기 위해 무엇이 준비되어야 하는지 정리한다.

## Goal

- unified `spec-pack`의 export 범위를 고정한다
- internal validation surface와 shipping surface를 분리한다
- install-ready 직전 남은 debt를 명시한다

## Candidate Export Set

current `spec-pack` package 본체에 들어갈 것:

- packaged `README.md`
- `planning/`
- `design/`
- `architecture/`
- `references/`
- host-visible stage skills
- host-visible stage agents

## Exclude Set

shipping default에서 제외할 것:

- `internal-authored-bundles/`
- `RALPH-LOOP-LOG.md`
- `INTERNAL-AUTHORED-BUNDLE-REVIEW.md`
- `FULL-BUNDLE-ARTIFACT-REVIEW.md`
- stress loop scratch
- validation-only summaries

## Why This Pack Is Different From planning-pack

- `planning-pack`은 stage 하나만 ship한다
- `spec-pack`은 cross-stage handoff까지 함께 ship한다
- 따라서 onboarding, routing, ownership, shared doc boundary 설명이 더 중요하다

## Must Be True Before Installable = true

- packaged first-read path가 명확하다
- shared doc ownership 설명이 packaged form에서도 흔들리지 않는다
- internal loop artifact가 shipping surface에서 완전히 빠진다
- prebuild-namespaced host skill/agent naming이 확정된다
- host overlay layer가 additive라는 rule이 packaged form에서도 보장된다
- packaged surface가 `implementation detail`을 요구하지 않는다
- operator가 stage handoff를 package choice 문제로 오해하지 않는다

## Current Read

- cross-stage validation: strong
- developer handoff boundary: strong
- service-spec completeness: strong
- packaging surface clarity: strong

현재 verdict:

- `default shipped`
- `payload-trim complete`
- `needs final publish audit only`

## Remaining Packaging Debt

- packaged onboarding language 최종 polish
- publish checklist와 install examples 최종 점검
- future `team` scope를 넣을지 여부 결정

current candidate artifacts:

- [hosts/HOST-OVERLAY-MATRIX.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/prebuild/hosts/HOST-OVERLAY-MATRIX.md)
- [EXPORT-MANIFEST-CANDIDATE.md](/Users/ikseong/Desktop/develop/vibecoding/bbang/spec-pack/prebuild/EXPORT-MANIFEST-CANDIDATE.md)
