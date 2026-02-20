---
description: "Four equations chain together: EOQ links setup to batch size, batch size determines WIP contribution, Little's Law links WIP to cycle time, CCC links cycle time to cash — pull any link and the whole chain moves"
type: pattern
source: "Synthesis across factory economics, SMED, Little's Law, and CCC learnings"
domain_area: economics
created: 2026-02-19
---

# the setup-batch-inventory-cash chain links changeover time to batch size to WIP to cycle time to working capital through four mathematical relationships

Four mathematical relationships chain together into a causal cascade from the shop floor to the balance sheet:

**1. Setup cost → Batch size** (via EOQ)
EOQ = sqrt(2DS/H). Higher changeover cost S → larger optimal batch size. [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent|SMED reduces S by 94% on average]], which reduces optimal batch size by ~75% (sqrt of 94% reduction).

**2. Batch size → WIP contribution**
Larger batches mean more units sitting as WIP at each station waiting for the full batch to process. Average WIP from batching ≈ batch_size / 2 at each station. A 10-station line with batch size 1,000 holds ~5,000 units of batch-related WIP; cut batch size to 250 and batch-related WIP drops to ~1,250.

**3. WIP → Cycle time** (via Little's Law)
WIP = Throughput × Cycle Time. At constant throughput, more WIP means proportionally longer cycle time. The 4x WIP reduction from step 2 translates to roughly 4x shorter cycle time (for the batching component).

**4. Cycle time → Working capital** (via CCC)
Days Inventory Outstanding scales with cycle time. Shorter cycle time means less inventory, which means less cash tied up. [[cash conversion cycle measures how long cash stays tied up in operations|The CCC equation]] shows this directly: DIO drops, freeing working capital.

**The chain in action:** A factory with 2-hour changeovers runs batch sizes of 1,000 to amortize setup cost. SMED cuts changeover to 7 minutes. Optimal batch size drops to ~250. Batch-related WIP drops 75%. Cycle time drops proportionally. DIO drops. Working capital freed. The 2-hour changeover wasn't just a shop floor problem — it was a balance sheet problem cascading through four equations.

**Why this chain matters for Somana:** [[OTED extends SMED toward sub-100-second automated changeovers where AI and robotics could eliminate changeover as a human process entirely|AI-automated changeover]] attacks the first link. [[adaptive control responds to condition combinations too complex for human-authored rules|Adaptive control]] reduces variability throughout, compressing cycle time through the [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into|VUT equation]]. [[AI reduces cycle time not by making processing faster but by eliminating the 90 percent of time that is coordination waste|AI scheduling]] attacks queue time directly. Every link in the chain is a Somana product feature.

## Relevant Notes
- [[setup cost and optimal batch size are mathematically linked through EOQ so reducing changeover time enables smaller batches and leaner inventory]]
- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[cash conversion cycle measures how long cash stays tied up in operations]]
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]]
- [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into]]
- [[AI reduces cycle time not by making processing faster but by eliminating the 90 percent of time that is coordination waste]]

---

Topics: [[factory economics]], [[manufacturing mechanics]]
