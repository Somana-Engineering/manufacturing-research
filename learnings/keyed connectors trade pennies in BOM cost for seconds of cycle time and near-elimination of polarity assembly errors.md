---
description: "JST-XH/Molex Micro-Fit keyed connectors add $0.15-0.50 per connection but reduce connection time from 8-12s to 3-4s, saving 30-48s per unit at 6 connections and virtually eliminating electrical defects"
type: learning
source: "Boarding box BOM specification research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# keyed connectors trade pennies in BOM cost for seconds of cycle time and near-elimination of polarity assembly errors

Keyed connectors (JST-XH, Molex Micro-Fit, or similar) add $0.15-0.50 per connection to BOM but fundamentally change the assembly economics:

| Metric | Bare wire termination | Keyed connector |
|--------|----------------------|-----------------|
| Time per connection | 8-12 seconds (strip, crimp, insert) | 3-4 seconds (align, push until click) |
| Error rate | Polarity reversals, cold crimps | Near-zero (physical keying prevents mismating) |
| Mode sensitivity | High (Manual variability in crimping) | Low (push-click is mode-insensitive) |
| Tool requirement | Wire stripper, crimp tool | None (finger-press) |

At 6 internal connections per boarding box, keyed connectors save 30-48 seconds per unit and virtually eliminate electrical assembly defects. The BOM cost increase is $0.90-3.00 — negligible against the labor savings even at mini-factory volumes.

This is a textbook [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization|DFA decision]]: the connector choice is made in CAD (PCB layout specifies the footprint) but the cost impact cascades through production. Keyed connectors also collapse the [[the assisted mode differentiates information problems from physical design problems in assembly steps|information-vs-physics diagnostic]]: with bare wire, the operator needs to know polarity, gauge, and routing (information problem); with keyed connectors, the problem is eliminated entirely — no information needed, no physics challenge.

The mode gap implication: keyed connectors reduce the Manual-vs-Autonomous mode gap for the electrical integration step because the task is already simplified to near-robotic difficulty. This is actually desirable — it means the DFA feedback engine identifies other steps as the high-gap targets, focusing redesign attention where it matters most.

---

Relevant Notes:
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — connector selection is a DFA decision with quantified impact
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — keyed connectors reduce the mode gap for electrical integration
- [[the assisted mode differentiates information problems from physical design problems in assembly steps]] — keyed connectors eliminate both information and physics problems simultaneously
- [[BOM cost versus assembly cycle time creates a spectrum of trade-offs where every dollar spent on poka-yoke components saves seconds on the line]] — keyed connectors are the clearest example of this trade-off
- [[pre-terminated cable harnesses cost 2 to 5 dollars more per unit but eliminate the wire preparation step entirely]] — pre-terminated harnesses with keyed connectors eliminate wire prep AND simplify connection

---

Topics: [[somana product]], [[manufacturing mechanics]]
