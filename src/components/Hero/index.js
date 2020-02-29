import React from "react"
import Center from "../Center"

import styles from "./hero.module.scss"

const Hero = () => (
  <Center maxWidth="var(--content-width)" className={styles.hero}>
    <h1 className="xx-large-text">FreeCodeCamp Manchester</h1>
    <p>
      Welcome to FreeCodeCamp Manchester! We are mentors, coders and learners
      from Manchester, Greater Manchester and its surrounding areas and one part
      of the global FreeCodeCamp Community. We hold Study Groups twice a month
      for our members to meet in person, code together and get help and advice
      from Organisers and Mentors - Keep an eye on the events for further
      information and we hope to see you around!
    </p>
  </Center>
)

export default Hero
