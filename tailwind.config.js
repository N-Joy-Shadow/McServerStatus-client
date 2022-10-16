/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./utils/components/**/*.{js,ts,jsx,tsx}",
    "./utils/layouts/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [

    require('@tailwindcss/typography')
  ],
}
