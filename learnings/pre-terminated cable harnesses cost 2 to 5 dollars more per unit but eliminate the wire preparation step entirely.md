---
description: "At mini-factory volumes, pre-terminated harnesses remove 20-40 seconds of wire prep time and collapse the 9-step box build to 8 steps — the clear sourcing choice for low-volume assembly"
type: learning
source: "Boarding box BOM specification research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# pre-terminated cable harnesses cost 2 to 5 dollars more per unit but eliminate the wire preparation step entirely

Pre-terminated cable harnesses (sourced from Tier 1 standard or Tier 2 custom) add $2-5 per unit to BOM cost but eliminate Step 3 (Wire and Cable Preparation) from the [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins|9-step box build sequence]] entirely:

**Without pre-termination (Step 3 present):**
- Cut wire to length: 3-5s per conductor
- Strip insulation: 2-3s per end
- Crimp terminals: 4-6s per connection
- Label wire ends: 2-3s per wire
- Total for 6-conductor harness: 66-102 seconds
- Error modes: incorrect strip depth, cold crimps, wrong wire gauge, mislabeling

**With pre-termination (Step 3 eliminated):**
- Zero wire prep time — harness arrives ready to connect
- Connection reduces to [[keyed connectors trade pennies in BOM cost for seconds of cycle time and near-elimination of polarity assembly errors|keyed connector insertion]]: 3-4s per connection
- Error modes: virtually none (harness is factory-tested)

At mini-factory volumes (8 units/day), the $2-5 BOM increase costs $16-40/day. The labor saved (20-40 seconds per unit × 8 units = 160-320 seconds/day) is modest in absolute terms, but eliminating an entire assembly step has cascading benefits:
- Removes a station's worth of tooling (wire strippers, crimp tools, solder station)
- Eliminates a training requirement (crimping skill)
- Removes a defect category entirely (crimping defects)
- Simplifies the mode comparison by removing a step where Manual and Autonomous are roughly equivalent (wire prep is manual in all modes)

Combined with keyed connectors, pre-terminated harnesses transform the electrical integration station from a multi-tool, multi-skill step into a simple plug-and-verify step.

---

Relevant Notes:
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — pre-termination eliminates Step 3 entirely
- [[keyed connectors trade pennies in BOM cost for seconds of cycle time and near-elimination of polarity assembly errors]] — keyed + pre-terminated is the maximum DFA optimization for wiring
- [[BOM cost versus assembly cycle time creates a spectrum of trade-offs where every dollar spent on poka-yoke components saves seconds on the line]] — $2-5 for 20-40s savings plus a whole step eliminated
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — harness specification is a design-time decision with production impact
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — one fewer step simplifies changeover tooling

---

Topics: [[somana product]], [[manufacturing mechanics]]
