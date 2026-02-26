---
description: "Without mode tagging at the data layer, queries like 'average cycle time for Station 3 in Assisted mode' are impossible — this is what separates a control switch from an evidence engine"
type: learning
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible

The mode dial's value proposition rests entirely on comparison: same product, same equipment, different software configuration, measurable performance difference. But comparison requires attribution — every cycle time, every defect detection, every throughput measurement must be permanently tagged with the mode it was collected under. Without this, the data is just manufacturing telemetry. With it, the data becomes evidence.

This is a critical data architecture decision that must be designed in from the start, not retrofitted. Mode tagging means every row in the [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function|time series database]] carries a mode field alongside the sensor value and timestamp. The MQTT topic hierarchy in the [[the Unified Namespace applied to mode-dial data should encode mode context alongside sensor readings in the MQTT topic hierarchy|Unified Namespace]] includes mode context. Grafana dashboards can filter and compare by mode because the mode dimension exists in the underlying data.

The queries this enables: "average cycle time for Station 3 in Assisted mode this week." "Defect rate comparison, Manual vs. Autonomous, last 100 units." "Quality trend over time in Autonomous mode — is the AI model improving?" "Which station shows the largest Manual-to-Autonomous performance gap?" Without mode tagging, none of these queries are answerable.

Mode tagging also captures transitions: when a mode switch occurred, how long the transition took, and whether there was any performance degradation during the handoff. This transition data is itself valuable — it answers questions like "how disruptive is a mode switch to production flow?"

The tagging must happen at collection time, not analysis time. [[agent-based control enables per-station mode independence where each station maintains its own mode state while reporting to a central dashboard|Each station agent]] knows its current mode and stamps every data point. Retroactive mode labeling — trying to infer what mode was active from performance patterns — is fragile and lossy. The marginal cost of adding a mode field to every data point is negligible; the cost of not having it is the entire comparative analytics capability.

This is the engineering detail that transforms the mode dial from a demo gimmick into the evidence engine that [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value|the mode dial concept]] promises.

---

Relevant Notes:
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — mode tagging is what makes the evidence engine work
- [[the Unified Namespace applied to mode-dial data should encode mode context alongside sensor readings in the MQTT topic hierarchy]] — UNS topic hierarchy encodes mode context
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — mode tagging flows through every layer of the pipeline
- [[agent-based control enables per-station mode independence where each station maintains its own mode state while reporting to a central dashboard]] — station agents stamp mode on every data point
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]] — mode-tagged monitoring enables mode-comparative process analysis
- [[the Unified Namespace promises any-to-any data flow but UNS without governance becomes chaos at scale]] — mode context in the UNS is a governance requirement, not optional metadata
- [[OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant]] — mode-tagged data enables per-mode OEE decomposition
- [[the DFA feedback engine is an analytical layer on existing mode-tagged data infrastructure not a new data system]] — mode-tagged data enables DFA analytics as a zero-cost additional product: same data, new analytical queries
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — per-step mode-tagged timing is the raw input for the mode gap formula

---

Topics: [[manufacturing software]], [[somana product]]
