import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native'

const INPUT_HEIGHT=48;
const BORDER_RADIUS=4;
 
export default EStyleSheet.create({
    $buttonBackgroundColorBase:'$white',
    $buttonBackgroundColorModifier:0.1,

    container1:{
        width:'90%',
        flexDirection:'column',
    },
    container:{
        backgroundColor:'$white',
        height:INPUT_HEIGHT,
        borderRadius:BORDER_RADIUS,
        flexDirection:'column',
        marginVertical:11
    },
    input:{
        height:INPUT_HEIGHT,
        flex:1,
        fontSize:18,
        paddingHorizontal:8,
        color:'$inputText'
    },
   
})