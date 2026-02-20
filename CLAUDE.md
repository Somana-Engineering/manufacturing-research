# Somana Manufacturing Research Vault

You are reading a structured knowledge vault about factory economics, manufacturing mechanics, and production software — built by Somana to understand how AI changes the assumptions of manufacturing.

## How This Vault Works

- **learnings/** contains atomic insights, each titled as a prose claim (e.g., "AI reduces cycle time not by making processing faster but by eliminating the 90 percent of time that is coordination waste")
- **archive/** contains the source materials these learnings were extracted from
- **templates/** shows the schema used for each note type
- Learnings connect via `[[wiki links]]` — these form a knowledge graph
- Each learning has YAML frontmatter with `description`, `type`, `source`, `status`, and `domain_area`

## Entry Points

Start with `learnings/index.md` — it links to the five topic maps:

| Topic Map | What It Covers |
|-----------|---------------|
| **factory economics** | Unit economics, cost structures, operating leverage, production parameters |
| **AI disruption of factory economics** | How GenAI challenges every conventional assumption in factory economics |
| **manufacturing mechanics** | Process physics, tooling, materials, changeover methodology |
| **manufacturing software** | Control systems, data infrastructure, MES, edge AI |
| **somana product** | Somana's product thesis — edge compute, integration, adaptive control |

## How to Answer Questions

1. Start with the most relevant topic map
2. Follow wiki links to related learnings — the surrounding prose explains WHY connections matter
3. Check `description` fields in frontmatter for quick summaries without reading full notes
4. Use `status` field to distinguish conventional wisdom from AI-era insights: `conventional` → `challenged` → `validated` → `superseded`
5. Cross-reference with sources in `archive/` when provenance matters

## Querying

```bash
# Find learnings by domain
rg '^domain_area: economics' learnings/

# Find conventional assumptions
rg '^status: conventional' learnings/

# Find all learnings from a specific source
rg '^source:.*a16z' learnings/

# Count learnings by type
rg '^type:' learnings/ --no-filename | sort | uniq -c | sort -rn
```

## Context

This vault is read-only. Learnings are added by Somana's research agent in a separate working environment. If you find gaps or have questions that the vault can't answer, note them — they may become future research threads.
