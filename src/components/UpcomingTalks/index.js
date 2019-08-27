import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Card from "../Card"
import downloadCalendarFile from "../../utils/downloadCalendarFile"
import styles from "../UpcomingTalks/upcomingtalks.module.scss"

// icons
import clock from "../../icons/clock.svg"
import location from "../../icons/location.svg"
import calendar from "../../icons/calendar.svg"

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

  console.log(data)

  return (
    <div>
      {" "}
      <h1>Upcoming Talks</h1>
      {data.allMeetup.edges.map((talk, i) => {
        let date = new Date(talk.node.start)
        let options = {
          weekday: "long",
          day: "numeric",
          month: "long",
        }
        console.log(talk)

        return (
          <Card height={3} className={`${styles.layout}`}>
            <div className={`${styles.upcomingTalks}  p-1`}>
              <p>{date.toLocaleDateString("en-GB", options)}</p>
              <h3>{talk.node.title}</h3>
              <div>
                <p>
                  <img src={clock} alt="" />
                  {talk.node.start.match(/\d\d:\d\d/)} -{" "}
                  {talk.node.end.match(/\d\d:\d\d/)}
                </p>
                <p>
                  <img src={location} alt="" />
                  The Hive
                </p>
              </div>
              <p>{talk.node.description}</p>
            </div>

            <div
              className={`${styles.button} p-1`}
              onClick={() => downloadCalendarFile(talk.node)}
            >
              <img src={calendar} alt="" />
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default index
