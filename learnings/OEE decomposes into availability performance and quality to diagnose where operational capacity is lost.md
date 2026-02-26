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

The system-level extension reveals an even more demanding constraint: for multi-station lines, [[system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent|OEE compounds multiplicatively across stations]]. OEE_system = (OEE_i)^n means the "world-class 85%" single-station benchmark yields only 44% system OEE across 5 stations. This makes the per-station decomposition even more critical — identifying which OEE component (availability, performance, or quality) is dragging a single station down has multiplicative impact on the system.

The decomposition becomes even more revealing when applied across operating modes. [[OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant|Per-mode OEE decomposition]] shows that Performance (cycle time) exhibits the largest Manual-vs-Autonomous gap, while Availability stays roughly constant across modes. This diagnostic specificity — knowing WHICH OEE component drives the mode gap — tells visitors and customers exactly where software adds value: not in keeping the line running (availability), but in making it run faster (performance) and with fewer defects (quality). The decomposition is also [[the compounding OEE formula is powerful demo content showing visitors how small per-station improvements cascade into large system gains|powerful live demo content]], because switching a single station's mode visibly shifts the system OEE in a way that is counterintuitive and therefore memorable.

## Relevant Notes

- [[system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent]] — the system-level extension of per-station OEE
- [[rolled throughput yield compounds across process steps making each step's quality critical]]
- [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories]]
- [[the manufacturing metrics hierarchy cascades from financial outcomes to root cause indicators across four levels]]
- [[OEE framework becomes less useful as its simplifying assumptions become limitations rather than helpful abstractions]]
- [[manufacturing line parameters form a connected system where takt time is the only external input and five leverage points determine where intervention cascades most]] — OEE × yield interaction means a line at 85% OEE and 85% yield produces only 72% of theoretical output
- [[OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant]] — per-mode decomposition reveals which component drives the mode gap
- [[the compounding OEE formula is powerful demo content showing visitors how small per-station improvements cascade into large system gains]] — the compounding formula makes OEE decomposition visceral for demo visitors
- [[the 97-9 percent per-station OEE reliability requirement creates tension with mode-switching experimentation because every mode transition risks a temporary OEE dip]] — the tension between reliability demand and mode-switching freedom
- [[torque specifications for fasteners provide an ideal measurable parameter for demonstrating mode dial differences across manual assisted and autonomous assembly]] — torque accuracy is a concrete Quality component measurable across modes

---

Topics: [[factory economics]], [[AI disruption of factory economics]], [[somana product]]
