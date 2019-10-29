import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import BlogPosts from "./"

describe("BlogPosts", () => {
  test("renders empty when passed no data", () => {
    const { container } = render(<BlogPosts />)
    expect(container).toMatchSnapshot()
  })
})
