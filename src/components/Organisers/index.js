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
        ...organiserImage
      }
      james: file(relativePath: { eq: "organiser-james.jpg" }) {
        ...organiserImage
      }
      pete: file(relativePath: { eq: "organiser-pete.jpg" }) {
        ...organiserImage
      }
      fey: file(relativePath: { eq: "organiser-fey.jpg" }) {
        ...organiserImage
      }
    }

    fragment organiserImage on File {
      childImageSharp {
        fluid(maxWidth: 70, maxHeight: 70, quality: 80) {
          ...GatsbyImageSharpFluid
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
            <Img fluid={data.james.childImageSharp.fluid} />
            <div>
              <h3>James Davenport</h3>
              <a href="https://twitter.com/JD_aka_Techy">@JD_aka_Techy</a>
            </div>
            <p>
              FCC Alum, Full stack JS & C#, poor ukulele player and source of
              many donuts 🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩
            </p>
          </div>
        </Card>
        <Card height={3} className={`${styles.organiser} p-1`}>
          <div className={styles.grid}>
            <Img fluid={data.adam.childImageSharp.fluid} />
            <div>
              <h3>Adam Collier</h3>
              <a href="https://twitter.com/CollierAdam">@collieradam</a>
            </div>
            <p>
              Design/Developer guy @Missguided. Side project initiator. I like
              making stuff. Currently 82% tea ✌️
            </p>
          </div>
        </Card>
        <Card height={3} className={`${styles.organiser} p-1`}>
          <div className={styles.grid}>
            <Img fluid={data.pete.childImageSharp.fluid} />
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
            <Img fluid={data.fey.childImageSharp.fluid} />
            <div>
              <h3>Fey Ijaware</h3>
              <a href="https://twitter.com/feyagape">@feyagape</a>
            </div>
            <p>
              Founder of CodeandStuff & CodePossible. Self taught developer. Two
              time Google Scholarship winner.
            </p>
          </div>
        </Card>
      </Carousel>
    </>
  )
}

export default index
