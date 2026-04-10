---
status: draft
owner: product-design
last_updated: YYYY-MM-DD
source_of_truth_for:
  - design.direction
  - design.tokens
  - design.visual_hierarchy
  - design.trust_posture
  - design.proof_governance_posture
  - design.component_rules
  - design.motion_rules
  - design.responsive_rules
  - design.generator_contract
update_when:
  - visual direction changes
  - trust, proof, disclosure, or governance posture changes
  - core screen priorities change materially
  - design system or token names change
open_questions:
  - none
change_log:
  - YYYY-MM-DD: created
---

# DESIGN

## document_precedence

- `PROJECT-THESIS.md`, `PRD.md`
  - product meaning, target user, must-have scope, risk posture를 먼저 고정한다
- `DESIGN.md`
  - visual system, trust/proof posture, token names, generator rules를 소유한다
- `UX-IA.md`
  - flow, navigation, actor split, lifecycle, recovery를 소유한다
- `SCREEN-SPECS.md`
  - screen purpose, sections, CTA, states, signal placement를 소유한다

충돌하면 예쁘게 합치지 말고 owning doc를 먼저 수정한다.

## design_route_snapshot

- current_gap:
- starting_skill:
- resolved_route:
- creating_or_updating: `new_bundle | update_existing`
- active_domain_stressors:
- required_conditional_packs:
- owner_doc_to_edit_first:
- escalation_boundary:

## provisional_mode

- confidence: `high | medium | low`
- assumptions:
- blocked_by:
- do_not_assume:
- exact_next_input:

## Product Context

- **What this is:** [1-2 sentence description]
- **Who it's for:** [primary users]
- **What they need to feel:** [trust / speed / warmth / precision / premium / playfulness]
- **Space / industry:** [category, domain, notable peers]
- **Project type:** [marketing site / mobile app / SaaS / marketplace / internal tool / workflow product]
- **Primary surfaces:** [landing / dashboard / search / detail / editor / queue / settings / booking]
- **Core interaction model:** [browse / compare / configure / approve / transact / draft-review-approve]

## Experience Intent

- **Primary UX promise:** [what the interface should make feel easier]
- **Trust posture:** [how the interface earns belief]
- **Complexity posture:** [hide complexity / reveal structure / teach progressively]
- **Emotional tone:** [calm / sharp / playful / editorial / industrial / premium]
- **Interaction personality:** [quiet / direct / lively / sober]
- **Hierarchy priority:** [what must visually win first]
- **Density target:** [airy / balanced / dense]

## Active Domain Stressors

이 섹션은 generic visual essay를 막고, domain-specific pressure를 reusable contract로 남기는 자리다.

| Stressor | Why it matters here | Required output impact |
| --- | --- | --- |
| regulated / disclosure | [reason] | [plain-language / audit history / delegated access / safe communication] |
| proof / provenance / freshness | [reason] | [last-updated / source cue / ranking explanation / proof surface] |
| dense data / alerts | [reason] | [comparison baseline / alert hierarchy / compact layout] |
| offline / field capture | [reason] | [one-hand use / degraded mode / sync recovery / proof capture] |
| moderation / governance | [reason] | [report state / queue signal / threshold disclosure] |
| membership / entitlement | [reason] | [paywall boundary / access state / upgrade path] |
| platform / docs / secrets | [reason] | [environment split / secret visibility / quickstart priority] |

## Inspiration References

3개 이하만 유지한다. 너무 많으면 style drift가 생긴다.

| Reference | Why it matters | What to borrow | What not to copy |
| --- | --- | --- | --- |
| [Brand / Site] | [reason] | [specific trait] | [specific warning] |
| [Brand / Site] | [reason] | [specific trait] | [specific warning] |
| [Brand / Site] | [reason] | [specific trait] | [specific warning] |

## Visual Theme & Atmosphere

- **Direction:** [minimal / editorial / industrial / playful / premium / utility-first]
- **Decoration level:** [minimal / restrained / intentional / expressive]
- **Mood:** [1-3 sentence description]
- **Visual thesis:** [one sentence on what the design is trying to communicate]
- **Image / illustration stance:** [product screenshot / photography / diagram / icon-led / mixed]
- **Background philosophy:** [flat / layered / gradient / atmospheric / paper / dark canvas]
- **Anti-slop warning:** [what this design must never collapse into]

## Operational Risk / Proof / Governance Surfaces

- **Proof surfaces:** [reviews / citations / verification / pricing disclosure / comparison baseline / evidence receipt]
- **Governance surfaces:** [moderation / approval / override / audit history / policy disclosure]
- **Privacy surfaces:** [role visibility / delegated access / lock-screen / quiet hours / safe communication]
- **Notification posture:** [ambient / assertive / minimal / operational]
- **Disclosure priority:** [what must be plain-language and unavoidable]
- **Save / resume / handoff posture:** [drafting / reassignment / callback / follow-up]

## Color Palette & Roles

### Primary

- **Primary brand:** [hex] — [meaning and usage]
- **Primary text:** [hex]
- **Primary background:** [hex]
- **Primary inverse:** [hex]

### Secondary

- **Secondary accent:** [hex] — [usage]
- **Support accent:** [hex] — [usage]

### Neutral Scale

- **Neutral 900:** [hex]
- **Neutral 700:** [hex]
- **Neutral 500:** [hex]
- **Neutral 300:** [hex]
- **Neutral 100:** [hex]
- **Neutral 50:** [hex]

### Semantic

- **Success:** [hex]
- **Warning:** [hex]
- **Error:** [hex]
- **Info / Focus:** [hex]

### Surface & Depth

- **Surface base:** [hex]
- **Surface raised:** [hex]
- **Surface overlay:** [hex or rgba]
- **Border / ring:** [hex or shadow token]
- **Shadow system:** [single ring / layered shadows / almost flat / no shadow]

### Color Rules

- Accent colors are for [states / CTA / workflow markers / charts], not for [background decoration]
- If dark mode exists: [same system / separate reinterpretation / not supported yet]
- Avoid: [colors that break the system]

## Typography Rules

### Font Family

- **Display / Hero:** [font] — [why]
- **Primary body / UI:** [font] — [why]
- **Monospace / data / code:** [font] — [why]
- **Optional editorial / accent:** [font] — [why]
- **Fallback / loading:** [self-hosted / Google Fonts / local stack / swap strategy]
- **OpenType features:** [liga / tnum / cvXX if relevant]

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Display Hero | `Geist` | `48px` | `600` | `1.05` | `-0.02em` | starter seed, replace only with explicit decision |
| Section Heading | `Geist` | `36px` | `600` | `1.10` | `-0.02em` | starter seed |
| Card Title | `Geist` | `24px` | `600` | `1.20` | `-0.01em` | starter seed |
| Body Large | `Geist` | `18px` | `400` | `1.55` | `0` | starter seed |
| Body | `Geist` | `16px` | `400` | `1.50` | `0` | starter seed |
| UI / Button | `Geist` | `14px` | `500` | `1.40` | `0` | starter seed |
| Caption | `Geist` | `12px` | `500` | `1.35` | `0.01em` | starter seed |
| Mono Label | `Geist Mono` | `12px` | `500` | `1.20` | `0` | starter seed |

### Typography Principles

- [example: compression as identity / editorial calm / geometric precision]
- [example: body readability beats visual drama below 18px]
- [example: weight range must stay narrow]

## Spacing, Radius, and Layout

### Spacing

- **Base unit:** [4px / 8px]
- **Density:** [compact / comfortable / spacious]
- **Scale:** [2xs / xs / sm / md / lg / xl / 2xl / 3xl]

### Radius

- **Micro:** [value]
- **Standard interactive:** [value]
- **Card / panel:** [value]
- **Large / hero:** [value]
- **Pill / full:** [value]

### Layout

- **Approach:** [grid-disciplined / editorial / hybrid / app-shell]
- **Grid:** [columns by breakpoint]
- **Max content width:** [value]
- **Section rhythm:** [how spacing separates major moments]
- **Container behavior:** [boxed / full bleed / mixed]

## Motion, Disclosure, and Feedback

- **Approach:** [minimal-functional / intentional / expressive]
- **Easing:** [enter / exit / move]
- **Duration:** [micro / short / medium / long]
- **Hover behavior:** [subtle / none / pronounced]
- **Focus behavior:** [exact ring spec]
- **Loading behavior:** [skeleton / shimmer / pulse / static]
- **Disclosure posture:** [inline / progressive / expandable / explicit hard stop]
- **Notification style:** [banner / toast / inline / inbox / mixed]
- **State transition rules:** [modal / tab / accordion / list / queue / refresh]

## Component Stylings

### Buttons

- **Primary CTA:** [bg, text, padding, radius, border, hover, focus]
- **Secondary:** [bg, text, padding, radius, border, hover, focus]
- **Ghost / tertiary:** [bg, text, border, hover]

### Cards & Containers

- **Card surface:** [bg, border/ring, radius, shadow]
- **Panel / modal:** [bg, border/ring, radius, overlay]
- **List / row item:** [separation style]

### Inputs & Forms

- **Input style:** [bg, border, radius, focus]
- **Search / filter:** [shape and interaction]
- **Validation / helper text:** [appearance rules]

### Navigation

- **Top nav:** [style]
- **Sidebar / tabs:** [style]
- **Mobile nav:** [collapse strategy]

### Data / Technical Surfaces

- **Table / list / metric card:** [rules]
- **Empty / loading / error state:** [rules]
- **Code / mono usage:** [rules]
- **Alert / status / proof module:** [rules]

## Trust, Status, And Proof Signal Registry

ownership rule:

- `DESIGN.md`는 signal의 의미와 visual treatment를 선언한다
- `UX-IA.md`는 어느 flow/state에서 signal이 required인지 선언한다
- `SCREEN-SPECS.md`는 어느 screen section에 어떻게 배치되는지 최종 placement를 선언한다
- conflict가 나면 placement는 `SCREEN-SPECS.md`, timing은 `UX-IA.md`, semantics는 `DESIGN.md`를 우선한다

| signal_id | Meaning | Must be visible on | Audience | Freshness / expiry rule | Escalation if missing |
| --- | --- | --- | --- | --- | --- |
| `signal.status.primary` | primary decision or progress state | `screen.primary`, `screen.detail` | `all` | state update is immediate | show fallback label + support path |
| `signal.proof.last_updated` | freshness or verification cue | `screen.primary`, `screen.detail` | `all` | must include timestamp or last-verified text | downgrade trust and show stale warning |

## Closed Token Table

AI generator나 downstream implementer가 임의 값을 넣지 못하게 exact token table을 남긴다.

| Token group | Token name | Exact value | Usage | Do not substitute |
| --- | --- | --- | --- | --- |
| color | `color.primary.bg` | `#f7f7f3` | primary background seed | `yes` |
| color | `color.primary.text` | `#171717` | primary text seed | `yes` |
| color | `color.accent.primary` | `#0a72ef` | primary action / focus accent seed | `yes` |
| radius | `radius.card` | `16px` | card and panel seed | `yes` |
| shadow | `shadow.card` | `0px 0px 0px 1px rgba(23, 23, 23, 0.08), 0px 8px 24px rgba(23, 23, 23, 0.08)` | card seed | `yes` |
| spacing | `space.md` | `16px` | standard spacing seed | `yes` |
| focus | `focus.ring` | `0px 0px 0px 2px rgba(10, 114, 239, 0.35)` | focus ring seed | `yes` |

## Screen Priority Registry

이 섹션은 stitch나 downstream agent가 핵심 화면을 틀리지 않게 하기 위한 binding table이다.

| screen_id | Why this screen matters | Primary action | Must-render states | Required trust/status/proof signals | Layout mode |
| --- | --- | --- | --- | --- | --- |
| `screen.primary_entry` | first value and first orientation | see primary task or trust cue | loading, empty, blocked, error | `signal.status.primary`, `signal.proof.last_updated` | split hero / list |
| `screen.primary_task` | main work or transaction surface | submit / book / approve / configure | default, in-progress, success, recoverable failure | `signal.status.primary` | app shell / form / queue |
| `screen.recovery_or_detail` | resolve exceptions and restore trust | retry / edit / escalate / confirm | stale, denied, override, support recovery | `signal.status.primary`, `signal.proof.last_updated` | detail / side panel |

### State Priority Rule

priority screens must resolve competing states in this order unless the product explicitly overrides it:

1. permission or safety block
2. irreversible risk or destructive warning
3. stale / proof missing / trust degraded
4. recoverable error
5. pending review / awaiting action
6. empty or first-time guidance
7. loading
8. default or success

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
| --- | --- | --- |
| Mobile Small | `0-479px` | single column, compact navigation, no secondary sticky chrome |
| Mobile | `480-767px` | single column, stacked sections, larger touch spacing |
| Tablet | `768-1023px` | two-column layout where useful, reduced side chrome |
| Desktop | `1024-1439px` | full layout, default grid, standard side chrome |
| Large Desktop | `1440px+` | expanded grid, wider data surfaces, larger whitespace |

### Responsive Rules

- Touch targets must stay at least `44px`
- Hero hierarchy should scale `48px -> 40px -> 32px` before changing weight
- Grid should collapse `3 -> 2 -> 1`
- Sticky or fixed secondary UI may disappear below `768px`
- Dense data tables should scroll horizontally below `1024px` and collapse to summary cards below `480px`
- Long text and localization should wrap without clipping, and CTA labels should tolerate up to `1.5x` expansion

## Accessibility & Content Tone

- **Contrast bar:** [minimum stance]
- **Keyboard / focus requirement:** [rule]
- **Motion reduction:** [rule]
- **Copy tone:** [direct / warm / premium / operational / playful]
- **Microcopy stance:** [helpful / terse / guided / explanatory]
- **Localization / long text tolerance:** [rule]
- **Plain-language requirement:** [where it matters most]

## Do's and Don'ts

### Do

- [specific rule]
- [specific rule]
- [specific rule]
- [specific rule]

### Don't

- [specific anti-pattern]
- [specific anti-pattern]
- [specific anti-pattern]
- [specific anti-pattern]

## Stitch Prompt Guide

stitch나 다른 AI UI 생성 도구에 바로 넣을 때는 아래 규칙을 함께 준다.

### Global Prompt Contract

- Follow `DESIGN.md` as the primary visual system.
- Reuse the stated typography, color, radius, spacing, and shadow rules exactly.
- Use `UX-IA.md` for flow and actor/state ownership.
- Use `SCREEN-SPECS.md` for `screen_id`, sections, CTA, and states.
- If input is missing, ask for it or keep the affected slot provisional. Do not invent.

### Generator Hard Rules

- Do not invent extra fonts, gradients, accent colors, token names, screen names, or component variants.
- Do not rename `screen_id` values.
- Do not hide required trust, proof, disclosure, or status signals.
- Do not override must-render states with a prettier happy path.
- If product docs and design docs conflict, stop and report the conflict instead of blending them.

### Stitch Input Packet

```md
Project:
- product_sentence:
- visual_thesis:
- current_gap:
- selected_screen_ids:

Use These Docs:
- DESIGN.md
- UX-IA.md
- SCREEN-SPECS.md

Hard Requirements:
- reuse exact token names from `Closed Token Table`
- keep each selected `screen_id` stable
- render all `must-render states`
- include all `required trust/status/proof signals`
- follow `Do's and Don'ts`
- do not invent missing values
```

### Quick Token Reference

- **Primary CTA:** `color.accent.primary`
- **Primary background:** `color.primary.bg`
- **Primary text:** `color.primary.text`
- **Border / ring:** `shadow.card`
- **Card radius:** `radius.card`
- **Focus ring:** `focus.ring`
