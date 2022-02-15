const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Kumbh Sans", "sans-serif"],
      material: ["Material Icons Outlined"],
    },
    screens: {
      "2xs-only": {
        max: "340px",
      },
      sm: "580px",
      md: "720px",
      xm: "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      ...colors,
      orange: {
        400: " hsl(26, 100%, 55%)",
        300: "#FFAC6A",
        100: "hsl(25, 100%, 94%)",
      },
      slate: {
        700: "hsl(220, 13%, 13%)",
        600: "hsl(219, 9%, 45%)",
        400: "hsl(220, 14%, 75%)",
        300: "hsl(223, 64%, 98%)",
      },
    },
    extend: {
      backgroundImage: {
        prev: "url('./src/assets/images/icon-next.svg')",
        next: "url('./src/assets/images/icon-next.svg')",
      },
    },
  },
  plugins: [],
}
