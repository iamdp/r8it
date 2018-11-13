import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./components/about";
import R8it from "./components/r8it";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={R8it} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
