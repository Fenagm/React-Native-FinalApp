import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./Screens/LoginScreen";
import {HomeScreen} from "./Screens/HomeScreen";
import {InfoScreen} from "./Screens/InfoScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContentScreen} from "./Screens/DrawerContentScreen";

const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false}
}

setLogin(){
    this.setState({isLoggedIn:true});
}

setLogout(){
    this.setState({isLoggedIn:false});
}

 
 render(){

  let screen;
  if(this.state.isLoggedIn===true){
      screen =  <NavigationContainer>
                   <Drawer.Navigator 
                initialRouteName="Buscador"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props} onLogout={()=>this.setLogout()}/>}
            >
                <Drawer.Screen name="Buscador" component={HomeScreen} />
                <Drawer.Screen name="Perfil" component={InfoScreen} />
           
            </Drawer.Navigator>
               </NavigationContainer>
  } else {
      screen = <LoginScreen onLogin={() => this.setLogin()}/>
  }

  return screen;

}

  }
  
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
