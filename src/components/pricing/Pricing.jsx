import React from "react";
import styles from './Pricing.module.css';

function Pricing() {
    return (
        <div className={styles.pricing}>
                <h1>Pricing</h1>
                <p>$1000/website starting price</p>
                <p>Includes one week of revisions after completion of website</p>
                <p>50$/hour for updates and adjustments</p>
            </div>
    );
}

export default Pricing;