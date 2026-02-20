---
_schema:
  entity_type: "observation-note"
  applies_to: "ops/observations/*.md"
  required:
    - description
    - category
    - observed
    - status
  enums:
    category:
      - friction
      - surprise
      - process-gap
      - methodology
    status:
      - pending
      - promoted
      - implemented
      - archived

description: ""
category: ""
observed: YYYY-MM-DD
status: pending
---

# {observation as a sentence}

What happened, why it matters, and what might change.
