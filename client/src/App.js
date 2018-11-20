import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import R8it from "./components/r8it";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={R8it} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// import About from "./components/about";
//     <Route exact path="/about" component={About} />
