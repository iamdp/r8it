import React, { Component } from 'react';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {
  Jumbotron,
  Grid,
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  CardGroup,
  Navbar
} from 'react-bootstrap';
import ReactPlayer from 'react-player';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
// library.add(faStroopwafel);
//
// import FlipCard from 'react-flipcard';

class Dashboard extends Component {
  getInitialState() {
    return {
      isFlipped: false
    };
  }
  showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }
  render() {
    return (
      <React.Fragment>
        {/* <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Something</a>
            </Navbar.Brand>
          </Navbar.Header> 
        </Navbar> */}

        <SideNav
          // onSelect={selected => {
          //   // Add your code here
          // }}
          style={{ background: '#1e1e1e' }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>

            <NavItem eventKey="Top Challenges">
              <NavIcon>
                <div>
                  <i
                    className="fa fa-fw fa-line-chart"
                    style={{ fontSize: '1.75em' }}
                  />{' '}
                </div>
              </NavIcon>
              <NavText>Top Challenges</NavText>
              <NavItem eventKey="Top Challenges/Today">
                <NavText>Today</NavText>
              </NavItem>
              <NavItem eventKey="Top Challenges/This Week">
                <NavText>This Week</NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="Settings">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Settings</NavText>
              <NavItem eventKey="Settings/option1">
                <NavText>Option 1</NavText>
              </NavItem>
              <NavItem eventKey="Settings/option2">
                <NavText>Option 2</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>

        <Container style={{ top: '50%', float: 'none' }}>
          <Row className="justify-content-md-center">
            <CardGroup>
              <Col lg="6">
                <CardGroup className="clearfix">
                  <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    ref={r => (this.flippy = r)}
                  >
                    <FrontSide>
                      <Card className="bg-dark scroll ">
                        <Card.Body style={{ top: '50%' }}>
                          <Card.Title style={{ color: 'white' }}>
                            Card title
                          </Card.Title>
                          <div className="player-wrapper">
                            <ReactPlayer
                              className="react-player embed-responsive embed-responsive-4by3"
                              url="https://www.youtube.com/watch?v=lUHTTWaagC8"
                              width="100%"
                              height="100%"
                            />
                          </div>
                        </Card.Body>
                        <Card.Footer style={{ padding: '0px' }}>
                          <Button
                            className="btn btn-light"
                            style={{ width: '100%', height: '50px' }}
                          >
                            CLICK HERE
                          </Button>
                        </Card.Footer>
                      </Card>
                    </FrontSide>
                    <BackSide>
                      {' '}
                      <Card className="bg-dark scroll">
                        <Card.Body>
                          <Card.Title style={{ color: 'white' }}>
                            Card title
                          </Card.Title>
                          <Card.Text style={{ color: 'white' }}>
                            Stuff Stuff Stuff StuffStuff StuffStuff StuffStuff
                            StuffStuff StuffStuff StuffStuff StuffStuff
                            StuffStuff StuffStuftuff StuffStuff StuffStuff
                            StuffStuff StuffStuff Stuff
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ padding: '0px' }}>
                          <Button
                            className="btn btn-light"
                            style={{ width: '100%', height: '50px' }}
                          >
                            CLICK HERE
                          </Button>
                        </Card.Footer>
                      </Card>
                    </BackSide>
                  </Flippy>
                </CardGroup>
              </Col>
              <Col lg="6">
                <CardGroup className="clearfix">
                  <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    ref={r => (this.flippy = r)}
                  >
                    <FrontSide>
                      <Card className="bg-dark scroll">
                        <Card.Body style={{ top: '50%' }}>
                          <Card.Title style={{ color: 'white' }}>
                            Card title
                          </Card.Title>
                          <div className="player-wrapper">
                            <ReactPlayer
                              className="react-player embed-responsive embed-responsive-4by3"
                              url="https://www.youtube.com/watch?v=lUHTTWaagC8"
                              width="100%"
                              height="100%"
                            />
                          </div>
                        </Card.Body>
                        <Card.Footer style={{ padding: '0px' }}>
                          <Button
                            className="btn btn-light"
                            style={{ width: '100%', height: '50px' }}
                          >
                            CLICK HERE
                          </Button>
                        </Card.Footer>
                      </Card>
                    </FrontSide>
                    <BackSide>
                      {' '}
                      <Card className="bg-dark scroll">
                        <Card.Body>
                          <Card.Title style={{ color: 'white' }}>
                            Card title
                          </Card.Title>
                          <Card.Text style={{ color: 'white' }}>
                            Stuff Stuff Stuff StuffStuff StuffStuff StuffStuff
                            StuffStuff StuffStuff StuffStuff StuffStuff
                            StuffStuff StuffStuftuff StuffStuff StuffStuff
                            StuffStuff StuffStuff Stuff
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ padding: '0px' }}>
                          <Button
                            className="btn btn-light"
                            style={{ width: '100%', height: '50px' }}
                          >
                            CLICK HERE
                          </Button>
                        </Card.Footer>
                      </Card>
                    </BackSide>
                  </Flippy>
                </CardGroup>
              </Col>
            </CardGroup>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
