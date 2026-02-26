---
description: "Proven in industrial AGVs with manual override — the autonomy processor handles AI control while the PLC enforces safety boundaries and manages manual passthrough"
type: learning
source: "Mode dial software architecture research — web search synthesis (arXiv 2408.12499)"
domain_area: software
created: 2026-02-25
---

# a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor

Research on industrial AGVs with manual override capability describes a dual-controller architecture that maps directly to the mode dial: an Autonomous Driving Processing Unit (ADPU) handles autonomous behavior while a PLC serves as low-level controller and safety supervisor. Both controllers can access all actuators, but the PLC has ultimate authority as the safety mechanism.

For the mode dial, this pattern implements the three modes concretely. In Manual mode, the PLC handles passthrough — operator inputs flow directly through to actuators with no AI involvement. In Autonomous mode, the AI processing unit generates control commands that the PLC executes after safety checking. In Assisted mode, the AI system provides guidance signals that display on the operator's HMI while manual controls remain active through the PLC — the operator sees recommendations but retains physical control.

The safety supervisor role means the PLC can override the AI system at any time. If the AI commands a motion that would exceed safe parameters, the PLC vetoes it. If a [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff|mode transition]] requires the AI to park equipment before handing off control, the PLC enforces the parking sequence. This is the hardware enforcement layer that [[three-layer PLC architecture separates hardware abstraction from process logic from safety override ensuring mode transitions never leave a station in an unsafe intermediate state|the three-layer architecture]] places at the top.

The pattern also resolves a practical concern: what happens if the AI system crashes during Autonomous mode? The PLC, running independently, detects the loss of AI heartbeat and either transitions to a safe state or falls back to Manual mode. The PLC's deterministic, real-time execution guarantees responses within milliseconds — something a general-purpose AI processor cannot guarantee. This separation of concerns — AI for intelligence, PLC for safety — is well-proven in industrial AGVs and extends naturally to manufacturing stations.

For Somana's mini factory, [[modern compact PLCs run Linux with Docker alongside IEC 61131-3 logic blurring the boundary between industrial controller and edge computing node|compact PLCs like WAGO PFC200]] can serve both roles: the IEC 61131-3 deterministic core handles safety and manual passthrough, while Docker containers on the same device run AI inference for Assisted and Autonomous modes.

---

Relevant Notes:
- [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff]] — the PLC supervises the highest-risk transitions
- [[three-layer PLC architecture separates hardware abstraction from process logic from safety override ensuring mode transitions never leave a station in an unsafe intermediate state]] — dual-controller is the hardware implementation of the three-layer separation
- [[adaptive control responds to condition combinations too complex for human-authored rules]] — the AI processing unit handles the adaptive control; the PLC ensures it stays within safety boundaries
- [[modern compact PLCs run Linux with Docker alongside IEC 61131-3 logic blurring the boundary between industrial controller and edge computing node]] — WAGO PFC200 can serve as both controllers in one device
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — the dual-controller keeps both safety and AI processing at the edge

---

Topics: [[manufacturing software]]
