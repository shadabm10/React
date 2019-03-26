
import React, { Component } from 'react';
// import { Actions } from 'react-native-router-flux';
import {createStackNavigator} from 'react-navigation';



import { StyleSheet, Text,View,ImageBackground,TouchableHighlight,TextInput} from 'react-native';



export default class Login extends Component {
  static navigationOptions = {
    header: null
}

constructor(props) {
  super(props);
  this.state = { text: 'Useless Placeholder' };
}
    render(){
      var yourPicture = require ('../assets/img/image1.jpg');

        return (
          <ImageBackground source={yourPicture}style={Styles.backgroundImage}>
            <View style={Styles.container}>
            <Text style={Styles.title}>Vineto</Text>
            <TextInput underlineColorAndroid='transparent' placeholder="Email" style={Styles.textInput} />

            <TextInput underlineColorAndroid='transparent' placeholder="Password" style={Styles.textInput} />
            <TouchableHighlight
         style={Styles.submit}
         onPress={() => this.props.navigation.navigate('First')}
        underlayColor='#fff'>
            <Text style={[Styles.submitText]}>Login</Text>
            </TouchableHighlight>

           
         
      </View>
          </ImageBackground>
          
        )
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
  paddingLeft:85,
  paddingRight:80
 
 
},
submitText:{
    color:'#fff',
    textAlign:'center',
},

regisText:{
    color:'#696969',
    textAlign:'center',
},   
textInput:{ 
 
  backgroundColor:'#ffff',
  borderRadius:12,
  width:200,
  marginTop:10,
  height:35,
  textAlign:'center',
  fontSize:10


  }

})