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

## Assembly Cell Layout
- [[U-shaped assembly cells provide 2-3x more task combinations than straight lines by letting operators start and finish at the same point]] — U-cells solve the mini-factory flexibility problem: 1 operator in demo mode, 3+ for production, same physical footprint
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — the practical application of SMED at 8 units/day: invest in changeover speed, accept moderate imbalance

## Design for Assembly
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — Boothroyd-Dewhurst methodology, snap-fits vs inserts, now enriched with empirical mode gap measurement
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — mode gap = (Manual CT - Autonomous CT) / Autonomous CT: production-reality DFA scoring
- [[the assisted mode differentiates information problems from physical design problems in assembly steps]] — the three-mode diagnostic adds a dimension traditional DFA lacks entirely
- [[mode gap data enables specific actionable redesign recommendations where traditional DFA only provides generic guidelines]] — from "reduce part count" to "fix Steps 4, 7, 11 — these account for 78% of the mode gap"

## Box Build Assembly
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — 9-step sequence: prep → component test → wire prep → mechanical → electrical → inspection → software → test → packaging
- [[quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection]] — sub-assembly → intermediate → functional → first-article → in-process → final: each level catches different failure modes
- [[IPC-A-630 is the only IPC standard dedicated to box build assembly defining three product classes for manufacture inspection and testing of electronic enclosures]] — the quality standard that governs enclosure assembly
- [[environmental controls for electronics assembly require 18-25C and 40-55 percent RH with ESD prevention as the primary humidity driver]] — the environmental triad: temperature, humidity, ESD surface resistance
- [[torque specifications for fasteners provide an ideal measurable parameter for demonstrating mode dial differences across manual assisted and autonomous assembly]] — torque accuracy and sequence compliance vary measurably by mode
- [[capacitor failures account for nearly 30 percent of PCB failures making incoming PCBA inspection critical for box build yield]] — the dominant failure mode drives incoming inspection priority
- [[single-source manufacturing prevents component compatibility failures that arise when subsystems are sourced from different suppliers]] — single integrator eliminates inter-supplier tolerance stack-up

## BOM-Driven Assembly Optimization
- [[keyed connectors trade pennies in BOM cost for seconds of cycle time and near-elimination of polarity assembly errors]] — $0.15-0.50 per connection saves 5-8s; poka-yoke for electrical integration
- [[pre-terminated cable harnesses cost 2 to 5 dollars more per unit but eliminate the wire preparation step entirely]] — $2-5 per unit eliminates 20-40s and removes Step 3 from the sequence
- [[heat-set insert count is a critical DFA lever where reducing inserts from 8-12 to 4 saves 32 to 48 seconds in manual mode]] — snap-fits for closure, inserts only for PCB mounting
- [[SBC carrier boards add 5 to 15 dollars BOM cost but reduce station 2 cycle time by 15 to 20 seconds and eliminate the most common assembly error]] — poka-yoke against bent GPIO pins
- [[IPC-A-630 traceability requirements make broker-sourced electronic components a compliance risk for production]] — traceability requirements constrain sourcing strategy
- [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds]] — bottom-up cycle time derivation with operation-level benchmarks
- [[the automation mode gap varies by station with software and testing showing the highest gap at 59 percent and mechanical assembly the lowest at 29 percent]] — per-station mode projections confirm testing as highest-ROI

## Office-Scale Assembly
- [[SMT electronics assembly is the most viable office-scale production process because it combines multi-step flow with rich data and natural product changeovers]] — convergent finding from three independent research angles; paste→place→reflow→inspect fits on two desks at ~$15K total

## Cross-Domain Connections

The strongest insight from this research layer: **process physics provides the proof for claims made in the economics and AI disruption layers.** Taylor's equation proves why "AI reduces cycle time not by making processing faster" — the speed limit is thermodynamic. The Merchant equation identifies the parameter space where adaptive control adds value. Material properties define the hard constraints within which AI optimization operates. And SMED/EOQ connect changeover methodology directly to batch size economics, working capital, and lean flow.

## Tensions
- **Hardness-toughness tradeoff has no universal optimum** — every tool material choice sacrifices something (speed, toughness, material compatibility, cost). AI could optimize selection dynamically but cannot escape the physics.
- **SMED is human process improvement while AI-era factories could automate changeovers entirely** — OTED already points this direction; the methodology's framework may become a special case of automated optimization.

## Open Questions
- How do Somana's specific product materials constrain their manufacturing process and tooling selection?
- What is the optimal changeover strategy for a mini factory line with AI-driven scheduling? *(Partially answered: changeover-vs-balance analysis says prioritize SMED over balance optimization at mini-factory volumes)*

---

Agent Notes:
- 2026-02-26: Added BOM-Driven Assembly Optimization section (7 entries). The BOM research quantifies specific DFA interventions: keyed connectors, pre-terminated harnesses, insert reduction, carrier boards, IPC traceability constraints, and bottom-up cycle time derivation. Per-station mode gap projections provide the first quantitative hypotheses for production data to confirm.
- 2026-02-26: Added Box Build Assembly section (7 entries). The physical reality of boarding box assembly is now specified: layered sequence, progressive testing hierarchy, IPC-A-630 quality framework, environmental controls, torque as a mode-comparable parameter, capacitor failure dominance, and single-source integration benefits. These learnings bridge the gap between abstract assembly cell design and concrete boarding box production.
- 2026-02-25: Added Assembly Cell Layout section with U-cell and changeover-vs-balance learnings. These bridge the gap between abstract changeover methodology (SMED, OTED) and concrete mini-factory implementation. The changeover-vs-balance analysis partially answers the open question about optimal changeover strategy at mini-factory scale.

---

Topics: [[index]]
