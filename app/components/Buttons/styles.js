import { Dimensions } from 'react-native';
import  EStyleSheet  from 'react-native-extended-stylesheet';

const imagewidth=Dimensions.get('window').width/2;
const INPUT_HEIGHT=48;
const BORDER_RADIUS=4;

export default EStyleSheet.create({
container:{
    backgroundColor:'#ff0000',
    width:'90%',
    height:INPUT_HEIGHT,
    borderRadius:BORDER_RADIUS,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:11,
    justifyContent:'center'
},
wrapper:{
        flexDirection:'row',
        alignItems:'center'      
},
icon:{
    width:19,
    marginRight:11
},
text:{
    color:'$white',
    fontSize:18,
    fontWeight:'300',
    paddingVertical:20
}

  });