---
description: "SME Chapter 19's break-even method compares fixed + variable costs across machine alternatives to find the batch size where automation pays off"
type: learning
source: "Manufacturing Processes & Materials (SME Ch 19)"
domain_area: economics
created: 2026-02-19
---

# equal cost point analysis determines the crossover batch size where automated production becomes cheaper than manual methods

Equal cost point analysis from SME's process economics chapter compares total cost curves for different manufacturing approaches: manual operation (low fixed cost, high variable cost per unit) versus automated alternatives (high fixed cost, low variable cost per unit). The crossover point — the batch size where the two curves intersect — determines when automation becomes economically justified.

Below the crossover point, manual methods win because their lower fixed costs aren't amortized over enough units. Above it, automated methods win because their lower per-unit variable costs compound across volume. The analysis extends to comparing multiple machine alternatives (e.g., engine lathe vs turret lathe vs CNC), each with different fixed-variable cost profiles.

This framework directly addresses Somana's mini factory decisions: what level of automation makes sense at what production volume? The answer isn't "automate everything" or "keep it manual" — it's a function of expected batch sizes, setup costs, and unit variable costs for each station. Where [[AI shrinks the fixed cost base making operating leverage less punishing for underutilization and less rewarding for high utilization|AI shrinks the fixed cost base]], it shifts the crossover point leftward — making automation economical at smaller batch sizes than traditional analysis would suggest. And where [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent|SMED reduces setup costs]], it shifts the crossover point for batch-vs-flow decisions.

The framework also connects to [[factory costs divide into fixed variable and semi-variable categories that determine operating leverage|operating leverage]]: automated stations have higher operating leverage (more fixed cost), making them more sensitive to utilization. The equal cost point tells you exactly where that tradeoff tips.

The [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment|progressive automation roadmap]] applies equal cost point thinking at each phase: Phase 1–2 (manual, 1–200 units/month, $500–$10K investment) vs Phase 3–4 (semi-auto to cobot, 200–2,000 units/month, $5–$150K) vs Phase 5 (multi-station, 2,000+ units/month, $200–$500K). Each threshold represents a crossover point where the next level of automation becomes cheaper than the current one.

## Relevant Notes
- [[factory costs divide into fixed variable and semi-variable categories that determine operating leverage]]
- [[AI shrinks the fixed cost base making operating leverage less punishing for underutilization and less rewarding for high utilization]]
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]]
- [[setup cost and optimal batch size are mathematically linked through EOQ so reducing changeover time enables smaller batches and leaner inventory]]
- [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories]]
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — each automation phase has its own crossover point
- [[desktop-scale industrial automation now costs 15 to 50K and exposes the same data protocols as full-scale factory equipment]] — the $15–50K range defines the fixed cost for desktop automation tiers
- [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target]] — testing crosses the automation payoff threshold first because it dominates production time

---

Topics: [[manufacturing mechanics]], [[factory economics]]
