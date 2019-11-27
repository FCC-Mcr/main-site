import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import FAB from "../../FAB"

// icons
import logo from "../../../icons/logo.svg"

import styles from "./header.module.scss"

const MainNav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/learning-resources/">Resources</Link>
    <Link to="/upcoming-meetups/">Upcoming Talks</Link>
  </nav>
)

const Header = ({ siteTitle }) => (
  <>
    <header className={`${styles.header}  u-shadow--1`}>
      <Link to="/" className={styles.title} aria-label="Home">
        {/* need to bring in icon */}
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <MainNav />
    </header>
    <FAB />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
