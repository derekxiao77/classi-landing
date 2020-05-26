import React from 'react';
import stylesWeb from './StudentTiles.module.css';
import stylesMobile from './MobileStudentTiles.module.css';
import friendsIcon from "../../assets/friends_icon.png";
import clapIcon from "../../assets/clap_icon.png";
import praiseIcon from "../../assets/praise_icon.png";
import { isMobile } from 'react-device-detect'

import StudentImageContainer from '../StudentImageContainer'

const styles = { ...stylesWeb, ...stylesMobile }

const tileState = {
    Friends: 1,
    Free: 2,
    Goals: 3
};

function ValueTile(props) {
    if (props.thisTile === props.selectedTile) {
        return (
            <button className={styles.selectedTile} onClick={props.onClick}>
                <div className={styles.tileIconContainer}>
                    <img src={props.image} alt="" className={styles.tileIcon} />
                </div>
                <div className={styles.selectedTileLabel}>{props.valueText}</div>
            </button>
        );
    }
    else {
        return (
            <button className={styles.unselectedTile} onClick={props.onClick}>
                <div className={styles.tileIconContainer}>
                    <img src={props.image} alt="" className={styles.tileIcon} />
                </div>
                <div className={styles.unselectedTileLabel}>{props.valueText}</div>
            </button>
        );
    }
}

function ContentFriends() {
    return (
        <div>
            <h3>#WatchOnClassi</h3>
            <h2>Fitness is more fun with friends</h2>
            <span>Stay fit and hang out with friends at the same time.
            Turn any live stream into a video chat by creating a private group
            and inviting your friends.
            </span>
        </div>
    );
}

function ContentFree() {
    return (
        <div>
            <h3>#WatchOnClassi</h3>
            <h2>Any live class. Any instructor. Free.</h2>
            <span>
                Classi users can watch as many live classes as they want for free.
                For more flexibility, Classi Premium gives users full 
                access to watch any past class and save classes to watch again in the future.
            </span>
        </div>
    );
}

function ContentGoals() {
    return (
        <div>
            <h3>#WatchOnClassi</h3>
            <h2>Find your perfect class</h2>
            <span>
                Classi offers a wide range of wellness classes from home workouts to home cooking.
                Reaching your fitness goals is now as simple as pressing play.
            </span>
        </div>
    );
}

function ContentConditional(props) {
    if (props.content === tileState.Friends) {
        return <ContentFriends />;
    }
    else if (props.content === tileState.Free) {
        return <ContentFree />;
    }
    else {
        return <ContentGoals />;
    }
}

class StudentTiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: tileState.Friends };

        // This binding is necessary to make `this` work in the callback
        this.friendsClick = this.friendsClick.bind(this);
        this.freeClick = this.freeClick.bind(this);
        this.goalsClick = this.goalsClick.bind(this);
    }

    friendsClick() {
        this.setState(state => ({
            content: tileState.Friends
        }));
    }

    freeClick() {
        this.setState(state => ({
            content: tileState.Free
        }));
    }

    goalsClick() {
        this.setState(state => ({
            content: tileState.Goals
        }));
    }

    render() {
        if (isMobile) {
            return (
                <div style={{marginLeft: "5%"}}>
                    <StudentImageContainer content={this.state.content} />
                    <div className={styles.studentContentContainerMobile}>
                        <ContentConditional content={this.state.content} />
                        <div className={styles.tilesContainer}>
                            <ValueTile image={friendsIcon} valueText="Watch with friends" thisTile={tileState.Friends} selectedTile={this.state.content} onClick={this.friendsClick} />
                            <ValueTile image={clapIcon} valueText="Any live class. Free." thisTile={tileState.Free} selectedTile={this.state.content} onClick={this.freeClick} />
                            <ValueTile image={praiseIcon} valueText="Reach your fitness goals" thisTile={tileState.Goals} selectedTile={this.state.content} onClick={this.goalsClick} />
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <StudentImageContainer content={this.state.content} />
                <div className={styles.studentContentContainer}>
                    <ContentConditional content={this.state.content} />
                    <div className={styles.tilesContainer}>
                        <ValueTile image={friendsIcon} valueText="Watch with friends" thisTile={tileState.Friends} selectedTile={this.state.content} onClick={this.friendsClick} />
                        <ValueTile image={clapIcon} valueText="Any live class. Free." thisTile={tileState.Free} selectedTile={this.state.content} onClick={this.freeClick} />
                        <ValueTile image={praiseIcon} valueText="Reach your fitness goals" thisTile={tileState.Goals} selectedTile={this.state.content} onClick={this.goalsClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentTiles;