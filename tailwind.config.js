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
      // screens: {
      //   "2xl": "1400px",
      // },
    },
    extend: {
      colors: {
        primary: "#001d23",
        accent: "#FC6539",
        secondary: "#FEA444",
        secondaryText: "#595959",
      },
      fontFamily: {
        yeseva: ["Yeseva One", "serif"],
      },
      boxShadow: {
        navbar: "0 8px 20px 0 rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fade: {
          "0%": {
            width: "2rem",
            height: "2rem",
            background: "white",
            opacity: 0.5,
          },
          "100%": {
            width: "100%",
            height: "100%",
            background: "white",
            opacity: 0,
          },
        },
      },
      animation: {
        fade: "fade 1s ease-in-out 1 forwards alternate",
      },
    },
  },
  plugins: [],
};
