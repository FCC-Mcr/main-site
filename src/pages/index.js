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
import UpcomingTalks from "../components/UpcomingTalks"
import LearningResources from "../components/LearningResources"
import Blogposts from "../components/Blogposts"
import Contributing from "../components/Contributing"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Organisers />
    <Flex>
      <Location />
      <SocialPanel />
    </Flex>
    <Flex>
      <Blogposts
        data={data.allMarkdownRemark.edges}
        isHomepage
        title="Blogposts"
      />
      <UpcomingTalks
        data={data.allMeetup.edges}
        isHomepage
        title="Other Meetups"
      />
    </Flex>
    <LearningResources isCarousel />
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
