import { Dimensions } from 'react-native';
import  EStyleSheet  from 'react-native-extended-stylesheet';

const imagewidth=Dimensions.get('window').width/2;


export default EStyleSheet.create({
icon:{
    marginRight:-2,
    marginTop:-2
},
btn:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    width:50,
    height:50,
   
}

});