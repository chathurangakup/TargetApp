import React,{ Component} from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

import PropTypes from 'prop-types'

class Splash extends Component{

    componentWillMount(){
        this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Login');
            
       }, 1000);
    }

    render(){
        return(
            <Container>
              <StatusBar translucent={false} barStyle="light-content" />
               <Logo/>
           </Container>
        );
    }
  
}


export default Splash;

  
