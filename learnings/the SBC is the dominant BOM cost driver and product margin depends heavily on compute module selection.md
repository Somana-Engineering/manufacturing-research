---
description: "SBC accounts for 30-45% of BOM ($35-80) — Raspberry Pi 5 at $80 pushes BOM toward $150+ while ESP32-S3 or custom carrier with compute module brings BOM under $80"
type: learning
source: "Boarding box BOM specification research — web search synthesis"
domain_area: economics
created: 2026-02-26
---

# the SBC is the dominant BOM cost driver and product margin depends heavily on compute module selection

In a boarding box product, the single-board computer accounts for 30-45% of total BOM cost, making it the single most consequential component decision:

| SBC Option | Cost | BOM Impact | Capability |
|-----------|------|-----------|-----------|
| Raspberry Pi 5 | $80 | BOM → $150+ | Full Linux, GPU, camera, broad ecosystem |
| Raspberry Pi 4 | $55 | BOM → $120-130 | Mature ecosystem, lower compute |
| Jetson Nano | $60-80 | BOM → $130-150 | GPU-accelerated AI inference |
| ESP32-S3 | $3-8 | BOM → $50-70 | WiFi/BLE, limited compute, no Linux |
| Custom carrier + CM4 | $45-60 (module + board) | BOM → $110-130 | Integrated standoffs, pre-routed power |

The SBC choice cascades through the entire production plan:
- **Cycle time:** Higher-capability SBCs have longer boot times (15-30s for RPi vs. 2-3s for ESP32), directly affecting [[boarding box manual assembly totals 353 to 575 seconds across five stations with station 1 as bottleneck at 125 seconds|Station 4 testing time]]
- **Thermal management:** RPi 5 and Jetson require thermal pads or active cooling; ESP32 is passively cooled
- **Assembly complexity:** SBCs with more I/O ports mean more connectors, more cables, more assembly steps
- **Product positioning:** The SBC defines the product's capability ceiling — a $3 ESP32 makes a $40 IoT sensor; an $80 RPi 5 makes a $200 edge compute device

For the product portfolio strategy: different SBC choices map to different product lines. The IoT sensor demo product uses ESP32 (low BOM, high margin); the primary boarding box uses RPi 4/5 or carrier board (higher BOM, moderate margin); the Jetson variant targets AI-specific demos. This is [[customization inverts the small-scale penalty into a premium when each product is inherently unique|customization economics]] — different SBC choices create different value propositions without changing the assembly process.

The [[AI generative design makes BOM a continuous optimization target rather than a fixed input for a given product design|BOM optimization]] opportunity: as compute modules evolve (new RPi versions, new Jetson models), the BOM shifts — keeping the SBC decision under active review rather than treating it as fixed.

---

Relevant Notes:
- [[a boarding box BOM divides into six functional categories with fasteners as highest piece count but lowest cost]] — the SBC dominates the PCB/Compute category which dominates the total BOM
- [[customization inverts the small-scale penalty into a premium when each product is inherently unique]] — different SBC choices create different product lines from the same assembly process
- [[AI generative design makes BOM a continuous optimization target rather than a fixed input for a given product design]] — SBC selection should be reviewed as new modules launch
- [[progressive automation pays for itself when each phase demonstrates ROI before funding the next investment]] — SBC choice affects which automation investments have highest ROI
- [[demo factories that convert visitors combine recognizable products visible customization a moment of truth and product changeover as the primary demonstration]] — SBC swap between product lines is visible customization

---

Topics: [[somana product]], [[factory economics]]
