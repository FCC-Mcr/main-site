import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Grid from "../components/Grid"
import Center from "../components/Center"
import SEO from "../components/SEO"

import Blogposts from "../components/Blogposts"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Center maxWidth="1030px">
      <article>
        <h1 style={{ marginBottom: "var(--title-spacing)" }}>Blog</h1>
        <Grid
          style={{
            gridTemplateColumns: "var(--grid-responsive-default)",
            gridGap: "2rem",
          }}
        >
          <Blogposts title="Blog" data={data.allMarkdownRemark.edges} />
        </Grid>
      </article>
    </Center>
  </Layout>
)

export default BlogPage

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/.*.md$/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            author
            isExternal
            externalLink
            featuredImage {
              childImageSharp {
                sizes(
                  maxWidth: 720
                  maxHeight: 360
                  quality: 90
                  toFormat: JPG
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
