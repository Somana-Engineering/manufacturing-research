---
description: "If Assisted mode closes the gap with Autonomous, the difficulty is informational (operator needs guidance). If Assisted barely helps, the difficulty is physical (geometry needs redesign). Traditional DFA conflates these two failure modes."
type: learning
source: "DFA feedback engine research — web search synthesis"
domain_area: software
created: 2026-02-26
---

# the assisted mode differentiates information problems from physical design problems in assembly steps

Traditional DFA scores each assembly step for handling difficulty and insertion difficulty, but conflates two fundamentally different failure modes: the operator doesn't know what to do (information problem) versus the product geometry resists the action (physics problem). A step that scores badly for "orientation difficulty" could be either — the operator can't tell which way the part goes, or the part physically resists insertion. The prescribed fix is different: information problems need better instructions, physics problems need product redesign.

The three-mode architecture creates a diagnostic triage that separates these:

| Pattern | Manual | Assisted | Autonomous | Diagnosis |
|---------|--------|----------|------------|-----------|
| Easy step | Fast | Same | Same | Design is assembly-friendly |
| Information gap | Slow | Fast | Fast | Operator needs guidance, not redesign |
| Physical difficulty | Slow | Slow | Fast | Geometry/access problem requiring redesign |
| Robot struggle | Fast | Fast | Slow | Step requires dexterity robots lack |
| Universal difficulty | Slow | Slow | Slow | Fundamental design problem |

The "information gap" vs "physical difficulty" distinction is the key insight. In Assisted mode, the operator receives real-time AI guidance — [[generative AI copilots for manufacturing use RAG over internal documentation rather than fine-tuning to reduce hallucination|copilot-style recommendations]] — while retaining physical control. If this guidance closes the gap with Autonomous performance, the original difficulty was informational: the operator simply needed to know what to do. If Assisted barely helps, the problem is physical: no amount of guidance fixes a part that's hard to insert.

This has direct implications for redesign recommendations. Information problems don't need product redesign — they need visual cues, poka-yoke features, or augmented work instructions. Physics problems need actual geometry changes: simplified insertion directions, wider clearances, snap-fits replacing screws. The [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty|mode gap]] quantifies how much difficulty exists; the Assisted mode diagnostic reveals what KIND of difficulty it is.

The "robot struggle" pattern is equally valuable: steps where Manual outperforms Autonomous reveal tasks requiring human dexterity that current automation cannot replicate. These are the steps to keep manual even in a fully progressive automation roadmap — or the product redesign targets if full automation is the goal.

---

Relevant Notes:
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — the mode gap measures HOW MUCH difficulty; the Assisted diagnostic reveals WHAT KIND
- [[generative AI copilots for manufacturing use RAG over internal documentation rather than fine-tuning to reduce hallucination]] — copilots ARE the Assisted mode mechanism; their effectiveness per step diagnoses the problem type
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — the three modes generate a diagnostic dimension that no two-mode comparison can
- [[mode gap data enables specific actionable redesign recommendations where traditional DFA only provides generic guidelines]] — the diagnosis type determines the recommendation type
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — the "robot struggle" pattern identifies steps to keep manual even in later automation phases

---

Topics: [[somana product]], [[manufacturing mechanics]]
