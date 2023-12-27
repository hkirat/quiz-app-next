/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { width: 0 },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        slide: "slide 1s linear",
      },
    },
  },
  plugins: [],
};
