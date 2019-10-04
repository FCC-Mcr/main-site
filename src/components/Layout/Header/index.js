import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import FAB from "../../FAB"

// icons
import logo from "../../../icons/logo.svg"

import styles from "./header.module.scss"

const MainNav = () => (
  <nav>
    <a href="https://www.freecodecamp.org/forum/c/united-kingdom-study-groups/manchester">
      Forum
    </a>
    <Link to="/">Home</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/learning-resources/">Resources</Link>
    <Link to="/upcoming-talks/">Upcoming Talks</Link>
  </nav>
)

const Header = ({ siteTitle }) => (
  <>
    <header className={`${styles.header}  u-shadow--2`}>
      <h2>
        <Link to="/" className={styles.title}>
          {/* need to bring in icon */}
          <span className={styles.logo}>
            <img src={logo} alt="" />
          </span>
          {siteTitle}
        </Link>
      </h2>
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
