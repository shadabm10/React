
import React from 'react';
import {AppRegistry,TextInput, Button, View, Text,Image,TouchableHighlight,StyleSheet } from 'react-native';
import { Right } from 'native-base';

 export default class profile extends React.Component {
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



    return (
      <View style={{ flex: 1 }}>
       <View style={{width:null,height:10 , marginTop: "1%"}}>
       <Image 
       style={{width: null, height: 25,marginTop: "1%"}}/>
         <View style={{width:null,height:20 ,flexDirection:'row', alignItems:'center',marginTop:'-5%'}}>
       <Image source={profile}
       style={{width: 14, height: 14,marginLeft:'2%'}}
         
        />
          <Text style={{color: '#00FA9A',fontSize:18,marginLeft:'2%'}}>
          48.299
        </Text>
         <Image source={atRate}
       style={{width: 14, height: 14,marginLeft:'7%'}}
         
        />
         <Text style={{color: '#00FA9A',fontSize:18,marginLeft:'2%'}}>
          489
        </Text>
        <View style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginLeft:'30%'
               
              }}
            >
              <View style={{ alignItems: "center",}}>
                <Image
                  style={{ width: 14, height: 14 }}
                  source={ play}
                />
              </View>
              <View style={{ alignItems: "center",marginLeft:'10%' }}>
                <Image
                  style={{ width: 14, height: 14 }}
                  source={ fb}
                />
                
              </View>
              <View style={{ alignItems: "center",marginLeft:'10%'}}>
                <Image
                  style={{ width: 14, height: 14 }}
                  source={ twit}
                />
              </View>
             
            </View>
            
            
        </View>  
        <View style={{
                flexDirection: "row",
               
                marginLeft:'1%',
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'5%'
               
              }}
            >
              <View style={{ alignItems: "center",}}>
                <Image
                  style={{ width: 100, height:250 }}
                  source={ pic1}
                />
                 <Text style={{ color: "#808080",textAlign: 'center' }}>
                 Tishbi Sauvignon{"\n"}
2008
            
          </Text>
              </View>
              
              <View style={{ alignItems: "center",marginLeft:'10%'}}>
                <Image
                  style={{ width: 100, height: 250 }}
                  source={ pic2}
                />
                 <Text style={{ color: "#808080" ,textAlign: 'center'}}>
          Waldgries{"\n"}
          Sauvignon{"\n"}
          2008
          </Text>
              </View>
             
            </View>
            <View style={{
                flexDirection: "row",              
              
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'1%',
                marginLeft:'10%',
                marginRight:'10%'
               
              }}
            >
              <TouchableHighlight
         style={Styles.submit}
         onPress={() => this.props.navigation.navigate('vote')}
        underlayColor='#fff'>
            <Text style={[Styles.submitText]}>VOTE</Text>
            </TouchableHighlight> 
              
            <TouchableHighlight
         style={Styles.submitNew}
         onPress={() => this.props.navigation.navigate('First')}
        underlayColor='#fff'>
            <Text style={[Styles.submitText]}>18,90 EUR</Text>
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