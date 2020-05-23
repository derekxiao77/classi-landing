import React from 'react';
import styles from './OverviewImageContainer.module.css';
import shape1 from "../../assets/overview_shape1.svg";
import shape2 from "../../assets/overview_shape2.png";
import shape3 from "../../assets/overview_shape3.png";
import shape4 from "../../assets/overview_shape4.png";
import phoneImage from "../../assets/overview_image.png";

function OverviewImageContainer() {
    return (
        <div>
            <img src={shape1} alt="" className={styles.overviewShape1} />
            <img src={shape2} alt="" className={styles.overviewShape2} />
            <img src={shape3} alt="" className={styles.overviewShape3} />
            <img src={shape4} alt="" className={styles.overviewShape4} />
            <img src={phoneImage} alt="" className={styles.phoneImage} />
        </div>
    );
}

export default OverviewImageContainer;