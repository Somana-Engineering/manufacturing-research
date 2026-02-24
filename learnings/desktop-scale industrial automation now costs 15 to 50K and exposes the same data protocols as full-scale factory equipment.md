---
description: "A Dorner conveyor ($3K), xArm 6 cobot ($9K), WAGO PLC ($1K), and Bambu print farm ($6K) create a real production line on two desks — all speaking Modbus TCP, OPC UA, and MQTT"
type: learning
source: "Product research — showcase factory equipment reference"
domain_area: mechanics
created: 2026-02-20
---

# desktop-scale industrial automation now costs 15 to 50K and exposes the same data protocols as full-scale factory equipment

The price-performance of desktop industrial equipment has crossed a threshold where a startup can build a genuine production line — not a demo mockup — for the cost of a mid-range car. Three budget tiers each deliver progressively more capability.

Starter tier (~$15K): VEVOR conveyor ($450) + Dobot MG400 arm ($2.9K, 750g payload, Modbus TCP) + Revolution Pi PLC ($900, Docker + OPC UA + MQTT) + 3× Bambu X1C print farm ($4.4K, native MQTT) + dashboards and sensors. Manual assembly with a data backbone. Mid-range (~$28K): Dorner 2200 conveyor ($3.5K, VFD-controllable via PLC) + UFACTORY xArm 6 ($9K, 3kg payload, 6-axis, Python SDK + Modbus TCP + ROS2) + WAGO PFC200 PLC ($1.5K with I/O, Docker + OPC UA + MQTT + Node-RED) + 4× Bambu X1C ($5.8K). Semi-automated with real cobot assembly. Showcase (~$50K): dual Dorner conveyors + Dobot CR3 cobot ($16K, ISO safety-certified) + secondary MG400 + expanded WAGO PLC + 6× print farm + vision station + RFID traceability.

What makes this transformative: every piece of equipment in these tiers exposes [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything|the same industrial protocols]] as full-scale factory equipment. The xArm 6 speaks Modbus TCP like a Fanuc. The WAGO PFC200 runs IEC 61131-3 ladder logic like a Siemens S7-1500. The Dorner conveyor accepts VFD speed commands like a factory-floor line. Software built for this desk-scale line works in a real factory — the [[equipment heterogeneity across vendors protocols and decades is what kills most automation projects|protocol stack is the same]].

## Relevant Notes
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]] — the integration layer works at desk scale too
- [[equipment heterogeneity across vendors protocols and decades is what kills most automation projects]] — desktop equipment now speaks industrial protocols (Modbus TCP, OPC UA, MQTT)
- [[modern compact PLCs run Linux with Docker alongside IEC 61131-3 logic blurring the boundary between industrial controller and edge computing node]]
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — the three tiers map to progressive investment phases
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — the PLC + robot arm + vision system all run at the edge

---

Topics: [[somana product]], [[manufacturing mechanics]]
