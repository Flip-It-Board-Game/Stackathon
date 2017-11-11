import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import { newArray } from './store/store'

const width = 5
const height = 5
const totalSquares = width * height

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.toggleColor = this.toggleColor.bind(this)
  }

  toggleColor() {
    //nested for loops, cross color change, light blue or blue
    // four by four cells
    //when clicked
    const iNum = this.props.iNum
    let tempArr = this.props.bool.slice()
    tempArr.splice(iNum, 1, !this.props.bool[iNum])
    console.log('iNum', iNum)

    if (iNum - 1 >= 0 && iNum % width !== 0) {
      let oneBeforeNum = iNum - 1
      tempArr.splice(oneBeforeNum, 1, !this.props.bool[oneBeforeNum])
      console.log('iNum - 1 >= 0 && iNum % width !== 0', iNum)
    }
    if (iNum + 1 !== width && (iNum + 1) % width !== 0) {
      let oneAfterNum = iNum + 1
      tempArr.splice(oneAfterNum, 1, !this.props.bool[oneAfterNum])
      console.log('iNum + 1 !== width && (iNum + 1) % width !== 0', iNum)
    }
    if (iNum < totalSquares) {
      if (iNum - width >= 0) {
        let widthLessNum = iNum - width
        tempArr.splice(widthLessNum, 1, !this.props.bool[widthLessNum])
        console.log('iNum < totalSquares', iNum)
      }
    }
    if (iNum < totalSquares) {
      let widthPlusNum = iNum + width
      tempArr.splice(widthPlusNum, 1, !this.props.bool[widthPlusNum])
      console.log('iNum < totalSquares', iNum)
    }
    console.log('______________________________')
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
