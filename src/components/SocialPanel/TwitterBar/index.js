import React from "react"

import arrow from "../../../icons/arrow-white.svg"

import styles from "./twitterBar.module.scss"

const TwitterBar = () => (
  <a
    href="https://twitter.com/FreeCodeCampMCR"
    className={`${styles.twitterBar} u-shadow--3`}
  >
    Follow us on Twitter
    <img src={arrow} alt="" />
  </a>
)

export default TwitterBar
