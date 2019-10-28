import React from "react"
import { Link } from "gatsby"

import Card from "../Card"
import downloadCalendarFile from "../../utils/downloadCalendarFile"
import styles from "../UpcomingTalks/upcomingtalks.module.scss"

// icons
import clock from "../../icons/clock.svg"
import location from "../../icons/location.svg"
import calendar from "../../icons/calendar.svg"
import arrow from "../../icons/arrow.svg"

const index = ({ data, title, page }) => {
  return (
    <div className={styles.upcomingTalks}>
      <h2>{title}</h2>
      {data.map(({ node }, i) => {
        let date = new Date(node.start)
        let options = {
          weekday: "long",
          day: "numeric",
          month: "long",
        }

        // remove any <br> tags at the beginning of the string
        node.excerpt = node.excerpt
          .replace(/^(<br\s*\/?>)*|(<br\s*\/?>)*$/gm, "")
          .replace(/<b>|<\/b>/gm, "")
          .replace(/<a\s+/gi, `<a rel="noopener" `)

        return (
          <>
            <Card key={i} className={styles.layout}>
              <div className={`${styles.talk} pr-2`}>
                <p>{date.toLocaleDateString("en-GB", options)}</p>
                <h3>{node.title}</h3>
                <div>
                  <p>
                    <img src={clock} alt="clock icon" />
                    {node.start.match(/\d\d:\d\d/)} -{" "}
                    {node.end.match(/\d\d:\d\d/)}
                  </p>
                  <p className={styles.location}>
                    <img src={location} alt="location icon" />
                    {node.location}
                  </p>
                </div>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
              <div
                className={`${styles.button} p-1`}
                onClick={() => downloadCalendarFile(node)}
              >
                <img src={calendar} alt="calendar icon" />
              </div>
            </Card>
            {i !== data.length - 1 && <hr />}
          </>
        )
      })}
      {!page && (
        <Link to="/upcoming-talks/">
          More talks <img src={arrow} alt="arrow icon" />
        </Link>
      )}
    </div>
  )
}

export default index
