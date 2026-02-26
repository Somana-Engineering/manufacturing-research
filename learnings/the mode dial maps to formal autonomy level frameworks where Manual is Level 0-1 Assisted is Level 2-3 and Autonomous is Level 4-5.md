---
description: "Six-level industrial autonomy framework (Control Design) and five-level equipment automation framework (Makino) provide established vocabulary — the mode dial collapses a continuous spectrum into three states visitors understand"
type: learning
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# the mode dial maps to formal autonomy level frameworks where Manual is Level 0-1 Assisted is Level 2-3 and Autonomous is Level 4-5

The manufacturing industry has developed formal frameworks for autonomy levels that ground the mode dial in established vocabulary.

The six levels of industrial autonomy (Control Design): Level 0 is manual operation with no digital assistance. Level 1 is basic monitoring and alerting. Level 2 is automated data collection and analysis. Level 3 is predictive and advisory systems. Level 4 is conditional autonomy where the system acts and the human supervises. Level 5 is full autonomy with no human intervention needed.

The mode dial's three positions map to these levels: Manual covers Levels 0-1 (manual operation, basic monitoring). Assisted covers Levels 2-3 (automated analysis, predictive guidance, advisory recommendations). Autonomous covers Levels 4-5 (conditional to full autonomy, system executes while operator monitors or walks away).

The design insight: the mode dial collapses a continuous six-level spectrum into three visually distinct states that non-technical visitors can instantly grasp. "Manual/Assisted/Autonomous" communicates immediately. "Level 2.7 autonomy" does not. The three-position design is not a simplification of reality — it's a communication design that maps to well-defined capability clusters.

This mapping also clarifies what each mode requires technologically. Manual needs basic HMI and monitoring (achievable with standard PLCs). Assisted needs data collection, analysis, and advisory display (requires [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements|edge AI inference]] and an operator-facing dashboard). Autonomous needs closed-loop control with safety supervision (requires the full [[a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor|dual-controller architecture]]). The progressive technology requirements align with [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment|progressive automation]]: each mode represents a distinct investment tier.

The complementary Makino framework (five levels of equipment automation: fixed, programmable, flexible, integrated, intelligent) intersects at the "intelligent" level — the same equipment operates at different effective automation levels based on [[software-defined automation makes each operating mode a deployable software configuration rather than a hardware configuration enabling version-controlled iteration|software configuration]].

---

Relevant Notes:
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — the mode dial collapses the autonomy spectrum into three communicable states
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — each mode maps to a progressive automation phase and investment tier
- [[software-defined automation makes each operating mode a deployable software configuration rather than a hardware configuration enabling version-controlled iteration]] — the same equipment at different autonomy levels via software
- [[a dual-controller architecture pairs an AI processing unit with a safety PLC where both can access all actuators but the PLC serves as safety supervisor]] — Autonomous mode requires the full dual-controller architecture
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — Assisted and Autonomous modes require edge AI inference

---

Topics: [[manufacturing software]], [[somana product]]
