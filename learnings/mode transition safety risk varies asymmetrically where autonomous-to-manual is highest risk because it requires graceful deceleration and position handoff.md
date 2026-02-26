---
description: "Manual-to-Assisted is low risk (adds guidance overlay mid-cycle), Assisted-to-Autonomous is medium (should happen at cycle boundary), Autonomous-to-Manual requires an intermediate handoff state"
type: learning
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff

Not all mode transitions are equally safe. The mode dial's three modes create six possible transitions, but the risk profile is highly asymmetric.

**Manual to Assisted** (low risk): Adds a guidance overlay to existing manual operation. The operator retains physical control; the system simply starts displaying recommendations. Can happen mid-cycle because nothing changes about who controls the actuators.

**Assisted to Autonomous** (medium risk): Transfers physical control from operator to automation system. Should happen at a cycle boundary — between parts, not mid-operation — because the automation system needs to start from a known state. The operator releases controls, the system confirms it has position tracking, and autonomous execution begins.

**Autonomous to Manual** (highest risk): Must gracefully decelerate automation, ensure no collision zones between the operator and moving equipment, and hand off position tracking. The system cannot simply stop — a cobot arm mid-motion must complete or safely park before the operator takes over. This requires an intermediate "handoff" state where the system announces the transition, completes or parks current motion, confirms safe conditions, then releases control to the operator.

**Any to Emergency Stop**: Always available, instantaneous, hardware-enforced. This bypasses all software layers entirely — the [[three-layer PLC architecture separates hardware abstraction from process logic from safety override ensuring mode transitions never leave a station in an unsafe intermediate state|safety layer]] and even the HAL. E-stop is wired directly to power cutoff circuits.

This asymmetry has design implications for the demo experience. The "killer demo moment" — visitor flips a station from Autonomous to Manual — involves the highest-risk transition. The handoff state must be designed to feel smooth rather than alarming: a brief pause with a status indicator ("Transferring control..."), not an abrupt stop that makes visitors think something went wrong. The [[a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor|dual-controller architecture]] manages this by having the safety PLC supervise every transition.

---

Relevant Notes:
- [[three-layer PLC architecture separates hardware abstraction from process logic from safety override ensuring mode transitions never leave a station in an unsafe intermediate state]] — the safety layer enforces transition rules
- [[a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor]] — the PLC supervises every mode transition
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — the demo's killer moment involves the highest-risk transition
- [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration]] — the handoff state must feel smooth for the demo experience

---

Topics: [[manufacturing software]], [[somana product]]
