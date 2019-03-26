
import React from 'react';
import {AppRegistry,ImageBackground,TextInput, Button, View, Text,Image,TouchableHighlight,StyleSheet } from 'react-native';
import { Right } from 'native-base';

 export default class AccountDetails extends React.Component {
  render()
  
  
  
  {
   
    
    var pic1 = require ('../assets/img/pic1.png');
    var wine = require ('../assets/img/wine2.png');
    var star = require ('../assets/img/star1.png');




    return (
        
        <View style={Styles.container}>   
        
        <Text style={{ color: "#808080",textAlign: 'center',fontSize:30 }}>
                BONUS ACCOUNT
            
          </Text>    
          <Text style={{ color: "#00FA9A",textAlign: 'center',marginTop:'2%',fontSize:25}}>
                 5,-EUR{"\n"}

            
          </Text>  
          <View
  style={{
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    width: '100%'
  }}
/>
<View style={{
                flexDirection: "row",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'5%',
                marginLeft:'10%',
                
                marginRight:'10%'
               
              }}
            >
             <Image
                  style={{ width: 25, height:25 }}
                  source={ star}
                />
               <Text style={{ color: "#808080",textAlign: 'center',fontSize:20,marginLeft:'10%'}}>
                 MY VOTES

            
          </Text>
           
            </View>  
            <View
  style={{
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    width: '100%'
  }}
/>  
            <View style={{
                flexDirection: "row",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'5%',
                marginLeft:'10%',
                marginRight:'10%',
               
               
              }}
            >
             <Image
                  style={{ width: 25, height:25,marginRight:"12%" }}
                  source={ wine}
                />
               <Text style={{ color: "#808080",textAlign: 'center',fontSize:20,marginLeft:'2%'}}>
                 MY VINE

            
          </Text>
           
            </View>  
            <View
  style={{
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    marginTop:'2%',
    width: '100%'
  }}
/>
<View
  style={{
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
     marginTop:'40%',
    width: '100%'
  }}
/>
<Text style={{ color: "#808080",textAlign: 'center',fontSize:20,marginTop:'5%'}}>
                 CHANGE PASSWORD

            
          </Text>
          <View
  style={{
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
   marginTop:'5%',
    width: '100%'
  }}
/>
  </View>
  
      
    );
    
    
  }
}
const Styles =StyleSheet.create({
  container:{
     
      flex: 1,
     marginTop:'10%',
      alignItems: 'center',
      width: null,
      height: null,    
         
            
  }, 


})