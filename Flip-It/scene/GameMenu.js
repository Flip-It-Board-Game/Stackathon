import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

class GameMenu extends Component {


  render() {
    return (
          <View style={styles.container} >
            <Button
            onPress={() => this.props.navigation.navigate('GameScreen')}
            title="Start"
            />
            <Button
            onPress={() => this.props.navigation.navigate('LevelSelector')}
            title="Level Select"
              color="#841584"
            />

            <Button
              title="My Awesome Stats"
              color="#841584"
            />
            <Button
            onPress={() => this.props.navigation.navigate('GameSettings')}
            title="Settings"
            />

            <Button 
            onPress={() => this.props.navigation.navigate('About')}
              title="About"
              color="#841584"
            />
          </View>
    );
  }
}

let styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C0C0C0',
      justifyContent: 'center',
     }

  });

export default GameMenu;
