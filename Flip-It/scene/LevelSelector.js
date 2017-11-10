import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class LevelSelector extends Component {
    render() {
        let buttons = [];
        {
            for (let i = 1; i <= 16; i++) {
                buttons.push(
                    <Button
                        title={`Level ${i}`}
                    />
                );
            }
        }
        return (
            <View style={styles.container} >
                {buttons}
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
    }

});

export default LevelSelector;
