import React,{ Component } from 'react';
import { View,Image,Text } from 'react-native';
import styles from './styles';

class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image resizeMode="contain" source={ require('./images/logo.png')} style={styles.logoimage}></Image>
                <Text style={styles.text}>Target</Text>
            </View>
        );
    }
}

export default Logo;


