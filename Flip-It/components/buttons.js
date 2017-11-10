import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { newArray } from './store/store'

const width = 2
const height = 2
const totalSquares = width * height

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.toggleColor = this.toggleColor.bind(this)
  }

  toggleColor() {
    const iNum = this.props.iNum
    let tempArr = this.props.bool.slice(0)
    tempArr.splice(iNum, 1, !this.props.bool[iNum])
    if (iNum - 1 >= 0 && iNum % width !== 0) {
      let oneBeforeNum = iNum - 1
      tempArr.splice(oneBeforeNum, 1, !this.props.bool[oneBeforeNum])
    }
    if (iNum + 1 !== width && (iNum + 1) % width !== 0) {
      let oneAfterNum = iNum + 1
      tempArr.splice(oneAfterNum, 1, !this.props.bool[oneAfterNum])
    }
    if (iNum < totalSquares) {
      let widthLessNum = iNum - width
      tempArr.splice(widthLessNum, 1, !this.props.bool[widthLessNum])
    }
    if (iNum < totalSquares) {
      let widthPlusNum = iNum + width
      tempArr.splice(widthPlusNum, 1, !this.props.bool[widthPlusNum])
    }
    this.props.newArray(tempArr)
  }

  render() {
    const displayBool = !!this.props.bool[this.props.iNum]
    let color = displayBool ? '#A8E1FD' : '#CCEEFE'

    return (
      <View>
        <Button transparent light onPress={this.toggleColor}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: color,
              borderWidth: 1,
              borderColor: 'white'
            }}
          />
        </Button>
      </View>
    )
  }
}

const mapstate = state => {
  return {
    bool: state.bool
  }
}

const mapDispatch = dispatch => {
  return {
    newArray: array => dispatch(newArray(array))
  }
}

export default connect(mapstate, mapDispatch)(Buttons)

// if props i === j = flip color
