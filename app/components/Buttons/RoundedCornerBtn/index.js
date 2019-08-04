import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    TouchableOpacity,
    Text

} from 'react-native';

import styles from './styles'


 class RoundedCorner extends Component{
    render(){
        const {onPress} =this.props;
        return(
            <TouchableOpacity
            onPress={onPress}
            style={styles.wrapper}
           >
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        );
    }

}
RoundedCorner.propTypes={
    onPress:PropTypes.func,
   
}

export default RoundedCorner;