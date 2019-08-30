import React from "react"

// components
import Layout from "../components/Layout/"
import SEO from "../components/SEO/"

import Header from "../components/Header"
import Organisers from "../components/Organisers"
import Flex from "../components/Flex"
import Location from "../components/Location"
import SocialPanel from "../components/SocialPanel"
import UpcomingTalks from "../components/UpcomingTalks"
import LearningResources from "../components/LearningResources"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Organisers />
    <Flex>
      <Location />
      <SocialPanel />
    </Flex>
    <Flex>
      <UpcomingTalks />
    </Flex>
    <LearningResources />
  </Layout>
)

export default IndexPage
