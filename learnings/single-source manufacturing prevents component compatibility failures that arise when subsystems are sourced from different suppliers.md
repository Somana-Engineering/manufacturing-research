---
description: "A rotated connector from Supplier B causes fitting failures with Supplier A's enclosure — single-source assembly eliminates inter-supplier tolerance stack-up and compatibility gaps"
type: learning
source: "Boarding box assembly process parameters research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# single-source manufacturing prevents component compatibility failures that arise when subsystems are sourced from different suppliers

When box build assembly sources sub-assemblies from multiple suppliers, component compatibility failures emerge from tolerance stack-up between independently manufactured parts. A classic example: a connector orientation rotated 180° by one supplier causes fitting failures with another supplier's enclosure cutouts. These failures are invisible to individual supplier QC — each part meets its own specification — and only manifest during integration.

Single-source manufacturing (assembling all subsystems in-house or through a single integrator) eliminates this failure mode by ensuring all components are validated together during the [[quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection|sub-assembly testing phase]]. For Somana's boarding box: the 3D-printed enclosure, the PCBA mounting, and the cable routing are all integrated in the same U-cell, so tolerance compatibility is verified at assembly time rather than discovered at integration.

This connects to lean cell design principles: machines and workstations positioned in close proximity eliminate not just transportation waste but also the information gaps between distant processes. When the person (or cobot) who mounts the PCBA also routes the cables, they see fit issues immediately. When these steps happen in different buildings at different suppliers, compatibility failures travel days before discovery.

For the [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups|contract box-build service]], single-source assembly is a concrete value proposition: customers who currently coordinate between a PCBA house, a cable assembler, and a mechanical integrator can consolidate to one partner who catches compatibility issues at assembly rather than in the field.

---

Relevant Notes:
- [[contract box-build assembly for 10 to 500 units is massively underserved because tooling costs and minimum order quantities block hardware startups]] — single-source integration is a key differentiator for small-batch customers
- [[quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection]] — sub-assembly testing catches compatibility issues before they compound
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — layered assembly with inspection gates catches compatibility at each layer
- [[U-shaped assembly cells provide 2-3x more task combinations than straight lines by letting operators start and finish at the same point]] — proximity in U-cells enables immediate compatibility feedback

---

Topics: [[somana product]], [[manufacturing mechanics]]
