/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        period: "bg-gradient-to-b from-yellow-300 via-pink-500 to-blue-700",
        stack: "url('assets/background/stack.jpg')",
      },
      screens: {
        ssm: "420px",
        maxmd: { raw: "(max-height: 768px)" },
        // => @media (man-height: 768px) { ... }
      },
    },
  },
  plugins: [],
};
