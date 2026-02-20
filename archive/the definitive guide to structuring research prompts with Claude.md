# The definitive guide to structuring research prompts with Claude

**Claude responds best to explicit, well-structured prompts that treat it like a brilliant new employee who needs clear instructions.** Anthropic's official documentation, interactive tutorials, and engineering blog posts collectively outline a systematic hierarchy of prompting techniques — from basic clarity principles to advanced multi-agent architectures — that dramatically improve research task quality. This guide synthesizes every authoritative source into a single reference, covering nine core techniques, research-specific strategies, common anti-patterns, and practical examples with full source attribution.

The most important insight across all sources: **prompt engineering with Claude is ordered by effectiveness**, not complexity. Anthropic explicitly ranks techniques from most broadly useful to most specialized: (1) be clear and direct, (2) use examples, (3) chain-of-thought reasoning, (4) XML tags, (5) role/system prompts, (6) response prefilling, (7) prompt chaining, (8) long-context handling, and (9) extended thinking. Research tasks benefit especially from combining prompt chaining with XML-structured document handling and quote-extraction techniques.

---

## Start with clarity, not cleverness

Anthropic's foundational principle is deceptively simple: **think of Claude as "a brilliant but very new employee (with amnesia) who needs explicit instructions."** The golden rule from the official docs is to show your prompt to a colleague with minimal context — if they'd be confused, Claude will be too.

For research prompts specifically, clarity means providing four elements upfront: what the results will be used for, who the target audience is, where this fits in your workflow, and what success looks like. Instead of "Research renewable energy," write "Analyze the top 5 solar panel manufacturers by market share in 2025, comparing their efficiency ratings and pricing. Output a table with specific numbers, then a 500-word synthesis identifying the market leader and why." Sequential steps as numbered lists ensure Claude follows the exact research order you intend.

Claude 4.x models (Opus 4.6, Sonnet 4.6, Haiku 4.5) follow instructions **literally** — they won't fill in blanks or guess intent. If you ask for "a dashboard," you might get a blank frame. This precision means research prompts should specify exactly what analysis steps to perform, what sources to prioritize, and what format the output should take.

*Source: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct*

---

## XML tags are the structural backbone of complex prompts

XML tags are described as a "game-changer" in Anthropic's official documentation for any prompt involving multiple components. They provide four key benefits: **clarity** (separating prompt sections), **accuracy** (preventing Claude from mixing instructions with context), **flexibility** (easy to modify individual sections), and **parseability** (making output extraction straightforward).

The recommended approach uses descriptive, consistent tag names throughout your prompts. For research tasks handling multiple documents, Anthropic prescribes a specific structure:

```xml
<documents>
  <document index="1">
    <source>annual_report_2023.pdf</source>
    <document_content>{{ANNUAL_REPORT}}</document_content>
  </document>
</documents>
```

For separating prompt components, use tags like `<instructions>`, `<context>`, `<example>`, and `<formatting>`. The power move, according to the docs, is **combining XML tags with other techniques** — wrapping few-shot examples in `<examples>` tags and chain-of-thought reasoning in `<thinking>` and `<answer>` tags creates what Anthropic calls "super-structured, high-performance prompts."

Tag names don't need to follow any canonical standard. There are no special tag names Claude was trained on — any descriptive name works. The Claude 4.x best practices page even demonstrates using creative XML tags for behavioral control: `<default_to_action>`, `<do_not_act_before_instructions>`, and `<investigate_before_answering>` to steer model behavior.

*Source: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags*

---

## Chain-of-thought and extended thinking serve different purposes

Anthropic distinguishes between **three levels of chain-of-thought prompting** and a separate **extended thinking API feature**, and choosing correctly matters for research tasks.

The three CoT levels progress from basic to structured. The basic level simply adds "Think step-by-step" to your prompt — easy but provides no guidance on *how* to think. The guided level outlines specific reasoning steps: "First, identify the key claims. Then, evaluate the evidence for each claim. Finally, synthesize your assessment." The structured level uses XML tags to separate reasoning from output:

```xml
Think through this research question step by step in <thinking> tags,
then provide your final analysis in <answer> tags.
```

A critical rule from the documentation: **"Always have Claude output its thinking. Without outputting its thought process, no thinking occurs!"** This means research prompts should never ask Claude to "think carefully" without also requesting visible reasoning output. The trade-off is increased output length and latency, so Anthropic recommends using CoT judiciously — only for tasks a human would need to think through, like multi-step analysis, complex synthesis, or decisions with many factors.

**Extended thinking** is a separate API feature that gives Claude a dedicated internal reasoning space before responding. For Claude 4.x models, it returns a summary of the thinking process rather than the full chain. Key differences from prompt-based CoT: extended thinking works best with **high-level instructions** rather than prescriptive step-by-step guidance. Anthropic's docs state that "the model's creativity in problem-solving can exceed human-prescribed thought processes," so for complex research tasks, saying "Think deeply about this problem" often outperforms detailed reasoning prescriptions. The minimum thinking budget is **1,024 tokens**, with diminishing returns at very high budgets.

*Sources: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought and https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking*

---

## Few-shot examples are "your secret weapon shortcut"

Anthropic's documentation calls examples the single most powerful technique after basic clarity. For research tasks, **3–5 diverse, relevant examples** dramatically improve accuracy, consistency, and output quality. The official format wraps examples in nested tags:

```xml
<examples>
  <example>
    <research_question>What factors contributed to the 2008 financial crisis?</research_question>
    <analysis>
      The 2008 financial crisis resulted from the convergence of four systemic failures...
      [Full example output showing desired depth, structure, and citation style]
    </analysis>
  </example>
  <example>
    <research_question>How effective are mRNA vaccines compared to traditional vaccines?</research_question>
    <analysis>
      mRNA vaccines represent a paradigm shift in immunology...
    </analysis>
  </example>
</examples>
```

Three rules for crafting effective examples: they must be **relevant** (mirror your actual research use case), **diverse** (cover edge cases and different types of questions), and **clear** (unambiguous input-output pairs). A pro tip from the docs: ask Claude itself to evaluate your examples for quality, or have it generate additional examples that cover gaps.

An academic study cited by community sources found that **structured examples achieved a 90% success rate** compared to instructions without examples. For research workflows, this means including an example of a well-answered research question — showing the desired depth, source handling, uncertainty acknowledgment, and output format — is more effective than paragraphs of abstract instructions describing what you want.

*Source: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting*

---

## System prompts and role assignment transform research quality

Using the `system` parameter for role prompting is what Anthropic calls "the most powerful way to use system prompts with Claude." The right role turns a general assistant into a virtual domain expert, significantly boosting accuracy in complex research scenarios.

For research tasks, specificity in role definition matters. "You are a data scientist" produces different insights than "You are a senior research analyst specializing in competitive intelligence for the semiconductor industry, with expertise in reading SEC filings and industry reports from Gartner and IDC." The more specific the role, the more calibrated the expertise.

A practical research system prompt pattern combines role, methodology, and constraints:

```
You are a senior research analyst specializing in [domain]. Your methodology:
1. Always ground claims in specific evidence
2. Distinguish between established consensus and emerging findings
3. Flag uncertainty explicitly — if evidence is insufficient, say so
4. Prioritize primary sources over secondary reporting
5. When sources conflict, present both positions and assess which has stronger support
```

For Claude 4.6 models specifically, Anthropic advises **dialing back aggressive system prompt language**. Instead of "CRITICAL: You MUST thoroughly analyze every source," use "Analyze each source, noting key findings and limitations." The newer models are more responsive to system prompts and can become over-aggressive with forceful language.

*Source: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts*

---

## Prompt chaining breaks research into high-accuracy subtasks

For complex research tasks, Anthropic recommends breaking work into **sequential subtasks** rather than cramming everything into a single prompt. Each subtask gets Claude's full attention, reducing errors, improving traceability, and making debugging straightforward.

The documentation outlines four canonical research workflows:

- **Research synthesis**: Gather sources → Extract key findings → Identify patterns → Synthesize narrative → Review for gaps
- **Document analysis**: Extract data → Transform/normalize → Analyze → Visualize/summarize
- **Decision-making**: Gather information → List options → Evaluate each → Recommend
- **Verification loops**: Generate content → Self-review → Refine → Re-review

Each step should have **a single, clear objective** and use XML tags for clean handoffs between prompts. The output of step N becomes the tagged input of step N+1. For independent subtasks (like analyzing multiple documents), Anthropic explicitly recommends running separate prompts **in parallel** for speed.

An advanced technique from the documentation is **self-correction chains**: prompt Claude to review its own research output, catching errors and refining analysis. This is especially valuable for high-stakes research where accuracy matters. Anthropic's context engineering blog further extends this to **sub-agent architectures**, where specialized sub-agents handle focused research tasks with clean context windows and return condensed **1,000–2,000 token summaries** to a coordinating agent.

*Sources: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts and https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents*

---

## Long-context research demands specific structural patterns

Claude's 200K-token context window enables complex multi-document research, but Anthropic's testing reveals that **document placement and quote extraction dramatically affect quality**. Three techniques are essential.

First, **place long documents at the top** of the prompt, with your query and instructions at the bottom. This ordering improved response quality by **up to 30%** with complex multi-document inputs. Second, structure all documents with the XML tagging pattern shown earlier, using indexed `<document>` tags with `<source>` metadata. Third, and most importantly for research accuracy, **ask Claude to extract relevant quotes before answering**:

```
First, find and quote the most relevant passages from the provided documents 
in <relevant_quotes> tags. Then, based only on these quotes, provide your 
analysis in <answer> tags.
```

This quote-extraction technique, validated in Anthropic's long-context research paper, produced a **36% reduction in errors** by forcing Claude to ground its reasoning in specific textual evidence rather than generating from general knowledge. For research tasks involving large document sets, this is arguably the single most impactful technique available.

Anthropic's context engineering blog introduces a complementary concept: **just-in-time context retrieval**. Rather than loading all research materials upfront, maintain lightweight references and dynamically load relevant data during the research process using tools. This keeps the context window lean and high-signal.

*Sources: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips and https://www.anthropic.com/news/prompting-long-context*

---

## Ten anti-patterns that sabotage research prompts

Across official documentation, the Claude blog, and validated community sources, these are the most common mistakes:

1. **Anti-laziness prompts** ("be thorough," "think carefully," "do not be lazy") — on Claude 4.6, these cause runaway thinking or write-then-rewrite loops. Remove them entirely and use the effort parameter instead.

2. **Negative instructions** — telling Claude forcefully what NOT to do can trigger a reverse psychology effect. Use positive instructions: "Write in prose paragraphs" rather than "Do not use bullet points."

3. **Vague prompts without constraints** — Claude cannot read your mind. Specify audience, format, scope, depth, and purpose explicitly.

4. **Over-engineering** — longer prompts are not better prompts. Start minimal, test, and add only what demonstrably improves output. As Anthropic's blog states: "Don't use every technique at once."

5. **Kitchen-sink sessions** — mixing unrelated research tasks fills context with irrelevant information, degrading performance. Clear context between unrelated tasks.

6. **Repeated corrections** — after two failed correction attempts, the context is polluted with failed approaches. Clear the conversation and rewrite the initial prompt incorporating lessons learned.

7. **Mixing all instructions in one paragraph** — Claude needs clear structural separation. Use the four-block pattern (instructions / context / task / output format) or XML tags.

8. **Generic examples** — examples that don't match your actual research domain provide little benefit. Use contextual, domain-specific examples.

9. **Forgetting to iterate** — the first prompt is rarely optimal. Define success criteria, test empirically, and refine based on results.

10. **Using LLMs for tasks code can handle** — formatting, regex extraction, and evaluation logic should be handled programmatically, not via prompting.

*Sources: https://claude.com/blog/best-practices-for-prompt-engineering and https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices*

---

## A complete research prompt template

Synthesizing all techniques, here is a production-ready template for complex research tasks:

```xml
System: You are a senior research analyst specializing in [DOMAIN] with 
expertise in [SPECIFIC METHODOLOGIES]. You ground all claims in evidence, 
flag uncertainty explicitly, and distinguish established consensus from 
emerging findings.

<instructions>
Conduct a comprehensive analysis of [RESEARCH QUESTION]. Follow these steps:
1. Extract and quote the most relevant evidence from provided sources
2. Identify key themes, patterns, and contradictions across sources  
3. Synthesize findings into a structured analysis
4. Flag areas of uncertainty or insufficient evidence
5. Provide actionable conclusions with confidence levels
</instructions>

<context>
This research will be used for [PURPOSE] by [AUDIENCE]. 
The analysis should prioritize [SPECIFIC PRIORITIES].
</context>

<documents>
  <document index="1">
    <source>[SOURCE NAME AND URL]</source>
    <document_content>{{DOCUMENT_1}}</document_content>
  </document>
</documents>

<examples>
  <example>
    <input>Analyze the competitive landscape of cloud computing in 2025</input>
    <output>[Full example showing desired depth, structure, and citation style]</output>
  </example>
</examples>

<formatting>
Structure your response as:
- Executive summary (3-4 sentences with key findings)
- Detailed analysis organized by theme (not by source)
- Evidence quality assessment
- Conclusions with confidence levels (high/medium/low)
Use prose paragraphs, not bullet lists. Bold key findings.
</formatting>
```

This template combines six techniques: system role prompting, XML structural tags, sequential step instructions, contextual grounding, few-shot examples, and explicit output formatting. It reflects the current best practices for Claude 4.x models.

---

## Complete source index

**Official Anthropic documentation:**
- Prompt engineering overview: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- Be clear and direct: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct
- Multishot prompting: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting
- Chain of thought: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought
- XML tags: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags
- System prompts: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts
- Prefill responses: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prefill-claudes-response
- Chain prompts: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts
- Long context tips: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips
- Extended thinking tips: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/extended-thinking-tips
- Claude 4.x best practices: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices
- Prompt generator: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-generator
- Prompt improver: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-improver
- Prompt templates: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables
- Extended thinking: https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking
- Structured outputs: https://docs.anthropic.com/en/docs/build-with-claude/structured-outputs
- Reduce hallucinations: https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations
- Prompt library: https://docs.anthropic.com/en/resources/prompt-library/library

**Official Anthropic blog and engineering posts:**
- Best practices for prompt engineering: https://claude.com/blog/best-practices-for-prompt-engineering
- Prompt engineering for business performance: https://www.anthropic.com/news/prompt-engineering-for-business-performance
- Prompting for long context: https://www.anthropic.com/news/prompting-long-context
- Effective context engineering for AI agents: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Prompt generator announcement: https://anthropic.com/news/prompt-generator
- Prompt improver announcement: https://anthropic.com/news/prompt-improver

**Official Anthropic GitHub and courses:**
- Interactive prompt engineering tutorial: https://github.com/anthropics/prompt-eng-interactive-tutorial
- Anthropic courses: https://github.com/anthropics/courses
- Anthropic cookbook: https://github.com/anthropics/anthropic-cookbook
- Cookbook web platform: https://platform.claude.com/cookbook/
- Metaprompt notebook: https://github.com/anthropics/anthropic-cookbook/blob/main/misc/metaprompt.ipynb
- Agent patterns (orchestrator-workers): https://github.com/anthropics/anthropic-cookbook/blob/main/patterns/agents/orchestrator_workers.ipynb
- Claude Code best practices: https://code.claude.com/docs/en/best-practices

**Community and third-party resources:**
- PromptLayer (Zack Witten/Anthropic talk): https://blog.promptlayer.com/prompt-engineering-with-anthropic-claude-5399da57461d/
- AWS Bedrock prompt engineering guide: https://aws.amazon.com/blogs/machine-learning/prompt-engineering-techniques-and-best-practices-learn-by-doing-with-anthropics-claude-3-on-amazon-bedrock/
- Simon Willison's tutorial review: https://simonwillison.net/2024/Aug/30/anthropic-prompt-engineering-interactive-tutorial/
- Prompt chaining guide: https://www.promptingguide.ai/techniques/prompt_chaining

---

## Conclusion

The single most impactful shift in Claude prompt engineering is moving from **abstract instruction-giving to structured, evidence-grounded prompting**. The quote-extraction technique alone cut errors by 36% in Anthropic's testing. Combined with XML structural tags, domain-specific few-shot examples, and prompt chaining for multi-step research, these techniques compose into a system where each element reinforces the others.

For Claude 4.x models specifically, the behavioral shift toward literal instruction-following means research prompts must be more explicit than ever — but also that Claude will follow well-structured prompts with remarkable precision. The most underappreciated technique for research tasks is the self-correction chain: having Claude review and critique its own analysis before delivering final output. Anthropic's context engineering blog signals the field's direction — toward **sub-agent architectures** with clean context windows and just-in-time retrieval, rather than monolithic mega-prompts. The resources indexed here provide every building block needed to implement these patterns today.