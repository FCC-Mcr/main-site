import React from "react"
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout/"
import SEO from "../components/SEO/"

import Header from "../components/Header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMeetup(limit: 3) {
      edges {
        node {
          id
          title
          description
          location
          start
          end
          calendarId
        }
      }
    }
  }
`
