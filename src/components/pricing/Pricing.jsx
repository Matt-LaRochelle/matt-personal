import React from "react";
import styles from './Pricing.module.css';

function Pricing() {
    return (
        <div className={styles.pricing}>
                <h1>Pricing</h1>
                <div className={styles.container}>
                    <p>$10 Consultation</p>
                    <p>$100 Wireframe</p>
                    <p>$500 Website</p>
                    <p>$40/Hour Updates</p>
                </div>
            </div>
    );
}

export default Pricing;