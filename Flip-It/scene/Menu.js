import React, { Component } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import GameScreen from './GameScreen'
import LevelSelector from './LevelSelector'
// import Levels from './Levels'

class GameMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('GameScreen')}
          title="Start"
        />
        <Button
          onPress={() => this.props.navigation.navigate('LevelSelector')}
          title="Level Select"
        />


        <Button
          onPress={() => this.props.navigation.navigate('GameStats')}
          title="GameStats"
        />

        <Button
          onPress={() => this.props.navigation.navigate('GameSettings')}
          title="Settings"
        />

        <Button
          onPress={() => this.props.navigation.navigate('About')}
          title="About"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Test')}
          title="AsyncStorage Test"
        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
})

export default GameMenu