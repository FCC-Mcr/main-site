import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Button from "../Button"
import Card from "../Card"
import Carousel from "../Carousel"
import Center from "../Center"
import Grid from "../Grid"
import Logo from "../Logo"

import styles from "./learning-resources.module.scss"

const WrapperComponent = ({ isCarousel, children }) =>
  isCarousel ? (
    <Carousel>{children}</Carousel>
  ) : (
    <Grid
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gridGap: "2rem",
      }}
    >
      {children}
    </Grid>
  )

const Index = ({ isCarousel, isHomepage }) => {
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

  return (
    <>
      <Center>
        {isHomepage ? (
          <h2 className={`${styles.title} large-text`}>Learning Resources</h2>
        ) : (
          <h1 className={`${styles.title}`}>Learning Resources</h1>
        )}
      </Center>
      <WrapperComponent isCarousel={isCarousel}>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Card
            key={i}
            className={`${styles.learningResource} ${
              isCarousel ? styles.carouselItem : styles.gridItem
            }`}
            shadowType="hover"
          >
            <Link to={node.fields.slug}>
              <div>
                <h3>{node.frontmatter.title}</h3>
                <Logo name={node.frontmatter.title.toLowerCase()} />
              </div>
              <p>{node.frontmatter.description}</p>
              <Button
                text={`${node.frontmatter.title} Resources →`}
                color={node.frontmatter.color}
              />
            </Link>
          </Card>
        ))}
      </WrapperComponent>
    </>
  )
}

export default Index
