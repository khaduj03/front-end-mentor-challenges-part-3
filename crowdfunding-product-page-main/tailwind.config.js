/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/images/image-hero-desktop.jpg')",
      },
      colors:{
        emeraldLight:"#3cb4ac",
        emeraldDark: "#2a8f87", 
      }
    },
  },
  plugins: [],
}
