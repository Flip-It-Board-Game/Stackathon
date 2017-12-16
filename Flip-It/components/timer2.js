import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { setTime, completionTime } from './store/store';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.nowTime
    };
    this.tick = this.tick.bind(this);
    this.gameTime = 0;
  }

  componentWillMount() {
    setInterval(() => this.props.completionTime(this.gameTime), 1000);
    this.props.setTime(Date.now());
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ seconds: Date.now() - this.props.nowTime });
  }

  render() {
    let elapsed = Math.round(this.state.seconds / 100);
    let seconds = (elapsed / 10).toFixed(1);
    dispSeconds =
      Math.floor(seconds % 60) < 10
        ? '0'.concat(Math.floor(seconds) % 60)
        : Math.floor(seconds) % 60;
    dispMinutes =
      Math.floor(seconds / 60).length > 1
        ? Math.floor(seconds / 60)
        : '0'.concat(Math.floor(seconds / 60));
    this.gameTime = dispMinutes + ':' + dispSeconds;
    return (
      <View>
        <Text
          style={{
            fontSize: 40,
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'white',
            borderWidth: 3,
            paddingLeft: 10,
            paddingRight: 10,
            borderColor: 'white'
          }}
        >
          {this.gameTime}
        </Text>
      </View>
    );
  }
}

const mapState = state => {
  return {
    nowTime: state.nowTime,
    completedTime: state.completedTime
  };
};

const mapDispatch = dispatch => {
  return {
    setTime: time => dispatch(setTime(time)),
    completionTime: gameTime => dispatch(completionTime(gameTime))
  };
};

export default connect(mapState, mapDispatch)(Timer);
