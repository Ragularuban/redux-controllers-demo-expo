import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { initStore } from './controllers/store';

// Init Store
initStore();
export default class App extends Component<AppProps, AppState> {



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Hello World</Text>
      </View>
    );
  }
}

export interface AppProps {
  counter: number;
}

export interface AppState {
  counter: number;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 60,
  },
  h1: {
    color: '#222',
    fontFamily: 'Arial',
    fontSize: 20,
    textAlign: 'center',
  }
});