import React from "react";
import styles from './Pricing.module.css';

function Pricing() {
    return (
        <div className={styles.pricing}>
                <h1>Pricing</h1>
                <p>$500/website starting price</p>
                <p>Includes one week of revisions after completion of website</p>
                <p>40$/hour for updates and adjustments</p>
            </div>
    );
}

export default Pricing;