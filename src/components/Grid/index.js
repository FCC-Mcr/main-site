import React from "react"
import styles from "./grid.module.scss"

const Index = ({ children, style }) => (
  <div className={styles.grid} style={style}>
    {children}
  </div>
)

export default Index
