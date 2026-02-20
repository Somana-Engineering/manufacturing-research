---
description: "AQL is an artifact of inspection cost constraints — AI vision and sensor fusion enable 100% inline inspection at near-zero marginal cost"
type: assumption
source: "Somana — GenAI Disruption Audit"
status: challenged
domain_area: mechanics
created: 2026-02-19
---

# sampling-based quality is design debt from when 100 percent inspection was too expensive for humans

The entire concept of sampling-based quality is design debt. It exists because 100% inspection was too expensive — required human inspectors or expensive dedicated test equipment for every unit. AI-powered vision systems, sensor fusion, and process monitoring can perform 100% inline inspection at marginal cost approaching zero. The concept of AQL (acceptable quality level) — "we accept that some percentage of defective units will reach customers" — is an artifact of inspection cost constraints, not a principled quality strategy.

Furthermore, the distinction between "testing" (checking outputs) and "control" (managing inputs) blurs with AI. Instead of inspecting whether a part is good after making it, AI continuously monitors process parameters to ensure the part will be good before it's finished — shifting from detection to prevention at granular, real-time scale. The quality cost structure inverts: prevention cost (AI monitoring) replaces appraisal cost (inspection) and dramatically reduces failure cost. The entire COQ framework's "optimal balance between prevention and detection" shifts toward near-total prevention, as [[in-process quality monitoring transforms final inspection from discovery to confirmation]].

## Relevant Notes
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]]
- [[rolled throughput yield compounds across process steps making each step's quality critical]]
- [[computer vision inspection runs at 1200 parts per minute on the edge because millisecond latency makes cloud inference impractical]] — the specific technology that makes 100% inspection economically viable
- [[institutional design debt accumulates when systems optimize for constraints that technology has already eliminated]] — sampling is a canonical example of design debt

---

Topics: [[AI disruption of factory economics]]
