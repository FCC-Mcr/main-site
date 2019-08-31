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
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Card
            key={i}
            height={3}
            className={`${styles.learningResources} p-2`}
          >
            <h2>{node.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            <Link to={node.fields.slug}>Find out more</Link>
          </Card>
        ))}
      </Carousel>
    </>
  )
}

export default index
