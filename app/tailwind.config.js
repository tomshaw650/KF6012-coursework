/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        bgblack: "#191717",
        bgdark: "#090808",
        red: "#CF0000",
        orange: "#9D3922",
        blue: "#0160A0",
        modal: "rgba(91, 112, 131, 0.4);",
      },
    },
  },
  plugins: [],
};
