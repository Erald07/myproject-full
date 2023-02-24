/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        "primary": "#e72c6f",
        "secondary": "#789940e6"
      },
      transitionDuration: {
        '0': '0ms',
        '1500': '1500ms',
        '2000': '2000ms',
       }
    },
    container: {
      center: true,
      // padding: "1.25rem",
      screens: {
        lg: "1024px",
        xl: "1280px",
        "2xl": "1301px"
        // xl: "1310px",
        // "2xl": "1285px",
      },
    },
  },
  plugins: [],
}
