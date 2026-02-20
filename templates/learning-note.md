---
_schema:
  entity_type: "learning-note"
  applies_to: "learnings/*.md"
  required:
    - description
  optional:
    - type
    - source
    - status
    - domain_area
    - created
  enums:
    type:
      - learning
      - assumption
      - parameter
      - question
      - pattern
      - tension
    status:
      - conventional
      - challenged
      - validated
      - superseded
    domain_area:
      - economics
      - mechanics
      - software
      - organization
  constraints:
    description:
      max_length: 200
      format: "One sentence adding context beyond the title"

description: ""
type: learning
source: ""
status: ""
domain_area: ""
created: YYYY-MM-DD
topics: []
---

# {prose-as-title}

{Content — the argument, evidence, and reasoning behind this learning}

---

Relevant Notes:
- [[related learning]] — relationship context

Topics:
- [[relevant-topic-map]]
