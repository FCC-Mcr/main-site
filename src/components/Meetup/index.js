import React from "react"
import Button from "../Button"

import downloadCalendarFile from "../../utils/downloadCalendarFile"
import styles from "./meetup.module.scss"

// icons
import clock from "../../icons/clock.svg"
import location from "../../icons/location.svg"

const Index = ({ node }) => {
  let date = new Date(node.start)
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  // remove any <br> tags at the beginning of the string
  node.excerpt = node.excerpt
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<b>|<\/b>/gm, "")
    .replace(/<a\s+/gi, `<a rel="noopener" `)

  return (
    <div className={styles.meetup}>
      <span>{date.toLocaleDateString("en-GB", options)}</span>
      <h3>{node.title}</h3>
      <div>
        <img src={clock} alt="clock icon" />
        <span>
          {node.start.match(/\d\d:\d\d/)} - {node.end.match(/\d\d:\d\d/)}
        </span>
        <img src={location} alt="location icon" />
        <span className={styles.location}>{node.location}</span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      <Button
        color="#D43535"
        text="Add to Calendar"
        onClick={() => downloadCalendarFile(node)}
      />
    </div>
  )
}

export default Index
