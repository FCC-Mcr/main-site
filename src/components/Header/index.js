import React from "react"
import NextCard from "../NextCard"
import styles from "./header.module.scss"

const index = props => {
  return (
    <div className={styles.header}>
      <div>
        <h1>FreeCodeCamp Manchester</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <NextCard />
      </div>
    </div>
  )
}

export default index
