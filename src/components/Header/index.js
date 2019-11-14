import React from "react"

import NextCard from "../NextCard"

import styles from "./header.module.scss"

const index = () => (
  <div className={styles.header}>
    <div>
      <h1 className="xx-large-font">FreeCodeCamp Manchester</h1>
      <p>
        Welcome to FreeCodeCamp Manchester! We are mentors, coders and learners
        from Manchester, Greater Manchester and its surrounding areas and one
        part of the global FreeCodeCamp Community. We hold Study Groups twice a
        month for our members to meet in person, code together and get help and
        advice from Organisers and Mentors - Keep an eye on the events for
        further information and we hope to see you around!
      </p>
    </div>
  </div>
)

export default index
