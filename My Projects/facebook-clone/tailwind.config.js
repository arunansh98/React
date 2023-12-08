/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1b74e4",
        green: "#42b72a",
        black: "#1c1e21",
      },
      fontFamily: {
        primary: "Helvetica, Arial, sans-serif",
        secondary: "SFProDisplay-Regular, Helvetica, Arial, sans-serif;",
      },
    },
  },
  plugins: [],
};
