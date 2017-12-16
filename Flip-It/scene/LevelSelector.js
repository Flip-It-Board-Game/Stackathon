import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'native-base';
import store, { setBoard, setDimensions } from '../components/store/store';
const Dimensions = require('Dimensions');
let { height, width } = Dimensions.get('window');
let tHeight = height;
let tWidth = width;

class Menu extends Component {
  render() {
    let styles = StyleSheet.create({
      container: {
        justifyContent: 'center'
      }
    });
    let buttonArr = [];
    for (let i = 2; i < 8; i++) {
      buttonArr.push(
        <View>
          <Button
            transparent
            light
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            onPress={() => {
              store.dispatch(setBoard({ width: i, height: i }));
              store.dispatch(setDimensions({ width: i, height: i }));
              this.props.navigation.navigate('GameScreen');
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: '900',
                color: 'black',
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                paddingLeft: 65,
                paddingRight: 63,
                paddingTop: 3,
                borderColor: 'black',
                textAlign: 'center'
              }}
            >
              {i}X{i}
            </Text>
          </Button>
          {i !== 7 ? (
            <Button
              transparent
              light
              onPress={() => {
                store.dispatch(setBoard({ width: i, height: i + 1 }));
                store.dispatch(setDimensions({ width: i, height: i + 1 }));
                this.props.navigation.navigate('GameScreen');
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  color: 'black',
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderWidth: 1,
                  paddingLeft: 65,
                  paddingRight: 63,
                  paddingTop: 3,
                  borderColor: 'black',
                  textAlign: 'center'
                }}
              >
                {i}X{i + 1}
              </Text>
            </Button>
          ) : (
            <View />
          )}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: tWidth,
            height: tHeight
          }}
          source={require('../images/snowman.jpg')}
        >
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: tWidth,
              height: tHeight
            }}
            source={require('../images/snowbackground.gif')}
          >
            {buttonArr.map(button => button)}
            <Text>{'\n'}</Text>
          </Image>
        </Image>
      </View>
    );
  }
}

export default Menu;
