---
description: "The Purdue Model's five levels still organize 92.9% of manufacturing IT/OT — even the Unified Namespace uses ISA-95 hierarchy for topic structure"
type: learning
source: "The Complete Software Architecture of a Modern Manufacturing Shopfloor"
domain_area: software
created: 2026-02-19
---

# nine software layers span from embedded PLC firmware to cloud AI platforms with the ISA-95 pyramid as persistent organizational backbone

A modern factory runs nine distinct software layers: embedded firmware on sensors/PLCs (Level 0-1), fieldbus protocols, SCADA/DCS/HMI (Level 2), line controllers and recipe management (Level 2.5-3), MES (Level 3), process historians, integration middleware (OPC UA/MQTT), ERP (Level 4), and AI/analytics platforms. The ISA-95 Purdue Model defined this architecture for three decades, and despite proclamations of its death, 92.9% of manufacturers report using ISA-95 for enterprise-control integration.

The 2025 revision of ISA-95 expanded to 8 parts and 1,036 pages — this is not a dying standard but an adapting one. Even the Unified Namespace (the most radical architectural challenger) structures its MQTT topic hierarchy using ISA-95 levels. Industry 4.0 technologies punch holes through the rigid layer boundaries (edge computing, 4G/5G sensors bypassing the pyramid), but ISA-95 persists as the organizational taxonomy everyone understands. This is either [[institutional design debt accumulates when systems optimize for constraints that technology has already eliminated|institutional design debt]] that will eventually be replaced, or it's a genuinely useful abstraction that survives because it captures something real about how factories are organized.

## Relevant Notes
- [[institutional design debt accumulates when systems optimize for constraints that technology has already eliminated]]
- [[the manufacturing metrics hierarchy cascades from financial outcomes to root cause indicators across four levels]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]

---

Topics: [[manufacturing software]]
