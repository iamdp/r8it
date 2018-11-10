import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
        <img
          src="../media/logo-r8it.png"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        <span className="logo-text">r8it.live</span>
      </div>
    </nav>
  );
};

export default Navigation;
