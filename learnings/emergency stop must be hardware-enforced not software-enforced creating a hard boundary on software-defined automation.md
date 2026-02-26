---
description: "The SDA thesis says move control to software — but e-stop MUST bypass all software and cut power directly, creating an irreducible hardware safety layer that limits how 'software-defined' automation can truly be"
type: tension
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# emergency stop must be hardware-enforced not software-enforced creating a hard boundary on software-defined automation

[[software-defined automation makes each operating mode a deployable software configuration rather than a hardware configuration enabling version-controlled iteration|Software-defined automation (SDA)]] argues for moving control logic from hardware to software. The mode dial is a direct expression of this: three operating modes, all software-defined, running on the same hardware. But emergency stop exposes the limit of this thesis.

E-stop must be instantaneous, unconditional, and hardware-enforced. It cannot depend on software running correctly, the network being available, or the AI system processing a command. When someone hits the red button, power cuts to actuators through hardwired safety relays — bypassing the [[a hardware abstraction layer decouples mode switching from physical equipment by routing the same control signals through different software configurations|hardware abstraction layer]], bypassing the [[three-layer PLC architecture separates hardware abstraction from process logic from safety override ensuring mode transitions never leave a station in an unsafe intermediate state|three-layer PLC architecture]], bypassing everything. This is not a design choice — it is a regulatory and physical safety requirement (IEC 62061, ISO 13849).

The tension: if the most critical control function (stopping the machine) must be hardware, how far can SDA actually go? The answer is that SDA applies to operational control — what the machine does during normal operation — but safety-critical functions remain in hardware. The dual-controller architecture reflects this: the [[a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor|safety PLC]] operates in a domain that software-defined automation does not and should not reach.

This creates a practical design constraint for the mini factory: every station needs a physical e-stop button hardwired to a safety relay, regardless of how sophisticated the software control becomes. The mode dial can switch between Manual, Assisted, and Autonomous — but the red button overrides all three identically, from outside the software stack entirely.

---

Relevant Notes:
- [[software-defined automation makes each operating mode a deployable software configuration rather than a hardware configuration enabling version-controlled iteration]] — SDA's thesis has this hard boundary
- [[a hardware abstraction layer decouples mode switching from physical equipment by routing the same control signals through different software configurations]] — e-stop bypasses the HAL entirely
- [[three-layer PLC architecture separates hardware abstraction from process logic from safety override ensuring mode transitions never leave a station in an unsafe intermediate state]] — e-stop is above even the safety layer
- [[a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor]] — the PLC's safety domain includes but is not limited to software-accessible functions
- [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff]] — e-stop is the ungraceful alternative when graceful handoff fails

---

Topics: [[manufacturing software]]
