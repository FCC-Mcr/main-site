const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const axios = require("axios")
const crypto = require("crypto")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode })

    if (value.includes("blog/")) {
      value = value.replace(/([0-9]+)\-([0-9]+)\-([0-9]+)\-/, "")
    }

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/.*.md$/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              author
              isExternal
              externalLink
            }
          }
        }
      }
      learningResources: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/learning-resources/.*.md$/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    // create blog pages
    result.data.blog.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
          authorRegex: `/${node.frontmatter.author
            .split(" ")
            .join("-")
            .toLowerCase()}.jpg/`,
        },
      })
    })
    // create learning resource pages
    result.data.learningResources.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/learning-resource.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  let date = new Date()
  formattedDate = date.toISOString()

  // fetch raw data from the randomuser api
  const fetchMeetups = () =>
    axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/a73q3trj8bssqjifgolb1q8fr4@group.calendar.google.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY&maxResults=30&timeMin=${formattedDate}&singleEvents=true&orderBy=starttime`
    )
  // await for results
  const res = await fetchMeetups()

  // map into these results and create nodes
  res.data.items.map((meetup, i) => {
    // Create your node object
    const meetupNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Meetup`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      title: meetup.summary,
      description: meetup.description,
      location: meetup.location,
      start: meetup.start.dateTime,
      end: meetup.end.dateTime,
      iCalUID: meetup.iCalUID,
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(meetupNode))
      .digest(`hex`)
    // add it to userNode
    meetupNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(meetupNode)
  })

  return
}

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `Meetup`) {
    return {
      excerpt: {
        type: `String`,
        args: {
          pruneLength: {
            type: `Int`,
            defaultValue: 140,
          },
        },
        resolve: (source, fieldArgs) => {
          return source.description
            ? source.description.substring(0, fieldArgs.pruneLength)
            : null
        },
      },
    }
  }

  // by default return empty object
  return {}
}
