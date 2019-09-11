import React from "react"
import { Link } from "gatsby"
import styles from "./blogposts.module.scss"

import arrow from "../../icons/arrow.svg"

const index = ({ data, title, flex }) => (
  <div className={`${styles.blogposts} ${flex ? styles.flex : ""}`}>
    <h2>{title}</h2>
    {data.map(({ node }) => {
      const isExternal = node.frontmatter.isExternal === true
      return (
        <div className={styles.blogPost} key={node.id}>
          {isExternal ? (
            <a
              href={node.frontmatter.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{node.frontmatter.title}</h3>
            </a>
          ) : (
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
          )}

          <p>{node.excerpt}</p>
          <small>Written by {node.frontmatter.author}</small>
          <small>{node.timeToRead} min read</small>
          {isExternal && <small>external</small>}
        </div>
      )
    })}
    {flex && (
      <Link to="/blog/">
        More blog posts <img src={arrow} alt="arrow icon" />
      </Link>
    )}
  </div>
)

export default index
