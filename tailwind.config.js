/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          darker: "rgb(198, 46, 32)",
        },
        dark: {
          DEFAULT: "rgb(var(--color-dark))",
          darker: "rgb(18, 18, 18))",
        },
        black: "rgb(var(--color-black))",
        white: "rgb(var(--color-white))",
        light: "rgb(var(--color-light))",
      },
      transitionDuration: {
        DEFAULT: ".2s",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-out",
      },
      borderRadius: {
        DEFAULT: ".5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
