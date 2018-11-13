import React from "react";

import Catgories from "./categories";
import Posts from "./posts";
import Challenge from "./challenge";
import Submit from "./submit";
import ChallengeGenerator from "./challengeGenerator";

class r8it extends React.Component {
  render() {
    return (
      <div className="container">
        <ChallengeGenerator />
        <Catgories />
        <Posts />
        <Challenge />
        <Submit />
      </div>
    );
  }
}

export default r8it;
