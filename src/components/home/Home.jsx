import React from "react";
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>I'm Matt!</h1>
                <h3>A web developer</h3>
                <p>I create beautiful, responsive websites</p>
                <p>Elevate your business with a modern look!</p>
            </div>
            <div className={styles.tech}>
                <h3>My tech stack</h3>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-bootstrap"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-docker"></i>
                <i class="fa-brands fa-python"></i>
                <p>Mongo DB and SQL</p>
            </div>
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
            <div className={styles.pricing}>
                <h1>Pricing</h1>
                <p>
                    40$/hour or 800$/website
                </p>
            </div>
        </div>
    );
}

export default Home;