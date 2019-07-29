import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = post.frontmatter.title

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        <h1>{siteTitle}</h1>
        <p>
          {post.frontmatter.date} - {`${post.timeToRead} min read`}
        </p>
        {post.frontmatter.featuredImage && (
          <Image sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 680) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
