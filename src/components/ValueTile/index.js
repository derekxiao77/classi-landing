import React from 'react';
import styles from './ValueTile.module.css';
import assets from '../../assets/assets';

function ValueTile(props) {
    return (
        <div className={styles.valueTile}>
            <div className={styles.tileIconContainer}>
                <img src={assets[props.imagePath]} alt="" className={styles.tileIcon}/>
            </div>
            <div className = {styles.tileLabel}>{props.valueText}</div>
        </div>
    )
}

export default ValueTile;