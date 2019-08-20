import React from "react"

// components
import Card from "../../Card"

// icons
import slack from "../../../icons/slack.svg"

// styles
import styles from "./slackBox.module.scss"

const SlackBox = () => (
  <Card className={`${styles.wrap} u-shadow--3`} borderRadius="20">
    <img src={slack} alt="" />
    <p>
      Join us on Slack to meet other members, get help with the FreeCodeCamp
      curriculum and pair up with other learners!
    </p>
    <a
      href="https://fcc-mcr-invite.herokuapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>
        <span>join the meetup</span>
      </button>
    </a>
  </Card>
)

export default SlackBox
