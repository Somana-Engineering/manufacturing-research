---
description: "The service is most valuable when it is least statistically credible (first batch) and most credible when the customer has already committed to volume — echoing the real-time vs historical analytics tension in DFA-specific context"
type: tension
source: "DFA feedback engine research — web search synthesis"
domain_area: economics
created: 2026-02-26
---

# DFA feedback credibility requires production volume that new customer relationships lack

For the mode gap to generate credible redesign recommendations, [[30 cycles per mode per step provides sufficient data for detecting a 20 percent mode gap with reasonable statistical confidence|sufficient cycles per mode per step]] are needed. But a new customer's first batch may be small — 10 to 50 units, which is the sweet spot of the [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups|underserved market]].

The tension: the DFA feedback service is most valuable when it is least statistically credible. A first-time customer with 10 units desperately needs to know which assembly steps to redesign before committing to 500 units. But 10 units per mode per step gives only anecdotal evidence, not statistically significant mode gaps. Conversely, by the time a customer has run 500 units through the line, the DFA recommendations are highly credible — but the customer has already committed to the current design for that production run.

This echoes the [[real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor|dashboard tension]] but in a DFA-specific context: early evidence is experientially compelling but statistically weak; late evidence is statistically rigorous but less actionable.

Possible resolutions:
- **Cross-product priors.** Use the [[the DFA feedback engine creates a virtuous data flywheel where each assembled product improves diagnostic accuracy for future products|accumulated pattern library]] from previous products to generate Bayesian priors. "Based on 200 similar M3 screw insertions across 40 products, this step is likely to have a 180% mode gap" — even before the first unit is assembled.
- **Tiered confidence labeling.** Present DFA recommendations with explicit confidence levels: "High confidence (>100 cycles): Steps 4, 7" vs "Preliminary signal (10 cycles): Steps 2, 11." Transparent about what the data supports.
- **Free DFA report with first batch.** Absorb the cost of running all three modes on the first small batch as a customer acquisition tool. The DFA report's preliminary findings hook the customer into iterating and ordering subsequent batches.

---

Relevant Notes:
- [[30 cycles per mode per step provides sufficient data for detecting a 20 percent mode gap with reasonable statistical confidence]] — the statistical threshold that defines the credibility boundary
- [[real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor]] — the broader tension this parallels
- [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups]] — the market with small batches where the tension is sharpest
- [[the DFA feedback engine creates a virtuous data flywheel where each assembled product improves diagnostic accuracy for future products]] — cross-product priors are the long-term resolution
- [[contract box-build becomes a design intelligence service when mode-tagged data generates empirical DFA report cards for every customer product]] — the service model this tension constrains

---

Topics: [[somana product]], [[factory economics]]
