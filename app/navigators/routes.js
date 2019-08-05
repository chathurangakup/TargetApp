import React from 'react';
import { Platform,Dimensions} from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
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
  
    SunScreen:{
        screen: SunScreen,
        navigationOptions: {
            header:null,
            }
    },

    MonScreen:{
        screen: MonScreen,
        navigationOptions: {
            header:null,
            }
    },

    TueScreen:{
        screen: TueScreen,
        navigationOptions: {
            header:null,
            }
    },
    WheScreen:{
        screen: WheScreen,
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

    FriScreeen:{
        screen: FriScreeen,
        navigationOptions: {
            header:null,
            }
    },

    SatScreen:{
        screen: SatScreen,
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





const DrawerNavigator=createDrawerNavigator({
    Home:{
        screen:HomeScreen,
    }
});

const App=createAppContainer(DrawerNavigator)
export default App;