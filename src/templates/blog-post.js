import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

export default ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = post.frontmatter.title

  return (
    <Layout blog>
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
          <Image
            style={{
              marginBottom: rhythm(1),
              borderRadius: "1%",
            }}
            sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
          />
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
