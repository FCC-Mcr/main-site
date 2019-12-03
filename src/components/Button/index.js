import React from "react"
import styles from "./button.module.scss"

const Index = ({
  text = "Read More",
  color = "#000000",
  backgroundColor = "",
  onClick,
  isDisabled,
}) => (
  <button
    className={`${styles.button} ${backgroundColor && styles.background}`}
    style={{
      color,
      backgroundColor: isDisabled ? "var(--grey-color)" : backgroundColor,
    }}
    onClick={onClick}
    disabled={isDisabled ? true : false}
  >
    {text}
  </button>
)

export default Index
