# Architecture Ralph Loop Protocol

이 문서는 `prebuild -> architecture` 구간을 검증하는 Ralph loop 운영 규약이다.

핵심 원칙:

- architecture는 design intent를 다시 discovery하지 않는다
- review 대상은 예쁜 구조가 아니라 `build-startable system rule`이다
- patch는 scenario-specific fix가 아니라 shared contract 수준으로 올린다

## Loop Goal

- prebuild handoff만으로 architecture entry가 가능한가
- must-render state가 system state로 번역되는가
- actor split이 permission / redaction rule로 번역되는가
- signal, proof, freshness가 data rule로 번역되는가
- recovery / escalation / manual handoff가 integration or audit rule로 번역되는가

## Runner Role

runner는 architecture author 프록시다.

해야 하는 일:

- prebuild bundle을 읽고 architecture 문서를 채운다고 가정
- state / permission / data / integration / non-functional 경계를 고른다
- 어느 질문이 architecture에서 새로 생기면 안 되는지 기록한다
- 템플릿이 부족해서 system rule이 흩어지는지 본다

## Evaluator Axes

1. `handoff_readiness`
2. `state_translation_quality`
3. `permission_translation_quality`
4. `data_and_signal_translation_quality`
5. `integration_exception_model_quality`
6. `roughness_control`

## Exit Signal

- architecture author가 owner/source/state semantics를 다시 planning/design에 묻지 않는다
- must-render state가 system state 또는 derived state로 번역된다
- trust-critical action에 audit/event rule이 빠지지 않는다
- manual/system handoff boundary가 integration 또는 queue model로 내려간다
