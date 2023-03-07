import React from "react";
import styles from './Title.module.css'

function Title() {
    return (
        <div className={styles.top}>
            <h1 className={styles.t1}>I'm Matt!</h1>
            <h3 className={styles.t2}>A <span>Web</span> Developer</h3>
        </div>
    );
}

export default Title;
