---
description: "Traditional DFA outputs 'reduce part count' — mode gap DFA outputs 'Step 4 cable routing has 340% mode gap, add routing channel to reduce to <50%' with per-step, per-difficulty-type specificity"
type: learning
source: "DFA feedback engine research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# mode gap data enables specific actionable redesign recommendations where traditional DFA only provides generic guidelines

Traditional DFA analysis outputs a single index number and general guidelines: "reduce part count," "design for top-down assembly," "minimize reorientation." These are useful principles but unactionable for a specific product — they don't tell a designer WHICH parts to change or WHAT change to make. The mode-gap-based DFA feedback engine generates specific, actionable recommendations because it knows which steps and what type of difficulty.

The recommendation patterns, derived from [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty|mode gap analysis]] combined with [[the assisted mode differentiates information problems from physical design problems in assembly steps|Assisted mode diagnostics]]:

- **High mode gap + high defect variance:** "Part X requires redesign for clearer orientation — add asymmetric keying feature"
- **High mode gap + high time variance in Manual:** "Insertion of Part Y has excessive clearance sensitivity — increase tolerances or add lead-in chamfer"
- **Step where Assisted closes gap:** "Assembly guidance for Step Z is sufficient — no product redesign needed, add visual work instruction or poka-yoke"
- **Step where Assisted fails to close gap:** "Step Z has physical access constraint — consider single-direction assembly approach or snap-fit replacement for screw fastening"
- **Cumulative analysis:** "Product achieves 62% empirical DFA efficiency. Steps 4, 7, and 11 account for 78% of the total mode gap. Addressing these three steps would raise empirical DFA efficiency to approximately 85%"

The specificity comes from three data dimensions traditional DFA lacks: the mode gap magnitude (how hard), the Assisted diagnostic (what kind of hard), and the defect correlation (where quality suffers). Together, these generate recommendations that a product designer can act on in the next CAD revision.

For [[contract box-build becomes a design intelligence service when mode-tagged data generates empirical DFA report cards for every customer product|contract box-build customers]], this specificity is the value differentiator. A generic "improve your DFA" is a brochure. "Steps 4, 7, and 11 cost you 40% of your assembly time — here's what to change" is a consulting engagement worth paying for.

---

Relevant Notes:
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — the mode gap provides the magnitude; this learning adds the specificity
- [[the assisted mode differentiates information problems from physical design problems in assembly steps]] — the Assisted diagnostic determines the recommendation TYPE
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — mode gap recommendations make DFA's 10x impact actionable at the step level
- [[contract box-build becomes a design intelligence service when mode-tagged data generates empirical DFA report cards for every customer product]] — specific recommendations are what make the service worth paying for
- [[the DFA feedback engine creates a virtuous data flywheel where each assembled product improves diagnostic accuracy for future products]] — which recommendations actually work feeds back into the model

---

Topics: [[somana product]], [[manufacturing mechanics]]
