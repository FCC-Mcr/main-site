import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Flex from "./"

describe("Flex component", () => {
  test("Snapshot", () => {
    const { container } = render(<Flex />)
    expect(container).toMatchSnapshot()
  })
})
