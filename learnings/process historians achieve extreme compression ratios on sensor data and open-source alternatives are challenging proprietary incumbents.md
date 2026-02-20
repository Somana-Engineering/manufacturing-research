---
description: "AVEVA PI System (20,000+ companies) uses Swinging Door Trending for 10:1-100:1 compression — but InfluxDB, TimescaleDB, and TDengine challenge at 1/3 cost"
type: learning
source: "The Complete Software Architecture of a Modern Manufacturing Shopfloor"
status: challenged
domain_area: software
created: 2026-02-19
---

# process historians achieve extreme compression ratios on sensor data and open-source alternatives are challenging proprietary incumbents

Process historians are specialized databases purpose-built for write-heavy, append-only workloads from thousands of sensors generating millions of data points per second. AVEVA PI System is the gold standard (20,000+ companies), using Swinging Door Trending compression — an algorithm that maintains an error band around the data trend line, recording only points where the slope changes beyond tolerance, achieving 10:1 to 100:1 compression.

A typical mid-sized plant runs 50,000-500,000 data tags; large refineries exceed 1 million. Collection rates range from milliseconds for motion control to 60 seconds for utilities. The conventional assumption that you need purpose-built proprietary historians is being challenged: InfluxDB 3.0 (rewritten in Rust on Apache Arrow/Parquet), TimescaleDB (PostgreSQL extension, ~90% compression), and TDengine (claims 10x faster writes at 1/3 the cost of PI System) are gaining ground. Siemens' SIMICAS platform replaced Flink+Kafka+Redis with TDengine. This matters for [[what is the minimum data infrastructure investment needed to realize AI-driven manufacturing economics|Somana's data infrastructure cost question]] — if open-source historians can deliver comparable performance at a fraction of the cost, the barrier to AI-driven manufacturing drops significantly.

## Relevant Notes
- [[what is the minimum data infrastructure investment needed to realize AI-driven manufacturing economics]]
- [[edge compute is necessary for real-time manufacturing control because cloud latency exceeds response requirements]]
- [[continuous process monitoring collapses the metrics hierarchy by seeing all four levels simultaneously]]

---

Topics: [[manufacturing software]]
