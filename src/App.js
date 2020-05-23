import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header'
import SectionContainer from './components/SectionContainer'
import OverviewContentContainer from './components/OverviewContentContainer'
import OverviewImageContainer from './components/OverviewImageContainer'
import StudentImageContainer from './components/StudentImageContainer'
import StudentTiles from './components/StudentTiles'
import InstructorTiles from './components/InstructorTiles'

function App() {
  return ( 
        <div className="Landing-page">
            <Header/>
            <SectionContainer color="#F4F5F6">
                <OverviewContentContainer/>
                <OverviewImageContainer/>
            </SectionContainer>
            <SectionContainer color="#FFF2F0">
                <StudentImageContainer/>
                <StudentTiles/>
            </SectionContainer>
            <SectionContainer color="#E7F4F6">
                <InstructorTiles/>
            </SectionContainer>
        </div>
  );
}

export default App;
