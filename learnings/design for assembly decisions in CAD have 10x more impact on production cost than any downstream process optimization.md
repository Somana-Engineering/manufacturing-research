---
description: "Boothroyd-Dewhurst DFA analysis reduces an electronics enclosure to 3 theoretical minimum parts — snap-fits eliminate fasteners and tools while heat-set brass inserts enable serviceability"
type: learning
source: "Product research — progressive assembly operations"
domain_area: mechanics
created: 2026-02-20
---

# design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization

The Boothroyd-Dewhurst Design for Assembly methodology asks three questions of every component: Does it move relative to other parts? Must it be a different material? Must it be separate for assembly or disassembly? A practitioner analysis of an electronics enclosure (circuit board + housing + cover with screws) found the theoretical minimum was 3 parts — housing, board, and cover. The screws were eliminable. The DFA Index (ideal assembly time ÷ actual assembly time) quantifies how far a design sits from its theoretical optimum.

For 3D-printed enclosures specifically, three fastening methods trade off against each other. Snap-fits are fastest (tool-free, single-motion assembly) with minimum 1mm thickness throughout snap elements, ±0.2mm tolerance, and 5–10° draft angles — PA12 nylon (MJF/SLS) offers the best fatigue resistance. Heat-set brass inserts (M3 standard for electronics) require minimum 2× inner diameter of surrounding wall material — they add BOM cost but enable robust screw fastening for field-serviceable products like the boarding box. The DFA tradeoff is clear: snap-fits minimize assembly time, inserts maximize serviceability.

This learning has profound implications for the [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment|automation roadmap]]: a product designed for easy assembly (snap-fits, single assembly direction, keyed connectors) makes every subsequent automation phase cheaper. A product designed for human dexterity (cable routing through channels, multi-directional screw access) puts a ceiling on robot-assisted assembly regardless of the robot's capability. Design the product for the cobot you'll have in Phase 4, even when Phase 1 is manual.

## Relevant Notes
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — DFA decisions determine the ceiling on automated assembly
- [[3D printers that produce enclosures should simultaneously produce assembly fixtures and test jigs at near-zero marginal tooling cost]] — fixtures implement DFA decisions; good DFA reduces fixture complexity
- [[customization inverts the small-scale penalty into a premium when each product is inherently unique]] — DFA for 3D-printed enclosures enables per-customer variants without assembly penalty
- [[ISA-88 recipe management separates what to make from how to make it through four recipe types cascading from R&D to execution]] — DFA decisions define the recipe structure: which assembly steps vary per variant, which are fixed

---

Topics: [[somana product]], [[manufacturing mechanics]]
