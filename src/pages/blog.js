import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BlogPage = ({ data }) => (
  <Layout blog>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>
      Welcome to the FCC Blog, writtten and curated by members of the community
    </p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
        </Link>
        <p>{node.excerpt}</p>
        <p>Written by {node.frontmatter.author}</p>
        <p>{node.timeToRead} min read</p>
      </div>
    ))}
  </Layout>
)

export default BlogPage

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/.*.md$/" } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 160)
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
