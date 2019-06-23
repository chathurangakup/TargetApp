import React, { Component } from 'react';
import { ScrollView,View,Button}  from 'react-native'
import { Container } from '../components/Container';
import { ClearButtons } from '../components/Buttons';
import styles from '../components/TextInput/styles';
import EStyleSheet  from 'react-native-extended-stylesheet';

//import PropTypes from 'prop-types';

import Tab2 from '../components/Buttons';


const style=EStyleSheet.create({
    dataAdd:{
       padding:20,
       flex:1
    }
});

 class AddTimeTable extends Component {


    gotoAdddata = () => {
   // console.log(text);
        this.props.navigation.navigate('AddData');
    }

  render() {
  
    return (
        <Container>
              
          <View style={style.dataAdd}>  
        
          <ScrollView horizontal={false} >
             <ClearButtons
                 text="Monday"
                 onPress={this.gotoAdddata()}/>
        
            
            </ScrollView>
          
          </View>
          
         
          
         


        </Container>
    );   
   }
}

export default AddTimeTable;
