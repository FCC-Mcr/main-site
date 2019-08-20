import React from "react"

import TwitterBar from "./TwitterBar"
import SlackBox from "./SlackBox"

import styles from "./socialPanel.module.scss"

const SocialPanel = () => (
  <div className={`${styles.socialPanel} ml-1`}>
    <h1 className={styles.title}>Social</h1>
    <SlackBox />
    <TwitterBar className={styles.twitter} />
  </div>
)

export default SocialPanel
