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

## Mini Factory — Boarding Box Process Parameters
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — 9-step sequence with natural inspection gates at every layer transition; maps to 5-station U-cell
- [[system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent]] — the compounding formula makes mode dial a reliability mechanism, not just a demo feature
- [[IPC-A-630 is the only IPC standard dedicated to box build assembly defining three product classes for manufacture inspection and testing of electronic enclosures]] — industry-standard quality framework gives the mini factory credibility
- [[quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection]] — six test levels each demonstrable in Manual/Assisted/Autonomous modes
- [[environmental controls for electronics assembly require 18-25C and 40-55 percent RH with ESD prevention as the primary humidity driver]] — achievable with office HVAC plus basic ESD supplements
- [[torque specifications for fasteners provide an ideal measurable parameter for demonstrating mode dial differences across manual assisted and autonomous assembly]] — the most tangible per-station mode comparison metric
- [[capacitor failures account for nearly 30 percent of PCB failures making incoming PCBA inspection critical for box build yield]] — incoming inspection as the first quality gate
- [[single-source manufacturing prevents component compatibility failures that arise when subsystems are sourced from different suppliers]] — single integrator is a concrete value proposition for contract customers
- [[the compounding OEE formula is powerful demo content showing visitors how small per-station improvements cascade into large system gains]] — the "moment of truth" in the demo: one mode switch visibly lifts system OEE
- [[the 97-9 percent per-station OEE reliability requirement creates tension with mode-switching experimentation because every mode transition risks a temporary OEE dip]] — tension: reliability demand vs. switching freedom
- [[rolled throughput yield compounds across process steps making each step's quality critical]] — RTY compounds alongside system OEE; both impose exponential penalties on the 5-station line
- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]] — per-mode OEE decomposition reveals which component (availability, performance, quality) drives the mode gap at each station

## Mini Factory — BOM & Sourcing
- [[a boarding box BOM divides into six functional categories with fasteners as highest piece count but lowest cost]] — 25-45 line items, $68-164 per unit; six categories map to assembly layers
- [[the SBC is the dominant BOM cost driver and product margin depends heavily on compute module selection]] — SBC is 30-45% of BOM ($35-80); compute choice defines the product
- [[electronic component sourcing follows a three-tier distributor model where each tier trades authenticity guarantees for cost savings]] — Tier 1 for electronics, direct for hardware, in-house for enclosures
- [[kitting services eliminate per-station parts counting and reduce assembly errors at a cost of 2 to 5 dollars per kit]] — pre-kitted BOM bags simplify Station 1 and accelerate changeover
- [[mechanical hardware and consumables should be sourced direct from manufacturers at 50 to 70 percent savings over distributors because authenticity risk is negligible]] — commodity items bypass the tier model
- [[IPC-A-630 traceability requirements make broker-sourced electronic components a compliance risk for production]] — Tier 3 fails IPC compliance; traceability constrains sourcing

## Mini Factory — DFA-Driven BOM Optimization
- [[keyed connectors trade pennies in BOM cost for seconds of cycle time and near-elimination of polarity assembly errors]] — $0.15-0.50 per connection saves 5-8s and eliminates polarity errors
- [[pre-terminated cable harnesses cost 2 to 5 dollars more per unit but eliminate the wire preparation step entirely]] — $2-5 eliminates 20-40s and collapses the 9-step process to 8 steps
- [[heat-set insert count is a critical DFA lever where reducing inserts from 8-12 to 4 saves 32 to 48 seconds in manual mode]] — snap-fits for closure, inserts only for PCB mounting
- [[SBC carrier boards add 5 to 15 dollars BOM cost but reduce station 2 cycle time by 15 to 20 seconds and eliminate the most common assembly error]] — poka-yoke against bent GPIO pins
- [[BOM cost versus assembly cycle time creates a spectrum of trade-offs where every dollar spent on poka-yoke components saves seconds on the line]] — tension: $7-25 BOM increase saves 72-116s but reduces mode gap
- [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds]] — bottom-up cycle time derivation with 74% line balance efficiency
- [[the automation mode gap varies by station with software and testing showing the highest gap at 59 percent and mechanical assembly the lowest at 29 percent]] — per-station mode gap quantifies where automation adds most value

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
- 2026-02-26: Added BOM & Sourcing section (6 entries) and DFA-Driven BOM Optimization section (7 entries). The BOM is now specified: six functional categories, three-tier sourcing strategy, $68-164 total with SBC as dominant cost driver. DFA-driven BOM choices quantified: keyed connectors ($0.15-0.50 saves 5-8s), pre-terminated harnesses ($2-5 saves 20-40s), carrier boards ($5-15 saves 15-20s), snap-fits (free saves 32-48s). Per-station mode gap projections: testing 59% (highest), mechanical 29% (lowest), 43% average. Manual line total: 353-575s (464s midpoint). New tension: BOM cost vs assembly cycle time.
- 2026-02-26: Added Boarding Box Process Parameters section (10 entries: 9 learnings + 1 tension). The boarding box assembly sequence is now specified: 9-step layered build with inspection gates, system OEE compounding formula (97.9% per station for 90% system), IPC-A-630 quality framework, 6-level test hierarchy, environmental controls, torque as the ideal demo metric, incoming PCBA inspection, single-source integration value prop, and compounding OEE as demo content. One new tension: OEE reliability vs. mode-switching experimentation.
- 2026-02-26: Added DFA Feedback Engine section (9 learnings). The single most accretive addition to the plan: the mode dial's per-step Manual-vs-Autonomous performance gap IS a quantified DFA score. Every assembled product generates an empirical DFA report card, transforming contract box-build from commodity assembly into a design intelligence service with a compounding data flywheel. The Assisted mode adds a diagnostic dimension traditional DFA lacks: information problems vs. physics problems. Zero incremental infrastructure cost — same mode-tagged pipeline, new analytical layer.
- 2026-02-25: Added Mode Dial Tensions section with e-stop and dashboard tension learnings. These tensions surface practical design constraints on the mode dial: e-stop adds per-station hardware wiring complexity proportional to agent count, and the dashboard tension determines how to sequence investment in real-time vs. historical analytics infrastructure.
- 2026-02-25: Added Mode Dial Software Architecture section (7 learnings). The mode dial concept now has engineering depth: HAL pattern, SDA validation, per-station independence, mode-tagged data, metrics pipeline stack, dashboard latency, and OEE decomposition across modes. The "how to build it" is now specified alongside the "why to build it."
- 2026-02-23: Added Line Layout & Demo Architecture section (U-cells, changeover-vs-balance, mode dial). The mode dial learning is the single most important architectural insight for the demo factory — it reframes the factory from "showcase that runs" to "evidence engine that proves software value through live A/B comparison." Updated Production Line Design context phrases to reflect mode dial connections.
- 2026-02-20 (update): Pivoted from SMT assembly to final assembly + 3D-printed enclosures. SMT knowledge remains relevant as understanding of customer world (factory floor equipment integration) but not as Somana's own manufacturing process. PCBAs arrive pre-assembled from contract manufacturers.
- 2026-02-20 (earlier): SMT assembly initially identified as strongest candidate from three-source convergence. Preserved in the graph as validated market knowledge.

---

Topics:
- [[index]]
