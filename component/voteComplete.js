
import React from 'react';
import {AppRegistry,ImageBackground,TextInput, Button, View, Text,Image,TouchableHighlight,StyleSheet } from 'react-native';
import { Right } from 'native-base';

 export default class voteComplete extends React.Component {
  render()
  
  
  
  {
    var yourPicture = require ('../assets/img/top.png');
    var profile = require ('../assets/img/profile1.png');
    var atRate = require ('../assets/img/atrate.png');
    var play = require ('../assets/img/play.png');
    var fb = require ('../assets/img/fb.png');
    var twit = require ('../assets/img/twit.png');
    var pic1 = require ('../assets/img/pic1.png');
    var pic2 = require ('../assets/img/pic2.png');
    var star = require ('../assets/img/star.png');




    return (
      <View style={{ flex: 1 }}>
       <View style={{width:null,height:10 , marginTop: "1%"}}>
       <Image 
       style={{width: null, height: 25,marginTop: "1%"}}/>
          
          <View style={{
                flexDirection: "row",
               
                marginLeft:'1%',
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'2%'
               
              }}
            >
              <View style={{ alignItems: "center",}}>
                <ImageBackground
                  style={{ width: 100, height:250 }}
                  source={ pic1}
                >
               <Image
              style={{
                
                alignSelf: 'center',
                height: '30%',
                width: '100%',
                marginTop:'200%'
               
              }}
              resizeMode="contain"
              source={star}
            />
             <Text style={{ color: "#fff",textAlign: 'center',marginTop:'-50%' }}>
                 14.9{"\n"}

            
          </Text>
          
          </ImageBackground>
              </View>
              
              <View style={{ alignItems: "center",marginLeft:'10%'}}>
                <ImageBackground
                  style={{ width: 100, height: 250 }}
                  source={ pic2}
                >
                 <Image
              style={{
               
                alignSelf: 'center',
                height: '30%',
                width: '100%',
                marginTop:'200%'
              
              }}
              resizeMode="contain"
              source={star}
            />
            <Text style={{ color: "#fff",textAlign: 'center',marginTop:'-50%',fontSize:20 }}>
                 18.2{"\n"}

            
          </Text>
          </ImageBackground>
              </View>
             
            </View>
            <Text style={{ color: "#808080",textAlign: 'center',marginTop:'10%' }}>
                 THANKS FOR YOUR VOTE.YOU{"\n"}
WILL GET A BONUS ON YOUR{"\n"}
ACCOUNT
            
          </Text>
          <Text style={{ color: "#00FA9A",textAlign: 'center',marginTop:'5%',fontSize:30}}>
                 5,-EUR{"\n"}

            
          </Text>
            <View style={{
                flexDirection: "row",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'2%',
                marginLeft:'10%',
                marginRight:'10%'
               
              }}
            >
              <TouchableHighlight
         style={Styles.submit}
         onPress={() => this.props.navigation.navigate('First')}
        underlayColor='#fff'>
            <Text style={[Styles.submitText]}>READY</Text>
            </TouchableHighlight> 
              
           
            </View>
           
          </View>

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