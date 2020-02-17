import React from "react"
import { render } from "@testing-library/react"
import Button from "./index.js"

describe("Button test", () => {
  const createButton = text => <Button text={text} />

  it("renders button text bloo blah", () => {
    const button = createButton("blah")

    const { getByTestId } = render(button)
    // Assertion
    expect(getByTestId("button")).toHaveTextContent("blah")
    // --> Test will pass
  })
})
