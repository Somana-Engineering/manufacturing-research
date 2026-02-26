---
description: "Tier 1 (DigiKey/Mouser: guaranteed authentic, no MOQ, 5-15% premium), Tier 2 (specialist: kitting services), Tier 3 (brokers: counterfeit risk, avoid for production)"
type: learning
source: "Boarding box BOM specification research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# electronic component sourcing follows a three-tier distributor model where each tier trades authenticity guarantees for cost savings

Electronic component sourcing operates on a well-defined three-tier model:

**Tier 1 — Authorized Franchise Distributors (DigiKey, Mouser, Arrow, Newark):**
- Guaranteed authentic components with manufacturer warranty
- Full traceability and certificates of conformance
- Same-day or next-day shipping from deep inventory (DigiKey stocks 13M+ SKUs)
- No minimum order quantities on most parts
- Price premium of 5-15% over direct, offset by zero lead time

**Tier 2 — Regional/Specialist Distributors:**
- Smaller catalog but deeper vertical expertise
- May offer [[kitting services eliminate per-station parts counting and reduce assembly errors at a cost of 2 to 5 dollars per kit|kitting services]] (pre-counted BOM kits per unit)
- Useful for specialty connectors, custom cable assemblies

**Tier 3 — Brokers and Open Market:**
- No manufacturer authorization — components from secondary/surplus channels
- Higher counterfeit risk
- [[IPC-A-630 traceability requirements make broker-sourced electronic components a compliance risk for production|IPC-A-630 traceability requirements make broker-sourced parts a compliance risk]]
- Only acceptable for prototype/development when authorized channels have extended lead times

**Hybrid strategy for Somana's mini factory:**
- Electronic components (PCBA, SBC, connectors): Tier 1 — authenticity and traceability non-negotiable
- [[mechanical hardware and consumables should be sourced direct from manufacturers at 50 to 70 percent savings over distributors because authenticity risk is negligible|Mechanical hardware]]: Direct manufacturer/McMaster-Carr — commodity items, 50-70% savings
- Enclosures: In-house 3D printing — [[digital inventory replaces physical warehousing making on-demand micro-manufacturing economically rational at any scale|digital inventory]], zero sourcing lead time
- Cable assemblies: Tier 1 (standard) or Tier 2 (custom pre-terminated)
- Packaging: Direct manufacturer/Uline — commodity, volume pricing

This hybrid model optimizes the authenticity-vs-cost trade-off per category rather than applying a blanket sourcing strategy.

---

Relevant Notes:
- [[single-source manufacturing prevents component compatibility failures that arise when subsystems are sourced from different suppliers]] — single integrator validates cross-supplier compatibility
- [[IPC-A-630 is the only IPC standard dedicated to box build assembly defining three product classes for manufacture inspection and testing of electronic enclosures]] — IPC compliance constrains sourcing to traceable channels
- [[IPC-A-630 traceability requirements make broker-sourced electronic components a compliance risk for production]] — Tier 3 fails IPC compliance
- [[digital inventory replaces physical warehousing making on-demand micro-manufacturing economically rational at any scale]] — enclosure sourcing is digital, not physical
- [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups]] — Tier 1 no-MOQ sourcing removes a barrier for small-batch customers

---

Topics: [[somana product]], [[factory economics]]
