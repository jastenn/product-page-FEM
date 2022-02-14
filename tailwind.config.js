const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Kumbh Sans", "sans-serif"],
    },
    screens: {
      sm: "580px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      ...colors,
      orange: {
        100: "hsl(25, 100%, 94%)",
        400: " hsl(26, 100%, 55%)",
      },
      slate: {
        700: "hsl(220, 13%, 13%)",
        600: "hsl(219, 9%, 45%)",
        400: "hsl(220, 14%, 75%)",
        300: "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
}
