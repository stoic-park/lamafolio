import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// material-ui
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import "./project.css"

let projects = []

const Project = () => (
  <Layout>
    <div className="projectContainer">
      <div className="row">
        <div className="thumb-box">
          <a href="">
            <img src="https://source.unsplash.com/1600x900/?lama&peru" alt="" />
            <span className="overlay-box">
              <span className="meta">Team Project</span>
              <span className="main-title">ShareBook</span>
              <span className="description">
                지역 내 중고책 대여 모바일 서비스
              </span>
              <button className="projectButton">Detail</button>
              <button className="projectButton">github</button>
            </span>
          </a>
        </div>

        <div className="thumb-box">
          <a href="">
            <img src="https://source.unsplash.com/1600x900/?llama" alt="" />
            {/* <img src="https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/signUp.gif" alt="" /> */}
            <span className="overlay-box">
              <span className="meta">Team Project</span>
              <span className="main-title">CheerLeader</span>
              <span className="description">랜덤 응원메세지 웹 서비스</span>
              <button className="projectButton">Detail</button>
              <button className="projectButton">github</button>
            </span>
          </a>
        </div>

        <div className="thumb-box">
          <a href="">
            <img src="https://source.unsplash.com/1600x900/?lama" alt="" />
            <span className="overlay-box">
              <span className="meta">Solo Project</span>
              <span className="main-title">LamaChat</span>
              <span className="description">실시간 채팅 웹 서비스</span>
              <button className="projectButton">Detail</button>
              <button className="projectButton">github</button>
            </span>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Project
