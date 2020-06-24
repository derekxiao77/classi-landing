import React from "react";
import "./App.css";
import "./fonts/circularFont.css";
import Header from "./components/Header";
import SectionContainer from "./components/SectionContainer";
import OverviewContentContainer from "./components/OverviewContentContainer";
import OverviewImageContainer from "./components/OverviewImageContainer";
import StudentTiles from "./components/StudentTiles";
import InstructorTiles from "./components/InstructorTiles";
import SignUp from "./components/SignUp";
import { Mixpanel } from "./components/Mixpanel";

function App() {
  return (
    <div className="Landing-page">
      {Mixpanel.pageView()}
      <Header />
      <SectionContainer color="#F4F5F6">
        <OverviewContentContainer />
        <OverviewImageContainer />
      </SectionContainer>
      <SectionContainer
        color="#FFF2F0"
        height="initial"
        overflowY="initial"
        overflowX="hidden"
      >
        <StudentTiles />
      </SectionContainer>
      <SectionContainer
        color="#E7F4F6"
        height="initial"
        overflowY="initial"
        overflowX="hidden"
      >
        <InstructorTiles />
      </SectionContainer>
      <SectionContainer
        color="#F4F5F6"
        height="initial"
        overflowY="hidden"
        overflowX="hidden"
        heightWeb="350px"
      >
        <SignUp />
      </SectionContainer>
    </div>
  );
}

//<InstructorImageContainer/>
export default App;
