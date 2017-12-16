import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';



let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
});

export default class GameStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Bob'
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Text>Profile</Text>
        </Header>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
              <Text>{this.state.userName}</Text>
              <Image
                style={{ width: 50, height: 50 }}
                source={require('../images/user.jpg')}
              />
            </Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }} />
          </Grid>

          <Button rounded light>
            <Text>Time Played</Text>
          </Button>
          <Button rounded>
            <Text>Number of Hints Used</Text>
          </Button>
          <Button rounded success>
            <Text>Skins</Text>
          </Button>
          <Button rounded info>
            <Text>Average Time of Completion</Text>
          </Button>
          <Button rounded warning>
            <Text>Warning</Text>
          </Button>
          <Button rounded danger>
            <Text>Danger</Text>
          </Button>
          <Button rounded dark>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}