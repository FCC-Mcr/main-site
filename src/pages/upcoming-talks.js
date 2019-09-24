import React from "react"
import Layout from "../components/Layout"
import UpcomingTalks from "../components/UpcomingTalks"

import { graphql } from "gatsby"

const upcomingTalks = ({ data }) => {
  return (
    <Layout>
      <article className="main blog">
        <UpcomingTalks data={data.allMeetup.edges} page />
      </article>
    </Layout>
  )
}

export default upcomingTalks

export const query = graphql`
  {
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
