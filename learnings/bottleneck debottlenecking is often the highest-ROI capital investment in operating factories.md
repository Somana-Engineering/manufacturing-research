---
description: "Identifying and relieving the constraining resource yields disproportionate throughput gains relative to investment"
type: learning
source: "a16z — A Primer on Factory Economics"
status: conventional
domain_area: economics
created: 2026-02-19
---

# bottleneck debottlenecking is often the highest-ROI capital investment in operating factories

Bottleneck analysis identifies the constraining resource through three methods: utilization assessment (which station is at or near 100%?), queue observation (where does WIP accumulate?), and capacity comparison (which station has the lowest theoretical throughput?).

The bottleneck sets the pace for the entire line — every other station is ultimately constrained by it. This creates a stark asymmetry in the value of improvements:

- A 10% improvement at the bottleneck is a 10% improvement for the whole line.
- A 10% improvement at a non-bottleneck changes nothing about total output.

This means capital allocation must be ruthlessly focused on the constraint. Investing in faster non-bottleneck equipment is waste — it just builds WIP faster upstream or starves faster downstream. The Theory of Constraints (Goldratt) formalizes this: identify the constraint, exploit it fully, subordinate everything else to it, then elevate it.

Note that debottlenecking often reveals the next bottleneck, making this an iterative process.

The GenAI disruption audit challenges the bottleneck identification process itself as design debt — currently a skilled human activity requiring floor observation, data analysis, and operator discussion. AI identifies bottlenecks in real-time, predicts shifts, and enables dynamic bottleneck management: reconfiguring flows, adjusting batch sizes, and rescheduling to shift the constraint to the least costly location. See [[dynamic bottleneck management makes the constraint a managed variable rather than an observed fact]].

## Relevant Notes

- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]]
- [[takt time synchronizes production pace to customer demand]]
- [[processing time is typically less than 10 percent of total manufacturing cycle time]]
- [[dynamic bottleneck management makes the constraint a managed variable rather than an observed fact]]
- [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into]] — the bottleneck isn't just the slowest station, it's the station with the highest utilization × variability combination
- [[manufacturing line parameters form a connected system where takt time is the only external input and five leverage points determine where intervention cascades most]] — bottleneck processing time is leverage point 2; a 1% improvement here is a 1% improvement for the whole line

---

Topics: [[factory economics]], [[AI disruption of factory economics]]
