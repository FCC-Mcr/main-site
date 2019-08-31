import React from "react"

import TwitterBar from "./TwitterBar"
import SlackBox from "./SlackBox"

import styles from "./socialPanel.module.scss"

const SocialPanel = () => (
  <div className={`${styles.socialPanel} ml-1`}>
    <h2 className={styles.title}>Social</h2>
    <SlackBox />
    <TwitterBar className={styles.twitter} />
  </div>
)

export default SocialPanel
