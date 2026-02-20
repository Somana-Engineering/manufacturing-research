# Somana showcase factory: a desktop production line equipment reference

**A $15–50K desktop production line can simultaneously assemble real electronics products and serve as a compelling demo of Somana's AI manufacturing platform.** The key insight from this research: every dollar spent should pull double duty — advancing actual production capability while creating visual impact for investors. The architecture that makes this work is a Unified Namespace (MQTT broker) where every device publishes real-time data, letting Somana's platform subscribe to the entire factory as a single, living data stream. Below is a systematic equipment reference across six categories, with specific models, prices, protocols, and office-suitability ratings, culminating in three recommended build tiers.

---

## Conveyor systems that fit on a desk and talk to your PLC

Small conveyors create the visual "flow" that instantly communicates "production line" to visitors. For electronics enclosures in the 15–30 cm range, you need **150–400 mm usable belt width**, variable speed control, and ideally a VFD with PLC-compatible I/O.

**Dorner 2200 Series** is the standout industrial option. With widths from 44 mm to 610 mm and lengths up to 7.3 m, a **12″ × 5′ variable-speed unit runs approximately $2,800–$3,800** on 115V single-phase power. The sleek extruded aluminum frame with universal T-slots looks genuinely industrial, and Dorner explicitly certifies these for Universal Robots cobot integration. The **Dorner Element VFD controller** provides 5 digital inputs, 2 analog inputs, and 1 digital output — directly controllable from any PLC via standard I/O signals. Dorner also offers complete UL508A-certified PLC control panels integrating VFDs, sensors, and RFID. Noise is minimal. For Somana, two 5-foot Dorner sections at roughly **$7,000–$8,000 total** would create a professional-grade main line. Office suitability: ★★★★★

**Mini-Mover LP Series** offers a more budget-friendly industrial alternative at an estimated **$800–$3,000 per section**. The LP (Low Profile) series stands just 1.5″ tall with widths up to 16″ and lengths up to 12 feet. Available with DC and brushless DC gearmotors that interface well with PLCs. Made in America with precision anodized aluminum construction. Variable speed is standard. These look clean and professional, though the brand carries less recognition than Dorner. Office suitability: ★★★★

**VEVOR belt conveyors** represent the budget path — a **59″ × 15.7″ stainless steel unit costs roughly $350–$500** on Amazon, with 120V power and bi-directional variable speed. The critical limitation: speed control is via manual potentiometer only, with no digital interface. VEVOR's own Q&A confirms "it is impossible to electronically control speed and direction through a digital signal." A workaround exists — replace the potentiometer with a digital pot driven by PLC analog output, and add a relay for on/off — but this is a hack. Build quality is functional but visibly budget. For staging areas hidden from visitors, these work fine. Office suitability: ★★★

---

## Robot arms from $600 to $33,000 — what actually works for assembly

The robot arm is the centerpiece of any demo. It needs sufficient payload for PCBAs and enclosures (ideally **≥1 kg**), a programming interface Somana's platform can control (Python SDK, Modbus TCP, or REST API), and safety features appropriate for an office without cages.

**Universal Robots UR3e** ($25,000–$33,000) is the gold standard. With **3 kg payload, 500 mm reach, ±0.03 mm repeatability**, and infinite end-joint rotation perfect for screwdriving, it delivers both production credibility and investor recognition. Connectivity is unmatched: **Modbus TCP, EtherNet/IP, PROFINET, OPC UA** (via URCap), plus Real-Time Data Exchange at 500 Hz for Somana's platform. The UR+ ecosystem offers 500+ certified peripherals. ISO 13849-1 PLd Cat 3 safety certification means it can operate next to people without fencing. It plugs into any **100–240 VAC outlet** at just 100W average draw. Office suitability: ★★★★★

**UFACTORY xArm 5 Lite** (~$5,749) delivers remarkable value: **3 kg payload, 700 mm reach**, sleek carbon fiber construction, and solid software support including **Python SDK, ROS/ROS2, Modbus TCP, and a web-based visual programming environment**. The catch: the 5-axis model lacks collision detection — stepping up to the **xArm 6 (~$8,000–$10,000)** adds the sixth axis and safety features essential for an office. Modbus TCP on the control box enables PLC integration, and the 100–240 VAC power supply handles any outlet. For the price-performance sweet spot, this is hard to beat. Office suitability: ★★★★

**Dobot MG400** (~$2,890) is the budget entry point — a 4-axis desktop SCARA arm with just **750 g payload** and 440 mm reach, but ±0.05 mm repeatability and a footprint smaller than A4 paper. It supports **Python SDK, ROS, Modbus TCP**, and a graphical programming interface. The 4-axis design limits assembly orientations, and 750 g restricts it to light pick-and-place only — no screwdriving or cable insertion. As a secondary station handling component feeding, it works. As the main assembly arm, it's insufficient. Office suitability: ★★★★

**Dobot CR3/CR3A** (~$15,000–$22,000) steps into true cobot territory: **3 kg payload, 620 mm reach, ±0.02 mm repeatability**, 6 axes, ISO 13849/TS 15066 safety certification, and a 10.1″ teach pendant. The CR3A variant adds **PROFINET and EtherNet/IP** alongside Modbus TCP. Python SDK and drag-to-teach programming lower the barrier to deployment. This bridges the gap between budget arms and the UR3e, offering genuine production capability at roughly half the UR price. Office suitability: ★★★★

**Mecademic Meca500** (~$16,000–$20,000) is a conversation piece — the world's smallest 6-axis industrial robot, fitting in a briefcase with **±0.005 mm (5 μm) repeatability**. It's controlled via TCP/IP text commands and supports **Python, C++, ROS, EtherCAT, and EtherNet/IP**. The trade-off is severe: just 500 g payload and 330 mm reach. It handles precise PCBA placement beautifully but cannot drive screws or manipulate cables. Not a cobot — no force-limiting — so it needs a risk assessment for office use. The "wow factor" for investors is extraordinary. Office suitability: ★★★★

**Elephant Robotics myCobot 280** ($599–$849) is tempting at the price but has only **250 g payload, ±0.5 mm repeatability**, and no industrial protocols. It looks like a toy. Use it for software development and testing only — never for a production demo. Office suitability: ★★

---

## PLCs that speak OPC UA and MQTT out of the box

The PLC orchestrates the line and, critically, must expose machine data to Somana's AI platform. **Native OPC UA and/or MQTT support is non-negotiable** — retrofitting these protocols via external gateways adds cost and failure points.

**WAGO PFC200** ($600–$1,200 for controller) is the top pick for IoT integration. It runs real-time Linux with **Docker container support**, meaning you can run Node-RED, MQTT brokers, and custom Python scripts directly on the PLC alongside IEC 61131-3 logic. It has a **certified OPC UA server and client, native MQTT client, Modbus TCP/RTU, and a built-in REST API**. AWS IoT Greengrass and Azure IoT Edge certified. No built-in I/O — add WAGO 750-series modules (~$50–$200 each) for a total system cost of roughly **$1,000–$2,000**. The e!COCKPIT IDE (CODESYS V3-based) supports Ladder, Structured Text, and Function Block Diagram. For a startup building an AI manufacturing platform, the ability to run Docker containers on the PLC itself is transformative. Office suitability: ★★★★★

**Phoenix Contact PLCnext AXC F 2152** ($640–$700) is the WAGO's closest competitor, offering **native OPC UA server/client, MQTT client, PROFINET, EtherNet/IP, and Modbus TCP** on a Linux-based platform with container support. The standout advantage: **PLCnext Engineer IDE is completely free**, and it supports programming in IEC 61131-3, C++, C#, Python, and MATLAB/Simulink. A starter kit with I/O modules runs approximately **$2,060**. IEC 62443 cybersecurity certification adds credibility for enterprise customers. Office suitability: ★★★★★

**Revolution Pi Connect 5** ($560–$685) brings Raspberry Pi's ecosystem into an industrial DIN-rail enclosure. Full Linux with Docker, Python, Node-RED, **OPC UA via PiCtory configuration, MQTT, and Modbus TCP**. With I/O modules, a complete system costs roughly **$700–$1,200** — the most affordable option that checks all protocol boxes. The trade-off: soft real-time only (5–10 ms cycle times), which is perfectly adequate for desktop assembly speeds. The massive Raspberry Pi community means nearly any integration challenge has been solved before. Office suitability: ★★★★

**Siemens S7-1200 CPU 1214C** ($700–$900) is the industry-standard choice with **built-in OPC UA server** (firmware V4.4+) and MQTT via the LMQTT_Client library. Built-in I/O (**14 DI, 10 DO, 2 AI**) means fewer external modules. Hard real-time, PROFINET, web server, and the largest automation ecosystem in the world. The major drawback: **TIA Portal Basic license costs approximately $1,500**, pushing total system cost to $2,500+. For a startup already using Siemens elsewhere, this makes sense. Otherwise, the WAGO or PLCnext offers more IoT flexibility per dollar. Office suitability: ★★★★

**Industrial Shields ESP32 PLC** ($80–$180) makes an excellent supplementary sensor node. Built-in WiFi and BLE with MQTT via Arduino libraries enable cheap, wireless data collection points throughout the line. No OPC UA support and no IEC 61131-3, so it cannot serve as the main controller, but at this price you can deploy several as environmental monitors or auxiliary I/O feeding data to the Unified Namespace. Office suitability: ★★★★

---

## 3D print farms that integrate with a manufacturing platform

The print farm produces enclosures and is arguably the most "manufacturing" part of the operation. The critical question: can Somana's platform programmatically dispatch print jobs and receive completion signals?

**Bambu Lab X1C** ($1,449) is the speed-and-value champion, printing at up to **500 mm/s** with exceptional reliability — operators report thousands of jobs across dozens of machines with very few issues. The integration story is strong: the X1C runs a **built-in MQTT broker** that publishes print status, temperatures, and progress in real-time. The **Bambu Local Server SDK** (available by application) supports discovery, batch control, file upload, and job dispatch — purpose-built for ERP/MES integration. Third-party management via **SimplyPrint** ($31.49/month for 10+ printers with API access) or **3DPrinterOS** adds fleet orchestration. The significant office concern: **72 dB noise**, comparable to a vacuum cleaner. Dedicated room or acoustic enclosures are essential. The newer Bambu H2S drops to **61 dB** with a larger build volume. A farm of **4–8 X1C units ($5,800–$11,600)** can produce 15–40 phone-sized PETG enclosures daily. Office suitability: ★★★ (noise penalty)

**Prusa CORE One+** ($1,199 assembled) trades some speed for quiet operation and open-source reliability. Fully enclosed with active chamber heating to 55°C, it handles **PETG, ASA, ABS, and nylon** cleanly. Fleet management via **Prusa Connect** (free) provides monitoring and queue management, while **PrusaLink** exposes a local REST API for programmatic control — get status, upload files, start prints. The API is functional but less mature than UltiMaker's or Bambu's SDK. Prusa runs 600+ of their own printers in production, validating reliability. Eight CORE One+ units cost roughly **$9,600** and deliver comparable daily throughput to Bambu in a quieter package. Office suitability: ★★★★

**UltiMaker S7** ($5,999) costs 4× more but offers the **best-documented API in desktop 3D printing** via Digital Factory, with a TypeScript/Python SDK on GitHub supporting programmatic job dispatch, queue management, and telemetry polling. If API-first integration matters most, UltiMaker wins — but the economics make it hard to justify versus Bambu or Prusa for a startup. Office suitability: ★★★★

For fleet management software, **SimplyPrint** ($31.49/month at the Print Farm tier) provides a documented REST API, AutoPrint (auto-starts next job when bed cools), AI failure detection, and supports mixed-brand fleets including Bambu and Prusa. **3DPrinterOS** serves enterprise clients like NASA and Google with comprehensive API access but quote-based pricing. Either platform bridges the gap between raw printer APIs and Somana's manufacturing platform.

**PETG is the recommended production material** — easy to print reliably at scale, good chemical and impact resistance, glossy finish, minimal warping, and critically, **low fumes** for office use. ASA for any outdoor-exposed enclosures.

---

## The integration architecture that ties everything together

The architecture connecting PLC → robot → conveyor → printers → Somana's platform follows a pattern proven in training factories, university labs, and IIoT demonstrators worldwide. The core concept: a **Unified Namespace (UNS)** built on an MQTT broker, where every device publishes its data to a semantically organized topic tree.

The recommended protocol stack has three layers. At the **device layer**, the PLC communicates with the conveyor via digital/analog I/O and with sensors via Modbus TCP. The robot arm exposes data via Modbus TCP or REST API. 3D printers publish via MQTT (Bambu natively) or REST API (Prusa/UltiMaker). At the **edge layer**, a Node-RED instance running on the PLC itself (WAGO/PLCnext) or on a Raspberry Pi translates OPC UA, Modbus, and REST API data into standardized MQTT messages. At the **platform layer**, an MQTT broker (Mosquitto or HiveMQ Cloud, both free for small deployments) serves as the single source of truth, with Somana's AI platform subscribing to all production data and publishing commands back.

**fischertechnik Training Factory Industry 4.0** ($7,585–$12,000) demonstrates this exact architecture in miniature: a Raspberry Pi IoT Gateway running Node-RED bridges OPC UA from the PLC to MQTT for cloud connectivity, with RFID tracking on every workpiece. The entire factory — warehouse, processing station, sorting line, camera inspection — fits on a **114 × 74 cm wooden plate**. Open-source Node-RED flows and PLC code are published on GitHub. While too small for actual production, it perfectly demonstrates the protocol patterns Somana's full line would use and makes an excellent supplementary demo piece alongside real equipment. Office suitability: ★★★★★

**Festo Didactic CP Lab 400** systems represent the premium educational approach: modular workstations on pallet transfer conveyors with integrated PLCs, RFID, IO-Link sensors, HMI touch panels, and MES software. Each module includes a real conveyor, sensors, and actuators. The architecture uses **OPC UA, PROFINET, and industrial Ethernet** — exactly the stack Somana's platform targets. However, pricing starts around **$50,000–$80,000** for a 4-module system, consuming the entire budget before adding a robot arm or print farm. Best understood as an aspirational reference rather than a practical purchase. Office suitability: ★★★★★

The **Mayker Demo Factory** case study from Ghent offers perhaps the most relevant model for Somana: a company built an office-based IIoT showcase specifically for client demos using a **Siemens LOGO PLC, Siemens IoT2050 edge device, Docker containers, Node-RED, HiveMQ MQTT broker, Grafana dashboards, and physical Andon stack lights** — all for under $5,000. Their key insight: "IT presentations leave a lot to the viewer's imagination. We wanted to make abstract concepts concrete by including as much hardware and visuals as possible." Physical indicators synchronized with digital dashboards create impact far beyond their cost.

---

## What impresses investors versus what produces products

Research across university labs, company demonstrators, and training factories reveals a consistent hierarchy of visual impact. **Robot arms in motion** rank first — smooth, purposeful robotic movement is mesmerizing and universally signals "advanced manufacturing." **Real products being assembled** rank second — watching an actual electronics enclosure come together is far more compelling than sorting colored blocks. **Moving conveyor belts** create the "factory flow" feeling. **Live dashboards on large screens** showing real-time OEE, throughput, and quality metrics make the AI platform tangible. **Physical indicators** like Andon stack lights (green/yellow/red, $50–$100) that respond to system state make the "smart" visible with minimal investment.

The Fraunhofer IPK approach — where a visitor configures a product online and watches it being manufactured — is extraordinarily compelling for a "batch size one" narrative. Somana could implement this: a web interface lets the visitor choose enclosure color and configuration, the platform dispatches to the print farm, and the assembly line builds their custom unit while dashboards track every step.

---

## Recommended configurations across three budget tiers

### Starter tier (~$15,000): manual assembly with smart conveyor and data backbone

This tier establishes the production line concept and data architecture without a robot arm, focusing budget on the integration layer that demonstrates Somana's platform.

- **Conveyor:** 1× VEVOR 59″ × 15.7″ belt conveyor (~$450) with relay module for PLC on/off control, plus 1× Dorner 2200 Series 12″ × 3′ variable speed (~$2,200) as the main visible station
- **Robot arm:** 1× Dobot MG400 (~$2,890) for light pick-and-place demonstrations; manual assembly for actual production
- **PLC:** 1× Revolution Pi Connect 5 with DIO module (~$900) running Node-RED, OPC UA server, and MQTT client
- **3D print farm:** 3× Bambu Lab X1C ($4,350) with SimplyPrint Print Farm plan ($31.49/month) — produces ~12–24 enclosures/day
- **Integration:** Mosquitto MQTT broker on the RevPi, Grafana dashboard on a dedicated monitor (~$500), 2× Andon stack lights (~$100)
- **Sensors:** Photoelectric sensors for part detection, temperature/humidity monitoring via Industrial Shields ESP32 PLC ($150)
- **Miscellaneous:** DIN rail enclosure, wiring, cables, 24V power supply (~$400)
- **Total: ~$12,000–$14,000**
- **Protocols exposed:** MQTT (printers + RevPi), OPC UA (RevPi), Modbus TCP (MG400 + RevPi), REST API (printers via SimplyPrint)
- **Demo value:** Moderate — the MG400 provides some robotic motion, dashboards show real data, but the line looks partially manual. Best for early-stage demos where the software platform is the focus.

### Mid-range tier (~$30,000): semi-automated with cobot and integrated PLC

This tier adds a credible cobot arm and industrial-grade PLC, creating a genuinely semi-automated line that assembles real products.

- **Conveyor:** 1× Dorner 2200 Series 12″ × 5′ with Element VFD (~$3,500), controlled via PLC analog/digital I/O
- **Robot arm:** 1× UFACTORY xArm 6 (~$9,000) with vacuum gripper (~$500) — 3 kg payload, 6-axis, collision detection, Python SDK, Modbus TCP, ROS2 support
- **PLC:** 1× WAGO PFC200 with 8-ch DI + 4-ch DO + 2-ch AI modules (~$1,500) — native OPC UA server, MQTT client, Docker, Node-RED on-board
- **3D print farm:** 4× Bambu Lab X1C ($5,800) with SimplyPrint ($31.49/month) — produces ~16–32 enclosures/day
- **Integration:** HiveMQ Cloud MQTT broker (free tier), Node-RED on WAGO PFC200 bridging OPC UA ↔ MQTT, Grafana on dedicated mini-PC (~$300)
- **Displays:** 2× large monitors ($1,000) — one showing Somana platform dashboard, one showing Grafana production metrics
- **Sensors:** Photoelectric part-present sensors ($200), barcode/QR scanner for traceability ($300), Andon stack lights ($100)
- **Fixtures:** Custom assembly jig for the xArm station ($500), gripper tooling ($500)
- **Miscellaneous:** DIN rail cabinet, 24V PSU, Ethernet switch, wiring ($800)
- **Total: ~$24,000–$28,000**
- **Protocols exposed:** OPC UA (WAGO → Somana platform), MQTT (all devices via UNS), Modbus TCP (xArm ↔ WAGO, conveyor VFD), REST API (printers, xArm web interface)
- **Demo value:** High — the xArm 6 looks genuinely industrial with its carbon fiber construction and smooth 6-axis motion. The Dorner conveyor reads as professional. Live dashboards showing AI-driven quality metrics complete the picture. Visitors see parts moving on a real conveyor, a real robot arm picking and placing, and Somana's platform orchestrating everything with data flowing in real-time.

### Showcase tier (~$50,000): fully integrated multi-station line

This tier creates a production line that looks and functions like a miniature smart factory, with multiple automated stations, full traceability, and end-to-end platform integration.

- **Conveyor:** 2× Dorner 2200 Series 12″ × 5′ with Element VFDs (~$7,000), forming two connected line segments with a transfer point
- **Robot arm (primary):** 1× Dobot CR3 cobot (~$16,000) — 3 kg payload, 620 mm reach, ±0.02 mm repeatability, ISO safety-certified, teach pendant, Modbus TCP + Python SDK. Handles main assembly: placing PCBAs into enclosures, inserting SBCs
- **Robot arm (secondary):** 1× Dobot MG400 (~$2,890) — handles component feeding and sorting at a secondary station
- **PLC:** 1× WAGO PFC200 with expanded I/O (~$2,000) + 1× Industrial Shields ESP32 PLC ($150) as auxiliary sensor node
- **3D print farm:** 6× Bambu Lab X1C ($8,700) with SimplyPrint Print Farm ($31.49/month) — produces ~24–48 enclosures/day in a dedicated area/room
- **Vision system:** USB industrial camera + OpenCV on edge PC ($500) for quality inspection station, feeding results to Somana's platform via MQTT
- **Integration:** HiveMQ Cloud MQTT broker, Node-RED on WAGO bridging all protocols, Sparkplug B topic structure following ISA-95 hierarchy
- **Displays:** 3× large monitors/TV ($1,500) — Somana platform dashboard, real-time digital twin visualization, production KPI metrics
- **Physical indicators:** 3× Andon stack lights at each station ($150), LED status strips along conveyor ($200)
- **Traceability:** QR code scanner ($300) + RFID reader ($400) for workpiece tracking through stations
- **Fixtures:** Assembly jigs, gripper tooling, cable management ($1,500)
- **fischertechnik Training Factory 4.0** ($8,000, optional) — as a supplementary "miniature twin" demo piece showing the same architecture at educational scale
- **Infrastructure:** Industrial DIN rail cabinet ($300), managed Ethernet switch ($200), 24V power supplies ($200), structured cabling ($500)
- **Total: ~$42,000–$50,000** (without fischertechnik; ~$50,000–$58,000 with it)
- **Protocols exposed:** OPC UA (WAGO ↔ platform, full information model), MQTT with Sparkplug B (unified namespace for all devices), Modbus TCP (CR3, MG400, conveyor VFDs), REST API (print farm via SimplyPrint, xArm web interface, custom endpoints)
- **Demo value:** Exceptional — two robot arms in coordinated motion, parts flowing on professional conveyors between stations, vision-based quality inspection, full traceability with RFID/QR, live dashboards showing AI analytics, and physical Andon lights responding in real-time. A visitor walks in and immediately understands: this is a real smart factory, and Somana's platform is running it.

### What each tier proves to investors

The **Starter tier** proves the data architecture works — every device publishes to a unified namespace, and Somana's platform consumes and acts on that data. The **Mid-range tier** proves the platform can orchestrate real automation — a cobot arm takes instructions from the AI platform and performs physical assembly. The **Showcase tier** proves the platform can manage a complete production workflow — from dispatching print jobs through multi-station assembly to quality inspection and traceability — exactly what a manufacturing customer would need.

---

## Conclusion

The most effective path for Somana is to **start at the Mid-range tier (~$28K) and grow toward Showcase**. The WAGO PFC200 + UFACTORY xArm 6 + Dorner conveyor combination delivers genuine production capability and strong demo impact, while the MQTT-centric architecture scales cleanly as stations are added. The two decisions with highest leverage are choosing a PLC with native OPC UA and MQTT (WAGO PFC200 or Phoenix PLCnext — avoid Allen-Bradley for this use case) and selecting a robot arm with both production utility and visual impact (the xArm 6 at $9K or Dobot CR3 at $16K, depending on budget). The 3D print farm should live in a separate room due to noise, connected to the Unified Namespace via SimplyPrint's API or Bambu's native MQTT. Every component in this reference exposes data interfaces that Somana's platform can consume — which means every demo isn't just a demo. It's a production line building real products while simultaneously proving the platform works.