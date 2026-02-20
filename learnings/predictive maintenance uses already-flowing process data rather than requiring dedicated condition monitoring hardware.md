---
description: "Vibration signatures, thermal profiles, power consumption, and cycle time trends are already collected for process control"
type: assumption
source: "Somana — A Tour of Our Model Factory"
status: challenged
domain_area: mechanics
created: 2026-02-19
---

# predictive maintenance uses already-flowing process data rather than requiring dedicated condition monitoring hardware

The challenged assumption: predictive maintenance requires dedicated condition monitoring hardware bolted on as an afterthought. Somana's approach: the edge compute already collects vibration signatures, thermal profiles, power consumption patterns, and cycle time trends from every machine — because it's already connected for process control. A bearing degrading shows vibration signature shifts weeks before failure. A servo motor losing calibration shows microsecond cycle time drift. Maintenance recommendations include estimated time-to-failure, enabling scheduled work during planned downtime. Traditional maintenance oscillates between waste (calendar-based) and crisis (reactive). This is the third option.

Industry evidence validates this approach. BMW's iFactory uses vibration analysis via edge sensors to predict press-shop equipment failures, and major CMMS/EAM vendors (SAP PM, IBM Maximo) are adding ML-based remaining useful life estimation. The key architectural insight is that predictive maintenance data piggybacks on the same [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything|integration layer]] used for process control — it's not a separate data pipeline but a different analytical lens on the same sensor streams. This makes the marginal cost of adding predictive maintenance near zero once the edge infrastructure is in place, which is why [[AI shifts maintenance from semi-variable calendar-based to fully variable condition-based with lower total cost|condition-based maintenance]] represents one of the highest-ROI entry points for manufacturing AI.

## Relevant Notes
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]]
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]
- [[AI shifts maintenance from semi-variable calendar-based to fully variable condition-based with lower total cost]]

---

Topics: [[somana product]], [[manufacturing software]]
