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

import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import store from '../components/store/store'

class LevelSelector extends Component {
  render() {
    console.log('store', store.dispatch)
    let buttons = []
    {
      for (let i = 1; i <= 16; i++) {
        buttons.push(
          <Button
            title={`Level ${i}`}
            onPress={() => {
              this.props.navigation.navigate('GameScreen')
            }}
          />
        )
      }
    }
    return <View style={styles.container}>{buttons}</View>
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center'
  }
})

export default LevelSelector
