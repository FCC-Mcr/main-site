import React from "react"
import styles from "./grid.module.scss"

const index = ({ children, style }) => {
  console.log(style)
  return (
    <div className={styles.grid} style={style}>
      {children}
    </div>
  )
}

export default index
