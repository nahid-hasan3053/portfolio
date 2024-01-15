/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#950740",
          secondary: "#C3073F",
          accent: "#1A1A1D",
          neutral: "#4E4E50",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake"
    ],
  },
  plugins: [require("daisyui")],
}