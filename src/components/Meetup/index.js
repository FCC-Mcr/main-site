import React from "react"
import urlRegex from "url-regex"
import Logo from "../Logo"
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

  let eventLink = {}

  let meetupLinks = node.description.match(urlRegex())

  meetupLinks &&
    meetupLinks.forEach(link => {
      if (link.includes("meetup") && link.indexOf("<") === -1) {
        eventLink.title = "meetup"
        eventLink.url = link
        eventLink.color = "var(--meetup-color)"
      }
      if (link.includes("eventbrite") && link.indexOf("<") === -1) {
        eventLink.title = "eventbrite"
        eventLink.url = link
        eventLink.color = "var(--eventbrite-color)"
      }
    })

  // remove any <br> tags at the beginning of the string
  node.excerpt = node.excerpt
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<b>|<\/b>/gm, "")
    .replace(/<a\s+/gi, `<a rel="noopener" `)

  const MeetupLink = () => {
    if (Object.entries(eventLink).length !== 0) {
      let { color, title, url } = eventLink
      return (
        <a href={url} className={styles.link}>
          {/* <img src={eventbriteLogo} alt="" /> */}
          <Logo name={title} />
          <Button color={color} text={title} />
        </a>
      )
    } else {
      return (
        <Button
          color="#D43535"
          text="Add to Calendar"
          onClick={() => downloadCalendarFile(node)}
        />
      )
    }
  }

  return (
    <div className={styles.meetup}>
      <span>{date.toLocaleDateString("en-GB", options)}</span>
      <h3>{node.title}</h3>
      <div className={styles.details}>
        <img src={clock} alt="clock icon" />
        <span>
          {node.start.match(/\d\d:\d\d/)} - {node.end.match(/\d\d:\d\d/)}
        </span>
        <img src={location} alt="location icon" />
        <span className={styles.location}>{node.location}</span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      <div className={styles.link}>
        <MeetupLink />
      </div>
    </div>
  )
}

export default Index
