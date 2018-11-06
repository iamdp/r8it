import React, { Component } from "react";
import Posts from "./components/posts";
import Challenge from "./components/challenge";
import Submit from "./components/submit";

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
