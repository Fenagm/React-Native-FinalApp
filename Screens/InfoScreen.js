import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import { AsyncStorage } from "react-native";
import { Image } from 'react-native'



export class InfoScreen extends Component {

    state = {user:'',pic:''}

    displayData = async ()=>{  
        try{  
          let name = await AsyncStorage.getItem('name');
          let pic = await AsyncStorage.getItem('pic');    
            this.setState({user:name, pic:pic});
            <View style={styles.container}>
            <Image 
              source={{ uri: this.state.pic }} 
              style={{width: 100, height: 100, borderRadius: 100/ 2}} 
            />
              <Text>Hola, {this.state.user} !</Text>
                           
                            <StatusBar style="auto" />
                        </View>
            
        }  
        catch(error){  
          alert(error)  
        }  
    }
 
              
            
        
    
    
    render(){
        return(
            this.displayData(),
              <View style={{flex:1, backgroundColor:'#f0ffff'}}>
              <View style={styles.container}>
<Image 
  source={{ uri: this.state.pic }} 
  style={{width: 100, height: 100, borderRadius: 100/ 2}} 
/>
  <Text style={{fontSize:24, fontfamily: "Times New Roman"}}>Hola, {this.state.user} !</Text>

  <Text style={{fontSize:18, fontfamily: "Times New Roman", padding:30}}>Gracias por utilizar nuestra App!</Text>
  <Text style={{fontSize:15, fontfamily: "Times New Roman"}}>Have fun!</Text>
  <Image style={{paddingTop:12}}
                source={require('../assets/profile.gif')}
              />              
              
                <StatusBar style="auto" />
            </View>
            </View>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 0,
      
      alignItems:'center',
      justifyContent: 'center',
      paddingTop:24,

    },
  });