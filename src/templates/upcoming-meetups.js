import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid"
import Center from "../components/Center"
import UpcomingMeetups from "../components/UpcomingMeetups"

import SEO from "../components/SEO"

import { graphql } from "gatsby"

const upcomingMeetups = ({ data }) => {
  let todayEnd = new Date()
  todayEnd = new Date(todayEnd.setHours(23, 59, 59, 999)).toISOString()

  let tomorrowEnd = new Date()
  tomorrowEnd.setDate(new Date(todayEnd).getDate() + 1)
  tomorrowEnd = new Date(tomorrowEnd.setHours(23, 59, 59, 999)).toISOString()

  let today = [],
    tomorrow = [],
    otherDays = []

  data.allMeetup.edges.forEach(x => {
    let { node } = x

    if (node.start < todayEnd) {
      today.push(x)
    } else if (node.start > todayEnd && node.start < tomorrowEnd) {
      tomorrow.push(x)
    } else {
      otherDays.push(x)
    }
  })

  let MeetupGrid = ({ day }) => (
    <Grid
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        gridGap: "2rem",
        marginBottom: "4rem",
      }}
    >
      <UpcomingMeetups data={day} title="Today" page />
    </Grid>
  )

  return (
    <Layout>
      <SEO title="Upcoming Talks" />
      <Center maxWidth="1030px">
        <article>
          <h1>Upcoming Meetups</h1>
          {today.length > 0 && (
            <>
              <h2>Today</h2>
              <MeetupGrid day={today} />
            </>
          )}
          {tomorrow.length > 0 && (
            <>
              <h2>Tomorrow</h2>
              <MeetupGrid day={tomorrow} />
            </>
          )}
          <h2>Coming Up</h2>
          <MeetupGrid day={otherDays} />
        </article>
      </Center>
    </Layout>
  )
}

export default upcomingMeetups

export const query = graphql`
  query {
    allMeetup(
      filter: {
        excerpt: { ne: null }
        title: { ne: null }
        location: { ne: null }
        start: { ne: null }
        end: { ne: null }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 800)
          description
          title
          location
          start
          end
          iCalUID
        }
      }
    }
  }
`
