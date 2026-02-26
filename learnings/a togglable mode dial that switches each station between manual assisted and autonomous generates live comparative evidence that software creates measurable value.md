---
description: "The killer demo — visitor flips a station from Autonomous to Manual and watches metrics degrade in real time, then flips back — design every station with three switchable modes as first-class architecture"
type: pattern
source: "Synthesis — vault cross-reference and strategic analysis"
domain_area: software
created: 2026-02-23
---

# a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value

Most demo factories showcase one mode of operation — the factory runs, visitors watch. This is like selling a before/after program by only showing the "after" photo. The single smartest architectural decision for Somana's mini factory: design every station with three switchable modes — Manual, Assisted, Autonomous — and make the primary demo the COMPARISON between them.

The mechanism: each station's software abstraction layer exposes a mode selector. In Manual mode, the operator follows written work instructions with no AI input. In Assisted mode, the system provides real-time guidance — optimal torque targets, placement verification, suggested adjustments — but the operator executes. In Autonomous mode, the cobot/automation executes while the operator monitors. The physical equipment stays identical. Only the software layer changes.

The demo protocol: produce 5 boarding boxes in Manual mode, capturing cycle time, defect rate, and changeover speed. Then switch to Assisted. Then Autonomous. Same product, same equipment, same afternoon. A real-time dashboard shows the metrics diverging. The visitor sees — with their own eyes, on real production — what the software does to the same hardware.

The killer moment: a visitor walks up, flips a station from Autonomous back to Manual, and watches the metrics degrade in real time. Then flips it back. That 30-second experience is more persuasive than any slide deck or case study because the visitor caused the evidence themselves.

This connects to three existing architectural insights. First, [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment|progressive automation]] — each phase in the automation roadmap maps directly to a mode. Phase 1 (manual) IS Manual mode. Phase 2 (semi-auto testing) IS Assisted mode. Phase 4 (cobot) IS Autonomous mode. The progression isn't just a one-way investment journey — it's a set of deployable configurations you can toggle between. Second, [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration|the demo factory pattern]] — mode switching is an even more powerful "moment of truth" than product changeover, because it isolates the software variable while holding everything else constant. Third, [[the competitive moat shifts from accumulated production volume to data infrastructure quality and AI model sophistication|the competitive moat thesis]] — every hour of multi-mode operation generates comparative data that quantifies the software's value. The factory doesn't just demonstrate the product; it generates the sales evidence.

The architectural requirement is modest: a software abstraction layer at each station (which Somana is building anyway as their product), metrics collection at every step (which they need for [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously|continuous monitoring]] anyway), and a dashboard showing mode-comparative analytics (which is their product's UI anyway). The mode dial isn't extra work — it's a framing of architecture that's already being built.

What this enables beyond demos: real A/B testing of new AI features against production baselines, progressive operator training (start in Manual, graduate to monitoring Autonomous), regulatory compliance evidence (before/after statistical proof), and customer-specific ROI projections based on actual comparative data from the factory's own history.

## Relevant Notes
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — each automation phase IS a deployable mode, not just a funding stage
- [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration]] — mode switching is a more powerful moment of truth than product changeover
- [[the competitive moat shifts from accumulated production volume to data infrastructure quality and AI model sophistication]] — the factory generates its own evidence that the moat is real
- [[small adaptive adjustments compound across stations shifts and days into meaningful throughput and quality gains]] — the compounding effect becomes visible when you can toggle it on and off
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]] — the metrics dashboard is what makes mode comparison legible to visitors
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]] — the integration layer IS what enables mode switching across heterogeneous stations
- [[adaptive control responds to condition combinations too complex for human-authored rules]] — the "why" behind the Manual-to-Autonomous performance gap
- [[generative AI copilots for manufacturing use RAG over internal documentation rather than fine-tuning to reduce hallucination]] — copilots ARE the Assisted mode: real-time guidance via RAG over process documentation while the operator executes
- [[edge AI adoption follows a PoC-to-platform progression where infrastructure deployment replaces isolated use case development]] — the mode dial is what makes the platform approach tangible: visitors see the same infrastructure serving three operating modes
- [[U-shaped assembly cells provide 2-3x more task combinations than straight lines by letting operators start and finish at the same point]] — the U-cell dual layout places mode-switchable stations where visitors can see and interact with them
- [[a hardware abstraction layer decouples mode switching from physical equipment by routing the same control signals through different software configurations]] — the HAL is the engineering mechanism that makes mode switching implementable without hardware changes
- [[software-defined automation makes each operating mode a deployable software configuration rather than a hardware configuration enabling version-controlled iteration]] — the mode dial IS the SDA thesis made tangible; WEF (Feb 2026) validates this as next-generation manufacturing
- [[agent-based control enables per-station mode independence where each station maintains its own mode state while reporting to a central dashboard]] — per-station independence means Station 3 runs Autonomous while Station 1 runs Manual
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — mode tagging is what makes the evidence engine work; without it, the toggle is just a control switch
- [[the mode dial maps to formal autonomy level frameworks where Manual is Level 0-1 Assisted is Level 2-3 and Autonomous is Level 4-5]] — the three positions map to established industrial autonomy levels
- [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff]] — the killer demo moment (visitor flips Autonomous to Manual) is the highest-risk transition

---

Topics: [[somana product]]
