import React from "react"
import styles from "./button.module.scss"

const index = ({ text = "Read More", color = "#000000", onClick }) => {
  return (
    <button className={styles.button} style={{ color }} onClick={onClick}>
      {text} →
    </button>
  )
}

export default index
