import React, { Component } from 'react';
import { StyleSheet,Text,View,ImageBackground,TouchableHighlight,Image} from 'react-native';


import {createStackNavigator,createAppContainer} from 'react-navigation';
import First from './First';
import Login from './Login';
import vote from './vote';
import voteComplete from './voteComplete';
var yourPicture_new = require ('../assets/img/cart.png');

export  class Splash extends Component{
  static navigationOptions = {
    header: null
}

    
    render(){
        var yourPicture = require ('../assets/img/image1.jpg');
       

        return(
            
            <ImageBackground source={yourPicture}style={Styles.backgroundImage}>
            <View style={Styles.container}>
            <Text style={Styles.title}>Vineto</Text>
            <TouchableHighlight
         style={Styles.submit}
         onPress={() => this.props.navigation.navigate('Login')}
        underlayColor='#fff'>
            <Text style={[Styles.submitText]}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight
         style={Styles.registration}
         onPress={() =>  this.props.navigation.navigate('Login')}
        underlayColor='#fff'>
            <Text style={[Styles.regisText]}>Registration</Text>
            </TouchableHighlight>

           
         
      </View>
          </ImageBackground>
          
        )

    }
}

const NavStack = createStackNavigator({
  Splash: { 
      screen: Splash,
  },
  First: { 
      screen: First,
      navigationOptions:{
        title: 'Vineto',
        headerLeft: null,  
        headerRight: (
          <Image source={yourPicture_new}
         style={{width: 30, height: 30,marginRight:30}}/>
        ),     
        flex:1,
        textAlign:'center',
        alignSelf: 'center',
        headerStyle: {
            backgroundColor: '#00FA9A',          
          
          },
          headerTintColor: '#fff'
      }
  },
  Login:{
   screen:Login
  },
  vote:{
    screen:vote,
    navigationOptions:{
      title:'vineto',
      headerRight: (
        <Image source={yourPicture_new}
       style={{width: 30, height: 30,marginRight:30}}/>     
      ),
      flex:1,
      textAlign:'center',
      alignSelf:'center',
      headerStyle:{
        backgroundColor:'#00FA9A'
      },
      headerTintColor:'#fff'
    }
  },
  voteComplete:{
    screen:voteComplete,
    navigationOptions:{
      title:'vineto',
      headerRight: (
        <Image source={yourPicture_new}
       style={{width: 30, height: 30,marginRight:30}}/>     
      ),
      flex:1,
      textAlign:'center',
      alignSelf:'center',
      headerStyle:{
        backgroundColor:'#00FA9A'
      },
      headerTintColor:'#fff'
    }
  }

});
const App = createAppContainer(NavStack);

export default App;
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
    marginTop:100,
    paddingTop:5,
    paddingBottom:10,
    backgroundColor:'#00FA9A',
    borderRadius:12,
    paddingLeft:70,
    paddingRight:70
   
   
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
  },
  registration:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:5,
    paddingBottom:10,
    backgroundColor:'#ffff',
    borderRadius:12,
    paddingLeft:50,
    paddingRight:50
   
   
  },
  regisText:{
      color:'#696969',
      textAlign:'center',
  }

})


// import React, { Component } from 'react';
// import { StyleSheet, Text,View,ImageBackground,TouchableHighlight} from 'react-native';

// export default class Splash extends Component {
//   render() {
//     return (
//       <View>
//           <Text>Hello World!</Text>
//       </View>
     
//     );
//   }
// }