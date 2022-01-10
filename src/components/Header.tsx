import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  FaMoon as MoonIcon,
  FaTags as FaTagsIcon,
  FaGithub as FaGithubIcon,
} from "react-icons/fa";

const Header = (props: { siteTitle }) => {
  const { siteTitle } = props;
  return <header
    style={{
      background: `white`,
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
          to="/"
          style={{
            color: `#333`,
            textDecoration: `none`,
          }}>
          {siteTitle}
        </Link>
      </h1>
      <span style={{ float: "right" }}>
        <MoonIcon className="headerIcon" size="24" />
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
