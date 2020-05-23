import React from 'react';
import styles from './Tab.module.css';

function Tab(props) {
    return (
        <a onClick={props.onClick} className={styles.tabLink}>{props.title}</a>
    )
}

export default Tab;