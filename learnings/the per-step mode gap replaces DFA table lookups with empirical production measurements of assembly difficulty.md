---
description: "The Boothroyd-Dewhurst DFA Index uses 1970s-80s lab-derived time tables; mode gap = (Manual CT - Autonomous CT) / Autonomous CT quantifies design difficulty from production reality, not estimation"
type: learning
source: "DFA feedback engine research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty

The traditional Boothroyd-Dewhurst DFA Index = (Nmin x 2.93s) / Estimated Assembly Time, where Nmin is the theoretical minimum number of parts and 2.93s is the ideal per-part assembly time derived from decades of controlled laboratory studies. The index ranges from 0 to 100%, with higher values indicating more assembly-efficient designs. The DFA software asks designers a set of questions about each part — how it's grasped, oriented, inserted, and fastened — and looks up time penalties from empirical tables.

The critical limitation: these are *design-time* estimates based on table lookups, not *production-time* measurements from real assembly lines with real operators and real product variation. Research comparing DFA-estimated times to actual measured assembly times found "various deviations between the measured and calculated values for individual steps" — processes like riveting and bolt threading were systematically over- or under-estimated.

The mode gap formula per step — (Manual cycle time - Autonomous cycle time) / Autonomous cycle time — is an empirical replacement. A mode gap of 0.2 (20%) indicates the step is relatively simple: the human is only slightly slower than the robot. A mode gap of 3.0 (300%) is a DFA red flag: the step is extremely dependent on human dexterity, meaning the product geometry is fighting the assembly process. Where the Boothroyd-Dewhurst tables predict difficulty from part characteristics, the mode gap *measures* it from production reality.

This transforms [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization|DFA from a design-time exercise into a production-time measurement]]. The traditional DFA score tells designers "this part will be hard to assemble." The mode gap tells them "this part IS hard to assemble, and here's exactly how hard, measured on your actual production line."

The quality dimension extends beyond time: where defect rates spike in Manual mode but not Autonomous mode, the step has a quality-robustness problem — likely tight tolerances or ambiguous assembly orientation that humans err on but robots handle consistently. This identifies DFA issues that pure time-based analysis misses.

---

Relevant Notes:
- [[design for assembly decisions in CAD have 10x more impact on production cost than any downstream process optimization]] — the mode gap makes DFA's 10x impact empirically measurable rather than theoretically estimated
- [[the assisted mode differentiates information problems from physical design problems in assembly steps]] — the three-mode diagnostic triage adds a dimension Boothroyd-Dewhurst lacks entirely
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — mode tagging is what enables per-step mode gap computation
- [[OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant]] — Performance (cycle time) mode gap at the step level IS the DFA signal
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — the mode dial generates DFA evidence as a byproduct

---

Topics: [[somana product]], [[manufacturing mechanics]]
