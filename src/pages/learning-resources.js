import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const LearningResourcesPage = ({ data }) => (
  <Layout>
    <SEO title="Learning Resources" />
    <article className="main blog">
      <h1>Learning Resources</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.frontmatter.description}</p>
        </div>
      ))}
    </article>
  </Layout>
)

export default LearningResourcesPage

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/learning-resources/.*.md$/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
