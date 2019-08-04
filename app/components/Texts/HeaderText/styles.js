import { Dimensions } from 'react-native';
import  EStyleSheet  from 'react-native-extended-stylesheet';

const imagewidth=Dimensions.get('window').width/2;


export default EStyleSheet.create({
 txtwrapper:{
   display:'flex',
   paddingTop:10,
},
txtTitle:{
    fontSize:25,
    width:'100%',
    textAlign:'center'
},


});