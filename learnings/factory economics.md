---
description: Economic principles governing manufacturing lines — unit economics, cost structures, amortization, and how AI changes the equation
type: moc
created: 2026-02-19
---

# factory economics

Understanding the economic parameters of manufacturing: how costs are structured, what drives unit economics, and which assumptions are rooted in pre-AI constraints.

## Cost Structure & Operating Leverage
- [[factory costs divide into fixed variable and semi-variable categories that determine operating leverage]]
- [[yield improvements create compound cost advantages that materially affect competitive positioning]]
- [[Wright's Law predicts manufacturing costs decline by a fixed percentage with each cumulative production doubling]]

## Yield & Quality
- [[rolled throughput yield compounds across process steps making each step's quality critical]]
- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]]
- [[OEE component decomposition tells different stories across modes where performance shows the biggest gap and availability stays roughly constant]] — Performance (cycle time) shows the largest Manual-vs-Autonomous gap; Quality reveals whether AI guidance catches defects humans miss

## Flow & Capacity
- [[processing time is typically less than 10 percent of total manufacturing cycle time]]
- [[Little's Law connects WIP throughput and cycle time as WIP equals throughput times cycle time]]
- [[takt time synchronizes production pace to customer demand]]
- [[bottleneck debottlenecking is often the highest-ROI capital investment in operating factories]]

## Changeover & Batch Economics
- [[setup cost and optimal batch size are mathematically linked through EOQ so reducing changeover time enables smaller batches and leaner inventory]] — the mathematical link between changeover time and batch size
- [[equal cost point analysis determines the crossover batch size where automated production becomes cheaper than manual methods]] — break-even for automation decisions
- [[the setup-batch-inventory-cash chain links changeover time to batch size to WIP to cycle time to working capital through four mathematical relationships]] — four equations chaining from the shop floor to the balance sheet
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — at 8 units/day, a 20% imbalance costs one unit but changeover blocks all stations; invest in SMED over balance

## System Dynamics & Parameter Interactions
- [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into]] — why "maximize utilization" destroys flow when variability exists
- [[variability must be buffered by inventory capacity or time and lean manufacturing minimizes the total cost of buffering not the buffers themselves]] — you WILL buffer variability; the only question is how you pay
- [[manufacturing line parameters form a connected system where takt time is the only external input and five leverage points determine where intervention cascades most]] — the full parameter interaction framework with five leverage points for intervention

## Metrics & Diagnostics
- [[the manufacturing metrics hierarchy cascades from financial outcomes to root cause indicators across four levels]]

## Capital & Working Capital
- [[cash conversion cycle measures how long cash stays tied up in operations]]
- [[capital structure should evolve from equity to debt as technology risk gives way to execution risk]]
- [[digital inventory replaces physical warehousing making on-demand micro-manufacturing economically rational at any scale]] — eliminates DIO from the cash conversion cycle, the most radical working capital optimization

## Small-Scale & Customization Economics
- [[customization inverts the small-scale penalty into a premium when each product is inherently unique]] — challenges the assumption that small batches are always a penalty; 21-85% margins in batch-of-one niches
- [[in micro-manufacturing the competitive moat is software not hardware because design automation and scheduling determine who can serve high-mix demand profitably]] — Cimpress ($3.4B), Bright Machines, and Tempo prove the software-defined manufacturing model
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — the phased investment model ($2K to $150K) that makes small-scale economics work by self-funding each automation tier

## Layout & Line Design
- [[U-shaped assembly cells provide 2-3x more task combinations than straight lines by letting operators start and finish at the same point]] — U-cells scale from 1 to 8 operators, solving the mini-factory staffing flexibility problem

## Sources
- [a16z a primer on factory economics for software people](../archive/a16z%20a%20primer%20on%20factory%20economics%20for%20software%20people.md)
- [genai disruption audit of factory economics](../archive/genai%20disruption%20audit%20of%20factory%20economics.md)

## AI Disruption
See [[AI disruption of factory economics]] for the systematic GenAI attack on every assumption in this domain — 20 learnings, 2 tensions, 2 open questions.

## Tensions
- [[OEE framework becomes less useful as its simplifying assumptions become limitations rather than helpful abstractions]]
- [[AI introduces model risk as a genuinely new category that the risk-capital framework does not capture]]
- **Scale vs. customization** — conventional economics assumes scale wins ([[Wright's Law predicts manufacturing costs decline by a fixed percentage with each cumulative production doubling|Wright's Law]]), but customization niches achieve higher margins at small scale when AI manages variety

## Open Questions
- [[what is the minimum data infrastructure investment needed to realize AI-driven manufacturing economics]]
- [[how does AI model risk map to the existing risk-capital matching framework for manufacturing financing]]
- What are the key parameters that determine manufacturing line viability?
- What is the minimum viable scale for a learning-focused mini factory?

---

Agent Notes:
- 2026-02-25: Added Layout & Line Design section (U-cells), changeover-vs-balance to Changeover section, and progressive automation to Small-Scale section. These three learnings from the line layout research fill the gap between abstract economics and concrete mini-factory design — they show WHERE the economic principles land when applied at 8 units/day in a 20x20 ft space.
- 2026-02-20: Added Small-Scale & Customization Economics section and Working Capital subsection for digital inventory. The product research learnings (customization, software moat, digital inventory) create a coherent sub-argument that conventional economics overstates the scale penalty. The CCC-to-digital-inventory path through DIO elimination is the strongest economic argument for Somana's model. New tension: scale assumption vs customization evidence.
