import React, { Component } from 'react';
import TrafficLight from 'react-trafficlight';
 
class TrafficLightBtn extends Component {
  state = {
    redOn: true,
    yellowOn: false,
    greenOn: false,
  }
 
  render() {
    return (
      <TrafficLight
        onRedClick={() => this.setState({ redOn: !this.state.redOn})}
        onYellowClick={() => this.setState({ yellowOn: !this.state.yellowOn })}
        onGreenClick={() => this.setState({ greenOn: !this.state.greenOn })}
        RedOn={this.state.redOn}
        YellowOn={this.state.yellowOn}
        GreenOn={this.state.greenOn}
      />
    );
  }
}
 
export default TrafficLightBtn;