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

function Project2() {
  const classes = useStyles()
  const [project, setProject] = useState({
    gifDirection: "vertical",
    title: "ShareBook",
    images: [
      {
        id: 1,
        text: "책 빌리기",
        url:
          "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/borrowRequest.gif",
      },
      {
        id: 2,
        text: "중고 책 등록",
        url:
          "https://sharebook-gifs.s3.ap-northeast-2.amazonaws.com/uploadBook.gif",
      },
    ],
    description: [
      "우리 동네 중고책 대여 앱.",
      "우리 집에 읽지 않는 책들을 가까운 이웃들과 공유하는 건 어떨까? 라는 생각에서 출발한 서비스",
      "주요 기능 : 중고책 등록, 우리동네 중고책 목록 보기, 대여 요청 등",
    ],
    skills:
      "React Native(Expo), React Navigation, Redux, Material UI, Expo, 카카오 API ",
    buttonLink: [
      "http://asq.kr/https://github.com/stoic-park/ShareBook_Final",
      "https://www.notion.so/5-five-fingers-ShareBook-0a206a8176914268af72da238a016130",
    ],
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
                    Notion Page
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

export default Project2
