import React from "react"
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout/"
import SEO from "../components/SEO/"

import Header from "../components/Header"
import Organisers from "../components/Organisers"
import Flex from "../components/Flex"
import Location from "../components/Location"
import SocialPanel from "../components/SocialPanel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Organisers />
    <Flex>
      <Location />
      <SocialPanel />
    </Flex>
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
          iCalUID
        }
      }
    }
  }
`
