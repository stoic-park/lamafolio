import React from "react"
import { Link } from "gatsby"

function ProjectList({ project }) {
  return (
    <div className="thumb-box">
      <a>
        <img src="https://source.unsplash.com/1600x900/?lama&peru" alt="" />
        <span className="overlay-box">
          <span className="meta">{project.type}</span>
          <span className="main-title">{project.title}</span>
          <span className="description">{project.description}</span>
          <Link to="">
            <button className="projectButton">Detail</button>
          </Link>
          <Link to="">
            <button className="projectButton">github</button>
          </Link>
        </span>
      </a>
    </div>
  )
}

export default ProjectList
