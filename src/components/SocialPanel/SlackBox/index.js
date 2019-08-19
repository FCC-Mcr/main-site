import React from "react"

// components
import Card from "../../Card"

// icons
import Slack from "../../../icons/slack.svg"
import JoinSvg from "./JoinSvg"

import styles from "./slackBox.module.scss"

const SlackBox = () => (
  <Card className={styles.wrap}>
    <Slack />
    <p>
      Join us on Slack to meet other members, get help with the FreeCodeCamp
      curriculum and pair up with other learners!
    </p>

    <a
      href="https://fcc-mcr-invite.herokuapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="u-screen-reader-only">join the meetup</span>
      <JoinSvg />
    </a>
  </Card>
)

export default SlackBox
