---
description: "OEE = Availability x Performance x Quality reveals whether losses come from downtime, speed, or defects"
type: parameter
source: "a16z — A Primer on Factory Economics"
status: conventional
domain_area: economics
created: 2026-02-19
---

# OEE decomposes into availability performance and quality to diagnose where operational capacity is lost

OEE = Availability x Performance x Quality

- Availability = (scheduled time - downtime) / scheduled time
- Performance = (actual output x ideal cycle time) / operating time
- Quality = good units / total units

Nameplate capacity is the theoretical maximum output a piece of equipment can achieve. Demonstrated capacity is the actual sustained performance — and it is the only relevant number for planning. The gap between the two is precisely what OEE measures.

The decomposition reveals where constraints lie:

- Low availability points to maintenance issues and excessive changeovers
- Low performance points to equipment speed issues and minor stoppages
- Low quality points to yield problems and rework

Each component suggests a different intervention, which is why OEE as a single number is less useful than its decomposed form. A factory at 85% OEE with a quality problem needs a fundamentally different response than one at 85% OEE with an availability problem.

The GenAI disruption audit argues that the OEE framework's three independent components are actually deeply interconnected — running faster may reduce quality, skipping maintenance boosts short-term availability but degrades long-term performance. AI can model these interactions directly, optimizing the actual throughput function rather than the simplified decomposition. The "world-class 85%" benchmark is design debt — a ceiling for human-managed operations that AI should exceed. See [[OEE framework becomes less useful as its simplifying assumptions become limitations rather than helpful abstractions]].

## Relevant Notes

- [[rolled throughput yield compounds across process steps making each step's quality critical]]
- [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories]]
- [[the manufacturing metrics hierarchy cascades from financial outcomes to root cause indicators across four levels]]
- [[OEE framework becomes less useful as its simplifying assumptions become limitations rather than helpful abstractions]]
- [[manufacturing line parameters form a connected system where takt time is the only external input and five leverage points determine where intervention cascades most]] — OEE × yield interaction means a line at 85% OEE and 85% yield produces only 72% of theoretical output

---

Topics: [[factory economics]], [[AI disruption of factory economics]]
