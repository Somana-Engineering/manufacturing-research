---
description: "Bottom-up cycle time derivation from operation-level standards (5.5s/screw, 8-12s/insert, 3-4s/connector) yields 464s midpoint total with 74% line balance efficiency — typical for low-volume manual assembly"
type: parameter
source: "Boarding box BOM specification research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds

Bottom-up cycle time derivation from operation-level time standards:

**Operation-Level Benchmarks (Manual Assembly):**

| Operation | Time per occurrence |
|-----------|-------------------|
| Screw + electric driver | 5-6 seconds |
| Heat-set insert | 8-12 seconds |
| Snap-fit closure | 2-3 seconds |
| Keyed connector insertion | 3-4 seconds |
| Cable routing through channel | 5-8 seconds |
| PCB/SBC placement on standoffs | 4-6 seconds |
| Label application | 3-5 seconds |
| Visual inspection (per checkpoint) | 5-10 seconds |
| Power-on test | 15-30 seconds |
| Automated test fixture | 30-60 seconds |
| Firmware flash | 20-40 seconds |

**Station-Level Summary (Manual Mode):**

| Station | Content | Low | High | Midpoint |
|---------|---------|-----|------|----------|
| 1 | Prep & Incoming Inspection | 90s | 160s | 125s |
| 2 | Mechanical Assembly | 93s | 119s | 106s |
| 3 | Electrical Integration | 49s | 79s | 64s |
| 4 | Software & Testing | 75s | 145s | 110s |
| 5 | Final Inspection & Packaging | 46s | 72s | 59s |
| **Total** | | **353s** | **575s** | **464s** |

**Bottleneck:** Station 1 at 125s midpoint, driven by heat-set insert installation (32-72s for 4-6 inserts). Station 4 is close behind at 110s due to firmware flash + automated testing.

**Line balance efficiency:** 464 / (5 × 125) = **74%** — typical for low-volume manual assembly. At 60-minute takt (8 units/day), the 125s bottleneck is well within tolerance, confirming that [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume|imperfect balance is acceptable]].

**Bottleneck shift across modes:** In Autonomous mode, heat-set insertion (Station 1) speeds up with robotic press (8-12s → 3-4s per insert), and testing (Station 4) accelerates with automated fixtures. But mechanical assembly (Station 2) and electrical integration (Station 3) improve less because dexterous manipulation has diminishing automation returns. The bottleneck likely shifts from Station 1 (Manual) to Station 2 (Autonomous).

---

Relevant Notes:
- [[manufacturing line parameters form a connected system where takt time is the only external input and five leverage points determine where intervention cascades most]] — station cycle times are the parameter-level input to the system model
- [[at mini-factory volumes changeover speed matters more than perfect line balance because imbalance penalties are proportional to volume]] — 74% balance efficiency is acceptable at 60-minute takt
- [[box build assembly follows a bottom-up layered sequence where each level is inspected before the next begins]] — the 5-station mapping implements the layered sequence
- [[the automation mode gap varies by station with software and testing showing the highest gap at 59 percent and mechanical assembly the lowest at 29 percent]] — mode-specific cycle times reveal where automation adds most value
- [[takt time synchronizes production pace to customer demand]] — 60-minute takt at 8 units/day gives massive headroom over 125s bottleneck

---

Topics: [[somana product]], [[factory economics]]
