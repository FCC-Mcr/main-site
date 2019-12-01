import React, { useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Center from "../components/Center"

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
      <SEO title={`${post.frontmatter.title} Resources`} />
      <Center maxWidth="var(--content-width)">
        <article className={`${styles.content}`}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Center>
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
