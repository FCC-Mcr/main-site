import React from "react"

import TwitterBar from "./TwitterBar"
import SlackBox from "./SlackBox"

import styles from "./socialPanel.module.scss"

const SocialPanel = () => (
  <div>
    Social
    <SlackBox />
    <TwitterBar />
  </div>
)

export default SocialPanel
