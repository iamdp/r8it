import React, { Component } from "react";
import Posts from "./components/Posts";
import Challenge from "./components/Challenge";
import Submit from "./components/Submit";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts />
        <Challenge />
        <Submit />
      </div>
    );
  }
}

export default App;
