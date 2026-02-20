---
description: Machines, tooling, materials, process physics, and changeover methodology — the physical reality that manufacturing software controls
type: moc
created: 2026-02-19
---

# manufacturing mechanics

The physical layer of manufacturing: how material is removed, formed, and joined; what tools and machines do the work; what material properties constrain the possible; and how changeover methodology connects process physics to production economics.

## Process Physics
- [[the Merchant equation connects cutting geometry to forces and power providing the physics foundation for process parameter optimization]] — the mathematical model of metal cutting: rake angle, friction, shear angle determine everything downstream
- [[cutting speed is the single most influential variable on tool wear because 98 percent of machining energy converts to heat]] — Taylor's VT^n = C equation proves processing speed is physics-limited, not just convention

## Tooling
- [[cutting tool materials trade hardness for toughness across a spectrum from HSS to PCD with no universal optimum for all conditions]] — the fundamental tradeoff: harder tools cut faster but shatter on interruptions or incompatible materials

## Materials
- [[material properties create hard constraints on manufacturing process selection where ductility limits formability hardness dictates cutting forces and melting point governs joining]] — the bridge between materials science and process engineering

## Changeover Economics
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]] — Shigeo Shingo's methodology: 4-hour setups to single-digit minutes
- [[setup cost and optimal batch size are mathematically linked through EOQ so reducing changeover time enables smaller batches and leaner inventory]] — EOQ = sqrt(2DS/H): the mathematical proof that SMED enables lean
- [[equal cost point analysis determines the crossover batch size where automated production becomes cheaper than manual methods]] — break-even analysis for automation decisions
- [[OTED extends SMED toward sub-100-second automated changeovers where AI and robotics could eliminate changeover as a human process entirely]] — the frontier where changeover becomes a software problem

## Office-Scale Assembly
- [[SMT electronics assembly is the most viable office-scale production process because it combines multi-step flow with rich data and natural product changeovers]] — convergent finding from three independent research angles; paste→place→reflow→inspect fits on two desks at ~$15K total

## Cross-Domain Connections

The strongest insight from this research layer: **process physics provides the proof for claims made in the economics and AI disruption layers.** Taylor's equation proves why "AI reduces cycle time not by making processing faster" — the speed limit is thermodynamic. The Merchant equation identifies the parameter space where adaptive control adds value. Material properties define the hard constraints within which AI optimization operates. And SMED/EOQ connect changeover methodology directly to batch size economics, working capital, and lean flow.

## Tensions
- **Hardness-toughness tradeoff has no universal optimum** — every tool material choice sacrifices something (speed, toughness, material compatibility, cost). AI could optimize selection dynamically but cannot escape the physics.
- **SMED is human process improvement while AI-era factories could automate changeovers entirely** — OTED already points this direction; the methodology's framework may become a special case of automated optimization.

## Open Questions
- How do Somana's specific product materials constrain their manufacturing process and tooling selection?
- What is the optimal changeover strategy for a mini factory line with AI-driven scheduling?

---

Topics: [[index]]
