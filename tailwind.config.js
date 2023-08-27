/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#197F00",
        lgreen: "#F1FDD9",
      },
      screens: {
        xs: "350px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
