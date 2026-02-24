---
description: "WAGO PFC200 ($600–$1.2K) runs Docker and Node-RED alongside real-time PLC logic with native OPC UA server, MQTT client, and REST API — an entire edge stack in a DIN-rail module"
type: learning
source: "Product research — showcase factory equipment reference"
domain_area: software
created: 2026-02-20
---

# modern compact PLCs run Linux with Docker alongside IEC 61131-3 logic blurring the boundary between industrial controller and edge computing node

A new generation of compact PLCs collapses the traditional separation between operational technology (PLC logic) and information technology (data processing, APIs, containerized applications) into a single DIN-rail device. This has profound implications for the manufacturing software stack.

WAGO PFC200 ($600–$1.2K for controller): real-time Linux, Docker container support, Node-RED pre-installed, IEC 61131-3 programming (Ladder, Structured Text, FBD), native OPC UA server and client, MQTT client, Modbus TCP/RTU, built-in REST API, AWS IoT Greengrass and Azure IoT Edge certified. Add 750-series I/O modules (~$50–$200 each) for a complete system at $1,000–$2,000. Phoenix Contact PLCnext ($640–$700): same capabilities plus a completely free IDE supporting IEC 61131-3, C++, C#, Python, and MATLAB/Simulink, with IEC 62443 cybersecurity certification. Revolution Pi ($560–$685): Raspberry Pi in a DIN-rail enclosure with Docker, OPC UA, MQTT, and the massive Pi community for integration support — soft real-time only (5–10ms cycles) but adequate for desktop assembly speeds.

These PLCs can serve as the [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements|edge node]] in a manufacturing AI architecture. Node-RED running on the WAGO translates [[OPC UA provides semantic richness at the machine edge while MQTT provides scalable distribution across the enterprise|OPC UA from the machine edge to MQTT for the enterprise]], bridging the protocol gap without an external gateway. Docker containers on the PLC can run inference models, data preprocessing, or custom integration logic — the [[nine software layers span from embedded PLC firmware to cloud AI platforms with the ISA-95 pyramid as persistent organizational backbone|software layers]] compress from nine to three or four.

## Relevant Notes
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — these PLCs ARE the edge compute
- [[OPC UA provides semantic richness at the machine edge while MQTT provides scalable distribution across the enterprise]] — both protocols native on one device
- [[nine software layers span from embedded PLC firmware to cloud AI platforms with the ISA-95 pyramid as persistent organizational backbone]] — compact PLCs compress these layers
- [[the Unified Namespace promises any-to-any data flow but UNS without governance becomes chaos at scale]] — WAGO/PLCnext can host the MQTT broker for a small UNS
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]] — the PLC becomes the integration layer itself
- [[desktop-scale industrial automation now costs 15 to 50K and exposes the same data protocols as full-scale factory equipment]]

---

Topics: [[manufacturing software]], [[somana product]]
