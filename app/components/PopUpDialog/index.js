import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image

} from 'react-native';
import Dialog from "react-native-dialog";



import styles from './styles'



 class PopupDialog extends Component{

  

    render(){
        const {onPress,
            visible,
            onPressCan,
            onPressTimePic,
            time,
            onPressAlerm,
            alermtxt,
            backgroundColor,
            color} =this.props;
        return(
            <View>
           
            <Dialog.Container visible={visible}>
              <Dialog.Title>Account delete</Dialog.Title>
              <Dialog.Description>
                Do you want to delete this account? You cannot undo this action.
              </Dialog.Description>
            <View >
          
            <TouchableOpacity
                    onPress={onPressTimePic}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>TIME 24H     ==>      {time}</Text>
                   
                  </TouchableOpacity>
         
          
          
                 
                 
            </View>
            
              <TextInput placeholder='Target' style={styles.targetText}>

              </TextInput>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.FacebookStyle} onPress={onPressAlerm} >
                <Image
                source={require('../../media/images/alarm_clock.png') }
                style={styles.ImageIconStyle}
                />
                </TouchableOpacity>
                <Text style={styles.alerm}>Alerm</Text>
                <Text style={styles.alerm}>  {alermtxt}</Text>
              </View>
          

              <Dialog.Button label="Cancel" onPress={onPressCan} />
              <Dialog.Button label="Delete" onPress={this.handleDelete} />
            </Dialog.Container>
          </View>
        );
    }

}
PopupDialog.propTypes={
    onPress:PropTypes.func,
    onPressCan:PropTypes.func,
    onPressTimePic:PropTypes.func,
    time:PropTypes.string,
    onPressAlerm:PropTypes.func,
    visible:PropTypes.string,
    alermtxt:PropTypes.string,
    backgroundColor:PropTypes.string,
    color:PropTypes.string
}

export default PopupDialog;