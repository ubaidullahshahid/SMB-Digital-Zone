/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        "4.9": "4.9px",
      },
    },
  },
  plugins: [],
};
