import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerLineHeight: 1.3,
  scaleRatio: 2,
  headerFontFamily: ["Public Sans Web"],
  headerWeight: 800,
  bodyFontFamily: ["Public Sans Web"],
  bodyWeight: 500,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    "h3, h4, h5, h6": {
      fontFamily: "Public Sans Web",
      fontStyle: "normal",
      fontWeight: 700,
    },
    code: {
      fontSize: rhythm(1 / 2),
    },
    body: {
      fontKerning: "auto",
    },
    a: {
      color: "#3f6c41",
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
