import React from "react";
import styles from "./SectionContainer.module.css";
import { isMobile } from "react-device-detect";

// create a section with the specific background color
function SectionContainer(props) {
  if (isMobile) {
    return (
      <div
        className={styles.sectionContainerLayoutMobile}
        style={{
          backgroundColor: props.color,
          height: props.height,
          overflowX: props.overflowX,
          overflowY: props.overflowY,
        }}
      >
        {props.children}
      </div>
    );
  }
  return (
    <div
      className={styles.sectionContainerLayout}
      style={{ backgroundColor: props.color, height: props.heightWeb }}
    >
      {props.children}
    </div>
  );
}

export default SectionContainer;
