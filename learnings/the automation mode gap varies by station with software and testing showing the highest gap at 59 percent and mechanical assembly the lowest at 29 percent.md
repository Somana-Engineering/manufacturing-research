---
description: "Station 4 (Software & Test) mode gap 59%, Station 1 (Prep) 44%, Station 3 (Electrical) 38%, Station 5 (Package) 41%, Station 2 (Mechanical) 29% — total line compresses 43% from 464s Manual to 265s Autonomous"
type: parameter
source: "Boarding box BOM specification research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# the automation mode gap varies by station with software and testing showing the highest gap at 59 percent and mechanical assembly the lowest at 29 percent

Mode-projected cycle times across the 5-station U-cell reveal where automation adds most value:

| Station | Manual | Assisted | Autonomous | Mode Gap |
|---------|--------|----------|------------|----------|
| 1 — Prep & Inspect | 125s | 95s | 70s | 44% |
| 2 — Mechanical | 106s | 85s | 75s | 29% |
| 3 — Electrical | 64s | 50s | 40s | 38% |
| 4 — Software & Test | 110s | 65s | 45s | **59%** |
| 5 — Package | 59s | 45s | 35s | 41% |
| **Total** | **464s** | **340s** | **265s** | **43% avg** |

**Station 4 (Software & Testing) shows the highest mode gap** (59%) because automated test fixtures run at machine speed versus human click-through speed. This confirms [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target|testing as the highest-ROI automation target]] — the mode gap quantifies exactly how much value automation adds here.

**Station 2 (Mechanical Assembly) shows the lowest mode gap** (29%) because dexterous manipulation (seating boards on standoffs, routing cables, driving screws at specific angles) improves less under automation. This is a [[the assisted mode differentiates information problems from physical design problems in assembly steps|physics problem, not an information problem]] — the difficulty is in physical manipulation, not in knowing what to do.

**The Assisted mode is revealing:** Station 4 drops from 110s to 65s in Assisted (41% improvement) because guided test sequencing eliminates operator hesitation — pure information problem. Station 2 drops from 106s to only 85s in Assisted (20% improvement) because knowing where to place the board doesn't make placing it faster — physics problem.

These projections provide the [[30 cycles per mode per step provides sufficient data for detecting a 20 percent mode gap with reasonable statistical confidence|baseline hypotheses]] that actual production data will confirm or refine. The per-station mode gap is the core DFA feedback metric.

---

Relevant Notes:
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — these projections are the a priori estimates; production data provides empirical reality
- [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target]] — Station 4's 59% mode gap confirms testing as highest-ROI
- [[the assisted mode differentiates information problems from physical design problems in assembly steps]] — Assisted-to-Manual gap distinguishes information from physics problems per station
- [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds]] — Manual baseline for the mode comparison
- [[30 cycles per mode per step provides sufficient data for detecting a 20 percent mode gap with reasonable statistical confidence]] — each station needs 30 cycles per mode for statistical significance
- [[mode gap data enables specific actionable redesign recommendations where traditional DFA only provides generic guidelines]] — per-station mode gap points to specific DFA interventions

---

Topics: [[somana product]], [[manufacturing mechanics]]
