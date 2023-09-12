import React from "react";
import styles from './Home.module.css';
import Title from '../title/Title';
import Tech from '../tech/Tech';
import Projects from '../projects/Projects';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Navbar from "../navbar/Navbar";

function Home() {
    return (
        <div className={styles.container}>
            <Title />
        </div>
    );
}

export default Home;