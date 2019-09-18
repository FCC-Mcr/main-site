import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./nextcard.module.scss"

import downloadCalendarFile from "../../utils/downloadCalendarFile"

// components
import Card from "../Card"
// icons
import clock from "../../icons/clock.svg"
import location from "../../icons/location.svg"

const NextCard = () => {
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

  let meetup = data.allMeetup.edges[0].node

  const date = new Date(meetup.start)

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  return (
    <Card className={`${styles.nextCard} p-2`} height={3} borderRadius={20}>
      <p>Our next meet up is</p>
      <h2>{date.toLocaleDateString("en-GB", options)}</h2>
      <div>
        <p>
          <img src={clock} alt="" />
          {meetup.start.match(/\d\d:\d\d/)} - {meetup.end.match(/\d\d:\d\d/)}
        </p>
        <p>
          <img src={location} alt="" />
          {meetup.location}
        </p>
      </div>
      <button
        className="u-shadow--4"
        onClick={() => downloadCalendarFile(meetup)}
      >
        Add to calendar
      </button>
    </Card>
  )
}

export default NextCard
