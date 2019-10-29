import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Carousel from "./"

describe("Carousel section", () => {
  test("Snapshot", () => {
    const { container } = render(<Carousel />)
    expect(container).toMatchSnapshot()
  })
})
