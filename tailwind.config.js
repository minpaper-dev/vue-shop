module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    colors: {
      gray: {
        100: '#242933',
        200: '#1F2937',
        300: '#374151',
        400: '#3D4451',
        500: '#4B5563',
        600: '#A6ADBA',
        700: '#D1D5DB',
        800: '#E5E7Eb',
        900: '#F3F4F6',
      },
      black : '#191D24',
      mint : '#37CDBE',
      red : '#EF4444',
      purple : '#641AE6',
      white : '#FFFFFF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};