import React from "react"
import styles from "./contributing.module.scss"

const index = () => {
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
        If you're unsure on where you should start we have created a handy&nbsp;
        <a href="https://github.com/FCC-Mcr/main-site/blob/master/CONTRIBUTING.md">
          contributing guide
        </a>
        . If that doesn't help or you feel something is unclear shoot us a
        message us on our&nbsp;
        <a href="https://fccmcr.slack.com/">Slack channel</a>
        &nbsp;and one of our organisers will help you out.
      </p>
      <p>
        <a href="https://fcc-mcr-invite.herokuapp.com/">
          Not yet a member of our Slack? get an invite here.
        </a>
      </p>
    </div>
  )
}

export default index
