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
class About extends Component {
  render() {
    return (
         <Image
          source={require('../images/backgroundSnow.png')}
        >
        <View style={styles.container}>
              <Text style={styles.title}>
              About Us
              </Text>
              <View >
              <Text style={styles.text}>
              {'\n'}
              This game was created by Andrew Ziegler and Mike Romani
          </Text>
              </View>
              </View>
        </Image>
    );
  }
}

export default About;
