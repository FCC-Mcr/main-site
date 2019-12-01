import React from "react"
import Blogpost from "../Blogpost"
// import Grid from "../Grid"
// import styles from "./blogposts.module.scss"

const Index = ({ data }) => (
  <>
    {data.map(({ node }, i) => (
      <Blogpost key={i} node={node} />
    ))}
  </>
)

export default Index
