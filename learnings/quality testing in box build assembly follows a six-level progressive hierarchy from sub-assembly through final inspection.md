---
description: "Sub-assembly → intermediate → functional (power/performance/compliance) → first-article → in-process sampling → final inspection — each level catches different failure modes at increasing system integration"
type: learning
source: "Boarding box assembly process parameters research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection

Testing in box build assembly is not a single end-of-line gate but a six-level progressive hierarchy:

1. **Sub-assembly testing** — components validated individually before integration (incoming inspection of PCBAs, SBCs, power supplies)
2. **Intermediate inspection** — each assembly layer checked for labels, wire routing, torque specifications, continuity
3. **Functional testing** — three tiers: power-on tests (basic functionality), performance tests (under various conditions), compliance testing (safety and EMC)
4. **First-article inspection** — initial units in a batch verified against specification before committing to the full run
5. **In-process sampling** — ongoing production consistency checks during the batch
6. **Final inspection** — completed assemblies confirmed before shipment

Each level catches different failure modes at increasing system integration. Sub-assembly testing catches dead components before they consume assembly time. Intermediate inspection catches assembly errors (misrouted wires, missed fasteners) before they're buried by the next layer. Functional testing verifies the integrated system works. First-article inspection validates that the process itself is correctly set up for this product. In-process sampling monitors for drift.

This hierarchy maps directly to Somana's mode dial demo: each testing level can run in Manual (operator judgment), Assisted (AI-guided checklist + measurement overlay), or Autonomous (automated test fixtures + vision inspection) modes. The [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target|35-40% of production time consumed by testing]] is distributed across all six levels, making testing the dominant opportunity for mode comparison demonstrations.

The "copy-exact" documentation principle applies across all levels: accurate as-built documentation tracks actual device configuration, not just design intent. This aligns with Somana's digital twin / demo overlay architecture — every test result at every level is recorded and attributable.

---

Relevant Notes:
- [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target]] — testing time distributes across all six levels of the hierarchy
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]] — the progressive hierarchy IS in-process monitoring applied to box build
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — the testing hierarchy mirrors the assembly layers
- [[rolled throughput yield compounds across process steps making each step's quality critical]] — each testing level is a yield gate where defects compound if missed
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — testing steps are mode-comparable assembly steps
- [[30 cycles per mode per step provides sufficient data for detecting a 20 percent mode gap with reasonable statistical confidence]] — each testing level needs its own 30-cycle dataset
- [[sampling-based quality is design debt from when 100 percent inspection was too expensive for humans]] — the progressive hierarchy enables 100% inspection at each level, replacing AQL sampling with AI-assisted verification

---

Topics: [[somana product]], [[manufacturing mechanics]]
