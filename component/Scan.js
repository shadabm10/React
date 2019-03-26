
import React from 'react';
import {AppRegistry,ImageBackground,TextInput, Button, View, Text,Image,TouchableHighlight,StyleSheet } from 'react-native';
import { Right } from 'native-base';

 export default class Scan extends React.Component {
  render()
  
  
  
  {
   
    var scan = require ('../assets/img/scan.png');
    var pic1 = require ('../assets/img/pic1.png');
    var pic2 = require ('../assets/img/pic2.png');
    var star = require ('../assets/img/star.png');




    return (
        
        <View style={Styles.container}>   
         <Image
                  style={{ width: 200, height: 500 }}
                  source={ scan}
                />
                        
  </View>
      
    );
    
    
  }
}
const Styles =StyleSheet.create({
  container:{
     
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      width: null,
      height: null,    
         
            
  },
  backgroundImage: {
    flex:1,
    width: '100%',
    height: '100%',
    marginTop:'10%',
    alignItems: 'center',

   
     
  
   
  },
title:{
  fontSize: 50,
  textAlign: "center",
  margin: 10,
  color: "white",
  fontWeight: "bold"
  

},
backgroundImage: {
  flex:1,
  width: '100%',
  height: '100%',
  alignItems: 'center',
  
},
submit:{
  marginRight:40,
  marginLeft:40,
  marginTop:10,
  paddingTop:5,
  paddingBottom:10,
  backgroundColor:'#00FA9A',
  borderRadius:12,
  paddingLeft:25,
  paddingRight:25
 
 
},
submitNew:{
  marginRight:40,
  marginLeft:40,
  marginTop:10,
  paddingTop:5,
  paddingBottom:10,
  paddingLeft:25,
  paddingRight:25,
  backgroundColor:'#6B8E23',
  borderRadius:12,
  
 
 
},
submitText:{
    color:'#fff',
    textAlign:'center',
    fontSize:12,
    width:70,
    height:15,
},


regisText:{
    color:'#696969',
    textAlign:'center',
},   
textInput:{ 
 
  backgroundColor:'#ffff',
  borderRadius:12,
  width:100,
  marginTop:10,
  height:35,
  textAlign:'center',
  fontSize:10


  }

})