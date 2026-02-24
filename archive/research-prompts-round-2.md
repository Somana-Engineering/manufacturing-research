# Research Prompts — Round 2: Office Assembly Line

The factory vision: 3D print enclosures → conveyor → robot arm → assembly → functional test → packaging. Controlled by PLCs, orchestrated by Somana's platform. Start simple, modularize, make complex.

Primary product: Somana's own branded boarding boxes (edge compute hardware).
Secondary products: Other things to assemble/manufacture that demonstrate versatility.

Run each in a separate Claude session with web search / deep research enabled.

---

## Prompt 1: Desktop-Scale Production Line — Conveyors, Robot Arms, PLCs, and 3D Print Farms

```
<context>
I'm building a small production line in an office environment for a manufacturing technology startup called Somana. The line will primarily assemble electronics products: 3D-printed enclosures + pre-assembled PCBAs + SBCs (Raspberry Pi, Jetson) + peripherals, bolted or clipped together.

The key constraint: this line is ALSO a demo for our AI-powered manufacturing platform product. The equipment we use should be the same kind our customers use (PLCs, robot arms, conveyors) — just at desktop/benchtop scale. Every piece of equipment should expose data interfaces so our platform can integrate, monitor, and optimize.

We want:
- A conveyor belt system (small/desktop scale) to move products between stations
- A robot arm for pick-and-place or assembly tasks
- PLCs to control the conveyor, robot arm, and other stations
- A 3D print farm (multiple printers) for producing enclosures at production volume

The line runs on standard 120V office power. Budget: $15-50K total for automation equipment (not including 3D printers). The aesthetic matters — this needs to look impressive to visitors, investors, and potential customers walking through our office.
</context>

<instructions>
You are a manufacturing automation specialist helping spec a desktop-scale production line that doubles as a product showcase. Find 12-15 high-quality sources covering small-scale industrial automation equipment.

Search systematically:

1. **Desktop/benchtop conveyor systems** — Small conveyor belts suitable for office-scale production. Look for: modular conveyor systems (Dorner, mk North America, FlexLink, Bosch Rexroth small-scale), tabletop conveyors, belt vs roller vs modular chain. Key specs: width (carrying small electronics enclosures ~15-30cm), speed control, length, modularity (add/remove sections), data interfaces (can a PLC control start/stop/speed?). Also look for DIY/maker-scale conveyor projects and kits. Find both industrial-grade small conveyors and educational/maker alternatives.

2. **Desktop robot arms for assembly** — Collaborative robots (cobots) and smaller: Universal Robots (UR3e — smallest), Dobot (CR3, MG400, M1 Pro), Mecademic (Meca500 — ultra-compact industrial), UFACTORY (xArm, Lite 6), Franka Emika (Panda), myCobot (Elephant Robotics). Compare: payload capacity, reach, repeatability, programming interface (teach pendant, Python SDK, ROS), data connectivity (Modbus, EtherNet/IP, MQTT, REST API), price range. Focus on arms that can do simple pick-and-place and assembly tasks (picking up a PCBA, placing it in an enclosure, pressing a clip). We need something that LOOKS industrial but fits on a desk.

3. **Small-scale PLCs and industrial controllers** — PLCs that can orchestrate a small line: Siemens S7-1200 (the industry standard, small form factor), Allen-Bradley Micro800 series, Beckhoff CX series (PC-based), Wago PFC200, Phoenix Contact PLCnext, or even industrial-grade Arduino/ESP32 solutions (like Revolution Pi, industrial shields). Compare: programming environment (Ladder/FBD/ST), I/O count, communication protocols (PROFINET, EtherNet/IP, Modbus TCP, OPC UA, MQTT), expandability, cost. We specifically need PLCs that support OPC UA or MQTT for integration with our platform.

4. **3D print farms for production** — Running multiple 3D printers as a production system, not hobby machines. Look for: print farm management software (Octoprint + fleet plugins, 3DPrinterOS, SimplyPrint, Repetier Server), fleet-optimized printers (Prusa MK4 + Prusa Connect, Bambu Lab X1C + Bambu Handy/Cloud, Raise3D + RaiseCloud, UltiMaker + Digital Factory), production-grade materials for enclosures (ASA, PETG, ABS, nylon). How do companies like Slant 3D, Shapeways, and Xometry run their print operations? What does "production quality" 3D printing look like (vs prototyping)?

5. **Integration and data architecture** — How do you connect all of this? PLC → robot arm → conveyor → 3D printers → central platform. What protocol stack works? (PLC speaks PROFINET/EtherNet/IP, robot speaks Modbus/MQTT, printers speak HTTP/MQTT). Look for case studies of small-scale integrated production cells, especially in educational/training factory contexts (fischertechnik Industry 4.0, Festo Didactic, SMC training systems). These training factories are EXACTLY the architecture we want, just with real production equipment.

6. **Complete small production line examples** — Find examples of companies or labs that have built small, integrated production lines with conveyors + robots + PLCs at benchtop or room scale. Training factories, Industry 4.0 demonstrators, university smart manufacturing labs. What did they buy? What did it cost? How did they integrate it?

For each source, note:
- Specific equipment models and price ranges
- Data connectivity / protocols supported
- Office environment suitability (power, noise, safety, footprint)
- How impressive it would look to a visitor (demo value)
- Whether it's industrial-grade vs educational/maker-grade
</instructions>

<output_format>
Structure as an equipment reference with:
- Brief intro on the "showcase factory" concept — real industrial equipment at desk scale
- Sources grouped by equipment category (conveyors, robot arms, PLCs, print farms, integration, complete lines)
- Each source: title, URL, 2-3 sentence summary, specific models/prices, data connectivity details, office suitability rating (★ to ★★★★★)
- A "recommended configurations" section at the end suggesting 3 tiers:
  - Starter (~$15K): minimal automation, manual assembly with basic conveyor
  - Mid-range (~$30K): robot arm + conveyor + PLC, semi-automated
  - Showcase (~$50K): fully integrated line with multiple stations, impressive to visitors
</output_format>
```

---

## Prompt 2: Assembly Engineering — From Manual Workbench to Automated Cell

```
<context>
I'm setting up assembly operations for electronics products in an office environment. The primary product is an edge computing "boarding box" — a 3D-printed branded enclosure containing a pre-assembled PCBA, an SBC (Raspberry Pi or Jetson module), peripherals (antennas, connectors, cables), bolted or clipped together.

The assembly is NOT soldering or SMT work — the PCBAs arrive fully populated from contract manufacturers. We're doing final mechanical assembly: insert board into case, connect cables, mount peripherals, close enclosure (clips or screws), apply label.

I want to start with a simple manual assembly process and progressively add automation:
- Phase 1: Manual assembly at a well-designed workstation
- Phase 2: Semi-automated with fixtures, poka-yoke, and basic automation
- Phase 3: Robot-assisted assembly with automated testing

The product line will also include simpler products (see prompt 3) to demonstrate manufacturing versatility through product changeovers.

This is for a manufacturing technology startup — the assembly line IS the product demo. How we build things demonstrates what our platform can do.
</context>

<instructions>
You are an assembly process engineer helping design a progressive assembly operation. Find 10-12 sources covering workstation design, fixturing, design for assembly (DFA), and the manual-to-automated progression.

Search systematically:

1. **Assembly workstation design** — Ergonomic workbench layout for electronics assembly. Lighting (LED task lights, magnification), ESD protection (mats, wrist straps, grounding, ionizers), tool organization (shadow boards, 5S principles), bin systems for components (kanban bins, gravity flow racks). Find sources on setting up a professional electronics assembly workstation — not a hobby bench, but not a factory floor either. Think contract manufacturer quality at small scale.

2. **Fixturing and jigs for electronics enclosure assembly** — How to hold a 3D-printed enclosure while inserting PCBAs and connecting peripherals. Nest fixtures, alignment pins, magnetic hold-downs. 3D-printed fixtures (you can print your own jigs on the same printers that make the enclosures). Poka-yoke examples: keyed connectors, asymmetric screw patterns, color-coded cable routing. Find sources on designing assembly fixtures, especially for small-batch electronics products.

3. **Design for Assembly (DFA) principles** — How to design the boarding box enclosure so it's easy to assemble. Snap-fits vs screws vs clips. Minimum part count. Assembly sequence optimization. How DFA principles change when you have a robot arm vs human assembly. Find foundational DFA resources (Boothroyd-Dewhurst method) plus practical guides for electronics enclosure design.

4. **Functional testing of assembled electronics** — Test fixtures ("bed of nails," pogo pin fixtures), automated test equipment (ATE), what to test on an assembled edge compute device (power-on, boot sequence, network connectivity, peripheral detection, thermal performance). How to build a test fixture that verifies a boarding box works before shipping. Find sources on small-batch electronics functional testing — not million-unit ICT, but production-quality testing at low volume.

5. **Manual to automated assembly progression** — Case studies of companies that started with manual assembly and progressively automated. What gets automated first? (Usually testing, then repetitive insertion tasks, then full assembly.) What stays manual longest? (Cable routing, non-standard operations.) How do you justify automation investment at different volumes? Find sources on the economics of progressive automation for electronics assembly.

6. **Assembly line balancing at small scale** — How to balance work across stations when you have 2-5 people and multiple products. Takt time calculation for mixed-model assembly. How to handle product changeovers when switching between boarding box variants or different products entirely. Find practical guides, not just theory.

For each source, note:
- Whether it covers electronics/enclosure assembly specifically (vs general manufacturing)
- Whether it addresses small-batch / low-volume production
- Practical applicability (can you implement this next week vs next year?)
- Whether it discusses the manual → automated progression
</instructions>

<output_format>
Structure as an assembly engineering reference with:
- Brief intro on the "start simple, grow complex" philosophy
- Sources grouped by topic (workstation, fixturing, DFA, testing, automation progression, line balancing)
- Each source: title, URL, 2-3 sentence summary, key practical takeaways, applicability to small-batch electronics (★ to ★★★★★)
- A "progressive automation roadmap" section: what to automate in what order, with estimated volume thresholds for each step
</output_format>
```

---

## Prompt 3: What Else to Manufacture — Products for a Versatile Showcase Factory

```
<context>
I'm running a small production line in an office (3D printers, conveyor belt, robot arm, PLC, assembly stations, test equipment). The primary product is our own branded edge computing hardware ("boarding boxes" — 3D-printed enclosure + PCBA + SBC + peripherals).

But I want 2-3 additional products to manufacture on the same line. The goal is threefold:
1. **Demonstrate versatility** — switching between products shows our AI platform handles product changeovers (scheduling, recipe management, adaptive quality)
2. **Be understandable** — visitors, investors, and customers should immediately grasp what's being made (not just engineers)
3. **Have real commercial value** — not demo props, but products people actually buy

Our equipment: 3D printers (FDM, possibly SLA), a small robot arm, conveyor belt, assembly workstations, functional test equipment, PLCs. Standard office power (120V), two desks of space for the line, plus a 3D printer area.

What I already know from research:
- Customization inverts the small-scale penalty into a premium when products are inherently unique
- Digital inventory (storing designs, not physical stock) makes on-demand production rational at any scale
- The competitive moat is software (design automation, scheduling), not hardware
- Bright Machines does 4-hour new product introduction via software-defined changeover
- Desktop equipment (Bambu, Formlabs, Neoden) now exposes enterprise-grade data through standard IoT protocols

I'm looking for products that use the SAME equipment as the boarding boxes but exercise different manufacturing capabilities. Ideally one product is pure 3D printing (no assembly), one involves mechanical assembly, and one involves electromechanical assembly — covering a range.
</context>

<instructions>
You are a product strategist for a micro-manufacturing operation. Find 10-12 sources covering products that can be manufactured at office scale with 3D printers + assembly stations + basic automation.

Search systematically:

1. **3D-printed products with real commercial value** — Not prototypes, but finished goods people buy. Custom phone cases, desk accessories, organizers, planters, specialized tools, replacement parts, architectural models, jewelry, eyewear frames. Find examples of businesses selling 3D-printed finished products at meaningful margins. What materials do they use? What finishing processes (sanding, painting, vapor smoothing, dyeing)? What volumes make it viable? Look at Etsy sellers, Shapeways merchants, and dedicated 3D-print product companies.

2. **IoT device enclosures as a service** — Companies that 3D-print custom enclosures for other hardware startups' products. This is a natural extension of the boarding box capability. Find: who does this today? What are the margins? How do they handle design iteration with customers? What materials and tolerances do customers expect? Look at Fictiv, Protolabs, Xometry for comparison, but focus on 3D-print-native services.

3. **Kitting and assembly businesses** — Companies that receive components from suppliers and assemble/kit them into finished products. Subscription box assembly, electronics kitting, branded packaging operations. This is the EXACT workflow of the boarding box (receive parts → assemble → package) applied to other products. Find examples at small scale.

4. **Educational and maker kits** — Electronics kits (Arduino starter kits, Raspberry Pi project kits, robotics kits) that someone assembles and packages. These have real market value, exercise the full assembly workflow, and are immediately understandable to visitors. Find examples of small businesses that assemble and sell educational kits. What are the margins? What does the BOM look like?

5. **Contract assembly for hardware startups** — Small-batch contract manufacturing for other startups that need 10-500 units of their product assembled. This is a SERVICE, not a product, but it exercises the exact same factory capabilities. Find: what do hardware startups pay for small-batch assembly? What's the typical BOM? What are the pain points (communication, quality, lead time)?

6. **Products that showcase specific manufacturing capabilities** — What products naturally demonstrate: (a) product changeover / high-mix flexibility, (b) AI-assisted quality control, (c) robot arm dexterity, (d) conveyor-based continuous flow? Think about what would make the most compelling 15-minute factory tour. Find examples of showcase/demo products that manufacturing companies use at trade shows or in demo centers.

For each source, note:
- Specific products and price points mentioned
- Equipment required vs equipment we already have
- Margins and volume economics
- How understandable it is to non-engineers
- How well it demonstrates manufacturing AI capabilities
</instructions>

<output_format>
Structure as a product strategy reference with:
- Brief intro on the "versatile showcase factory" concept — multiple products, same line, different capabilities exercised
- Sources grouped by product category
- Each source: title, URL, 2-3 sentence summary, specific products/prices, equipment overlap with boarding box line, visitor comprehension rating (★ to ★★★★★)
- A "recommended product portfolio" section suggesting 3-4 products that complement the boarding box line, with:
  - What it exercises (different from boarding boxes)
  - Equipment needed (overlap with existing line)
  - Estimated margins and volumes
  - How it fits into a 15-minute factory tour
</output_format>
```
