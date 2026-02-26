---
description: "Availability stays constant (same equipment uptime), Performance shows the largest mode gap (Autonomous targets ideal cycle time vs Manual operator variance), Quality reveals whether AI catches what humans miss"
type: learning
source: "Mode dial software architecture research — web search synthesis"
domain_area: economics
created: 2026-02-25
---

# OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant

OEE (Availability x Performance x Quality) provides the headline comparison number for the mode dial — the single metric that changes most visibly when modes switch. But the three components tell different stories across modes, and understanding which components drive the gap is both analytically useful and demo-valuable.

**Availability** stays roughly constant across modes. The same equipment experiences the same uptime regardless of whether it's in Manual, Assisted, or Autonomous mode. Changeover time might vary slightly (Autonomous mode could execute changeover sequences faster), but scheduled and unscheduled downtime is equipment-driven, not mode-driven. If the mode dial shows an availability difference, it likely points to operator-induced stoppages in Manual mode — a legitimate finding but a secondary effect.

**Performance** (actual vs. ideal cycle time) shows the biggest mode gap. This is the headline number for demos. In Autonomous mode, the system targets ideal cycle time every cycle. In Manual mode, operator variance creates a distribution around the ideal — some cycles faster, many slower, none exactly at ideal. In Assisted mode, AI guidance narrows the distribution but the operator still sets the pace. The Performance gap is the most legible evidence of AI value: same equipment, same product, measurably different cycle times.

**Quality** (first-pass yield) reveals whether AI inspection and guidance catch defects that manual processes miss. This is subtle but powerful: if Quality improves from Manual to Assisted mode — where the operator still does the work but the AI provides guidance — it demonstrates that [[generative AI copilots for manufacturing use RAG over internal documentation rather than fine-tuning to reduce hallucination|the copilot/guidance layer]] adds value even without taking over physical control.

For the demo dashboard, decomposed OEE is more persuasive than aggregate OEE. A visitor seeing "OEE: 72% Manual vs. 89% Autonomous" learns something. A visitor seeing "Availability: 95% both | Performance: 78% Manual vs. 95% Autonomous | Quality: 97% Manual vs. 99% Autonomous" learns WHERE the AI creates value. This decomposition connects to [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost|OEE's diagnostic function]] and extends it from "diagnosing equipment problems" to "diagnosing AI value contribution."

The [[OEE framework becomes less useful as its simplifying assumptions become limitations rather than helpful abstractions|tension about OEE's simplifications]] is relevant but less problematic for mode comparison than for absolute measurement: the simplifying assumptions (independent components, single-product line) apply equally across modes, so the comparison remains valid even if the absolute numbers are imprecise.

---

Relevant Notes:
- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]] — extends OEE decomposition from equipment diagnosis to mode-comparative analysis
- [[OEE framework becomes less useful as its simplifying assumptions become limitations rather than helpful abstractions]] — simplifications apply equally across modes, so comparison remains valid
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — per-mode OEE requires mode-tagged data
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — decomposed OEE makes the evidence more legible
- [[generative AI copilots for manufacturing use RAG over internal documentation rather than fine-tuning to reduce hallucination]] — Quality improvement in Assisted mode specifically validates the copilot layer

---

Topics: [[factory economics]], [[somana product]]
