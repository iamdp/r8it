import React, { Component } from "react";
import DashboardCategory from "./dashboard-category";
import styled from "styled-components";

const DashboardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3840px;
`;

const Header = styled.div`
  height: 1400px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-color: white;
  height: 100%;
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  opacity: 0.5;
  z-index: -1;
`;

const HeaderTitle = styled.h1`
  font-size: 8em;
`;

const HeaderSubText = styled.p`
  font-size: 6em;
`;

const Footer = styled.div`
  background-color: black;
  color: white;
  font-size: 4em;
  text-align: center;
`;

export class Dashboard extends Component {
  render() {
    return (
      <DashboardsContainer>
        <Header>
          <HeaderContent>
            <HeaderTitle>R8it.live @ a glance...</HeaderTitle>
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
