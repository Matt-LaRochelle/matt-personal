import React from "react";
import styles from './Tech.module.css'

function Tech() {
    return (
        <div>
            <div className={styles.tech}>
                <h3 className={styles.title}>My tech stack</h3>
                <div className={styles.stack}>
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
            </div>
        </div>
    );
}

export default Tech;