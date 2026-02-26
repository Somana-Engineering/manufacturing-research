---
description: "The UNS topic hierarchy should contain current mode per station, mode-tagged sensor readings, aggregate metrics per mode, and mode transition events — every consumer subscribes to the same namespace"
type: learning
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# the Unified Namespace applied to mode-dial data should encode mode context alongside sensor readings in the MQTT topic hierarchy

The Unified Namespace (UNS) provides a central integration point that normalizes data from all sources using an MQTT broker. Applied to the mode dial, the UNS topic hierarchy should contain four categories of mode-related data: current mode per station, all sensor readings tagged with their mode context, aggregate metrics per mode per station, and mode transition events.

A practical topic structure following ISA-95 hierarchy:
- `factory/line1/station3/mode` — current mode state (Manual/Assisted/Autonomous)
- `factory/line1/station3/cycle_time` — with mode tag in the payload
- `factory/line1/station3/quality/defect_count` — with mode tag
- `factory/line1/station3/transitions` — mode switch events with timestamps
- `factory/line1/station3/oee/performance` — per-mode aggregate metrics

Every consumer — the operator dashboard, the demo display, the historical analytics system — subscribes to this same namespace. The operator dashboard subscribes to `factory/line1/+/mode` to show all station modes at once. The demo display subscribes to `factory/line1/station3/#` to show one station's full data. The analytics system subscribes to `factory/+/+/cycle_time` to aggregate across the entire factory.

This extends [[the Unified Namespace promises any-to-any data flow but UNS without governance becomes chaos at scale|the existing UNS learning]] with a specific application: mode context is not optional metadata but a governance requirement. Without mode encoding in the topic hierarchy, consumers cannot distinguish whether a cycle time of 45 seconds came from Manual or Autonomous mode. The mode tag must be part of the message schema that every publisher adheres to — exactly the kind of data contract that prevents the "chaos at scale" the existing learning warns about.

The [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function|metrics pipeline]] relies on the UNS as its distribution layer. OPC-UA data from PLCs enters the UNS via gateway translation. InfluxDB subscribes and stores. Grafana subscribes and displays. The UNS is what makes the pipeline work as a system rather than as point-to-point integrations.

---

Relevant Notes:
- [[the Unified Namespace promises any-to-any data flow but UNS without governance becomes chaos at scale]] — mode context is a concrete governance requirement for the UNS
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — the UNS topic hierarchy is where mode tagging is enforced
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — the UNS is the distribution layer of the pipeline
- [[agent-based control enables per-station mode independence where each station maintains its own mode state while reporting to a central dashboard]] — station agents publish to UNS topics
- [[OPC UA provides semantic richness at the machine edge while MQTT provides scalable distribution across the enterprise]] — OPC-UA enters the UNS via gateway; MQTT distributes within it

---

Topics: [[manufacturing software]]
