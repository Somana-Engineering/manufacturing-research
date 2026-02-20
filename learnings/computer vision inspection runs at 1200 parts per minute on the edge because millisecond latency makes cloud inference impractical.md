---
description: "Cognex In-Sight 3800 uses hybrid AI needing only 5-10 training images — edge inference dominates inline quality inspection as a production-deployed technology"
type: learning
source: "The Complete Software Architecture of a Modern Manufacturing Shopfloor"
status: validated
domain_area: software
created: 2026-02-19
---

# computer vision inspection runs at 1200 parts per minute on the edge because millisecond latency makes cloud inference impractical

Computer vision for quality inspection is fully production-deployed, not aspirational. Cognex leads with the In-Sight 3800 inspecting 1,200 parts per minute using hybrid AI: edge learning needing only 5-10 training images for simple defects, plus deep learning for complex ones. Cameras integrate directly with PLCs and MES for automated pass/fail routing and quality data logging.

Edge inference dominates because millisecond latency requirements make cloud impractical for inline inspection. This validates the broader principle that [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements|edge compute is necessary for real-time control]]. It also provides concrete evidence that [[sampling-based quality is design debt from when 100 percent inspection was too expensive for humans|100% inspection is economically viable]] — AI vision systems perform 100% inline inspection at marginal cost approaching zero, making sampling-based quality genuinely obsolete for visual defects. The 5-10 training image requirement for edge learning is particularly notable: it means new product introduction can include quality inspection from day one without extensive model training.

## Relevant Notes
- [[sampling-based quality is design debt from when 100 percent inspection was too expensive for humans]]
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]]
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]]

---

Topics: [[manufacturing software]]
