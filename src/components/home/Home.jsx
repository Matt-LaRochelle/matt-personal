import React from "react";
import styles from './Home.module.css';
import Title from '../title/Title';
import Tech from '../tech/Tech';
import Projects from '../projects/Projects';
import Pricing from '../pricing/Pricing';
import Footer from '../footer/Footer';

function Home() {
    return (
        <div className={styles.container}>
            <Title />
            <Projects />
            <Tech />
            <Pricing />
            <Footer />
        </div>
    );
}

export default Home;