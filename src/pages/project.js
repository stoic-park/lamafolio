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
      <Card className="cardContainer">
        <CardMedia
          className="cardMedia"
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Github
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      <Card className="cardContainer">
        <CardMedia
          className="cardMedia"
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      <Card className="cardContainer">
        <CardMedia
          className="cardMedia"
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  </Layout>
)

export default Project
