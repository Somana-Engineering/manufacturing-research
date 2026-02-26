---
description: "The demo's persuasive power comes from visitors seeing metrics change when they flip the switch — 1-2 second update latency is a UX requirement distinct from the 50ms control latency"
type: learning
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# the mode comparison dashboard must update within 1-2 seconds of a mode change to maintain the cause-and-effect demo experience which demands edge processing

The mode dial's persuasive power comes from causation perception: the visitor flips a switch, and the metrics visibly change. If the dashboard updates 10 seconds later, the cause-and-effect link weakens. If it updates 30 seconds later, it's broken entirely. The 1-2 second update requirement is a UX latency constraint, distinct from the 50ms control latency that [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements|edge compute addresses for real-time control]].

This latency requirement has architectural implications. Cloud round-trips — data to cloud, processing, results back — typically take 100-500ms for the network alone, plus processing time. Under load or with connectivity issues, this can spike to seconds. For the demo dashboard, this means the metrics pipeline from sensor to display must run at the edge: the [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function|MQTT broker, InfluxDB, and Grafana]] all run on local hardware. Cloud analytics can consume the same data for long-term analysis, but the real-time demo display must be edge-local.

The hybrid edge/cloud pattern emerging in 2025-2026 validates this architecture: critical real-time functions stay on-premise for low latency and security, while heavy analytics and long-term storage move to cloud platforms. For the mode dial, the real-time display is the primary sales tool during demos; the cloud analytics generate the statistical evidence for follow-up sales conversations. Same data, two consumption patterns, two infrastructure layers.

This also constrains the [[the Unified Namespace applied to mode-dial data should encode mode context alongside sensor readings in the MQTT topic hierarchy|UNS architecture]]: the MQTT broker must be local, not cloud-hosted, to keep the pub/sub path within the 1-2 second budget. [[modern compact PLCs run Linux with Docker alongside IEC 61131-3 logic blurring the boundary between industrial controller and edge computing node|Compact PLCs]] or a local edge server can host the entire pipeline — broker, database, and visualization — for a single mini factory at negligible cost.

The 1-2 second target also creates a minimum spec for the metrics pipeline: if the pipeline takes 3 seconds to process a mode transition, no amount of network optimization will hit the target. Pipeline latency must be measured and optimized as a first-class requirement, not an afterthought.

---

Relevant Notes:
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — extends the edge argument from control latency (50ms) to demo UX latency (1-2s)
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — the entire stack must run at the edge for demo latency
- [[the Unified Namespace applied to mode-dial data should encode mode context alongside sensor readings in the MQTT topic hierarchy]] — the MQTT broker must be local, not cloud-hosted
- [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration]] — the cause-and-effect moment requires sub-2-second feedback
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — the evidence engine requires real-time display to be persuasive

---

Topics: [[manufacturing software]], [[somana product]]
