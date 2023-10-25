/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik, sans-serif"],
        signika: ["Signika Negative"],
        roboto: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
