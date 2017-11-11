import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import Buttons from './buttons'
import { Button } from 'native-base'
import { connect } from 'react-redux'
import Reset from './reset'
import Solution from './solution'

class tableView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //Renders table based on user input
    const width = 5
    const height = 5
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
      app: { justifyContent: 'center', alignItems: 'center' }
    })

    const blankData = []
    console.log(this.props && this.props.bool)
    return (
      <View>
        {this.props &&
        this.props.bool.indexOf(true) === this.props.bool.length ? (
          <Text>You Won!</Text>
        ) : (
          <View style={styles.app}>
            <Table style={styles.table}>
              <Row style={styles.TopBuffer} data={blankData} />
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
    bool: state.bool
  }
}

export default connect(mapstate)(tableView)
