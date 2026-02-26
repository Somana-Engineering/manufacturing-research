---
description: "The full parameter interaction framework — takt time sets the target, VUT governs queue behavior, Little's Law links WIP to cash, yield compounds multiplicatively, and five leverage points determine where to intervene"
type: pattern
source: "Synthesis across Factory Physics, factory economics, manufacturing mechanics, and AI disruption learnings"
domain_area: economics
created: 2026-02-19
---

# manufacturing line parameters form a connected system where takt time is the only external input and five leverage points determine where intervention cascades most

## The Parameter Network

Manufacturing line parameters are not independent variables — they form a connected system with feedback loops, multiplicative interactions, and nonlinear behavior. Understanding the system matters more than understanding any individual parameter.

**External input (set by market):**
- **Takt time** = available production time / customer demand. This is the ONLY externally-determined parameter. Everything else is either a design choice or an operational outcome. You cannot optimize your way out of a takt time shorter than your bottleneck cycle time — you need more capacity.

**The flow triangle (Little's Law):**
- **WIP = Throughput × Cycle Time.** Fix any two and the third is determined. Reducing WIP at constant throughput requires reducing cycle time. This triangle connects operational performance directly to working capital.

**The queue equation (VUT):**
- **CT_queue = f(Variability, Utilization, Processing Time).** Queue time — the dominant component of cycle time — grows [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into|exponentially with utilization when variability is present]]. This is why "maximize utilization" destroys flow.

**The yield cascade (multiplicative):**
- **RTY = FPY₁ × FPY₂ × ... × FPYₙ.** [[rolled throughput yield compounds across process steps making each step's quality critical|Yield compounds multiplicatively]] across steps. A 5-step process at 95% per step = 77% RTY. At 10 steps = 60%.

**The OEE × yield interaction:**
- A line at 85% OEE and 85% yield produces only 72% of theoretical output (0.85 × 0.85 = 0.72). These are often managed by different teams but they MULTIPLY against each other. Improving yield from 85% to 95% while OEE stays at 85% raises effective output from 72% to 81% — a 12.5% gain from a quality improvement, not a capacity investment.

**The setup-batch-WIP-cash chain:**
- [[the setup-batch-inventory-cash chain links changeover time to batch size to WIP to cycle time to working capital through four mathematical relationships|Four equations chain]] from changeover time through batch size through WIP through cycle time to working capital.

**The buffer constraint:**
- [[variability must be buffered by inventory capacity or time and lean manufacturing minimizes the total cost of buffering not the buffers themselves|Variability must be buffered]] by inventory, capacity, or time. You choose the mix — you cannot avoid all three.

## Five Leverage Points (Step 4)

Where small changes cascade largest:

**1. Variability reduction** — The highest-leverage intervention in the system. Variability reduction improves cycle time nonlinearly (via VUT), reduces required buffers (three buffers law), improves yield stability, and reduces WIP (via Little's Law). This is precisely what [[adaptive control responds to condition combinations too complex for human-authored rules|adaptive control]] and [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously|continuous monitoring]] do. Every other optimization is more effective in a lower-variability system.

**2. Bottleneck processing time** — The [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories|bottleneck rate (rb)]] caps system throughput. A 1% improvement at the bottleneck is a 1% improvement for the whole line. A 1% improvement anywhere else changes nothing. The bottleneck determines Critical WIP (W0 = rb × T0) — the WIP level that achieves maximum throughput at minimum cycle time.

**3. Changeover time at the bottleneck** — Attacks the [[the setup-batch-inventory-cash chain links changeover time to batch size to WIP to cycle time to working capital through four mathematical relationships|setup-batch-WIP-cash chain]] at its first link. A 94% reduction in changeover time (SMED average) cascades through batch size (down ~75%), WIP, cycle time, and working capital. Changeover at non-bottleneck stations matters less.

**4. First-pass yield at the worst station** — Because RTY is multiplicative, improving the worst-performing station has outsized impact. Raising the worst station from 90% to 95% FPY improves RTY more than raising a good station from 97% to 99%.

**5. Utilization discipline** — Understanding the VUT tradeoff and deliberately choosing utilization targets that balance throughput against cycle time volatility. The right target depends on variability: low-variability systems can run at 90%+; high-variability systems should target 75-80% until variability is reduced.

## The Somana Thesis in Parameter Terms

Somana's product maps precisely onto the highest-leverage interventions:
- **Adaptive control** → variability reduction (leverage point 1)
- **Continuous monitoring** → bottleneck identification + yield improvement (leverage points 2, 4)
- **AI scheduling** → changeover optimization + utilization discipline (leverage points 3, 5)
- **Edge compute + integration** → the data infrastructure that enables all of the above

The product is a variability reduction engine that also optimizes the other four leverage points. In Factory Physics terms, Somana reduces V (variability) in the VUT equation while helping factories make better tradeoffs on U (utilization) — avoiding the trap that most factories fall into.

## Relevant Notes
- [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into]]
- [[variability must be buffered by inventory capacity or time and lean manufacturing minimizes the total cost of buffering not the buffers themselves]]
- [[the setup-batch-inventory-cash chain links changeover time to batch size to WIP to cycle time to working capital through four mathematical relationships]]
- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[takt time synchronizes production pace to customer demand]]
- [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories]]
- [[rolled throughput yield compounds across process steps making each step's quality critical]]
- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]]
- [[adaptive control responds to condition combinations too complex for human-authored rules]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — concrete mini-factory application of leverage point 3: changeover time matters more than balance at low volumes

---

Topics: [[factory economics]], [[manufacturing mechanics]], [[somana product]]
