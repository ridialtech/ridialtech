module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_05": "#00000005", "900_0f": "#0000000f" },
        blue_gray: { 200: "#a0aec0", 400: "#718096", 900: "#2d3748" },
        cyan: { 300: "#4fd1c5" },
        gray: { 50: "#f8f9fa", 400: "#c4c4c4", 800: "#54473c", 900: "#151928", "900_01": "#0e1629" },
        green: { 600: "#34a853" },
        indigo: { 50: "#e2e8f0" },
        red: { 500: "#ea4335" },
        teal: { 300: "#38b2ac", 600: "#00837e" },
        white: { a700: "#ffffff", a700_cc: "#ffffffcc", a700_d1: "#ffffffd1" },
        yellow: { a700: "#ffce00" },
      },
      boxShadow: { xs: "0 2px 5px 0 #00000005", sm: "0 3.5px 5px 0 #00000005", md: "0 2px 5px 0 #0000000f" },
      fontFamily: { helvetica: "Helvetica" },
      backgroundImage: { gradient: "linear-gradient(136deg, #ffffffd1,#ffffffcc)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
