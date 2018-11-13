import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./components/about";

import R8it from "./components/r8it";
import Posts from "./components/r8it/review";
import Rate from "./components/r8it/rate";
import Submit from "./components/r8it/submit";
import ChallengeGenerator from "./components/about/challengeGenerator";
import Categories from "./components/r8it/categories";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/" component={R8it} />
          </Switch>
          <Route exact path="/review" component={Posts} />
          <Route exact path="/rate" component={Rate} />
          <Route exact path="/compete" component={Submit} />
          <Route exact path="/create" />
          <Route exact path="/category" component={Categories} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
