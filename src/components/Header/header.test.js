import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Header from "./"

// mock out subcomponent
jest.mock("../NextCard", () => ({
  __esModule: true,
  A: true,
  default: () => <div>mock next card</div>,
}))

describe("header component", () => {
  test("Snapshot", () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
