/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
    },
    extend: {
      backgroundImage: {
        'bgnav': "url('../public/images/bgnav.svg')",
      },
  },
  },
  plugins: [],
}

