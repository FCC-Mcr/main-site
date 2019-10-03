import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./fab.module.scss"
import menu from "../../icons/menu.svg"

const Menu = () => (
  <div className={styles.menu}>
    <a href="https://www.freecodecamp.org/forum/c/united-kingdom-study-groups/manchester">
      Forum
    </a>
    <Link to="/">Organisers</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/learning-resources/">Resources</Link>
  </div>
)

const index = props => {
  const [toggle, setToggle] = useState(false)

  let handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className={`${styles.fab} u-shadow--3`} onClick={e => handleClick()}>
        <img src={menu} alt="menu button" />
      </div>
      {toggle && <Menu />}
    </>
  )
}

export default index
