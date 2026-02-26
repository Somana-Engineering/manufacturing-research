---
description: "Instead of rejecting variable materials at the door, adapt process parameters to each incoming batch — hardness varies, so adjust CNC speeds accordingly"
type: learning
source: "Somana — GenAI Disruption Audit"
domain_area: mechanics
created: 2026-02-19
---

# AI transforms incoming material variation from a yield problem into a process control input

Two disruptions for incoming quality yield. First, AI-powered incoming inspection can be 100% rather than sampling-based, and can detect subtle material property variations invisible to human inspectors — spectroscopic analysis, surface quality, dimensional accuracy at micron scale. Second, and more disruptive: AI can trace the impact of incoming material variation on downstream yield. These relationships are "often hard to trace back" for humans because they're multivariate and delayed. AI builds predictive models linking incoming material properties to downstream outcomes, making traceability trivial.

The result: you don't just reject bad materials at the door — you adapt process parameters based on the specific properties of each incoming batch. "This batch of aluminum has slightly different hardness — adjust CNC speeds by 3%." This turns incoming quality variation from a yield problem into a process control input. What was previously a source of waste becomes an optimization variable, with [[adaptive control responds to condition combinations too complex for human-authored rules|adaptive control]] handling the per-batch adjustments automatically.

## Relevant Notes
- [[adaptive control responds to condition combinations too complex for human-authored rules]]
- [[rolled throughput yield compounds across process steps making each step's quality critical]]
- [[material properties create hard constraints on manufacturing process selection where ductility limits formability hardness dictates cutting forces and melting point governs joining]] — the physics that determines WHICH parameters to adjust for material variation
- [[capacitor failures account for nearly 30 percent of PCB failures making incoming PCBA inspection critical for box build yield]] — concrete application: AI-powered incoming PCBA inspection at Somana's mini factory detects solder quality variation and adapts downstream handling

---

Topics: [[AI disruption of factory economics]], [[manufacturing mechanics]]
