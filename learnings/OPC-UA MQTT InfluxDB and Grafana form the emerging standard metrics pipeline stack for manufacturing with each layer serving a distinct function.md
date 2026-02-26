---
description: "OPC-UA for equipment communication, MQTT for lightweight pub/sub transport, InfluxDB for high-frequency time series writes, Grafana for real-time visualization — the four layers of the manufacturing data pipeline"
type: learning
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function

Modern manufacturing metrics pipelines follow a consistent four-layer pattern: sensors/PLCs communicate via OPC-UA, an MQTT broker distributes telemetry, a time series database stores measurements, and a visualization layer renders dashboards. The specific technology choices that have converged as the standard stack for this scale:

**OPC-UA** for PLC and equipment communication. The interoperability standard for secure data exchange in the industrial domain, providing a client-server communication method across all industrial equipment. [[OPC UA provides semantic richness at the machine edge while MQTT provides scalable distribution across the enterprise|OPC-UA's semantic richness]] (60+ companion specifications) means machines describe themselves consistently, so the pipeline doesn't need custom parsers per equipment type.

**MQTT** for lightweight telemetry transport. The publisher/subscriber model decouples data producers from consumers with minimal network overhead. For the mode dial, this decoupling is critical: when the mode changes, the system producing control data changes (operator inputs vs. AI commands), but every downstream consumer (dashboard, historian, analytics) subscribes to the same topics regardless of which mode is active.

**InfluxDB** for time series storage. Optimized for high-availability storage and retrieval of time series data, handling the high-frequency write patterns typical of manufacturing sensors. [[process historians achieve extreme compression ratios on sensor data and open-source alternatives are challenging proprietary incumbents|InfluxDB 3.0]] (rewritten in Rust on Apache Arrow/Parquet) provides the write throughput needed for mode-comparative analytics at the time granularity required for meaningful cycle time comparisons.

**Grafana** for visualization and dashboards. Excels at creating real-time visualizations of process metrics — temperature, flow rates, OEE — with annotation and comparison features. For the mode dial, Grafana's annotation feature marks mode switches on the timeline with before/after metrics overlaid, making the mode effect visible to visitors.

This four-layer stack is actionable for Somana's mini factory: each component is open-source or has a free tier, runs on [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements|edge hardware]], and is well-documented. The total infrastructure cost is primarily engineering time, not licensing.

---

Relevant Notes:
- [[OPC UA provides semantic richness at the machine edge while MQTT provides scalable distribution across the enterprise]] — the first two layers of the pipeline, now articulated as part of a complete stack
- [[process historians achieve extreme compression ratios on sensor data and open-source alternatives are challenging proprietary incumbents]] — InfluxDB is the open-source challenger positioned as the pipeline's storage layer
- [[the Unified Namespace promises any-to-any data flow but UNS without governance becomes chaos at scale]] — the MQTT broker in this stack IS the UNS implementation
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — the stack runs at the edge for real-time dashboard updates
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — mode tagging flows through every layer
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]] — this pipeline is the infrastructure that enables continuous monitoring
- [[modern compact PLCs run Linux with Docker alongside IEC 61131-3 logic blurring the boundary between industrial controller and edge computing node]] — compact PLCs can host the MQTT broker and even InfluxDB in containers
- [[real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor]] — this pipeline naturally separates the two consumers: Grafana for real-time demos, InfluxDB queries for historical evidence

---

Topics: [[manufacturing software]], [[somana product]]
