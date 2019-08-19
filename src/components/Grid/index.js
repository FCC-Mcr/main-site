import React from "react"
import styles from "./grid.module.scss"

const index = ({ children }) => {
  return <div className={`${styles.grid} center`}>{children}</div>
}

export default index
