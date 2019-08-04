import { Dimensions } from 'react-native';
import  EStyleSheet  from 'react-native-extended-stylesheet';

const imagewidth=Dimensions.get('window').width/2;


export default EStyleSheet.create({
 txtwrapper:{
   display:'flex',
   flexDirection:'row'
},
txtTitle:{
    fontSize:17,
  
},
text:{
   padding:20
   
}


});