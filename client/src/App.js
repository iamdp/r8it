import React, { Component } from "react";
import Catgories from "./components/categories";
import Posts from "./components/posts";
import Challenge from "./components/challenge";
import Submit from "./components/submit";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Catgories />
				<Posts />
				<Challenge />
				<Submit />
			</div>
		);
	}
}

export default App;
