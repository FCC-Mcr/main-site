import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./nextcard.module.scss"

import downloadCalendarFile from "../../utils/downloadCalendarFile"

import Clock from "../../icons/clock.svg"
import Location from "../../icons/location.svg"

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      allMeetup(filter: { title: { regex: "/FreeCodeCamp/" } }, limit: 1) {
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

  const date = new Date(data.allMeetup.edges[0].node.start)

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  return (
    <div className={styles.card}>
      <p>Our next meet up is</p>
      <h2>{date.toLocaleDateString("en-GB", options)}</h2>
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
      <button
        onClick={() => downloadCalendarFile(data.allMeetup.edges[0].node)}
      >
        Add to calendar
      </button>
    </div>
  )
}

export default index
