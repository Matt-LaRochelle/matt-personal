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
                

            </div>
        </div>
    );
}

export default Home;