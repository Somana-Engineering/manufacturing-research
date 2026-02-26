---
description: "LightGuide Systems research: 72% of human factory tasks are 'unmonitored and unanalyzed' — the mode dial fixes this by design because the same data pipeline runs in Manual mode"
type: learning
source: "DFA feedback engine research — web search synthesis (LightGuide Systems)"
domain_area: software
created: 2026-02-26
---

# 72 percent of manual factory tasks are unmonitored and the mode dial architecture eliminates this blind spot by instrumenting all three modes equally

Research from LightGuide Systems found that 72% of factory tasks performed by humans are "unmonitored and unanalyzed, creating blind spots that impact efficiency and quality." In conventional manufacturing, manual processes are a data desert — no precise timing, no per-step quality tracking, no standardized breakdown. Automated processes generate rich telemetry; manual processes generate nothing.

The mode dial architecture eliminates this blind spot by design. Manual mode IS instrumented because the same [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function|data pipeline]] runs in all three modes. When an operator assembles a boarding box in Manual mode, the system captures per-step timing (via station sensors and operator confirmations), per-step quality (via [[in-process quality monitoring transforms final inspection from discovery to confirmation|in-process vision inspection]]), and defect patterns — the same data Autonomous mode generates automatically.

This has two implications. First, the mode gap diagnostic only works if Manual mode generates data comparable in granularity to Autonomous mode. Without instrumented Manual mode, there's no baseline to compare against — the "M" in the mode gap formula is missing. Second, Somana's mini factory accumulates a dataset of manual assembly performance that most contract manufacturers never collect. This manual-process data is itself valuable: it reveals where human operators struggle, what instructions are insufficient, and which product designs are hostile to manual assembly.

The 72% blind spot statistic also strengthens the [[contract box-build becomes a design intelligence service when mode-tagged data generates empirical DFA report cards for every customer product|DFA-as-a-service]] value proposition. When a hardware startup sends a product for contract assembly, conventional assemblers return the assembled product. Somana returns the assembled product PLUS empirical data about how their design performs under manual assembly — data that literally doesn't exist anywhere else because no one instruments manual processes.

---

Relevant Notes:
- [[the per-step mode gap replaces DFA table lookups with empirical production measurements of assembly difficulty]] — the mode gap requires instrumented Manual data as the baseline
- [[every manufacturing data point must be tagged with the operating mode it was collected under or comparative analytics become impossible]] — mode tagging in Manual mode IS the solution to the 72% blind spot
- [[OPC-UA MQTT InfluxDB and Grafana form the emerging standard metrics pipeline stack for manufacturing with each layer serving a distinct function]] — the same pipeline instruments all three modes
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]] — extends to manual processes that are conventionally invisible
- [[in-process quality monitoring transforms final inspection from discovery to confirmation]] — vision inspection runs in Manual mode too, capturing defect data humans miss

---

Topics: [[manufacturing software]], [[somana product]]
