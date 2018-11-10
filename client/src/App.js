import React, { Component } from "react";
import Catgories from "./components/categories";
import Posts from "./components/posts";
import Challenge from "./components/challenge";
import Submit from "./components/submit";
import Navigation from "./components/navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Catgories />
        <Posts />
        <Challenge />
        <Submit />
      </div>
    );
  }
}

export default App;
