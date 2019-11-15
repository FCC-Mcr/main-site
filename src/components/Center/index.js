import styles from "./center.module.scss"

import React from "react"

const index = ({ children }) => {
  return <div className={styles.center}>{children}</div>
}

export default index
