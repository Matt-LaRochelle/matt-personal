import React from "react";
import styles from './Tech.module.css'
import {FaReact, FaHtml5, FaCss3, FaBootstrap, FaGithub, FaDocker, FaNodeJs, FaPython} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiMongodb, SiMysql} from 'react-icons/si';

function Tech() {
    return (
        <div>
            <div className={styles.tech}>
                <h3 className={styles.title}>My Tech Stack</h3>
                <div className={styles.stack}>
                    <div className={styles.row1}>
                        <div className={styles.item}>
                            <FaReact />
                            <p>React</p>
                        </div>
                        <div className={styles.item}>
                            <IoLogoJavascript />
                            <p>JavaScript</p>
                        </div>
                        <div className={styles.item}>
                            <FaHtml5 />
                            <p>HTML</p>
                        </div>
                        <div className={styles.item}>
                            <FaCss3 />
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.item}>
                            <FaBootstrap />
                            <p>Bootstrap</p>
                        </div>
                        <div className={styles.item}>
                            <SiMongodb />
                            <p>MongoDB</p>
                        </div>
                        <div className={styles.item}>
                            <SiMysql />
                            <p>MySQL</p>
                        </div>
                        <div className={styles.item}>
                            <FaPython />
                            <p>Python</p>
                        </div>
                    </div>
                    <div className={styles.row3}>
                        <div className={styles.item}>
                            <FaGithub />
                            <p>GitHub</p>
                        </div>
                        <div className={styles.item}>
                            <FaDocker />
                            <p>Docker</p>
                        </div>
                        <div className={styles.item}>
                            <FaNodeJs />
                            <p>NodeJS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tech;