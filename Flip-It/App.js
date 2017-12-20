import React, { Component } from 'react'
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'
import Expo from 'expo'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './components/store/store'
import Login from './scene/Login'
import Menu from './scene/Menu'
import GameScreen from './scene/GameScreen'
import LevelSelector from './scene/LevelSelector'
import How2Play from './scene/How2Play'
import GameSettings from './scene/GameSettings'
import About from './scene/About'
import GameStats from './scene/GameStats'
const Dimensions = require('Dimensions')
let { height, width } = Dimensions.get('window')
let tHeight = height
let tWidth = width
console.disableYellowBox = true


let styles = StyleSheet.create({
  container: {
    paddingLeft: 120,
    paddingRight: 120
  },
  button: {
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#6b92b9'
    // backgroundColor: 'rgba(135,135,135,0.7)'
  },
  background: {
    // position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flex: 1
    // resizeMode: 'cover',
    // backgroundImage: '50';
    // alignItems: 'center',
  },
  image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: tWidth,
      height: tHeight
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24
  },
  title:{
    backgroundColor: '#6b92b9',
    textAlign: 'center',
    position: 'relative',
    bottom:'16%',
    color: 'white',
    fontSize: 30
  }
})
class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.guest = this.guest.bind(this)
  }
  static navigationOptions = {
    title: 'Home'
  }

  login() {
    this.props.navigation.navigate('Login')
  }
  guest() {
    this.props.navigation.navigate('Menu')
  }

  render() {
    return (
      <Provider store={store}>
        {/* <ImageBackground
          style={styles.image}
          source={require('./images/snowman.jpg')}
        > */}
          <Image
            style={styles.image}
            source={require('./images/faster5sec.gif')}
          >
             {/* <View style={styles.container}>
              <View style={styles.button}> */}
              <Text style={styles.title}>
                Flip Tile
              </Text>
                {/*<TouchableOpacity onPress={this.login}>
                  <Text style={styles.text}>Login</Text>
                </TouchableOpacity> 
               </View> */}
              <View style={styles.button}>
                <TouchableOpacity onPress={this.guest}>
                  <Text style={styles.text}>Lets play now!</Text>
                </TouchableOpacity>
              </View>
            {/* </View> */}
          </Image>
        {/* </ImageBackground> */}
      </Provider>
    )
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: Login
  },
  Menu: {
    screen: Menu
  },
  GameScreen: {
    screen: GameScreen
  },
  LevelSelector: {
    screen: LevelSelector
  },
  How2Play: {
    screen: How2Play
  },
  GameStats: {
    screen: GameStats
  },
  GameSettings: {
    screen: GameSettings
  },
  About: {
    screen: About
  }
})


export default ModalStack
