---
name: astro-saas-site
description: Generate a complete Astro + Tailwind CSS SaaS website with homepage, blog, FAQ, and legal pages. Use when asked to "build a SaaS homepage", "create a SaaS landing page", "generate a SaaS site with Astro", or similar requests for SaaS website scaffolding. Creates a full project ready to run with npm run dev.
---

# Astro SaaS Site Generator

Generate a complete SaaS website with Astro + Tailwind CSS, including homepage (high-converting landing page structure), blog with content collections, FAQ system, and legal pages.

## Question Flow

Ask these questions **one at a time**, waiting for user response before proceeding:

1. **SaaS Name**: "What's your SaaS called?"
2. **Description**: "In one sentence, what problem does it solve?"
3. **Style**: "Pick a style (or describe your own):
   - **Minimal** — Clean, whitespace, subtle shadows
   - **Bold** — Strong colors, large typography, high contrast
   - **Playful** — Rounded corners, gradients, friendly
   - **Dark** — Dark background, modern SaaS vibe
   - Or describe any custom style (e.g., 'corporate and professional', 'techy and futuristic', 'warm and organic')"
4. **Colors**: "What are your brand colors? (1-2 colors, e.g., '#6366f1' or 'blue and purple')"

After collecting answers, generate the complete project.

## Project Structure

```
[saas-name]/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── src/
│   ├── config/
│   │   └── site.config.ts       # Centralized site configuration
│   ├── content/
│   │   ├── config.ts            # Content collections config
│   │   ├── blog/                # 3 sample blog posts
│   │   └── faq/                 # 5 sample FAQ entries
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── SocialProof.astro
│   │   ├── Benefits.astro
│   │   ├── Process.astro
│   │   ├── Pricing.astro
│   │   ├── AboutUs.astro
│   │   ├── FaqPreview.astro
│   │   ├── Cta.astro
│   │   └── BlogCard.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ContentLayout.astro
│   └── pages/
│       ├── index.astro          # Homepage
│       ├── blog/
│       │   ├── index.astro      # Blog index
│       │   └── [...slug].astro  # Blog posts
│       ├── faq/
│       │   ├── index.astro      # FAQ index
│       │   └── [...slug].astro  # FAQ pages
│       ├── privacy.astro
│       └── terms.astro
└── public/
    └── placeholder.svg          # Hero image placeholder
```

## Generation Instructions

### 1. Read References First

Before generating, read:
- `references/landing-page-structure.md` — Homepage section details
- `references/content-pages.md` — Blog/FAQ page structures
- `references/style-presets.md` — CSS variables for each style

### 2. Generate site.config.ts

Create centralized config with user inputs:

```typescript
export const siteConfig = {
  name: "[USER_SAAS_NAME]",
  description: "[USER_DESCRIPTION]",
  style: "[USER_STYLE]",
  colors: {
    primary: "[PRIMARY_COLOR]",
    secondary: "[SECONDARY_COLOR]",
    // ... derived colors based on style preset
  },
  pricing: {
    plans: [
      {
        name: "Starter",
        monthlyPrice: 9,
        yearlyPrice: 90,
        features: ["Feature 1", "Feature 2", "Feature 3"],
        cta: "Get Started",
        highlighted: false,
      },
      {
        name: "Pro",
        monthlyPrice: 29,
        yearlyPrice: 290,
        features: ["Everything in Starter", "Feature 4", "Feature 5", "Feature 6"],
        cta: "Go Pro",
        highlighted: true,
      },
    ],
  },
  social: {
    twitter: "#",
    github: "#",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} [USER_SAAS_NAME]. All rights reserved.`,
  },
};
```

### 3. Apply Style Preset

Use the style presets from `references/style-presets.md` to set Tailwind theme extensions and component styling.

### 4. Generate All Files

Generate complete project. Use `assets/template/` as base structure reference.

**Important**: The template uses `_slug_.astro` filenames to avoid zip compatibility issues. When generating, rename these to `[...slug].astro` for Astro dynamic routes:
- `src/pages/blog/_slug_.astro` → `src/pages/blog/[...slug].astro`
- `src/pages/faq/_slug_.astro` → `src/pages/faq/[...slug].astro`

### 5. Output Instructions

After generating, tell the user:

```
✅ Generated [SaaS Name] site!

To run:
  cd [folder-name]
  npm install
  npm run dev

Edit content:
  - Site config: src/config/site.config.ts
  - Blog posts: src/content/blog/
  - FAQ entries: src/content/faq/
  - Homepage: src/pages/index.astro
```

## Key Notes

- Use Astro Content Collections for blog/FAQ (type-safe, markdown-based)
- All components are Astro-only (no React/Vue islands)
- Pricing toggle uses vanilla JS
- Responsive mobile-first Tailwind
- Placeholder content clearly marked for easy editing
