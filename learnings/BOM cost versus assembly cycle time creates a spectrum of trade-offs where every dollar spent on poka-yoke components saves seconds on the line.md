---
description: "Keyed connectors ($0.15-0.50 saves 5-8s each), pre-terminated harnesses ($2-5 saves 20-40s), carrier boards ($5-15 saves 15-20s), snap-fits (free saves 32-48s) — at mini-factory volumes the answer is almost always yes"
type: tension
source: "Boarding box BOM specification research — synthesis"
domain_area: economics
created: 2026-02-26
---

# BOM cost versus assembly cycle time creates a spectrum of trade-offs where every dollar spent on poka-yoke components saves seconds on the line

Every DFA-informed BOM decision trades component cost for assembly efficiency:

| BOM Decision | Cost Increase | Time Saved | Error Reduction |
|-------------|---------------|------------|-----------------|
| [[keyed connectors trade pennies in BOM cost for seconds of cycle time and near-elimination of polarity assembly errors|Keyed connectors]] | $0.15-0.50/connection | 5-8s each | Eliminates polarity errors |
| [[pre-terminated cable harnesses cost 2 to 5 dollars more per unit but eliminate the wire preparation step entirely|Pre-terminated harnesses]] | $2-5/unit | 20-40s | Eliminates crimping defects |
| [[SBC carrier boards add 5 to 15 dollars BOM cost but reduce station 2 cycle time by 15 to 20 seconds and eliminate the most common assembly error|SBC carrier board]] | $5-15/unit | 15-20s | Eliminates bent GPIO pins |
| [[heat-set insert count is a critical DFA lever where reducing inserts from 8-12 to 4 saves 32 to 48 seconds in manual mode|Snap-fits replacing inserts]] | $0 (design change) | 32-48s | N/A (removes step) |

**The tension:** At what volume does the cumulative BOM cost increase justify the cycle time savings? At mini-factory volumes (8 units/day), labor cost is high relative to BOM cost, so the answer is almost always "spend the pennies." The total BOM increase for all four interventions is roughly $7-25 per unit, saving 72-116 seconds of manual assembly time — at any reasonable labor rate, this pays for itself immediately.

But the tension deepens when considering the mode dial: every poka-yoke component that simplifies assembly also **reduces the mode gap**. A step simplified to push-until-click has near-zero mode gap — it's equally easy in Manual, Assisted, and Autonomous. This is great for production efficiency but reduces the dramatic contrast that makes the demo compelling.

**Resolution:** The demo's most compelling mode gap data will come from the steps that CANNOT be simplified through BOM changes — the inherently difficult physical assembly steps (dexterous cable routing, precision alignment, multi-step testing sequences). Simplify everything that can be simplified; the remaining mode gap is the irreducible difficulty that only automation addresses. This makes the mode gap signal purer and the DFA feedback more actionable.

---

Relevant Notes:
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — each trade-off is a DFA decision made in design
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — labor economics at low volume favor spending BOM pennies
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — poka-yoke reduces the mode gap by design
- [[the assisted mode differentiates information problems from physical design problems in assembly steps]] — poka-yoke eliminates information problems; remaining gap is physics

---

Topics: [[somana product]], [[factory economics]]
