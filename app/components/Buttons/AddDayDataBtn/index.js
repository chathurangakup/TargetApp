import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    TouchableOpacity,

} from 'react-native';

import styles from './styles'


 class AddDayDataBtn extends Component{
    render(){
        const {onPress,
            name,
            backgroundColor,
            color} =this.props;
        return(
            <TouchableOpacity
            onPress={onPress}
            style={[{backgroundColor},styles.btn]}>
                <Icon
                name={name}
                color={color}
                size={32}
                style={styles.icon}
                />
            </TouchableOpacity>
        );
    }

}
AddDayDataBtn.propTypes={
    onPress:PropTypes.func,
    name:PropTypes.string,
    backgroundColor:PropTypes.string,
    color:PropTypes.string
}

export default AddDayDataBtn;