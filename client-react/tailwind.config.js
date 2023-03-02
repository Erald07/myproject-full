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
        "secondary": "#789940e6",
        "Beige": "#cec4ab",
        "Giallo": "#f7f024",
        "Non definito": "#fff",
        "Verde": "#06cb34",
        "Bianco": "#fff",
        "Grigio": "#06cb34",
        "Rosa": "#dd96bd",
        "Blu": "#1926da",
        "Marrone": "#64410e",
        "Rosso": "#e82121",
        "Fantasia": "#fff",
        "Nero": "#000",
        "Senza colore": "#fff",
        "Azzurro": "#0080ff",
        "Denim": "#7f97b5",
        "Panna": "#ecefe1",
        "Naturale": "#ecefe1",
        "Arancione": "#ffa500",
      },
      transitionDuration: {
        '0': '0ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
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
