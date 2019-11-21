import React from "react"
import { graphql } from "gatsby"
import LearningResources from "../components/LearningResources"
import styles from "./learning-resources.module.scss"

import Layout from "../components/Layout"
import Center from "../components/Center"
import SEO from "../components/SEO"

const LearningResourcesPage = ({ data }) => (
  <Layout>
    <SEO title="Learning Resources" />
    <Center>
      <article className={styles.learningResources}>
        <LearningResources />
      </article>
    </Center>
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
