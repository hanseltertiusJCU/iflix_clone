/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  content: [
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{vue,html,js}',
    './src/layouts/**/*.{html,js}',
    './src/index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
