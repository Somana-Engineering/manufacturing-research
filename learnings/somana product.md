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
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — start manual ($2K), automate testing ($10K), add cobot ($150K), each phase self-funding
- [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration]] — the factory IS the product demo

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
- 2026-02-20 (update): Pivoted from SMT assembly to final assembly + 3D-printed enclosures. SMT knowledge remains relevant as understanding of customer world (factory floor equipment integration) but not as Somana's own manufacturing process. PCBAs arrive pre-assembled from contract manufacturers.
- 2026-02-20 (earlier): SMT assembly initially identified as strongest candidate from three-source convergence. Preserved in the graph as validated market knowledge.

---

Topics:
- [[index]]
