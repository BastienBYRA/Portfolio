/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        maxmd: { raw: "(max-height: 768px)" },
        // => @media (man-height: 768px) { ... }
      },
    },
  },
  plugins: [],
};
