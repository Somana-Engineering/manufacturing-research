---
description: "Tier 3 broker-sourced parts lack certificates of conformance and traceable lot/date codes required under IPC-A-630 — only acceptable for prototype/development when authorized channels have extended lead times"
type: learning
source: "Boarding box BOM specification research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# IPC-A-630 traceability requirements make broker-sourced electronic components a compliance risk for production

IPC-A-630 compliance requires specific traceability at the component level:
- Every electronic component needs a traceable lot/date code
- Certificates of conformance must be available for audit
- Wire gauge and insulation type must match design specification from qualified suppliers
- ESD-sensitive components must be identifiable in BOM with handling requirements flagged
- Fastener torque specifications must be documented (M2.5: 0.2-0.4 Nm for plastic bosses; M3: 0.3-0.6 Nm)

**Tier 1 authorized distributors** (DigiKey, Mouser, Arrow) provide all of this automatically — it's inherent in the authorized supply chain. **Tier 3 brokers** cannot guarantee any of it. Components from brokers may be authentic but lack the documentation trail that IPC-A-630 demands. This makes broker-sourced parts a compliance risk even when the parts themselves are functional.

The practical impact for Somana: the BOM database must distinguish between "assembled" and "ship-with" items (a power supply ships in the box but is not assembled into the enclosure — different traceability requirements). Every assembled electronic component must trace back to an authorized source. This constrains the sourcing strategy to [[electronic component sourcing follows a three-tier distributor model where each tier trades authenticity guarantees for cost savings|Tier 1 for electronics, direct for commodities]].

For [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups|contract box-build customers]], IPC-A-630 compliance with documented traceability is a significant differentiator. Most small-batch assemblers in the 10-500 unit range don't maintain this level of documentation — Somana's compliance becomes a selling point rather than just a cost.

The torque specification data (M2.5: 0.2-0.4 Nm, M3: 0.3-0.6 Nm) also feeds directly into the [[torque specifications for fasteners provide an ideal measurable parameter for demonstrating mode dial differences across manual assisted and autonomous assembly|mode dial demo]]: these are the specific values the torque monitoring system validates across modes.

---

Relevant Notes:
- [[IPC-A-630 is the only IPC standard dedicated to box build assembly defining three product classes for manufacture inspection and testing of electronic enclosures]] — the parent standard that drives these traceability requirements
- [[electronic component sourcing follows a three-tier distributor model where each tier trades authenticity guarantees for cost savings]] — Tier 3 fails IPC traceability; Tier 1 inherently passes
- [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups]] — IPC compliance differentiates in the underserved market
- [[torque specifications for fasteners provide an ideal measurable parameter for demonstrating mode dial differences across manual assisted and autonomous assembly]] — IPC-specified torque values (M2.5: 0.2-0.4 Nm) are the target for mode comparison
- [[mechanical hardware and consumables should be sourced direct from manufacturers at 50 to 70 percent savings over distributors because authenticity risk is negligible]] — the IPC boundary cleanly separates which categories need traceability

---

Topics: [[somana product]], [[manufacturing mechanics]]
