---
description: "RTY is the product of first-pass yields at each step — a 5-step process at 95% FPY per step yields only 77% RTY"
type: parameter
source: "a16z — A Primer on Factory Economics"
status: conventional
domain_area: economics
created: 2026-02-19
---

# rolled throughput yield compounds across process steps making each step's quality critical

Key yield metrics cascade through the production process: incoming quality yield, first-pass yield per step, rolled throughput yield, final test yield, and field return rate. Each hand-off is a point where defects can compound.

RTY = FPY_1 x FPY_2 x ... x FPY_n

This multiplicative compounding makes each individual step's quality critical. A seemingly good 95% first-pass yield per step across just 5 steps gives only 77% rolled throughput yield (0.95^5 = 0.774). At 10 steps, the same per-step yield drops RTY to 60%. The implication is that factories with more process steps face exponentially steeper quality challenges, and improving the worst-performing step delivers outsized gains on the overall RTY.

## Relevant Notes

- [[yield improvements create compound cost advantages that materially affect competitive positioning]]
- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]]
- [[the manufacturing metrics hierarchy cascades from financial outcomes to root cause indicators across four levels]]
- [[manufacturing line parameters form a connected system where takt time is the only external input and five leverage points determine where intervention cascades most]] — FPY at the worst station is leverage point 4; improving the worst step has outsized impact because RTY is multiplicative

---

Topics: [[factory economics]]
