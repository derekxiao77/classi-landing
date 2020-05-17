import React from 'react';
import styles from './Label.module.css';

function Label(props) {
    return (
        <span>{props.text}</span>
    )
}

export default Label;