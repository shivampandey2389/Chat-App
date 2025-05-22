/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
