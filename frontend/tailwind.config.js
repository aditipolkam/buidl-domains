/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43C6AC",
        secondary: "#0c0a29",
      },
    },
  },
  plugins: [],
};
