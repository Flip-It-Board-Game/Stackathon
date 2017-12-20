import React, { Component } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../components/loginForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    marginTop: 10,
    width: 100,
    textAlign: 'center',
    opacity: 0.9
  }
});

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Login!</Text>
        </View>
        <View style={styles.form}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
