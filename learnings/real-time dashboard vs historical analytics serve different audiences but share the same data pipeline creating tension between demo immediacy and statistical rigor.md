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

The resolution may be temporal: invest in the real-time pipeline first (it's needed for demos anyway), and let the historical analytics layer grow naturally as production data accumulates. This mirrors [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment|progressive automation's self-funding logic]] — the real-time display justifies the initial infrastructure investment, and statistical evidence accumulates as a byproduct of production. The [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function|four-layer pipeline]] naturally separates concerns: Grafana renders the real-time demo, while InfluxDB's query engine serves the historical analytics — same data stream, two consumption patterns. But the data architecture must support both from the start — [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible|mode-tagged data]] feeds both consumers.

The deeper implication: the dashboard tension is an instance of the broader shift where [[the competitive moat shifts from accumulated production volume to data infrastructure quality and AI model sophistication|data infrastructure quality becomes the competitive moat]]. The real-time display proves the moat exists (visitors see it). The historical analytics quantify the moat precisely (executives cite it). Both are necessary for the sales motion; the tension is which to invest in first, and the answer is both — with the real-time display carrying the early burden.

---

Relevant Notes:
- [[the mode comparison dashboard must update within 1-2 seconds of a mode change to maintain the cause-and-effect demo experience which demands edge processing]] — the real-time side of the tension
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — the data architecture must support both views
- [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration]] — the demo display is the primary visitor experience
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — the mode dial generates both kinds of evidence
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — the pipeline naturally separates real-time (Grafana) from historical (InfluxDB queries) consumption of the same data stream
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]] — the real-time demo display IS continuous monitoring made visible; historical analytics restores the hierarchy for statistical rigor
- [[the competitive moat shifts from accumulated production volume to data infrastructure quality and AI model sophistication]] — the dashboard tension determines how moat evidence is presented: visitors see real-time proof, executives see historical statistical evidence
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — during early phases only the real-time demo exists; the historical analytics layer populates as production data accumulates across modes

---

Topics: [[manufacturing software]], [[somana product]]
