import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
// import styled from 'styled-components';
import './HamburgerAnimation.css';

export default class HamburgerAnimation extends Component {
  constructor(props) {
    super(props);
    this.handleBurger = this.handleBurger.bind(this);
  }
  handleBurger = () => {
    console.log(this.props.hamburgerState);
  };
  render() {
    return (
      <div
        className={this.props.hamburgerState ? 'open' : ''}
        id="navIcon3"
        onClick={this.handleBurger}
        style={{ padding: '0px', border: '0px', margin: '0px' }}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }
}
