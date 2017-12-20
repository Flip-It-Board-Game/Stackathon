import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 120
  },
  text: {
    backgroundColor: '#6b92b9',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontSize: 20,
  },
  title: {
    paddingTop: 10,
    backgroundColor: '#6b92b9',
    textAlign: 'center',
    color: 'black',
    fontSize: 26,
    justifyContent: 'center',
  }
});
class Instructions extends Component {
  render() {
    return (
         <Image
          source={require('../images/backgroundSnow.png')}
        >
        <View style={styles.container}>
              <Text style={styles.title}>
                How to Play Flip Title
              </Text>
              <View >
              <Text style={styles.text}>
              {'\n'}
              Object of the game is to make it so that each tile of the game board is red.
              The tiles of the board can either be red or black.
              Each time you click on a tile it will flip the tile to the opposite color. In addition
              to flipping the title to a new color it will also flip the neighboring tiles (excluding corners).
              {'\n'}{'\n'}
              The number of moves and how long you take is being tracked, so do your best! Global
              ranking is to come, so start practicing.
              {'\n'}
          </Text>
              </View>
              </View>
        </Image>
    );
  }
}

export default Instructions;
