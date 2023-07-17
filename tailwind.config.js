module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: '#1F2937',
        dark: '#A6ADBA',
      },
      header : {
        DEFAULT: '#374151',
        dark: '#FFFFFF',
      },
      headerBg : {
        DEFAULT: '#FFFFFF',
        dark: '#191D24',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};