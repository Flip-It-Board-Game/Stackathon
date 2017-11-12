import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import Buttons from './buttons'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import Reset from './reset'
import Solution from './solution'
// import Menu from './menu'

class tableView extends Component {
  constructor(props) {
    super(props)
    this.number = 0
  }

  render() {
    console.log('COUNT - Grid', this.props.count)
    //Renders table based on user input
    const width = this.props.dimensions && this.props.dimensions.width
    const height = this.props.dimensions && this.props.dimensions.height
    let num = width * height
    let rowButtons = []
    let tableData = []
    for (let i = 0; i < num; i++) {
      rowButtons.push(<Buttons iNum={i} />)
      if ((i + 1) % width === 0) {
        tableData.push(rowButtons)
        rowButtons = []
      }
    }
    const rowWidth = width * 50
    const styles = StyleSheet.create({
      TopBuffer: { height: 300, backgroundColor: 'white', borderWidth: 0 },
      text: { marginLeft: 5 },
      row: { height: 50, width: rowWidth },
      top: { height: 60, width: rowWidth },
      app: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      }
    })
    const datas = [
      [<Text>{'\n'}</Text>],
      [<Text key="moveCount">Number of Moves: {this.props.count.count}</Text>]
    ]
    console.log(this.props && this.props.won)
    return (
      <View style={{ backgroundColor: 'white' }}>
        {this.props && this.props.bool.indexOf(true) === -1 ? (
          <View>
            <Text>You Won!</Text>
            <Reset />
          </View>
        ) : (
          <View style={styles.app}>
            <Table borderStyle={{ borderWidth: 0, borderColor: 'white' }}>
              <Rows data={datas} style={styles.top} textStyle={styles.text} />
            </Table>
            <Table borderStyle={{ borderWidth: 0, borderColor: 'white' }}>
              <Rows
                data={tableData}
                style={styles.row}
                textStyle={styles.text}
              />
            </Table>
            <Text>{'\n'}</Text>
            <Reset />
            <Solution />
          </View>
        )}
      </View>
    )
  }
}

const mapstate = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions,
    count: state.count,
    won: state.won
  }
}

export default connect(mapstate)(tableView)
