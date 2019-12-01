import React from "react"
import Card from "../../Card"

import twitterLogo from "../../../icons/twitter.svg"

import styles from "./twitterBar.module.scss"

const TwitterBar = () => (
  <Card className={styles.twitter}>
    <img src={twitterLogo} alt="twitter logo" />
    <a href="https://twitter.com/FreeCodeCampMCR">
      <button>Follow us on Twitter →</button>
    </a>
  </Card>
)

export default TwitterBar
