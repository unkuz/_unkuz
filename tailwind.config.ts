import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./app/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cuz: "Cuz",
        au: "August",
      },
      keyframes: {
        loading: {
          "0%": { left: "-100%", width: "100%" },
          "100%": { left: "100%", width: "100%" },
        },
      },
      animation: {
        loading: "loading 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
