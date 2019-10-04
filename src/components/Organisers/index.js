import React from "react"
import Card from "../Card"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Carousel from "../Carousel"
import styles from "./organisers.module.scss"

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      adam: file(relativePath: { eq: "organiser-adam.jpg" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      james: file(relativePath: { eq: "organiser-james.jpg" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pete: file(relativePath: { eq: "organiser-adam.jpg" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fey: file(relativePath: { eq: "organiser-fey.jpg" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <h2 className="center pl-1 pt-3">Organisers</h2>
      <Carousel>
        <Card height={3} className={`${styles.organiser} p-1`}>
          <div className={styles.grid}>
            <Img fixed={data.james.childImageSharp.fixed} />
            <div>
              <h3>James Davenport</h3>
              <a href="https://twitter.com/JD_aka_Techy">@JD_aka_Techy</a>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.”
            </p>
          </div>
        </Card>
        <Card height={3} className={`${styles.organiser} p-1`}>
          <div className={styles.grid}>
            <Img fixed={data.adam.childImageSharp.fixed} />
            <div>
              <h3>Adam Collier</h3>
              <a href="https://twitter.com/CollierAdam">@collieradam</a>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.”
            </p>
          </div>
        </Card>
        <Card height={3} className={`${styles.organiser} p-1`}>
          <div className={styles.grid}>
            <Img fixed={data.james.childImageSharp.fixed} />
            <div>
              <h3>Pete Daily</h3>
              <a href="https://twitter.com/peterdaily">@peterdaily</a>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.”
            </p>
          </div>
        </Card>
        <Card height={3} className={`${styles.organiser} p-1`}>
          <div className={styles.grid}>
            <Img fixed={data.fey.childImageSharp.fixed} />
            <div>
              <h3>Fey Ijaware</h3>
              <a href="https://twitter.com/feyagape">@feyagape</a>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.”
            </p>
          </div>
        </Card>
      </Carousel>
    </>
  )
}

export default index
