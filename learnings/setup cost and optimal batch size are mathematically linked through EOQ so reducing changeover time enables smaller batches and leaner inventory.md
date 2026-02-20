---
description: "EOQ = sqrt(2DS/H) — as setup cost S decreases, optimal batch size decreases proportionally, and at zero setup time the ideal batch is one unit"
type: learning
source: "Kaizen Institute SMED guide; Manufacturing Processes & Materials (SME Ch 19)"
domain_area: economics
created: 2026-02-19
---

# setup cost and optimal batch size are mathematically linked through EOQ so reducing changeover time enables smaller batches and leaner inventory

The Economic Order Quantity formula directly links setup cost to optimal batch size:

**EOQ = sqrt(2DS / H)**

where D = annual demand, S = setup/ordering cost per batch, H = holding cost per unit per year. Example: D = 10,000 units, S = $100/batch, H = $2/unit/year → EOQ = 1,000 units. Cut S to $25 → EOQ halves to 500 units. At zero setup cost, ideal batch = 1 unit (single-piece flow).

This is the mathematical proof for why [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent|SMED]] enables lean manufacturing. Long setup times create a self-reinforcing cycle: long setups → pressure for larger batches → higher inventory → more storage cost → more capital tied up → pressure for even larger batches to amortize setup. SMED breaks this cycle by attacking S directly.

Setup cost amortization makes the pressure concrete: a 2-hour setup spread across 100 units = 1.2 min/unit overhead; across 1,000 units = 0.12 min/unit. The rational response to expensive setups is large batches — which is why traditional factories run them. The rational response to cheap setups is small batches — which is why lean factories invest in SMED.

This connects directly to [[cash conversion cycle measures how long cash stays tied up in operations|cash conversion cycle]]: smaller batches mean less WIP, which means less inventory, which means DIO drops. Via [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time|Little's Law]], less WIP at constant throughput means shorter cycle time. The entire lean flow argument is contained in the EOQ formula — reduce S, and everything else follows.

## Relevant Notes
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]]
- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[cash conversion cycle measures how long cash stays tied up in operations]]
- [[factory costs divide into fixed variable and semi-variable categories that determine operating leverage]]
- [[takt time synchronizes production pace to customer demand]]

---

Topics: [[manufacturing mechanics]], [[factory economics]]
