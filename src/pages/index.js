import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import "./index.css"

// react-icons
import { FaGithub } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaFilePdf } from "react-icons/fa"

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
    <div className="homeContainer">
      <div className="homeLeftContainer">
        <div className="homeTextContainer">
          <h1>Welcome To LamaGround</h1>
          <h1>코드와 사람을 잇다</h1>
          <h1>박성택</h1>
          <h2>FRONTEND DEVELOPER</h2>
        </div>
        <ul className="homeLinkContainer">
          <li>
            <span className="homeLinkTitle">github</span>
            <Link to="http://bitly.kr/YspLJtlIKzB" target="_blank">
              <FaGithub size="32" />
            </Link>
          </li>
          <li>
            <span className="homeLinkTitle">medium</span>
            <Link to="http://bitly.kr/gbgN5IFJuCw" target="_blank">
              <FaMedium size="32" />
            </Link>
          </li>
          <li>
            <span className="homeLinkTitle">email</span>
            <a href="mailto:demige79@gmail.com">
              <MdEmail size="32" />
            </a>
          </li>
          <li>
            <span className="homeLinkTitle">resume</span>
            <Link
              to="https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%9D%B4%EB%A0%A5%EC%84%9C_%EB%B0%95%EC%84%B1%ED%83%9D.pdf"
              target="_blank"
            >
              <FaFilePdf size="32" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="homeRightContainer"></div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
