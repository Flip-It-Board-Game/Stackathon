import React, { Component } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { newArray, setCount, setWinner } from './store/store';
import SocketIOClient from 'socket.io-client';
import Canvas from 'react-native-canvas';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.toggleColor = this.toggleColor.bind(this);
    this.socket = SocketIOClient('http://localhost:3005');
  }

  handleCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 100, 100);
  }

  toggleColor() {
    // <Sound source={uri: '../sounds/buttonclick.wav'} />

    let countNum = this.props && this.props.count.count;
    //sets count in store
    this.props.setCount({ count: countNum + 1 });

    //sets width and height to values set in store, sets totalSquares to these numbers multiplied
    this.width = this.props.dimensions && this.props.dimensions.width;
    this.height = this.props.dimensions && this.props.dimensions.height;
    let totalSquares = this.width * this.height;

    //sets iNum to index number of button (passed in from grid)
    const iNum = this.props.iNum;

    //creates temp array to edit
    let tempArr = this.props.bool.slice();
    tempArr.splice(iNum, 1, !this.props.bool[iNum]);

    //if statements that make changes to state, changing color on grid
    if (iNum - 1 >= 0 && iNum % this.width !== 0) {
      let oneBeforeNum = iNum - 1;
      tempArr.splice(oneBeforeNum, 1, !this.props.bool[oneBeforeNum]);
      // console.log('iNum - 1 >= 0 && iNum % width !== 0', iNum)
    }
    if (iNum + 1 !== this.width && (iNum + 1) % this.width !== 0) {
      let oneAfterNum = iNum + 1;
      tempArr.splice(oneAfterNum, 1, !this.props.bool[oneAfterNum]);
      // console.log('iNum + 1 !== width && (iNum + 1) % width !== 0', iNum)
    }
    if (iNum < totalSquares) {
      if (iNum - this.width >= 0) {
        let widthLessNum = iNum - this.width;
        tempArr.splice(widthLessNum, 1, !this.props.bool[widthLessNum]);
        // console.log('iNum < totalSquares', iNum)
      }
    }
    if (iNum < totalSquares) {
      let widthPlusNum = iNum + this.width;
      if (widthPlusNum < totalSquares) {
        tempArr.splice(widthPlusNum, 1, !this.props.bool[widthPlusNum]);
        // console.log('iNum < totalSquares', iNum)
      }
    }
    this.props.newArray(tempArr);
    this.socket.emit('sendState', tempArr);
  }

  render() {
    const displayBool = !!this.props.bool[this.props.iNum];
    const dispArr = this.props.newArray;
    this.socket.on('newState', receiveState => {
      console.log('SOCKET BOTTOM', receiveState);
      dispArr(receiveState);
    });

    return (
      <View>
        {/* <Canvas ref={this.handleCanvas}/> */}
        <TouchableHighlight onPress={this.toggleColor}>
          {displayBool ? (
            <Image
              style={{
                width: this.props.size,
                height: this.props.size
              }}
              source={require('../images/santahat2.png')}
            />
          ) : (
            <Image
              style={{
                width: this.props.size,
                height: this.props.size
              }}
              source={require('../images/present.png')}
            />
          )}
        </TouchableHighlight>
      </View>
    );
  }
}

const mapstate = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count
  };
};

const mapDispatch = dispatch => {
  return {
    newArray: array => dispatch(newArray(array)),
    setCount: num => dispatch(setCount(num)),
    setWinner: won => dispatch(setWinner(won))
  };
};

export default connect(mapstate, mapDispatch)(Buttons);
