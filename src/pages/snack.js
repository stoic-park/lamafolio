import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Snack = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Snack</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Snack
