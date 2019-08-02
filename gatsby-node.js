const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

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
