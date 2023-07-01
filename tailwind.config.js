/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#60c7ac",
      red:"#c84a55",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "gray-2": "#5d6071",
      "gray-light-2": "#abadc2",
      "blue-2": "#f8f9fe",
      "blue-3": "#aeb2cb",
      "dark-button": "#262a45",
      "dark-bg": "#1d2029",
      "dark-item": "#252b43",
      "light-item": "#f0f3fa",
      "dark-header": "#20222f",
      "light-header": "#f8f9fe",
      "light-text": "#7c7e8a",
      "facebook": "#188ff3",
      "twitter": "#1da2ef",
      "youtube":"#c4042d",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      inter: ["Inter"],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".08em",
      widest: ".4em",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

