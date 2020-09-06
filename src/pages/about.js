import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

// material-ui & CSS
// import Button from "@material-ui/core/Button"
import "./about.css"
import { Container, Typography, Card, CardContent } from "@material-ui/core"

const About = () => (
  <Layout>
    {/* <div className="aboutContainer">
      <div className="aboutIntroContainer">
        <div className="aboutCard">
          <div className="aboutCard__side aboutCard__side--Front">
            <div className="aboutCard__box">
              <p class="card__subject">ABOUT</p>
              <p class="card__title">ME</p>
            </div>
          </div>
          <div className="aboutCard__side aboutCard__side--Back">
            <div className="aboutCard__box">
              <p>사람을 좋아하고 사람들이 좋아해주기를 바라는</p>
              <p>혼자보다는 함께 무언가를 이루고 싶어하는</p>
              <p>맡은 일은 무슨 일이 있어도 해야하고</p>
              <p>부족하다는 것을 부끄럽게 여기기 보다는 성장의 기회로 삼는</p>
              <p>나의 관점을 앞세우기보다도 상대방의 의견을 먼저 생각하는</p>
              <p>깔끔한 디자인과 참신하고 재미있는 아이디어를 좋아하는</p>
              <p>
                재미있는 아이디어를 기획부터 완성까지 하는 것을 너무나 좋아라
                하는
              </p>
              <p>개발자입니다</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutIntroContainer">
        <div className="aboutCard">
          <div className="aboutCard__side aboutCard__side--Front">
            <div className="aboutCard__box">
              <p class="card__subject">SKILLS</p>
              <p class="card__title">&TOOLS</p>
            </div>
          </div>
          <div className="aboutCard__side aboutCard__side--Back">
            <div className="aboutCard__box">
              <p>JavaScript</p>
              <p>React, React Native, Redux</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="aboutContainer">
      <div className="aboutLeftContainer">
        <div>
          <CardContent>
            <h1 variant="h3" color="textSecondary">
              About Me
            </h1>
            <h3>사람을 좋아하고 사람들이 좋아해주기를 바라는</h3>
            <h3>혼자보다는 함께 무언가를 이루고 싶어하는</h3>
            <h3>맡은 일은 무슨 일이 있어도 해야하고</h3>
            <h3>부족하다는 것을 부끄럽게 여기기 보다는 성장의 기회로 삼는</h3>
            <h3>나의 관점을 앞세우기보다도 상대방의 의견을 먼저 생각하는</h3>
            <h3>깔끔한 디자인과 참신하고 재미있는 아이디어를 좋아하는</h3>
            <h3>
              재미있는 아이디어를 기획부터 완성까지 하는 것을 너무나 좋아라 하는
            </h3>
            <h3>꾸준히 성장하고 있는 개발자입니다</h3>
          </CardContent>
        </div>
      </div>
      <div className="aboutRightContainer">
        <div>
          <CardContent>
            <h1 variant="h3">Skills & Tools</h1>
            <h2 variant="h5">Languege</h2>
            <p>JavaScript</p>
            <h2 variant="h5">Strong</h2>
            <p>React, React Native, Redux</p>
            <h2 variant="h5">Experienced </h2>
            <p>TypeScript, Socket.io, Node.js, MySQL ,AWS, Firebase, Heroku </p>
            <h2 variant="h5">Tools</h2>
            <p>Git, Notion, Slack, Ubuntu</p>
          </CardContent>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
