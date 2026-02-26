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
- [[system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent]] — the system-level extension: per-station OEE compounds exponentially with station count
- [[the compounding OEE formula is powerful demo content showing visitors how small per-station improvements cascade into large system gains]] — live dashboard showing one mode switch lifting system OEE is the "moment of truth"

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

## BOM & Sourcing Economics
- [[a boarding box BOM divides into six functional categories with fasteners as highest piece count but lowest cost]] — $68-164 per unit across 25-45 line items; SBC dominates at 30-45%
- [[the SBC is the dominant BOM cost driver and product margin depends heavily on compute module selection]] — RPi 5 at $80 pushes BOM to $150+; ESP32 at $3-8 enables sub-$80 BOM
- [[electronic component sourcing follows a three-tier distributor model where each tier trades authenticity guarantees for cost savings]] — hybrid strategy: Tier 1 for electronics, direct for commodities, in-house for enclosures
- [[kitting services eliminate per-station parts counting and reduce assembly errors at a cost of 2 to 5 dollars per kit]] — $2-5/kit trades BOM cost for error reduction and changeover speed
- [[mechanical hardware and consumables should be sourced direct from manufacturers at 50 to 70 percent savings over distributors because authenticity risk is negligible]] — commodity items bypass the tier model
- [[BOM cost versus assembly cycle time creates a spectrum of trade-offs where every dollar spent on poka-yoke components saves seconds on the line]] — tension: $7-25 total BOM increase saves 72-116s in Manual mode
- [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds]] — 464s midpoint, 74% line balance efficiency, 60-minute takt gives massive headroom

## Small-Scale & Customization Economics
- [[customization inverts the small-scale penalty into a premium when each product is inherently unique]] — challenges the assumption that small batches are always a penalty; 21-85% margins in batch-of-one niches
- [[in micro-manufacturing the competitive moat is software not hardware because design automation and scheduling determine who can serve high-mix demand profitably]] — Cimpress ($3.4B), Bright Machines, and Tempo prove the software-defined manufacturing model
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — the phased investment model ($2K to $150K) that makes small-scale economics work by self-funding each automation tier
- [[contract box-build becomes a design intelligence service when mode-tagged data generates empirical DFA report cards for every customer product]] — transforms commodity assembly into design consultancy with per-customer retention loop
- [[the DFA feedback engine creates a virtuous data flywheel where each assembled product improves diagnostic accuracy for future products]] — the competitive moat compounds with every product: more data → better diagnostics → more customers
- [[DFA feedback credibility requires production volume that new customer relationships lack]] — tension: first-batch customers need feedback most but have least statistical basis

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
- [[the 97-9 percent per-station OEE reliability requirement creates tension with mode-switching experimentation because every mode transition risks a temporary OEE dip]] — reliability demand vs. demonstration freedom
- [[BOM cost versus assembly cycle time creates a spectrum of trade-offs where every dollar spent on poka-yoke components saves seconds on the line]] — at mini-factory volumes, BOM pennies almost always worth spending

## Open Questions
- [[what is the minimum data infrastructure investment needed to realize AI-driven manufacturing economics]]
- [[how does AI model risk map to the existing risk-capital matching framework for manufacturing financing]]
- What are the key parameters that determine manufacturing line viability?
- What is the minimum viable scale for a learning-focused mini factory?

---

Agent Notes:
- 2026-02-26: Added BOM & Sourcing Economics section (7 entries). The boarding box BOM economics are now specified: $68-164 per unit, SBC as dominant cost driver, three-tier sourcing strategy, kitting services, BOM-vs-cycle-time trade-off spectrum, and bottom-up cycle time derivation. New tension: BOM cost vs assembly cycle time.
- 2026-02-26: Added system OEE compounding (2 entries) to Yield & Quality and OEE reliability tension to Tensions. The compounding formula (OEE_system = OEE_i^n) is both an engineering constraint and a persuasion tool: it shows why per-station improvements cascade non-linearly and why the mode dial is a reliability mechanism, not just a demo.
- 2026-02-25: Added Layout & Line Design section (U-cells), changeover-vs-balance to Changeover section, and progressive automation to Small-Scale section. These three learnings from the line layout research fill the gap between abstract economics and concrete mini-factory design — they show WHERE the economic principles land when applied at 8 units/day in a 20x20 ft space.
- 2026-02-20: Added Small-Scale & Customization Economics section and Working Capital subsection for digital inventory. The product research learnings (customization, software moat, digital inventory) create a coherent sub-argument that conventional economics overstates the scale penalty. The CCC-to-digital-inventory path through DIO elimination is the strongest economic argument for Somana's model. New tension: scale assumption vs customization evidence.
