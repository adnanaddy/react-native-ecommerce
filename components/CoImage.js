import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default class CoImage extends Component {
  render() {
    return (
      <ImageBackground
        source={this.props.ImageSource}
        imageStyle={{ borderRadius: 15 }}
        style={styles.Image}>
        <Text style={styles.txt}>{this.props.cat}</Text>
        <Text style={styles.cn}>{this.props.cn}</Text>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
    Image:{
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
      position: 'absolute',
      bottom: 20,
      left: 10,
      color: '#fff',
      fontSize: 20
    },
    cn:{
      position: 'absolute',
      bottom: 10,
      left: 10,
      color: '#f9d9d9',
      fontSize: 10
    }

})