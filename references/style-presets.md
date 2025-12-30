# Style Presets

Four preset styles plus custom option. Apply based on user selection.

## Custom Styles

If user describes a custom style (not one of the 4 presets), interpret their description and create appropriate:
- Color palette that matches the mood
- Border radius (sharp for corporate, rounded for friendly)
- Shadows (subtle for minimal, stronger for bold)
- Typography scale
- Component styling patterns

Examples:
- "Corporate and professional" → Sharp corners, navy/gray colors, subtle shadows, formal spacing
- "Techy and futuristic" → Dark theme, neon accents, sharp edges, monospace touches
- "Warm and organic" → Rounded corners, earth tones, soft shadows, generous spacing

## Minimal

Clean, whitespace-heavy, subtle.

**Tailwind Config**:
```javascript
{
  borderRadius: {
    DEFAULT: '0.375rem',  // rounded-md
    lg: '0.5rem',
  },
  boxShadow: {
    DEFAULT: '0 1px 3px rgba(0,0,0,0.08)',
    lg: '0 4px 6px rgba(0,0,0,0.05)',
  },
}
```

**Patterns**:
- Backgrounds: white, gray-50
- Text: gray-900, gray-600
- Borders: gray-200, subtle
- Buttons: solid primary, no gradients
- Cards: white bg, thin border or subtle shadow
- Spacing: generous (py-20, py-24)

## Bold

Strong colors, large typography, high contrast.

**Tailwind Config**:
```javascript
{
  borderRadius: {
    DEFAULT: '0.5rem',
    lg: '0.75rem',
  },
  boxShadow: {
    DEFAULT: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 25px rgba(0,0,0,0.15)',
  },
}
```

**Patterns**:
- Backgrounds: white, primary-50, primary-900
- Text: gray-900, white on dark sections
- Alternating section backgrounds (light/dark)
- Buttons: large, bold shadows
- Headlines: text-5xl to text-6xl
- Cards: stronger shadows, bold borders

## Playful

Rounded, gradients, friendly feel.

**Tailwind Config**:
```javascript
{
  borderRadius: {
    DEFAULT: '1rem',
    lg: '1.5rem',
    full: '9999px',
  },
  boxShadow: {
    DEFAULT: '0 4px 14px rgba(0,0,0,0.08)',
    lg: '0 8px 30px rgba(0,0,0,0.12)',
  },
}
```

**Patterns**:
- Backgrounds: white, soft gradients (primary-50 to secondary-50)
- Buttons: rounded-full, gradient backgrounds
- Cards: very rounded, soft shadows
- Decorative elements: blobs, waves (CSS or SVG)
- Icons: colorful, possibly emoji-style
- Typography: friendly, slightly playful

## Dark

Dark background, light text, modern SaaS.

**Tailwind Config**:
```javascript
{
  borderRadius: {
    DEFAULT: '0.5rem',
    lg: '0.75rem',
  },
  boxShadow: {
    DEFAULT: '0 4px 6px rgba(0,0,0,0.3)',
    lg: '0 10px 25px rgba(0,0,0,0.4)',
  },
}
```

**Patterns**:
- Backgrounds: gray-950, gray-900, gray-800
- Text: white, gray-300, gray-400
- Accents: primary color pops on dark bg
- Borders: gray-700, gray-800
- Cards: gray-800/gray-900, subtle border
- Buttons: primary color stands out
- Glow effects on hover (optional)

## Color Derivation

From user's 1-2 colors, derive:
- `primary`: Main brand color
- `primary-50` to `primary-950`: Generated scale (use Tailwind defaults if standard color name, or generate)
- `secondary`: Second color or complement of primary
- `accent`: Brighter variant for CTAs

**If user gives color name** (e.g., "blue"):
- Map to Tailwind's built-in color (blue-500 as primary)

**If user gives hex** (e.g., "#6366f1"):
- Use as primary-500
- Generate lighter/darker variants or use closest Tailwind palette

## Applying Styles

In `tailwind.config.mjs`:
```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          // ... color scale
        },
        secondary: {
          // ... color scale
        },
      },
      borderRadius: {
        // ... from preset
      },
      boxShadow: {
        // ... from preset
      },
    },
  },
}
```

Components use these semantic names:
- `bg-primary-500`, `text-primary-600`
- `rounded-lg`, `shadow-lg`
- Style-specific classes handled in components
