import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { StyleSheet, View, Text, TabNavigator } from 'react-native';
import Grid from '../components/grid';
import store from '../components/store/store';
import { Container, Content } from 'native-base';
import Canvas from 'react-native-canvas';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b92b9'
  },
  background: {
    opacity: 0.3,
    // width: '100%',
    // height: '100%',
    zIndex: 1,
    justifyContent: 'center',
    flex: 1
  },
  text: {
    color: 'black',
    opacity: 1,
    zIndex: 1
  },
  renderA: {},
  renderB: {}
});

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.handleCanvas = this.handleCanvas.bind(this);
  }

  handleCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 400, 400);
  }

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Content>
            {/* <View>
            {this.renderA()}
            {this.renderB()}
        </View> */}
            {/* <View style={styles.background} w>
              <Canvas ref={this.handleCanvas} > */}
            <View>
              <Grid style={styles.text} />
            </View>
            {/* </Canvas>
            </View> */}
          </Content>
        </Container>
      </Provider>
    );
  }
}
