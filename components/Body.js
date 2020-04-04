import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import CoImage from './CoImage'

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titles}>Your Favourite Brands</Text>
    <ScrollView horizontal= {true}
    decelerationRate={0}
    showsHorizontalScrollIndicator={false}
    snapToAlignment={"center"} 
    >
        <View style={styles.column1}>
            <CoImage ImageSource={require('../assets/img3.jpeg')} cat="Bata Shoes" cn="Pakistan"  />
        </View>
        <View style={styles.column1}>
          <CoImage ImageSource={require('../assets/img3.jpeg')}  cat="Liza" cn="China"/>
        </View>
        <View style={styles.column1}>
          <CoImage ImageSource={require('../assets/img3.jpeg')}  cat="J." cn="Pakistan"/>
        </View>
        <View style={styles.column1}>
          <CoImage ImageSource={require('../assets/img3.jpeg')}  cat="Don Carlos" cn="USA"/>
        </View>
        <View style={styles.column1}>
          <CoImage ImageSource={require('../assets/img3.jpeg')}  cat="Ad&Smart" cn="Canada"/>
        </View>
      </ScrollView>
      <View style={[styles.container, {marginTop: 0, paddingTop: 0,}]}>
      <Text style={styles.titles}>Upcoming</Text>
      <View style={styles.full}>
          <CoImage ImageSource={require('../assets/img3.jpeg')} />
      </View>
      <View style={styles.full}>
          <CoImage ImageSource={require('../assets/img3.jpeg')} />
      </View>
      <View style={styles.full}>
          <CoImage ImageSource={require('../assets/img3.jpeg')} />
      </View>
      
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: -20,
        padding: 1,
        paddingTop: 13,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    column1:{
        width: 220,
        padding: 5,
    },
    column2:{
        flex: 1,
        padding: 5,
    },
    full:{
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titles : {
      fontSize: 20,
      padding: 5,
    }
})