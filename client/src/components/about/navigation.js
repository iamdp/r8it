import React from "react";
import styled from "styled-components";

const Logo = styled.img`
  position: absolute;
  top: -56px;
  left: 20px;
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color: purple;
  z-index: 1;

  ul {
    list-style-type: none;
    float: right;

    li {
      display: inline-block;
      height: 80px;
      width: 120px;
      text-align: center;
    }

    li:hover {
      background-color: pink;
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo src="./media/logo-inline.png" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#section-1">Rate</a>
        </li>
        <li>
          <a href="#section-2">Compete</a>
        </li>
        <li>
          <a href="#section-3">Suggest</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
