# Planning Template Pack

## Goal

This is the planning-stage template pack direction for a reusable `.claude` / `.codex`
setup. The focus is not implementation. The focus is making vague product ideas become
clear decisions through strong questioning, discovery, research, and synthesis.

## Benchmark Takeaways

### What GSD does well

- Treats planning as an artifact pipeline, not just a chat.
- Separates questioning, research, requirements, roadmap, and state.
- Uses narrow agents with clear ownership and expected outputs.
- Has strong handoff discipline so later steps do not re-ask solved questions.
- `questioning.md` is especially strong on collaborative questioning:
  - start open
  - follow energy
  - challenge vagueness
  - make the abstract concrete
  - stop when PROJECT-level clarity exists

### What gstack does well

- Treats discovery as a first-class product skill, not a warm-up.
- Uses forcing questions that expose real demand, status quo, wedge, and premise risk.
- Pushes back on weak assumptions instead of politely accepting them.
- Uses role-heavy review modes like founder/CEO/design review to sharpen thinking.
- Carries taste, ambition, and user-value pressure into planning.
- Keeps persistent learnings so future sessions do not start from zero.

### What to combine

- From GSD: structure, artifacts, scoped agents, handoff clarity.
- From gstack: discovery pressure, premise challenge, ambition review, design taste,
  monetization realism, and stronger decision critique.

## Core Planning Principles

These should live at the top of the template pack and affect every planning skill.

- Do not jump to features before the problem is clear.
- Do not accept vague language without forcing clarification.
- Ask one good question at a time.
- Treat user answers as signals to dig deeper, not boxes to check.
- Separate facts, guesses, decisions, and open questions.
- Separate research from decision-making.
- Always end a planning step with a concrete output.
- Do not let downstream steps re-open already settled decisions without reason.

## What The Pack Must Do In Planning

The planning pack should be able to:

- ask the user sharp discovery questions
- run Socratic follow-ups naturally
- detect vague or conflicting statements
- research unknowns when the conversation hits factual uncertainty
- challenge assumptions and weak premises
- compare competitors and substitutes
- turn conversation into explicit product decisions
- identify what is still unresolved
- define MVP boundaries
- shape UX direction before UI implementation
- test monetization logic before build-out
- produce authoritative planning artifacts

## Planning Skills

These are the user-facing orchestrators. They talk to the user, route sub-work,
and decide what artifact to write next.

### 1. `idea-discovery`

Purpose:
- take a fuzzy idea and make it concrete

Responsibilities:
- open with freeform exploration
- ask one question at a time
- surface problem, user, context, motivation, and desired outcome
- reflect back understanding
- stop only when a clear product thesis exists

Why it exists:
- this is the GSD `questioning.md` strength plus gstack `office-hours` pressure

### 2. `problem-validation`

Purpose:
- verify that the problem is real, painful, and worth solving

Responsibilities:
- ask about current workaround
- ask who feels the pain and how often
- separate "nice to have" from "must solve"
- look for demand evidence, not just founder enthusiasm

### 3. `market-research`

Purpose:
- gather market context, trends, and structural realities

Responsibilities:
- size the opportunity roughly
- identify market maturity and timing
- surface constraints, regulation, or supply-side issues
- summarize external forces that affect the product

### 4. `competitor-analysis`

Purpose:
- understand direct competitors, indirect competitors, and substitutes

Responsibilities:
- compare product scope and positioning
- compare UX patterns and trust signals
- identify gaps and over-served areas
- distinguish "similar app" from "current user habit"

### 5. `positioning-strategy`

Purpose:
- decide what this product is, for whom, and why it wins

Responsibilities:
- define target user priority
- define wedge
- define one-line value proposition
- define why users switch
- define what fight not to pick

### 6. `mvp-scope`

Purpose:
- cut the product down to the smallest thing that proves value

Responsibilities:
- define must-have features
- define defer list
- define explicit out-of-scope items
- define MVP success condition
- challenge accidental bloat

### 7. `ux-strategy`

Purpose:
- convert strategy into a usable product experience before UI implementation

Responsibilities:
- define first user journey
- define core flows
- define information architecture
- define search/browse/filter/detail/save patterns
- define trust-building elements

### 8. `monetization-strategy`

Purpose:
- test how the business makes money before overbuilding

Responsibilities:
- define buyer and payer
- define when monetization happens
- compare revenue model options
- identify tension between product value and monetization

### 9. `validation-plan`

Purpose:
- define how to test assumptions before and after MVP

Responsibilities:
- list critical assumptions
- design low-cost validation methods
- define signal thresholds for continue / revise / stop
- recommend interview, landing page, concierge, waitlist, or prototype tests

### 10. `planning-synthesis`

Purpose:
- turn all planning outputs into source-of-truth artifacts

Responsibilities:
- merge findings from other planning skills
- remove contradictions
- mark confirmed decisions vs open questions
- write final planning docs that later steps can trust

## Planning Agents

These are specialist workers behind the user-facing skills. They should be narrow,
artifact-driven, and easy to reuse.

### 1. `discovery-synthesizer`

Owns:
- turning messy conversation into structured notes

Outputs:
- thesis summary
- key user/problem statements
- ambiguity list
- recommended next questions

### 2. `problem-researcher`

Owns:
- evidence around the problem itself

Outputs:
- pain points
- current workaround map
- evidence strength
- weak assumptions

### 3. `market-researcher`

Owns:
- market and domain context

Outputs:
- market context memo
- trends
- risks
- structural opportunities

### 4. `competitor-researcher`

Owns:
- competitor and substitute breakdown

Outputs:
- comparison table
- positioning map
- pattern inventory
- whitespace opportunities

### 5. `positioning-advisor`

Owns:
- strategic narrowing

Outputs:
- wedge recommendation
- target-user priority
- switching reason
- messaging options

### 6. `mvp-critic`

Owns:
- scope pressure and feature-cutting

Outputs:
- must-have set
- defer set
- unnecessary complexity warnings
- MVP risk notes

### 7. `ux-researcher`

Owns:
- flow and experience design at planning level

Outputs:
- core journeys
- IA sketch
- trust requirements
- UX principles

### 8. `monetization-advisor`

Owns:
- revenue logic

Outputs:
- monetization options
- tradeoff table
- likely payer
- timing recommendation

### 9. `validation-designer`

Owns:
- experiment design

Outputs:
- assumption list
- validation experiments
- measurable thresholds
- decision gates

### 10. `decision-auditor`

Owns:
- finding contradictions and unresolved gray areas

Outputs:
- unresolved questions
- conflicting decisions
- confidence levels
- recommended follow-up path

## Recommended Flow

This is the high-level planning order.

1. `idea-discovery`
2. `problem-validation`
3. `market-research`
4. `competitor-analysis`
5. `positioning-strategy`
6. `mvp-scope`
7. `ux-strategy`
8. `monetization-strategy`
9. `validation-plan`
10. `planning-synthesis`

## What Matters Most For Your Template

If the goal is a strong reusable planning pack, the highest-value parts are:

- discovery questioning quality
- premise challenge quality
- decision synthesis quality
- memory of what is already decided

That means the first version should prioritize:

- `idea-discovery`
- `problem-validation`
- `competitor-analysis`
- `mvp-scope`
- `ux-strategy`
- `monetization-strategy`
- `planning-synthesis`
- `decision-auditor`

## Practical Direction

The cleanest hybrid is:

- GSD-style orchestration for files, stages, and handoffs
- gstack-style pressure for questioning, ambition, pushback, and taste

So the system should not just "collect answers". It should:

- ask
- challenge
- research
- synthesize
- decide
- record

That is the planning loop.
