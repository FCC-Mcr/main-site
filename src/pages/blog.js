import React from "react"
import { Link, graphql } from "gatsby"

import styles from "./blog.module.scss"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <article className="main blog">
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className={styles.blogPost} key={node.id}>
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.excerpt}</p>
          <small>Written by {node.frontmatter.author}</small>
          <small>{node.timeToRead} min read</small>
        </div>
      ))}
    </article>
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
