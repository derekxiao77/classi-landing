import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import './Images.css';
import ValueTile from './components/ValueTile';
import Header from './components/Header';

    /*
  <div class="overview-section">
    <div class="left-align-content" style="position:absolute; width:315px; height:36px; top:125px; background:#FFFFFF;
      border-radius:10px;"></div>
    <div style="display:flex; justify-content:center; align-items:center; position:absolute; left: 60px; width:51px; height:26px; top:130px; background:#FF0E83;
      border-radius:100px;">
      <div style="font-weight: 900; font-size: 14px; color: #FFFFFF;">New</div>
    </div>
    <img src="assets/vector1.svg" alt="vector1" id="vector1"/>
    <img src="assets/overview_image.png" alt="overview image" id="overview-mockup"/>
  </div>
  */

// <div className = 'Tile-label'>{props.valueText}</div>

function SubmitEmail() {
    const container =
        <div className = 'Email-container'>
            <div className = 'Placeholder-text'>
                Your email
            </div>
            <div className = 'Submit-email-button'>
                Get Notified
            </div>
        </div>;
    return container;
}

function LaunchDate() {
    const container =
        <div className = 'Launch-date-container'>
            <div className = 'Launch-date-button'>New</div>
            <span> Launching in June 2020 </span>
            <div>
                <img src={require("./assets/celebrate_emoji.png")} alt="" className="Celebrate-emoji"/>
                <img src={require("./assets/celebrate_emoji.png")} alt="" className="Celebrate-emoji"/>
                <img src={require("./assets/celebrate_emoji.png")} alt="" className="Celebrate-emoji"/>
            </div>
        </div>;
    return container;
}

// create a section with the specific background color
function ContentSection(props) {
    const color = props.color;
    const backgroundStyle = {
        display: 'flex',
        position: 'relative',
        backgroundColor: color,
        width: '80%',
        height: '500px',
        margin: '25px',
        borderRadius: '20px',
        overflow: 'hidden'
    };
    const section = <div style = {backgroundStyle}>
        {props.children}
    </div>;
    return section;
}

function App() {
  return ( 
    <div>
        <div className="Landing-page">
            <Header />
            <ContentSection color="#F4F5F6">
                <div className = "Welcome-content-container">
                    <LaunchDate/>
                    <h1 className="Welcome-text"> The world’s first social marketplace for live fitness classes </h1>
                    <SubmitEmail/>
                </div>
                <img src={require("./assets/overview_shape1.svg")} alt="" className="Classi-overview-shape1"/>
                <img src={require("./assets/overview_shape2.png")} alt="" className="Classi-overview-shape2"/>
                <img src={require("./assets/overview_shape3.png")} alt="" className="Classi-overview-shape3"/>
                <img src={require("./assets/overview_shape4.png")} alt="" className="Classi-overview-shape4"/>
                <img src={require("./assets/overview_image.png")} alt="" className="Classi-overview-image"/>
            </ContentSection>
            <ContentSection color="#FFF2F0">
                <img src={require("./assets/overview_shape2.png")} alt="" className="Classi-student-shape2"/>
                <img src={require("./assets/overview_shape3.png")} alt="" className="Classi-student-shape3"/>
                <img src={require("./assets/overview_shape4.png")} alt="" className="Classi-student-shape4"/>
                <img src={require("./assets/student_image.png")} alt="" className="Classi-student-image"/>
                <div className = 'Student-content-container'>
                    <h3>#WatchAClass</h3>
                    <h2>Fitness is more fun with friends</h2>
                    <span>Stay healthy and hang out with your friends at the same time. 
                        Turn any live stream into a video chat by creating a private group
                        and inviting your friends.
                    </span>
                    <div className="Selectable-tiles">
                        <ValueTile imagePath={'friendsIcon'} valueText="Watch with friends"/>
                        <ValueTile imagePath={'clapIcon'} valueText="Any live class. Free."/>
                        <ValueTile imagePath={'praiseIcon'} valueText="Reach your fitness goals"/>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="#E7F4F6">
                <div className = "Welcome-content-container">
                    <h3>#WatchAClass</h3>
                    <h2>Fitness is more fun with friends</h2>
                    <span>Stay healthy and hang out with your friends at the same time. 
                        Turn any live stream into a video chat by creating a private group
                        and inviting your friends.
                    </span>
                </div>
            </ContentSection>
        </div>
    </div>
  );
}

export default App;
