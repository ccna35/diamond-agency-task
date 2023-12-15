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
      padding: {
        DEFAULT: "1rem",
        // sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
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
        navbarDropdownMenu: "0px 20px 80px 0px rgba(171, 181, 189, 0.35)",
      },
      animation: {
        "ping-slow": "ping 2s linear infinite",
        "ping-slower": "ping 3s linear infinite",
        screenLoader: "screenLoader 1s ease-in-out infinite",
      },
      backgroundImage: {
        headerBg:
          "linear-gradient(to right, rgba(254,164,68,.9), rgba(252,101,57,.9)), url('./testimonials/bg-testi1.webp')",
      },
      keyframes: {
        screenLoader: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "51%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(180deg)" },
        },
      },
    },
  },
  plugins: [],
};
