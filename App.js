import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomColor: null,
      buttonColor: null
    };
  }

  getRandomColor = () => {
    return (
      "rgb(" + 
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + ")"
    );
  }
  getButtonColor = () => {
    return (
      "rgb(" + 
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + "," +
      Math.floor(Math.random() * 256) + ")"
    );
  }

  myButtonPressed = () => {
    this.setState({randomColor: this.getRandomColor()})
    this.setState({buttonColor: this.getButtonColor()})
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.randomColor}]}>
        <TouchableOpacity onPress={this.myButtonPressed}>
        <Text style={[styles.input], {backgroundColor: this.state.buttonColor, fontSize: 30}}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontSize: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderWidth: 2,
    color: 'white',
    borderColor: 'rgb(23, 34, 45)',
    backgroundColor: 'purple'
  }
});
