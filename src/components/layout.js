/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
// import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Navbar /> */}

      <header>
        <Header siteTitle={data.site.siteMetadata.title} />
      </header>
      {/* <div
        className="bodyContainer"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      <main>{children}</main>
      <footer style={{ color: `aliceblue` }}>
        <div className="footerEmptyBox"></div>
        <div>
          {/* <footer style={{ color: `#afc2cb` }}> */}©{" "}
          {new Date().getFullYear()}, Built with &nbsp;
          <a href="https://github.com/stoic-park/">stoic-park</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
