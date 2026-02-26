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

## Mode Dial Architecture
- [[a hardware abstraction layer decouples mode switching from physical equipment by routing the same control signals through different software configurations]] — the HAL pattern that makes mode switching engineerable without custom integration per equipment type
- [[three-layer PLC architecture separates hardware abstraction from process logic from safety override ensuring mode transitions never leave a station in an unsafe intermediate state]] — HAL + process logic + safety override: the within-PLC micro-architecture for mode switching
- [[software-defined automation makes each operating mode a deployable software configuration rather than a hardware configuration enabling version-controlled iteration]] — WEF (Feb 2026) validates SDA as the architectural pattern the mode dial implements
- [[a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor]] — proven AGV pattern applied to manufacturing: AI for intelligence, PLC for safety
- [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff]] — the safety engineering of the mode dial's state machine
- [[agent-based control enables per-station mode independence where each station maintains its own mode state while reporting to a central dashboard]] — per-station independence multiplies evidence generation and enables progressive mode deployment
- [[the mode dial maps to formal autonomy level frameworks where Manual is Level 0-1 Assisted is Level 2-3 and Autonomous is Level 4-5]] — established industrial autonomy vocabulary grounds the three-position mode dial

## Mode Dial Data Pipeline
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — mode tagging transforms the mode dial from control switch to evidence engine
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — the four-layer open-source pipeline for manufacturing metrics
- [[the Unified Namespace applied to mode-dial data should encode mode context alongside sensor readings in the MQTT topic hierarchy]] — UNS topic hierarchy with mode context as governance requirement
- [[the mode comparison dashboard must update within 1-2 seconds of a mode change to maintain the cause-and-effect demo experience which demands edge processing]] — demo UX latency constraint demanding edge-local pipeline
- [[OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant]] — decomposed OEE as the headline mode comparison metric

## Mode Dial Tensions
- [[real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor]] — live demos vs. rigorous evidence: same data, different time windows
- [[emergency stop must be hardware-enforced not software-enforced creating a hard boundary on software-defined automation]] — the irreducible hardware safety layer that limits SDA

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
- How many production cycles per mode are needed before the performance difference is statistically significant for sales evidence? (Relates to [[real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor|the demo-vs-analytics tension]] — this is the question that determines when the historical display becomes useful)
- Does the ROS2 lifecycle node state machine (unconfigured → inactive → active → finalized) map to mode dial transitions for cobot stations?
- What is the right OPC-UA information model for encoding mode state as a standardized object queryable by any OPC-UA client?

---

Topics: [[index]]
