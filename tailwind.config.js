/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx, html, mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        light_blue: { 200: "#79D0F1", "200_33": "#79DF133" },
        gray: {
          100: "#F7F7F7",
          500: "#8F92A1",
          800: "#4B4C4D",
          900: "#1E1F20",
          "900_cc": "#1E1F20CC",
          "900_33": "#1E1F2033",
          "500_1e": "#8F92A166",
          "500_66": "#8F92A166",
          "100_33": "#F7F7F733",
          "100_99": "#F7F7F799",
          "900_00": "#1E1F20CC",
          "900_66": "#1E1F2066",
          "500_cc": "#8F92A1CC",
          "500_33": "#8F92A133",
          "500_99": "#8F92A199",
          "500_14": "#8F92A114",
        },
        blue: { A700: "#0659FD" },
        indigo: { 600: "#39579B", A200: "#666AEC", A200_33: "666AEC33" },
        green: { 400: "#53D769" },
        white: {
          A700_CC: "#FFFFFFCC",
          A700_99: "#FFFFFF99",
          A700_33: "#FFFFFF33",
          A700_66: "#FFFFFF66",
          A700: "#FFFFFF",
        },
        red: { A200: "#FF4E4E" }
      },
      boxShadow:{},
      fontFamily: {inter: "Inter", sfprodisplay:"SF Pro Display"},
      backgroundImage: {gradient: "linear-gradient(180deg, #1E1F2000, #1E1F10CC)"}
    },
  },
  plugins: [require("@tailwindcss/forms")],
}