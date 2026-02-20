---
description: "Instead of drilling top-down over days from margin drop to root cause, the platform correlates all levels in real time"
type: learning
source: "Somana — A Tour of Our Model Factory"
status: validated
domain_area: software
created: 2026-02-19
---

# continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously

The textbook metrics hierarchy: financial outcomes at top, then operational metrics, then process drivers, then root cause indicators at bottom. Managers drill through top-down, spending days going from "margin dropped" to "ah, that's why." Continuous monitoring collapses this. The platform sees all four levels simultaneously. When something drifts, it's visible at the process parameter level — the level where intervention is still possible. Example: a 4% torque drift over two hours, still within spec, correlated with incoming batch hardness and ambient temperature, surfaced as diagnosis with suggested 2% speed adjustment.

## Relevant Notes
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]]
- [[adaptive control responds to condition combinations too complex for human-authored rules]]
- [[small adaptive adjustments compound across stations shifts and days into meaningful throughput and quality gains]]
- [[OEE framework becomes less useful as its simplifying assumptions become limitations rather than helpful abstractions]] — continuous monitoring makes OEE's decomposition unnecessary
- [[process historians achieve extreme compression ratios on sensor data and open-source alternatives are challenging proprietary incumbents]] — historians provide the data infrastructure that enables continuous monitoring
- [[the manufacturing metrics hierarchy cascades from financial outcomes to root cause indicators across four levels]] — the hierarchy this monitoring collapses

---

Topics: [[somana product]], [[manufacturing software]]
