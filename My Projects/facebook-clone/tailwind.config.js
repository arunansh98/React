/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1b74e4",
        green: "#42b72a",
      },
      fontFamily: {
        basic: "Helvetica, Arial, sans-serif",
        logo: "SFProDisplay-Regular, Helvetica, Arial, sans-serif;",
      },
    },
  },
  plugins: [],
};
