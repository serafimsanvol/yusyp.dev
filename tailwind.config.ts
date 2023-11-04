import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#0045ff',
          secondary: '#3CDBA2',
          accent: '#9333ea',
          neutral: '#202020',
          'base-100': '#101010',
          info: '#9333ea',
          success: '#0e5d4a',
          warning: '#fca522',
          error: '#F00',
        },
      },
      {
        light: {
          primary: '#0045ff',
          secondary: '#3CDBA2',
          accent: '#9333ea',
          neutral: '#ededed',
          'base-100': '#f2f2f2',
          info: '#9333ea',
          success: '#0e5d4a',
          warning: '#fca522',
          error: '#F00',
        },
      },
    ],
  },
};
export default config;
