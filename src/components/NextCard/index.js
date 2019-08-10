import React from "react"
import { Link } from "gatsby"
import styles from "./nextcard.module.scss"

import Clock from "../../icons/clock.svg"
import Location from "../../icons/location.svg"

const index = props => {
  return (
    <div className={styles.card}>
      <p>Our next meet up is</p>
      <h2>Wednesday 25th September</h2>
      <div>
        <p>
          <Clock />
          18:00 - 21:00
        </p>
        <p>
          <Location />
          The Hive
        </p>
      </div>
      <Link to="/">Add to calendar</Link>
    </div>
  )
}

export default index
