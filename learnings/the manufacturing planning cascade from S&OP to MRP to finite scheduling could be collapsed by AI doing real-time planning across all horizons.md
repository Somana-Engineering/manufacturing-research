---
description: "S&OP (12-24 months) to MPS (3-12 months) to MRP (weeks) to APS scheduling (hours) — a sequential cascade that exists because humans plan in horizons"
type: assumption
source: "The Complete Software Architecture of a Modern Manufacturing Shopfloor"
status: conventional
domain_area: economics
created: 2026-02-19
---

# the manufacturing planning cascade from S&OP to MRP to finite scheduling could be collapsed by AI doing real-time planning across all horizons

The planning hierarchy cascades: Sales & Operations Planning (12-24 months) - Master Production Schedule (3-12 months) - Material Requirements Planning (weeks to months, exploding BOMs to calculate component demand) - detailed finite capacity scheduling (days to hours, using APS systems). ERP-MES data flows bidirectionally across the Level 3-4 boundary: production orders, BOMs, and routings flow down; confirmations, actual consumption, and quality results flow up.

This sequential cascade is [[institutional design debt accumulates when systems optimize for constraints that technology has already eliminated|design debt]] from the era when humans could only plan at one horizon at a time. AI could potentially collapse the cascade by maintaining a continuously-updated model across all horizons simultaneously — adjusting the 12-month view in response to a machine breakdown today, or adjusting today's schedule based on a demand signal change for next quarter. The SAP MRP run that takes hours to recalculate could become a real-time optimization. This directly connects to [[AI reduces cycle time not by making processing faster but by eliminating the 90 percent of time that is coordination waste|eliminating coordination waste]] — much of the 90% non-processing time exists because planning updates propagate slowly through the cascade.

## Relevant Notes
- [[institutional design debt accumulates when systems optimize for constraints that technology has already eliminated]]
- [[AI reduces cycle time not by making processing faster but by eliminating the 90 percent of time that is coordination waste]]
- [[takt time synchronizes production pace to customer demand]]

---

Topics: [[manufacturing software]], [[AI disruption of factory economics]]
