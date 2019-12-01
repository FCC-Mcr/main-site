import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button"
import Layout from "../components/Layout"
import Grid from "../components/Grid"
import Center from "../components/Center"
import UpcomingMeetups from "../components/UpcomingMeetups"

import SEO from "../components/SEO"

import styles from "./upcoming-meetups.module.scss"

import { graphql } from "gatsby"

const upcomingMeetups = ({ data, pageContext }) => {
  // pagination links
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

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
      <SEO title="Upcoming Meetups" />
      <Center maxWidth="1030px">
        <article>
          {isFirst && <h1>Upcoming Meetups</h1>}
          {today.length > 0 && (
            <>
              {isFirst && <h2>Today</h2>}
              <MeetupGrid day={today} />
            </>
          )}
          {tomorrow.length > 0 && (
            <>
              {isFirst && <h2>Tomorrow</h2>}
              <MeetupGrid day={tomorrow} />
            </>
          )}
          {isFirst && <h2>Coming Up</h2>}
          <MeetupGrid day={otherDays} />
          <div className={styles.pagination}>
            {!isFirst && (
              <Link to={`/upcoming-meetups/${prevPage}`} rel="prev">
                <Button text="← Previous Page" />
              </Link>
            )}
            {!isLast && (
              <Link to={`/upcoming-meetups/${nextPage}`} rel="next">
                <Button text="Next Page →" />
              </Link>
            )}
          </div>
        </article>
      </Center>
    </Layout>
  )
}

export default upcomingMeetups

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
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
