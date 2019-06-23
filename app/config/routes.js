import { createStackNavigator } from 'react-navigation'

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import AddTimeTable from '../screens/AddTimeTable';
import AddData from '../screens/AddData';

export default createStackNavigator({
    Splash:{
        screen:Splash,
        navigationOptions:{
            header:() => null,
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            header:() => null,
        }
    },
    AddTimeTable:{
        screen:AddTimeTable,
        navigationOptions:{
            header:() => null,
        }
     
    },
   AddData:{
      screen: AddData,
      navigationOptions: {
         
        header:() =>null
         
    }
},
},);