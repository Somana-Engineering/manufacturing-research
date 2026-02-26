---
description: How Somana's product transforms manufacturing through edge compute, integration, adaptive control, and cross-site learning — and how the mini factory demonstrates it
type: moc
created: 2026-02-19
---

# somana product

## Edge Infrastructure
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]]
- [[edge AI adoption follows a PoC-to-platform progression where infrastructure deployment replaces isolated use case development]] — validates Somana's platform approach over vertical solutions

## Integration
- [[equipment heterogeneity across vendors protocols and decades is what kills most automation projects]]
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]]
- [[modern compact PLCs run Linux with Docker alongside IEC 61131-3 logic blurring the boundary between industrial controller and edge computing node]] — WAGO PFC200 and PLCnext collapse the PLC/edge divide

## Observe
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]

## Control
- [[adaptive control responds to condition combinations too complex for human-authored rules]]
- [[small adaptive adjustments compound across stations shifts and days into meaningful throughput and quality gains]]

## Quality
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]]
- [[quality escapes are the most valuable learning signal because they reveal unknown failure modes]]

## Maintenance
- [[predictive maintenance uses already-flowing process data rather than requiring dedicated condition monitoring hardware]]

## Scale
- [[cross-site knowledge transfer means each subsequent factory deployment ramps faster than the previous one]]

## Mini Factory — Production Line Design
- [[desktop-scale industrial automation now costs 15 to 50K and exposes the same data protocols as full-scale factory equipment]] — Dorner conveyor + xArm/CR3 cobot + WAGO PLC + Bambu print farm = real production line on two desks
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — start manual ($2K), automate testing ($10K), add cobot ($150K), each phase self-funding — AND each phase maps to a toggleable mode
- [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration]] — the factory IS the product demo; mode switching is even more powerful than product changeover

## Mini Factory — Line Layout & Demo Architecture
- [[U-shaped assembly cells provide 2-3x more task combinations than straight lines by letting operators start and finish at the same point]] — dual-purpose layout: U-cell for production, one visible arm for visitor demo corridor, ~20x20 ft total
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — invest in SMED over balance optimization; 60-minute takt at 8 units/day gives massive tolerance
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — THE architectural decision: every station has Manual/Assisted/Autonomous modes; the primary demo is the comparison between them

## Mini Factory — Mode Dial Software Architecture
- [[a hardware abstraction layer decouples mode switching from physical equipment by routing the same control signals through different software configurations]] — the HAL makes mode switching work across heterogeneous stations without custom integration per equipment type
- [[software-defined automation makes each operating mode a deployable software configuration rather than a hardware configuration enabling version-controlled iteration]] — WEF-validated architectural pattern: modes as version-controlled software deployments
- [[agent-based control enables per-station mode independence where each station maintains its own mode state while reporting to a central dashboard]] — Station 3 runs Autonomous while Station 1 runs Manual, multiplying demo permutations
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — the data architecture decision that makes the evidence engine work
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — the open-source pipeline for mode-comparative manufacturing metrics
- [[the mode comparison dashboard must update within 1-2 seconds of a mode change to maintain the cause-and-effect demo experience which demands edge processing]] — demo UX requires edge-local pipeline for sub-2-second feedback
- [[OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant]] — decomposed OEE makes the mode comparison legible to visitors

## Mini Factory — Mode Dial Tensions
- [[real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor]] — the real-time demo carries the early persuasion burden; statistical evidence accumulates over weeks of production
- [[emergency stop must be hardware-enforced not software-enforced creating a hard boundary on software-defined automation]] — every station needs a physical e-stop hardwired to safety relays, regardless of software sophistication; the irreducible hardware layer beneath SDA

## Mini Factory — DFA Feedback Engine
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — mode gap = (Manual CT - Autonomous CT) / Autonomous CT: an empirical DFA score from production reality, not estimation
- [[the assisted mode differentiates information problems from physical design problems in assembly steps]] — if Assisted closes the gap, the problem is guidance; if not, the product geometry needs redesign
- [[mode gap data enables specific actionable redesign recommendations where traditional DFA only provides generic guidelines]] — "Step 4 cable routing has 340% mode gap — add channel" vs. generic "reduce part count"
- [[contract box-build becomes a design intelligence service when mode-tagged data generates empirical DFA report cards for every customer product]] — transforms commodity assembly into data-driven design consultancy
- [[the DFA feedback engine creates a virtuous data flywheel where each assembled product improves diagnostic accuracy for future products]] — more products → better patterns → more valuable feedback → more customers → more data
- [[the DFA feedback engine is an analytical layer on existing mode-tagged data infrastructure not a new data system]] — zero incremental infrastructure cost; the mode dial pipeline already produces the data
- [[72 percent of manual factory tasks are unmonitored and the mode dial architecture eliminates this blind spot by instrumenting all three modes equally]] — Somana captures manual assembly data that 72% of factories never collect
- [[30 cycles per mode per step provides sufficient data for detecting a 20 percent mode gap with reasonable statistical confidence]] — ~450 total cycles for a 5-station 3-mode line; achievable in weeks of production
- [[DFA feedback credibility requires production volume that new customer relationships lack]] — the service is most valuable for first-batch customers who have the least data

## Mini Factory — Assembly Engineering
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — snap-fits vs inserts for 3D-printed boarding box enclosures
- [[3D printers that produce enclosures should simultaneously produce assembly fixtures and test jigs at near-zero marginal tooling cost]] — print farm does double duty: enclosures + tooling
- [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target]] — pogo-pin fixtures with parallel testing cut test time 69%

## Mini Factory — What to Manufacture
- [[customization inverts the small-scale penalty into a premium when each product is inherently unique]] — small scale is a strategic feature when products are inherently batch-of-one
- [[digital inventory replaces physical warehousing making on-demand micro-manufacturing economically rational at any scale]] — 3D-printed enclosures and fixture files are digital inventory
- [[in micro-manufacturing the competitive moat is software not hardware because design automation and scheduling determine who can serve high-mix demand profitably]] — the software IS the manufacturing advantage
- [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups]] — the mini factory's capability is also a service product

Primary product: **Boarding boxes** — 3D-printed branded enclosures + PCBAs + SBCs (RPi, Jetson) + peripherals, assembled and tested.
Product portfolio for demos: IoT environmental sensors (BOM $15–40, 50–70% margins), STEM electronics kits (BOM $15–30, 55–70% margins), configurable take-home items for visitors. Each changeover during a tour demonstrates the platform's flexibility.

---

Agent Notes:
- 2026-02-26: Added DFA Feedback Engine section (9 learnings). The single most accretive addition to the plan: the mode dial's per-step Manual-vs-Autonomous performance gap IS a quantified DFA score. Every assembled product generates an empirical DFA report card, transforming contract box-build from commodity assembly into a design intelligence service with a compounding data flywheel. The Assisted mode adds a diagnostic dimension traditional DFA lacks: information problems vs. physics problems. Zero incremental infrastructure cost — same mode-tagged pipeline, new analytical layer.
- 2026-02-25: Added Mode Dial Tensions section with e-stop and dashboard tension learnings. These tensions surface practical design constraints on the mode dial: e-stop adds per-station hardware wiring complexity proportional to agent count, and the dashboard tension determines how to sequence investment in real-time vs. historical analytics infrastructure.
- 2026-02-25: Added Mode Dial Software Architecture section (7 learnings). The mode dial concept now has engineering depth: HAL pattern, SDA validation, per-station independence, mode-tagged data, metrics pipeline stack, dashboard latency, and OEE decomposition across modes. The "how to build it" is now specified alongside the "why to build it."
- 2026-02-23: Added Line Layout & Demo Architecture section (U-cells, changeover-vs-balance, mode dial). The mode dial learning is the single most important architectural insight for the demo factory — it reframes the factory from "showcase that runs" to "evidence engine that proves software value through live A/B comparison." Updated Production Line Design context phrases to reflect mode dial connections.
- 2026-02-20 (update): Pivoted from SMT assembly to final assembly + 3D-printed enclosures. SMT knowledge remains relevant as understanding of customer world (factory floor equipment integration) but not as Somana's own manufacturing process. PCBAs arrive pre-assembled from contract manufacturers.
- 2026-02-20 (earlier): SMT assembly initially identified as strongest candidate from three-source convergence. Preserved in the graph as validated market knowledge.

---

Topics:
- [[index]]
