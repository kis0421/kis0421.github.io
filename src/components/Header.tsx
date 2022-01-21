import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  FaMoon as MoonIcon,
  FaTags as FaTagsIcon,
  FaGithub as FaGithubIcon,
} from "react-icons/fa";
import { ThemeToggler } from "gatsby-plugin-dark-mode";


const Header = (props: { siteTitle: string }) => {
  const { siteTitle } = props;
  return <header
    style={{
      borderBottom: "1px solid #dadada",
      marginBottom: `1.45rem`,
    }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
      <h1 style={{ margin: 0, fontSize: "1.5em", display: "inline-block" }}>
        <Link
          className="siteTitle"
          to="/"
          style={{
            textDecoration: `none`,
          }}>
          {siteTitle}
        </Link>
      </h1>
      <span style={{ float: "right" }}>
        <ThemeToggler>
          {({ theme, toggleTheme }: { theme: "light" | "dark", toggleTheme: any }) => {
            console.log(theme)
            return <MoonIcon
              className="headerIcon"
              size="24"
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")} />
          }}
        </ThemeToggler>
        <FaTagsIcon className="headerIcon" size="24" />
        <Link to="https://github.com/kis0421" target="_blank">
          <FaGithubIcon className="headerIcon" size="24" />
        </Link>
      </span>
    </div>
  </header>
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
