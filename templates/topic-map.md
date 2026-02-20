---
_schema:
  entity_type: "topic-map"
  applies_to: "learnings/*.md"
  required:
    - description
    - type
  optional:
    - created
  enums:
    type:
      - moc
  constraints:
    description:
      max_length: 200
      format: "Brief orientation for this topic area"

description: ""
type: moc
created: YYYY-MM-DD
---

# {topic-name}

Brief orientation — what this topic covers and how to use this map.

## Core Learnings
- [[learning]] — context explaining why this matters here

## Tensions
Unresolved conflicts — where ideas clash or assumptions face challenges.

## Open Questions
What is unexplored. Research directions, gaps in understanding.
