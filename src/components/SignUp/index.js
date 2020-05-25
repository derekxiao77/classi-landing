import React from 'react';
import { isMobile } from 'react-device-detect'
import styleWeb from './SignUp.module.css'
import styleMobile from './MobileSignUp.module.css'
import celebrateEmoji from "../../assets/celebrate_emoji.png"
import SubmitEmail from '../SubmitEmail';

import shape1 from "../../assets/overview_shape1.svg";
import shape3 from "../../assets/overview_shape3.png";
import shape4 from "../../assets/overview_shape4.png";
import phoneImage from "../../assets/overview_image.png";

const styles = { ...styleWeb, ...styleMobile }

function SignUp() {
    if (isMobile) {
        return (
            <div className={styles.signUpContainerMobile}>
                <img src={shape1} alt="" className={styles.shape1Mobile} />
                <img src={shape3} alt="" className={styles.shape3Mobile} />
                    <div className={styles.headerTextMobile}>
                        Launching in June 2020
                        <img src={celebrateEmoji} alt="" className={styles.celebrateEmojiMobile} />
                        <img src={celebrateEmoji} alt="" className={styles.celebrateEmojiMobile} />
                        <img src={celebrateEmoji} alt="" className={styles.celebrateEmojiMobile} />
                    </div>
                <div className={styles.signUpTextMobile}>Sign up below and be among the first to experience
                home workouts to look forward to.
                    </div>
                <SubmitEmail />
                <div style={{ marginBottom: '80px' }} />
                <div className={styles.contactText}>reach us at <a href="mailto:contact@classi.live" style={{ color: "#F86A6A" }}>contact@classi.live</a></div>
            </div>
        );
    }
    return (
        <div className={styles.signUpContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.headerText}>Launching in June 2020</div>
                <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
            </div>
            <div className={styles.signUpText}>Sign up below and be among the first to experience
            home workouts to look forward to.
                    </div>
            <SubmitEmail />
            <div style={{ marginBottom: '40px' }} />
            <div className={styles.contactText}>reach us at <a href="mailto:contact@classi.live" style={{ color: "#F86A6A" }}>contact@classi.live</a></div>
            <img src={phoneImage} alt="" className={styles.phoneImageLeft} />
            <img src={shape1} alt="" className={styles.shape1Left} />
            <img src={shape3} alt="" className={styles.shape3Left} />
            <img src={shape4} alt="" className={styles.shape4Left} />
            <img src={phoneImage} alt="" className={styles.phoneImageRight1} />
            <img src={phoneImage} alt="" className={styles.phoneImageRight2} />
            <img src={shape1} alt="" className={styles.shape1Right} />
            <img src={shape3} alt="" className={styles.shape3Right} />
            <img src={shape4} alt="" className={styles.shape4Right} />
        </div>
    );
}

export default SignUp