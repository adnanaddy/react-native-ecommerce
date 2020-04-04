import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import HeroText from './HeroText'


export default class HeroImage extends Component {
  render() {
    return (
        
       <ImageBackground
       source={require('../assets/img3.jpeg')}
       style={styles.HeroImg}>
           <HeroText />
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    HeroImg:{
        height: 250,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})