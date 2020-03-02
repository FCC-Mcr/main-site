import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import MobileMenu from "../MobileMenu"

// icons
import logo from "../../icons/logo.svg"
import styles from "./header.module.scss"

const activeStyles = {
  borderBottom: "2px solid var(--primary-color)",
}

const NavLink = ({ children, to }) => (
  <Link to={to} activeStyle={activeStyles}>
    {children}
  </Link>
)

const MainNav = () => (
  <nav className={styles.nav}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/blog/">Blog</NavLink>
    <NavLink to="/learning-resources/">Resources</NavLink>
    <NavLink to="/upcoming-meetups/">Upcoming Meetups</NavLink>
    <MobileMenu />
  </nav>
)

const Header = ({ siteTitle }) => {
  const [backgroundColor, setBackgroundColor] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 40 ? setBackgroundColor(true) : setBackgroundColor(false)
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={`${styles.header} ${
          backgroundColor ? `${styles.headerBackground} shadow-smallest` : ""
        }`}
      >
        <Link to="/" className={styles.title} aria-label="Home">
          {/* need to bring in icon */}
          <img className={styles.logo} src={logo} alt="" />
        </Link>
        <MainNav />
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
