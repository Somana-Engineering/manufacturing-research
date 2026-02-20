---
description: Control systems, data infrastructure, MES, quality systems, and how AI reshapes the factory software stack
type: moc
created: 2026-02-19
---

# manufacturing software

The factory software stack spans from embedded PLC firmware to cloud AI platforms, with the ISA-95 Purdue Model as the persistent organizational backbone. This topic map covers the architecture, protocols, platforms, and AI capabilities that make modern manufacturing work — and where they're changing.

## Architecture & Standards
- [[nine software layers span from embedded PLC firmware to cloud AI platforms with the ISA-95 pyramid as persistent organizational backbone]] — the full stack from Level 0 sensors to Level 5 cloud, with ISA-95 still used by 92.9% of manufacturers
- [[ISA-88 recipe management separates what to make from how to make it through four recipe types cascading from R&D to execution]] — the WHAT/HOW separation that makes recipes portable across equipment configurations

## Protocols & Integration
- [[industrial protocol fragmentation creates a vendor-locked landscape where PROFINET EtherNet-IP and EtherCAT each dominate different ecosystems]] — the Babel problem: every vendor speaks a different industrial Ethernet
- [[OPC UA provides semantic richness at the machine edge while MQTT provides scalable distribution across the enterprise]] — complementary, not competing: OPC UA for the first mile, MQTT for distribution
- [[the Unified Namespace promises any-to-any data flow but UNS without governance becomes chaos at scale]] — the architectural revolution in progress, with governance as the overlooked failure mode

## Execution & Data Platforms
- [[MES bridges the shopfloor to the enterprise through eleven core functions spanning scheduling to genealogy]] — the $15-17B middle layer handling everything from dispatching to traceability
- [[process historians achieve extreme compression ratios on sensor data and open-source alternatives are challenging proprietary incumbents]] — AVEVA PI System's dominance challenged by InfluxDB/TimescaleDB at 1/3 cost
- [[the manufacturing planning cascade from S&OP to MRP to finite scheduling could be collapsed by AI doing real-time planning across all horizons]] — sequential planning as design debt from human cognitive limitations

## Edge & AI
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — why edge-first architecture wins for manufacturing
- [[computer vision inspection runs at 1200 parts per minute on the edge because millisecond latency makes cloud inference impractical]] — production-deployed AI: 1,200 parts/min, 5-10 training images
- [[generative AI copilots for manufacturing use RAG over internal documentation rather than fine-tuning to reduce hallucination]] — the 2025 inflection: Siemens Industrial Copilot, RAG over fine-tuning
- [[edge AI adoption follows a PoC-to-platform progression where infrastructure deployment replaces isolated use case development]] — market maturation from experiments to infrastructure
- [[real-time connected digital twins remain mostly aspirational while offline simulation and virtual commissioning deliver proven value]] — the honest position: offline simulation works, real-time twins are still emerging

## Cross-Cutting Themes
- [[equipment heterogeneity across vendors protocols and decades is what kills most automation projects]] — the universal starting condition any software layer must accommodate
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]] — Somana's approach: integration plus intelligence, not just plumbing
- [[predictive maintenance uses already-flowing process data rather than requiring dedicated condition monitoring hardware]] — AI on existing sensor streams, near-zero marginal cost
- [[only 189 of millions of factories have achieved full digital transformation while 70 percent remain stuck in pilot purgatory]] — reality check: <0.01% of factories have crossed the finish line

## Tensions
- **ISA-95 persistence vs UNS revolution** — 92.9% still use ISA-95, but UNS advocates argue the hierarchical model is design debt. Both may coexist: ISA-95 as organizational taxonomy, UNS as data flow architecture.
- **Proprietary vs open-source data infrastructure** — PI System dominates but costs 3x open-source alternatives. The question is whether reliability and ecosystem justify the premium as open-source matures.
- **Edge execution vs cloud analytics** — The hybrid pattern is emerging as consensus, but where exactly to draw the line between edge and cloud is still contested.

## Open Questions
- What is the right abstraction layer for manufacturing AI — should it sit at the MES level, the historian level, or as a separate overlay?
- How does the protocol fragmentation landscape change as TSN (Time-Sensitive Networking) matures — does convergence actually happen?

---

Topics: [[index]]
