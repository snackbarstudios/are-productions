export default {
  colors: {
    text: "#fff",
    background: "#000",
    primary: "#810904",
    highlight: "B6110B"
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Roboto, sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em"
  },
  useBodyStyles: "true",
  useBorderBox: "true",
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body"
    },
    h1: {
      fontSize: [36, null, 48],
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
      textTransform: "uppercase",
      mt: 4,
      mb: 2
    }
  }
};
