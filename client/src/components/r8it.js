import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;
class r8it extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          <Logo className="img-fluid" src="./media/logo-r8it.png" />
          R8IT.LIVE - FOR THE SOCIALLY COMPETITIVE
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/rate">
                Rate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/review">
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/compete">
                Compete
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default r8it;
