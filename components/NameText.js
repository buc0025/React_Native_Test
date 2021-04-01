import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";

export default class NameText extends Component {

    render() {
      return (      
          <Text style={styles.textStyle}>{this.props.name}</Text>      
      );
    }
  
}

const styles = StyleSheet.create({  
  textStyle: {
    fontSize: 22,
    color: "white",
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  }
})