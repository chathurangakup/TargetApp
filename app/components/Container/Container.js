import React from 'react';
import {View,TouchableWithoutFeedback} from 'react-native';
import styles from './styles'
import PropTypes from 'prop-types';

const Container =({ children })=>(
    <TouchableWithoutFeedback >
      <View style={styles.container}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  
);


Container.propTypes={
    children: PropTypes.any,
}

export default Container;