import React from "react"
import Carousel from "../Carousel"
import Grid from "../Grid"
import Card from "../Card"
import Logo from "../Logo"

import Center from "../Center"
import Button from "../Button"

import { Link, useStaticQuery, graphql } from "gatsby"

import styles from "./learning-resources.module.scss"

const index = ({ isCarousel }) => {
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
              color
            }
          }
        }
      }
    }
  `)

  const WrapperComponent = ({ isCarousel, children }) => {
    if (isCarousel) {
      return <Carousel>{children}</Carousel>
    } else {
      return (
        <Grid
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gridGap: "2rem",
          }}
        >
          {children}
        </Grid>
      )
    }
  }

  return (
    <>
      <Center>
        <h2 className="large-text" style={{ textAlign: "center" }}>
          Learning Resources
        </h2>
      </Center>
      <WrapperComponent isCarousel={isCarousel}>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Card
            key={i}
            height={3}
            className={`${styles.learningResources} ${
              isCarousel ? styles.carousel : styles.grid
            }`}
          >
            <Link to={node.fields.slug}>
              <div>
                <h3>{node.frontmatter.title}</h3>
                <Logo name={node.frontmatter.title.toLowerCase()} />
              </div>
              <p>{node.frontmatter.description}</p>
              <Button
                text={`${node.frontmatter.title} Resources`}
                color={node.frontmatter.color}
              />
            </Link>
          </Card>
        ))}
      </WrapperComponent>
    </>
  )
}

export default index
