import React from "react"
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout/"
import SEO from "../components/SEO/"

import Header from "../components/Header"
import NextMeetup from "../components/NextMeetup"
import Organisers from "../components/Organisers"
import Flex from "../components/Flex"
import Grid from "../components/Grid"
import Location from "../components/Location"
import SocialPanel from "../components/SocialPanel"
import UpcomingMeetups from "../components/UpcomingMeetups"
import LearningResources from "../components/LearningResources"
import Blogposts from "../components/Blogposts"
import Contributing from "../components/Contributing"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <NextMeetup />
    <Organisers />
    <Flex>
      <Location />
      <SocialPanel />
    </Flex>
    <Flex>
      <Grid
        style={{
          gridTemplateColumns: "auto",
          gridAutoRows: "max-content",
          flex: "1 1 400px",
          gridGap: "2rem",
          paddingRight: "4rem",
        }}
      >
        <h2 className="large-text" style={{ marginBottom: "1.5rem" }}>
          Blog
        </h2>
        <Blogposts
          data={data.allMarkdownRemark.edges}
          isHomepage
          title="Blogposts"
        />
      </Grid>
      <Grid
        style={{
          gridTemplateColumns: "auto",
          gridAutoRows: "max-content",
          flex: "1 1 300px",
          gridGap: "2rem",
        }}
      >
        <h2 className="large-text" style={{ marginBottom: "1.5rem" }}>
          Other Meetups
        </h2>
        <UpcomingMeetups data={data.allMeetup.edges} />
      </Grid>
    </Flex>
    <LearningResources isCarousel isHomepage />
    <Contributing />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/.*.md$/" } }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            author
            isExternal
            externalLink
          }
        }
      }
    }
    allMeetup(
      filter: {
        excerpt: { ne: null }
        title: { ne: null }
        location: { ne: null }
        start: { ne: null }
        end: { ne: null }
      }
      limit: 2
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
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
