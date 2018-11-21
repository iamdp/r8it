import React, { Component } from "react";
import DashboardCategory from "./dashboard-category";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardCategory />
        <DashboardCategory />
        <DashboardCategory />
      </div>
    );
  }
}

export default Dashboard;
