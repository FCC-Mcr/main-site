import React from "react"
import Blogpost from "../Blogpost"

const Index = ({ data }) => (
  <>
    {data.map(({ node }, i) => (
      <Blogpost key={i} node={node} />
    ))}
  </>
)

export default Index
