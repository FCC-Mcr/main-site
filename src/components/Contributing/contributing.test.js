import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Contributing from "./"

describe("Contributing section", () => {
  test("Snapshot", () => {
    const { container } = render(<Contributing />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
