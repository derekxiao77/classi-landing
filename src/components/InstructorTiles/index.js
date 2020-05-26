import React from 'react';
import stylesWeb from './InstructorTiles.module.css';
import cashIcon from "../../assets/cash.png";
import megaphoneIcon from "../../assets/megaphone.png";
import textIcon from "../../assets/text.png";
import stylesMobile from './MobileInstructorTiles.module.css';
import { isMobile } from 'react-device-detect';
import InstructorImageContainer from '../InstructorImageContainer'

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
            <h3>#TeachOnClassi</h3>
            <h2>Get paid to teach what you love</h2>
            <span>
                Classi provides an opportunity for anyone to teach a class
                and begin monetizing his/her content. Instructors are compensated 
                based off views as well as directly by other users through tips.
            </span>
        </div>
    );
}

function ContentFree() {
    return (
        <div>
            <h3>#TeachOnClassi</h3>
            <h2>Engage directly with followers</h2>
            <span>
                Connect with your followers in and out of class. Classi’s social feed allows
                you to continue engaging with your followers even after the class has finished.
            </span>
        </div>
    );
}

function ContentGoals() {
    return (
        <div>
            <h3>#TeachOnClassi</h3>
            <h2>Create truly interactive class experiences</h2>
            <span>
                On most live fitness apps, users can only interact with the instructor by typing comments.
                Instructors on Classi can interact with select users in real-time through video and audio.
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

class InstructorTiles extends React.Component {
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
                    <InstructorImageContainer content={this.state.content} />
                    <div className={styles.instructorContentContainerMobile}>
                        <ContentConditional content={this.state.content} />
                        <div className={styles.tilesContainer}>
                            <ValueTile image={cashIcon} valueText="Earn money" thisTile={tileState.Friends} selectedTile={this.state.content} onClick={this.friendsClick} />
                            <ValueTile image={megaphoneIcon} valueText="Grow your brand" thisTile={tileState.Free} selectedTile={this.state.content} onClick={this.freeClick} />
                            <ValueTile image={textIcon} valueText="Teach with friends" thisTile={tileState.Goals} selectedTile={this.state.content} onClick={this.goalsClick} />
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <InstructorImageContainer content={this.state.content} />
                <div className={styles.instructorContentContainer}>
                    <ContentConditional content={this.state.content} />
                    <div className={styles.tilesContainer}>
                        <ValueTile image={cashIcon} valueText="Earn money" thisTile={tileState.Friends} selectedTile={this.state.content} onClick={this.friendsClick} />
                        <ValueTile image={megaphoneIcon} valueText="Grow your brand" thisTile={tileState.Free} selectedTile={this.state.content} onClick={this.freeClick} />
                        <ValueTile image={textIcon} valueText="Teach with friends" thisTile={tileState.Goals} selectedTile={this.state.content} onClick={this.goalsClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default InstructorTiles;