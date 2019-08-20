import React from "react"
import styles from "./flex.module.scss"

const index = ({ children }) => {
  return <div className={`${styles.grid} center px-1`}>{children}</div>
}

export default index
