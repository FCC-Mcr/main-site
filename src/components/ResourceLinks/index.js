import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Index = ({ id, section }) => {
  const { allLearningResources } = useStaticQuery(graphql`
    query {
      allLearningResources {
        edges {
          node {
            id
            sheet
            sections {
              id
              resources {
                title
                href
                description
              }
            }
          }
        }
      }
    }
  `)

  let content = allLearningResources.edges.reduce((acc, { node }) => {
    if (node.sheet === id) {
      node.sections.forEach(s => {
        if (s.id === section) acc = s.resources
      })
    }
    return acc
  }, [])

  return (
    <div>
      {content.map(({ title, link, description }, i) => (
        <p key={i}>
          <a href={link}>{title}</a> - {description}
        </p>
      ))}
    </div>
  )
}

export default Index
