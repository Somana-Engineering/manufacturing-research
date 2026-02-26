---
description: "The 9-step sequence (prep → component test → wire prep → mechanical → electrical → intermediate inspection → software → final test → packaging) creates natural inspection gates at every layer transition"
type: learning
source: "Boarding box assembly process parameters research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins

Box build assembly (systems integration) divides into mechanical assembly and electrical assembly, following a bottom-up layered approach. The standard 9-step sequence:

1. **Project preparation** — design files, BOM, schematics, test data, wire lists, assembly drawings
2. **Component and sub-assembly testing** — individual components validated against specifications before installation
3. **Wire and cable preparation** — cut, strip, crimp, label wire ends; prepare cable harnesses
4. **Mechanical assembly** — chassis, brackets, fasteners mounted to enclosure; control panels installed
5. **Electrical integration** — PCBs mounted and connected; power supplies, transformers, wire harnesses routed
6. **Intermediate inspection** — each layer inspected for labels, wire routing, torque specifications, continuity
7. **Software installation** — application and validation of control software
8. **Final system testing** — comprehensive functional, electrical, and performance testing
9. **Packaging and labeling** — shock-absorbent materials, static-resistant bags, moisture barriers

The critical insight for Somana's 5-station U-cell: each layer transition is a natural inspection gate where [[in-process quality monitoring transforms final inspection from discovery to confirmation|AI vision inspection]] adds value. The layered structure maps naturally to stations — mechanical assembly at one station, electrical integration at the next, with vision verification between each. This transforms the inspection philosophy from end-of-line discovery to layer-by-layer confirmation.

The sequence also reveals that wire preparation is a distinct pre-staging step that could run in parallel with mechanical assembly, improving line balance. For the boarding box product (3D-printed enclosure + PCBA + SBC + peripherals), the mechanical and electrical phases collapse into a simpler flow since there are no heavy chassis or complex wire harnesses — but the layered inspection principle still applies. With [[pre-terminated cable harnesses cost 2 to 5 dollars more per unit but eliminate the wire preparation step entirely|pre-terminated harnesses]], Step 3 is eliminated entirely, collapsing the 9-step process to 8 steps.

The BOM specification research adds concrete station-level time breakdowns for the 5-station mapping: Station 1 (Prep & Inspect, 90-160s), Station 2 (Mechanical, 93-119s), Station 3 (Electrical, 49-79s), Station 4 (Software & Test, 75-145s), Station 5 (Package, 46-72s). Total: [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds|353-575 seconds (464s midpoint)]] in Manual mode. Station 1 is the bottleneck, driven by heat-set insert installation.

---

Relevant Notes:
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]] — each layer transition is a natural inspection point
- [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target]] — testing at steps 2, 6, and 8 represents the dominant time investment
- [[U-shaped assembly cells provide 2-3x more task combinations than straight lines by letting operators start and finish at the same point]] — the 5-station U-cell maps to this layered sequence
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — each assembly step in the sequence can be individually measured for mode gap
- [[quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection]] — the testing hierarchy mirrors the assembly layers
- [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds]] — concrete time breakdowns for the 5-station mapping
- [[pre-terminated cable harnesses cost 2 to 5 dollars more per unit but eliminate the wire preparation step entirely]] — eliminates Step 3 entirely, collapsing to 8 steps
- [[a boarding box BOM divides into six functional categories with fasteners as highest piece count but lowest cost]] — BOM categories map to assembly layers

---

Topics: [[somana product]], [[manufacturing mechanics]]
