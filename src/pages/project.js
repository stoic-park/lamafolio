import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectList from "../components/ProjectList"
// import SEO from "../components/seo"

// material-ui
// import Card from "@material-ui/core/Card"
// import CardActions from "@material-ui/core/CardActions"
// import CardContent from "@material-ui/core/CardContent"
// import CardMedia from "@material-ui/core/CardMedia"
// import Button from "@material-ui/core/Button"
// import Typography from "@material-ui/core/Typography"
import "./project.css"
// import { Link } from "gatsby"

function Project() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      type: "Team Project",
      title: "ShareBook",
      description: "지역 내 중고책 대여 모바일 서비스",
      github: "",
      notion: "",
      link: "",
      images: [""],
    },
    {
      id: 2,
      type: "Team Project",
      title: "CheerLeader",
      description: "랜덤 응원 메세지 웹 서비스",
      github: "",
      notion: "",
      link: "",
      images: [],
    },
    {
      id: 3,
      type: "Solo Project",
      title: "LamaChat",
      description: "실시간 채팅 웹 서비스",
      github: "",
      notion: "",
      link: "",
      images: [],
    },
  ])
  return (
    <Layout>
      <div className="projectContainer">
        <div className="projectCardContainer">
          {projects.map(project => (
            <ProjectList key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Project
