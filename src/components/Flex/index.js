import React from "react"
import styles from "./flex.module.scss"
import Center from "../Center"

const index = ({ children }) => (
  <Center>
    <div className={`${styles.flex} px-1`}>{children}</div>
  </Center>
)

export default index
