import React from "react";
import stylesWeb from "./OverviewContentContainer.module.css";
import stylesMobile from "./OverviewContentContainerMobile.module.css";
import SubmitEmail from "../SubmitEmail";
import celebrateEmoji from "../../assets/celebrate_emoji.png";
import { isMobile } from "react-device-detect";

const styles = { ...stylesWeb, ...stylesMobile };

function LaunchDate() {
  if (isMobile) {
    return (
      <div className={styles.launchDateContainerMobile}>
        <div className={styles.launchDateButton}>New</div>
        <span> Launching in Summer 2020 </span>
        <div>
          <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
          <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
          <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.launchDateContainer}>
      <div className={styles.launchDateButton}>New</div>
      <span> Launching in Summer 2020 </span>
      <div>
        <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
        <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
        <img src={celebrateEmoji} alt="" className={styles.celebrateEmoji} />
      </div>
    </div>
  );
}

function OverviewContentContainer() {
  if (isMobile) {
    return (
      <div className={styles.overviewContentContainerMobile}>
        <LaunchDate />
        <div className={styles.welcomeTextMobile}>
          {" "}
          The first app designed for fitness with friends{" "}
        </div>
        <div className={styles.welcomeCaptionMobile}>
          {" "}
          Reach your fitness goals sooner while experiencing home workouts that
          you enjoy
        </div>
        <SubmitEmail />
      </div>
    );
  }
  return (
    <div className={styles.overviewContentContainer}>
      <LaunchDate />
      <h1 className={styles.welcomeText}>
        {" "}
        The first app designed for fitness with friends{" "}
      </h1>
      <SubmitEmail />
    </div>
  );
}

export default OverviewContentContainer;
