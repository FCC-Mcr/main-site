import React from "react"
import { render } from "@testing-library/react"
import TwitterBar from "./index.js"
import logo from "../../../icons/twitter.svg"

describe("Twitter Bar Test", () => {
  const createTwitterBar = text => <TwitterBar />
  console.log(logo)

  it("renders button text Follow us on Twitter", () => {
    const twitterBar = createTwitterBar()

    const { getByTestId } = render(twitterBar)
    // Assertion
    expect(getByTestId("button")).toHaveTextContent("Follow us on Twitter")
    // --> Test will pass
  })

  it("renders the twitter logo", () => {
    const { getByTestId } = render(createTwitterBar())
    // Assertion
    expect(getByTestId("twitterLogo")).toBeTruthy()
    expect(getByTestId("twitterLogo")).toHaveAttribute("src")
    // --> Test will pass
  })
})
