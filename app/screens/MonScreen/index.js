import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    View,
    Text

} from 'react-native';
import TimePicker from "react-native-24h-timepicker";


import styles from './styles';
import AddDayDataBtn from '../../components/Buttons/AddDayDataBtn';
import HeaderText from  '../../components/Texts/HeaderText';
import RoundedCorner from '../../components/Buttons/RoundedCornerBtn';
import TableHeaders from '../../components/Texts/TableHeaders';
import PopupDialog from '../../components/PopUpDialog'



 class MonScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            dialogVisible: false,
            time: "00:00",
            alermtxt: "Unset"
        }
    }

    showDialog = () => {
        this.setState({ dialogVisible: true });
      };

    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };

    onCancel() {
        this.TimePicker.close();
      }
     
      onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
      }

      onPressAlermfunc =()=>{
          if(this.state.alermtxt=="Unset"){
            this.setState({ alermtxt: "Set" });
          }else if(this.state.alermtxt=="Set"){
            this.setState({ alermtxt: "Unset" });
          }
       
      }

    render(){
    
        return(
          <View style={styles.wrapper}>
              <View style={styles.Header}>
              <HeaderText
               lblText="Monday"
              />
                 <AddDayDataBtn 
                 name="plus"
                 backgroundColor="#ffffff"
                 onPress={this.showDialog}/>
                
              </View>
              <View style={styles.body}>
                        <TableHeaders/>
              </View>
          
          <View style={styles.footer}>
               <AddDayDataBtn 
                 name="arrow-left"/>
                 <RoundedCorner/>
                 <AddDayDataBtn 
                 name="arrow-right"/>
          </View>
            <PopupDialog
                onPress={this.showDialog}
                visible={this.state.dialogVisible}
                onPressCan={this.handleCancel}
                onPressTimePic={()=>this.TimePicker.open()}
                time={this.state.time}
                onPressAlerm={this.onPressAlermfunc}
                alermtxt={this.state.alermtxt}
            />
       
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
          </View>


        );
    }

}


export default MonScreen;