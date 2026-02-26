---
description: "Carrier boards with integrated standoffs and pre-routed power prevent bent GPIO pins from misaligned SBC insertion — a BOM-cost-for-assembly-quality trade that favors the carrier at all volumes"
type: learning
source: "Boarding box BOM specification research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# SBC carrier boards add 5 to 15 dollars BOM cost but reduce station 2 cycle time by 15 to 20 seconds and eliminate the most common assembly error

A custom carrier board for the SBC (Raspberry Pi, Jetson, or similar) adds $5-15 to BOM cost but provides three production benefits:

**1. Cycle time reduction (15-20 seconds saved at Station 2):**
- Integrated standoffs eliminate separate standoff mounting (4 screws saved)
- Pre-routed power eliminates a cable connection
- Alignment features guide the SBC to correct position on first attempt

**2. Error elimination:**
- Bent GPIO pins from misaligned SBC insertion are the most common assembly error at Station 2
- Carrier board alignment features make pin misalignment physically impossible (poka-yoke)
- No rework required for what was previously a 2-5% defect rate step

**3. Test integration:**
- Carrier board can include test points for [[quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection|intermediate inspection]] (powered via carrier, test pads accessible)
- Potentially enables testing the SBC while still in Station 2, reducing Station 4 workload

The economic analysis: at 8 units/day, $5-15 BOM increase costs $40-120/day. The 15-20 seconds saved plus error elimination justifies this at any volume because a single bent-pin rework costs more than the carrier board premium for several units. This is a [[BOM cost versus assembly cycle time creates a spectrum of trade-offs where every dollar spent on poka-yoke components saves seconds on the line|poka-yoke BOM trade-off]] that unambiguously favors the carrier board.

The carrier board also connects to the [[the assisted mode differentiates information problems from physical design problems in assembly steps|information-vs-physics diagnostic]]: without a carrier board, SBC alignment is a physics problem (manual dexterity); with a carrier board, the physics problem is designed away — the step becomes trivially easy in all modes, reducing the mode gap.

---

Relevant Notes:
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — carrier board design is a DFA decision with quantified cycle time impact
- [[the SBC is the dominant BOM cost driver and product margin depends heavily on compute module selection]] — carrier board is an incremental cost on top of the dominant BOM item
- [[BOM cost versus assembly cycle time creates a spectrum of trade-offs where every dollar spent on poka-yoke components saves seconds on the line]] — carrier board is the clearest error-elimination trade-off
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — carrier board reduces the Station 2 mode gap
- [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds]] — Station 2 at 106s benefits from 15-20s reduction

---

Topics: [[somana product]], [[manufacturing mechanics]]
