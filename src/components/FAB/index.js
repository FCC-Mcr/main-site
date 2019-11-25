import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./fab.module.scss"
import menu from "../../icons/menu.svg"

const Menu = ({ handleClick }) => (
  <nav className={styles.menu} onClick={e => handleClick()}>
    <Link to="/">Home</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/learning-resources/">Resources</Link>
    <Link to="/upcoming-meetups/">Upcoming Talks</Link>
  </nav>
)

const Index = props => {
  const [toggle, setToggle] = useState(false)

  let handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className={`${styles.fab} u-shadow--3`} onClick={e => handleClick()}>
        <img src={menu} alt="menu button" />
      </div>
      {toggle && <Menu handleClick={handleClick} />}
    </>
  )
}

export default Index
