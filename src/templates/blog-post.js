import React from "react"
import { graphql } from "gatsby"

import Center from "../components/Center"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import externalLinkIcon from "../icons/external-link.svg"
import styles from "./blog-post.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = post.frontmatter.title
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Center maxWidth="var(--content-width)">
        <article>
          <h1>{siteTitle}</h1>
          <div className={styles.author}>
            {data.author.edges.length ? (
              <Image fixed={data.author.edges[0].node.childImageSharp.fixed} />
            ) : (
              <Image
                fixed={data.defaultAuthor.edges[0].node.childImageSharp.fixed}
              />
            )}
            <div>
              <p>Written by {post.frontmatter.author}</p>
              <p>
                {post.frontmatter.date} - {`${post.timeToRead} min read`}
              </p>
            </div>
          </div>

          {post.frontmatter.featuredImage && (
            <Image
              style={{
                marginBottom: "2rem",
                borderRadius: "5px",
              }}
              sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          {post.frontmatter.isExternal && (
            <a
              href={post.frontmatter.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              read more{" "}
              <img
                className={styles.externalLink}
                src={externalLinkIcon}
                alt="external link icon"
              />
            </a>
          )}
        </article>
      </Center>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $authorRegex: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 160)
      frontmatter {
        author
        title
        isExternal
        externalLink
        date(formatString: "MMM DD, YYYY")
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 720, quality: 90, toFormat: JPG) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
    author: allFile(filter: { absolutePath: { regex: $authorRegex } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 55, height: 55, quality: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    defaultAuthor: allFile(
      filter: { absolutePath: { regex: "/default-author/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 55, height: 55) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
