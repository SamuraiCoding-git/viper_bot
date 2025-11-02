/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yak-bordeaux': '#830f0c',
        'yak-gold': '#D6B36A',
        'yak-ivory': '#F6E7C1',
        'yak-placeholder': '#BDAE94',
        'yak-black': '#181818',
        'viper-grey': '#012219'
      },
      fontFamily: {
        inknut: ['"Inknut Antiqua"', 'serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'yak-bg': "url('/viper_bg.png')"
      },
    },
  },
  plugins: [],
}

