import React from "react";
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.projects}>
                <h3>Brandywine Carriage Tours</h3>
                <p>A website I built for a horse drawn carriage service</p>
                <p>Include an image</p>
                <p>Include a link</p>

                <h3>Project 2</h3>
                <p>A website for a horseback riding school</p>
                <p>Include an image</p>
                <p>Include a link</p>

                <h3>Guitar Paths</h3>
                <p>A website where you can sign up and access several different lessons for guitarist who want to sing while playing.</p>
                <p>Include a video</p>
                <p>Include a link</p>
            </div>
    );
}

export default Projects;