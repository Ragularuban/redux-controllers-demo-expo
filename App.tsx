import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { initStore } from './controllers/store';
import { GetController } from 'redux-controllers';
import { CounterController } from './controllers/counter/counter.controller';

// Init Store
initStore();
export default class App extends Component<AppProps, AppState> {

  increment = () => GetController(CounterController).increaseCounter();

  readState = () => console.log(GetController(CounterController).state);


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Hello World</Text>
        <View style={styles.actionsContainer}>
          <View style={styles.row}>
            <TouchableOpacity onPress={this.increment} style={styles.button}>
              <Text style={styles.buttonText}>Increase ++ </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.readState} style={styles.button}>
              <Text style={styles.buttonText}>Read </Text>
            </TouchableOpacity>
          </View>

        </View>
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
  },
  actionsContainer: {
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  counterText: {
    flex: 1,
    color: '#222',
    fontFamily: 'Arial',
    fontSize: 20,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 150
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 16,
    textAlign: 'center',
  }
});