import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { initStore, RootState } from './controllers/store';
import { GetController, Connect, ReduxConnect } from 'redux-controllers';
import { CounterController } from './controllers/counter/counter.controller';
import Counter, { CounterConnectedProps } from './components/counter.component';

// Init Store
initStore();

// @ReduxConnect((state: RootState) => ({ counter: state.counterState.counter }))
export default class App extends Component<AppProps, AppState> {

  increment = () => GetController(CounterController).increaseCounter();

  increaseBy10 = () => GetController(CounterController).increaseCounter(10);

  readState = () => console.log(GetController(CounterController).state);

  readAsObservable = () => GetController(CounterController)
    .subscribeTo(state => state.counter)
    .subscribe(counter => console.log(`Counter:${counter}`));


  counterConnector = (state: RootState): CounterConnectedProps => ({ counter: state.counterState.counter });

  loadCounterFromBackendMethod1 = () => GetController(CounterController).loadCounterFromBackend();

  loadCounterFromBackendMethod2 = () => GetController(CounterController).loadCounterFromBackend2().then(d => console.log('Promise Resolved'));



  render() {
    return (
      <View style={styles.container}>
        <Connect connector={this.counterConnector}>
          <Counter />
        </Connect>
        <View style={styles.actionsContainer}>
          <View style={styles.row}>
            <TouchableOpacity onPress={this.increment} style={styles.button}>
              <Text style={styles.buttonText}>Increase ++ </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.readState} style={styles.button}>
              <Text style={styles.buttonText}>Read </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={this.readAsObservable} style={styles.button}>
              <Text style={styles.buttonText}>Subscribe </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.increaseBy10} style={styles.button}>
              <Text style={styles.buttonText}>Increase by 10 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={this.loadCounterFromBackendMethod1} style={styles.button}>
              <Text style={styles.buttonText}>Load Async 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.loadCounterFromBackendMethod2} style={styles.button}>
              <Text style={styles.buttonText}>Load Async 2 </Text>
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
    padding: 10,
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