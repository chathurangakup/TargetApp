import React from 'react';
import {View,Image,Text,ImageBackground,TouchableHighlight,TextInput} from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles'

const InputButton = (props) =>{

     const {quetionText,isenable=false} = props;

    // const underlayColor=color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
    // const containerStyles=[styles.container]

    // if(editable === false){
    //         containerStyles.push(styles.containerDisable);
    // }

    return(
    <View style={styles.container1} >
    { isenable ?  <Text style={styles.textnames} >{quetionText}</Text> : null}
            <View style={styles.container}>
              <TextInput style={ styles.input } underlineColorAndroid="transparent" {...props}/>
            </View>
     </View>

);

}
InputButton.propTypes = {
   
    quetionText:PropTypes.string,
    isenable:PropTypes.bool,
   
};

export default InputButton;