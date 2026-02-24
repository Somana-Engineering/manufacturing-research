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

---

Topics: [[somana product]]
