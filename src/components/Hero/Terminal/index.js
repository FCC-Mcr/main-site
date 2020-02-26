import React from "react"
import styles from "./terminal.module.scss"

const index = () => {
  return (
    <div className={`shadow-large ${styles.terminal}`}>
      <div className={styles.header}>
        <div className="traffic">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="show"></span>
        </div>
        <p>Bash</p>
      </div>
      <div className={styles.body}>
        <ul>
          <li>
            $ Welcome to <b>FreeCodeCamp Manchester!</b>
          </li>
          <li>
            $ We are <b>mentors, coders and learners</b> from Manchester
          </li>
          <li>
            $ <b>Twice</b> a month we meet in person to learn and code together
          </li>
          <li>$ Keep an eye on the events for further information!! 👀</li>
        </ul>
      </div>
    </div>
  )
}

export default index
