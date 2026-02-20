# Manufacturing AI Testbed Reading List
## Products & Processes for Studying Factory Physics and Manufacturing AI at Small Scale

---

## 1. Desktop / Benchtop Factory Testbeds

### 1a. fischertechnik Training Factory Industry 4.0
- **URL:** https://www.fischertechnik.de/en/products/industry-and-universities/training-models/554868-training-factory-industry-4-0-24v
- **Summary:** A tabletop-scale modular factory simulation with storage/retrieval station, vacuum gripper robot, high-bay warehouse, multi-processing station with oven, and sorting line with color detection. PLC-controlled (Siemens S7 compatible), communicates via MQTT and OPC UA through a Raspberry Pi IoT gateway, with NFC workpiece tracking and cloud dashboard. Used by universities (e.g., Luleå University of Technology), companies like Accso for anomaly detection research, and pmOne as a full IoT testbed on Azure.
- **Manufacturing phenomena:** Multi-step discrete assembly, workpiece routing/scheduling, IoT data collection, NFC-based traceability, sorting (color variant detection), cloud-based process monitoring
- **Office-scale feasibility:** ★★★★★ — Purpose-built for desktops (~1140×740mm). ~$5-8K. Runs on 9V or 24V. No safety concerns. Includes ready-made PLC programs and cloud connectivity.

### 1b. AMT Testbed (PocketNC + Robot Tending Cell)
- **URL:** https://www.amtonline.org/article/testbeds-for-smarter-manufacturing
- **Summary:** The Association for Manufacturing Technology operates a testbed featuring a PocketNC v2 desktop 5-axis CNC mill with a robot-tending cell. Data collection uses MTConnect with secure remote access. Active research covers MTConnect/OPC UA/MQTT standards harmonization and remote access security for industrial IoT.
- **Manufacturing phenomena:** CNC machining variability, robot-machine coordination, data standards interoperability, tool health monitoring
- **Office-scale feasibility:** ★★★★☆ — PocketNC is desk-sized with enclosure (~$5K). Robot tending adds complexity but is documented as a replicable setup.

### 1c. NIST Smart Manufacturing Systems (SMS) Test Bed
- **URL:** https://www.nist.gov/laboratories/tools-instruments/smart-manufacturing-systems-sms-test-bed
- **Related report:** https://www.nist.gov/publications/connecting-deploying-and-using-smart-manufacturing-systems-test-bed
- **Summary:** NIST's flagship manufacturing testbed connects 12 machine tools (CNC milling, turning, CMM) via MTConnect for lifecycle data research. Their published report provides detailed guidance for replicating the testbed in other environments, covering protocols, information systems, and automation. The CAx Lab connects CAD → CAM → inspection creating a "digital thread."
- **Manufacturing phenomena:** Digital thread across design-fabrication-inspection, MTConnect data collection, equipment health monitoring (IMU-based degradation detection), process lifecycle data management
- **Office-scale feasibility:** ★★☆☆☆ — Full-scale shop, but the *methodology and data architecture* are replicable at any scale. The published replication guide is the real asset. Data from the testbed is publicly available for research.

### 1d. Purdue Smart Learning Factory
- **URL:** https://polytechnic.purdue.edu/facilities/smart-learning-factory
- **Summary:** A full microcosm of modern manufacturing with smart warehousing, collaborative human-robot assembly, IoT monitoring, and cloud AI/ML optimization. Uses FlexWare SparkMES for production execution, Addverb warehouse management, Microsoft Azure for analytics, and Fortinet for OT cybersecurity. A digital twin is under development as a virtual sandbox.
- **Manufacturing phenomena:** End-to-end production flow (raw material → assembly → finished goods), human-robot collaboration, MES-level scheduling, OT/IT convergence, cybersecurity
- **Office-scale feasibility:** ★★☆☆☆ — Full facility, but the *architecture* (MES + IoT + cloud ML + digital twin) is a blueprint for designing smaller testbeds.

---

## 2. Electronics Assembly (SMT / PCB)

### 2a. XSCAN: Solder Joint Defect Prediction from Solder Paste Inspection Data
- **URL:** https://www.sciencedirect.com/science/article/abs/pii/S0278612524002115
- **Summary:** Addresses the finding that >50% of SMT defects originate at the solder paste printing stage. Develops an explainable ML framework correlating solder paste printing quality indicators (volume, height, area) to downstream solder joint defects after reflow. Tested on real-world chip resistor (R0603M) datasets with SAC305 paste. Tackles the critical class-imbalance problem (defects are rare) with a novel decision-tree-based augmentation strategy that defines "safe" and "high-risk" zones in the printing feature space.
- **Manufacturing phenomena:** Multi-step process chain (print → place → reflow), quality prediction across process stages, class-imbalanced data, rolled throughput yield, process parameter optimization
- **Office-scale feasibility:** ★★★★☆ — Benchtop stencil printer + pick-and-place + desktop reflow oven is achievable for ~$10-15K used equipment. SPI measurement is the key data source.

### 2b. End-to-End Deep Learning for PCB Manufacturing Defect Classification (Bhattacharya & Cloutier, 2022)
- **URL:** https://www.nature.com/articles/s41598-022-16302-3
- **Summary:** Reports a complete deep learning framework using single-step object detection to classify six types of bare PCB manufacturing defects (missing holes, mouse bites, open circuits, shorts, spurs, spurious copper). Achieves 98.1% mAP on the open-source Peking University HRI-PCB dataset, outperforming Faster R-CNN and YOLO V5 while using 3× fewer parameters. Directly applicable to inline AOI replacement.
- **Manufacturing phenomena:** Visual quality inspection, defect classification, PCB etching/plating process variability, zero-defect manufacturing
- **Office-scale feasibility:** ★★★★★ — Uses public dataset; no physical equipment needed for the ML work. For physical replication, desktop PCB etching or a small CNC mill + camera is sufficient.

### 2c. ML-Based Quality Prediction for Solder Paste Dispensing (IEEE, 2022)
- **URL:** https://ieeexplore.ieee.org/document/10013210/
- **Summary:** Investigates data-driven quality prediction for solder paste *dispensing* (vs. stencil printing) — relevant for 3D circuit carriers and small-batch production. Uses Design of Experiments to generate a dataset, then applies AutoML to predict depot height, area, and volume from process parameters and prior dispensing quality. Highlights dispensing as a more flexible, small-scale-friendly alternative to stencil printing.
- **Manufacturing phenomena:** Small-batch process variability, process parameter sensitivity, sequential process dependencies (previous depot affects next), DoE methodology
- **Office-scale feasibility:** ★★★★★ — Solder paste dispensing is inherently small-scale. Desktop dispenser + SPI or microscope measurement.

---

## 3. Injection Molding

### 3a. ML-Based Process Control for Injection Molding of Recycled Polypropylene
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC11991421/
- **Summary:** Develops a closed-loop ML process control system specifically for dealing with *material variability* — the core challenge when using five different blends of recycled polypropylene. ANNs, linear regression, and polynomial regression model relationships between material properties (melt flow rate) and required process parameters. Demonstrates that ML can adaptively predict optimal settings as material batches change, tested on 80 experimental samples across 4 MFR levels.
- **Manufacturing phenomena:** Batch-to-batch material variability, adaptive process control, changeover between material variants, dimensional quality (weight, shrinkage), process-property relationships
- **Office-scale feasibility:** ★★★☆☆ — Benchtop injection molding machines exist (~$2-5K for small units like the Galomb Model-B100), but safety around molten plastic requires care. The *data and methodology* are the primary value.

### 3b. Transfer Learning for Mold Transfer Between Production Sites
- **URL:** https://www.sciencedirect.com/science/article/abs/pii/S1526612522009197
- **Summary:** Tackles the real-world problem of optimizing surface quality when a mold is transferred between production sites (different machines, ambient conditions). Pre-trains multi-task ANNs for gloss and defect prediction at the original site, then transfers the model to the new site with minimal additional data. Demonstrates that transfer learning reduces the data requirement for re-optimization at the new site.
- **Manufacturing phenomena:** Equipment variability (same mold, different machines), changeover/transfer optimization, surface quality (gloss, visible defects), multi-objective optimization
- **Office-scale feasibility:** ★★☆☆☆ — Requires industrial injection molding equipment, but the transfer learning methodology is broadly applicable to any process where equipment changes.

### 3c. SMED + AI for Mold Changeover Optimization
- **URL:** https://www.mdpi.com/2673-4591/97/1/54
- **Summary:** Combines SMED, DMAIC, and fuzzy logic with AI to optimize mold changeover on a NEGRI BOSSI 650 injection molding machine. Achieved 65% reduction in changeover downtime and 46.8% improvement in process cycle efficiency through bottleneck identification, task externalization, and AI-driven real-time adjustment of resource allocation.
- **Manufacturing phenomena:** SMED/changeover optimization, OEE improvement, line balancing, multi-variant production scheduling, Lean + AI integration
- **Office-scale feasibility:** ★★☆☆☆ — Industrial scale, but the SMED + AI methodology framework is directly transferable to any multi-variant production setup including benchtop systems.

---

## 4. Composite Fabrication

### 4a. ML-Based Process Monitoring for Automated Fibre Placement (AFP)
- **URL:** https://link.springer.com/article/10.1007/s10845-023-02282-2
- **Summary:** Develops ML surrogate models (comparing Linear Regression, SVM, Random Forest, and ANN) trained on FEA simulation data to predict real-time thermal profiles during AFP layup. The ANN achieves 1.56% MAPE and runs 10,000× faster than FEA, enabling real-time comparison with in-situ temperature measurements to predict layup quality. Thermal history directly determines interlaminar bond strength.
- **Manufacturing phenomena:** Process-quality relationship (thermal history → bond strength), real-time process monitoring, surrogate modeling for digital twins, multi-parameter optimization (deposition rate, consolidation force, temperature)
- **Office-scale feasibility:** ★★★☆☆ — Desktop AFP systems like AFP-XS exist and can mount on standard robot arms. Small composite layup with embedded thermocouples is feasible. Manual layup with cure monitoring is even simpler.

### 4b. Theory-Guided ML for Cure Cycle Optimization of L-Shaped Parts
- **URL:** https://www.sciencedirect.com/science/article/abs/pii/S1359835X23004189
- **Summary:** Proposes a Bayesian optimization approach using Gaussian Process Regression guided by physics-based closed-form theories to optimize layup and cure cycles for minimizing process-induced deformations in composite L-brackets. Finds optimal parameters in *just six experiments* — no material characterization or simulation needed. Validated on Toray T800S/3900-2B material system.
- **Manufacturing phenomena:** Process-induced deformation (spring-in, warpage), cure cycle optimization, small-data ML (6 experiments!), theory-guided ML, layup sequence effects
- **Office-scale feasibility:** ★★★★☆ — L-shaped composite parts can be hand-laid and cured in a small oven or autoclave bag. Deformation measurement by laser profilometry or even calipers. The 6-experiment methodology is designed for resource-constrained settings.

---

## 5. Cosmetics / Chemical Batch Manufacturing

### 5a. Smart Sensor System for Monitoring Emulsification in Industrial Cosmetic Production (Burke et al.)
- **URL:** https://www.basetwo.ai/blogs/ais-role-in-cosmetics-manufacturing (overview citing Burke et al., 2022/2024)
- **Summary:** Developed and tested a smart sensor system for real-time monitoring of emulsification in cosmetic production. A camera captures images of the emulsion in an analytical bypass, and AI analyzes droplet size distribution in real-time during production. This enables monitoring the oil-water phase interaction to ensure target texture, absorbency, and stability are achieved, reducing batch-to-batch variability.
- **Manufacturing phenomena:** Batch process monitoring, real-time quality assessment (droplet size → product properties), process variability, scale-up challenges (lab → production viscosity changes)
- **Office-scale feasibility:** ★★★★★ — Emulsification with a laboratory overhead stirrer + USB microscope camera is highly accessible. Ingredients (oil, water, emulsifier) are inexpensive and safe. Multiple product variants (different oil ratios, fragrances) create natural changeover scenarios.

---

## 6. Food Manufacturing

### 6a. Industrial AI Framework for Food Process Optimization (Steam Flow + Filtration)
- **URL:** https://link.springer.com/article/10.1007/s10845-025-02755-6
- **Summary:** Proposes and validates a five-stage industrial AI framework (Scenario Understanding → Problem Identification → Optimization Strategy → Deployment → Verification) through two food manufacturing case studies: continuous steam flow management and discrete batch filtration optimization. Demonstrates generalizability across both continuous setpoint tracking and discrete batch optimization paradigms with quantified performance improvements.
- **Manufacturing phenomena:** Continuous vs. batch process control, ISA-95 architecture integration, process optimization across paradigms, framework generalizability
- **Office-scale feasibility:** ★★★☆☆ — The *framework* is the asset; it's process-agnostic. Steam/filtration requires industrial equipment, but the methodology applies to any benchtop process with controllable parameters.

---

## 7. Additive Manufacturing

### 7a. Bayesian Optimization for Titanium Alloy 3D Printing (JHU APL)
- **URL:** https://www.jhuapl.edu/news/news-releases/250306-ai-additive-manufacturing-titanium
- **Summary:** JHU Applied Physics Lab used Bayesian optimization to rapidly identify optimal laser parameters for metal 3D printing of titanium alloys. The AI explored thousands of configurations virtually, testing only a handful physically, and discovered previously unused parameter settings that produced stronger, denser parts — overturning long-held assumptions about optimal laser parameters. Reduced what would normally be months of trial-and-error to a focused experimental campaign.
- **Manufacturing phenomena:** Process parameter optimization, Bayesian experimental design, overcoming expert bias, density-strength-speed tradeoffs, additive manufacturing defect control
- **Office-scale feasibility:** ★★☆☆☆ — Metal 3D printing requires specialized equipment and safety, but the Bayesian optimization methodology applies directly to desktop FDM/SLA printing with measurable quality parameters (dimensional accuracy, surface finish, layer adhesion).

---

## 8. Cross-Cutting Reviews & Systematic Studies

### 8a. Deep Learning for Defect Detection on Electronic Assemblies: Systematic Literature Review
- **URL:** https://www.mdpi.com/2504-4990/8/1/5
- **Summary:** Systematic review of 56 studies on DL-based defect detection for PCBs and PCBAs. Key findings: 78.6% of studies detect ≤6 defect types, 62.5% use custom datasets, CNNs dominate. Covers both bare PCB inspection (etching defects) and PCBA inspection (solder joints, component placement, marking). Notes that PCBA inspection scope is much broader, covering multiple inspection levels from solder quality to component structural integrity.
- **Manufacturing phenomena:** Comprehensive coverage of quality inspection across electronics assembly, dataset construction practices, model architecture choices, deployment considerations
- **Office-scale feasibility:** ★★★★★ — Meta-resource. Identifies public datasets and replicable approaches across the electronics assembly domain.

### 8b. AI/ML Applications Across High-Performance Composites Lifecycle
- **URL:** https://www.sciencedirect.com/science/article/abs/pii/S1359836824005523
- **Summary:** Comprehensive review covering AI/ML across the full FRP composite lifecycle: design (material selection), manufacturing (process optimization, defect detection), testing (property prediction), and monitoring (damage diagnosis/prognosis). Covers AFP, resin transfer molding, autoclave curing, and filament winding. Identifies key research gaps including limited understanding of full lifecycle activities.
- **Manufacturing phenomena:** Full lifecycle view: design → manufacturing → test → monitoring. Process modeling, cure optimization, NDE/NDT, structural health monitoring
- **Office-scale feasibility:** ★★★☆☆ — Review paper; many referenced techniques (hand layup + cure monitoring, simple mechanical testing) are benchtop-feasible.

---

## Summary: Best Candidates for Office-Scale Manufacturing AI Testbed

| Rank | Product/Process | Key Phenomena | Cost | Safety |
|------|----------------|---------------|------|--------|
| 1 | **SMT/PCB Assembly** (stencil print → place → reflow) | Multi-step, quality chain, changeover (board variants), visual inspection | $10-15K used | Low |
| 2 | **Cosmetics emulsification** (mix → emulsify → fill → label) | Batch variability, real-time monitoring, multiple variants, scale-up | $2-5K | Low |
| 3 | **Composite layup + cure** (layup → bag → cure → inspect) | Process-quality coupling, cure optimization, deformation | $1-3K | Low |
| 4 | **fischertechnik Training Factory** (sort → process → store) | Scheduling, routing, IoT data, digital twin | $5-8K | None |
| 5 | **Desktop CNC + robot tending** (AMT-style testbed) | Machining variability, tool health, automation | $5-10K | Moderate |

The SMT assembly line stands out as the richest testbed: it has a genuine multi-step process chain where upstream variability (paste printing) propagates to downstream quality (solder joints), multiple product variants share the same line with changeovers (different board designs), public datasets already exist, and the entire line fits on two desks.
