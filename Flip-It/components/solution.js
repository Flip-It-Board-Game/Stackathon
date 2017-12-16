import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { newArray } from './store/store';

class Solution extends Component {
  constructor(props) {
    super(props);
    this.toggleColor = this.toggleColor.bind(this);
    this.num = null;
  }

  toggleColor(iNum) {
    this.num = iNum + 1;
    let tempArr = this.props.bool.slice(0);
    let width = this.props.dimensions && this.props.dimensions.width;
    let height = this.props.dimensions && this.props.dimensions.height;
    let totalSquares = width * height;
    tempArr.splice(iNum, 1, !this.props.bool[iNum]);
    if (iNum - 1 >= 0 && iNum % width !== 0) {
      let oneBeforeNum = iNum - 1;
      tempArr.splice(oneBeforeNum, 1, !this.props.bool[oneBeforeNum]);
    }
    if (iNum + 1 !== width && (iNum + 1) % width !== 0) {
      let oneAfterNum = iNum + 1;
      tempArr.splice(oneAfterNum, 1, !this.props.bool[oneAfterNum]);
    }
    if (iNum < totalSquares) {
      let widthLessNum = iNum - width;
      tempArr.splice(widthLessNum, 1, !this.props.bool[widthLessNum]);
    }
    if (iNum < totalSquares) {
      let widthPlusNum = iNum + width;
      tempArr.splice(widthPlusNum, 1, !this.props.bool[widthPlusNum]);
    }
    this.props.newArray(tempArr);
  }

  render() {
    return (
      <View>
        <Button
          transparent
          light
          onPress={() => {
            let time = 1200;
            let num = 0;
            const timeFunc = () => {
              num += 1;
              return time * num;
            };
            if (
              this.props.dimensions.width === 4 &&
              this.props.dimensions.height === 4
            ) {
              this.toggleColor(1);
              setTimeout(() => this.toggleColor(14), timeFunc());
              setTimeout(() => this.toggleColor(7), timeFunc());
              setTimeout(() => this.toggleColor(8), timeFunc());
            }
            if (
              this.props.dimensions.width === 5 &&
              this.props.dimensions.height === 5
            ) {
              this.toggleColor(0);
              setTimeout(() => this.toggleColor(1), timeFunc());
              setTimeout(() => this.toggleColor(5), timeFunc());
              setTimeout(() => this.toggleColor(6), timeFunc());
              setTimeout(() => this.toggleColor(8), timeFunc());
              setTimeout(() => this.toggleColor(9), timeFunc());
              setTimeout(() => this.toggleColor(12), timeFunc());
              setTimeout(() => this.toggleColor(13), timeFunc());
              setTimeout(() => this.toggleColor(14), timeFunc());
              setTimeout(() => this.toggleColor(16), timeFunc());
              setTimeout(() => this.toggleColor(17), timeFunc());
              setTimeout(() => this.toggleColor(18), timeFunc());
              setTimeout(() => this.toggleColor(21), timeFunc());
              setTimeout(() => this.toggleColor(22), timeFunc());
              setTimeout(() => this.toggleColor(24), timeFunc());
            }
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            See Solution
          </Text>
        </Button>
      </View>
    );
  }
}

const mapstate = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions
  };
};

const mapDispatch = dispatch => {
  return {
    newArray: array => dispatch(newArray(array))
  };
};

export default connect(mapstate, mapDispatch)(Solution);

// if props i === j = flip color
