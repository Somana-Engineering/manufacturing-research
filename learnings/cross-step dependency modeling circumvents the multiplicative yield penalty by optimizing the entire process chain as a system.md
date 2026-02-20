---
description: "First-pass yield formula treats steps as independent but they are heavily interdependent — AI models the full dependency graph humans find intractable"
type: learning
source: "Somana — GenAI Disruption Audit"
domain_area: economics
created: 2026-02-19
---

# cross-step dependency modeling circumvents the multiplicative yield penalty by optimizing the entire process chain as a system

The independence assumption in first-pass yield (overall FPY = product of step FPYs) is design debt. In reality, process steps are heavily interdependent — conditions in step 3 affect outcomes in step 7. Humans treat them as independent because modeling the full dependency graph is cognitively intractable. AI can model these cross-step dependencies and optimize globally rather than locally. The article's formula is a simplification that becomes unnecessary when AI models the actual system dynamics.

More importantly: the measurement assumption is also disrupted. Traditional FPY measurement requires explicit inspection gates between steps. AI with [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously|continuous process monitoring]] can infer step-level quality without discrete inspection points — reducing cycle time by eliminating wait-for-inspection stages. The multiplicative yield penalty (10 steps at 95% = 60% overall) gets partially circumvented by cross-step optimization: AI doesn't just improve each step independently — it optimizes the whole chain as a system.

## Relevant Notes
- [[rolled throughput yield compounds across process steps making each step's quality critical]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]
- [[SMT electronics assembly is the most viable office-scale production process because it combines multi-step flow with rich data and natural product changeovers]] — concrete evidence: >50% of SMT defects originate at the paste printing stage, making upstream quality the dominant predictor of downstream results
- [[adaptive control responds to condition combinations too complex for human-authored rules]] — cross-step optimization IS adaptive control applied across the full process chain rather than within a single station
- [[AI yield optimization finds multivariate root causes that flatten the S-curve and compress years of learning into months]] — cross-step dependency modeling is the mechanism through which AI finds multivariate root causes that humans cannot tractably enumerate

---

Topics: [[AI disruption of factory economics]]
