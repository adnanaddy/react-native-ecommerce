import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HeroText extends Component {

  render() {
    return (
      <View>
        <Text style={styles.headerText}> Shoe Collection </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 headerText:{
    borderColor: 'rgba(255,255,255,0)',
    borderRadius: 8,

    alignSelf: 'center',
    fontSize: 25,
    color: '#292929',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
 }
})