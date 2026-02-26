---
description: "Based on standard t-test power analysis — for a 5-station line with 3 modes, ~450 total assembly cycles achieves credible per-step mode gap detection, reachable in a few days of production"
type: parameter
source: "DFA feedback engine research — web search synthesis"
domain_area: software
created: 2026-02-26
---

# 30 cycles per mode per step provides sufficient data for detecting a 20 percent mode gap with reasonable statistical confidence

For the mode gap to generate credible DFA recommendations, sufficient cycles per mode per step are needed. Based on standard t-test power analysis for comparing two means: 30+ cycles per mode per step provides sufficient data for detecting a 20%+ mode gap with reasonable confidence (p < 0.05, power > 0.80).

For a 5-station line with 3 modes, this requires approximately 30 cycles × 3 modes × 5 stations = 450 total assembly cycles. At 8 units/day (the mini factory's target throughput with 60-minute takt), this is approximately 56 days — roughly 2 months of production. At higher throughput rates or with dedicated mode-comparison runs, the timeline compresses.

The 30-cycle heuristic creates a concrete design constraint for the DFA service: a new customer's first batch of 10 units generates only 10 data points per mode per step — anecdotally interesting but not statistically credible. The [[DFA feedback credibility requires production volume that new customer relationships lack|tension between service value and statistical credibility]] is sharpest for first-time customers with small batches.

Practical mitigation: aggregate per-step statistics across multiple stations when the same assembly operation occurs at more than one station. Pool data from similar steps across different products (e.g., "M3 screw insertion" statistics from 50 different products). Use Bayesian priors from the cross-product pattern library to reduce the sample size needed for credible recommendations on new products. These approaches reduce the 30-cycle requirement for specific recommendations while maintaining statistical rigor.

This parameter also partially answers the open question in the [[manufacturing software]] topic map about how many production cycles per mode are needed before the performance difference is statistically significant for sales evidence.

---

Relevant Notes:
- [[real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor]] — the 30-cycle heuristic defines when historical analytics become credible
- [[DFA feedback credibility requires production volume that new customer relationships lack]] — the tension this parameter quantifies
- [[the DFA feedback engine creates a virtuous data flywheel where each assembled product improves diagnostic accuracy for future products]] — cross-product data pooling reduces the per-product sample size requirement
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — mode-tagged per-step data at this granularity enables the statistical tests

---

Topics: [[manufacturing software]], [[somana product]]
