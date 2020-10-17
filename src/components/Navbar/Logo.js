// Logo.js

import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Logo = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "gatsby-icon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LogoWrap as={Link} to="/">
      {/* <Img fluid={data.file.childImageSharp.fluid} alt="logo" /> */}
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </LogoWrap>
  )
}

export default Logo
