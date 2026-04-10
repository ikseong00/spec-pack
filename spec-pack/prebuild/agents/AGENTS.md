# Prebuild Agents

이 디렉터리는 planning + design 통합 Ralph loop에서 쓰는 runner / evaluator agent 정의를 담는다.

원칙:

- runner는 실제 사용자 프록시다
- evaluator는 자기 축 하나만 평가한다
- shared doc 충돌은 `UX-IA.md`, `SCREEN-SPECS.md`의 통합 운영 문제로 본다
- loop operator는 wave 운영과 stall 판단을 맡는다
- harness optimizer는 weight를 줄이되 quality bar는 낮추지 않는다
- compliance auditor는 protocol 실제 준수 여부를 본다

현재 포함:

- `prebuild-scenario-runner.md`
- `prebuild-loop-operator.md`
- `prebuild-harness-optimizer.md`
- `compliance-auditor.md`
- `prebuild-operator-usability-evaluator.md`
- `prebuild-planning-design-handoff-evaluator.md`
- `prebuild-question-overlap-evaluator.md`
- `prebuild-document-coherence-evaluator.md`
- `prebuild-screen-readiness-evaluator.md`
- `prebuild-update-usability-evaluator.md`
- `prebuild-weight-control-evaluator.md`
