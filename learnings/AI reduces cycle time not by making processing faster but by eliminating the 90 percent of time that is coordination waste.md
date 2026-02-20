---
description: "Queue time, move time, setup time, and batching holds are human scheduling artifacts — AI attacks WIP directly through Little's Law"
type: learning
source: "Somana — GenAI Disruption Audit"
domain_area: economics
created: 2026-02-19
---

# AI reduces cycle time not by making processing faster but by eliminating the 90 percent of time that is coordination waste

90%+ of cycle time is non-value-added waste caused by coordination failures, scheduling limitations, and batch processing conventions — all human/organizational constraints. AI-driven scheduling can: eliminate or minimize queue time by predicting when each workstation will be available and timing arrivals precisely; optimize move sequences and material handling; reduce setup time by intelligently sequencing jobs to minimize changeovers; and eliminate batching holds where they exist only for human convenience.

Processing speed remains physics-constrained — you can't make a CNC machine cut faster without consequences. [[cutting speed is the single most influential variable on tool wear because 98 percent of machining energy converts to heat|Taylor's tool life equation]] proves this rigorously: tool life decreases exponentially with speed increases because 98% of machining energy becomes heat. The [[the Merchant equation connects cutting geometry to forces and power providing the physics foundation for process parameter optimization|Merchant equation]] further shows that force, power, and temperature are all governed by cutting geometry — there's no free lunch in process physics. But compressing the 90% waste has massive working capital implications per [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time|Little's Law]]: shorter cycle time = less WIP = less cash tied up in inventory. And [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent|SMED has already demonstrated 94% reduction]] in setup time alone — AI scheduling could push this further by optimizing changeover sequences and pre-configuring parameters automatically.

## Relevant Notes
- [[processing time is typically less than 10 percent of total manufacturing cycle time]]
- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[cutting speed is the single most influential variable on tool wear because 98 percent of machining energy converts to heat]] — the physics proof for "processing speed is constrained"
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]] — existing methodology for attacking non-processing time
- [[the manufacturing planning cascade from S&OP to MRP to finite scheduling could be collapsed by AI doing real-time planning across all horizons]] — another coordination waste target

---

Topics: [[AI disruption of factory economics]], [[manufacturing mechanics]]
