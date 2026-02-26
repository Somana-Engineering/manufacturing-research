---
description: "RTY is the product of first-pass yields at each step — a 5-step process at 95% FPY per step yields only 77% RTY"
type: parameter
source: "a16z — A Primer on Factory Economics"
status: conventional
domain_area: economics
created: 2026-02-19
---

# rolled throughput yield compounds across process steps making each step's quality critical

Key yield metrics cascade through the production process: incoming quality yield, first-pass yield per step, rolled throughput yield, final test yield, and field return rate. Each hand-off is a point where defects can compound.

RTY = FPY_1 x FPY_2 x ... x FPY_n

This multiplicative compounding makes each individual step's quality critical. A seemingly good 95% first-pass yield per step across just 5 steps gives only 77% rolled throughput yield (0.95^5 = 0.774). At 10 steps, the same per-step yield drops RTY to 60%. The implication is that factories with more process steps face exponentially steeper quality challenges, and improving the worst-performing step delivers outsized gains on the overall RTY.

RTY and OEE compound together as independent multipliers on effective output. A 5-station line at 95% per-station OEE and 98% per-station yield produces 77.4% x 90.4% = 70% effective output. Understanding both compounding effects is essential for realistic capacity planning, because [[system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent|system OEE compounds multiplicatively alongside RTY]].

For Somana's boarding box, the yield cascade has concrete specificity. [[capacitor failures account for nearly 30 percent of PCB failures making incoming PCBA inspection critical for box build yield|Capacitor failures account for nearly 30% of PCB failures]], making incoming PCBA inspection the highest-leverage yield gate — a 30% failure mode at step 1 compounds through all downstream stations. The [[quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection|six-level progressive testing hierarchy]] (sub-assembly through final inspection) is the box build defense against RTY compounding: each level catches different failure modes at increasing integration, so defects are detected at the layer where rework cost is lowest. And because [[cross-step dependency modeling circumvents the multiplicative yield penalty by optimizing the entire process chain as a system|AI can model cross-step dependencies]], the independence assumption in the RTY formula becomes a conservative approximation rather than an accurate model.

## Relevant Notes

- [[yield improvements create compound cost advantages that materially affect competitive positioning]]
- [[OEE decomposes into availability performance and quality to diagnose where operational capacity is lost]]
- [[the manufacturing metrics hierarchy cascades from financial outcomes to root cause indicators across four levels]]
- [[manufacturing line parameters form a connected system where takt time is the only external input and five leverage points determine where intervention cascades most]] — FPY at the worst station is leverage point 4; improving the worst step has outsized impact because RTY is multiplicative
- [[system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent]] — RTY and system OEE compound together; both impose exponential penalties on multi-station lines
- [[quality testing in box build assembly follows a six-level progressive hierarchy from sub-assembly through final inspection]] — progressive testing is the defense against RTY compounding: catch defects at each layer before they propagate
- [[capacitor failures account for nearly 30 percent of PCB failures making incoming PCBA inspection critical for box build yield]] — the dominant first-step yield risk that drives incoming inspection priority
- [[cross-step dependency modeling circumvents the multiplicative yield penalty by optimizing the entire process chain as a system]] — AI models the actual dependency graph rather than assuming step independence
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]] — continuous monitoring defends RTY by catching defects at the layer where rework is cheapest
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — layer-by-layer inspection gates directly implement RTY defense

---

Topics: [[factory economics]], [[somana product]]
