import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import { CardMedia } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    // width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    objectFit: "cover",
  },
  cardContent: {
    flexGrow: 1,
  },
}))

function ProjectList({ project }) {
  const classes = useStyles()
  return (
    <Grid item key={project.key} xs={12} sm={6} md={4} lg={4}>
      <Card className="thumb-box">
        {/* <Card className={classes.card}> */}
        <Link to={project.pageLink}>
          <CardMedia
            className={classes.cardMedia}
            image={project.thumbnail}
            title="image title"
          />
        </Link>
        <a>
          {/* <img src="https://source.unsplash.com/1600x900/?lama&peru" alt="" /> */}
          {/* <img src={project.thumbnail} alt="" /> */}
          <span className="overlay-box">
            <span className="meta">{project.type}</span>
            <span className="main-title">{project.title}</span>
            <span className="description">{project.description}</span>
            {/* <Link to="">
            <button className="projectButton">Detail</button>
          </Link>
          <Link to="">
            <button className="projectButton">github</button>
          </Link> */}
          </span>
        </a>
      </Card>
    </Grid>
  )
}

export default ProjectList
