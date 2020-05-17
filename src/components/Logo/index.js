import React from 'react';
import styles from './Logo.module.css';

function Logo(props) {
    return (
        <img src={props.imgSource} style={{ height: props.height, width: props.width }} className={styles.logo}></img>
    )
}

export default Logo;