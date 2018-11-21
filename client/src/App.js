import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//
import _ from 'lodash';
import faker from 'faker';
import 'tachyons';
import 'styling/semantic.less';
import ReactCardFlip from 'react-card-flip';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Ref,
  Rail,
  Label,
  Search,
  Card,
  Transition,
  Divider
} from 'semantic-ui-react';
require('dotenv').config();
import PropTypes from 'prop-types';
//
import About from "./components/about";
import R8it from "./components/r8it";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/" component={R8it} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
