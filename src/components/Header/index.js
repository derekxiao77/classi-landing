import React from 'react';
import styles from './Header.module.css';
import classLogo from "../../assets/classi_logo.png"
import { isMobile } from 'react-device-detect'

/*
            <span style={{marginLeft:'auto', marginRight:'30px'}}>Watch a class</span>
            <span>Teach a class</span>
*/

function Header(props) {
    if (isMobile) {
        return (
            <div className={styles.headerContainer}>
                <img src={classLogo} alt="" className={styles.classiLogo} />
                <div className={styles.contactText}><a href="mailto:contact@classi.live" style={{ color: "#F86A6A" }}>contact@classi.live</a></div>
            </div>
        );
    }
    return (
        <div className={styles.headerContainer}>
            <div>
                <img src={classLogo} alt="" className={styles.classiLogo} />
                <span style={{ marginLeft: '37px' }}>#WorkoutWithFriends</span>
            </div>
            <div className={styles.contactText}><a href="mailto:contact@classi.live" style={{ color: "#F86A6A" }}>contact@classi.live</a></div>
        </div>
    );
}

export default Header;