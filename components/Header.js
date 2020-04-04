import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>menu</Text>
         <View style={styles.logotext}>
         <Image 
          source={require('../assets/logo.png')}
          style={styles.logo}
          />
        <Text style={styles.logotitle}> AdDY Shop </Text>
         </View>
        <Text>like</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        height: 60,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        width: Dimensions.get('window').width,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    logotext:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo:{
        width: 40,
        height: 40,
    },
    logotitle:{
        marginLeft: 10,
        color: '#0d0e0e',
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic'
    }
})