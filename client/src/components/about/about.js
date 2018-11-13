import React from "react";
import styled from "styled-components";

import Navigation from "./about/navigation";

const FullScreenLanding = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;

  background-color: blue;

  div {
    background-color: white;
    width: 100%;
    height: 100%;
    opacity: 0.8;

    img {
      min-height: 100%;
      max-width: 100%;
    }
  }
`;

const EvenSection = styled.div`
  background-color: purple;
  height: 400px;
  width: 100%;
`;

const OddSection = styled.div`
  background-color: white;
  height: 400px;
  width: 100%;
`;

const About = () => {
  return (
    <div>
      <Navigation />
      <FullScreenLanding>
        <a name="home" />
        <div>
          <img src="./media/rps.jpg" />
        </div>
      </FullScreenLanding>
      <div />
      <EvenSection>
        <a name="section-1">Stuff</a>
      </EvenSection>
      <OddSection>
        <a name="section-2">More Stuff</a>
      </OddSection>
      <EvenSection name="section-3">
        <a name="section-3">Event More Stuff</a>
      </EvenSection>
    </div>
  );
};

export default About;
