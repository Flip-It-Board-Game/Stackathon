import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

class Instructions extends Component {
    render() {
        return (
          <Container>
            <Header />
            <Content>
              <Card>
                <CardItem header>
                  <Text>How to Play</Text>
                </CardItem>
                <CardItem>
                  <Body>
                  <Text>
                    This is a version of Lights out the game.

                    Object of the game is to make it so that each tile of the game board is red.
                    The tiles of the board can either be red or black.
                    Each time you click on a tile it will flip the tile to the opposite color. In addition
                    to flipping the title to a new color it will also flip the neighboring tiles (excluding corners).

                    The number of moves and how long you take is being tracked, so do your best! Global
                    ranking is to come.
                </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>-Team</Text>
                </CardItem>
             </Card>
            </Content>
          </Container>
        );
      }
}

export default Instructions;
