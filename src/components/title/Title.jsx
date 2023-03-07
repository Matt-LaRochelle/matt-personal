import React from "react";
import styles from './Title.module.css'

function Title() {
    return (
        <div className={styles.top}>
                <h1 className={styles.t1}>I'm Matt!</h1>
                <h3 className={styles.t2}>A Web <span>Developer</span></h3>
            </div>
    );
}

export default Title;
