import React from "react"
import LearningResources from "../components/LearningResources"
import styles from "./learning-resources.module.scss"

import Layout from "../components/Layout"
import Center from "../components/Center"
import SEO from "../components/SEO"

const LearningResourcesPage = () => (
  <Layout>
    <SEO title="Learning Resources" />
    <Center maxWidth="1200px">
      <article className={styles.learningResources}>
        <LearningResources />
      </article>
    </Center>
  </Layout>
)

export default LearningResourcesPage
