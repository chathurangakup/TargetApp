import { Dimensions } from 'react-native';
import  EStyleSheet  from 'react-native-extended-stylesheet';

const imagewidth=Dimensions.get('window').width/2;


export default EStyleSheet.create({


Header:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingLeft:imagewidth/4,
    paddingRight:imagewidth/5,
    paddingTop:10,
    flex:1,
},
footer:{
    flexDirection:'row',
  
    alignItems:'center',
    justifyContent:'center',
    flex:2,
},
wrapper:{
    flex:1
},
body:{
    flex:6
},
addbtn:{
   
}

});