import { Dimensions } from 'react-native';
import  EStyleSheet  from 'react-native-extended-stylesheet';

const imagewidth=Dimensions.get('window').width/2;

export default EStyleSheet.create({
    container: {
    
      alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#4f7d7A'
    },
    logoimage:{
        width:imagewidth/2,
        height:imagewidth/2,
        
    },
    text:{
        fontWeight:'600',
       fontSize:20,
       letterSpacing:-0.5,
        marginTop:15,
        color:'#000000'
    } 
  });