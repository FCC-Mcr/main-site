import styles from "./center.module.scss"

import React from "react"

const Index = ({ children, maxWidth, className }) => {
  return (
    <div
      className={`${styles.center} ${className ? className : ""}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  )
}

export default Index
