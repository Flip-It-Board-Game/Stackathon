import React, { Component } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import Buttons from './buttons';
import { connect } from 'react-redux';
import Reset from './reset';
import Timer from './timer2';
import YouWon from './youWon';
import { setCount } from './store/store';
const Dimensions = require('Dimensions');
let { height, width } = Dimensions.get('window');
let tHeight = height;
let tWidth = width;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.num = 0;
  }

  componentWillMount() {
    this.props.setCount({ count: 0 });
  }

  render() {
    //Renders table based on user input
    let width = this.props.dimensions && this.props.dimensions.width;
    let height = this.props.dimensions && this.props.dimensions.height;
    let gamePieceSize = tWidth * 0.81 / width;
    let num = width * height;
    let rowButtons = [];
    let tableData = [];
    for (let i = 0; i < num; i++) {
      rowButtons.push(<Buttons iNum={i} size={gamePieceSize} />);
      if ((i + 1) % width === 0) {
        tableData.push(rowButtons);
        rowButtons = [];
      }
    }
    const rowWidth = width * gamePieceSize + width * 2;
    const styles = StyleSheet.create({
      TopBuffer: { height: 300, backgroundColor: 'white', borderWidth: 0 },
      text: { marginLeft: 5 },
      row: { height: gamePieceSize, width: rowWidth },
      top: { height: 180, width: 300 },
      app: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      }
    });
    const datas = [
      [
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 150,
              marginTop: 150,
              backgroundColor: 'rgba(0,0,0,0)'
            }}
            key="moveCount"
          >
            Number of Moves: {this.props.count.count}
          </Text>
        </View>
      ]
    ];
    return (
      <View style={{ backgroundColor: 'white' }}>
        {this.props && this.props.bool.indexOf(true) === -1 ? (
          <View>
            <YouWon />
            <Reset />
          </View>
        ) : (
          <Image
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: tWidth,
              height: tHeight
            }}
            source={require('../images/snowbackground.gif')}
          >
            {/* <Image
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: tWidth,
                height: tHeight
              }}
              source={require('../images/snowbackground.gif')}
            > */}
              <Text
                style={{
                  color: 'white',
                  fontSize: 40,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0,0,0,0)',
                  marginBottom: 20
                }}
                key="moveCount"
              >
                Moves: {this.props.count.count}
              </Text>
              <Table borderStyle={{ borderWidth: 0, borderColor: 'white' }}>
                <Rows
                  data={tableData}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </Table>
              <Text style={{ fontSize: 5 }}>{'\n'}</Text>

              <Timer />
              <Reset />
            </Image>
          // </Image>
        )}
      </View>
    );
  }
}

const mapState = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count,
    won: state.won
  };
};

const mapDispatch = dispatch => {
  return {
    setCount: count => dispatch(setCount(count))
  };
};

export default connect(mapState, mapDispatch)(Grid);
