---
description: "Most cycle time is queue time, move time, setup time, and wait time — value-added processing is a small fraction"
type: learning
source: "a16z — A Primer on Factory Economics"
status: challenged
domain_area: economics
created: 2026-02-19
---

# processing time is typically less than 10 percent of total manufacturing cycle time

Cycle time encompasses multiple components: processing time (value-added), queue time, move time, setup time, and wait time. Processing — the actual value-added transformation of material — often represents less than 10% of total cycle time. The remaining 90%+ is waiting in various forms.

This is a massive opportunity for AI-driven optimization: if intelligent scheduling, predictive setup, and adaptive routing can compress the 90% that is non-value-added time, the throughput gains would be dramatic without touching the physical process at all. You don't need to make the machine faster — you need to make everything around the machine faster.

The "challenged" status reflects that this ratio may shift in highly automated continuous-flow processes (e.g., semiconductor fabs, chemical plants) where queue times are more tightly controlled, but it remains broadly accurate for discrete manufacturing and assembly operations.

The manufacturing mechanics sources make this concrete. Setup time is one of the largest non-processing components, and [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent|SMED demonstrates that setup can be reduced by 94% on average]] — from hours to single-digit minutes. Meanwhile, the processing time itself is physics-constrained: [[cutting speed is the single most influential variable on tool wear because 98 percent of machining energy converts to heat|Taylor's equation proves that 98% of machining energy converts to heat]], so pushing speed harder destroys tooling exponentially faster. This confirms the fundamental insight: the physics of processing limits speed gains, but the logistics around processing are where 10x improvements are achievable.

## Relevant Notes

- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[takt time synchronizes production pace to customer demand]]
- [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories]]
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]] — methodology for attacking the setup component
- [[cutting speed is the single most influential variable on tool wear because 98 percent of machining energy converts to heat]] — why processing speed itself is physics-limited

---

Topics: [[factory economics]], [[manufacturing mechanics]]
