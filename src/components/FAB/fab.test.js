import React from "react"
import { render, fireEvent, getByAltText } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import FabMenu from "./"

describe("Fab Menu", () => {
  test("Initially renders with only menu button", () => {
    const { container, getByAltText } = render(<FabMenu />)
    expect(container.childElementCount).toEqual(1)
    expect(getByAltText("menu button")).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test("OnClick renders fab nav menu", () => {
    const { container, getByAltText } = render(<FabMenu />)
    fireEvent.click(getByAltText("menu button"))
    expect(container.childElementCount).toEqual(2)
    expect(container.querySelector("nav")).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test("Once opened re-clicking the menu button will close the menu", () => {
    const { container, getByAltText } = render(<FabMenu />)

    // click to open then close
    fireEvent.click(getByAltText("menu button"))
    fireEvent.click(getByAltText("menu button"))

    expect(container.childElementCount).toEqual(1)
    expect(getByAltText("menu button")).toBeInTheDocument()
    expect(container.childElementCount).toEqual(1)
    expect(container.querySelector("nav")).not.toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
