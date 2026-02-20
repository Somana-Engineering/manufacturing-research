---
description: "Siemens Industrial Copilot generates PLC code and translates error codes — most implementations connect LLMs to manuals and CMMS data via RAG, not fine-tuning"
type: learning
source: "The Complete Software Architecture of a Modern Manufacturing Shopfloor"
domain_area: software
created: 2026-02-19
---

# generative AI copilots for manufacturing use RAG over internal documentation rather than fine-tuning to reduce hallucination

Generative AI copilots represent the 2025 inflection point in manufacturing software. Siemens Industrial Copilot generates SCL code for PLCs at thyssenkrupp and translates machine error codes to natural language at Siemens' Erlangen factory. Rockwell's Plex Copilot, Tulip Copilot, and SymphonyAI's specialized manufacturing LLMs enable natural language querying of production data.

Most implementations use Retrieval-Augmented Generation (RAG) — connecting base LLMs to internal manuals, CMMS data, and quality records rather than fine-tuning. This addresses both hallucination risk and data privacy. The distinction matters for Somana's positioning: copilots are assistive AI (helping humans make decisions), while [[adaptive control responds to condition combinations too complex for human-authored rules|adaptive control]] is autonomous AI (making decisions directly). Both are valuable but serve different functions in the manufacturing stack. Copilots may be the easier entry point — lower risk, faster ROI, less resistance from factory personnel — before graduating to autonomous control.

## Relevant Notes
- [[adaptive control responds to condition combinations too complex for human-authored rules]] — copilots are assistive AI; adaptive control is autonomous AI — different levels of the same stack
- [[AI-driven overhead automation democratizes enterprise-grade quality systems for small-batch manufacturers]]
- [[nine software layers span from embedded PLC firmware to cloud AI platforms with the ISA-95 pyramid as persistent organizational backbone]]
- [[ISA-88 recipe management separates what to make from how to make it through four recipe types cascading from R&D to execution]] — copilots could translate between recipe levels, generate control recipes from master recipes, or assist operators in recipe troubleshooting
- [[the manufacturing planning cascade from S&OP to MRP to finite scheduling could be collapsed by AI doing real-time planning across all horizons]] — copilots as first step toward planning collapse: assist human planners before replacing them
- [[institutional design debt accumulates when systems optimize for constraints that technology has already eliminated]] — copilots are the bridge technology that lets manufacturers extract value from existing design-debt-laden systems while transitioning toward autonomous AI
- [[only 189 of millions of factories have achieved full digital transformation while 70 percent remain stuck in pilot purgatory]] — copilots may be the on-ramp that breaks pilot purgatory: lower risk, faster ROI, less organizational resistance

---

Topics: [[manufacturing software]]
