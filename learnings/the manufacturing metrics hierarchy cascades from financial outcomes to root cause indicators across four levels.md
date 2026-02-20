---
description: "Most companies monitor financial and operational levels but diagnosing through process drivers and root causes generates the most gains"
type: pattern
source: "a16z — A Primer on Factory Economics"
status: conventional
domain_area: economics
created: 2026-02-19
---

# the manufacturing metrics hierarchy cascades from financial outcomes to root cause indicators across four levels

Four levels of manufacturing metrics, each more granular than the last:

1. **Financial outcomes** — gross margin, unit cost, factory EBITDA
2. **Operational outcomes** — yield, throughput, quality, delivery performance
3. **Process drivers** — OEE components, cycle times, first-pass yield by step, scrap by failure mode
4. **Root cause indicators** — equipment uptime, process parameter distributions, incoming material quality, environmental conditions

Most early-stage manufacturing companies monitor levels 1-2 because they are the easiest to capture and the most immediately legible to investors. But the real operational gains come from diagnosing through levels 3-4, which requires investment in data infrastructure — sensors, process historians, statistical process control, and the analytical capability to connect root causes to financial outcomes.

This hierarchy is directly what Somana enables: building the data infrastructure and analytical layer that connects level 4 root causes to level 1 financial outcomes, making the full cascade visible and actionable.

The GenAI disruption audit argues this entire hierarchy is design debt from the constraint that humans process information top-down. The waterfall diagnostic process — margin declining, drill into yield, find degraded step, investigate root cause — takes days to weeks. AI simultaneously monitors all four levels, identifies causal relationships across levels, and generates diagnoses in real-time. The hierarchy collapses into a single real-time model where the distinction between financial outcomes and root cause indicators becomes a view, not a separate organizational capability. See [[institutional design debt accumulates when systems optimize for constraints that technology has already eliminated]].

## Relevant Notes

- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]]
- [[rolled throughput yield compounds across process steps making each step's quality critical]]
- [[factory costs divide into fixed variable and semi-variable categories that determine operating leverage]]
- [[institutional design debt accumulates when systems optimize for constraints that technology has already eliminated]]
- [[process historians achieve extreme compression ratios on sensor data and open-source alternatives are challenging proprietary incumbents]] — historians store the level 3-4 data that makes the full cascade visible
- [[MES bridges the shopfloor to the enterprise through eleven core functions spanning scheduling to genealogy]] — MES is the system that operationally spans levels 2-4
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]] — how Somana's product collapses this hierarchy in practice

---

Topics: [[factory economics]], [[AI disruption of factory economics]], [[manufacturing software]]
