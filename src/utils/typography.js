import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerLineHeight: 1.4,
  scaleRatio: 2.8,
  headerFontFamily: ["Inter"],
  headerColor: "var(--black-color)",
  headerWeight: 800,
  bodyFontFamily: ["Inter"],
  bodyColor: "var(--black-color)",
  bodyWeight: 500,
  blockMarginBottom: "1rem",
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    "h3, h4, h5, h6": {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      color: "var(--black-color)",
    },
    h1: {
      marginBottom: "1.5rem",
    },
    code: {
      fontSize: rhythm(1 / 2),
    },
    body: {
      fontKerning: "auto",
    },
    a: {
      color: "var(--black-color)",
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
