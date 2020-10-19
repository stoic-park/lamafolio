import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectList from "../components/ProjectList"
// import SEO from "../components/seo"
import "./project.css"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    height: "100%",
    // marginTop: "64px",
  },
}))

function Project() {
  const classes = useStyles()
  const [projects, setProjects] = useState([
    {
      id: 1,
      type: "Solo Project",
      title: "Lamastagram",
      thumbnail:
        "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%2C+2020-10-17+15-27-22.png",
      description: "반려동물 소셜 네트워크 웹 서비스",
      github: "http://asq.kr/V9LrhKnLSy1Zo",
      notion: "",
      link: "http://asq.kr/FQvw9g4wlCjZ",
      pageLink: "/project1",
      detail: [],
      images: [
        {
          text: "home",
          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%2C+2020-10-17+15-27-22.png",
        },
        {
          text: "postmodal",
          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%2C+2020-10-17+15-27-33.png",
        },
        {
          text: "mypage",
          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%2C+2020-10-17+15-28-32.png",
        },
      ],
    },
    {
      id: 2,
      type: "Team Project",
      title: "ShareBook",
      thumbnail:
        // "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EA%B3%A0%EB%9E%981.png",
        "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%2C+2020-04-05+16-27-09.png",
      description: "지역 내 중고책 대여 모바일 서비스",
      github: "https://github.com/stoic-park/ShareBook_Final",
      notion: "",
      link: "",
      pageLink: "/project2",
      detail: [],
      images: [
        {
          text: "SignIn",

          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/signIn.gif",
        },
        {
          text: "SignUp",

          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/signUp.gif",
        },
        {
          text: "UploadBook",

          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/uploadBook.gif",
        },
        {
          text: "BorrowRequest",

          uri:
            "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/borrowRequest.gif",
        },
      ],
    },
    {
      id: 3,
      type: "Team Project",
      title: "CheerLeader",
      thumbnail:
        "https://user-images.githubusercontent.com/55645972/76160066-21388000-616a-11ea-9bd2-20f29fe95a76.gif",
      description: "랜덤 응원 메세지 웹 서비스",
      github: "https://github.com/stoic-park/FirstProject-cheerleader",
      notion: "",
      link: "",
      pageLink: "/project3",
      detail: [],
      images: [
        {
          text: "SignIn & GetMessage",
          uri:
            "https://user-images.githubusercontent.com/55645972/76160066-21388000-616a-11ea-9bd2-20f29fe95a76.gif",
        },
      ],
    },
  ])
  return (
    <Layout>
      {/* <Container className="projectContainer" maxWidth="xl"> */}
      <Container className={classes.cardGrid} maxWidth="xl">
        {/* <Grid container spacing={3} className="projectCardContainer"> */}
        <Grid container spacing={4} className="project_header">
          <h1>Projects</h1>
        </Grid>
        <Grid container spacing={4}>
          {projects.map(project => (
            <ProjectList key={project.id} project={project} />
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Project
