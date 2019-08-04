import { Dimensions } from 'react-native';
import  EStyleSheet  from 'react-native-extended-stylesheet';

const imagewidth=Dimensions.get('window').width/2;


export default EStyleSheet.create({
    button: {
        backgroundColor: "#4EB151",
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 3,
        marginVertical: 20
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
      },
      text:{
          justifyContent:'center'
      },
      ImageIconStyle:{
          width:70,
          height:50
      },
      FacebookStyle:{
          alignItems:'center',
          justifyContent:'center',
          
      },
      alerm:{
          textAlign:'center',
          paddingTop:10
      },
      targetText:{
          paddingBottom:20
      }

});