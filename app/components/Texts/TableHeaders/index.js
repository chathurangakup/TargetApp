import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    View,
    Text
} from 'react-native';

import styles from './styles'


class HeaderText extends Component{
    render(){
       
        return(
            <View style={styles.txtwrapper}>
              <Text style={styles.text}>Time</Text>
              <Text style={styles.text}>Target</Text>
              <Text  style={styles.text}>Alarm</Text>
             
            </View>
        );
    }

}


export default HeaderText;