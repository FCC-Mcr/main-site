import React from "react"
import Center from "../Center"
import Terminal from "./Terminal"
import styles from "./hero.module.scss"
import Button from "../Button"

const Hero = () => (
  <Center maxWidth="1100px" className={styles.hero}>
    <div>
      <h1 className="xx-large-text">FreeCodeCamp Manchester</h1>
      <a href="https://www.freecodecamp.org/">
        <Button
          color="var(--white-color)"
          backgroundColor="var(--primary-color)"
          text="Start your journey →"
        />
      </a>
    </div>
    <Terminal />
  </Center>
)

export default Hero
