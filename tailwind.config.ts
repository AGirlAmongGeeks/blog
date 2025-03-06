import type { Config } from 'tailwindcss';
// import * as lineClamp from '@tailwindcss/line-clamp';
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
    themes: ['lemonade', 'retro'],
  },
  plugins: [typography, daisyui],
} satisfies Config;
