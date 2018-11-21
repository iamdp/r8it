import _ from 'lodash';
import faker from 'faker';
import 'tachyons';
import 'styling/semantic.less';
// import Cards from './components/Cards.jsx';
import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Ref,
  Rail,
  Label,
  Search,
  Card,
  Transition,
  Divider
} from 'semantic-ui-react';
require('dotenv').config();
import PropTypes from 'prop-types';
import HamburgerAnimation from './components/r8it/HamburgerAnimation/HamburgerAnimation';
// import { StickyContainer, Sticky } from 'react-sticky';

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$')
}));

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <Menu.Item as="a">
      <Icon inverted color="blue" name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon inverted color="blue" name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon inverted color="blue" name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
  dimmed: PropTypes.bool
};

class AppUnMerged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 'overlay',
      direction: 'left',
      dimmed: false,
      visible: false,
      hamburgerOn: false,
      activeItem: 'home',
      isLoading: false,
      results: [],
      value: '',
      isFlipped1: false,
      isFlipped2: false,
      oldCardsShowing: true,
      oldCardsGone: false,
      newCardsShowing: false,
      newCardsGone: false
    };
    this.handleBurger = this.handleBurger.bind(this);
    this.hamburgerAnimation = this.hamburgerAnimation.bind(this);
    this.handleAnimationChange = this.handleAnimationChange.bind(this);
    this.handleDimmedChange = this.handleDimmedChange.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped1: !prevState.isFlipped1 }));
  }
  handleClick2(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped2: !prevState.isFlipped2 }));
  }

  handleSegmentRef = c => {
    this.segmentRef = c;
  };

  handleContentRef = c => {
    this.setState;
  };
  handleContextRef = contextRef => this.setState({ contextRef });

  handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible });

  handleDimmedChange() {
    if (this.state.dimmed === true) {
      this.setState({ dimmed: false }, () => {
        console.log(this.state.dimmed);
      });
    } else {
      this.setState({ dimmed: true }, () => {
        console.log(this.state.dimmed);
      });
    }
  }

  handleBurger() {
    if (this.state.hamburgerOn == false) {
      this.setState({ hamburgerOn: true }, () => {
        console.log(this.state.hamburgerOn);
      });
    } else {
      this.setState({ hamburgerOn: false }, () => {
        console.log(this.state.hamburgerOn);
      });
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  hamburgerAnimation() {
    this.handleBurger();
    // this.handleAnimationChange('overlay');
  }

  render() {
    const {
      animation,
      dimmed,
      direction,
      visible,
      activeItem,
      contextRef
    } = this.state;
    // const vertical = direction === 'bottom' || direction === 'top';

    return (
      <div>
        <Segment
          className="vh-10"
          inverted
          style={{ padding: '0px', margin: '0px' }}
        >
          <Menu
            inverted
            pointing
            secondary
            style={{ margin: '0px', padding: '0px' }}
          >
            <Menu.Item
              position="left"
              style={{ margin: '0px', border: '0px', bottom: '8px' }}
            >
              <a onClick={this.hamburgerAnimation}>
                <a onClick={this.handleAnimationChange('overlay')}>
                  <a onClick={this.handleDimmedChange}>
                    <HamburgerAnimation
                      hamburgerState={this.state.hamburgerOn}
                    />
                  </a>
                </a>
              </a>
            </Menu.Item>
            <Menu.Item position="left">
              <Search
                loading={this.state.isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                  leading: true
                })}
                results={this.state.results}
                value={this.state.value}
                {...this.props}
              />
            </Menu.Item>
            <Menu.Item
              position="left"
              name="Last 24 Hours"
              active={activeItem === 'Last 24 Hours'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Last Week"
              position="left"
              active={activeItem === 'Last Week'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Last Month"
              position="left"
              active={activeItem === 'Last Month'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Last Year"
              position="left"
              active={activeItem === 'Last Year'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
        <Sidebar.Pushable as={Segment} style={{ margin: '0px' }}>
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />

          <Sidebar.Pusher dimmed={dimmed}>
            <Ref innerRef={this.handleSegmentRef}>
              <Segment
                style={{ background: '#292929', color: 'white' }}
                className="vh-100 w-100 flex flex-column items-center justify-center"
              >
                <Grid columns={2}>
                  <Grid.Row>
                    {/*  */}
                    <Grid.Column>
                      <ReactCardFlip isFlipped={this.state.isFlipped1}>
                        <Card key="front">
                          <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                          <Card.Content>
                            <Card.Meta />
                            <Card.Description>
                              <Button onClick={this.handleClick1}>FLIP</Button>
                            </Card.Description>
                          </Card.Content>
                          <Card.Content extra />
                        </Card>
                        <Card key="back">
                          <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                          <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                              <span className="date">Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                              <Button onClick={this.handleClick1}>FLIP</Button>
                            </Card.Description>
                          </Card.Content>
                          <Card.Content extra>
                            <a>
                              <Icon name="user" />
                              22 Upvotes
                            </a>
                          </Card.Content>
                        </Card>
                      </ReactCardFlip>
                    </Grid.Column>
                    {/*  */}
                    <Grid.Column>
                      {/* <ReactCardFlip isFlipped={this.state.isFlipped2}> */}
                      <Card key="front">
                        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                        <Card.Content>
                          <Card.Meta />
                          <Card.Description>
                            <Button onClick={this.handleClick2}>FLIP</Button>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra />
                      </Card>
                      <Card key="back">
                        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                        <Card.Content>
                          <Card.Header>Matthew</Card.Header>
                          <Card.Meta>
                            <span className="date">Joined in 2015</span>
                          </Card.Meta>
                          <Card.Description>
                            <Button onClick={this.handleClick2}>FLIP</Button>
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            <Icon name="user" />
                            22 Upvotes
                          </a>
                        </Card.Content>
                      </Card>
                      {/* </ReactCardFlip> */}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Ref>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
