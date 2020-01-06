import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MobileMenu from "../MobileMenu"

// icons
import logo from "../../icons/logo.svg"
import styles from "./header.module.scss"

const activeStyles = {
  textDecoration: "underline",
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

const Header = ({ siteTitle }) => (
  <>
    <header className={`${styles.header}  u-shadow--1`}>
      <Link to="/" className={styles.title} aria-label="Home">
        {/* need to bring in icon */}
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      <MainNav />
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
