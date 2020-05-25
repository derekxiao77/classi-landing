import React from 'react';
import stylesWeb from './OverviewImageContainer.module.css';
import stylesMobile from './MobileOverviewImageContainer.module.css';
import shape1 from "../../assets/overview_shape1.svg";
import shape2 from "../../assets/overview_shape2.png";
import shape3 from "../../assets/overview_shape3.png";
import shape4 from "../../assets/overview_shape4.png";
import phoneImage from "../../assets/overview_image.png";
import {isMobile} from 'react-device-detect'

const styles = {...stylesWeb, ...stylesMobile}

function OverviewImageContainer() {
    if (isMobile) {
        return (
            <div>
                <img src={shape3} alt="" className={styles.overviewShape3Mobile} />
                <img src={shape4} alt="" className={styles.overviewShape4Mobile} />
                <img src={shape1} alt="" className={styles.overviewShape1Mobile} />
                <img src={phoneImage} alt="" className={styles.phoneImageMobile} />
            </div>
        );
    }
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