# Somana Demo Assembly — The Plan

## What We're Building

A real production line in the office. Not a mockup, not a prototype on a bench — an actual assembly operation that produces real products, runs on real industrial equipment, and serves as the primary demonstration of what Somana's software does to a factory.

The factory has two jobs. First, it assembles Somana's own hardware: branded boarding boxes containing PCBAs, SBCs (Raspberry Pis, Jetson modules), peripherals, and 3D-printed enclosures. We need these anyway — the factory makes what we'd otherwise outsource. Second, and more importantly, the factory IS the product demo. Every visitor who walks through sees Somana's software controlling real production in real time. The equipment, the data, the adaptive control — it's all live, all real, all running on our own stack.

The insight that ties these together: **the factory doesn't just showcase the product. It generates live evidence that the product works.**

---

## The Mode Dial — The Big Idea

This is the single most important architectural decision in the whole plan.

Every station in the factory operates in three switchable modes:

- **Manual** — operator follows written instructions, no AI assistance
- **Assisted** — the system provides real-time guidance (torque targets, placement verification, suggested adjustments) but the operator executes
- **Autonomous** — cobot/automation executes, operator monitors

The physical equipment stays the same in every mode. Only the software layer changes.

The demo protocol: produce 5 boarding boxes in Manual mode. Then switch to Assisted. Then Autonomous. Same product, same equipment, same afternoon. A real-time dashboard shows cycle time, defect rate, and changeover speed diverging across modes.

**The killer moment:** A visitor walks up, flips a station from Autonomous back to Manual, and watches the metrics degrade in real time. Then flips it back. That 30-second experience is more persuasive than any slide deck because the visitor caused the evidence themselves.

This reframes our progressive automation roadmap too. Phase 1 (manual) IS Manual mode. Phase 2 (semi-auto testing) IS Assisted mode. Phase 4 (cobot) IS Autonomous mode. We don't discard earlier phases as we invest — we keep them as toggleable configurations. The factory's own improvement history becomes a live, replayable comparison.

---

## The Physical Layout

### U-Shaped Cell, ~20 x 20 ft

The production floor is a U-shaped assembly cell. The operator starts and finishes at the same point — no wasted walk back to the start. A 5-station U-cell gives 2-3x more task combination flexibility than a straight line, and scales from 1 operator walking the full U (demo mode, low volume) to 3+ operators slotted in when a production batch hits.

One arm of the U is visible from a visitor corridor or glass partition. Visitors see a linear narrative (raw materials in, finished product out) while the operator works the efficient U. An overhead camera provides a "God's eye view" on a screen. Total footprint: roughly 20 x 20 feet for production cell plus visitor viewing — feasible for an office bay or warehouse section.

### The Five Stations

**Station 1 — Preparation / Kitting**
Receive components (pre-assembled PCBAs from suppliers, SBCs, peripherals, 3D-printed enclosures from the print farm). Kit everything for one unit into a work tray. Incoming quality check — visual or AI vision. This station sets the pace; nothing downstream starts until the kit is ready.

**Station 2 — Core Assembly**
Mount the PCBA and SBC into the enclosure. Route cables, connect peripherals. Jig-assisted alignment for consistent geometry. This is typically the longest-cycle station (the bottleneck) — design it first, balance everything else around it. Good candidate for cobot assistance in later automation phases.

**Station 3 — Finishing**
Close the enclosure (snap-fits or heat-set inserts depending on product). Mount closure hardware, apply labels. High-precision work — a natural point for AI vision quality verification.

**Station 4 — Customization / Branding**
Apply customer-specific branding, labels, configuration. Flash firmware for the specific deployment. Insert custom accessories. This station changes most between product variants — designed for rapid changeover (under 5 minutes).

**Station 5 — Test & Pack**
Functional testing: power-on, boot verification, network connectivity, peripheral detection, thermal performance under load, firmware validation. Then dimensional inspection, packaging, shipping label, and system logging. Testing consumes 35-40% of low-volume production time, so this is the first automation target — pogo-pin fixtures with parallel testing cut a 200-unit run by 69%.

### Conveyor

Tabletop belt conveyors in indexed (stop-and-go) mode. The belt advances the product to the next station, then pauses while work completes. This accommodates different cycle times per station and makes the demo flow controllable — pause at interesting stations, speed through simple transfers.

Candidates: Mini-Mover LP Series, Vention modular (plug-and-play with built-in sensors, curved sections for the U-shape), Dorner 2200. Belt width 8-12 inches, modular sections from 18 to 145 inches each.

---

## Equipment

### Three Budget Tiers

**Starter (~$15K)** — Manual assembly with a data backbone
- VEVOR conveyor ($450)
- Dobot MG400 robot arm ($2.9K, 750g payload, Modbus TCP)
- Revolution Pi PLC ($900, Docker + OPC UA + MQTT)
- 3x Bambu X1C 3D printers ($4.4K, native MQTT)
- Dashboards and sensors

**Mid-Range (~$28K)** — Semi-automated with real cobot assembly
- Dorner 2200 conveyor ($3.5K, VFD speed control via PLC)
- UFACTORY xArm 6 ($9K, 3kg payload, 6-axis, Python SDK + Modbus TCP + ROS2)
- WAGO PFC200 PLC ($1.5K with I/O, Docker + OPC UA + MQTT + Node-RED)
- 4x Bambu X1C ($5.8K)

**Showcase (~$50K)** — Full demo-grade production line
- Dual Dorner conveyors
- Dobot CR3 cobot ($16K, ISO safety-certified)
- Secondary MG400 arm
- Expanded WAGO PLC with vision station
- RFID unit traceability
- 6x print farm

Every piece of equipment — at every tier — speaks the same industrial protocols as full-scale factory equipment. The xArm 6 uses Modbus TCP like a Fanuc. The WAGO runs IEC 61131-3 ladder logic like a Siemens S7-1500. Software built for this desk-scale line works in a real factory. That's the whole point.

### The PLC

The PLC is the nerve center. Modern compact PLCs (WAGO PFC200, Phoenix PLCnext, Revolution Pi) run Linux with Docker alongside traditional ladder logic. This means Node-RED, MQTT brokers, OPC UA servers, and custom Python all run on the same device that controls I/O. The PLC IS an edge computing node. For Somana, this is a selling point in itself: we demonstrate that our software runs on real industrial controllers, not just laptops pretending to be controllers.

### The 3D Print Farm

Bambu X1C printers ($1,400 each) with native MQTT reporting. The print farm does double duty:

1. **Product enclosures** — branded cases for boarding boxes, sensor housings, kit enclosures
2. **Assembly tooling** — jigs, fixtures, go/no-go gauges, test fixture bodies, pogo-pin housings

57% of companies now 3D-print their own tooling. We print tooling overnight, iterate designs between runs, version-control fixture files alongside product CAD. Zero physical tooling inventory. ESD-safe PETG for anything touching PCBAs.

Fleet management via SimplyPrint or 3DPrinterOS for job scheduling across multiple printers.

---

## What We Manufacture

### Primary Product: Boarding Boxes

Somana's own branded edge computing devices. PCBAs and SBCs arrive pre-assembled from contract manufacturers. We 3D-print the enclosures, assemble everything, test, and ship.

The enclosure design follows DFA (Design for Assembly) principles: theoretical minimum 3 parts (housing, board, cover), snap-fits for fast assembly or heat-set M3 brass inserts for serviceability, single assembly direction where possible. Design the product for the cobot you'll have in Phase 4, even when Phase 1 is manual.

### Demo Portfolio

To show the factory's versatility during tours, we produce multiple product types. Each changeover during a visit demonstrates the platform's flexibility.

**IoT Environmental Sensors** — BOM $15-40, retail $50-120, 50-70% margins. Custom 3D-printed enclosures with temperature/humidity/air quality sensors. Good demo product: small, quick to assemble, visually clean, easy for visitors to understand.

**STEM Electronics Kits** — BOM $15-30, retail $60-95, 55-70% margins. Educational kits with custom project enclosures. Natural take-home item for visitors — configure it on screen, watch it get assembled, take it home.

**Contract Box-Build** — Assembly service for hardware startups needing 10-500 units. Tempo Automation proved explosive demand (200+ customers, ~10 unit average) before dying on unit economics ($57.7M liabilities). 3D printing eliminates the $5-15K injection mold tooling barrier that killed Tempo's margins. The factory's assembly capability is itself a service product.

### The Demo Formula

Successful demo factories worldwide converge on four elements: (1) a recognizable consumer object, not an abstract industrial part; (2) visible customization so visitors see different variants; (3) a "moment of truth" — a light turning on, a test passing green, metrics updating on a dashboard; (4) ideally, visitors take the product home.

SmartFactoryKL produces web-configured USB drives from 11 vendors' equipment. Siemens Amberg runs 350 changeovers/day across 1,200 variants with 400+ factory tours annually. We do the same at human scale: 3-4 changeovers during a 15-minute tour — boarding box, then IoT sensor, then STEM kit. The products prove the line works; the changeover proves the platform handles complexity; the mode dial proves the software creates value.

---

## Progressive Automation — How We Get There

Don't automate what you don't understand. The roadmap is staged by volume thresholds, and each phase's savings fund the next.

### Phase 1: Manual + Data ($500 - $2K)

Volume: 1-50 units/month

Manual assembly with professional ESD protection, 5S organization, and 3D-printed fixtures. Every step gets timed, every defect root-caused. The goal is process knowledge — understand the work before automating it.

Install the data backbone from day one: PLC collecting cycle times, a camera at inspection, MQTT publishing everything to a dashboard. Even manual production generates the data that trains later AI models.

**This IS Manual mode on the mode dial.**

### Phase 2: Semi-Auto Testing ($2K - $10K)

Volume: 50-200 units/month

Automated functional testing with pogo-pin fixtures and parallel test capability. Testing eats 35-40% of production time — automating it first gives the best ROI. Tiered screening: quick pass on all units, detailed testing only on flagged ones.

Add pick-to-light bins for kitting accuracy. The operator is still doing assembly, but the system is guiding decisions.

**This IS Assisted mode on the mode dial.**

### Phase 3: Powered Tools + Conveyor ($5K - $20K)

Volume: 200-500 units/month

Torque-controlled screwdrivers, powered conveyor between stations, basic vision inspection. The line starts feeling like a real production operation.

### Phase 4: First Cobot ($75K - $150K)

Volume: 500-2,000 units/month

One collaborative robot on the most repetitive, consistent task — typically screw driving or board insertion. The cobot works alongside the operator, handling the boring stuff.

**This IS Autonomous mode on the mode dial.**

### Phase 5: Multi-Station Cobot Line ($200K - $500K)

Volume: 2,000+ units/month

Multiple cobots, automated material handling, the full vision. Only justify this when volume demands it.

**Key insight:** What stays manual longest is cable routing, wire harness connections, and non-standard variant operations. These require spatial reasoning that cobots handle poorly at low volumes. Design around this constraint.

---

## Changeover Over Balance

At our volumes (single digits to low tens per day), perfect line balance barely matters. A 20% imbalance at 8 units/day costs roughly one lost unit per day. A 15-minute changeover happening 3 times/day costs 45 minutes and blocks ALL stations.

Invest in changeover speed, not balance precision:
- Modular fixtures that swap in under 5 minutes
- Digital recipe cards at each station
- Pre-staged kits for the next product
- 3D-printed product-specific jigs at near-zero cost

The bottleneck station determines throughput — design it first, accept moderate imbalance everywhere else.

---

## The Software Story

The factory runs on a MQTT Unified Namespace. Every device publishes to a central broker (Mosquitto on the WAGO PLC). Node-RED handles orchestration. OPC UA provides semantic richness at the machine edge. Sparkplug B for payload structure.

Device → Edge (Node-RED on PLC) → Platform (MQTT broker) → Dashboard

This is deliberately the same architecture as a full-scale factory — scaled down, not dumbed down. The integration patterns, the data models, the protocol stack — all transfer directly to a customer deployment.

The mode dial lives in this software layer. Each station's abstraction exposes a mode selector. The metrics pipeline captures everything in every mode. The dashboard shows mode-comparative analytics. None of this requires custom hardware — it's all software running on the same industrial equipment.

---

## What's Still Open

These are the research and design questions we haven't answered yet:

- **Boarding box process parameters** — specific cycle times per station, tolerances, fixture geometry
- **AI vision inspection specs** — camera resolution, lighting requirements, defect taxonomy for our specific products
- **Conveyor vendor selection** — get actual quotes from Mini-Mover, Vention, and Dorner for a 5-station indexed system
- **Digital twin / demo overlay** — what data to visualize, how to present it in real time for visitors
- **Product changeover protocol** — detailed SMED analysis for switching between boarding box, IoT sensor, and STEM kit on shared fixtures
- **Mode dial software architecture** — specific abstraction layer design, metrics pipeline, dashboard UI

---

## The Pitch, In One Paragraph

Somana is building a 20x20-foot production line in the office that assembles real edge computing devices using real industrial equipment — conveyors, cobots, PLCs, and a 3D print farm — all controlled by Somana's own software. The factory produces boarding boxes, IoT sensors, and educational kits, switching between products multiple times per tour. But the real demo isn't the products. It's the mode dial: every station toggles between Manual, Assisted, and Autonomous operation, and a live dashboard shows visitors — in real time, on real production — exactly what the software does to cycle time, defect rate, and changeover speed. The visitor flips the switch. The metrics change. That's the sale.
