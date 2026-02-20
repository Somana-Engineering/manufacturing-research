---
description: "CT_queue = V × U × T — queue time is proportional to variability × utilization × processing time, and the utilization effect is nonlinear so pushing from 85% to 95% can triple cycle time"
type: learning
source: "Factory Physics (Hopp & Spearman); Kingman's equation"
domain_area: economics
created: 2026-02-19
---

# the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into

The VUT equation (Kingman's formula) is the missing piece that explains why manufacturing lines behave counterintuitively:

**CT_queue = V × U × T**

where V = variability factor (coefficient of variation of arrival and service times), U = utilization factor (which grows nonlinearly as utilization approaches 100%), and T = average processing time. The utilization factor is the key: it behaves roughly as u/(1-u), meaning:
- At 50% utilization: U factor ≈ 1
- At 80% utilization: U factor ≈ 4
- At 90% utilization: U factor ≈ 9
- At 95% utilization: U factor ≈ 19

This is why "maximize utilization" is terrible advice when variability exists. Doubling utilization from 45% to 90% doesn't double cycle time — it can increase it by 9x or more. Most factories fall into this trap: they see expensive equipment sitting idle, push utilization higher, and watch WIP and cycle time explode without understanding why.

The fix has a specific order: **reduce variability first, then increase utilization.** With zero variability, cycle time equals processing time regardless of utilization (the theoretical baseline). Toyota understood this intuitively — Mura (unevenness/variability) was addressed before Muda (waste), and they ran two-shift operations with maintenance windows (capacity buffer) rather than pushing to 100% utilization.

This connects to three existing insights. First, [[adaptive control responds to condition combinations too complex for human-authored rules|adaptive control]] is fundamentally a variability reduction tool — by adjusting parameters in real-time, it reduces the variation in processing times and quality outcomes. Second, [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time|Little's Law]] shows the WIP consequence: longer cycle times at constant throughput mean proportionally more WIP. Third, [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories|bottleneck theory]] takes on new meaning — the bottleneck isn't just the slowest station, it's the station with the highest U factor (utilization × variability combination).

## Relevant Notes
- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories]]
- [[adaptive control responds to condition combinations too complex for human-authored rules]]
- [[processing time is typically less than 10 percent of total manufacturing cycle time]]
- [[variability must be buffered by inventory capacity or time and lean manufacturing minimizes the total cost of buffering not the buffers themselves]]

---

Topics: [[factory economics]], [[manufacturing mechanics]]
