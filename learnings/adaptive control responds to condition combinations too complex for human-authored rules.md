---
description: "Traditional automation is if-X-do-Y — adaptive control handles interactions between batch variation, ambient conditions, and upstream state"
type: assumption
source: "Somana — A Tour of Our Model Factory"
status: challenged
domain_area: software
created: 2026-02-19
---

# adaptive control responds to condition combinations too complex for human-authored rules

Traditional automation is hard-coded: if temperature exceeds X, do Y. Rules written by an engineer who imagined every scenario in advance. The challenged assumption: that rules-based automation is sufficient. Adaptive control responds to combinations of conditions no engineer would enumerate: material batch variation + ambient humidity shift (loading dock opened) + upstream station running 3% slow changing thermal state of incoming parts. Each adjustment is tiny. They compound across every station, every shift, every day. This is where AI reasoning replaces human enumeration of edge cases.

## Relevant Notes
- [[small adaptive adjustments compound across stations shifts and days into meaningful throughput and quality gains]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]]
- [[AI yield optimization finds multivariate root causes that flatten the S-curve and compress years of learning into months]] — adaptive control is the mechanism; yield optimization is the outcome
- [[ISA-88 recipe management separates what to make from how to make it through four recipe types cascading from R&D to execution]] — adaptive control optimizes within recipe constraints, not outside them
- [[AI process control squeezes out the safety margins baked into consumable usage rates by operating continuously at the efficient frontier]] — the economic consequence of continuous adaptation
- [[cross-step dependency modeling circumvents the multiplicative yield penalty by optimizing the entire process chain as a system]] — adaptive control applied across the full chain, not just within stations, is what makes cross-step optimization possible
- [[SMT electronics assembly is the most viable office-scale production process because it combines multi-step flow with rich data and natural product changeovers]] — paste printing and reflow thermal profiles in the SMT line are concrete targets for adaptive control

---

Topics: [[somana product]], [[AI disruption of factory economics]]
