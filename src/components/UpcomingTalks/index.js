import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Card from "../Card"
import downloadCalendarFile from "../../utils/downloadCalendarFile"
import styles from "../UpcomingTalks/upcomingtalks.module.scss"

// icons
import clock from "../../icons/clock.svg"
import location from "../../icons/location.svg"
import calendar from "../../icons/calendar.svg"
import arrow from "../../icons/arrow.svg"

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      allMeetup(limit: 2) {
        edges {
          node {
            id
            title
            description
            location
            start
            end
            iCalUID
          }
        }
      }
    }
  `)

  return (
    <div className={styles.upcomingTalks}>
      <h1>Upcoming Talks</h1>
      {data.allMeetup.edges.map(({ node }) => {
        let date = new Date(node.start)
        let options = {
          weekday: "long",
          day: "numeric",
          month: "long",
        }

        return (
          <Card height={3} className={styles.layout}>
            <div className={`${styles.talk}  p-1`}>
              <p>{date.toLocaleDateString("en-GB", options)}</p>
              <h3>{node.title}</h3>
              <div>
                <p>
                  <img src={clock} alt="clock icon" />
                  {node.start.match(/\d\d:\d\d/)} -{" "}
                  {node.end.match(/\d\d:\d\d/)}
                </p>
                <p>
                  <img src={location} alt="location icon" />
                  The Hive
                </p>
              </div>
              <p>{node.description}</p>
            </div>
            <div
              className={`${styles.button} p-1`}
              onClick={() => downloadCalendarFile(node)}
            >
              <img src={calendar} alt="calendar icon" />
            </div>
          </Card>
        )
      })}
      <Link to="/upcoming-talks/">
        More talks <img src={arrow} alt="arrow icon" />
      </Link>
    </div>
  )
}

export default index
