---
description: "Temperature 18-25°C, humidity 40-55% RH, and ESD surface resistance form the control triad — below 30% RH static generation spikes, above 70% RH condensation and corrosion risk emerge"
type: learning
source: "Boarding box assembly process parameters research — web search synthesis"
domain_area: mechanics
created: 2026-02-26
---

# environmental controls for electronics assembly require 18-25C and 40-55 percent RH with ESD prevention as the primary humidity driver

The environmental control triad for electronics assembly:

**Temperature:**
- Assembly area: 18–25°C (65–77°F), with 20–22°C ideal
- Solder paste application: 18–24°C (tighter range)
- Preheating, soldering, and cooling zones need independent control

**Humidity:**
- Solder paste area: 40–50% RH
- ESD-sensitive processes: 45–55% RH
- Moisture-sensitive components: 40–60% RH permissible without reducing exposure time
- Below 30% RH: static generation increases and dissipation slows — ESD risk spikes
- Above 70% RH: condensation and corrosion risk

**ESD Control:**
- Relative humidity is the single most significant environmental factor for ESD
- Surface resistance measurement and documentation required
- Temperature, humidity, and surface resistance form the core ESD control measurement triad

For Somana's office-scale mini factory, these parameters are achievable with standard office HVAC plus supplementary controls. The critical addition is ESD protection: anti-static mats at each workstation, wrist straps for operators in Manual and Assisted modes, and a basic ionizer for the Autonomous station where the cobot handles ESD-sensitive components without grounding straps. Humidity monitoring is cheap (basic sensors on the [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function|MQTT pipeline]]) and provides environmental context for quality correlation analysis.

The environmental data also feeds the mode comparison: if a quality issue correlates with a humidity dip, the mode-tagged data can distinguish whether the issue is environmental (affects all modes equally) or mode-specific (Autonomous handles the sensitivity differently). This is a free analytical bonus from instrumenting the environment alongside the production process. Environmental variation is precisely the kind of input that makes [[yield becomes a per-unit real-time prediction rather than a factory-level average metric]] -- each unit's yield probability adjusts based on the ambient conditions during its assembly.

---

Relevant Notes:
- [[desktop-scale industrial automation now costs 15 to 50K and exposes the same data protocols as full-scale factory equipment]] — office HVAC plus basic supplements meets the environmental requirements
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — environmental data tagged alongside mode data enables environmental-vs-mode root cause analysis
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — environmental sensors feed the same pipeline as production data
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]] — environmental monitoring is a form of in-process quality assurance
- [[yield becomes a per-unit real-time prediction rather than a factory-level average metric]] — ambient conditions during assembly are an input to per-unit yield prediction

---

Topics: [[somana product]], [[manufacturing mechanics]]
