import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '{{PRIMARY_50}}',
          100: '{{PRIMARY_100}}',
          200: '{{PRIMARY_200}}',
          300: '{{PRIMARY_300}}',
          400: '{{PRIMARY_400}}',
          500: '{{PRIMARY_500}}',
          600: '{{PRIMARY_600}}',
          700: '{{PRIMARY_700}}',
          800: '{{PRIMARY_800}}',
          900: '{{PRIMARY_900}}',
          950: '{{PRIMARY_950}}',
        },
        secondary: {
          50: '{{SECONDARY_50}}',
          100: '{{SECONDARY_100}}',
          200: '{{SECONDARY_200}}',
          300: '{{SECONDARY_300}}',
          400: '{{SECONDARY_400}}',
          500: '{{SECONDARY_500}}',
          600: '{{SECONDARY_600}}',
          700: '{{SECONDARY_700}}',
          800: '{{SECONDARY_800}}',
          900: '{{SECONDARY_900}}',
          950: '{{SECONDARY_950}}',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            'h1, h2, h3, h4': {
              color: 'inherit',
              fontWeight: '600',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
      },
      // Style preset overrides applied here
      // {{STYLE_BORDER_RADIUS}}
      // {{STYLE_BOX_SHADOW}}
    },
  },
  plugins: [typography],
};
