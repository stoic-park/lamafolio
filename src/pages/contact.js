import React from "react"
import { Link } from "gatsby"
import "./contact.css"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// react-icons
import { FaGithub } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaFilePdf } from "react-icons/fa"

const Contact = () => (
  <Layout>
    <div className="contactContainer">
      <div className="contactSecondContainer">
        <h1 className="contactHeaderText">Contact</h1>
        <h3 className="contactHeaderText">demige79@gmail.com</h3>
        <ul className="contactLinkContainer">
          <li className="contactLinkContainer_li">
            <span className="contactLinkTitle">github</span>
            <Link to="http://bitly.kr/YspLJtlIKzB" target="_blank">
              <FaGithub size="32" />
            </Link>
          </li>
          <li className="contactLinkContainer_li">
            <span className="contactLinkTitle">medium</span>
            <Link to="https://bit.ly/2GH7o2e" target="_blank">
              <FaMedium size="32" />
            </Link>
          </li>
          <li className="contactLinkContainer_li">
            <span className="contactLinkTitle">email</span>
            <a href="mailto:demige79@gmail.com">
              <MdEmail size="32" />
            </a>
          </li>
          <li className="contactLinkContainer_li">
            <span className="contactLinkTitle">resume</span>
            <Link
              to="https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EB%B0%95%EC%84%B1%ED%83%9D_%EC%9D%B4%EB%A0%A5%EC%84%9C.pdf"
              target="_blank"
            >
              <FaFilePdf size="32" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Contact
