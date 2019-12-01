import React from "react"
import Meetup from "../Meetup"

const Index = ({ data }) => {
  return (
    <>
      {data.map(({ node }, i) => (
        <Meetup node={node} key={i} />
      ))}
    </>
  )
}

export default Index
