import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  scaleRatio: 2,
  headerFontFamily: ["PublicSans-ExtraBold"],
  bodyFontFamily: ["PublicSans-Medium"],
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    "h3, h4, h5, h6": {
      fontFamily: "PublicSans-Bold",
    },
    code: {
      fontSize: rhythm(1 / 2),
    },
    body: {
      fontKerning: "auto",
    },
    a: {
      color: "#4D844F",
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
