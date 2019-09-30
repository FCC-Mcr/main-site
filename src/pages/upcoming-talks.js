import React from "react"
import Layout from "../components/Layout"
import UpcomingTalks from "../components/UpcomingTalks"

import { graphql } from "gatsby"

const upcomingTalks = ({ data }) => {
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

  console.log(tomorrow)

  return (
    <Layout>
      <article className="main blog">
        <h1>Upcoming Talks</h1>
        {today.length > 0 && <UpcomingTalks data={today} title="Today" page />}
        {tomorrow.length > 0 && (
          <UpcomingTalks data={tomorrow} title="Tomorrow" page />
        )}
        <UpcomingTalks data={otherDays} title="Coming up" page />
      </article>
    </Layout>
  )
}

export default upcomingTalks

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
      limit: 200
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
