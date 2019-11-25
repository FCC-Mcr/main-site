import React from "react"
import styles from "./flex.module.scss"
import Center from "../Center"

const Index = ({ children }) => (
  <Center>
    <div className={styles.flex}>{children}</div>
  </Center>
)

export default Index
