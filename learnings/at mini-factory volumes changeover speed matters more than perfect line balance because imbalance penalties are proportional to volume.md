---
description: "A 20% line imbalance at 8 units/day costs one lost unit — but a 15-minute changeover happening 3x/day blocks all stations for 45 minutes, invest in SMED over balance"
type: learning
source: "Mini factory line layout research"
domain_area: economics
created: 2026-02-23
---

# at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume

Classical line balancing optimizes task allocation so no station exceeds takt time and idle time is minimized. This matters enormously at high volume — a 10% imbalance across 10,000 units/day is 1,000 units of lost capacity. But at mini-factory volumes (single digits to low tens per day), the math flips.

At 8 units/day on an 8-hour shift, takt time is 60 minutes per unit. A 20% imbalance (one station at 72 minutes vs others at 60) costs 96 minutes per day — roughly one lost unit. Annoying but manageable. A 15-minute changeover happening 3 times per day (boarding box to IoT sensor to STEM kit) costs 45 minutes — comparable impact. But changeover blocks ALL stations simultaneously, while imbalance only affects one. And changeover frequency scales with product mix variety, which is high by design in a demo factory.

The implication: invest engineering effort in changeover speed (modular fixtures, digital recipe cards, pre-staged kits) rather than perfect balance. This aligns with [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent|SMED]] — reduce the 15 minutes to under 5 and changeover becomes nearly invisible.

The connection to the [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into|VUT equation]] is instructive: at low utilization (which mini-factory volumes imply), the exponential penalty from variability is mild. You're operating on the flat part of the curve, not the steep part. This means variability tolerance is naturally higher — another reason not to over-optimize balance.

The practical consequence for Somana: design each station for fast tool/jig/recipe swap (under 5 minutes target). Accept moderate cycle time imbalance. The bottleneck station determines throughput — design it first, then balance everything else around it without obsessing over perfection. For a demo factory, the ability to switch products smoothly IS the performance metric that matters most.

## Relevant Notes
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]] — the primary investment target over balance optimization
- [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into]] — at low utilization, variability penalties are mild
- [[takt time synchronizes production pace to customer demand]] — 60-minute takt at 8 units/day gives massive tolerance for imbalance
- [[the setup-batch-inventory-cash chain links changeover time to batch size to WIP to cycle time to working capital through four mathematical relationships]] — faster changeover enables single-unit flow even at low volumes
- [[3D printers that produce enclosures should simultaneously produce assembly fixtures and test jigs at near-zero marginal tooling cost]] — product-specific fixtures at near-zero cost enable fast changeover
- [[U-shaped assembly cells provide 2-3x more task combinations than straight lines by letting operators start and finish at the same point]] — U-cells tolerate imbalance through flexible task grouping

---

Topics: [[somana product]], [[factory economics]]
