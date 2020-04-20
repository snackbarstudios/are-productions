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
    bold: 500
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
    },
    h2: {
      fontSize: [36, null, 48],
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
      textTransform: "uppercase",
      mt: 4,
      mb: 2
    },
    h4: {
      ":before, :after": {
        content: '" "',
        display: "block",
        borderBottom: "1px solid #810904",
        borderTop: "1px solid #810904",
        margin: "0 20px 0 0",
        flex: "1 0 20px"
      },
      ":after": {
        margin: "0 0 0 20px"
      },
      whiteSpace: "nowrap",
      fontFamily: "heading",
      display: "flex",
      width: ["300px", "400px"],
      margin: "0 auto",
      justifyContent: ["center"],
      alignItems: ["center"],
      textAlign: ["center"],
      position: [null, "absolute"],
      top: [null, "50%"],
      left: [null, "50%"],
      transformOrigin: "0 0",
      transform: [null, "rotate(-90deg) translate(-50%, -50%)"],
      fontWeight: "400",
      textTransform: "uppercase"
    }
  }
};
