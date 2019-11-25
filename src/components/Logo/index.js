import React from "react"

import accessibilityLogo from "../../../logos/accessibility.svg"
import javascriptLogo from "../../../logos/javascript.svg"
import cssLogo from "../../../logos/css.svg"
import nodeLogo from "../../../logos/node.svg"
import reactLogo from "../../../logos/react.svg"
import testingLogo from "../../../logos/testing.svg"
import toolbeltLogo from "../../../logos/toolbelt.svg"

const Index = ({ name }) => {
  let logo = name => {
    switch (name) {
      case "accessibility": {
        return accessibilityLogo
      }
      case "node": {
        return nodeLogo
      }
      case "testing": {
        return testingLogo
      }
      case "toolbelt": {
        return toolbeltLogo
      }
      case "javascript": {
        return javascriptLogo
      }
      case "react": {
        return reactLogo
      }
      case "css": {
        return cssLogo
      }
      default: {
        return console.log("oh no there's no resources")
      }
    }
  }

  return <img src={logo(name)} alt={`${name} logo`} />
}

export default Index
