import { Dimensions } from 'react-native';
import  EStyleSheet  from 'react-native-extended-stylesheet';

const imagewidth=Dimensions.get('window').width/2;


export default EStyleSheet.create({
wrapper:{
   display:'flex',
   paddingTop:15,
   paddingBottom:15,
   paddingLeft:imagewidth/3,
   paddingRight:imagewidth/3,
   borderRadius:40,
   borderWidth:1,
   borderColor:'#ffffff',
 
  
},
btnText:{
   fontSize:17,
   width:'100%',
   textAlign:'center'
} 

});