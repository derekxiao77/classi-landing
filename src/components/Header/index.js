import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo';
import Label from '../Label';
import Tab from '../Tab';

import classiLogo from '../../assets/classi_logo.png';

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.navLeft}>
                <Logo imgSource={classiLogo} height="26px" width="112px"/>
                <Label text="#WorkoutWithFriends"/>
            </div>
            <div className={styles.navRight}>
                <Tab title="Watch a Class" onClick={() => console.log('Watch a class clicked!')}/>
                <Tab title="Teach a Class" onClick={() => console.log('Teach a class clicked!')}/>
            </div>
        </div>
    )
}

export default Header;