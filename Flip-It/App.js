import React, { Component } from 'react';
import { AppRegistry, Button, Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation'
import GameMenu from './scene/GameMenu'
import GameScreen from './scene/GameScreen'
import LevelSelector from './scene/LevelSelector'
import store from './components/store/store';
import { Provider } from 'react-redux';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text> Lets Play! </Text>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('GameMenu')}>
            <Image
              style={styles.button}
              source={require('./wei-chi-29466_1280.jpg')}
            />
          </TouchableHighlight>
        </View>
      </Provider>
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  GameMenu: {
    screen: GameMenu,
  },
  GameScreen: {
    screen: GameScreen,
  },
  LevelSelector: {
    screen: LevelSelector,
  },
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backdrop: {
    resizeMode: 'cover'
  },

});

export default ModalStack;
// AppRegistry.registerComponent('Flip-it', () => MyHomeScreen);
