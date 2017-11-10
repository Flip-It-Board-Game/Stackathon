import { StyleSheet, TabNavigator, View, Text  } from 'react-native';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Grid from '../components/grid';
import store from '../components/store/store';
import { Icon } from 'react-native-elements'

class GameScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Counter Placeholder</Text>
        <Grid />
        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />
        </View>
      </Provider>
    );
  }
}

export default GameScreen

// const mapstate = state => {
//   return {
//     numMoves: state.numMoves
//   };
// };
// export default connect(mapstate)(GameScreen);

