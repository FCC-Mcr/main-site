import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>
      Welcome to the FCC Blog, writtten and curated by members of the community
    </p>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
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
