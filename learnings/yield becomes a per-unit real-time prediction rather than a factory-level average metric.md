---
description: "The concept of a factory's yield is 70% becomes meaninglessly aggregated — AI enables per-unit yield probability for dynamic pricing and mid-process stops"
type: learning
source: "Somana — GenAI Disruption Audit"
domain_area: economics
created: 2026-02-19
---

# yield becomes a per-unit real-time prediction rather than a factory-level average metric

The yield economics math is correct, but the framing carries design debt. The conventional example treats yield as a static factory characteristic. AI makes yield dynamic — it can vary by product, shift, material batch, equipment state, and environmental conditions. The concept of "a factory's yield is 70%" becomes meaninglessly aggregated. What you want is "the predicted yield for this specific unit given all current conditions" — which is what AI enables.

This has pricing implications: if AI can predict per-unit yield probability in real-time, you can do dynamic pricing based on actual expected cost, not average cost. You can even stop production on a specific unit mid-process if AI predicts it's likely to fail, saving remaining conversion costs. Yield stops being a factory-level metric and becomes a unit-level prediction. This changes how you model factory economics entirely — from average-cost accounting to predicted-cost-per-unit accounting. The shift is enabled by [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously|the same monitoring infrastructure]] that collapses the metrics hierarchy.

## Relevant Notes
- [[yield improvements create compound cost advantages that materially affect competitive positioning]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]
- [[cross-step dependency modeling circumvents the multiplicative yield penalty by optimizing the entire process chain as a system]] — per-unit yield prediction requires modeling cross-step dependencies, not just per-station quality
- [[adaptive control responds to condition combinations too complex for human-authored rules]] — per-unit yield prediction feeds adaptive control decisions: adjust downstream parameters based on predicted upstream quality
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]] — real-time per-unit prediction requires edge inference at line speed
- [[SMT electronics assembly is the most viable office-scale production process because it combines multi-step flow with rich data and natural product changeovers]] — concrete testbed: paste printing quality predicts downstream solder joint yield per board

---

Topics: [[AI disruption of factory economics]]
