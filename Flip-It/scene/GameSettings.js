import React, { Component } from 'react';
import { View, AsyncStorage, Image, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
const Dimensions = require('Dimensions');
let { height, width } = Dimensions.get('window');
let tHeight = height;
let tWidth = width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  mainImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: tWidth,
    height: tHeight
  },
  text: {
    fontSize: 17,
    fontWeight: '900',
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    paddingLeft: 25,
    paddingRight: 23,
    paddingTop: 3,
    borderColor: 'black',
    width: 170,
    textAlign: 'center'
  }
});

class GameMenu extends Component {
  constructor(props) {
    super(props);
    this.resetGameStats = this.resetGameStats.bind(this);
  }

  resetGameStats() {
    for (let i = 2; i < 8; i++) {
      AsyncStorage.setItem(`${i}${i}`, 'N/A');
      AsyncStorage.setItem(`${i}${i + 1}`, 'N/A');
      AsyncStorage.setItem(`${i}${i}Time`, 'N/A');
      AsyncStorage.setItem(`${i}${i + 1}Time`, 'N/A');
    }
  }

  render() {
    return (
      <View>
        <Image
          style={styles.mainImage}
          source={require('../images/faster5sec.gif')}
        >
          <View>
            <Button transparent light onPress={this.resetGameStats}>
              <Text style={styles.text}>Reset Game Stats</Text>
            </Button>
          </View>
        </Image>
      </View>
    );
  }
}

export default GameMenu;
