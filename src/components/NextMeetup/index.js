import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Center from "../Center"
import Button from "../Button"
import styles from "./next-meetup.module.scss"

import downloadCalendarFile from "../../utils/downloadCalendarFile"

// icons
import clock from "../../icons/clock.svg"
import location from "../../icons/location.svg"

const Index = () => {
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

  let getOrdinal = n => {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }

  let getDate = () => {
    const date = new Date(meetup.start)
    let formattedDate = date.toLocaleDateString("en-GB", options)
    let dateNumber = formattedDate.match(/\d+/gi)
    let dateWithOrdinal = formattedDate.replace(
      /\d+/gi,
      `${getOrdinal(dateNumber)}`
    )
    return dateWithOrdinal
  }

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  return (
    <Center className={styles.nextMeetup}>
      <h3 className={`${styles.title} large-text`}>Our next meetup is</h3>
      <h2 className={`xx-large-text ${styles.date}`}>
        {meetup ? getDate() : "TBC"}
      </h2>
      <div>
        <img src={clock} alt="" />
        <p>
          {meetup ? meetup.start.match(/\d\d:\d\d/) : "18:00"} -{" "}
          {meetup ? meetup.end.match(/\d\d:\d\d/) : "21:00"}
        </p>
        <img src={location} alt="" />
        <p>{meetup ? meetup.location : "TBC"}</p>
      </div>
      <Button
        backgroundColor="#D43535"
        color="#FFFFFF"
        text="Add to Calendar →"
        onClick={() => downloadCalendarFile(meetup)}
        isDisabled={meetup ? false : true}
      />
    </Center>
  )
}

export default Index
