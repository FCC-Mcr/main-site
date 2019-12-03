import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./mobile-menu.module.scss"
import menu from "../../icons/menu.svg"

const Menu = ({ handleClick }) => (
  <nav className={styles.menu} onClick={e => handleClick()}>
    <Link to="/">Home</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/learning-resources/">Resources</Link>
    <Link to="/upcoming-meetups/">Upcoming Meetups</Link>
  </nav>
)

const Index = props => {
  const [toggle, setToggle] = useState(false)

  let handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <img onClick={e => handleClick()} src={menu} alt="menu button" />
      {toggle && <Menu handleClick={handleClick} />}
    </>
  )
}

export default Index
