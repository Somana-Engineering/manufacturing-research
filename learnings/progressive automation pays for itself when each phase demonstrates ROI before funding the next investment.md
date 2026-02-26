---
description: "Treat the automation roadmap like startup funding rounds — manual with ESD at $2K, semi-auto testing at $10K, powered tools at $20K, first cobot at $150K, each phase's savings financing the next"
type: pattern
source: "Product research — progressive assembly operations"
domain_area: economics
created: 2026-02-20
---

# progressive automation pays for itself when each phase demonstrates ROI before funding the next investment

The cautionary tales of GM's $45 billion automation debacle and Tesla's "Alien Dreadnought" prove the same lesson: automating before you understand your process destroys value. The successful path is a deliberate crawl gated by volume and learning, where each phase's returns fund the next.

The progression follows volume thresholds. Phase 1 (1–50 units/month, $500–$2K): manual assembly with professional ESD protection, 5S organization, and 3D-printed fixtures — this phase builds process knowledge. Every step gets timed, every defect root-caused. Phase 2 (50–200 units/month, $2–$10K): semi-automated functional testing with pogo-pin fixtures and parallel test capability — testing is the first target because it consumes [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target|35–40% of production time]]. Phase 3 (200–500 units/month, $5–$20K): torque-controlled screwdrivers, pick-to-light bins, simple conveyor between stations. Phase 4 (500–2,000 units/month, $75–$150K): first collaborative robot on the most repetitive, consistent task — typically screw driving or board insertion. Phase 5 (2,000+ units/month, $200–$500K): multi-station cobot line.

The self-funding logic mirrors [[equal cost point analysis determines the crossover batch size where automated production becomes cheaper than manual methods|equal cost point analysis]]: each phase's investment is justified only when volume crosses the threshold where its savings exceed its cost. Front-loading short-payback projects (testing, fixtures) absorbs the impact if later investments underperform. What stays manual longest: cable routing, wire harness connections, and non-standard variant operations — these require complex spatial reasoning that cobots handle poorly at low volumes.

The mode dial insight reframes progressive automation from a one-way investment journey into a set of deployable configurations. Phase 1 (manual) IS Manual mode. Phase 2 (semi-auto testing) IS Assisted mode. Phase 4 (cobot) IS Autonomous mode. A factory that has reached Phase 4 doesn't discard Phases 1-3 — it can [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value|toggle between all modes]] to demonstrate the value each phase adds. This turns the automation roadmap from a historical narrative ("here's what we invested") into a live comparison ("here's what each investment does, right now, on the same product").

## Relevant Notes
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — each automation phase IS a deployable mode, not just a funding stage
- [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target]]
- [[equal cost point analysis determines the crossover batch size where automated production becomes cheaper than manual methods]]
- [[3D printers that produce enclosures should simultaneously produce assembly fixtures and test jigs at near-zero marginal tooling cost]]
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]]
- [[desktop-scale industrial automation now costs 15 to 50K and exposes the same data protocols as full-scale factory equipment]]
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — invest in changeover speed over balance optimization at low volumes
- [[AI shrinks the fixed cost base making operating leverage less punishing for underutilization and less rewarding for high utilization]] — reduced operating leverage is what makes phased investment tolerable: underutilization in early phases carries less penalty
- [[AI compresses factory ramp timelines because AI capability deploys instantly while human skill takes months to develop]] — progressive automation IS compressed ramp: produce from day one while AI layers in
- [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups]] — the assembly capability can generate revenue from Phase 1 as a service product

---

Topics: [[somana product]], [[factory economics]]
