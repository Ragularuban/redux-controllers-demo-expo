import { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import React from "react";

export default class Counter extends Component<CounterProps & Partial<CounterConnectedProps>, CounterState> {

    render() {
        return (
            <Text style={styles.counterText}>{this.props.counter}</Text>
        );
    }
}

export interface CounterProps {
}

export interface CounterConnectedProps {
    counter: number;
}


export interface CounterState {
}


const styles = StyleSheet.create({
    counterText: {
        color: '#222',
        fontFamily: 'Arial',
        fontSize: 20,
        textAlign: 'center',
    }
});