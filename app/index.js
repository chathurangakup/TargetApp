import React,{Component} from 'react';

import  EStyleSheet  from 'react-native-extended-stylesheet';

import  Splash  from './screens/Splash';

import Navigator  from './config/routes';
//import { Container } from './components/Container';

EStyleSheet.build({
    $primaryBlue:'#4f7d7A',
    $primaryGreen:'#00BD9D',
    $primaryOrange:'#D57A66',
    $primaryPurple:'#9e7e8f',

    $white:'#ffffff',
    $border:'#e2e2e2',
    $inputText:'#797979',
    $lightGray:'#f0f0f0',
    $darkText:'#343434',
   
});
 
export default () => (
    <Navigator/>
);
   