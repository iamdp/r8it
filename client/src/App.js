import React, { Component } from "react";
import Posts from "./components/Posts";
import Challenge from "./components/Challenge";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts />
        <Challenge />
      </div>
    );
  }
}

export default App;
