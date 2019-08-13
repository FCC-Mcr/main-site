import React from "react"
import { Link } from "gatsby"
import styles from "./nextcard.module.scss"

// components
import Card from "../Card"

// icons
import Clock from "../../icons/clock.svg"
import Location from "../../icons/location.svg"

const NextCard = () => (
  <Card className={styles.nextCard} height={3}>
    <p>Our next meet up is</p>
    <h2>Wednesday 25th September</h2>
    <div>
      <p>
        <Clock /> 18:00 - 21:00
      </p>
      <p>
        <Location /> The Hive
      </p>
    </div>
    <Link className="u-shadow--4" to="/">
      Add to calendar
    </Link>
  </Card>
)

export default NextCard
