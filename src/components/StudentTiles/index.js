import React from 'react';
import styles from './StudentTiles.module.css';
import friendsIcon from "../../assets/friends_icon.png";
import clapIcon from "../../assets/clap_icon.png";
import praiseIcon from "../../assets/praise_icon.png";

const tileState = {
    Friends: 1,
    Free: 2,
    Goals: 3
};

function ValueTile(props) {
    if (props.thisTile == props.selectedTile) {
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
            <h3>#ClassiWithFriends</h3>
            <h2>Fitness is more fun with friends</h2>
            <span>Stay healthy and hang out with your friends at the same time.
            Turn any live stream into a video chat by creating a private group
            and inviting your friends.
            </span>
        </div>
    );
}

function ContentFree() {
    return (
        <div>
            <h3>#FreeClassi</h3>
            <h2>Any live class. Any instructor. Free.</h2>
            <span>
                We believe that staying healthy shouldn't cost money.
                Take any live class you want, with any instrutor you want,
                and as many classes as you want - all free.
            </span>
        </div>
    );
}

function ContentGoals() {
    return (
        <div>
            <h3>#LiveClassi</h3>
            <h2>The largest selection of live fitness classes</h2>
            <span>
                Whether you want to eat healthier or be more active,
                you can find the perfect class on Classi. Getting that summer
                body is now as simple as pressing play.
            </span>
        </div>
    );
}

function ContentConditional(props) {
    if (props.content == tileState.Friends) {
        return <ContentFriends />;
    }
    else if (props.content == tileState.Free) {
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
        return (
            /*<button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>*/
            <div className={styles.studentContentContainer}>
                <ContentConditional content={this.state.content} />
                <div className={styles.tilesContainer}>
                    <ValueTile image={friendsIcon} valueText="Watch with friends" thisTile={tileState.Friends} selectedTile={this.state.content} onClick={this.friendsClick} />
                    <ValueTile image={clapIcon} valueText="Any live class. Free." thisTile={tileState.Free} selectedTile={this.state.content} onClick={this.freeClick} />
                    <ValueTile image={praiseIcon} valueText="Reach your fitness goals" thisTile={tileState.Goals} selectedTile={this.state.content} onClick={this.goalsClick} />
                </div>
            </div>
        );
    }
}

export default StudentTiles;