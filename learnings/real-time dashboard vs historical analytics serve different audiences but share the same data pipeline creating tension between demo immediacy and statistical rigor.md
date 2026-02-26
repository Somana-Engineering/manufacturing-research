---
description: "The demo display needs live dramatic metrics that change when the mode toggles; the sales/ROI display needs aggregated statistically significant evidence over days — same data, different time windows, different statistical properties"
type: tension
source: "Mode dial software architecture research — web search synthesis"
domain_area: software
created: 2026-02-25
---

# real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor

The mode dial generates two kinds of evidence from the same data, but they serve different audiences with conflicting requirements.

The **real-time demo display** needs live, dramatic metrics that change visibly when the mode toggles. A visitor flips the switch, and within [[the mode comparison dashboard must update within 1-2 seconds of a mode change to maintain the cause-and-effect demo experience which demands edge processing|1-2 seconds]] the dashboard shows the effect. This is experiential evidence — persuasive because the visitor caused it and saw it happen. But a single mode switch on a single station is a sample size of one. It's anecdotally compelling but statistically meaningless.

The **historical analytics display** needs aggregated performance across modes over days or weeks, proving the AI value proposition with statistical significance. This is the evidence for ROI calculations, procurement decisions, and executive presentations. It's boring to watch but rigorous to cite. The question it answers: "Over the last 500 units, Autonomous mode averaged 23% higher throughput with 40% fewer defects" — with confidence intervals and p-values.

The tension: how much infrastructure investment should the mode dial justify before statistical significance is achievable? The demo display works from day one — a single mode switch shows a visible effect. The historical display needs weeks of production data across modes. During that ramp period, the demo display carries the persuasion burden alone. Visitors may make purchasing decisions based on anecdotal real-time evidence before rigorous statistical evidence exists.

The resolution may be temporal: invest in the real-time pipeline first (it's needed for demos anyway), and let the historical analytics layer grow naturally as production data accumulates. But the data architecture must support both from the start — [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible|mode-tagged data]] feeds both consumers.

---

Relevant Notes:
- [[the mode comparison dashboard must update within 1-2 seconds of a mode change to maintain the cause-and-effect demo experience which demands edge processing]] — the real-time side of the tension
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — the data architecture must support both views
- [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration]] — the demo display is the primary visitor experience
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — the mode dial generates both kinds of evidence

---

Topics: [[manufacturing software]], [[somana product]]
