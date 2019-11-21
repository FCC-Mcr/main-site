import styles from "./center.module.scss"

import React from "react"

const index = ({ children, maxWidth }) => {
  return (
    <div className={styles.center} style={{ maxWidth }}>
      {children}
    </div>
  )
}

export default index
