import React from 'react';
import styles from './StudentImageContainer.module.css';
import shape2 from "../../assets/overview_shape2.png";
import shape3 from "../../assets/overview_shape3.png";
import shape4 from "../../assets/overview_shape4.png";
import phoneImage from "../../assets/student_image.png";

function StudentImageContainer() {
    return (
        <div>
            <img src={shape2} alt="" className={styles.shape2} />
            <img src={shape3} alt="" className={styles.shape3} />
            <img src={shape4} alt="" className={styles.shape4} />
            <img src={phoneImage} alt="" className={styles.phoneImage} />
        </div>
    );
}

export default StudentImageContainer;