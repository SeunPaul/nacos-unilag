/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      // => @media (min-width: 350px) { ... }

      vs: "460px",
      // => @media (min-width: 460px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        green: "#197F00",
        lgreen: "#F1FDD9",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
