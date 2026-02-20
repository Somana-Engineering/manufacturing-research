---
description: "OPC UA for the first mile (60+ companion specs, rich data models) and MQTT for distribution (80-95% less bandwidth than polling) — complementary not competing"
type: learning
source: "The Complete Software Architecture of a Modern Manufacturing Shopfloor"
domain_area: software
created: 2026-02-19
---

# OPC UA provides semantic richness at the machine edge while MQTT provides scalable distribution across the enterprise

OPC UA and MQTT are not competitors but complementary. OPC UA exposes an object-oriented address space where clients browse, read, write, and subscribe to nodes. 60+ companion specifications provide domain-specific data models (VDMA robot spec, PackML for packaging) ensuring machines describe themselves consistently regardless of manufacturer. Kepware KEPServerEX leads with 150+ industrial protocol drivers.

MQTT provides lightweight pub/sub messaging for distributing normalized events at scale. The practical pattern emerging in real factories uses OPC UA for the "first mile" (machine connectivity with rich semantic models) and MQTT for distribution (plant, enterprise, and cloud scale with 80-95% less bandwidth than polling protocols). Sparkplug B transforms raw MQTT into an industrial-grade protocol by adding birth/death certificates for state awareness, Google Protocol Buffers for compact encoding, auto-discovery, and report-by-exception achieving up to 98% bandwidth reduction. This is the integration architecture that [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything|Somana's unified integration layer]] should build on.

## Relevant Notes
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]]
- [[industrial protocol fragmentation creates a vendor-locked landscape where PROFINET EtherNet-IP and EtherCAT each dominate different ecosystems]]
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]]

---

Topics: [[manufacturing software]]
