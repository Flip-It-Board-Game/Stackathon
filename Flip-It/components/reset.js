import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { reset, setBoard, setCount, setTime } from './store/store';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.saveData = this.saveData.bind(this);
  }

  saveData() {
    let moves = this.props && this.props.count.count;
  }

  render() {
    return (
      <View>
        <Button
          transparent
          light
          onPress={() => {
            this.props.setTime(Date.now());
            this.props.setBoard({
              width: this.props.dimensions.width,
              height: this.props.dimensions.height
            });
            this.props.setCount({ count: 0 });
            this.saveData();
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0)'
            }}
            key="moveCount"
          >
            Reset Board
          </Text>
        </Button>
      </View>
    );
  }
}

const mapState = state => {
  return {
    dimensions: state.dimensions,
    count: state.count
  };
};

const mapDispatch = dispatch => {
  return {
    reset: () => dispatch(reset()),
    setBoard: board => dispatch(setBoard(board)),
    setCount: num => dispatch(setCount(num)),
    setTime: time => dispatch(setTime(time))
  };
};

export default connect(mapState, mapDispatch)(Reset);
