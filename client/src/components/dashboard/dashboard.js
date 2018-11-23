import React, { Component } from "react";
import DashboardCategory from "./dashboard-category";
import styled from "styled-components";

const DashboardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
`;

export class Dashboard extends Component {
  render() {
    return (
      <DashboardsContainer>
        <DashboardCategory />
        <DashboardCategory />
        <DashboardCategory />
        <DashboardCategory />
      </DashboardsContainer>
    );
  }
}

export default Dashboard;
