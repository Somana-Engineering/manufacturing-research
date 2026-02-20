---
description: "General to Site to Master to Control recipes cascade down while Procedure to Phase hierarchies define execution — phases are the only executable steps"
type: learning
source: "The Complete Software Architecture of a Modern Manufacturing Shopfloor"
domain_area: software
created: 2026-02-19
---

# ISA-88 recipe management separates what to make from how to make it through four recipe types cascading from R&D to execution

ISA-88 (S88) is the batch control standard that separates WHAT to make (recipes/procedures) from HOW to make it (equipment/control modules). The physical model hierarchy runs Enterprise - Site - Area - Process Cell - Unit - Equipment Module - Control Module. Four recipe types cascade: General (site-independent, from R&D) - Site - Master (approved for production) - Control (actual execution copy). The procedural model decomposes into Procedure - Unit Procedure - Operation - Phase, where phases are the only executable steps.

This standard is critical in pharma (electronic batch records under 21 CFR Part 11), food and beverage, and specialty chemicals. The WHAT/HOW separation is an elegant design principle: the same recipe can execute on different equipment configurations, and equipment changes don't require recipe rewrites. For Somana, understanding ISA-88 matters because recipe-driven changeovers are where [[adaptive control responds to condition combinations too complex for human-authored rules|adaptive control]] can add the most value — optimizing process parameters within the recipe's constraints rather than replacing the recipe framework.

## Relevant Notes
- [[adaptive control responds to condition combinations too complex for human-authored rules]] — adaptive control optimizes within recipe constraints; the WHAT/HOW separation means AI can push parameters without violating the recipe specification
- [[MES bridges the shopfloor to the enterprise through eleven core functions spanning scheduling to genealogy]]
- [[digital inventory replaces physical warehousing making on-demand micro-manufacturing economically rational at any scale]] — for process manufacturing (cosmetics, chemicals, food), recipes ARE the digital inventory: parametric files instantiated on demand
- [[customization inverts the small-scale penalty into a premium when each product is inherently unique]] — recipe parameterization enables batch-of-one: each customer order becomes a unique Control Recipe derived from a Master Recipe
- [[OTED extends SMED toward sub-100-second automated changeovers where AI and robotics could eliminate changeover as a human process entirely]] — recipe changeover is software-defined setup: switching Control Recipes is OTED for process manufacturing
- [[AI generative design makes BOM a continuous optimization target rather than a fixed input for a given product design]] — AI could generate or optimize recipes, not just follow them: the General→Site→Master→Control cascade could be AI-driven

---

Topics: [[manufacturing software]]
