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
      // => @media (min-width: 768px) { ... } ipad

      lg: "1024px",
      // => @media (min-width: 1024px) { ... } ipad pro

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        bgradient:
          "linear-gradient(180deg, rgba(25, 128, 1, 0) 0%, rgba(25, 127, 0, 0.82) 108.5%)",
      },
      colors: {
        green: "#197F00",
        lgreen: "#F1FDD9",
        pgreen: "#C9E396",
      },
      keyframes: {
        scrollingleft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translatex(-144vw)" },
        },
        scrollingright: {
          "0%": { transform: "translateX(-144vw)" },
          "100%": { transform: "translatex(0)" },
        },
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "marquee-left": "scrollingleft 20s linear infinite",
        "marquee-right": "scrollingright 20s linear infinite",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
