import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Blogposts from "../components/Blogposts"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <article className="main blog">
      <Blogposts title="Blog" data={data.allMarkdownRemark.edges} />
    </article>
  </Layout>
)

export default BlogPage

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/.*.md$/" } }
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
          }
        }
      }
    }
  }
`
