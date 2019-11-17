import React from "react"
import Button from "../Button"

import downloadCalendarFile from "../../utils/downloadCalendarFile"
import styles from "../UpcomingTalks/upcomingtalks.module.scss"

// icons
import clock from "../../icons/clock.svg"
import location from "../../icons/location.svg"

const index = ({ data, title, isHomepage }) => {
  return (
    <div className={styles.upcomingTalks}>
      <h2 className={isHomepage ? "large-text" : ""}>{title}</h2>
      {data.map(({ node }, i) => {
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
          <div key={i} className={styles.talk}>
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
      })}
    </div>
  )
}

export default index
