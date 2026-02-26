---
description: "HAL handles equipment-specific communication, process logic contains the three mode implementations, and the safety layer ensures no unsafe intermediate states during transitions"
type: learning
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# three-layer PLC architecture separates hardware abstraction from process logic from safety override ensuring mode transitions never leave a station in an unsafe intermediate state

Best practice for scalable PLC programming organizes code into three layers: hardware abstraction layer, process logic layer, and safety/override layer. The mode dial maps cleanly onto this structure.

The bottom layer — [[a hardware abstraction layer decouples mode switching from physical equipment by routing the same control signals through different software configurations|hardware abstraction]] — handles equipment-specific communication. It translates between the standardized interface the mode dial expects and the actual protocols each piece of equipment speaks. The middle layer — process logic — contains the three mode implementations: Manual passes operator inputs through, Assisted merges operator inputs with AI guidance, Autonomous routes AI commands directly. The top layer — safety/override — ensures that mode transitions never leave a station in an unsafe intermediate state. This layer has veto power over the other two.

The safety layer is critical for [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff|mode transition safety]]. Switching from Autonomous to Manual mid-cycle must gracefully hand off control without dropping a part or losing position tracking. The safety layer enforces transition rules: which transitions are allowed mid-cycle, which must wait for a cycle boundary, and what intermediate states are required. Emergency stop bypasses all three layers entirely — it is hardware-enforced, not software-enforced.

This three-layer pattern is well-established in PLC programming but gains new significance for the mode dial because the mode switch fundamentally changes what the middle layer does while the top and bottom layers remain stable. The HAL doesn't change when you switch modes (same equipment). The safety layer doesn't change (same safety rules). Only the process logic layer swaps its active configuration. This separation of concerns is what makes mode switching safe and fast.

The pattern also maps to [[nine software layers span from embedded PLC firmware to cloud AI platforms with the ISA-95 pyramid as persistent organizational backbone|ISA-95 Levels 1-2]]: sensing/manipulation at the HAL, control at the process logic layer, with the safety layer spanning both.

---

Relevant Notes:
- [[a hardware abstraction layer decouples mode switching from physical equipment by routing the same control signals through different software configurations]] — HAL is the bottom layer
- [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff]] — the safety layer manages these asymmetric transitions
- [[a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor]] — the dual-controller pattern implements this three-layer separation in hardware
- [[nine software layers span from embedded PLC firmware to cloud AI platforms with the ISA-95 pyramid as persistent organizational backbone]] — the three PLC layers sit within ISA-95 Levels 1-2
- [[modern compact PLCs run Linux with Docker alongside IEC 61131-3 logic blurring the boundary between industrial controller and edge computing node]] — WAGO/PLCnext can implement all three layers on a single device

---

Topics: [[manufacturing software]]
