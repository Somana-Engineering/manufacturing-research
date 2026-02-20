---
description: "When every process parameter is tracked at every station, final inspection confirms what the process data already predicts"
type: learning
source: "Somana — A Tour of Our Model Factory"
status: challenged
domain_area: mechanics
created: 2026-02-19
---

# in-process quality monitoring transforms final inspection from discovery to confirmation

The challenged assumption: quality lives at the end of the line. Build the thing, then check if it's good. Rework is far more expensive than doing it right the first time. Late-stage failures are most expensive because they've accumulated the most value-add. Continuous monitoring flips this: quality becomes a continuous property of the entire process. By the time a part reaches final inspection, confidence in its quality is already high. Final inspection doesn't disappear (physics is physics, customers want proof) but changes from "find out if good" to "confirm what we already know." Surprises drop dramatically.

In assembly operations, in-process monitoring takes a different form than in machining or continuous process manufacturing. For kitting and box-build assembly, AI vision verification checks component presence in 0.8 seconds per kit, catching errors that cost $12–15 each in customer service and reverse logistics. Industry kitting error rates run 3–8%; one manufacturer's 8% error rate cost $45K/month on 5,000 kits. Weight-check anomaly detection calibrated to golden-sample weights catches deviations as small as 2 grams. For assembled electronics like boarding boxes, [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target|functional testing during assembly]] (power-on, boot, connectivity checks at each insertion step) transforms the test from a final gate into continuous confirmation.

## Relevant Notes
- [[quality escapes are the most valuable learning signal because they reveal unknown failure modes]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]
- [[small adaptive adjustments compound across stations shifts and days into meaningful throughput and quality gains]]
- [[computer vision inspection runs at 1200 parts per minute on the edge because millisecond latency makes cloud inference impractical]] — the deployed technology that makes in-process monitoring real at line speed
- [[the cost of quality optimization problem collapses when AI makes prevention nearly free at the margin]] — the economic consequence: prevention dominates when monitoring is continuous
- [[sampling-based quality is design debt from when 100 percent inspection was too expensive for humans]] — in-process monitoring is what makes sampling obsolete
- [[functional testing consumes 35 to 40 percent of low-volume production time making it the highest-ROI first automation target]] — testing during assembly is in-process monitoring applied to box-build
- [[3D printers that produce enclosures should simultaneously produce assembly fixtures and test jigs at near-zero marginal tooling cost]] — 3D-printed pogo-pin fixtures enable in-process testing at each assembly step

---

Topics: [[somana product]], [[AI disruption of factory economics]]
