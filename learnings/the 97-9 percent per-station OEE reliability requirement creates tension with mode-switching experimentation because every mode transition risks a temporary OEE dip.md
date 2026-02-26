---
description: "System OEE compounding demands near-perfect per-station reliability, but the mode dial's value comes from switching modes — each transition is a brief availability and performance disruption"
type: tension
source: "Boarding box assembly process parameters research — synthesis"
domain_area: economics
created: 2026-02-26
---

# the 97-9 percent per-station OEE reliability requirement creates tension with mode-switching experimentation because every mode transition risks a temporary OEE dip

The [[system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent|compounding OEE formula]] demands near-perfect per-station reliability. But the [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value|mode dial]]'s entire value proposition comes from switching between modes — and every mode transition is a temporary disruption:

- **Availability dip** during the transition itself (station pauses during handoff)
- **Performance dip** as the new mode ramps up (operator finds their rhythm in Manual, or Autonomous recalibrates)
- **Potential quality dip** during the first few cycles in the new mode

This is the same asymmetric risk identified in [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff|mode transition safety]]: Autonomous-to-Manual transitions are highest risk because they require position handoff, and position handoff takes time that degrades availability.

**Resolution pathways:**

1. **Scheduled transitions** — Mode switches happen between batches, during changeover, or at shift boundaries when the station is already paused. This eliminates the availability penalty.
2. **Demo vs. production modes** — During demos, accept the OEE dip as part of the show. During production, minimize transitions. This requires the dashboard to distinguish "demo OEE" from "production OEE."
3. **Transition speed engineering** — Invest in making transitions fast: pre-computed robot positions for Autonomous-to-Manual handoff, warm-standby software configurations, hot-swappable mode state.
4. **Statistical accounting** — Exclude the first N cycles after a transition from steady-state mode comparison data, similar to the [[30 cycles per mode per step provides sufficient data for detecting a 20 percent mode gap with reasonable statistical confidence|30-cycle statistical threshold]].

The tension is productive: it forces Somana to engineer excellent transitions, which becomes a differentiator — "our mode switching takes 8 seconds with zero quality impact" versus a competitor's "reconfiguration requires a 30-minute setup."

---

Relevant Notes:
- [[system OEE compounds multiplicatively across stations so a five-station line targeting 90 percent system OEE requires each station at 97-9 percent]] — the reliability demand that creates this tension
- [[a togglable mode dial that switches each station between manual assisted and autonomous generates live comparative evidence that software creates measurable value]] — the mode switching that creates the OEE risk
- [[mode transition safety risk varies asymmetrically where autonomous-to-manual is highest risk because it requires graceful deceleration and position handoff]] — transition risk varies by direction
- [[real-time dashboard vs historical analytics serve different audiences but share the same data pipeline creating tension between demo immediacy and statistical rigor]] — related tension: demo vs. production data handling
- [[SMED attacks changeover time through a five-step framework that separates internal from external work reducing setup by an average of 94 percent]] — SMED principles apply to mode transitions too
- [[the VUT equation shows that cycle time grows exponentially with utilization when variability is present creating a trap most factories fall into]] — mode transition variability is more punishing at higher utilization; mini-factory's low utilization provides tolerance

---

Topics: [[somana product]], [[factory economics]]
