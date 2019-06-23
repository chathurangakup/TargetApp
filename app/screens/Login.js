import React,{ Component} from 'react';
import { StatusBar,View,Text } from 'react-native';

import { Container, styles } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputButton } from '../components/InputButton';
import { ClearButtons } from '../components/Buttons';
import  EStyleSheet  from 'react-native-extended-stylesheet';

import { updateDetails } from '../actions/userdetails'


const UNAME="Enter your name";
const TARGET="Enter your target";
const Year="Year";
const Month="Month";
const Date="Day";
const Duration="Enter your time duration to achieve target"

 const style=EStyleSheet.create({
    datacomponent: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        width:'20%',
        marginLeft:20,
    },
    yearcomponent:{
      alignItems:'center',
      justifyContent:'center',
        marginRight:'20%'
    },
    text:{
      marginBottom:10,
    }
   
  });

class Login extends Component{

    componentWillMount(){
        this.timeoutHandle = setTimeout(()=>{
                
       }, 1000);
    }

    submitpressed = () =>{
      this.props.navigation.navigate('AddTimeTable');
       console.log(updateDetails());
    }

    handleUnameChange = (text) => {
     
      console.log("ppp"+text);
    }

    render(){
        return(
            <Container>
              <StatusBar translucent={false} barStyle="light-content" />
               <Logo/>
               <InputButton
                 isenable={true}
                 quetionText={UNAME}
                 onChangeText={this.handleUnameChange}
               
               />
              <InputButton
                isenable={true}
                quetionText={TARGET}/>

<Text  style={style.text}> Enter Target finish date</Text>
                <View style={style.datacomponent}>
                   <InputButton
                      keyboardType="numeric"
                      isenable={true}
                      quetionText={Year}/>
                      <View    style={style.yearcomponent}></View>
                      <InputButton
                       style={style.yearcomponent}
                       isenable={true}
                       keyboardType="numeric"
                       quetionText={Month}/>
                        <View    style={style.yearcomponent}></View>
                      <InputButton
                       style={style.yearcomponent}
                       keyboardType="numeric"
                      isenable={true}
                     quetionText={Date}/>
                </View>
           
                <ClearButtons 
                   onPress={this.submitpressed}
                  text="Submit"
                
                />
           </Container>
        );
    }
  
}


export default Login;

  
