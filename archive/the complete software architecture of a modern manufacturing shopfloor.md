# The complete software architecture of a modern manufacturing shopfloor

A modern factory runs on **nine distinct software layers** stretching from embedded firmware on sensors to cloud-based AI platforms — all interconnected through an evolving web of industrial protocols. The traditional ISA-95 "Purdue Model" pyramid that defined this architecture for three decades is now being disrupted by unified namespace concepts, MQTT-based pub/sub architectures, and edge computing platforms that flatten hierarchical data flows. Yet in real factories today, the pyramid persists as the organizational backbone — even as Industry 4.0 technologies punch holes through its rigid layers. What follows is a comprehensive, layer-by-layer breakdown of every software system, protocol, and integration pattern actually running on shopfloors in 2025–2026, designed to serve as the blueprint for a complete architecture diagram.

---

## Level 0–1: Firmware and embedded software on physical equipment

The foundation of every factory is real-time embedded software running on controllers, drives, sensors, and machines. These systems operate on deterministic cycles measured in microseconds to milliseconds, and they are the last line of defense for safety.

**Programmable Logic Controllers** form the nervous system. Siemens S7-1500 runs a proprietary RTOS evolved from RMOS, programmed through TIA Portal. Allen-Bradley ControlLogix and CompactLogix run **VxWorks RTOS** by Wind River, programmed via Studio 5000 Logix Designer — the CompactLogix 5480 uses a dual-core Intel Atom that can host Windows alongside the RTOS. Beckhoff TwinCAT 3 takes a radically different approach: a soft PLC running on standard Windows PCs with a real-time extension that dedicates CPU cores to deterministic control tasks, programmed inside Microsoft Visual Studio. Mitsubishi's MELSEC iQ-R uses GX Works3, Omron's NJ/NX series uses Sysmac Studio, Schneider's Modicon M580 runs EcoStruxure Control Expert, and ABB's AC500 uses Automation Builder (CODESYS-based). **CODESYS** itself deserves special mention as the vendor-independent IEC 61131-3 runtime used by over 400 device manufacturers including WAGO, Festo, and Bosch Rexroth.

**CNC controllers** run their own specialized firmware. FANUC dominates globally with **50–60% market share** — the Series 30i/31i/32i-MODEL B executes G-code with proprietary Macro B for parametric programming. Siemens SINUMERIK 840D sl holds 20–25% share and integrates directly into TIA Portal. Heidenhain TNC 640 excels in 5-axis mold and die work with its unique "Klartext" conversational programming. Mazak's MAZATROL SmoothAi embeds AI-driven tool wear prediction directly in the controller.

**Robot controllers** each have proprietary languages: FANUC's R-30iB Plus uses TP (Teach Pendant) programs and KAREL (Pascal-like); ABB's OmniCore uses RAPID; KUKA's KRC5 (Windows-based PC) uses KRL; Universal Robots runs Linux with URScript (Python-like) and a graphical drag-and-drop interface requiring no code.

**Variable frequency drives and servos** run dedicated firmware for motor control algorithms. Siemens SINAMICS spans from the V20 micro-drive to the S120 multi-axis servo system, configured via StartDrive in TIA Portal. ABB's ACS880 runs proprietary **Direct Torque Control (DTC)**. Rockwell's PowerFlex 755TS embeds FactoryTalk Analytics GuardianAI for predictive maintenance directly in drive firmware. Modern drives universally support Safe Torque Off (STO) and integrated web servers for remote diagnostics.

At the lowest level, **IO-Link** (IEC 61131-9) provides smart sensor connectivity — a point-to-point serial standard using standard 3-wire M12 cables that carries process data, device parameters, and event data bidirectionally. IFM, Balluff, SICK, and Turck lead the IO-Link sensor ecosystem. IO-Link masters from Siemens, Beckhoff, and Rockwell bridge these sensors to industrial Ethernet networks.

---

## Fieldbus protocols: how the physical layer communicates

The device level communicates through a fragmented landscape of industrial protocols, each tied to a vendor ecosystem but converging toward Ethernet-based standards.

**PROFINET** (Siemens ecosystem, 30+ million nodes installed) operates in three conformance classes: RT delivers software-based 1–10 ms cycles on standard Ethernet hardware; IRT uses specialized ASICs for hardware-assisted cycles down to **31.25 µs** for motion synchronization; NRT handles standard TCP/IP configuration traffic. **EtherNet/IP** (Rockwell ecosystem, >40% North American market) uses the Common Industrial Protocol (CIP) over standard TCP/UDP — fully routable, requiring no special hardware, with 1–10 ms typical cycle times. **EtherCAT** (Beckhoff-originated) achieves the highest performance: sub-microsecond jitter and sub-100 µs cycle times using a "processing on the fly" architecture where a single Ethernet frame passes sequentially through all slave devices. It dominates packaging, semiconductor, and high-speed motion applications.

**Modbus TCP/RTU** remains ubiquitous despite being the oldest open protocol — no authentication, no encryption, minimal overhead, but universal support across virtually all devices. **PROFIBUS** (50+ million devices installed) persists in process industries, slowly migrating to PROFINET. **CC-Link IE TSN** dominates Asia-Pacific markets, especially Japanese automotive. **HART** superimposes a digital FSK signal on the 4–20 mA analog signal used by 40+ million process instruments.

**TSN (Time-Sensitive Networking)** is the convergence play: IEEE 802.1 standards adding determinism to standard Ethernet. Silicon is available from Renesas, Intel, TI, and NXP. CC-Link IE TSN has the most commercial deployment; PROFINET over TSN and **OPC UA over TSN** remain in pilot/early deployment. OPC UA Pub/Sub over TSN with Gigabit Ethernet can theoretically outperform existing 100 Mbit industrial Ethernet by **~18×**, but full convergence will take several more years.

---

## Level 2: SCADA, DCS, HMI, and the control layer

Supervisory systems sit above individual controllers, providing visualization, alarm management, and higher-level coordination.

**SCADA platforms** vary dramatically in architecture. **Ignition** by Inductive Automation has disrupted the market with unlimited tag/client licensing at ~$7,500/server, Java-based architecture, HTML5 web clients (Perspective module), and native OPC UA and MQTT support — trusted by **54% of Fortune 100 companies**. AVEVA InTouch (the world's most widely deployed HMI for 30+ years) and System Platform provide enterprise SCADA with object-oriented ArchestrA technology. Siemens WinCC Unified brings HTML5 web-based visualization integrated into TIA Portal with shared PLC tag databases — eliminating double-engineering. Rockwell FactoryTalk View SE and its modern successor FactoryTalk Optix (HTML5, Git version control, native MQTT) dominate Allen-Bradley environments.

**DCS (Distributed Control Systems)** differ architecturally from PLC+SCADA: they are server-centric with integrated, vendor-proprietary hardware and software from field level to operator interface. Honeywell Experion PKS uses C300 controllers with fault-tolerant Ethernet and universal I/O. ABB Ability 800xA monitors **50+ million tags across 10,000+ installations** in 100+ countries. Emerson DeltaV pioneered electronic marshalling with CHARMs modules that accept any I/O type in any slot. Yokogawa CENTUM VP is legendary for reliability — one power plant reported **8 years with zero hardware failures**. Siemens PCS neo represents the next generation: web-based HTML5 engineering with collaborative multi-user design.

The DCS/PLC boundary is blurring. Modern PLCs offer redundancy and hot-swap capabilities; DCS vendors offer smaller-footprint solutions like ABB Freelance. The choice typically reduces to: continuous process control (DCS preferred) versus discrete/batch manufacturing (PLC+SCADA preferred).

**PLC programming** follows IEC 61131-3, whose 4th edition was published May 2025. Five languages are standardized: **Ladder Diagram** (most widely used, especially by maintenance electricians), **Structured Text** (Pascal/C-like, growing rapidly as IT-trained engineers enter automation), **Function Block Diagram** (dominant for PID loops and process control), **Sequential Function Chart** (batch processing), and Instruction List (deprecated). Object-oriented extensions with classes, methods, and interfaces are increasingly supported across TIA Portal, Studio 5000, TwinCAT XAE, and CODESYS.

**Safety systems** run alongside standard control. Siemens S7-1500F, Rockwell GuardLogix, Pilz PSSuniversal, and Beckhoff TwinSAFE all provide SIL 2–3 / PLd–PLe certified safety control. Safety protocols — **PROFIsafe** over PROFINET, **CIP Safety** over EtherNet/IP, **FSoE** over EtherCAT — use the "black channel" principle, encapsulating safety data within standard protocol frames. Every modern drive supports STO (Safe Torque Off) as a baseline, with optional SS1, SLS, SOS, and other safety functions controlled via safety networks.

---

## Level 2.5–3: Line controllers, cell coordination, and recipe management

Between individual machine controllers and plant-wide MES sits the line/cell level — often the least standardized and most varied layer in practice.

**Cell controllers** manage groups of machines within a manufacturing cell, coordinating equipment modules, sequencing operations, and managing material flow. In modern implementations, these are often edge computing nodes running MES micro-services locally rather than dedicated standalone systems. They handle local scheduling, buffer management between stations, and tool coordination within a cell.

**Recipe management** follows ISA-88 (S88), which separates WHAT to make (recipes/procedures) from HOW to make it (equipment/control modules). The physical model hierarchy runs Enterprise → Site → Area → Process Cell → Unit → Equipment Module → Control Module. Four recipe types cascade: General (site-independent, from R&D) → Site → Master (approved for production) → Control (actual execution copy). The procedural model decomposes into Procedure → Unit Procedure → Operation → Phase, where **phases are the only executable steps**. This standard is critical in pharma (electronic batch records under 21 CFR Part 11), food and beverage, and specialty chemicals.

**Andon systems**, originating from Toyota's Jidoka principle, have evolved from physical pull cords to IoT-connected digital alert systems integrated with MES. When triggered, modern Andon automatically associates product reference, machine parameters, and maintenance history, routing escalation alerts to correct teams with logged response times.

**AGV/AMR coordination** integrates with MES and warehouse management. MES triggers transport requests when operations complete or materials are needed; fleet management software optimizes routes across multiple vehicles. The distinction matters: AGVs follow fixed paths (magnetic tape, QR codes) while AMRs use SLAM-based navigation for dynamic path planning.

**Changeover management** applies SMED (Single-Minute Exchange of Die) principles within MES. Recipe-driven changeovers push new parameters to equipment via S88 recipes, digital work instructions guide operators, and scheduling algorithms group similar products to minimize total changeover time.

---

## Level 3: MES bridges the shopfloor to the enterprise

The Manufacturing Execution System is the operational backbone that connects real-time production to business planning. MESA International defined **11 core MES functions** in 1997: operations scheduling, resource allocation, dispatching, document control, product tracking/genealogy, performance analysis, labor management, maintenance management, process management, quality management, and data collection. These functions map directly to ISA-95's four Level 3 activity domains: production, quality, maintenance, and inventory operations management.

The MES market reached **$15–17 billion in 2025** and is projected to grow to $25–34 billion by 2030–2034. The competitive landscape includes:

- **Siemens Opcenter** (formerly SIMATIC IT/Camstar): Enterprise-grade, containerized/Kubernetes-ready, deep Teamcenter PLM integration. Gartner and IDC Leader. Opcenter X offers SaaS. Dominant in automotive, aerospace, pharma, electronics, semiconductors.
- **Rockwell Plex + FactoryTalk MES**: Plex is cloud-native multi-tenant SaaS on Azure (acquired 2021 for $2.22B), combining ERP+MES+Quality. FactoryTalk MES is on-prem, highly customizable. Being harmonized into a hybrid ecosystem.
- **AVEVA MES**: Hybrid cloud architecture with real-time execution on-edge and analytics in cloud. Strong PI System historian integration. Process industry strength.
- **SAP Digital Manufacturing**: Cloud-native on SAP BTP, deep S/4HANA integration. Best for SAP-ecosystem enterprises.
- **Dassault DELMIA Apriso**: Part of 3DEXPERIENCE platform, strong PLM integration, global multi-site operations.
- **Critical Manufacturing**: Purpose-built for complex high-tech discrete manufacturing. Gartner Leader three consecutive years. Used by Philips for semiconductor front-end operations.
- **GE Vernova Proficy**: The only MES supporting process, discrete, AND mixed-mode from a single application. 20,000+ customers over 25+ years.
- **Ignition + Sepasoft modules**: Unique per-server licensing model ($2,750–$31,500 per module). OEE Downtime, Batch Procedure (ISA-88), Track & Trace, SPC modules. Massive integrator ecosystem.
- **MPDV HYDRA X**: 1,750+ installations, 1.4M+ daily users, strong in German Mittelstand manufacturing.
- **Aegis FactoryLogix**: Native 3D CAD backbone for electronics assembly with SMT line integration.

**OEE (Overall Equipment Effectiveness)** — calculated as Availability × Performance × Quality — is the universal MES metric. **85% OEE** is world-class for discrete manufacturers; **60%** is a typical starting point. MES auto-collects machine states, cycle times, and production counts from PLCs and sensors, providing real-time dashboards per line/cell/machine.

**Genealogy and traceability** tracks the complete biography of every product: serial/lot numbers, material consumption per operation, equipment used, operator identity, process parameters, quality results, and rework/scrap disposition. This is regulatory-mandatory in pharma (FDA 21 CFR Part 11), food (FSMA), medical devices (Part 820), and automotive (IATF 16949).

The dominant architectural trend is **hybrid cloud MES**: real-time execution stays on-premise (millisecond latency requirements) while analytics, long-term storage, and multi-site aggregation move to cloud. Plex, SAP DMCe, Siemens Opcenter X, and Critical Manufacturing all offer cloud-native deployment, but concerns about latency, cybersecurity, and business continuity keep critical execution local.

---

## The historian and time-series data layer

Process historians are specialized databases purpose-built for write-heavy, append-only workloads from thousands of sensors generating millions of data points per second. They differ fundamentally from relational databases: optimized for time-range queries, extreme compression, and decades of retention.

**AVEVA PI System** (formerly OSIsoft PI) is the industry gold standard, used by **20,000+ companies**. Its architecture layers include PI Connectors (225+ native protocol interfaces), PI Data Archive (core time-series store using PI Points/tags), PI Asset Framework (hierarchical metadata model for contextualization), and PI Vision (web-based dashboards). PI uses **Swinging Door Trending** compression: an algorithm maintaining an error band around the data trend line, recording only points where the slope changes beyond tolerance — achieving 10:1 to 100:1 compression on process values. AVEVA Historian (formerly Wonderware) uses proprietary "history block" technology capturing data hundreds of times faster than standard RDBMS. GE Proficy Historian, Honeywell Uniformance PHD, and AspenTech InfoPlus.21 round out the established vendor landscape.

Modern open-source alternatives are gaining ground. **InfluxDB 3.0** (rewritten in Rust on Apache Arrow/Parquet) is popular among OT engineers for its interactive feel. **TimescaleDB** extends PostgreSQL with hypertable auto-partitioning and ~90% compression — the United Manufacturing Hub uses it as its historian backend. **TDengine** claims 23.7k GitHub stars and 730k+ running instances with 10× faster writes than general-purpose databases at one-third the cost of PI System; Siemens' SIMICAS platform replaced Flink+Kafka+Redis with TDengine.

A typical mid-sized plant runs **50,000–500,000 tags**; large refineries exceed 1 million. Data collection rates range from millisecond-level for motion control to 1-second for process monitoring to 60-second for utilities. Data flows from sensors through PLCs via OPC DA (legacy, still prevalent) or OPC UA (modern) to historian connectors. Contextualization follows the ISA-95 equipment hierarchy: Enterprise → Site → Area → Process Cell → Unit → Equipment Module → Control Module.

The data architecture increasingly features tiered storage: historians handle hot-tier real-time data, Apache Kafka streams to both historians and data lakes, and **Databricks Lakehouse** (adopted by DuPont, Honeywell, Rolls-Royce, Shell) provides cold-tier storage for ML/AI using the medallion architecture (Bronze → Silver → Gold).

---

## Integration and middleware: OPC UA, MQTT, and the unified namespace

The integration layer is where the most dramatic architectural transformation is happening, as decades-old point-to-point integrations give way to publish/subscribe patterns.

**OPC UA** (Unified Architecture) is the platform-independent successor to OPC Classic, exposing an object-oriented address space where clients browse, read, write, and subscribe to nodes. **60+ companion specifications** provide domain-specific data models (VDMA robot spec, PackML for packaging, etc.) ensuring machines describe themselves consistently regardless of manufacturer. **Kepware KEPServerEX** (PTC subsidiary) leads the market with 150+ industrial protocol drivers; alternatives include Matrikon, Prosys, and the open-source open62541. **OPC UA FX** (Field eXchange) extends OPC UA down to the field level with real-time deterministic communication — at Hannover Messe 2025, **27+ vendors demonstrated** live controller-to-controller communication with 37 live devices publishing OPC UA over MQTT to cloud dashboards.

**MQTT** provides lightweight pub/sub messaging ideal for distributing normalized events at scale. Enterprise brokers include **HiveMQ** (leading industrial MQTT vendor), Eclipse Mosquitto (lightweight/open-source), and EMQX (strong in Asia-Pacific). The practical pattern emerging in real factories uses **OPC UA for the "first mile"** (machine connectivity with rich semantic models) and **MQTT for distribution** (plant, enterprise, and cloud scale with 80–95% less bandwidth than polling protocols).

**Sparkplug B** (Eclipse Foundation specification, created by Cirrus Link Solutions) transforms raw MQTT into an industrial-grade protocol by adding:

- **Standardized topic namespace**: `spBv1.0/{group_id}/{message_type}/{edge_node_id}/{device_id}`
- **Birth/death certificates**: NBIRTH/DBIRTH announce device capabilities and available metrics on connect; NDEATH/DDEATH (via MQTT Last Will and Testament) notify of disconnection — providing continuous state awareness
- **Google Protocol Buffers** for compact, strongly-typed payload encoding
- **Auto-discovery**: Applications learn all available metrics without pre-configuration
- **Report by exception**: Only changed values transmit, achieving up to 98% bandwidth reduction

The **Unified Namespace (UNS)**, coined by **Walker Reynolds** of 4.0 Solutions, represents the most significant architectural paradigm shift. UNS is a real-time, single source of truth organized by ISA-95 hierarchy (Enterprise/Site/Area/Line/Cell/Device) using an MQTT broker as a central hub. Instead of the traditional pyramid where data flows sequentially L0→L1→L2→L3→L4, any system at any level publishes directly to the broker, and any consumer subscribes to what it needs — replacing N×N point-to-point integrations with a single connection per system. Apache Kafka often complements MQTT: MQTT for OT data collection, Kafka for enterprise integration and stream processing to data lakehouses.

**Industrial IoT platforms** bridge the gap between OT and cloud. AWS IoT SiteWise collects data from OPC UA sources via edge gateways with three storage tiers. Siemens Industrial Edge runs Docker-based apps on industrial PCs alongside PLCs. PTC ThingWorx connects to 150+ protocols via its Kepware integration. Litmus Edge provides **275+ native industrial protocol drivers** and integrates with both AWS and Azure. The industrial edge computing market reached **$56.46 billion in 2025**, with manufacturing holding 42.72% of spending.

---

## Level 4: ERP systems and bidirectional data flows

Enterprise Resource Planning sits at the top of the operational hierarchy, managing business-level planning that feeds manufacturing execution.

**SAP S/4HANA** dominates large enterprise manufacturing (automotive, pharma, chemicals) with PP (Production Planning), MM (Materials Management), and QM (Quality Management) modules running on HANA in-memory database for real-time MRP runs. Oracle Cloud ERP and JD Edwards serve mid-to-large manufacturers. Microsoft Dynamics 365 Supply Chain Management integrates IoT and AI tools. Mid-market leaders include Infor CloudSuite Industrial, Epicor Kinetic, and IFS Applications.

Data flows bidirectionally across the Level 3–4 boundary. **Downward** from ERP to MES: production orders, bills of materials, routings, material master data, quality inspection plans, personnel assignments. **Upward** from MES to ERP: production confirmations, actual material consumption, quality results, labor/machine hours, scrap reports, equipment status. ISA-95 Part 5 formalizes these transactions.

SAP integration methods illustrate the spectrum: **IDocs** provide asynchronous batch-oriented messaging (minutes to hours), **BAPIs/RFC** enable synchronous real-time transactions, and **OData/REST APIs** represent the strategic direction for S/4HANA Cloud. SAP MII (Manufacturing Integration and Intelligence) acts as middleware bridging SAP ERP with shopfloor systems via Plant Connectivity (PCo) for OPC/OPC-UA data. The **2025 revision of ISA-95** (now 8 parts, 1,036 pages) modernizes the standard to accommodate cloud-native systems and unified namespace architectures — **92.9% of manufacturers report using ISA-95** for enterprise-control integration.

The planning hierarchy cascades: S&OP (12–24 months) → MPS (3–12 months) → MRP (weeks–months, exploding BOMs to calculate component demand) → detailed finite capacity scheduling (days–hours, using APS systems like Opcenter APS, PlanetTogether, or frePPLe).

---

## PLM, digital twins, and how engineering feeds production

Product Lifecycle Management connects engineering intent to manufacturing reality. Siemens Teamcenter (market leader), PTC Windchill, and Dassault ENOVIA manage the engineering-to-manufacturing data pipeline. The critical translation point is **eBOM to mBOM conversion**: the engineering BOM (as designed) must transform into a manufacturing BOM (as built) that adds packaging, consumables, and restructured sub-assemblies. No single standard approach exists — Siemens Teamcenter-SAP partnerships and PTC Windchill's BOM transformation with equivalence links represent leading solutions.

CAD/CAM integration transforms 3D models into CNC toolpaths through post-processors specific to each controller (Fanuc, Siemens, Heidenhain). Leading CAM tools include Siemens NX CAM, Mastercam (most widely used standalone), and Autodesk Fusion CAM. **Model-Based Definition** embeds all specifications directly in 3D models per ASME Y14.41, enabling paperless manufacturing where PMI annotations travel through PLM to MES to the shopfloor.

**Digital twins** exist on a spectrum. Offline plant simulation (Siemens Plant Simulation, FlexSim, Simio, Visual Components) is the most commonly deployed form — discrete-event simulation for material flow, throughput analysis, and bottleneck identification. Virtual commissioning tests PLC programs against virtual plant models before installation. True **real-time connected digital twins** remain limited to advanced manufacturers and high-value applications; most factories use offline simulation while marketing materials imply otherwise. Gartner predicts >80% of PLM vendors will incorporate AI capabilities by 2026.

---

## Where AI and analytics fit in the production stack

AI/ML in manufacturing has moved beyond pilot phase for several established use cases while remaining aspirational for others.

**Predictive maintenance** is production-ready at leading manufacturers. BMW Regensburg uses ML heat maps for fault pattern visualization, saving over **500 minutes of disruption per year** per plant. Toyota North America deploys IBM Maximo with AI-driven predictive solutions. Augury's proprietary AI trains on millions of hours of machine vibration, temperature, and ultrasonic data for detailed failure mode classification. The global predictive maintenance market reached **$12.7 billion in 2024**, projected to hit $80.6 billion by 2033.

**Computer vision inspection** is fully production-deployed. Cognex leads with the In-Sight 3800 inspecting **1,200 parts/minute** using hybrid AI (edge learning needing only 5–10 training images plus deep learning for complex defects). Edge inference dominates because millisecond latency requirements make cloud impractical for in-line inspection. Cameras integrate with PLCs and MES for automated pass/fail routing and quality data logging.

**Generative AI copilots** represent the 2025 inflection point. Siemens Industrial Copilot generates SCL code for PLCs at thyssenkrupp and translates machine error codes to natural language at Siemens' Erlangen factory. Rockwell's Plex Copilot, Tulip Copilot, and SymphonyAI's specialized manufacturing LLMs enable natural language querying of production data. Most implementations use **RAG (Retrieval-Augmented Generation)** — connecting base LLMs to internal manuals, CMMS data, and quality records rather than fine-tuning, to reduce hallucination and protect data privacy.

**Data science platforms** serve different personas: Seeq and TrendMiner provide self-service analytics for process engineers on time-series data; Databricks provides lakehouse architecture for data scientists; Palantir Foundry operationalizes AI with ontology-driven workflows. Many enterprises deploy all three complementarily.

---

## The ISA-95 pyramid meets the unified namespace: architectural evolution

The **Purdue Enterprise Reference Architecture** has organized manufacturing IT/OT since the 1990s. Its five levels (physical process → intelligent devices → supervisory control → manufacturing operations → business logistics) defined clear boundaries, communication rules, and security zones. ISA-95 formalized the Level 3–4 interface with standardized object models and B2MML XML schemas (now also available as JSON, maintained royalty-free by MESA International on GitHub).

**IEC 62443** provides the cybersecurity framework, using a zones-and-conduits model more flexible than rigid Purdue level-based segmentation. Security levels range from SL 1 (casual misuse protection) to SL 4 (nation-state defense). The Industrial DMZ sits at Level 3.5 between enterprise and control networks, implemented with dual firewalls where MQTT brokers, data diodes, and historian mirrors typically reside.

**RAMI 4.0** (DIN SPEC 91345) extends the Purdue hierarchy in three dimensions: hierarchy levels (adding "Product" below and "Connected World" above ISA-95), six IT layers (Asset through Business), and a lifecycle dimension distinguishing Type (design) from Instance (manufactured copy). Critically, it enables **network-structured communication** where any component at any level can connect to any other level.

In practice, the flattening is happening through multiple patterns. Edge computing platforms collect Level 0–3 data while connecting directly to Level 4–5 cloud services. Sensors with 4G/5G connectivity can bypass the entire pyramid. The NAMUR Open Architecture creates a **parallel monitoring channel** alongside the automation pyramid without replacing it. The UNS places a central MQTT broker at the heart, enabling any-to-any data flow while maintaining logical ISA-95 organization.

Industry-specific implementations vary dramatically. **Automotive** plants (24.3% of MES revenue) focus on high-volume assembly, JIT delivery sequencing, and EV battery genealogy. **Pharmaceutical** operations require ISA-88 batch management, electronic batch records, and extreme regulatory compliance — MES is near-mandatory. **Semiconductor** fabs track at wafer/lot level with SEMI E10 standards complementing ISA-95. **Oil and gas** facilities use DCS-centric architectures with Safety Instrumented Systems per IEC 61511. **Food and beverage** operations emphasize allergen tracking, shelf-life management, and FSMA compliance.

The reality gap between vision and practice remains vast. The average U.S. factory is **25+ years old**. Greenfield smart factory construction costs **$1–1.3 billion** in automotive — roughly 200× the cost of brownfield upgrades. Over **70% of companies remain stuck in "pilot purgatory"** according to the WEF/McKinsey Global Lighthouse Network, with only ~103 fully transformed facilities identified globally. Practical brownfield approaches include gateway hardware bridging legacy protocols, IoT-ready I/O module retrofits, wireless sensor overlays, and the UNS pattern itself — which connects both legacy systems (via protocol gateways) and modern systems through a single MQTT broker without disrupting existing architecture.

---

## Conclusion: the emerging consensus architecture

The real-world architecture emerging in progressive factories follows a clear pipeline: **sensors and PLCs** communicate via native fieldbus protocols (PROFINET, EtherNet/IP, EtherCAT) → **edge gateways** (Kepware, Litmus Edge, Siemens Industrial Edge) translate to OPC UA → **MQTT/Sparkplug B edge nodes** publish to an **MQTT broker** (HiveMQ, EMQX) forming the unified namespace → **historians** (PI System, TimescaleDB, TDengine) subscribe for time-series storage → **Apache Kafka** handles enterprise integration and streaming to **data lakehouses** (Databricks) → **MES, ERP, and QMS** subscribe to the UNS or consume via API → **visualization** (PI Vision, Grafana, Power BI) serves operators through executives.

Three insights emerge from this architecture. First, OPC UA and MQTT are not competitors but complementary: OPC UA provides semantic richness at the machine edge while MQTT provides scalable distribution. Second, the ISA-95 model persists not as a rigid data-flow constraint but as the **organizational taxonomy** — even the UNS structures its topic hierarchy using ISA-95 levels. Third, the most significant gap is not technology but integration: the average factory runs equipment spanning three decades of control technology, and the winning architecture is one that accommodates serial Modbus devices alongside cloud-native AI services without requiring a forklift upgrade. The factories succeeding at Industry 4.0 are not replacing the pyramid — they are building bridges through it.