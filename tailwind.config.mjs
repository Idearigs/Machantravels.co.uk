/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'SF Pro Display', 'sans-serif'],
      },
      colors: {
        gold: '#C9A84C',
        'dark-green': '#1A3A2A',
        'light-green': '#2D5A3D',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
