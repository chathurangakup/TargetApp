import React from 'react';
import { Platform,Dimensions} from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const DrawerNavigator=createDrawerNavigator({
    Home:{
        screen:HomeScreen,
    }
});

export default createAppContainer(DrawerNavigator)