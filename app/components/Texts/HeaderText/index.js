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
        const {lblText} =this.props;
        return(
            <View
            style={styles.txtwrapper}>
              <Text style={styles.txtTitle}>{lblText}</Text>
            </View>
        );
    }

}
HeaderText.propTypes={
    lblText:PropTypes.string
}

export default HeaderText;