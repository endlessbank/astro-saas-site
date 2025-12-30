# Content Pages Structure

## Important: Content Formatting

Blog and FAQ markdown content uses Tailwind Typography (`prose` classes) for styling. Ensure proper formatting:
- Add blank lines between paragraphs
- Add blank lines before and after headings
- Add blank lines before and after lists
- Use proper heading hierarchy (H2 for main sections, H3 for subsections)

Example of well-formatted markdown:
```markdown
Introduction paragraph here.

## Section Heading

First paragraph of this section.

Second paragraph with more details.

### Subsection

- List item one
- List item two
- List item three

Another paragraph after the list.
```

## Blog Index (`/blog`)

**Purpose**: Traffic hub + content discovery

**Layout**:
- Headline: "The [SAAS_NAME] Blog" or "[Topic] Resources"
- Intro text (2-3 lines, SEO-friendly)
- Blog post cards in grid (2-3 columns)
- Each card: title, excerpt, date, read time
- Internal links to pricing/signup in sidebar or bottom

**Sample Posts to Generate**:
1. `getting-started.md` — How to get started with [SAAS_NAME]
2. `why-choose-us.md` — Why [target audience] choose [SAAS_NAME]
3. `product-update.md` — What's new in [SAAS_NAME]

## Blog Content (`/blog/[slug]`)

**Purpose**: Rank for 1 intent + educate + soft convert

**Frontmatter**:
```yaml
---
title: "Post Title"
description: "Meta description for SEO"
pubDate: 2024-01-15
author: "Team"
---
```

**Structure**:
- H1 = title (from frontmatter)
- Intro (3-5 lines)
- Main content with H2/H3 sections
- Soft CTA mid-content: "This is exactly what [SAAS_NAME] helps with"
- Bottom CTA: Try free / Learn more
- Related posts (optional)

## FAQ Index (`/faq`)

**Purpose**: Question hub + SEO discovery

**Layout**:
- Headline: "Frequently Asked Questions"
- Short intro text
- List of questions (each links to its own page)
- Optional grouping (General, Pricing, Account)

**Important**: Don't put full answers here. This page links out.

**Sample FAQs to Generate**:
1. `what-is-this.md` — What is [SAAS_NAME]?
2. `how-to-start.md` — How do I get started?
3. `pricing-plans.md` — What pricing plans do you offer?
4. `cancel-subscription.md` — How do I cancel my subscription?
5. `data-security.md` — Is my data secure?

## FAQ Content (`/faq/[slug]`)

**Purpose**: Rank for question-based searches

**Frontmatter**:
```yaml
---
question: "Full question as H1"
category: "General" | "Pricing" | "Account"
---
```

**Structure**:
- H1 = full question
- Short answer (2-4 lines) at top
- Expanded explanation if needed
- Related FAQs links
- Soft CTA: "If you want to [outcome], [SAAS_NAME] can help"

## Legal Pages

### Privacy Policy (`/privacy`)
- Standard sections: Data collection, usage, cookies, third parties, contact
- Placeholder text with [COMPANY] and [EMAIL] markers

### Terms of Service (`/terms`)
- Standard sections: Acceptance, use license, limitations, governing law
- Placeholder text with [COMPANY] markers

## Content Collections Config

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Team'),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.enum(['General', 'Pricing', 'Account']).default('General'),
  }),
});

export const collections = { blog, faq };
```
