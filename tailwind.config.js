/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        background: "#060522",
        typography: "#888EA0",
        primary: "#FD3846",
      },
    },
  },
  plugins: [],
};
