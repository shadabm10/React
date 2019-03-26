import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ReactNative, { StyleSheet } from 'react-native';

import Deal from './Deal';
import Profile from './Profile';
import Header from './Header';


export default class mainPage extends Component {
 
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
        
        <ReactNative.View style={styles.container}>
            <Header title='Vineto'  />
            <ReactNative.View style={{flex:1}}>
            
            </ReactNative.View>
        </ReactNative.View>
      </View>
    );
  }
}
const styles =StyleSheet.create({
  container:{
     
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
     
     
     
      
        
     
  },
})