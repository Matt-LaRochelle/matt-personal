import React from "react"
import './projects.css'
import { Link } from "react-router-dom"

// Components
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

import { projectInfo } from "./projectInfo"

function Projects() {

    return (
        <div className="projects">
            <Navbar />
            <div className="projects__container">
                <div className="projects__helper">
                    <p>Welcome to my portfolio!</p>
                </div>
                <div className="projects__grid">
                    {projectInfo.map((project, index) => {
                        return (
                            <Link to={project.link} key={index}>
                                <div className="projects__card">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} />
                                    <p className="projects__title">{project.title} {project.type}</p>
                                </div>
                            </Link>
                        )})
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;