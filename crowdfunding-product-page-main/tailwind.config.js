/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/images/image-hero-desktop.jpg')",
        backgroundMobile:"url('/images/image-hero-mobile.jpg')",
      },
      colors:{
        emeraldLight:"#3cb4ac",
        emeraldDark: "#2a8f87", 
        grayLight:"#f2f2f2",
      }
    },
  },
  plugins: [],
}
