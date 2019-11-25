import React from "react"
import styles from "./button.module.scss"

const Index = ({
  text = "Read More",
  color = "#000000",
  backgroundColor = "",
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${backgroundColor ? styles.background : ""}`}
      style={{ color, backgroundColor }}
      onClick={onClick}
    >
      {text} →
    </button>
  )
}

export default Index
