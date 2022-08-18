/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   slide: {
      //     '0%':{  
      //       translate: -109,
      //       opacity: 0
      //     },
      //     '100%': {
      //         opacity: 1
      //     },
      //   }
      // },
      // animation: {
      //     slide: 'slide 3s',
      // }
    },
  },
  plugins: [
    require("tailwindcss-animate"),

  ],
}
