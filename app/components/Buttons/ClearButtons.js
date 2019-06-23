import React from 'react';
import {
     View,
    TouchableOpacity,
    Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types'

    const ClearButtons=(props)=>{

        const {onPress,text} = props;
    
        return(
            <TouchableOpacity onPress={onPress} style={styles.container} >
               <View style={styles.wrapper}>
                   <Text style={styles.text}>{ text }</Text>
               </View>
           </TouchableOpacity>
        );
     
    
        }

    ClearButtons.propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func
    };
   



export default ClearButtons;