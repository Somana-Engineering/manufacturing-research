---
description: "Factory Physics' three buffers law — you WILL buffer variability, the only question is whether you pay with inventory (cash), capacity (idle equipment), or time (late deliveries)"
type: learning
source: "Factory Physics (Hopp & Spearman)"
domain_area: economics
created: 2026-02-19
---

# variability must be buffered by inventory capacity or time and lean manufacturing minimizes the total cost of buffering not the buffers themselves

Factory Physics establishes a fundamental constraint: all production systems buffer variability, and they can only do so through three mechanisms:

1. **Inventory buffer** — parts waiting (WIP, safety stock). Costs: working capital, storage, obsolescence risk.
2. **Capacity buffer** — resources waiting (idle machines, overtime availability, extra shifts). Costs: underutilized capital equipment, standby labor.
3. **Time buffer** — customers waiting (longer lead times, delayed delivery). Costs: lost sales, customer dissatisfaction, competitive disadvantage.

You cannot eliminate all three simultaneously while variability exists. Attempting to remove inventory buffers without reducing variability or adding capacity buffers simply shifts the pain to time buffers (longer, more variable lead times). This is why naive "lean" implementations that just cut WIP without addressing root variability often degrade delivery performance.

Toyota's genius was choosing capacity buffers over inventory buffers — running two-shift operations with two-hour maintenance windows rather than three shifts at 100% utilization. This created space for continuous improvement without safety stock. The buffer choice was strategic, not accidental.

The only way to reduce TOTAL buffering cost without shifting pain between categories is to reduce variability itself. This is the deepest connection to Somana's value proposition: [[adaptive control responds to condition combinations too complex for human-authored rules|adaptive control]] and [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously|continuous monitoring]] are variability reduction tools. They don't eliminate the need for buffers — they reduce the amount of buffering needed everywhere. Every percentage point of variability reduction translates to less inventory, less excess capacity, OR shorter lead times (or some combination). This is a more precise framing than "AI improves efficiency" — AI reduces the variability that forces expensive buffering.

## Relevant Notes
- [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into]]
- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[cash conversion cycle measures how long cash stays tied up in operations]]
- [[adaptive control responds to condition combinations too complex for human-authored rules]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]
- [[setup cost and optimal batch size are mathematically linked through EOQ so reducing changeover time enables smaller batches and leaner inventory]]
- [[digital inventory replaces physical warehousing making on-demand micro-manufacturing economically rational at any scale]] — the most radical buffer elimination: digital inventory removes the inventory buffer entirely, shifting all buffering to capacity and time

---

Topics: [[factory economics]], [[AI disruption of factory economics]]
