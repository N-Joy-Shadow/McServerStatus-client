/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{jsx,tsx,html}",
    "./components/**/*.{jsx,tsx,html}",
    "./src/**/*.{jsx,tsx,html}",
    "./pages/**/*.{jsx,tsx,html}",
            

],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
