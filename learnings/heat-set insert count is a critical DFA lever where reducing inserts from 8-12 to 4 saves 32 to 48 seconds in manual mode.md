---
description: "Reserve heat-set inserts only for PCB mounting where serviceability demands them; use snap-fits for enclosure closure — the mode gap for inserts is high (8-12s manual vs 3-4s autonomous per insert)"
type: learning
source: "Boarding box BOM specification research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# heat-set insert count is a critical DFA lever where reducing inserts from 8-12 to 4 saves 32 to 48 seconds in manual mode

Heat-set threaded inserts (M2.5/M3 brass knurled) are the primary cycle time driver at Station 1 (Prep & Incoming Inspection), consuming 32-72 seconds for 4-6 inserts in Manual mode. The DFA intervention:

**Current design:** 8-12 heat-set inserts total — 4 for PCB mounting, 4 for SBC mounting, 0-4 for enclosure closure.

**Optimized design:** 4 heat-set inserts (PCB + SBC mounting only) + snap-fits for enclosure closure.

| Configuration | Manual time | Autonomous time | Mode gap |
|--------------|------------|-----------------|----------|
| 8-12 inserts | 64-144s | 24-48s | 63% |
| 4 inserts + snap-fits | 32-48s + 2-3s | 12-16s + 2-3s | 56% |
| Savings | 32-48s | 10-29s | — |

The insert-vs-snap-fit decision embodies the [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization|DFA principle]]: a geometry change in CAD (replacing four screw bosses with snap-fit features) eliminates 32-48 seconds of manual assembly time — a larger effect than any downstream process optimization could achieve.

However, snap-fits trade serviceability for speed. IPC-A-630 may require the product to be non-destructively openable for field service, which snap-fits can satisfy (if designed with release features) but which permanently-engaged snap-fits cannot. The design choice is: snap-fits with release tabs (openable but slightly more complex to print) vs. heat-set inserts (always openable but slower to assemble).

The mode gap perspective: heat-set inserts have a high mode gap (8-12s manual vs 3-4s autonomous per insert) because the autonomous heated press is faster and more consistent. Snap-fits have near-zero mode gap (2-3s regardless of mode). Reducing inserts therefore reduces the total mode gap, which is good for production efficiency but reduces the dramatic demonstration effect. This is a design-for-demo tension.

---

Relevant Notes:
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — insert count reduction is a textbook DFA intervention
- [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds]] — heat-set inserts drive the Station 1 bottleneck
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — insert installation is a high-gap step that DFA can target
- [[IPC-A-630 is the only IPC standard dedicated to box build assembly defining three product classes for manufacture inspection and testing of electronic enclosures]] — IPC class may constrain the snap-fit vs insert decision
- [[torque specifications for fasteners provide an ideal measurable parameter for demonstrating mode dial differences across manual assisted and autonomous assembly]] — inserts eventually receive screws that are torque-verified

---

Topics: [[somana product]], [[manufacturing mechanics]]
