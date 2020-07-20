import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import lama from "../images/farm.png"

const Header = ({ siteTitle }) => (
  <div className="headerContainer">
    <div className="headerLeftContainer">
      <img className="headerLeftLogo" src={lama} />
      <h1 className="headerLeftTitle">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="headerRightContainer">
      <div className="headerRightTitleContainer">
        <h2 className="headerRightTitle-1">
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About
          </Link>
        </h2>
        <h2 className="headerRightTitle-2">
          <Link
            to="/project"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Project
          </Link>
        </h2>
        <h2 className="headerRightTitle-3">
          <Link
            to="/contact"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Contact
          </Link>
        </h2>
        <h2 className="headerRightTitle-4">
          <Link
            to="/snack"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Snack
          </Link>
        </h2>
        <h2 className="headerRightTitle-5">
          <Link
            to="/lama"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Lama?
          </Link>
        </h2>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
