import React from "react"
import styles from "./contributing.module.scss"

const index = props => {
  return (
    <div className={`${styles.contributing} center px-1`}>
      <h2>Contributing</h2>
      <p>
        We want to make contributing to this project as enjoyable and accessible
        as possible. All contributions are welcome, including writing blog
        posts, adding learning resources and contributing to the site itself.
      </p>
      <p>
        When writing a blog post you don't have to be an expert on a topic to
        write about it. This entire site is open source, so even if you make a
        mistake, another contributor will eventually correct it.
      </p>
      <p>
        If you're unsure on where you should start we have created a handy
        contributing guide which you can find{" "}
        <a href="https://github.com/FCC-Mcr/main-site/blob/master/CONTRIBUTING.md">
          here
        </a>
        . If that doesnt help or you feel something is unclear shoot us a
        message us on twitter{" "}
        <a href="https://twitter.com/freecodecampmcr?lang=en">here</a> where one
        of our organisers will help you out.
      </p>
    </div>
  )
}

export default index
