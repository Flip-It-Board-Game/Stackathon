import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Animated,
  AsyncStorage,
  Easing,
  Image
} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import Buttons from './buttons'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import Reset from './reset'
import Solution from './solution'
const Dimensions = require('Dimensions')
let { height, width } = Dimensions.get('window')
let tHeight = height
let tWidth = width

class youWon extends Component {
  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
    this.seeStats = this.seeStats.bind(this)
  }

  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.spin())
  }

  seeStats = async () => {
    try {
      //Sets incoming move count to moves variable
      let moves = this.props.count.count
      //Sets incoming board dimensions to dimensions variable
      let dimensions = this.props.dimensions
      //Sets incoming time to gameTime variable
      let gameTime = this.props && this.props.completedTime
      for (let i = 2; i < 8; i++) {
        //Get current state for Moves
        let currentStatMoves = await AsyncStorage.getItem(`${i}${i}`)
        let currentStat_2Moves = await AsyncStorage.getItem(`${i}${i + 1}`)
        let currentStatTime = await AsyncStorage.getItem(`${i}${i}Time`)
        let currentStat_2Time = await AsyncStorage.getItem(`${i}${i + 1}Time`)
        //compare current vs incoming moves stat, save incoming if better performance than current
        if (
          dimensions.height === i &&
          dimensions.width === i &&
          (currentStatMoves > moves ||
            currentStatMoves === null ||
            currentStatMoves === 'N/A')
        ) {
          AsyncStorage.setItem(`${i}${i}`, moves.toString())
        }
        //compare current vs incoming moves stat, save incoming if better performance than current
        if (
          dimensions.height === i + 1 &&
          dimensions.width === i &&
          (currentStat_2Moves > moves ||
            currentStat_2Moves === null ||
            currentStatMoves === 'N/A')
        ) {
          AsyncStorage.setItem(`${i}${i + 1}`, moves.toString())
        }
        //compare current vs incoming time stat, save incoming if better performance than current
        if (
          dimensions.height === i &&
          dimensions.width === i &&
          (currentStatTime > gameTime ||
            currentStatTime === null ||
            currentStatMoves === 'N/A')
        ) {
          AsyncStorage.setItem(`${i}${i}Time`, gameTime.toString())
        }
        //compare current vs incoming time stat, save incoming if better performance than current
        if (
          dimensions.height === i + 1 &&
          dimensions.width === i &&
          (currentStat_2Time > gameTime ||
            currentStat_2Time === null ||
            currentStatMoves === 'N/A')
        ) {
          AsyncStorage.setItem(`${i}${i + 1}Time`, gameTime.toString())
        }
      }
    } catch (error) {}
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    })
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: tWidth,
            height: tHeight
          }}
          source={require('../images/youwon.gif')}
        >
          <Text
            style={{
              fontSize: 45,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 4,
              backgroundColor: 'rgba(0,0,0,0)',
              color: 'green'
            }}
          >
            You Won!
          </Text>
          <Animated.Image
            style={{
              width: 227,
              height: 200,
              margin: 100,
              transform: [{ rotate: spin }]
            }}
            source={require('../images/present.png')}
            onPress={this.seeStats()}
          />
        </Image>
      </View>
    )
  }
}

const mapstate = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count,
    won: state.won,
    completedTime: state.completedTime
  }
}

export default connect(mapstate)(youWon)
