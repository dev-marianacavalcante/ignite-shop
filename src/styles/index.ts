import { CreateStitches, createStitches } from "@stitches/react";

export const {
  config,
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      gray100: "#e1e1e6",
      gray300: "#c4c4cc",
      gray500: "#8D8D99",
      gray700: "#2b2b30",
      gray800: "#202024",
      gray900: "#121214",

      green500: "#00875f",
      green300: "#00B37E",
    },

    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
