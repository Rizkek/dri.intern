/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['var(--font-manrope)'],
            serif: ['var(--font-fraunces)'],
        },
        colors: {
        'dark-purple': '#24053E',
        'eucalyptus': '#44FFA1',
        'davys-grey': '#584D62',
        'ghost-white': '#FCF8FF',
        }
    },
  },
  plugins: [],
}