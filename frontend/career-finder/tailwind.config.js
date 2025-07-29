/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      primary : "#030014",
      secondary: "#151312",
      light: {
        100 : "#D6C6FF",
        200 : "#A855DB",
      }
    },
  },
  plugins: [],
}
 