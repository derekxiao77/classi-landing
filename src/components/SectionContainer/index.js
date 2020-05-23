import React from 'react';
import styles from './SectionContainer.module.css';

// create a section with the specific background color
function SectionContainer(props) {
    return (
        <div className={styles.sectionContainerLayout} style={{backgroundColor: props.color}}>
            {props.children}
        </div>
    );
}

export default SectionContainer;