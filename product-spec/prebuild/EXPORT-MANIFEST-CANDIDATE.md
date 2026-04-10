# Export Manifest Candidate

이 문서는 shipped `product-spec`의 multi-source export schema 초안을 설명한다.

candidate manifest:

- [export-manifest.candidate.json](/Users/ikseong/Desktop/develop/vibecoding/make-product-spec/product-spec/prebuild/export-manifest.candidate.json)

## Why A New Schema Is Needed

`planning-pack`은 single-source manifest로 충분하다.

하지만 `product-spec`은 아래를 함께 실어야 한다.

- planning shared surface
- design shared surface
- architecture shared surface
- prebuild cross-stage references
- host overlays for `codex` and `claude`

즉 single `sourceDir + sharedDirectories + skillsDirectory + agentsDirectory`만으로는 부족하다.

## Candidate Shape

핵심 필드:

- `sharedMappings`
  - stage별 shared directories를 하나의 shared root 아래로 복사
- `sharedFiles`
  - packaged `README.md`와 stage `AGENTS.md` 배치
- `hostProfiles`
  - `codex`, `claude`별 overlay and host-visible payload source
- `skillSources`
  - stage-neutral shared skills + host overlay skills
- `agentSources`
  - stage-neutral shared agents + host overlay agents

## Packaging Intention

이 manifest 초안은 아래 원칙을 반영한다.

- shared canonical truth는 stage directories에서 유지
- prebuild cross-stage docs는 pack-local `references/`에서 유지
- host overlay는 `hosts/` 아래에서 additive하게 붙인다
- current installer에서 explicit opt-in candidate install을 지원한다

## Not Decided Yet

- 실제 installer schema 이름
- rewrite rule generalization 방식
- host overlay files를 host-visible 이름으로 어떻게 projection할지
- `team` scope가 들어올 경우 host profile과 어떻게 결합할지
