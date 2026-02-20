---
_schema:
  entity_type: "source-note"
  applies_to: "inbox/*.md"
  required:
    - description
    - source_type
  optional:
    - research_prompt
    - generated
    - url
  enums:
    source_type:
      - research
      - web-search
      - manual
      - import

description: ""
source_type: manual
research_prompt: ""
url: ""
generated: ""
---

# {source title}

{Source content or summary}
