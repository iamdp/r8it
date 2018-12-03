import React, { Component } from "react";
import DashboardCategory from "./dashboard-category";
import styled from "styled-components";

const DashboardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1920px;
`;

const Header = styled.div`
  height: 480px;
  overflow: hidden;
  position: relative;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  height: 100%;
  color: white;
`;

const HeaderImage = styled.img`
  position: absolute;
  top: -45px;
  left: 0;
  max-width: 100%;
  opacity: 0.6;
  z-index: -1;
`;

const HeaderTitle = styled.h1`
  font-size: 4em;
  font-family: "Arial Black", Gadget, sans-serif;
  text-shadow: 4px 4px 3px black;
`;

const HeaderSubText = styled.p`
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
`;

const Footer = styled.div`
  background-color: black;
  color: white;
  font-size: 2em;
  text-align: center;
`;

export class Dashboard extends Component {
  render() {
    return (
      <DashboardsContainer>
        <Header>
          <HeaderContent>
            <HeaderTitle>http://www.r8it.live</HeaderTitle>
            <HeaderSubText>
              <em>Top posts by category:</em>
            </HeaderSubText>
          </HeaderContent>
          <HeaderImage
            src="./media/arm-wrestling-bar-bet-4417.jpg"
            alt="Arm wrestling"
          />
        </Header>
        <DashboardsContainer>
          <DashboardCategory />
          <DashboardCategory />
          <DashboardCategory />
          <DashboardCategory />
        </DashboardsContainer>
        <Footer>A project by Mateus K, David P and Vishnu S</Footer>
      </DashboardsContainer>
    );
  }
}

export default Dashboard;
