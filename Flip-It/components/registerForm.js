import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    logButton: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
    },
    logText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },
    buttonContainer: {
        paddingBottom: 5
    }
});
export default class Login extends Component{
    render(){
        return (
            <View style={styles.container}>
            <StatusBar
                barStyle = "light-content"
            />
            <TextInput
                placeholder="username"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType = "email-address"
                autoCapitalize = "none"
                autoCorrect = {false}
                style={styles.input} />
            <TextInput
                placeholder="password"
                secureTextEntry
                returnKeyType="go"
                style={styles.input}
                ref = {(input) => this.passwordInput = input }
                />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.logButton}>
                    <Text style={styles.logText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.logButton}>
                    <Text style={styles.logText}>Register</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

