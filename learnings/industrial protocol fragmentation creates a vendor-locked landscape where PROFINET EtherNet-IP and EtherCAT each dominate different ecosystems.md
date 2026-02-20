---
description: "PROFINET (Siemens, 30M+ nodes), EtherNet/IP (Rockwell, 40%+ North America), EtherCAT (Beckhoff, sub-microsecond) — each tied to vendor ecosystems"
type: learning
source: "The Complete Software Architecture of a Modern Manufacturing Shopfloor"
domain_area: software
created: 2026-02-19
---

# industrial protocol fragmentation creates a vendor-locked landscape where PROFINET EtherNet-IP and EtherCAT each dominate different ecosystems

The device level communicates through a fragmented landscape of industrial protocols, each tied to a vendor ecosystem. PROFINET (Siemens ecosystem, 30M+ nodes installed) delivers 1-10ms cycles on standard Ethernet. EtherNet/IP (Rockwell ecosystem, 40%+ North American market) uses standard TCP/UDP, fully routable. EtherCAT (Beckhoff-originated) achieves sub-microsecond jitter for motion applications. Modbus TCP/RTU remains ubiquitous despite having no authentication or encryption. PROFIBUS (50M+ devices) persists in process industries. CC-Link IE TSN dominates Asia-Pacific.

TSN (Time-Sensitive Networking) is the convergence play — IEEE 802.1 standards adding determinism to standard Ethernet. OPC UA Pub/Sub over TSN with Gigabit Ethernet can theoretically outperform existing 100 Mbit industrial Ethernet by ~18x, but full convergence will take years. The practical reality: any factory modernization project must accommodate multiple protocols simultaneously, which is precisely why [[equipment heterogeneity across vendors protocols and decades is what kills most automation projects|equipment heterogeneity kills most automation projects]].

## Relevant Notes
- [[equipment heterogeneity across vendors protocols and decades is what kills most automation projects]]
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]]
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]]

---

Topics: [[manufacturing software]]
