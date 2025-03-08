import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  daisyui: {
    themes: [
      ...new Set([
        process.env.THEME_HOME || 'lemonade',
        process.env.THEME_LIST || 'garden',
        process.env.THEME_BLOG || 'retro',
      ]),
    ],
  },
  plugins: [typography, daisyui],
} satisfies Config;
