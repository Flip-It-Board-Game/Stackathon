// import React, { Component } from 'react'
// import { View, Button, StyleSheet } from 'react-native'
// import { Provider } from 'react-redux'
// import store from '../components/store/store'
// import LevelCreate from './LevelCreate'
// import Grid from '../components/grid'

// class LevelSelector extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View style={styles.container}>
//           <LevelCreate move={this.props.navigation.navigate('GameScreen')} />
//         </View>
//       </Provider>
//     )
//   }
// }

// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C0C0C0',
//     justifyContent: 'center'
//   }
// })

// export default LevelSelector

// import React, { Component } from 'react'
// import { View, Button, StyleSheet } from 'react-native'
// import store from '../components/store/store'

// class LevelSelector extends Component {
//   render() {
//     console.log('store', store.dispatch)
//     let buttons = []
//     {
//       for (let i = 1; i <= 16; i++) {
//         buttons.push(
//           <Button
//             title={`Level ${i}`}
//             onPress={() => {
//               this.props.navigation.navigate('GameScreen')
//             }}
//           />
//         )
//       }
//     }
//     return <View style={styles.container}>{buttons}</View>
//   }
// }

// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C0C0C0',
//     justifyContent: 'center'
//   }
// })

// export default LevelSelector

import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import { Button } from 'native-base'
import { connect } from 'react-redux'
// import Reset from './reset'
// import Solution from './solution'
import { setBoard, setDimensions } from '../components/store/store'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
    })
    let buttonArr = []
    for (let i = 2; i < 8; i++) {
      buttonArr.push(
        <Button
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: '#d6d7da'
          }}
          onPress={() => {
            this.props.setBoard({ width: i, height: i })
            this.props.setDimensions({ width: i, height: i })
          }}
        >
          <Text>
            {'  '}
            {i} X {i}
            {'  '}
          </Text>
        </Button>
      )
    }
    return (
      <View style={styles.container}>{buttonArr.map(button => button)}</View>
    )
  }
}

const mapstate = state => {
  return {
    bool: state.bool,
    dimensions: state.dimensions
  }
}

const mapDispatch = dispatch => {
  return {
    setBoard: board => dispatch(setBoard(board)),
    setDimensions: board => dispatch(setDimensions(board))
  }
}

export default connect(mapstate, mapDispatch)(Menu)
