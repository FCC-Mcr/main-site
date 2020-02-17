import React from "react"
import Card from "../../Card"
import Button from "../../Button"

import twitterLogo from "../../../icons/twitter.svg"

import styles from "./twitterBar.module.scss"

const TwitterBar = () => (
  <Card className={styles.twitter}>
    <img data-testid="twitterLogo" src={twitterLogo} alt="twitter logo" />
    <a href="https://twitter.com/FreeCodeCampMCR">
      <Button text="Follow us on Twitter →" color="#1b92db" />
    </a>
  </Card>
)

export default TwitterBar
