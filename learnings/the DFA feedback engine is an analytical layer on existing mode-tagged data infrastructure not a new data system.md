---
description: "Per-step timing, defect classification, mode transitions, and statistical accumulation are all already required for the demo/evidence engine — DFA feedback requires zero new data collection, only new analytical queries"
type: learning
source: "DFA feedback engine research — web search synthesis"
domain_area: software
created: 2026-02-26
---

# the DFA feedback engine is an analytical layer on existing mode-tagged data infrastructure not a new data system

The mode-tagged data architecture already planned for Somana's demo/evidence engine is exactly the infrastructure needed for the DFA feedback engine. Every data requirement for DFA analytics is already a requirement for mode-comparative OEE and demo metrics:

- **Per-step timing** at each station, tagged with mode — already required for mode-comparative OEE
- **Per-step defect classification** — already required for quality metrics
- **Mode transitions** — already required for the demo protocol
- **Statistical accumulation** over time — already required for customer ROI evidence

The DFA feedback engine is not a new data system — it is a new *analytical layer* on top of the [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible|mode-tagged production data]] that the architecture already produces. The [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function|metrics pipeline]] (OPC-UA → MQTT → InfluxDB → Grafana) carries the data. The DFA engine runs queries against InfluxDB that the pipeline was already designed to support.

This is strategically significant: the DFA feedback engine costs virtually nothing incrementally to build, but it produces a new revenue stream (design intelligence as a service) and a new competitive moat (empirical DFA data that accumulates with every product). The infrastructure investment is justified by the demo/evidence use case alone; the DFA capability is a free rider on that investment.

The implication for build sequence: the DFA analytical layer should be designed alongside the metrics pipeline, even if it ships later. The data schema needs per-step granularity and defect categorization from day one — these are easy to include at design time but expensive to retrofit. The analytical queries can be developed incrementally as production data accumulates.

---

Relevant Notes:
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — mode tagging is the foundation; DFA analytics are a consumer of mode-tagged data
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — the pipeline carries DFA data with zero additional infrastructure
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — the analytical layer that runs on this infrastructure
- [[contract box-build becomes a design intelligence service when mode-tagged data generates empirical DFA report cards for every customer product]] — the service product this enables
- [[the Unified Namespace applied to mode-dial data should encode mode context alongside sensor readings in the MQTT topic hierarchy]] — per-step granularity in the UNS schema enables DFA queries

---

Topics: [[manufacturing software]], [[somana product]]
