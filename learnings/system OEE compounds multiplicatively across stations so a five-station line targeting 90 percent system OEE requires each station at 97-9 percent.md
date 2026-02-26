---
description: "OEE_system = (OEE_i)^n means per-station reliability demands escalate exponentially with station count — a 5-station line at 95% per station yields only 77% system OEE"
type: learning
source: "Boarding box assembly process parameters research — web search synthesis"
domain_area: economics
created: 2026-02-26
---

# system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent

For a system with n stations each at individual OEE_i: **OEE_system = (OEE_i)^n**. This multiplicative compounding has severe implications:

| Per-station OEE | 3 stations | 5 stations | 10 stations |
|----------------|-----------|-----------|------------|
| 99% | 97.0% | 95.1% | 90.4% |
| 97.9% | 93.8% | **90.0%** | 80.9% |
| 95% | 85.7% | 77.4% | 59.9% |
| 90% | 72.9% | 59.0% | 34.9% |

The "world-class" single-station OEE benchmark of 85% yields a catastrophic 44% system OEE across 5 stations. This is why Somana's 5-station U-cell must target near-99% per-station reliability — and why the mode dial provides critical insurance.

The compounding formula connects directly to the mode dial architecture: when a station's Autonomous mode encounters an issue that would reduce its OEE (a quality problem, a cycle time spike, a minor stoppage), switching to [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value|Manual or Assisted mode]] maintains that station's availability rather than letting the entire line degrade. The mode dial is not just a demo feature — it's a reliability mechanism that prevents multiplicative OEE collapse.

This also means that [[rolled throughput yield compounds across process steps making each step's quality critical|rolled throughput yield]] and system OEE compound together. A 5-station line at 95% per-station OEE and 98% per-station yield produces: 77.4% × 90.4% = 70% effective output. Understanding both compounding effects is essential for realistic capacity planning.

The compounding formula is itself powerful demo content: showing visitors how small per-station improvements cascade into large system gains makes the value of Somana's optimization software viscerally tangible.

---

Relevant Notes:
- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]] — the per-station OEE that feeds into the system formula
- [[rolled throughput yield compounds across process steps making each step's quality critical]] — yield compounds alongside OEE, doubling the penalty
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — mode switching prevents single-station OEE collapse from propagating
- [[OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant]] — system OEE gives the macro view; per-mode decomposition gives the diagnostic view
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — imbalance affects performance OEE component; changeover affects availability
- [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories]] — the weakest station's OEE disproportionately drags the system

---

Topics: [[factory economics]], [[somana product]]
