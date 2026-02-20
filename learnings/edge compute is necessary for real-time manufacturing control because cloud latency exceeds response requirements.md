---
description: "A vision system spotting a defect mid-weld needs a response in 50ms — cloud round-trips to Virginia are too slow"
type: learning
source: "Somana — A Tour of Our Model Factory"
status: validated
domain_area: software
created: 2026-02-19
---

# edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements

Most AI-for-manufacturing pitches start with the cloud. Send data up, get insights back. Fine for dashboards and quarterly reviews. Useless for controlling a machine that needs a decision in 50 milliseconds. Somana is edge-first: compute sits physically next to machines. When a vision system spots a surface defect mid-weld, the response happens on-site in the time it takes the robot arm to move three millimeters. This is also a reliability choice: if internet goes down (which happens in factories), production does not stop.

The market is validating this architectural bet. Analysts predict 50% enterprise edge computing adoption by 2025 (up from 20% in 2024), and [[computer vision inspection runs at 1200 parts per minute on the edge because millisecond latency makes cloud inference impractical|computer vision systems already inspect 1,200 parts per minute on edge hardware]]. The industry is converging on a hybrid pattern: real-time control and inference stay at the edge, while analytics, model training, and long-horizon planning move to the cloud. Even MES vendors are adopting this split — execution on-prem, analytics to cloud. Edge devices operating outside traditional data centers also create new security surface area; the IEC 62443 standard is emerging as the benchmark for industrial edge cybersecurity. The progression from isolated edge use cases to [[edge AI adoption follows a PoC-to-platform progression where infrastructure deployment replaces isolated use case development|platform-based edge deployment]] reinforces that edge compute is becoming infrastructure, not experiment.

## Relevant Notes
- [[a unified integration layer creates a common nervous system across heterogeneous equipment without replacing anything]]
- [[adaptive control responds to condition combinations too complex for human-authored rules]]
- [[predictive maintenance uses already-flowing process data rather than requiring dedicated condition monitoring hardware]]
- [[computer vision inspection runs at 1200 parts per minute on the edge because millisecond latency makes cloud inference impractical]]
- [[edge AI adoption follows a PoC-to-platform progression where infrastructure deployment replaces isolated use case development]]

---

Topics: [[somana product]], [[manufacturing software]]
