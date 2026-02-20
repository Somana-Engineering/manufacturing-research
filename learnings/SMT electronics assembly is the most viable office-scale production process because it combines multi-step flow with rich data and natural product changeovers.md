---
description: "Paste→place→reflow→inspect fits on two desks, runs on 120V, generates vision and process data, and different board designs create natural changeovers"
type: learning
source: "Product research — office-scale capabilities, market analysis, AI testbed analysis"
status: validated
domain_area: mechanics
created: 2026-02-20
---

# SMT electronics assembly is the most viable office-scale production process because it combines multi-step flow with rich data and natural product changeovers

Three independent research angles — office-scale capability, market viability, and AI testbed value — all converge on the same answer: surface-mount electronics assembly is the strongest candidate for Somana's in-office production line.

The process chain is genuinely multi-step: stencil printing → pick-and-place → reflow soldering → automated optical inspection. Each station has distinct process parameters and failure modes. A Neoden YY1 pick-and-place ($9K range) handles 4,000 components per hour with ±0.02mm accuracy, and one practitioner describes the production cadence: the machine "cranks out each board in just shy of three minutes — just enough time to feed a board into the reflow oven, inspect the last board, and paste the next board." The entire line fits on two desks running standard 120V power.

What makes this exceptional as an AI testbed: over 50% of SMT defects originate at the solder paste printing stage, meaning [[cross-step dependency modeling circumvents the multiplicative yield penalty by optimizing the entire process chain as a system|upstream quality dominates downstream results]] in a measurable, modelable way. Different board designs sharing the same line create natural changeover scenarios that exercise [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent|SMED principles]]. Dual-camera vision systems and AOI stations generate rich image data for [[in-process quality monitoring transforms final inspection from discovery to confirmation|in-process quality monitoring]]. A benchtop AOI like the Manncorp Sherlock 300FA fully inspects a 253-component board in 10 seconds and networks for statistical process control.

The sensor data landscape is strong: pick-and-place machines expose vacuum detection and vision alignment data, reflow ovens log thermal profiles, and AOI systems generate per-component pass/fail with defect classification. This maps directly to [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously|continuous process monitoring]] across the full line.

Commercially, small-batch PCB assembly has proven demand — Tempo Automation built a business on average orders of ~10 units with 3-day delivery, and specialty electronics margins reach 20-40% with IP differentiation.

## Relevant Notes

- [[cross-step dependency modeling circumvents the multiplicative yield penalty by optimizing the entire process chain as a system]] — SMT is the concrete case: paste printing quality propagates through placement and reflow
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]] — board design changeovers exercise this at office scale
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]] — AOI after reflow is the quality gate
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]] — vision + thermal + vacuum data across all stations
- [[rolled throughput yield compounds across process steps making each step's quality critical]] — 4-step SMT line makes RTY visible and manageable
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — vision inspection at line speed requires edge inference
- [[equal cost point analysis determines the crossover batch size where automated production becomes cheaper than manual methods]] — at ~$15K total equipment cost, the crossover batch size is low
- [[adaptive control responds to condition combinations too complex for human-authored rules]] — paste printing and reflow thermal profiles are prime targets for adaptive control since material batch variation and ambient conditions affect outcomes
- [[customization inverts the small-scale penalty into a premium when each product is inherently unique]] — specialty electronics with different board designs per order is a customization niche where SMT assembly naturally fits
- [[in micro-manufacturing the competitive moat is software not hardware because design automation and scheduling determine who can serve high-mix demand profitably]] — Tempo Automation proved the software-driven small-batch PCB assembly model at 20-40% margins

---

Topics: [[somana product]], [[manufacturing mechanics]]
