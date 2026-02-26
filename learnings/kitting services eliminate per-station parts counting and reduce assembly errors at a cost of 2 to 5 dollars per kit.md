---
description: "A Tier 2 kitting provider pre-sorts one complete BOM into a bag per unit, transforming a high-error-rate counting task into a verification task — break-even evaluation needed at ~20 units/week"
type: learning
source: "Boarding box BOM specification research — web search synthesis"
domain_area: economics
created: 2026-02-26
---

# kitting services eliminate per-station parts counting and reduce assembly errors at a cost of 2 to 5 dollars per kit

At mini-factory volumes, per-station parts counting and sorting is a significant source of both time waste and assembly errors. A Tier 2 kitting provider pre-sorts one complete BOM worth of components into a labeled bag per unit, transforming the assembly operator's task from "count and verify 25-45 parts from bulk bins" to "verify one pre-sorted kit against a checklist."

The economics at $2-5 per kit:
- Eliminates 2-5 minutes of parts counting per unit in Station 1 (Prep & Incoming Inspection)
- Reduces missing-component and wrong-component errors (industry kitting error rates run 3-8% from bulk bins; pre-kitted bags virtually eliminate this)
- Frees Station 1 to focus on inspection and heat-set insert installation — the higher-value, mode-differentiable tasks
- Total cost at 8 units/day: $16-40/day, or $320-800/month

The break-even consideration: outsourced kitting makes sense when the time saved (2-5 min × 8 units = 16-40 min/day) multiplied by labor cost exceeds the kitting fee. At mini-factory volumes this is marginal — the real value is error reduction and cognitive load reduction at Station 1, which improves both quality and mode-comparison data quality.

The kitting service also simplifies [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume|product changeover]]: switching from boarding box to IoT sensor kit means swapping which pre-kitted bag goes to Station 1, not reconfiguring parts bins. This is SMED applied to material staging.

---

Relevant Notes:
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — kitting enables faster changeover by pre-staging per-product BOM kits
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — kitting simplifies the first step (preparation) of the layered sequence
- [[electronic component sourcing follows a three-tier distributor model where each tier trades authenticity guarantees for cost savings]] — Tier 2 providers offer kitting as a value-added service
- [[a boarding box BOM divides into six functional categories with fasteners as highest piece count but lowest cost]] — fasteners (10-20 pieces) are the primary beneficiary of pre-kitting
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]] — pre-kitting is external work preparation applied to material staging

---

Topics: [[somana product]], [[factory economics]]
