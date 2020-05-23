import React from 'react';
import styles from './OverviewContentContainer.module.css';
import SubmitEmail from '../SubmitEmail'
import celebrateEmoji from "../../assets/celebrate_emoji.png"

function LaunchDate() {
    return (
        <div className={styles.launchDateContainer}>
            <div className = {styles.launchDateButton}>New</div>
            <span> Launching in June 2020 </span>
            <div>
                <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
                <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
                <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
            </div>
        </div>
    );
}

function OverviewContentContainer() {
    return (
        <div className={styles.overviewContentContainer}>
            <LaunchDate/>
            <h1 className={styles.welcomeText}> The world’s first marketplace for live fitness classes with friends </h1>
            <SubmitEmail/>
        </div>
    );
}

export default OverviewContentContainer;