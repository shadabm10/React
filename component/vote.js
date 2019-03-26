
import React from 'react';
import {AppRegistry,TextInput, Button, View, Text,Image,TouchableHighlight,StyleSheet,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Right } from 'native-base';
import { Rating } from 'react-native-ratings';
import StarRating from './star-rating';
var rate = require ('../assets/img/atrate1.png');
 export default class vote extends React.Component {
  constructor() {
    super();
    this.state = {
      Default_Rating: 0,
      Default_Rating_Scent:0,
      Default_Rating_Design:0,
      Default_Rating_Pricing:0,
      Default_Rating_Picture:0,
      //To set the default Star Selected
      Max_Rating: 5,
      //To set the max number of Stars
    };
   
    //Filled Star. You can also give the path from local
    this.Star = 'https://i.postimg.cc/cCtqC2vB/icons8-christmas-star-filled-100.png';

    //Empty Star. You can also give the path from local
    this.Star_With_Border = 'https://i.postimg.cc/13ngP3R8/icons8-christmas-star-100-1.png';

    this.Star1 = 'https://i.postimg.cc/cCtqC2vB/icons8-christmas-star-filled-100.png';

    //Empty Star. You can also give the path from local
    this.Star_With_Border1 = 'https://i.postimg.cc/13ngP3R8/icons8-christmas-star-100-1.png';

    this.Star2 = 'https://i.postimg.cc/cCtqC2vB/icons8-christmas-star-filled-100.png';

    //Empty Star. You can also give the path from local
    this.Star_With_Border2 = 'https://i.postimg.cc/13ngP3R8/icons8-christmas-star-100-1.png';

    this.Star3 = 'https://i.postimg.cc/cCtqC2vB/icons8-christmas-star-filled-100.png';

    //Empty Star. You can also give the path from local
    this.Star_With_Border3 = 'https://i.postimg.cc/13ngP3R8/icons8-christmas-star-100-1.png';

    this.Star4 = 'https://i.postimg.cc/cCtqC2vB/icons8-christmas-star-filled-100.png';

    //Empty Star. You can also give the path from local
    this.Star_With_Border4 = 'https://i.postimg.cc/13ngP3R8/icons8-christmas-star-100-1.png';
  }
  UpdateRating(key) {
    this.setState({ Default_Rating: key });
    console.log("rating");
    console.log(this.state);
    //Keeping the Rating Selected in state
  }
  UpdateRating1(key) {
    this.setState({ Default_Rating_Scent: key });
    console.log("rating1");
    console.log(this.state);

    //Keeping the Rating Selected in state
  }
  UpdateRating2(key) {
    this.setState({ Default_Rating_Design: key });
    console.log("rating2");
    console.log(this.state);

    //Keeping the Rating Selected in state
  }
  UpdateRating3(key) {
    this.setState({ Default_Rating_Pricing: key });
    console.log("rating2");
    console.log(this.state);

    //Keeping the Rating Selected in state
  }
  UpdateRating4(key) {
    this.setState({ Default_Rating_Picture: key });
    console.log(this.state);

    //Keeping the Rating Selected in state
  }
  render()
  
  
  
  {
    let React_Native_Rating_Bar = [];
    let React_Native_Rating_Bar1 = [];

    let React_Native_Rating_Bar2 = [];

    let React_Native_Rating_Bar3 = [];

    let React_Native_Rating_Bar4 = [];

    
    var yourPicture = require ('../assets/img/top.png');
    var profile = require ('../assets/img/profile1.png');
    var atRate = require ('../assets/img/atrate.png');
    var play = require ('../assets/img/play.png');
    var fb = require ('../assets/img/fb.png');
    var twit = require ('../assets/img/twit.png');
    var pic1 = require ('../assets/img/pic1.png');
    var atrate1 = require ('../assets/img/atrate1.png');
    for( var i = 1; i <= this.state.Max_Rating; i++ )
    {
      React_Native_Rating_Bar.push(

            <TouchableOpacity 
              activeOpacity = { 0.7 } 
              key = { i } 
              onPress = { this.UpdateRating.bind( this, i ) }>

              
                <Image 
                  style = { styles.StarImage } 
                  source = { ( i <= this.state.Default_Rating ) ? { uri: this.Star } : { uri: this.Star_With_Border } } />
            
            
            </TouchableOpacity>
        
      );
    }
    for( var i = 1; i <= this.state.Max_Rating; i++ )
    {
      React_Native_Rating_Bar1.push(

            <TouchableOpacity 
              activeOpacity = { 0.7 } 
              key = { i } 
              onPress = { this.UpdateRating1.bind( this, i ) }>

              
                <Image 
                  style = { styles.StarImage } 
                  source = { ( i <= this.state.Default_Rating_Scent ) ? { uri: this.Star1 } : { uri: this.Star_With_Border1 } } />
            
            
            </TouchableOpacity>
        
      );
    }
    for( var i = 1; i <= this.state.Max_Rating; i++ )
    {
      React_Native_Rating_Bar2.push(

            <TouchableOpacity 
              activeOpacity = { 0.7 } 
              key = { i } 
              onPress = { this.UpdateRating2.bind( this, i ) }>

              
                <Image 
                  style = { styles.StarImage } 
                  source = { ( i <= this.state.Default_Rating_Design ) ? { uri: this.Star2 } : { uri: this.Star_With_Border2 } } />
            
            
            </TouchableOpacity>
        
      );
    }
    for( var i = 1; i <= this.state.Max_Rating; i++ )
    {
      React_Native_Rating_Bar3.push(

            <TouchableOpacity 
              activeOpacity = { 0.7 } 
              key = { i } 
              onPress = { this.UpdateRating3.bind( this, i ) }>

              
                <Image 
                  style = { styles.StarImage } 
                  source = { ( i <= this.state.Default_Rating_Pricing ) ? { uri: this.Star3 } : { uri: this.Star_With_Border3 } } />
            
            
            </TouchableOpacity>
        
      );
    }
    for( var i = 1; i <= this.state.Max_Rating; i++ )
    {
      React_Native_Rating_Bar4.push(

            <TouchableOpacity 
              activeOpacity = { 0.7 } 
              key = { i } 
              onPress = { this.UpdateRating4.bind( this, i ) }>

              
                <Image 
                  style = { styles.StarImage } 
                  source = { ( i <= this.state.Default_Rating_Picture ) ? { uri: this.Star4 } : { uri: this.Star_With_Border4 } } />
            
            
            </TouchableOpacity>
        
      );
    }

    return (
      <View style={{ flex: 1 }}>
       <View style={{width:null,height:120 , marginTop: "1%"}}>
      
         <View style={{width:null,height:20 ,flexDirection:'row', alignItems:'center',marginTop:'-5%'}}>
      
          
       
      
       
             
            
            
        </View>  
        <View style={{
                flexDirection: "row",
               
                marginLeft:'20%',
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'2%',
                marginRight:'20%'
               
              }}
            >
              <View style={{ alignItems: "center"}}>
                <Image
                  style={{ width: 100, height:250,marginLeft:'20%' }}
                  source={ pic1}
                />
                
                              </View>
              
              <View style={{ marginLeft:'10%',marginBottom:'20%'}}>
               
                 <Text style={{ color: "#808080" ,textAlign: 'center',fontSize:22}}>
          Waldgries
          Sauvignon{"\n"}
          2008
          </Text>
          <View style={{
                flexDirection: "row",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'1%',
              
                marginRight:'20%'
               
              }}
            >
             <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
          Country: 
        
          </Text>
          <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
         Italian
          </Text>

            </View>
            
            <View style={{
                flexDirection: "row",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'1%',
             
                marginRight:'20%'
               
              }}
            >
             <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
          Acreage: 
        
          </Text>
          <Text>{"    "}</Text>
          <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
         Sudtirol
          </Text>

            </View>
            <View style={{
                flexDirection: "row",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'1%',
                marginLeft:'10%',
                marginRight:'20%'
               
              }}
            >
             <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
             <Text>{"     "}</Text>
          Type of grape:
        
          </Text>
          <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
         Sauvignon blanc
          </Text>

            </View>
            <View style={{
                flexDirection: "row",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'1%',
               
                marginRight:'20%'
               
              }}
            >
             <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
          Vintage: 
        
          </Text>
          <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
         2008
          </Text>

            </View>
            <View style={{
                flexDirection: "row",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'1%',
                paddingLeft:'10%',
                marginRight:'20%'
               
              }}
            >
             <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
          Alcohol Content: 
        
          </Text>
          <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0" ,textAlign: 'center'}}>
         13.50 % Vol
          </Text>

            </View>
              </View>
             
            </View>
            <View style={{
                flexDirection: "column",            
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'7%',
               
              
               
              }}
            >
            <View style={{
                flexDirection: "row",            
               
                marginTop:'1%',              
               
               
              }}
            >
             <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0",alignItems:'center',
                justifyContent: 'center',marginTop:'3%'}}>
         Taste
          </Text>
       <View style = { styles.MainContainer }>
 
 <View style = { styles.childView }>

   {
       React_Native_Rating_Bar
   }

 </View>

 

</View>
            </View>
            <View style={{
                flexDirection: "row",            
               
                marginTop:'1%',              
               
               
              }}
            >
             <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0",alignItems:'center',
                justifyContent: 'center',marginTop:'5%'}}>
         Scent
          </Text>
       <View style = { styles.MainContainer }>
 
 <View style = { styles.childView }>

   {
       React_Native_Rating_Bar1
   }

 </View>

 

</View>
            </View>  
            <View style={{
                flexDirection: "row",            
               
                marginTop:'1%',              
               
               
              }}
            >
             <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0",alignItems:'center',
                justifyContent: 'center',marginTop:'5%'}}>
         Design
          </Text>
       <View style = { styles.MainContainer }>
 
 <View style = { styles.childView }>

   {
       React_Native_Rating_Bar2
   }

 </View>

 

</View>
            </View>  
            <View style={{
                flexDirection: "row",            
               
                marginTop:'1%',              
               
               
              }}
            >
             <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0",alignItems:'center',
                justifyContent: 'center',marginTop:'5%'}}>
         Pricing
          </Text>
       <View style = { styles.MainContainer }>
 
 <View style = { styles.childView }>

   {
       React_Native_Rating_Bar3
   }

 </View>

 

</View>
            </View> 
            <View style={{
                flexDirection: "row",            
               
                marginTop:'1%',              
               
               
              }}
            >
             <Text>{"     "}</Text>
          <Text style={{ color: "#C0C0C0",alignItems:'center',
                justifyContent: 'center',marginTop:'5%'}}>
         Picture
          </Text>
       <View style = { styles.MainContainer }>
 
 <View style = { styles.childView }>

   {
       React_Native_Rating_Bar4
   }

 </View>

 

</View>
            </View>  
                      
            <View style={{
                flexDirection: "row",              
              
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'1%',
                
               
              }}
            >
              <TouchableHighlight
         style={Styles.submit}
         onPress={() => this.props.navigation.navigate('voteComplete')}
        underlayColor='#fff'>
            <Text style={[Styles.submitText]}>NEXT  ></Text>
            </TouchableHighlight> 
              
          
             
            </View>
            </View>
         
         
          </View>
      
          <View style={ styles.bottomView} >
          <View style={{ flexDirection: 'row' }}>
          <Image
                  style={{ width: 20, height: 20, marginLeft:'5%',justifyContent: 'center',
      alignItems: 'center',marginTop:'2%'}}
                  source={ rate}
                />
    <TextInput placeholder="Your comment" marginLeft='5%'marginRight='15%'>
     
    </TextInput>
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
  marginRight:20,
  marginLeft:30,
  marginTop:'2%',
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
    width:40,
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
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:'20%',
      marginRight:'20%',
      backgroundColor: '#F5FCFF',
    },
    bottomView:{
 
      width: '100%', 
      height: 40, 
      backgroundColor: '#E0E0E0', 
     
      position: 'absolute',
      borderRadius:25,
      bottom: 1,
      
     
    },
 
    textStyle:{
 
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      height:'100%',
      width:'100%'
     
     
    },
    
      MainContainer:
      {
          flex: 1,
          justifyContent: 'center',
       
      },
   
      childView:
      {
          justifyContent: 'center',
          flexDirection: 'row',
      },
   
      StarImage:
      {
          width: 20,
          height: 20,
          resizeMode: 'cover',
          margin:'2%'
      },
   
      textStyle:
      {
          textAlign: 'center',
          fontSize: 23,
          color: '#000',
          marginTop: 15
      }
  });

  
  