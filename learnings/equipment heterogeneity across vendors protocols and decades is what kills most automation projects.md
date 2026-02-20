---
description: "A typical factory floor has Siemens PLCs, Allen-Bradley PLCs, Fanuc robots, Cognex vision — all speaking different languages"
type: learning
source: "Somana — A Tour of Our Model Factory"
status: conventional
domain_area: mechanics
created: 2026-02-19
---

# equipment heterogeneity across vendors protocols and decades is what kills most automation projects

Count the brands on any factory floor: Siemens PLC, Allen-Bradley PLC, Fanuc robot, Cognex vision, sensors from three vendors (one acquired and no longer exists). Every piece of equipment speaks its own language, runs its own software, stores its own data. Connecting them requires custom integration — expensive, fragile, different at every site. This heterogeneity is not an exception; it is the universal condition. Any manufacturing intelligence solution must accept this as the starting point.

The protocol landscape makes this concrete: [[industrial protocol fragmentation creates a vendor-locked landscape where PROFINET EtherNet-IP and EtherCAT each dominate different ecosystems|PROFINET dominates Siemens shops, EtherNet/IP dominates Rockwell shops, EtherCAT dominates motion control]] — and that's just the modern equipment. Legacy Modbus devices from the 1990s still run production-critical processes. The edge AI article from Barbara confirms this remains the primary barrier: "integrating edge computing with existing IT infrastructures remains a challenge, especially for large corporations," with compatibility between legacy systems and edge-native platforms cited as the core difficulty. Kubernetes is gaining traction for edge orchestration but "is not suited for all industrial use cases." This is why [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything|Somana's integration-first approach]] matters — the equipment won't converge on standards, so the intelligence layer must bridge the gaps.

## Relevant Notes
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]]
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]]
- [[cross-site knowledge transfer means each subsequent factory deployment ramps faster than the previous one]]
- [[industrial protocol fragmentation creates a vendor-locked landscape where PROFINET EtherNet-IP and EtherCAT each dominate different ecosystems]]
- [[edge AI adoption follows a PoC-to-platform progression where infrastructure deployment replaces isolated use case development]]
- [[SMT electronics assembly is the most viable office-scale production process because it combines multi-step flow with rich data and natural product changeovers]] — counterpoint: desktop equipment (Bambu MQTT, Formlabs REST API, Haas MTConnect) now exposes enterprise-grade data through standard IoT protocols, suggesting heterogeneity is solvable at small scale
- [[only 189 of millions of factories have achieved full digital transformation while 70 percent remain stuck in pilot purgatory]] — equipment heterogeneity is a root cause of pilot purgatory; integration complexity stalls digital transformation at scale
- [[in micro-manufacturing the competitive moat is software not hardware because design automation and scheduling determine who can serve high-mix demand profitably]] — the software that bridges heterogeneous equipment IS the competitive moat

---

Topics: [[somana product]], [[manufacturing software]]
