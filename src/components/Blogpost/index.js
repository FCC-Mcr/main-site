import React from "react"

import Image from "gatsby-image"
import { Link } from "gatsby"

import Button from "../Button"

import externalLinkIcon from "../../icons/external-link.svg"
import styles from "./blogpost.module.scss"

const Index = ({ node }) => {
  const LinkWrapper = ({ children }) => {
    if (isExternal) {
      return (
        <a
          href={node.frontmatter.externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    } else {
      return (
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {children}
        </Link>
      )
    }
  }

  const isExternal = node.frontmatter.isExternal === true

  return (
    <div className={styles.blogPost} key={node.id}>
      <LinkWrapper>
        {node.frontmatter.featuredImage && (
          <Image
            style={{
              marginBottom: "1rem",
              borderRadius: "3px",
            }}
            sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
          />
        )}
        <h3>
          {node.frontmatter.title}
          {isExternal && (
            <img
              className={styles.externalLink}
              src={externalLinkIcon}
              alt="external link icon"
            />
          )}
        </h3>
        <span>Written by {node.frontmatter.author}</span>
        <span style={{ fontSize: "1rem" }}>&#x2022;</span>
        <span>{node.timeToRead} min read</span>
        <p>{node.excerpt}</p>
        <Button text="Read More →" color="#386339" link={node.fields.slug} />
      </LinkWrapper>
    </div>
  )
}

export default Index
