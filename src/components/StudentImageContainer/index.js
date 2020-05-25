import React from 'react';
import stylesWeb from './StudentImageContainer.module.css';
import stylesMobile from './MobileStudentImageContainer.module.css';
import shape2 from "../../assets/overview_shape2.png";
import shape3 from "../../assets/overview_shape3.png";
import shape4 from "../../assets/overview_shape4.png";
import studentScreen from "../../assets/student_image.png";
import homeScreen from "../../assets/home.png";
import browseScreen from "../../assets/Browse.png";
import { isMobile } from 'react-device-detect'

const styles = { ...stylesWeb, ...stylesMobile }

const tileState = {
    Friends: 1,
    Free: 2,
    Goals: 3
};

function StudentImageContainer(props) {
    var returnImage = <div />;

    if (isMobile) {
        if (props.content === tileState.Friends) {
            returnImage =
                <div className={styles.imageContainerMobile}>
                    <img src={studentScreen} alt="" className={styles.phoneImageMobile} />
                </div>
        }
        else if (props.content === tileState.Free) {
            returnImage =
                <div className={styles.imageContainerMobile}>
                    <img src={homeScreen} alt="" className={styles.phoneImageMobile} />
                </div>
        }
        else {
            returnImage =
                <div className={styles.imageContainerMobile}>
                    <img src={browseScreen} alt="" className={styles.phoneImageMobile} />
                </div>
        }
        return (
            <div>
                <img src={shape2} alt="" className={styles.shape2Mobile} />
                <img src={shape3} alt="" className={styles.shape3Mobile} />
                <img src={shape4} alt="" className={styles.shape4Mobile} />
                {returnImage}
            </div>
        )
    }
    else {
        if (props.content === tileState.Friends) {
            returnImage = <img src={studentScreen} alt="" className={styles.phoneImage} />
        }
        else if (props.content === tileState.Free) {
            returnImage = <img src={homeScreen} alt="" className={styles.phoneImage} />
        }
        else {
            returnImage = <img src={browseScreen} alt="" className={styles.phoneImage} />
        }
        return (
            <div>
                <img src={shape2} alt="" className={styles.shape2} />
                <img src={shape3} alt="" className={styles.shape3} />
                <img src={shape4} alt="" className={styles.shape4} />
                {returnImage}
            </div>
        );
    }
}

export default StudentImageContainer;