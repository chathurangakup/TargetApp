import React from 'react';
import { Platform,Dimensions} from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import SunScreen from '../screens/SunScreen';
import MonScreen from '../screens/MonScreen';
import WheScreen from '../screens/WheScreen';
import TueScreen from '../screens/TueScreen';
import ThrusScreen from '../screens/ThrusScreen';
import FriScreeen from '../screens/FriScreen';
import SatScreen from '../screens/SatScreen';


const SignedOut = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions:{
            header:()=> null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions:{
            header:()=> null,
        }
    },
  
   
    MonScreen:{
        screen: MonScreen,
        navigationOptions: {
            header:null,
            }
    },
    
    
   
},{

    navigationOptions: {
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
            }
    }
}

);

const ChangeTarget= createStackNavigator({
    MonScreen:{
        screen: MonScreen,
        navigationOptions: {
            header:null,
            }
    },
   
    ThrusScreen:{
        screen: ThrusScreen,
        navigationOptions: {
            header:null,
            }
    },
});


const SignIn=createDrawerNavigator({
    Home:{
        screen:HomeScreen,
    },
    ChangeTar:{
        screen:ChangeTarget
    }
   
});

const signedIn=false;

 const createRootNavigator =createSwitchNavigator(
     
        {
        SignedOut: {
            screen: SignedOut
         },
         SignIn: {
            screen: SignIn
         },
         
        },
        // {
        //     initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        //   }
      );


const App = createAppContainer(createRootNavigator)
export default App;