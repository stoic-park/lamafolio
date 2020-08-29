import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import lama from "../images/farm.png"

const Header = ({ siteTitle }) => (
  <div className="headerContainer">
    <div className="headerLeftContainer">
      {/* <img className="headerLeftLogo" src={lama} alt="" /> */}
      <h1 className="headerLeftTitle">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div className="headerRightContainer">
      <ul className="headerRightTitleContainer">
        <li>
          <Link to="/about">
            <h2>About</h2>
          </Link>
        </li>
        <li>
          <Link to="/project">
            <h2>Project</h2>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
        </li>
        <li>
          <Link to="/snack">
            <h2>Snack</h2>
          </Link>
        </li>
        <li>
          <Link to="/lama">
            <h2>Lama?</h2>
          </Link>
        </li>
      </ul>
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
