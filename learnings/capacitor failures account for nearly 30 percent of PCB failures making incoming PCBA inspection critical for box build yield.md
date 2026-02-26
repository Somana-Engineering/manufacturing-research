---
description: "Capacitors are the dominant failure mode in consumer electronics PCBs — sub-assembly testing before enclosure integration prevents the costliest yield loss in box build"
type: learning
source: "Boarding box assembly process parameters research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# capacitor failures account for nearly 30 percent of PCB failures making incoming PCBA inspection critical for box build yield

In consumer electronics, capacitor failures represent nearly 30% of all PCB failures. This makes incoming PCBA inspection — testing boards before they enter the box build assembly sequence — disproportionately valuable. A failed capacitor discovered after the board is mounted, connected, and buried under the next assembly layer costs far more to rework than one caught at incoming inspection.

Soldering defects constitute another major rework category:
- **Cold solder joints** — insufficient heat during soldering
- **Solder bridges** — incorrect connections between adjacent pads
- **Insufficient solder volume** — weak mechanical and electrical connection
- **Tombstoning** — SMT components lifting on one end, breaking electrical connections

These defect categories define what AI vision inspection should look for at each layer transition in the [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins|layered assembly sequence]]. For Somana's boarding box, the PCBAs arrive pre-assembled from contract manufacturers, so incoming inspection is the first quality gate: verify solder quality, component presence, and capacitor health before committing assembly labor.

The improvement potential is significant: one case study showed an 8% tombstoning defect rate reduced to <0.5% through precision printing and controlled cooling — an 80% rework time reduction. While this applies to the upstream PCBA manufacturer, it demonstrates the magnitude of quality leverage available when defects are attacked systematically.

The BOM specification research adds concrete time budgets for Station 1 incoming inspection: visual inspection plus basic electrical test takes 20-30 seconds, and SBC boot test adds 15-25 seconds. This totals 35-55 seconds of inspection time per unit — a significant portion of Station 1's [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds|90-160 second cycle time]].

Recommended KPIs: first-pass yield, defects per million opportunities (DPMO), and rework rates by defect category. Mode-tagging these KPIs enables the [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty|mode gap analysis]] to distinguish whether defects are mode-dependent (Manual operator damage during handling) or mode-independent (incoming component quality).

The AI disruption angle is significant: since [[AI transforms incoming material variation from a yield problem into a process control input]], incoming PCBA inspection does not have to be a simple pass/fail gate. AI vision can detect subtle solder quality variations and flag boards that are technically within spec but at the edge of tolerance -- adapting downstream assembly parameters accordingly. And because [[sampling-based quality is design debt from when 100 percent inspection was too expensive for humans]], the mini factory should inspect 100% of incoming PCBAs rather than sampling, which AI vision makes economically viable even at low volumes.

---

Relevant Notes:
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — incoming PCBA inspection is the first layer gate
- [[rolled throughput yield compounds across process steps making each step's quality critical]] — a 30% failure mode at step 1 compounds through all downstream stations
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]] — catching capacitor failures early is in-process monitoring for incoming materials
- [[computer vision inspection runs at 1200 parts per minute on the edge because millisecond latency makes cloud inference impractical]] — AI vision can screen incoming PCBAs for solder defects at speed
- [[quality escapes are the most valuable learning signal because they reveal unknown failure modes]] — capacitor failure modes that escape incoming inspection become the highest-value quality signals
- [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds]] — incoming inspection consumes 35-55s of Station 1's 90-160s total
- [[AI transforms incoming material variation from a yield problem into a process control input]] — AI turns incoming PCBA variation from reject/accept into adaptive process control
- [[sampling-based quality is design debt from when 100 percent inspection was too expensive for humans]] — AI vision makes 100% incoming PCBA inspection economically viable

---

Topics: [[somana product]], [[manufacturing mechanics]]
