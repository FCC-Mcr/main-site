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

  let meetup = data.allMeetup.edges[0]

  let getDate = () => {
    const date = new Date(meetup.start)
    return date.toLocaleDateString("en-GB", options)
  }

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  return (
    <Card className={`${styles.nextCard} p-2`} height={3} borderRadius={20}>
      <p>Our next meet up is</p>
      <h2>{meetup ? getDate() : "TBC"}</h2>
      <div>
        <img src={clock} alt="" />
        <p>
          {meetup ? meetup.start.match(/\d\d:\d\d/) : "18:00"} -{" "}
          {meetup ? meetup.end.match(/\d\d:\d\d/) : "21:00"}
        </p>
        <img src={location} alt="" />
        <p>{meetup ? meetup.location : "TBC"}</p>
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
