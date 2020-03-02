import React from "react"
import styles from "./flex.module.scss"
import Center from "../Center"

const Index = ({ children, className }) => (
  <Center>
    <div className={`${styles.flex} ${className ? className : ""}`}>
      {children}
    </div>
  </Center>
)

export default Index
