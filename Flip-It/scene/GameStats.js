import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Table,
  Rows
} from 'native-base'
import { View, StyleSheet, Image, AsyncStorage } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
const Dimensions = require('Dimensions')
let { height, width } = Dimensions.get('window')
let tHeight = height
let tWidth = width

export default class GameStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Bob',
      displayStats: false
    }
    this.limitPush = 0
    this.statArray = [
      <Row
        key={'array'}
        style={{
          marginTop: 80,
          backgroundColor: '#95dbf4',
          borderWidth: 2,
          height: 50,
          marginLeft: 35,
          marginRight: 35
        }}
      >
        <Col style={{ borderWidth: 1 }}>
          <Text
            style={{
              marginTop: 5,
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 28,
              color: 'white'
            }}
          >
            G a m e - S t a t s
          </Text>
        </Col>
      </Row>,
      <Row
        key={'array'}
        style={{
          marginTop: 8,
          backgroundColor: 'white',
          borderWidth: 2,
          height: 30,
          marginLeft: 35,
          marginRight: 35
        }}
      >
        <Col style={{ borderWidth: 1 }}>
          <Text style={{ textAlign: 'center' }}>Board</Text>
        </Col>
        <Col style={{ borderWidth: 1 }}>
          <Text style={{ textAlign: 'center' }}># Moves</Text>
        </Col>
        <Col style={{ borderWidth: 1 }}>
          <Text style={{ textAlign: 'center' }}>Time</Text>
        </Col>
      </Row>
    ]
  }

  componentWillMount = async () => {
    try {
      for (let i = 2; i < 8; i++) {
        let moveStat = await AsyncStorage.getItem(`${i}${i}`)
        let move_2Stat = await AsyncStorage.getItem(`${i}${i + 1}`)
        let timeStat = await AsyncStorage.getItem(`${i}${i}Time`)
        let time_2Stat = await AsyncStorage.getItem(`${i}${i + 1}Time`)
        if (this.limitPush < 1) {
          this.statArray.push(
            <View key={i}>
              <Row
                style={{
                  marginTop: 8,
                  backgroundColor: '#6bbedb',
                  borderWidth: 2,
                  height: 30,
                  marginLeft: 35,
                  marginRight: 35
                }}
              >
                <Col style={{ borderWidth: 1 }}>
                  <Text style={{ textAlign: 'center' }}>
                    {i}X{i}
                  </Text>
                </Col>
                <Col style={{ borderWidth: 1 }}>
                  <Text style={{ textAlign: 'center' }}>
                    {moveStat || 'N/A'}
                  </Text>
                </Col>
                <Col style={{ borderWidth: 1 }}>
                  <Text style={{ textAlign: 'center' }}>
                    {timeStat || 'N/A'}
                  </Text>
                </Col>
              </Row>
              {i !== 7 ? (
                <Row
                  style={{
                    marginTop: 8,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    height: 30,
                    marginLeft: 35,
                    marginRight: 35
                  }}
                >
                  <Col style={{ borderWidth: 1 }}>
                    <Text style={{ textAlign: 'center' }}>
                      {i}X{i + 1}
                    </Text>
                  </Col>
                  <Col style={{ borderWidth: 1 }}>
                    <Text style={{ textAlign: 'center' }}>
                      {move_2Stat || 'N/A'}
                    </Text>
                  </Col>
                  <Col style={{ borderWidth: 1 }}>
                    <Text style={{ textAlign: 'center' }}>
                      {time_2Stat || 'N/A'}
                    </Text>
                  </Col>
                </Row>
              ) : (
                <View />
              )}
            </View>
          )
        }
      }
      this.limitPush++
      this.setState({ displayStats: !this.state.displayStats })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Image
          style={{
            width: tWidth,
            height: tHeight
          }}
          source={require('../images/snowbackground.gif')}
        >
          <Image
            style={{
              width: tWidth,
              height: tHeight
            }}
            source={require('../images/snowbackground.gif')}
          >
            {/* <Header>
              <Text>Profile</Text>
            </Header> */}
            <Content>
              {/* <Grid>
                <Col style={{ backgroundColor: '#635DB7', height: 100 }}>
                  <Text>{this.state.userName}</Text>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../images/user.jpg')}
                  />
                </Col>
                <Col style={{ backgroundColor: '#00CE9F', height: 100 }} />
              </Grid> */}

              {this.state.displayStats ? (
                <Grid>{this.statArray.map(ele => ele)}</Grid>
              ) : (
                <View />
              )}
            </Content>
          </Image>
        </Image>
      </Container>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
