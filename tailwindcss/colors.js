const colors = require("tailwindcss/colors");

module.exports = {
  transparent: "transparent",
  current: "currentColor",

  black: colors.black,
  white: colors.white,
  gray: {
    ...colors.coolGray,
    100: "#f7f7f7",
    200: "#E8F0FA",
    300: "#DBDBDB",
    500: "#9EA3EE",
    600: "#7186A0",
    800: "#333769",
    900: "#132B50",
  },
  red: { ...colors.red, 500: "#ff3434" },
  orange: { ...colors.orange, 200: "#FFD911", 500: "#FE721C" },
  teal: "#36C2CF",
  blue: colors.blue,
  indigo: {
    ...colors.indigo,
    500: "#53589D",
    700: "#4D55BC",
    900: "#2E37A4",
    1000: "#161A4F",
  },
  //   purple: colors.violet,
  pink: colors.pink,
};
