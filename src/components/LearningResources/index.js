import React from "react"
import Carousel from "../Carousel"
import Card from "../Card"

import { Link, useStaticQuery, graphql } from "gatsby"

import styles from "./learning-resources.module.scss"

const index = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/learning-resources/.*.md$/" } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <h2 className="center pl-1">Learning Resources</h2>
      <Carousel>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          let html = node.html

          html = html.replace(/<h2/g, "<h4")

          return (
            <Card
              key={i}
              height={3}
              className={`${styles.learningResources} p-2`}
            >
              <h3>{node.frontmatter.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <Link to={node.fields.slug}>Find out more</Link>
            </Card>
          )
        })}
      </Carousel>
    </>
  )
}

export default index
