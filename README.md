# Astro SaaS Site Generator

A Claude Code skill that generates complete SaaS websites with Astro + Tailwind CSS.

## What It Generates

- **Homepage** — High-converting landing page with 14 sections (hero, social proof, benefits, pricing, FAQ preview, etc.)
- **Blog** — Index page + individual post pages with Content Collections
- **FAQ** — Index page + individual question pages with categories
- **Legal Pages** — Privacy Policy and Terms of Service templates

## Installation

### Step 1: Create the skills folder

Open Terminal in your project directory:

```bash
mkdir -p .claude/skills
```

### Step 2: Clone this skill

```bash
cd .claude/skills
git clone https://github.com/endlessbank/astro-saas-site.git
```

### Step 3: Verify structure

Your project should look like this:

```
your-project/
└── .claude/
    └── skills/
        └── astro-saas-site/
            ├── SKILL.md
            ├── assets/
            └── references/
```

## Usage

Open Claude Code in your project and say:

- "Build me a SaaS homepage"
- "Create a SaaS landing page"
- "Generate a SaaS site with Astro"

Claude will ask you 4 questions:

1. **SaaS name** — What's your product called?
2. **Description** — One sentence about what problem it solves
3. **Style** — Choose from Minimal, Bold, Playful, Dark, or describe your own
4. **Colors** — 1-2 brand colors (hex codes or color names)

Then it generates the complete Astro project.

## After Generation

```bash
cd your-saas-folder
npm install
npm run dev
```

## Customizing Content

| What | Where |
|------|-------|
| Site config (name, pricing, testimonials) | `src/config/site.config.ts` |
| Blog posts | `src/content/blog/` |
| FAQ entries | `src/content/faq/` |
| Homepage sections | `src/pages/index.astro` |
| Components | `src/components/` |

## Style Options

| Style | Description |
|-------|-------------|
| **Minimal** | Clean, whitespace, subtle shadows |
| **Bold** | Strong colors, large typography, high contrast |
| **Playful** | Rounded corners, gradients, friendly |
| **Dark** | Dark background, modern SaaS vibe |
| **Custom** | Describe any style (e.g., "corporate", "techy", "warm") |

## Tech Stack

- [Astro](https://astro.build/) — Static site framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) — Prose styling for content pages
- Astro Content Collections — Type-safe markdown content

## License

MIT
