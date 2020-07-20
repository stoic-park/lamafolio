import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  color: goldenrod;
  a {
    text-decoration: none;
    color: coral;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome To LamaGround</h1>

    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
