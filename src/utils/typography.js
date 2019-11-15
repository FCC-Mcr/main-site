import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerLineHeight: 1.2,
  scaleRatio: 2.8,
  headerFontFamily: ["Inter"],
  headerColor: "#2c2c2c",
  headerWeight: 800,
  bodyFontFamily: ["Inter"],
  bodyColor: "#2c2c2c",
  bodyWeight: 500,
  blockMarginBottom: "1rem",
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    "h3, h4, h5, h6": {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      color: "#2c2c2c",
    },
    h1: {
      marginBottom: "1.666rem",
    },
    code: {
      fontSize: rhythm(1 / 2),
    },
    body: {
      fontKerning: "auto",
    },
    a: {
      color: "#2c2c2c",
    },
    ".xx-large-text": {
      fontSize: "4.5rem",
    },
    ".large-text": {
      fontSize: "2.625rem",
    },
    ".small-text": {
      fontSize: "0.875rem",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
