---
description: "A final test failure the process data didn't predict means there's a failure mode the models don't capture yet"
type: learning
source: "Somana — A Tour of Our Model Factory"
status: validated
domain_area: software
created: 2026-02-19
---

# quality escapes are the most valuable learning signal because they reveal unknown failure modes

When final inspection finds a failure that process data didn't predict — that's the most valuable signal. It means a failure mode exists that current models don't capture. The response: investigate, learn, update model. Every escape makes future escapes less likely. This creates a virtuous cycle: the system gets better at predicting quality with each surprise, asymptotically approaching zero escapes. The escapes are not bugs in the system — they're the learning mechanism.

## Relevant Notes
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]
- [[cross-site knowledge transfer means each subsequent factory deployment ramps faster than the previous one]]
- [[computer vision inspection runs at 1200 parts per minute on the edge because millisecond latency makes cloud inference impractical]] — CV catches visual escapes at line speed, turning them into immediate learning signals

---

Topics: [[somana product]]
