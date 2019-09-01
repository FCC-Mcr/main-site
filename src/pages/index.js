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
import Blogposts from "../components/Blogposts"

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
      <UpcomingTalks />
      <Blogposts
        flex
        title="Blogposts from the community"
        data={data.allMarkdownRemark.edges}
      />
    </Flex>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/.*.md$/" } }
      limit: 3
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
          }
        }
      }
    }
  }
`
