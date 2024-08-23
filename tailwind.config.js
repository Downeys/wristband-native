/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lacquer-Regular', 'sans-serif'],
        secondary: ['LifeSavers-Regular'],
        secondaryBold: ['LifeSavers-Bold'],
        secondaryExtraBold: ['LifeSavers-ExtraBold'],
      },
      colors: {
        wbGreen: "#3ae500",
        wbBlue: "#74efdb",
        wbPink: "#fb03bc"
      }
    },
  },
  plugins: [],
}

