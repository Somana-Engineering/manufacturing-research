---
description: "CCC = DIO + DSO - DPO — working capital scales with revenue and is commonly underestimated by factory startups"
type: parameter
source: "a16z — A Primer on Factory Economics"
status: conventional
domain_area: economics
created: 2026-02-19
---

# cash conversion cycle measures how long cash stays tied up in operations

CCC = Days Inventory Outstanding + Days Sales Outstanding - Days Payables Outstanding

A concrete example: 60 days inventory + 45 days receivables - 30 days payables = 75 days of working capital tied up in operations. At $10M in monthly costs, that translates to $25M in operational working capital alone — capital that is neither available for investment nor visible as a traditional expense.

The critical and often underappreciated dynamic: working capital scales with revenue. Growing factories need more inventory to support higher throughput, more receivables financing as sales increase, and more operating cash to bridge the gap. Growth consumes cash even when the unit economics are healthy.

Startups sometimes raise enough capital for facilities and equipment but not for the WIP and receivables carrying costs that come with actually running the factory at scale. This is a common stumbling point that catches founders off guard when the factory is built but cash runs out funding operations.

The GenAI disruption audit argues AI attacks CCC through every component. DIO drops via AI-optimized production scheduling (less WIP per cycle time discussion) and AI demand forecasting (less finished goods safety stock). DPO improves via AI-optimized procurement with better demand visibility for suppliers. The source estimates AI could cut a 75-day CCC to 40-50 days, freeing $8-12M in working capital for a $10M/month operation. This directly reduces the "factory financing gap" that catches manufacturing startups by surprise. See [[AI reduces cycle time not by making processing faster but by eliminating the 90 percent of time that is coordination waste]].

## Relevant Notes

- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[capital structure should evolve from equity to debt as technology risk gives way to execution risk]]
- [[factory costs divide into fixed variable and semi-variable categories that determine operating leverage]]
- [[AI reduces cycle time not by making processing faster but by eliminating the 90 percent of time that is coordination waste]]
- [[the manufacturing planning cascade from S&OP to MRP to finite scheduling could be collapsed by AI doing real-time planning across all horizons]] — planning cascade speed directly determines inventory levels and DIO
- [[digital inventory replaces physical warehousing making on-demand micro-manufacturing economically rational at any scale]] — digital inventory drives DIO toward zero, the most radical attack on CCC
- [[variability must be buffered by inventory capacity or time and lean manufacturing minimizes the total cost of buffering not the buffers themselves]] — inventory buffers directly inflate DIO; reducing variability reduces the cash tied up in buffering
- [[customization inverts the small-scale penalty into a premium when each product is inherently unique]] — customization models with upfront payment can improve DSO while premiums offset the working capital intensity
- [[the setup-batch-inventory-cash chain links changeover time to batch size to WIP to cycle time to working capital through four mathematical relationships]] — the chain's fourth equation directly determines CCC components through the WIP-to-working-capital link

---

Topics: [[factory economics]], [[AI disruption of factory economics]]
