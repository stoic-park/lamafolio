import React, { useState } from "react"
// import { Link } from "gatsby"
import "./projects.css"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import { Typography, Button } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import { Link } from "gatsby"

// const theme = createMuiTheme({
//   palette: {
//     primary: "#11112",
//     secondary: "green",
//     error: "red",
//   },
// })

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // marginTop: "64px",
    height: "100%",
    // marginTop: "64px",
  },
}))

function Project1() {
  const classes = useStyles()
  const [project, setProject] = useState({
    gifDirection: "vertical",
    title: "Lamastagram",
    images: [
      // {
      //   id: 1,
      //   text: "책 빌리기",
      //   url:
      //     "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/borrowRequest.gif",
      // },
      // {
      //   id: 2,
      //   text: "중고 책 등록",
      //   url:
      //     "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/uploadBook.gif",
      // },
      {
        id: 1,
        text: "홈",
        url:
          "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%2C+2020-10-17+15-27-22.png",
      },
      {
        id: 2,
        text: "게시글",
        url:
          "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%2C+2020-10-17+15-27-33.png",
      },
      {
        id: 3,
        text: "개인 페이지",
        url:
          "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%2C+2020-10-17+15-28-32.png",
      },
    ],
    description: [
      "반려동물 소셜 네트워크 서비스.",
      "이미지를 포함한 게시글을 업데이트하고, 댓글을 다는 등의 기본적인 CRUD 구현을 목표로 진행",
      "주요 기능 : 게시글 올리기, 댓글 달기, 댓글 삭제, 이미지 확대",
    ],
    skills: "React, Firebase",
    buttonLink: ["http://asq.kr/V9LrhKnLSy1Zo", "http://asq.kr/FQvw9g4wlCjZ"],
  })
  // title
  // image
  // description
  // skills
  // button
  return (
    <Layout>
      <Container className={classes.cardGrid} maxWidth="xl">
        {/* <div>title</div>
        <div>
          body_box
          <div>image</div>
          <div>
            detail_box
            <div>description</div>
            <div>skills</div>
            <div>button</div>
          </div>
        </div> */}
        <Grid container spacing={1} className="projects_container">
          <Grid item xs={12}>
            {/* title */}
            <h1 className="title_h1">{project.title}.</h1>
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              {/* image */}
              <Grid container className="projectView-container">
                {project.images.map((image, idx) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    className={
                      // project.gifDirection
                      project.gifDirection === "vertical"
                        ? "vertical"
                        : "horizontal"
                    }
                    key={image.id}
                  >
                    <img className="gif" alt="" src={image.url} />
                    <h5 className="gif-name">{image.text}</h5>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={6}
              direction="row"
              className="detail_container"
            >
              <Grid item xs={12}>
                {/* description */}
                <h3>Description</h3>
                <div className="description_container">
                  {project.description.map((des, idx) => (
                    <p key={idx}>{des}</p>
                  ))}
                </div>
              </Grid>
              <Grid item xs={12}>
                {/* skills */}
                <h3>Skills</h3>
                <p>{project.skills}</p>
              </Grid>
              <Grid item xs={12} className="project_buttons">
                {/* button */}
                {/* <MuiThemeProvider theme={theme}> */}
                {/* <Link to="http://asq.kr/V9LrhKnLSy1Zo" target="_blank"> */}

                <Button>
                  <Link to={project.buttonLink[0]} target="_blank">
                    Github
                  </Link>
                </Button>

                {/* </MuiThemeProvider> */}
                <Button>
                  <Link to={project.buttonLink[1]} target="_blank">
                    Link
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Project1
