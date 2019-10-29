import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Card from "./"

describe("Basic Card Component functionality", () => {
  // TODO: havent applied border radius tests as im not sure the exact use case (should be done with class?)

  test("Renders empty with defaults when called with no props", () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Renders children", () => {
    const { container, getAllByText } = render(
      <Card>
        <div>child1</div>
        <div>child2</div>
      </Card>
    )
    expect(getAllByText("child1")).toHaveLength(1)
    expect(getAllByText("child2")).toHaveLength(1)
    expect(getAllByText("child", { exact: false })).toHaveLength(2)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Appends className prop to class", () => {
    const { container } = render(<Card className="addedText" />)
    expect(container.firstChild.classList.contains("addedText")).toBe(true)
    expect(container.firstChild).toMatchSnapshot()
  })

  test("Appends className for shadow based on height prop", () => {
    const { container } = render(<Card height={2} />)
    expect(container.firstChild.classList.contains("u-shadow--2")).toBe(true)
    expect(container.firstChild).toMatchSnapshot()
  })
})
