

import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { createAppContainer } from '@react-navigation/native';
import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import login from './Login';
import signup from './Profile';
import home from './HomeScreen';
import Scan from './Scan';
import ProfileDetails from  './AccountDetails';


//custom sidebar
//import Sidebar from './src/screens/Sidedrawer';

class First extends React.Component {
 
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

const sellTab = createStackNavigator({
  SignUp: {
    screen: signup,
    
    
  }
 
},{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
});
const scan = createStackNavigator({
  SignUp: {
    screen: Scan,
   
  }
},{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
});
const account = createStackNavigator({
  SignUp: {
    screen: ProfileDetails,
   
  }
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  },});

const homeTab = createStackNavigator({
  Home: {
    screen: home,
   
  }
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  },});


const tabNavigator = createBottomTabNavigator({
  
  Home: {
    screen: homeTab,
    navigationOptions: {
     
      tabBarIcon: ({ tintColor }) => (
        <IonicIcon name="md-home" size={30} color={tintColor} />
      )
    },
    
  },
  Deals: {
    screen: sellTab,
    navigationOptions: {
     
      tabBarIcon: ({ tintColor }) => (
        <IonicIcon name="ios-wine" size={30} color={tintColor} />
      )
    }
  },
  Scan: {
    screen: scan,
    navigationOptions: {
     
     
      tabBarIcon: ({ tintColor }) => (
       <FontAwesome name="qrcode" size={30} color={tintColor} />
            )
    }
  },
  Account: {
    screen: account,
    navigationOptions: {
     
      tabBarIcon: ({ tintColor }) => (
       <FontAwesome name="user" size={30} color={tintColor} />
            )
    }
  }
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#00FA9A', // active icon color
      inactiveTintColor: '#696969',  // inactive icon color
      style: {
          backgroundColor: '#fff' // TabBar background
      }
    },
    
  });





export default createAppContainer(tabNavigator);

