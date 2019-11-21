import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import styles from "./learning-resources.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--learning-resource-links",
      `var(--${post.frontmatter.title.toLowerCase()}-color)`
    )
  })

  return (
    <Layout>
      <div className={`main blog ${styles.content}`}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
