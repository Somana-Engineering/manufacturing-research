---
description: "The bridge between materials science and process engineering — you can't deep-draw brittle material, can't economically machine soft aluminum with CBN, can't weld high-carbon steel easily"
type: learning
source: "MechaniCalc engineering materials reference; Manufacturing Processes & Materials (SME)"
domain_area: mechanics
created: 2026-02-19
---

# material properties create hard constraints on manufacturing process selection where ductility limits formability hardness dictates cutting forces and melting point governs joining

Material properties are not abstract specifications — they determine which manufacturing processes are physically feasible and economically viable. The key property-process mappings:

**Ductility → formability.** The strain-hardening exponent n (from σ = Kεⁿ) predicts whether deep drawing, bending, and forging are feasible. Low-carbon steel (<0.30% C) with 25% elongation draws easily; high-carbon steel (>0.70% C) with 5% elongation cracks. This is why AISI 1020 (32 ksi yield, 25% elongation) makes sheet metal while AISI 1045 cold-worked (80 ksi yield, 5% elongation) makes cutting tools.

**Hardness → cutting forces and tool selection.** Workpiece hardness determines which [[cutting tool materials trade hardness for toughness across a spectrum from HSS to PCD with no universal optimum for all conditions|tool materials]] are viable: CBN excels above 55 HRC, PCD dissolves on ferrous alloys, ceramics fracture with coolant. The tool-workpiece combination constrains achievable speeds, feeds, and surface quality.

**Thermal properties → joining methods.** High carbon content and certain alloying elements reduce weldability. Austenitic stainless (AISI 304: 30 ksi yield, excellent corrosion resistance) welds easily; martensitic stainless (AISI 410: 80 ksi yield) is difficult to weld. Precipitation-hardened 17-4PH reaches 170 ksi yield but requires careful post-weld heat treatment. Melting point, thermal conductivity, and coefficient of expansion all constrain welding parameters.

This matters for Somana because [[AI transforms incoming material variation from a yield problem into a process control input|AI can transform material variation from a yield problem into a process control input]] — but only within the hard physics constraints that material properties impose. AI can optimize within the feasible process window; it cannot expand the window itself. A batch of higher-hardness incoming material might require different feed rates and tool wear monitoring, but it cannot be deep-drawn if its ductility is insufficient. Understanding which constraints are soft (optimizable by AI) versus hard (imposed by physics) is essential for defining where adaptive control adds value.

## Relevant Notes
- [[cutting tool materials trade hardness for toughness across a spectrum from HSS to PCD with no universal optimum for all conditions]]
- [[AI transforms incoming material variation from a yield problem into a process control input]]
- [[adaptive control responds to condition combinations too complex for human-authored rules]]
- [[the Merchant equation connects cutting geometry to forces and power providing the physics foundation for process parameter optimization]]
- [[yield improvements create compound cost advantages that materially affect competitive positioning]]

---

Topics: [[manufacturing mechanics]], [[AI disruption of factory economics]]
