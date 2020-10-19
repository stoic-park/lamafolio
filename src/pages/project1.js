import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    height: "100%",
    // marginTop: "64px",
  },
}))

function Project1() {
  const classes = useStyles()
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
        <Grid container spacing={1}>
          <Grid item xs={12}>
            title
          </Grid>
          <Grid item container direction="row">
            <Grid item xs={6}>
              image
            </Grid>
            <Grid item container xs={6} direction="column">
              <Grid>description</Grid>
              <Grid>skills</Grid>
              <Grid>button</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Project1
