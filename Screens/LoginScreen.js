
import React, {Component} from 'react';
import {ImageBackground,StyleSheet, Text, View, Button} from 'react-native';
import { AsyncStorage } from "react-native";
import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{
    // Acuerdense de poner su key de Google Console
    constructor(props){
      super(props);
      this.state={name:''}
  }
    async _signInWithGoogle(){
        
        try {
            const result = await Google.logInAsync({
                androidClientId: "",
                //Aqui va tu clave de API generada en google.
                
                scopes: ['profile', 'email'],
            });
            
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                      console.log(result);
                      let name = result.user.name;
                      let pic= result.user.photoUrl;
                      AsyncStorage.setItem('name',name);  
                      AsyncStorage.setItem('pic',pic);  

                      
                  
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }
            
        } catch (e) {
            return { error: true };
        }
        
    }
    
    render(){
        return (
            
            
                        
                   
               
                <View style={styles.container}>
            <ImageBackground source={require('../assets/login.jpg')} style={styles.image}>
              <View style={styles.button}> 
                <Button 
              title="Iniciar sesión con Google"
              
              onPress={() => this._signInWithGoogle()}
              />
              </View>
            </ImageBackground>
          </View>
            
        );
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
      textAlign: "center",
      
    }
  });
  
