/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Yeseva One", "serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#001d23",
        accent: "#FC6539",
        secondary: "#FEA444",
        secondaryText: "#595959",
        greyBg: "#F7F7F7",
      },
      fontFamily: {
        yeseva: ["Yeseva One", "serif"],
      },
      boxShadow: {
        navbar: "0 8px 20px 0 rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "ping-slow": "ping 2s linear infinite",
        "ping-slower": "ping 3s linear infinite",
      },
      backgroundImage: {
        headerBg:
          "linear-gradient(to right, rgba(254,164,68,.9), rgba(252,101,57,.9)), url('./testimonials/bg-testi1.webp')",
      },
    },
  },
  plugins: [],
};
